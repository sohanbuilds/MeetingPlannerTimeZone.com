import { CityPicker } from './CityPicker';
import { getCityById } from '../lib/cities/lookup';
import type { MeetingMode, Participant } from '../lib/time/types';

function minuteOptions() {
	const options: { value: number; label: string }[] = [];
	for (let m = 0; m < 24 * 60; m += 30) {
		const h24 = Math.floor(m / 60);
		const min = m % 60;
		const period = h24 < 12 ? 'AM' : 'PM';
		const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
		options.push({ value: m, label: `${h12}:${min.toString().padStart(2, '0')} ${period}` });
	}
	return options;
}

const MINUTE_OPTIONS = minuteOptions();

interface ParticipantEditorProps {
	participant: Participant;
	onChange: (participant: Participant) => void;
	onRemove?: () => void;
}

export function ParticipantEditor({ participant, onChange, onRemove }: ParticipantEditorProps) {
	const city = getCityById(participant.cityId);

	return (
		<div class="card transition-shadow hover:shadow-[0_2px_2px_rgba(0,0,0,0.04),0_8px_16px_-4px_rgba(0,0,0,0.06)]">
			<div class="flex items-end justify-between gap-3">
				<div class="flex-1">
					<label class="mb-1 block text-label-sm text-body">Name (optional)</label>
					<input
						type="text"
						class="w-full rounded-sm border border-hairline bg-canvas-elevated px-3 py-2 text-body-md text-ink outline-none transition-colors focus:border-link"
						placeholder={city?.name ?? 'Name'}
						value={participant.label ?? ''}
						onInput={(e) => onChange({ ...participant, label: (e.target as HTMLInputElement).value })}
					/>
				</div>
				{onRemove && (
					<button
						type="button"
						aria-label="Remove participant"
						class="shrink-0 rounded-full border border-hairline px-3 py-2 text-body-sm text-mute transition-colors hover:border-error hover:text-error"
						onClick={onRemove}
					>
						Remove
					</button>
				)}
			</div>

			<div class="mt-3">
				<CityPicker
					label="City"
					value={city}
					onChange={(newCity) => onChange({ ...participant, cityId: newCity.id })}
				/>
			</div>

			<div class="mt-3 flex items-center gap-1 rounded-full border border-hairline bg-hairline-soft p-1">
				{(['work', 'personal'] as MeetingMode[]).map((mode) => (
					<button
						key={mode}
						type="button"
						class={`flex-1 rounded-full px-3 py-1.5 text-button-md capitalize transition-all ${
							participant.mode === mode
								? 'bg-canvas-elevated text-ink shadow-[0_1px_2px_rgba(0,0,0,0.08)]'
								: 'text-mute hover:text-ink'
						}`}
						onClick={() => onChange({ ...participant, mode })}
					>
						{mode}
					</button>
				))}
			</div>

			{participant.mode === 'work' && (
				<div class="mt-3 grid grid-cols-2 gap-3">
					<div>
						<label class="mb-1 block text-label-sm text-body">Work starts</label>
						<select
							class="w-full rounded-sm border border-hairline bg-canvas-elevated px-3 py-2 text-body-md text-ink transition-colors focus:border-link"
							value={participant.workHours.startMinute}
							onChange={(e) =>
								onChange({
									...participant,
									workHours: { ...participant.workHours, startMinute: Number((e.target as HTMLSelectElement).value) },
								})
							}
						>
							{MINUTE_OPTIONS.map((opt) => (
								<option key={opt.value} value={opt.value}>
									{opt.label}
								</option>
							))}
						</select>
					</div>
					<div>
						<label class="mb-1 block text-label-sm text-body">Work ends</label>
						<select
							class="w-full rounded-sm border border-hairline bg-canvas-elevated px-3 py-2 text-body-md text-ink transition-colors focus:border-link"
							value={participant.workHours.endMinute}
							onChange={(e) =>
								onChange({
									...participant,
									workHours: { ...participant.workHours, endMinute: Number((e.target as HTMLSelectElement).value) },
								})
							}
						>
							{MINUTE_OPTIONS.map((opt) => (
								<option key={opt.value} value={opt.value}>
									{opt.label}
								</option>
							))}
						</select>
					</div>
				</div>
			)}
		</div>
	);
}
