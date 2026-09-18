import Link from "next/link";
import { districts, getQuarterByName, locationPath, prague } from "@/lib/locations";
import SectionHeading from "./SectionHeading";
import MapPinIcon from "./MapPinIcon";
import { siteConfig } from "@/lib/site-config";

type LocationsDirectoryProps = {
  /** Slug of the page being viewed, highlighted in the directory. */
  currentSlug?: string;
};

export default function LocationsDirectory({ currentSlug }: LocationsDirectoryProps) {
  const chipClass = (active: boolean) =>
    `rounded-md px-2 py-0.5 text-[11px] font-semibold transition sm:px-3 sm:py-1 sm:text-sm ${
      active
        ? "bg-brand text-black"
        : "bg-white/10 text-white hover:bg-brand/25 hover:text-white"
    }`;
  const regionClass = "scroll-mt-20 bg-white/[0.04] p-2 sm:p-6";
  const regionHeadingClass =
    "flex items-center gap-2 border-b-2 border-brand px-1 pb-2 font-heading text-base font-bold text-white sm:gap-3 sm:pb-3 sm:text-2xl";

  return (
    <section id="lokality" className="scroll-mt-20 bg-neutral-900 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="px-2 sm:px-0">
          <SectionHeading
            light
            align="center"
            title="Autozámečník v Praze a Středočeském kraji"
            description="Vyberte svou lokalitu – otevíráme auta nonstop ve všech částech Prahy i ve městech a obcích všech okresů Středočeského kraje."
          />
        </div>

        <div id={`lokality-${prague.id}`} className={`mt-8 ${regionClass}`}>
          <h3 className={regionHeadingClass}>
            <MapPinIcon className="h-4 w-4 text-brand sm:h-6 sm:w-6" />
            {prague.name}
          </h3>
          <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-3 lg:grid-cols-4">
            {prague.locations.map((location) => (
              <div key={location.slug} className="bg-white/[0.05] p-1.5 sm:p-3">
                <Link
                  href={locationPath(location)}
                  className={`block py-1.5 text-center font-heading text-sm font-bold transition sm:py-2.5 sm:text-base ${
                    location.slug === currentSlug
                      ? "bg-white text-black"
                      : "bg-brand text-black hover:bg-brand-dark"
                  }`}
                >
                  {location.name}
                </Link>
                <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-1.5">
                  {location.parts.map((part) => {
                    const quarter = getQuarterByName(part);
                    return (
                    <Link
                      key={part}
                      href={locationPath(quarter ?? location)}
                      className={chipClass(quarter?.slug === currentSlug)}
                    >
                      {part}
                    </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-3 sm:mt-6 ${regionClass}`}>
          <h3 className={regionHeadingClass}>
            <MapPinIcon className="h-4 w-4 text-brand sm:h-6 sm:w-6" />
            Středočeský kraj
          </h3>
          <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-3 lg:grid-cols-3">
            {districts.map((district) => (
              <div
                key={district.id}
                id={`lokality-${district.id}`}
                className="scroll-mt-20 bg-white/[0.05] p-1.5 sm:p-3"
              >
                <h4 className="px-0.5 font-heading text-xs font-bold text-brand sm:text-base">
                  {district.name}
                </h4>
                <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-1.5">
                  {district.locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={locationPath(location)}
                      className={chipClass(location.slug === currentSlug)}
                    >
                      {location.name}
                    </Link>
                  ))}
                  {district.otherTowns.map((town) => (
                    <span
                      key={town}
                      className="rounded-md border border-white/20 px-2 py-0.5 text-[11px] text-white sm:px-3 sm:py-1 sm:text-sm"
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 px-2 text-center text-xs text-white sm:text-sm">
          Nenašli jste svou obec? Zavolejte na{" "}
          <a href={siteConfig.phoneHref} className="font-bold text-brand hover:underline">
            {siteConfig.phone}
          </a>{" "}
          – vyjíždíme po celé Praze i Středočeském kraji.
        </p>
      </div>
    </section>
  );
}
