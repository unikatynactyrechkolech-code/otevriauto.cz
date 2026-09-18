import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/site-config";
import { allLocations, locationPath } from "@/lib/locations";

type CoverageAreasProps = {
  title?: string;
  description?: string;
  areas?: string[];
  /** Slug of the page being viewed; its own parts then link to the locations directory. */
  currentSlug?: string;
};

// Where an area pill leads: a location page covering it, or the directory for wider areas.
function areaHref(area: string, currentSlug?: string): string {
  if (area === "Celá Praha") return "/#lokality-praha";
  if (area === "Středočeský kraj") return "/#lokality";
  const location = allLocations.find((candidate) => candidate.name === area || candidate.parts.includes(area));
  if (!location) return "/#lokality";
  return location.slug === currentSlug ? `/#lokality-${location.region}` : locationPath(location);
}

export default function CoverageAreas({
  title = "Otevírání aut Praha i Středočeský kraj – nonstop i o víkendu",
  description = "Služba otevírání aut je k dispozici nonstop v celé Praze i Středočeském kraji. Jsme připraveni i v náročných podmínkách – podzemní parkoviště, zamrzlé zámky a podobně.",
  areas = siteConfig.areas,
  currentSlug,
}: CoverageAreasProps) {
  return (
    <section className="bg-gray-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading title={title} description={description} />

          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <Link
                key={area}
                href={areaHref(area, currentSlug)}
                className="rounded-full bg-neutral-200 px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-brand"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
