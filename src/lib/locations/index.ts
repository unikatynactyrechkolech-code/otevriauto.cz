import { pragueLocations } from "./praha";
import { pragueWestLocations } from "./praha-zapad";
import { pragueEastLocations } from "./praha-vychod";
import { locationsA, okresInfosA } from "./stredocesky-a";
import { locationsB, okresInfosB } from "./stredocesky-b";
import { locationsC, okresInfosC } from "./stredocesky-c";
import type { Location, RegionId } from "./types";

export type { Location, RegionId } from "./types";

export type Region = {
  id: RegionId;
  name: string;
  /** Locations with their own page. */
  locations: Location[];
  /** Towns listed by name only. */
  otherTowns: string[];
};

const districtLocations = [
  ...pragueWestLocations,
  ...pragueEastLocations,
  ...locationsA,
  ...locationsB,
  ...locationsC,
];

export const prague: Region = { id: "praha", name: "Praha", locations: pragueLocations, otherTowns: [] };

// Districts (okresy) of Středočeský kraj in alphabetical order.
export const districts: Region[] = [...okresInfosA, ...okresInfosB, ...okresInfosC]
  .sort((a, b) => a.name.localeCompare(b.name, "cs"))
  .map((okres) => ({
    ...okres,
    locations: districtLocations.filter((location) => location.region === okres.id),
  }));

export const regions: Region[] = [prague, ...districts];

export const allLocations: Location[] = regions.flatMap((region) => region.locations);

const ROUTE_PREFIX = "autozamecnik-";

// Staroměstské náměstí – the point arrival estimates are measured from.
const PRAGUE_CENTRE: [number, number] = [50.0875, 14.4213];

export function locationRouteSlug(location: Location): string {
  return `${ROUTE_PREFIX}${location.slug}`;
}

export function locationPath(location: Location): string {
  return `/${locationRouteSlug(location)}`;
}

export function getLocationByRouteSlug(routeSlug: string): Location | undefined {
  if (!routeSlug.startsWith(ROUTE_PREFIX)) return undefined;
  const slug = routeSlug.slice(ROUTE_PREFIX.length);
  return allLocations.find((location) => location.slug === slug);
}

export function getRegion(id: RegionId) {
  return regions.find((region) => region.id === id)!;
}

function distanceKm([lat1, lng1]: [number, number], [lat2, lng2]: [number, number]): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(a));
}

// Rough dispatch estimate from central Prague as the crow flies: 15 min base, 1.2 min per km
// for the first 20 km of city traffic, 0.9 min per km beyond that on motorways. Shown as
// a 15-minute window rounded to 5 minutes (e.g. "40–55 minut").
export function arrivalWindow(location: Location): string {
  const km = distanceKm(PRAGUE_CENTRE, location.geo);
  const minutes = 15 + 1.2 * Math.min(km, 20) + 0.9 * Math.max(km - 20, 0);
  const from = Math.max(15, Math.round(minutes / 5) * 5);
  return `${from}–${from + 15} minut`;
}

export function nearbyLocations(location: Location, count = 8): Location[] {
  return allLocations
    .filter((other) => other.slug !== location.slug)
    .map((other) => ({ other, km: distanceKm(location.geo, other.geo) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, count)
    .map(({ other }) => other);
}
