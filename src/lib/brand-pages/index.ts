import { brandPagesA } from "./brands-a";
import { brandPagesB } from "./brands-b";
import type { BrandPage } from "./types";

export type { BrandPage } from "./types";

export const allBrandPages: BrandPage[] = [...brandPagesA, ...brandPagesB];

const ROUTE_PREFIX = "otevreni-auta-";

export function brandRouteSlug(brand: BrandPage): string {
  return `${ROUTE_PREFIX}${brand.slug}`;
}

export function brandPath(brand: BrandPage): string {
  return `/${brandRouteSlug(brand)}`;
}

export function getBrandPageByRouteSlug(routeSlug: string): BrandPage | undefined {
  if (!routeSlug.startsWith(ROUTE_PREFIX)) return undefined;
  const slug = routeSlug.slice(ROUTE_PREFIX.length);
  return allBrandPages.find((brand) => brand.slug === slug);
}

// Maps a chip label such as "Škoda", "Cupra" or "VW Transporter" to its brand page.
export function getBrandPageForLabel(label: string): BrandPage | undefined {
  return allBrandPages.find((brand) =>
    [brand.name, ...(brand.aliases ?? [])].some(
      (name) => label === name || label.startsWith(`${name} `),
    ),
  );
}
