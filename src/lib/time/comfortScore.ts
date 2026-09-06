import type { DateTime } from 'luxon';
import { isoWeekday, minuteOfDay } from './convert';
import type { ComfortTier, Participant, SliderBounds } from './types';

const WORK_EDGE_BUFFER_MINUTES = 60;
const WORK_OUTER_BUFFER_MINUTES = 60;
/** A typical local lunch window — meetings scheduled here are workable but not ideal. */
const LUNCH_WINDOW = { startMinute: 12 * 60, endMinute: 13 * 60 };
/** On someone's weekend, these hours are still plausible for a quick call. Outside them, poor. */
const REASONABLE_WEEKEND_WINDOW = { startMinute: 10 * 60, endMinute: 18 * 60 };
/** Personal-mode "comfortable core" — waking hours most people are happy to talk, 9am-9pm. */
const PERSONAL_CORE = { startMinute: 9 * 60, endMinute: 21 * 60 };

function clamp(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, value));
}

function inWindow(minute: number, win: { startMinute: number; endMinute: number }): boolean {
	return minute >= win.startMinute && minute <= win.endMinute;
}

/** Score rises from `edgeScore` at the range's edges to `centerScore` at its midpoint. */
function scoreInsideRange(minute: number, start: number, end: number, edgeScore: number, centerScore: number): number {
	const mid = (start + end) / 2;
	const halfSpan = Math.max(1, (end - start) / 2);
	const distanceFromCenter = Math.abs(minute - mid);
	const closeness = 1 - clamp(distanceFromCenter / halfSpan, 0, 1);
	return edgeScore + closeness * (centerScore - edgeScore);
}

/** Score falls from `edgeScore` right outside the range down to `farScore` at `maxDistance` minutes away. */
function scoreOutsideRange(distanceFromEdge: number, maxDistance: number, edgeScore: number, farScore: number): number {
	const fraction = clamp(distanceFromEdge / maxDistance, 0, 1);
	return edgeScore - fraction * (edgeScore - farScore);
}

export interface ParticipantScoreResult {
	tier: ComfortTier;
	score: number;
}

/**
 * Scores a single participant's comfort at one local instant, on a 4-tier scale
 * (Excellent / Good / Fair / Poor) that accounts for:
 *  - the shared Best-Time slider bounds (a hard cutoff for everyone),
 *  - the difference between core office hours and the edges of the work day,
 *  - a local lunch window (still "in office hours" but not an ideal meeting time),
 *  - weekends being graded rather than an automatic zero — a reasonable weekend
 *    afternoon is "Fair", not indistinguishable from 3am on a Tuesday.
 */
export function scoreParticipantAt(localDt: DateTime, participant: Participant, sliderBounds: SliderBounds): ParticipantScoreResult {
	const minute = minuteOfDay(localDt);
	const weekday = isoWeekday(localDt);

	if (minute < sliderBounds.startMinute || minute > sliderBounds.endMinute) {
		const distance = minute < sliderBounds.startMinute ? sliderBounds.startMinute - minute : minute - sliderBounds.endMinute;
		return { tier: 'poor', score: scoreOutsideRange(distance, 180, 25, 0) };
	}

	if (participant.mode === 'work') {
		const isWeekend = participant.workHours.weekendDays.includes(weekday as 1 | 2 | 3 | 4 | 5 | 6 | 7);
		if (isWeekend) {
			if (inWindow(minute, REASONABLE_WEEKEND_WINDOW)) {
				return { tier: 'fair', score: scoreInsideRange(minute, REASONABLE_WEEKEND_WINDOW.startMinute, REASONABLE_WEEKEND_WINDOW.endMinute, 35, 48) };
			}
			const distance =
				minute < REASONABLE_WEEKEND_WINDOW.startMinute
					? REASONABLE_WEEKEND_WINDOW.startMinute - minute
					: minute - REASONABLE_WEEKEND_WINDOW.endMinute;
			return { tier: 'poor', score: scoreOutsideRange(distance, 180, 30, 0) };
		}

		const { startMinute, endMinute } = participant.workHours;
		if (minute >= startMinute && minute <= endMinute) {
			if (inWindow(minute, LUNCH_WINDOW)) {
				return { tier: 'fair', score: scoreInsideRange(minute, LUNCH_WINDOW.startMinute, LUNCH_WINDOW.endMinute, 55, 62) };
			}
			const distanceFromEdge = Math.min(minute - startMinute, endMinute - minute);
			if (distanceFromEdge < WORK_EDGE_BUFFER_MINUTES) {
				return { tier: 'good', score: 75 + (distanceFromEdge / WORK_EDGE_BUFFER_MINUTES) * 14 };
			}
			return { tier: 'excellent', score: scoreInsideRange(minute, startMinute, endMinute, 90, 100) };
		}

		const distance = minute < startMinute ? startMinute - minute : minute - endMinute;
		if (distance <= WORK_OUTER_BUFFER_MINUTES) {
			return { tier: 'fair', score: scoreOutsideRange(distance, WORK_OUTER_BUFFER_MINUTES, 64, 50) };
		}
		return { tier: 'poor', score: scoreOutsideRange(distance - WORK_OUTER_BUFFER_MINUTES, 180, 45, 0) };
	}

	// Personal mode: soft decay from the comfortable core, no weekend penalty.
	const core = {
		startMinute: Math.max(PERSONAL_CORE.startMinute, sliderBounds.startMinute),
		endMinute: Math.min(PERSONAL_CORE.endMinute, sliderBounds.endMinute),
	};
	if (inWindow(minute, core)) {
		return { tier: 'excellent', score: scoreInsideRange(minute, core.startMinute, core.endMinute, 90, 100) };
	}

	const distance = minute < core.startMinute ? core.startMinute - minute : minute - core.endMinute;
	const maxDistance = minute < core.startMinute ? core.startMinute - sliderBounds.startMinute : sliderBounds.endMinute - core.endMinute;
	const nearFraction = clamp(distance / Math.max(1, maxDistance), 0, 1);
	if (nearFraction <= 0.5) {
		return { tier: 'good', score: scoreOutsideRange(distance, Math.max(1, maxDistance) * 0.5, 89, 70) };
	}
	return { tier: 'fair', score: scoreOutsideRange(distance - Math.max(1, maxDistance) * 0.5, Math.max(1, maxDistance) * 0.5, 69, 50) };
}
