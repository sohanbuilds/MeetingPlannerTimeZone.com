export interface City {
	id: string;
	name: string;
	country: string;
	/** IANA timezone identifier, e.g. "America/New_York" */
	tz: string;
	lat: number;
	lng: number;
	/** Only present on the extended (non-curated) dataset; used to rank search results by prominence. */
	population?: number;
}
