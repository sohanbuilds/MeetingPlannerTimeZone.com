import { deflateSync, inflateSync, strFromU8, strToU8 } from 'fflate';
import { getCityById } from '../cities/lookup';
import type { MeetingMode, SliderBounds, WorkHoursWindow } from '../time/types';
import { DEFAULT_SLIDER_BOUNDS } from '../time/types';

export interface SharedParticipant {
	id: string;
	label?: string;
	cityId: string;
	workHours: WorkHoursWindow;
	mode: MeetingMode;
}

export interface SharedState {
	participants: SharedParticipant[];
	anchorDateISO: string;
	anchorTz: string;
	sliderBounds: SliderBounds;
	/** The chosen meeting time, if the user picked one before sharing (ISO UTC). */
	selectedInstant?: string;
}

const QUERY_PARAM = 's';

function toBase64Url(bytes: Uint8Array): string {
	let binary = '';
	for (const b of bytes) binary += String.fromCharCode(b);
	return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(value: string): Uint8Array {
	const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
	const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
	const binary = atob(padded);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes;
}

/** Encodes full selection state into a single compact, URL-safe query param value. */
export function encodeState(state: SharedState): string {
	const json = JSON.stringify(state);
	const compressed = deflateSync(strToU8(json), { level: 9 });
	return toBase64Url(compressed);
}

/** Builds a full shareable URL for the given page + state. */
export function buildShareUrl(baseUrl: string, state: SharedState): string {
	const url = new URL(baseUrl);
	url.searchParams.set(QUERY_PARAM, encodeState(state));
	return url.toString();
}

/**
 * Decodes state from a URL's query params. Never throws on a stale/malformed link —
 * returns null so callers can fall back to defaults instead of crashing on an old share link.
 */
export function decodeStateFromUrl(url: URL): SharedState | null {
	const raw = url.searchParams.get(QUERY_PARAM);
	if (!raw) return null;
	try {
		const bytes = inflateSync(fromBase64Url(raw));
		const parsed = JSON.parse(strFromU8(bytes)) as SharedState;
		return sanitizeState(parsed);
	} catch {
		return null;
	}
}

/** Drops participants referencing city ids no longer in the dataset instead of failing outright. */
function sanitizeState(state: SharedState): SharedState {
	const participants = (state.participants ?? []).filter((p) => getCityById(p.cityId) !== undefined);
	return {
		participants,
		anchorDateISO: state.anchorDateISO,
		anchorTz: state.anchorTz,
		sliderBounds: state.sliderBounds ?? DEFAULT_SLIDER_BOUNDS,
		selectedInstant: state.selectedInstant,
	};
}
