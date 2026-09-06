import { DateTime } from 'luxon';

export interface CalendarEvent {
	title: string;
	/** ISO UTC instant */
	startUtcISO: string;
	/** ISO UTC instant. Defaults to start + 30 minutes. */
	endUtcISO?: string;
	/** Per-participant name + local time lines, e.g. "Priya (Mumbai): 8:00 PM" */
	participantLines: string[];
}

function icsTimestamp(iso: string): string {
	return DateTime.fromISO(iso, { zone: 'utc' }).toFormat("yyyyLLdd'T'HHmmss'Z'");
}

function escapeIcsText(text: string): string {
	return text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

/**
 * Builds a single-event .ics file. DTSTART/DTEND are encoded in UTC ("...Z"), which every
 * calendar client renders correctly in the recipient's own local zone — no VTIMEZONE block
 * needed. The description lists each participant's name + local time (addresses the
 * competitor's "no attendee names" gap).
 */
export function buildIcs(event: CalendarEvent): string {
	const start = event.startUtcISO;
	const end = event.endUtcISO ?? DateTime.fromISO(start, { zone: 'utc' }).plus({ minutes: 30 }).toISO()!;
	const description = escapeIcsText(event.participantLines.join('\\n'));
	const uid = `${DateTime.now().toMillis()}-${Math.random().toString(36).slice(2)}@meetingplannertimezone.com`;

	const lines = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'PRODID:-//MeetingPlannerTimeZone.com//Meeting Planner//EN',
		'CALSCALE:GREGORIAN',
		'BEGIN:VEVENT',
		`UID:${uid}`,
		`DTSTAMP:${icsTimestamp(DateTime.utc().toISO()!)}`,
		`DTSTART:${icsTimestamp(start)}`,
		`DTEND:${icsTimestamp(end)}`,
		`SUMMARY:${escapeIcsText(event.title)}`,
		`DESCRIPTION:${description}`,
		'END:VEVENT',
		'END:VCALENDAR',
	];
	return lines.join('\r\n');
}

/** Triggers a browser download of the .ics file. Client-side only. */
export function downloadIcs(event: CalendarEvent, filename = 'meeting.ics'): void {
	const blob = new Blob([buildIcs(event)], { type: 'text/calendar;charset=utf-8' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
