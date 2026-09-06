import { useRef } from 'preact/hooks';
import type { SliderBounds } from '../lib/time/types';

function minutesToLabel(minutes: number): string {
	const h24 = Math.floor(minutes / 60) % 24;
	const m = minutes % 60;
	const period = h24 < 12 ? 'AM' : 'PM';
	const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
	return `${h12}:${m.toString().padStart(2, '0')} ${period}`;
}

interface RangeSliderProps {
	bounds: SliderBounds;
	onChange: (bounds: SliderBounds) => void;
	min?: number;
	max?: number;
	step?: number;
}

/**
 * The "Best-Time Slider" — a self-contained dual-handle slider built from plain divs and
 * pointer events, not two overlaid native <input type="range"> elements. Overlaying native
 * range inputs is a common technique but is fragile across browsers (each renders its own
 * track/thumb chrome that's awkward to fully suppress), so this avoids that failure mode
 * entirely by never using a native range input in the first place.
 */
export function RangeSlider({ bounds, onChange, min = 0, max = 24 * 60, step = 30 }: RangeSliderProps) {
	const trackRef = useRef<HTMLDivElement>(null);
	const minGap = 60;

	function valueFromClientX(clientX: number): number {
		const track = trackRef.current;
		if (!track) return min;
		const rect = track.getBoundingClientRect();
		const fraction = rect.width === 0 ? 0 : Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
		const raw = min + fraction * (max - min);
		return Math.min(max, Math.max(min, Math.round(raw / step) * step));
	}

	function handleDrag(which: 'start' | 'end', clientX: number) {
		const value = valueFromClientX(clientX);
		if (which === 'start') {
			onChange({ ...bounds, startMinute: Math.min(value, bounds.endMinute - minGap) });
		} else {
			onChange({ ...bounds, endMinute: Math.max(value, bounds.startMinute + minGap) });
		}
	}

	function handleKeyDown(which: 'start' | 'end', e: KeyboardEvent) {
		const current = which === 'start' ? bounds.startMinute : bounds.endMinute;
		let next: number | null = null;
		if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = current - step;
		else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = current + step;
		else if (e.key === 'Home') next = which === 'start' ? min : bounds.startMinute + minGap;
		else if (e.key === 'End') next = which === 'end' ? max : bounds.endMinute - minGap;
		if (next === null) return;
		e.preventDefault();
		if (which === 'start') {
			onChange({ ...bounds, startMinute: Math.min(Math.max(next, min), bounds.endMinute - minGap) });
		} else {
			onChange({ ...bounds, endMinute: Math.max(Math.min(next, max), bounds.startMinute + minGap) });
		}
	}

	const startPct = ((bounds.startMinute - min) / (max - min)) * 100;
	const endPct = ((bounds.endMinute - min) / (max - min)) * 100;

	function Thumb({ which }: { which: 'start' | 'end' }) {
		const pct = which === 'start' ? startPct : endPct;
		const value = which === 'start' ? bounds.startMinute : bounds.endMinute;
		return (
			<div
				role="slider"
				tabIndex={0}
				aria-label={which === 'start' ? 'Nobody before' : 'Nobody after'}
				aria-valuemin={min}
				aria-valuemax={max}
				aria-valuenow={value}
				aria-valuetext={minutesToLabel(value)}
				class="group absolute top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-canvas-elevated bg-ink shadow-[0_1px_3px_rgba(0,0,0,0.3)] transition-transform cursor-grab touch-none hover:scale-110 active:scale-95 active:cursor-grabbing"
				style={{ left: `${pct}%` }}
				onPointerDown={(e) => {
					(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
				}}
				onPointerMove={(e) => {
					if (e.buttons !== 1) return;
					handleDrag(which, e.clientX);
				}}
				onKeyDown={(e) => handleKeyDown(which, e)}
			>
				<span class="pointer-events-none absolute -top-8 rounded-sm bg-ink px-2 py-1 text-body-sm text-on-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 whitespace-nowrap">
					{minutesToLabel(value)}
				</span>
			</div>
		);
	}

	return (
		<div>
			<div class="mb-3 flex items-center justify-between">
				<label class="text-label-sm text-body">Best-Time slider</label>
				<span class="rounded-full bg-link-soft px-3 py-1 text-body-sm font-medium text-link-deep">
					{minutesToLabel(bounds.startMinute)} – {minutesToLabel(bounds.endMinute)}
				</span>
			</div>
			<div ref={trackRef} class="relative h-5 py-1.5">
				<div class="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-hairline" />
				<div
					class="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-link"
					style={{ left: `${startPct}%`, width: `${Math.max(0, endPct - startPct)}%` }}
				/>
				<Thumb which="start" />
				<Thumb which="end" />
			</div>
			<p class="mt-2 text-body-sm text-faint">
				Nobody before {minutesToLabel(bounds.startMinute)} or after {minutesToLabel(bounds.endMinute)}.
			</p>
		</div>
	);
}
