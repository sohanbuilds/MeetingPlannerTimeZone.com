import { buildUtcGridForAnchorDay } from './convert';
import { evaluateInstant, rankSlots } from './overlap';
import { citiesById } from '../cities/lookup';
import type { Participant, SliderBounds, TimeSlot } from './types';
import { DEFAULT_SLIDER_BOUNDS } from './types';

export interface BuildDaySlotsOptions {
	participants: Participant[];
	/** "yyyy-MM-dd" — the calendar date being planned, interpreted in `anchorTz`. */
	anchorDateISO: string;
	/** IANA timezone the anchor date is interpreted in (typically the visitor's own timezone). */
	anchorTz: string;
	sliderBounds?: SliderBounds;
	stepMinutes?: number;
}

/**
 * Builds and ranks every candidate meeting slot across one anchor day.
 * This is the single entry point every tool page (flagship planner, 2-city calculator,
 * city-pair pages) should call — the ranking/scoring logic lives in exactly one place.
 */
export function buildDaySlots(options: BuildDaySlotsOptions): TimeSlot[] {
	const { participants, anchorDateISO, anchorTz, sliderBounds = DEFAULT_SLIDER_BOUNDS, stepMinutes = 15 } = options;
	const grid = buildUtcGridForAnchorDay(anchorDateISO, anchorTz, stepMinutes);
	const cities = citiesById();
	const slots = grid.map((instant) => evaluateInstant(instant, participants, cities, anchorDateISO, sliderBounds));
	return rankSlots(slots);
}

/** Convenience: the single best-ranked slot, or undefined if there are no participants. */
export function bestSlot(options: BuildDaySlotsOptions): TimeSlot | undefined {
	return buildDaySlots(options)[0];
}
