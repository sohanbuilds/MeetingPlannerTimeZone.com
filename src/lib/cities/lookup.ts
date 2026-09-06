import curatedData from '../../data/cities.json';
import extendedData from '../../data/all-cities.json';
import type { City } from './types';

/** The curated "major hub" set — this is the ONLY set getStaticPaths uses to generate the
 * ~6,000 SEO city-pair pages. Expanding city coverage for the interactive tools must never
 * change this list, or every /meeting-time/[pair] URL that search engines have indexed would
 * shift or disappear. */
const CURATED_CITIES: City[] = curatedData as City[];

/** A much larger, non-curated set (thousands of cities) used only for interactive search —
 * never for generating static pages, so it can grow freely without any SEO impact. */
const EXTENDED_CITIES: City[] = extendedData as City[];

const ALL_SEARCHABLE: City[] = [...CURATED_CITIES, ...EXTENDED_CITIES];

let byId: Map<string, City> | null = null;

/** Shown before the user types anything. Picking the first N entries of cities.json in file
 * order previously surfaced 8 U.S. cities and nothing else — this is a deliberate, diverse
 * spread of major hubs across every region instead. */
const POPULAR_DEFAULT_IDS = [
	'new-york',
	'london',
	'paris',
	'dubai',
	'mumbai',
	'singapore',
	'tokyo',
	'sydney',
	'sao-paulo',
	'johannesburg',
	'moscow',
	'toronto',
];

function popularDefaults(limit: number): City[] {
	const byIdMap = new Map(CURATED_CITIES.map((c) => [c.id, c]));
	const defaults = POPULAR_DEFAULT_IDS.map((id) => byIdMap.get(id)).filter((c): c is City => Boolean(c));
	return defaults.slice(0, limit);
}

/** The curated set only — use for anything that must resolve to a real static page (SEO pairs). */
export function allCities(): City[] {
	return CURATED_CITIES;
}

export function citiesById(): Map<string, City> {
	if (!byId) {
		byId = new Map(ALL_SEARCHABLE.map((c) => [c.id, c]));
	}
	return byId;
}

/** Resolves any city id, curated or extended — needed since shared links / saved state may
 * reference a city outside the curated set. */
export function getCityById(id: string): City | undefined {
	return citiesById().get(id);
}

/** "Mumbai, India" — used in pickers and pair-page headings for disambiguation. */
export function cityDisplayName(city: City): string {
	return `${city.name}, ${city.country}`;
}

function byPopulationDesc(a: City, b: City): number {
	return (b.population ?? 0) - (a.population ?? 0);
}

function matchCities(pool: City[], q: string): { nameMatches: City[]; otherMatches: City[] } {
	const nameMatches: City[] = [];
	const otherMatches: City[] = [];
	for (const city of pool) {
		if (city.name.toLowerCase().startsWith(q)) {
			nameMatches.push(city);
		} else if (city.name.toLowerCase().includes(q) || city.country.toLowerCase().includes(q)) {
			otherMatches.push(city);
		}
	}
	return { nameMatches, otherMatches };
}

/**
 * Searches across every city we know about (curated hubs + the large extended set), for the
 * main interactive tools. Curated-city matches are ranked first (they're the major hubs most
 * searches are looking for anyway), then extended-set matches ordered by population.
 */
export function searchCities(query: string, limit = 8): City[] {
	const q = query.trim().toLowerCase();
	if (!q) return popularDefaults(limit);

	const curated = matchCities(CURATED_CITIES, q);
	const extended = matchCities(EXTENDED_CITIES, q);
	extended.nameMatches.sort(byPopulationDesc);
	extended.otherMatches.sort(byPopulationDesc);

	return [...curated.nameMatches, ...extended.nameMatches, ...curated.otherMatches, ...extended.otherMatches].slice(0, limit);
}

/**
 * Searches only the curated set — use this anywhere a result must link to a page that's
 * guaranteed to exist as a pre-built static page (e.g. the city-pair finder).
 */
export function searchCuratedCities(query: string, limit = 8): City[] {
	const q = query.trim().toLowerCase();
	if (!q) return popularDefaults(limit);
	const { nameMatches, otherMatches } = matchCities(CURATED_CITIES, q);
	return [...nameMatches, ...otherMatches].slice(0, limit);
}

/** URL slug for a directional city pair, e.g. "new-york-to-mumbai". City ids are already slugs. */
export function pairSlug(fromId: string, toId: string): string {
	return `${fromId}-to-${toId}`;
}
