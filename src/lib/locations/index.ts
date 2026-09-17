import { pragueLocations } from "./praha";
import { pragueWestLocations } from "./praha-zapad";
import { pragueEastLocations } from "./praha-vychod";
import type { Location, RegionId } from "./types";

export type { Location, RegionId } from "./types";

export const regions: { id: RegionId; name: string; locations: Location[] }[] = [
  { id: "praha", name: "Praha", locations: pragueLocations },
  { id: "praha-zapad", name: "Praha-západ", locations: pragueWestLocations },
  { id: "praha-vychod", name: "Praha-východ", locations: pragueEastLocations },
];

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

// Rough dispatch estimate from central Prague: 15 min base + 1.2 min per km as the crow
// flies, shown as a 15-minute window rounded to 5 minutes (e.g. "40–55 minut").
export function arrivalWindow(location: Location): string {
  const km = distanceKm(PRAGUE_CENTRE, location.geo);
  const from = Math.max(15, Math.round((15 + 1.2 * km) / 5) * 5);
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
