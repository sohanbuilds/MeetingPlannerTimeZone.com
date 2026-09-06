import { useMemo, useState } from 'preact/hooks';
import { ParticipantEditor } from './ParticipantEditor';
import { RangeSlider } from './RangeSlider';
import { ResultsList } from './ResultsList';
import { ShareAndCalendar } from './ShareAndCalendar';
import { buildDaySlots } from '../lib/time/slots';
import { DEFAULT_SLIDER_BOUNDS, DEFAULT_WEEKEND_DAYS, DEFAULT_WORK_HOURS } from '../lib/time/types';
import type { Participant, SliderBounds, TimeSlot } from '../lib/time/types';
import { decodeStateFromUrl } from '../lib/url/stateCodec';
import type { SharedState } from '../lib/url/stateCodec';

function todayISO(tz: string): string {
	return new Date().toLocaleDateString('en-CA', { timeZone: tz }); // en-CA gives yyyy-MM-dd
}

function defaultParticipant(id: string, cityId: string): Participant {
	return {
		id,
		cityId,
		mode: 'work',
		workHours: { ...DEFAULT_WORK_HOURS, weekendDays: DEFAULT_WEEKEND_DAYS },
	};
}

interface TwoCityCalculatorProps {
	initialFromCityId?: string;
	initialToCityId?: string;
}

/**
 * Rendered with client:only — the initial state is inherently browser-dependent (the
 * visitor's own timezone, and any shared-link query param), so there is no meaningful
 * server-rendered version to hydrate against. Reading the URL directly in the useState
 * initializers means the shared-link case is correct on the very first paint, with no
 * separate post-mount "hydrating" flash.
 */
export function TwoCityCalculator({ initialFromCityId = 'new-york', initialToCityId = 'london' }: TwoCityCalculatorProps) {
	const anchorTz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
	const shared = useMemo(() => decodeStateFromUrl(new URL(window.location.href)), []);
	const sharedHasTwo = !!shared && shared.participants.length >= 2;

	const [from, setFrom] = useState<Participant>(() =>
		sharedHasTwo ? { ...shared!.participants[0] } : defaultParticipant('from', initialFromCityId),
	);
	const [to, setTo] = useState<Participant>(() =>
		sharedHasTwo ? { ...shared!.participants[1] } : defaultParticipant('to', initialToCityId),
	);
	const [anchorDateISO, setAnchorDateISO] = useState(() => shared?.anchorDateISO || todayISO(anchorTz));
	const [sliderBounds, setSliderBounds] = useState<SliderBounds>(() => shared?.sliderBounds ?? DEFAULT_SLIDER_BOUNDS);
	const [selectedSlot, setSelectedSlot] = useState<TimeSlot | undefined>(undefined);

	const participants = [from, to];
	const slots = useMemo(
		() => buildDaySlots({ participants, anchorDateISO, anchorTz, sliderBounds }),
		[from, to, anchorDateISO, anchorTz, sliderBounds],
	);

	const sharedState: SharedState = {
		participants,
		anchorDateISO,
		anchorTz,
		sliderBounds,
		selectedInstant: selectedSlot?.utcInstant,
	};

	return (
		<div class="flex flex-col gap-8">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<ParticipantEditor participant={from} onChange={setFrom} />
				<ParticipantEditor participant={to} onChange={setTo} />
			</div>

			<div class="card">
				<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<label class="mb-1 block text-label-sm text-body">Date</label>
						<input
							type="date"
							class="w-full rounded-sm border border-hairline bg-canvas-elevated px-3 py-2 text-body-md text-ink transition-colors focus:border-link"
							value={anchorDateISO}
							onInput={(e) => setAnchorDateISO((e.target as HTMLInputElement).value)}
						/>
					</div>
					<RangeSlider bounds={sliderBounds} onChange={setSliderBounds} />
				</div>

				<h2 class="mb-3 text-heading-md text-ink">Suggested times</h2>
				<ResultsList slots={slots} participants={participants} selectedInstant={selectedSlot?.utcInstant} onSelect={setSelectedSlot} />
			</div>

			<div class="card">
				<h2 class="mb-3 text-heading-md text-ink">Share or add to your calendar</h2>
				<p class="mb-3 text-body-sm text-mute">
					{selectedSlot ? 'Pick a calendar to add the selected time to.' : 'Select a time above to enable calendar export.'}
				</p>
				<ShareAndCalendar state={sharedState} selectedSlot={selectedSlot} participants={participants} />
			</div>
		</div>
	);
}
