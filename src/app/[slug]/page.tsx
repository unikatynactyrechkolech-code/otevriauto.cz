import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allLocations, getLocationByRouteSlug, locationRouteSlug } from "@/lib/locations";
import { allBrandPages, brandRouteSlug, getBrandPageByRouteSlug } from "@/lib/brand-pages";
import LocationPage, { locationMetadata } from "./location-page";
import BrandPageView, { brandMetadata } from "./brand-page";

// Only the location and brand pages below exist; any other single-segment URL is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...allLocations.map((location) => ({ slug: locationRouteSlug(location) })),
    ...allBrandPages.map((brand) => ({ slug: brandRouteSlug(brand) })),
  ];
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationByRouteSlug(slug);
  if (location) return locationMetadata(location);
  const brand = getBrandPageByRouteSlug(slug);
  if (brand) return brandMetadata(brand);
  return {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const location = getLocationByRouteSlug(slug);
  if (location) return <LocationPage location={location} />;
  const brand = getBrandPageByRouteSlug(slug);
  if (brand) return <BrandPageView brand={brand} />;
  notFound();
}
