import { DateTime } from 'luxon';
import type { CalendarEvent } from './ics';

function googleTimestamp(iso: string): string {
	return DateTime.fromISO(iso, { zone: 'utc' }).toFormat("yyyyLLdd'T'HHmmss'Z'");
}

/** Google Calendar "quick add" web-intent URL, prefilled with the meeting time and participant list. */
export function googleCalendarUrl(event: CalendarEvent): string {
	const start = event.startUtcISO;
	const end = event.endUtcISO ?? DateTime.fromISO(start, { zone: 'utc' }).plus({ minutes: 30 }).toISO()!;
	const params = new URLSearchParams({
		action: 'TEMPLATE',
		text: event.title,
		dates: `${googleTimestamp(start)}/${googleTimestamp(end)}`,
		details: event.participantLines.join('\n'),
	});
	return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/** Outlook web calendar "compose" deep link. */
export function outlookCalendarUrl(event: CalendarEvent): string {
	const start = event.startUtcISO;
	const end = event.endUtcISO ?? DateTime.fromISO(start, { zone: 'utc' }).plus({ minutes: 30 }).toISO()!;
	const params = new URLSearchParams({
		path: '/calendar/action/compose',
		rru: 'addevent',
		subject: event.title,
		startdt: start,
		enddt: end,
		body: event.participantLines.join('\n'),
	});
	return `https://outlook.office.com/calendar/0/deeplink/compose?${params.toString()}`;
}
