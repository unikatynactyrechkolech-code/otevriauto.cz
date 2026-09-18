import Link from "next/link";
import { arrivalWindow, getRegion, locationPath, type Location } from "@/lib/locations";
import SectionHeading from "../SectionHeading";

type NearbyLocationsProps = {
  title: string;
  description: string;
  locations: Location[];
};

// What a location covers: its parts, or its district when it has no named parts.
function coverage(location: Location): string {
  const parts = location.parts.filter((part) => part !== location.name);
  if (parts.length === 0) return getRegion(location.region).name;
  return parts.slice(0, 3).join(", ") + (parts.length > 3 ? "…" : "");
}

export default function NearbyLocations({ title, description, locations }: NearbyLocationsProps) {
  return (
    <section className="bg-gray-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading align="center" title={title} description={description} />

        <ul className="-mx-2 mt-8 grid grid-cols-2 gap-1.5 sm:mx-0 sm:mt-10 sm:gap-3 lg:grid-cols-4">
          {locations.map((location) => (
            <li key={location.slug}>
              <Link
                href={locationPath(location)}
                className="flex h-full flex-col rounded-none border-2 border-black bg-white p-2.5 transition hover:border-brand sm:rounded-none sm:p-4"
              >
                <span className="font-heading text-sm font-bold leading-tight text-ink sm:text-base">
                  {location.name}
                </span>
                <span className="mt-0.5 text-[11px] font-semibold text-ink sm:text-sm">{arrivalWindow(location)}</span>
                <span className="mt-1 truncate text-[11px] text-ink sm:text-xs">{coverage(location)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
