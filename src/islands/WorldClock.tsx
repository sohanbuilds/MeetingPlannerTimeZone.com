import { useEffect, useMemo, useState } from 'preact/hooks';
import { CityPicker } from './CityPicker';
import { toZone } from '../lib/time/convert';
import { getCityById } from '../lib/cities/lookup';
import type { City } from '../lib/cities/types';

const DEFAULT_CITY_IDS = ['new-york', 'london', 'tokyo', 'sydney'];

function offsetLabel(offsetMinutes: number): string {
	const sign = offsetMinutes >= 0 ? '+' : '-';
	const abs = Math.abs(offsetMinutes);
	const h = Math.floor(abs / 60);
	const m = abs % 60;
	return `UTC${sign}${h}${m ? `:${m.toString().padStart(2, '0')}` : ''}`;
}

function ClockCard({ city, now, onRemove }: { city: City; now: Date; onRemove?: () => void }) {
	const local = toZone(now.toISOString(), city.tz);
	const isDaytime = local.hour >= 6 && local.hour < 18;

	return (
		<div
			class={`card card-interactive border-l-4 ${isDaytime ? 'border-l-warning' : 'border-l-violet'}`}
		>
			<div class="flex items-start justify-between">
				<div>
					<p class="text-label-sm text-body">
						{city.name}, {city.country}
					</p>
					<p class="text-body-sm text-mute">{offsetLabel(local.offset)}</p>
				</div>
				<div class="flex items-center gap-2">
					<span aria-hidden="true" class="text-heading-md">
						{isDaytime ? '☀️' : '🌙'}
					</span>
					{onRemove && (
						<button
							type="button"
							aria-label={`Remove ${city.name}`}
							class="text-body-sm text-mute transition-colors hover:text-error"
							onClick={onRemove}
						>
							✕
						</button>
					)}
				</div>
			</div>
			<p class="mt-3 text-display-xl text-ink" style={{ fontVariantNumeric: 'tabular-nums' }}>
				{local.toFormat('h:mm:ss a')}
			</p>
			<p class="mt-1 text-body-md text-body">{local.toFormat('EEEE, LLLL d')}</p>
		</div>
	);
}

/** Rendered with client:only — the ticking clock and default city list are inherently client-side concerns. */
export function WorldClock() {
	const localTz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
	const [cityIds, setCityIds] = useState<string[]>(DEFAULT_CITY_IDS);
	const [now, setNow] = useState(() => new Date());

	useEffect(() => {
		const interval = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	const cities = cityIds.map((id) => getCityById(id)).filter((c): c is City => Boolean(c));

	function addCity(city: City) {
		if (cityIds.includes(city.id)) return;
		setCityIds((prev) => [...prev, city.id]);
	}

	function removeCity(id: string) {
		setCityIds((prev) => prev.filter((c) => c !== id));
	}

	return (
		<div class="flex flex-col gap-6">
			<div class="card">
				<p class="mb-1 text-label-sm text-body">Your local time zone: {localTz}</p>
				<CityPicker label="Add a city" onChange={addCity} />
			</div>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{cities.map((city) => (
					<ClockCard key={city.id} city={city} now={now} onRemove={cityIds.length > 1 ? () => removeCity(city.id) : undefined} />
				))}
			</div>
		</div>
	);
}
