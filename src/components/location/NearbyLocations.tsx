import Link from "next/link";
import { arrivalWindow, locationPath, type Location } from "@/lib/locations";
import SectionHeading from "../SectionHeading";
import MapPinIcon from "../MapPinIcon";

type NearbyLocationsProps = {
  name: string;
  locations: Location[];
};

export default function NearbyLocations({ name, locations }: NearbyLocationsProps) {
  return (
    <section className="bg-gray-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          title={`Otevírání aut v okolí – ${name}`}
          description="Autozámečník vyjíždí nonstop i do sousedních částí Prahy a okolních obcí"
        />

        <ul className="-mx-2 mt-8 grid grid-cols-2 gap-1.5 sm:mx-0 sm:mt-10 sm:gap-3 lg:grid-cols-4">
          {locations.map((location) => (
            <li key={location.slug}>
              <Link
                href={locationPath(location)}
                className="group flex h-full items-center gap-2 rounded-xl border border-black/5 bg-white p-2 shadow-sm shadow-black/[0.03] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 sm:gap-3 sm:rounded-2xl sm:p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-dark sm:h-10 sm:w-10">
                  <MapPinIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-xs font-bold leading-tight text-ink sm:text-base">
                    {location.name}
                  </span>
                  <span className="block text-[11px] text-ink/60 sm:text-sm">{arrivalWindow(location)}</span>
                </span>
                <span className="hidden text-xl text-ink/40 transition group-hover:text-brand-dark sm:inline" aria-hidden="true">
                  ›
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
