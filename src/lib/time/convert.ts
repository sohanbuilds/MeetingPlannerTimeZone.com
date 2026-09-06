import { DateTime } from 'luxon';

/**
 * Renders a UTC instant in a given IANA timezone.
 * Always derive local time from the canonical UTC instant — never cache a resolved
 * local-time string or do raw offset arithmetic, since offsets change across DST
 * transitions and 30/45-minute-offset zones (India +5:30, Nepal +5:45, ...).
 */
export function toZone(utcInstant: DateTime | string, tz: string): DateTime {
	const dt = typeof utcInstant === 'string' ? DateTime.fromISO(utcInstant, { zone: 'utc' }) : utcInstant;
	return dt.setZone(tz);
}

/** Minutes since local midnight (0-1439) for a zoned DateTime. */
export function minuteOfDay(dt: DateTime): number {
	return dt.hour * 60 + dt.minute;
}

/** ISO weekday (1=Monday ... 7=Sunday) for a zoned DateTime. */
export function isoWeekday(dt: DateTime): number {
	return dt.weekday;
}

export interface DayBoundaryInfo {
	localDate: string;
	isNextDay: boolean;
	isPrevDay: boolean;
}

/**
 * Compares a participant's local calendar date against an anchor date (the date the
 * user picked, interpreted as a plain calendar date, not tied to any one timezone).
 * This is the concrete fix for date-boundary display: each participant renders their
 * own "+1 day" / "-1 day" badge relative to the anchor, instead of assuming a shared day.
 */
export function dayBoundaryInfo(localDt: DateTime, anchorDateISO: string): DayBoundaryInfo {
	const localDate = localDt.toISODate() ?? '';
	const anchor = DateTime.fromISO(anchorDateISO);
	const diffDays = Math.round(localDt.startOf('day').diff(anchor.startOf('day'), 'days').days);
	return {
		localDate,
		isNextDay: diffDays > 0,
		isPrevDay: diffDays < 0,
	};
}

/**
 * Builds the UTC instant grid for one "anchor day" — the calendar date the user picked,
 * interpreted in the anchor timezone (e.g. the visitor's own browser timezone). Iterating
 * a fixed 24h window in the anchor zone (rather than per-participant days) gives every
 * participant's local time a well-defined, consistent isNextDay/isPrevDay relative to it.
 */
export function buildUtcGridForAnchorDay(
	anchorDateISO: string,
	anchorTz: string,
	stepMinutes = 15,
): DateTime[] {
	const start = DateTime.fromISO(anchorDateISO, { zone: anchorTz }).startOf('day');
	const end = start.plus({ days: 1 });
	const grid: DateTime[] = [];
	let cursor = start;
	while (cursor < end) {
		grid.push(cursor.toUTC());
		cursor = cursor.plus({ minutes: stepMinutes });
	}
	return grid;
}

/** Formats a zoned DateTime as "HH:mm" (24h) for internal comparisons and storage. */
export function formatLocalTime(dt: DateTime): string {
	return dt.toFormat('HH:mm');
}

/** Formats a zoned DateTime for display, e.g. "9:30 AM". */
export function formatDisplayTime(dt: DateTime): string {
	return dt.toFormat('h:mm a');
}

/** Formats an "HH:mm" (24h) string for display, e.g. "09:30" -> "9:30 AM". */
export function formatHHMM(hhmm: string): string {
	const [hStr, mStr] = hhmm.split(':');
	const h24 = Number(hStr);
	const period = h24 < 12 ? 'AM' : 'PM';
	const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
	return `${h12}:${mStr} ${period}`;
}
