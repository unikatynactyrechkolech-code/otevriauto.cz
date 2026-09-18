import Link from "next/link";
import { locationPath, prague, PRAGUE_ARRIVAL } from "@/lib/locations";
import SectionHeading from "./SectionHeading";

const WIDTH = 600;
const HEIGHT = 460;
const PADDING = 40;
const RADIUS = 22;

// Place each district at its approximate position (from our own location data), then nudge
// overlapping circles apart so every district stays readable and clickable.
function layout() {
  const lat0 = 50.08;
  const points = prague.locations.map((location) => ({
    location,
    x: (location.geo[1] - 14.42) * Math.cos((lat0 * Math.PI) / 180),
    y: lat0 - location.geo[0],
  }));

  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const scale = Math.min(
    (WIDTH - 2 * PADDING) / (Math.max(...xs) - Math.min(...xs)),
    (HEIGHT - 2 * PADDING) / (Math.max(...ys) - Math.min(...ys)),
  );
  for (const p of points) {
    p.x = PADDING + (p.x - Math.min(...xs)) * scale;
    p.y = PADDING + (p.y - Math.min(...ys)) * scale;
  }

  const minDistance = 2 * RADIUS + 6;
  for (let step = 0; step < 300; step++) {
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i];
        const b = points[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.hypot(dx, dy) || 0.01;
        if (distance < minDistance) {
          const push = (minDistance - distance) / 2;
          a.x -= (dx / distance) * push;
          a.y -= (dy / distance) * push;
          b.x += (dx / distance) * push;
          b.y += (dy / distance) * push;
        }
      }
    }
  }
  return points;
}

const points = layout();

type PragueDistrictsMapProps = {
  /** Slug of the district to highlight, e.g. "praha-5". */
  currentSlug?: string;
};

export default function PragueDistrictsMap({ currentSlug }: PragueDistrictsMapProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          title={`Dojezd ${PRAGUE_ARRIVAL} po celé Praze`}
          description="Vyberte svůj obvod – ke každému najdete stránku s místy, kde nejčastěji otevíráme auta."
        />

        <div className="mt-10 rounded-3xl bg-ink p-3 sm:p-6">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="h-auto w-full"
            role="img"
            aria-label="Orientační schéma pražských obvodů Praha 1 až Praha 22"
          >
            {points.map(({ location, x, y }) => {
              const active = location.slug === currentSlug;
              return (
                <Link key={location.slug} href={locationPath(location)} className="group">
                  <title>{`Autozámečník ${location.name}`}</title>
                  <circle
                    cx={x}
                    cy={y}
                    r={RADIUS}
                    className={`stroke-brand transition ${active ? "fill-brand" : "fill-ink group-hover:fill-brand"}`}
                    strokeWidth={2.5}
                  />
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={`font-heading text-[15px] font-bold transition ${active ? "fill-black" : "fill-white group-hover:fill-black"}`}
                  >
                    {location.name.replace("Praha ", "")}
                  </text>
                </Link>
              );
            })}
          </svg>
          <p className="mt-2 text-center text-xs text-white">
            Orientační schéma obvodů Praha 1–22, ne přesné hranice.
          </p>
        </div>
      </div>
    </section>
  );
}
