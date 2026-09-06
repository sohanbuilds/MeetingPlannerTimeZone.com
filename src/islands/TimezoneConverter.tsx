import { useMemo, useState } from 'preact/hooks';
import { DateTime } from 'luxon';
import { CityPicker } from './CityPicker';
import { dayBoundaryInfo, toZone } from '../lib/time/convert';
import { getCityById } from '../lib/cities/lookup';
import type { City } from '../lib/cities/types';

const DEFAULT_TARGET_IDS = ['london', 'tokyo', 'mumbai'];

function todayISO(tz: string): string {
	return new Date().toLocaleDateString('en-CA', { timeZone: tz });
}

/** Rendered with client:only — depends on the visitor's own timezone for sensible defaults. */
export function TimezoneConverter() {
	const localTz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
	const [sourceCityId, setSourceCityId] = useState('new-york');
	const [date, setDate] = useState(() => todayISO(localTz));
	const [time, setTime] = useState('09:00');
	const [targetIds, setTargetIds] = useState<string[]>(DEFAULT_TARGET_IDS);

	const sourceCity = getCityById(sourceCityId);

	const sourceDt = sourceCity ? DateTime.fromISO(`${date}T${time}`, { zone: sourceCity.tz }) : null;
	const utcInstant = sourceDt?.isValid ? sourceDt.toUTC() : null;

	const targets = targetIds.map((id) => getCityById(id)).filter((c): c is City => Boolean(c));

	function addTarget(city: City) {
		if (targetIds.includes(city.id) || city.id === sourceCityId) return;
		setTargetIds((prev) => [...prev, city.id]);
	}

	function removeTarget(id: string) {
		setTargetIds((prev) => prev.filter((c) => c !== id));
	}

	return (
		<div class="flex flex-col gap-6">
			<div class="card">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<CityPicker
						label="From city"
						value={sourceCity}
						onChange={(city) => setSourceCityId(city.id)}
					/>
					<div>
						<label class="mb-1 block text-label-sm text-body">Date</label>
						<input
							type="date"
							class="w-full rounded-sm border border-hairline bg-canvas-elevated px-3 py-2 text-body-md text-ink"
							value={date}
							onInput={(e) => setDate((e.target as HTMLInputElement).value)}
						/>
					</div>
					<div>
						<label class="mb-1 block text-label-sm text-body">Time</label>
						<input
							type="time"
							class="w-full rounded-sm border border-hairline bg-canvas-elevated px-3 py-2 text-body-md text-ink"
							value={time}
							onInput={(e) => setTime((e.target as HTMLInputElement).value)}
						/>
					</div>
				</div>
			</div>

			<div class="card">
				<h2 class="mb-3 text-heading-md text-ink">Converted times</h2>
				{!utcInstant && <p class="text-body-md text-error">Enter a valid date and time.</p>}
				{utcInstant && (
					<ul class="flex flex-col gap-3">
						{targets.map((city) => {
							const local = toZone(utcInstant, city.tz);
							const boundary = dayBoundaryInfo(local, date);
							return (
								<li key={city.id} class="flex items-center justify-between rounded-md border border-hairline p-4">
									<div>
										<p class="text-label-sm text-body">
											{city.name}, {city.country}
										</p>
										<p class="text-heading-md text-ink">
											{local.toFormat('h:mm a')}
											{boundary.isNextDay && <sup class="ml-1 text-body-sm text-mute">+1 day</sup>}
											{boundary.isPrevDay && <sup class="ml-1 text-body-sm text-mute">-1 day</sup>}
										</p>
										<p class="text-body-sm text-mute">{local.toFormat('EEEE, LLLL d')}</p>
									</div>
									<button
										type="button"
										aria-label={`Remove ${city.name}`}
										class="text-body-sm text-mute hover:text-error"
										onClick={() => removeTarget(city.id)}
									>
										✕
									</button>
								</li>
							);
						})}
					</ul>
				)}
				<div class="mt-4">
					<CityPicker label="Add a city to compare" onChange={addTarget} />
				</div>
			</div>
		</div>
	);
}
