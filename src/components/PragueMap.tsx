import Link from "next/link";
import { MAP_HEIGHT, MAP_WIDTH, pragueMap } from "@/lib/prague-map";
import { PRAGUE_ARRIVAL } from "@/lib/locations";

type PragueMapProps = {
  /** Slug of the district to highlight, e.g. "praha-5". */
  currentSlug?: string;
};

// Yellow-outlined map of Prague's 22 districts on black; every district links to its page.
export default function PragueMap({ currentSlug }: PragueMapProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-ink">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label="Mapa Prahy s obvody Praha 1 až Praha 22"
      >
        {pragueMap.cells.map((cell) => {
          const active = cell.slug === currentSlug;
          return (
            <Link key={cell.slug} href={`/autozamecnik-${cell.slug}`} className="group">
              <title>{`Autozámečník Praha ${cell.label}`}</title>
              <path
                d={cell.d}
                strokeWidth={1.5}
                strokeLinejoin="round"
                className={`stroke-brand transition ${active ? "fill-brand" : "fill-ink group-hover:fill-brand/30"}`}
              />
              <text
                x={cell.labelAt[0]}
                y={cell.labelAt[1]}
                textAnchor="middle"
                dominantBaseline="central"
                className={`pointer-events-none font-heading text-[15px] font-bold ${active ? "fill-black" : "fill-white"}`}
              >
                {cell.label}
              </text>
            </Link>
          );
        })}
        <path d={pragueMap.outline} fill="none" strokeWidth={4} strokeLinejoin="round" className="pointer-events-none stroke-brand" />
        <path
          d={pragueMap.river}
          fill="none"
          strokeWidth={1.5}
          strokeDasharray="4 3"
          className="pointer-events-none stroke-brand opacity-60"
        />
      </svg>
      <div className="flex items-baseline justify-between gap-4 border-t border-brand/40 px-5 py-4 sm:px-6">
        <p className="font-heading text-lg font-bold text-white sm:text-xl">Dojezd {PRAGUE_ARRIVAL}</p>
        <p className="text-sm text-white">v celé Praze</p>
      </div>
    </div>
  );
}
