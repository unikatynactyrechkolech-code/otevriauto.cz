import type { MetadataRoute } from "next";
import { allLocations, locationPath } from "@/lib/locations";
import { allBrandPages, brandPath } from "@/lib/brand-pages";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    ...allLocations.map((location) => ({
      url: `${siteConfig.url}${locationPath(location)}`,
      changeFrequency: "monthly" as const,
      priority: location.region === "praha" ? 0.9 : 0.8,
    })),
    ...allBrandPages.map((brand) => ({
      url: `${siteConfig.url}${brandPath(brand)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
