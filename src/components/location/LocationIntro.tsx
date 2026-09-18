import type { Location } from "@/lib/locations";
import SectionHeading from "../SectionHeading";
import MapPinIcon from "../MapPinIcon";

type LocationIntroProps = {
  location: Location;
};

export default function LocationIntro({ location }: LocationIntroProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:px-8">
        <div>
          <SectionHeading title={`Otevírání aut ${location.name} – ${location.headline}`} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink">
            {location.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-black/5 bg-gray-50/70 p-6">
            <h3 className="font-heading text-lg font-bold text-ink">
              Kde nejčastěji otevíráme auta {location.locative}
            </h3>
            <ul className="mt-4 space-y-3">
              {location.hotspots.map((hotspot) => (
                <li key={hotspot} className="flex items-start gap-3 text-sm font-semibold text-ink">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" />
                  {hotspot}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand/30 bg-brand/10 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-dark">
              Tip pro řidiče – {location.name}
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">{location.tip}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
