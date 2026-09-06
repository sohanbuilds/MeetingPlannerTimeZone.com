import { ComfortBadge } from './ComfortBadge';
import { getCityById } from '../lib/cities/lookup';
import type { Participant, TimeSlot } from '../lib/time/types';

function participantLabel(participant: Participant): string {
	if (participant.label) return participant.label;
	return getCityById(participant.cityId)?.name ?? participant.cityId;
}

function formatDisplayTime(hhmm: string): string {
	const [hStr, mStr] = hhmm.split(':');
	const h24 = Number(hStr);
	const period = h24 < 12 ? 'AM' : 'PM';
	const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
	return `${h12}:${mStr} ${period}`;
}

interface ResultsListProps {
	slots: TimeSlot[];
	participants: Participant[];
	selectedInstant?: string;
	onSelect: (slot: TimeSlot) => void;
	limit?: number;
}

export function ResultsList({ slots, participants, selectedInstant, onSelect, limit = 6 }: ResultsListProps) {
	if (participants.length === 0) {
		return <p class="text-body-md text-mute">Add at least one participant to see suggested times.</p>;
	}

	const top = slots.slice(0, limit);
	const bestTier = slots[0]?.tier;
	const noGoodOverlap = bestTier === 'poor';
	const onlyFairOverlap = bestTier === 'fair';

	return (
		<div>
			{noGoodOverlap && (
				<div class="mb-4 rounded-md border border-warning-soft bg-warning-soft px-4 py-3 text-body-sm text-warning-deep">
					No time works comfortably for everyone on this date — showing the least-disruptive options below. Try Personal
					mode, widen the Best-Time slider, or pick a different date.
				</div>
			)}
			{onlyFairOverlap && (
				<div class="mb-4 rounded-md border border-warning-soft bg-warning-soft px-4 py-3 text-body-sm text-warning-deep">
					The best options today are workable but not ideal — often because it falls on someone's weekend. Try a
					weekday, or switch to Personal mode for more flexibility.
				</div>
			)}
			<ul class="flex flex-col gap-3">
				{top.map((slot, index) => {
					const isSelected = selectedInstant === slot.utcInstant;
					return (
						<li key={slot.utcInstant}>
							<button
								type="button"
								onClick={() => onSelect(slot)}
								class={`w-full rounded-md border p-4 text-left transition-all duration-150 ${
									isSelected
										? 'border-link bg-link-soft/40 shadow-[0_0_0_1px_var(--color-link)]'
										: 'border-hairline bg-canvas-elevated hover:-translate-y-0.5 hover:border-mute hover:shadow-[0_2px_2px_rgba(0,0,0,0.04),0_8px_16px_-4px_rgba(0,0,0,0.08)]'
								}`}
							>
								<div class="mb-3 flex items-center justify-between">
									<span class="flex items-center gap-2 text-body-sm text-mute">
										{index === 0 && (
											<span class="rounded-full bg-ink px-2 py-[2px] text-body-sm font-medium text-on-primary">Best</span>
										)}
										{slot.comfortableCount}/{participants.length} comfortable
									</span>
									<ComfortBadge tier={slot.tier} />
								</div>
								<div class="flex flex-wrap gap-4">
									{slot.perParticipant.map((p) => {
										const participant = participants.find((pt) => pt.id === p.participantId);
										return (
											<div key={p.participantId} class="min-w-[7rem]">
												<p class="text-body-sm text-mute">
													{participant ? participantLabel(participant) : p.participantId}
												</p>
												<p class="text-heading-md text-ink" style={{ fontVariantNumeric: 'tabular-nums' }}>
													{formatDisplayTime(p.localTime)}
													{p.isNextDay && <sup class="ml-1 text-body-sm text-mute">+1</sup>}
													{p.isPrevDay && <sup class="ml-1 text-body-sm text-mute">-1</sup>}
												</p>
											</div>
										);
									})}
								</div>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
