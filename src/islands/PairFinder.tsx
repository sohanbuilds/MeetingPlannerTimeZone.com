import { useState } from 'preact/hooks';
import { CityPicker } from './CityPicker';
import { getCityById, pairSlug } from '../lib/cities/lookup';
import type { City } from '../lib/cities/types';

/** Rendered with client:only for consistency with the other tool islands; no browser-only state needed here, but keeps hydration simple. */
export function PairFinder() {
	const [fromId, setFromId] = useState('new-york');
	const [toId, setToId] = useState('london');

	const fromCity = getCityById(fromId);
	const toCity = getCityById(toId);

	return (
		<div class="card">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
				<CityPicker label="From" value={fromCity} onChange={(city: City) => setFromId(city.id)} curatedOnly />
				<CityPicker label="To" value={toCity} onChange={(city: City) => setToId(city.id)} curatedOnly />
				<a
					href={`/meeting-time/${pairSlug(fromId, toId)}`}
					class="rounded-sm bg-primary px-[14px] py-2 text-center text-button-lg text-on-primary transition-opacity hover:opacity-90 active:opacity-80"
				>
					View meeting time
				</a>
			</div>
		</div>
	);
}
