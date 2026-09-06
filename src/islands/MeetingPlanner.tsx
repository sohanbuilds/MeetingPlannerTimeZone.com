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

const DENSE_LAYOUT_THRESHOLD = 6;

function todayISO(tz: string): string {
	return new Date().toLocaleDateString('en-CA', { timeZone: tz });
}

let nextId = 0;
function makeParticipantId(): string {
	nextId += 1;
	return `p${Date.now()}-${nextId}`;
}

function defaultParticipant(cityId: string): Participant {
	return {
		id: makeParticipantId(),
		cityId,
		mode: 'work',
		workHours: { ...DEFAULT_WORK_HOURS, weekendDays: DEFAULT_WEEKEND_DAYS },
	};
}

const DEFAULT_CITY_IDS = ['new-york', 'london', 'mumbai'];

/** Rendered with client:only — see TwoCityCalculator for why (browser timezone + shared-link state). */
export function MeetingPlanner() {
	const anchorTz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
	const shared = useMemo(() => decodeStateFromUrl(new URL(window.location.href)), []);

	const [participants, setParticipants] = useState<Participant[]>(() =>
		shared && shared.participants.length > 0
			? shared.participants.map((p) => ({ ...p }))
			: DEFAULT_CITY_IDS.map((cityId) => defaultParticipant(cityId)),
	);
	const [anchorDateISO, setAnchorDateISO] = useState(() => shared?.anchorDateISO || todayISO(anchorTz));
	const [sliderBounds, setSliderBounds] = useState<SliderBounds>(() => shared?.sliderBounds ?? DEFAULT_SLIDER_BOUNDS);
	const [selectedSlot, setSelectedSlot] = useState<TimeSlot | undefined>(undefined);

	const slots = useMemo(
		() => buildDaySlots({ participants, anchorDateISO, anchorTz, sliderBounds }),
		[participants, anchorDateISO, anchorTz, sliderBounds],
	);

	const sharedState: SharedState = {
		participants,
		anchorDateISO,
		anchorTz,
		sliderBounds,
		selectedInstant: selectedSlot?.utcInstant,
	};

	function updateParticipant(id: string, updated: Participant) {
		setParticipants((prev) => prev.map((p) => (p.id === id ? updated : p)));
	}

	function removeParticipant(id: string) {
		setParticipants((prev) => prev.filter((p) => p.id !== id));
	}

	function addParticipant() {
		const usedCityIds = new Set(participants.map((p) => p.cityId));
		const fallback = DEFAULT_CITY_IDS.find((id) => !usedCityIds.has(id)) ?? 'new-york';
		setParticipants((prev) => [...prev, defaultParticipant(fallback)]);
	}

	const isDense = participants.length > DENSE_LAYOUT_THRESHOLD;

	return (
		<div class="flex flex-col gap-8">
			<div>
				<div class={`grid grid-cols-1 gap-4 ${isDense ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
					{participants.map((participant) => (
						<ParticipantEditor
							key={participant.id}
							participant={participant}
							onChange={(updated) => updateParticipant(participant.id, updated)}
							onRemove={participants.length > 1 ? () => removeParticipant(participant.id) : undefined}
						/>
					))}
				</div>
				<button
					type="button"
					onClick={addParticipant}
					class="mt-4 w-full rounded-md border border-dashed border-hairline px-3 py-3 text-button-md text-body transition-colors hover:border-link hover:text-link sm:w-auto"
				>
					+ Add another participant
				</button>
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

				<h2 class="mb-3 text-heading-md text-ink">Best times for everyone</h2>
				<ResultsList
					slots={slots}
					participants={participants}
					selectedInstant={selectedSlot?.utcInstant}
					onSelect={setSelectedSlot}
					limit={8}
				/>
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
