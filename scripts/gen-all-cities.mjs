import cityTimezones from 'city-timezones';
import { IANAZone } from 'luxon';
import { readFileSync, writeFileSync } from 'node:fs';

const curated = JSON.parse(readFileSync('src/data/cities.json', 'utf8'));

function slugify(text) {
	// city_ascii from city-timezones is already a plain-ASCII transliteration.
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

// Dedup by ASCII-normalized name only (ignoring country): curated country labels ("United
// States") and the source dataset's country labels ("United States of America") frequently
// disagree, and curated names carry real accents ("São Paulo") the source's ASCII names don't,
// so a name+country key silently let duplicates like "Sao Paulo, Brazil" (new) alongside
// "São Paulo, Brazil" (curated) slip through. Matching on name alone is a deliberately loose
// heuristic — a handful of legitimately different same-named cities in other countries get
// excluded too, an acceptable trade for guaranteeing no visible duplicate of a curated city.
function normalizeName(name) {
	// Strip accents (São → Sao) before slugifying, since curated names carry real accents but
	// city-timezones' names are already plain ASCII — without this, "São Paulo" and "Sao Paulo"
	// slugify to different strings and the dedup check misses the match entirely.
	const stripped = name.normalize('NFD').replace(/[̀-ͯ]/g, '');
	return slugify(stripped);
}

const usedIds = new Set(curated.map((c) => c.id));
const seenNames = new Set(curated.map((c) => normalizeName(c.name)));
const out = [];

for (const entry of cityTimezones.cityMapping) {
	const name = entry.city_ascii || entry.city;
	if (!name || !entry.country || !entry.timezone) continue;
	if (!IANAZone.isValidZone(entry.timezone)) continue;

	const nameKey = normalizeName(name);
	if (seenNames.has(nameKey)) continue;
	seenNames.add(nameKey);

	let id = slugify(name);
	if (usedIds.has(id)) id = slugify(`${name}-${entry.iso2 ?? entry.country}`);
	let suffix = 2;
	while (usedIds.has(id)) {
		id = `${slugify(name)}-${suffix}`;
		suffix += 1;
	}
	usedIds.add(id);

	out.push({
		id,
		name,
		country: entry.country,
		tz: entry.timezone,
		lat: Math.round(entry.lat * 10000) / 10000,
		lng: Math.round(entry.lng * 10000) / 10000,
		population: typeof entry.pop === 'number' ? Math.round(entry.pop) : undefined,
	});
}

out.sort((a, b) => (b.population ?? 0) - (a.population ?? 0));

writeFileSync('src/data/all-cities.json', JSON.stringify(out));
console.log(`Generated ${out.length} extended cities (curated set: ${curated.length}, deduped against it).`);
console.log('Sample:', out.slice(0, 3));
