import { formatHHMM } from '../time/convert';
import { getCityById } from '../cities/lookup';
import type { Participant, TimeSlot } from '../time/types';
import type { CalendarEvent } from './ics';

/** Builds the shared calendar-event representation (title + per-participant lines) for a time slot. */
export function buildCalendarEvent(participants: Participant[], slot: TimeSlot): CalendarEvent {
	const names = participants.map((p) => p.label ?? getCityById(p.cityId)?.name ?? p.cityId);
	const participantLines = slot.perParticipant.map((info) => {
		const participant = participants.find((p) => p.id === info.participantId);
		const name = participant?.label ?? getCityById(participant?.cityId ?? '')?.name ?? info.participantId;
		const city = getCityById(participant?.cityId ?? '');
		const dayNote = info.isNextDay ? ' (next day)' : info.isPrevDay ? ' (previous day)' : '';
		return `${name} (${city?.name ?? ''}): ${formatHHMM(info.localTime)}${dayNote}`;
	});
	return {
		title: `Meeting: ${names.join(', ')}`,
		startUtcISO: slot.utcInstant,
		participantLines,
	};
}
