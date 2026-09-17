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

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <li key={location.slug}>
              <Link
                href={locationPath(location)}
                className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm shadow-black/[0.03] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-dark">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-base font-bold text-ink">{location.name}</span>
                  <span className="block text-sm text-ink/60">{arrivalWindow(location)}</span>
                </span>
                <span className="text-xl text-ink/40 transition group-hover:text-brand-dark" aria-hidden="true">
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
