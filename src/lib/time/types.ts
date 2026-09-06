export type MeetingMode = 'work' | 'personal';

export type ComfortTier = 'excellent' | 'good' | 'fair' | 'poor';

/** ISO weekday numbers: Monday = 1 ... Sunday = 7 */
export type IsoWeekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface WorkHoursWindow {
	/** Minutes from local midnight, 0-1439 */
	startMinute: number;
	/** Minutes from local midnight, 0-1439 */
	endMinute: number;
	/** ISO weekdays this participant treats as non-working (defaults to [6, 7], not hardcoded globally) */
	weekendDays: IsoWeekday[];
}

export interface Participant {
	id: string;
	/** Optional display name, e.g. "Priya". Falls back to the city name when absent. */
	label?: string;
	cityId: string;
	workHours: WorkHoursWindow;
	mode: MeetingMode;
}

/** Acceptable-hours bounds shared across all participants (the "Best-Time Slider"). Minutes from local midnight. */
export interface SliderBounds {
	startMinute: number;
	endMinute: number;
}

export interface ParticipantSlotInfo {
	participantId: string;
	/** "HH:mm" in the participant's local time */
	localTime: string;
	/** "yyyy-MM-dd" in the participant's local time */
	localDate: string;
	/** True if this participant's local calendar date is after the anchor date */
	isNextDay: boolean;
	/** True if this participant's local calendar date is before the anchor date */
	isPrevDay: boolean;
	tier: ComfortTier;
	/** 0-100, continuous score used for tie-breaking within a tier */
	score: number;
}

export interface TimeSlot {
	/** ISO 8601 UTC instant, e.g. "2026-09-10T14:30:00.000Z" */
	utcInstant: string;
	perParticipant: ParticipantSlotInfo[];
	/** Count of participants whose tier is not "poor" at this instant */
	comfortableCount: number;
	/** The worst (minimum) tier across all participants — one miserable participant caps the whole slot */
	tier: ComfortTier;
	/** Average of per-participant scores, used only to break ties within the same tier/comfortableCount */
	score: number;
}

export const DEFAULT_WORK_HOURS: Omit<WorkHoursWindow, 'weekendDays'> = {
	startMinute: 9 * 60,
	endMinute: 18 * 60,
};

export const DEFAULT_WEEKEND_DAYS: IsoWeekday[] = [6, 7];

export const DEFAULT_SLIDER_BOUNDS: SliderBounds = {
	startMinute: 7 * 60,
	endMinute: 22 * 60,
};
