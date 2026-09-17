import Link from "next/link";
import { locationPath, regions } from "@/lib/locations";
import SectionHeading from "./SectionHeading";
import MapPinIcon from "./MapPinIcon";
import { siteConfig } from "@/lib/site-config";

type LocationsDirectoryProps = {
  /** Slug of the page being viewed, highlighted in the directory. */
  currentSlug?: string;
};

export default function LocationsDirectory({ currentSlug }: LocationsDirectoryProps) {
  const chipClass = (active: boolean) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      active
        ? "bg-brand text-black"
        : "bg-white/10 text-white/80 hover:bg-brand/25 hover:text-white"
    }`;

  return (
    <section id="lokality" className="scroll-mt-20 bg-neutral-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          align="center"
          title="Autozámečník v Praze a okolí"
          description="Vyberte svou lokalitu – otevíráme auta nonstop ve všech částech Prahy i v obcích okresů Praha-západ a Praha-východ."
        />

        <div className="mt-12 space-y-8">
          {regions.map((region) => (
            <div
              key={region.id}
              id={`lokality-${region.id}`}
              className="scroll-mt-20 rounded-3xl bg-white/[0.04] p-5 sm:p-8"
            >
              <h3 className="flex items-center gap-3 border-b-2 border-brand pb-4 font-heading text-xl font-bold text-white sm:text-2xl">
                <MapPinIcon className="h-6 w-6 text-brand" />
                {region.name}
              </h3>

              {region.id === "praha" ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {region.locations.map((location) => (
                    <div key={location.slug} className="rounded-2xl bg-white/[0.05] p-4">
                      <Link
                        href={locationPath(location)}
                        className={`block rounded-xl py-3 text-center font-heading text-lg font-bold transition ${
                          location.slug === currentSlug
                            ? "bg-white text-black"
                            : "bg-brand text-black hover:bg-brand-dark"
                        }`}
                      >
                        {location.name}
                      </Link>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {location.parts.map((part) => (
                          <Link key={part} href={locationPath(location)} className={chipClass(false)}>
                            {part}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 flex flex-wrap gap-2">
                  {region.locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={locationPath(location)}
                      className={chipClass(location.slug === currentSlug)}
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
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
