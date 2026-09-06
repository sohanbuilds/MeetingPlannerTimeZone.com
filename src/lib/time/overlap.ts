import type { DateTime } from 'luxon';
import { scoreParticipantAt } from './comfortScore';
import { dayBoundaryInfo, formatLocalTime, toZone } from './convert';
import type { City } from '../cities/types';
import type { ComfortTier, Participant, SliderBounds, TimeSlot } from './types';

const TIER_RANK: Record<ComfortTier, number> = { poor: 0, fair: 1, good: 2, excellent: 3 };

function worstTier(tiers: ComfortTier[]): ComfortTier {
	return tiers.reduce((worst, t) => (TIER_RANK[t] < TIER_RANK[worst] ? t : worst), 'excellent' as ComfortTier);
}

/**
 * Aggregates per-participant tiers into one slot-level tier. A strict "worst participant wins"
 * rule sounds fair but falls apart for 3+ widely-spread participants: with cities spanning ~10
 * hours (e.g. New York + London + Mumbai), there is often no instant where literally everyone
 * is comfortable, so every single slot would rate "Poor" with zero differentiation — exactly
 * the "ranking shows poor for everything" failure mode. Instead: if everyone is at least
 * workable, use the worst tier among them (unchanged); if a majority are comfortable despite
 * one or two stragglers, call the slot a workable "Fair" compromise rather than a flat "Poor".
 */
function aggregateTier(tiers: ComfortTier[]): ComfortTier {
	const nonPoor = tiers.filter((t) => t !== 'poor');
	if (nonPoor.length === tiers.length) return worstTier(tiers);
	const comfortableFraction = nonPoor.length / tiers.length;
	return comfortableFraction >= 0.5 ? 'fair' : 'poor';
}

/**
 * Computes one TimeSlot for a single UTC instant across all participants.
 * Each participant's weekend check uses their own local calendar date, so an instant
 * that's Saturday in Tokyo but still Friday in Los Angeles is judged correctly for both.
 */
export function evaluateInstant(
	utcInstant: DateTime,
	participants: Participant[],
	citiesById: Map<string, City>,
	anchorDateISO: string,
	sliderBounds: SliderBounds,
): TimeSlot {
	const perParticipant = participants.map((participant) => {
		const city = citiesById.get(participant.cityId);
		if (!city) {
			throw new Error(`Unknown cityId "${participant.cityId}" for participant "${participant.id}"`);
		}
		const localDt = toZone(utcInstant, city.tz);
		const { tier, score } = scoreParticipantAt(localDt, participant, sliderBounds);
		const boundary = dayBoundaryInfo(localDt, anchorDateISO);
		return {
			participantId: participant.id,
			localTime: formatLocalTime(localDt),
			localDate: boundary.localDate,
			isNextDay: boundary.isNextDay,
			isPrevDay: boundary.isPrevDay,
			tier,
			score,
		};
	});

	const comfortableCount = perParticipant.filter((p) => p.tier !== 'poor').length;
	const tier = aggregateTier(perParticipant.map((p) => p.tier));
	const score = perParticipant.reduce((sum, p) => sum + p.score, 0) / Math.max(1, perParticipant.length);

	return {
		utcInstant: utcInstant.toUTC().toISO() ?? '',
		perParticipant,
		comfortableCount,
		tier,
		score,
	};
}

/**
 * Ranks candidate slots for "best time for the largest number of people": maximize headcount
 * in comfortable (non-poor) hours first, then overall tier quality, then score, then earliest.
 * Never returns an empty list — if nothing is comfortable for everyone, the least-bad slots
 * still surface instead of a blank result.
 */
export function rankSlots(slots: TimeSlot[]): TimeSlot[] {
	return [...slots].sort((a, b) => {
		if (a.comfortableCount !== b.comfortableCount) return b.comfortableCount - a.comfortableCount;
		if (TIER_RANK[a.tier] !== TIER_RANK[b.tier]) return TIER_RANK[b.tier] - TIER_RANK[a.tier];
		if (a.score !== b.score) return b.score - a.score;
		return a.utcInstant.localeCompare(b.utcInstant);
	});
}
