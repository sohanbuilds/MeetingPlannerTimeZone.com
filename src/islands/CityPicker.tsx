import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { cityDisplayName, searchCities, searchCuratedCities } from '../lib/cities/lookup';
import type { City } from '../lib/cities/types';

interface CityPickerProps {
	value?: City;
	onChange: (city: City) => void;
	label: string;
	placeholder?: string;
	/** Restrict search to the curated hub-city set — use where a result must link to a
	 * guaranteed-to-exist static page (e.g. the city-pair finder). */
	curatedOnly?: boolean;
}

export function CityPicker({ value, onChange, label, placeholder = 'Search a city…', curatedOnly = false }: CityPickerProps) {
	const [query, setQuery] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const results = useMemo(() => (curatedOnly ? searchCuratedCities(query, 10) : searchCities(query, 10)), [query, curatedOnly]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div ref={containerRef} class="relative">
			<label class="mb-1 block text-label-sm text-body">{label}</label>
			<input
				type="text"
				class="w-full rounded-sm border border-hairline bg-canvas-elevated px-3 py-2 text-body-md text-ink outline-none transition-colors focus:border-link"
				placeholder={value ? cityDisplayName(value) : placeholder}
				value={query}
				onFocus={() => setIsOpen(true)}
				onInput={(e) => {
					setQuery((e.target as HTMLInputElement).value);
					setIsOpen(true);
				}}
				onKeyDown={(e) => {
					if (e.key === 'Escape') setIsOpen(false);
					if (e.key === 'Enter' && results[0]) {
						onChange(results[0]);
						setQuery('');
						setIsOpen(false);
					}
				}}
			/>
			{isOpen && results.length > 0 && (
				<ul class="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-md border border-hairline bg-canvas-elevated py-2 shadow-[0_2px_2px_rgba(0,0,0,0.04),0_8px_16px_-4px_rgba(0,0,0,0.08)]">
					{results.map((city) => (
						<li key={city.id}>
							<button
								type="button"
								class="block w-full px-3 py-2 text-left text-body-md text-ink hover:bg-hairline-soft"
								onClick={() => {
									onChange(city);
									setQuery('');
									setIsOpen(false);
								}}
							>
								{cityDisplayName(city)}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
