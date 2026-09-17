import type { MetadataRoute } from "next";
import { allLocations, locationPath } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    ...allLocations.map((location) => ({
      url: `${siteConfig.url}${locationPath(location)}`,
      changeFrequency: "monthly" as const,
      priority: location.region === "praha" ? 0.9 : 0.8,
    })),
  ];
}
