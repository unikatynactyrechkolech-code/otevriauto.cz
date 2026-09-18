"use client";

import { useState } from "react";
import Link from "next/link";
import { cells, MAP_HEIGHT, MAP_WIDTH, outline } from "@/lib/prague-map-data";
import { PRAGUE_ARRIVAL, PRAGUE_DISTRICT_ARRIVAL } from "@/lib/prague-arrival";

type PragueMapProps = {
  /** Slug of the district to highlight, e.g. "praha-5". */
  currentSlug?: string;
};

// Yellow-outlined map of Prague's 22 districts on black. Every district links to its page and
// shows its estimated arrival time on hover.
export default function PragueMap({ currentSlug }: PragueMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredCell = cells.find((cell) => cell.slug === hovered);
  const tooltip = hoveredCell
    ? (() => {
        const text = `Praha ${hoveredCell.label} · ${PRAGUE_DISTRICT_ARRIVAL[hoveredCell.slug] ?? PRAGUE_ARRIVAL}`;
        const width = text.length * 7.2 + 20;
        const x = Math.min(Math.max(hoveredCell.labelAt[0], width / 2 + 6), MAP_WIDTH - width / 2 - 6);
        const above = hoveredCell.labelAt[1] > 44;
        const y = above ? hoveredCell.labelAt[1] - 34 : hoveredCell.labelAt[1] + 16;
        return { text, width, x, y };
      })()
    : null;

  return (
    <div className="overflow-hidden rounded-[2rem] bg-ink">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label="Mapa Prahy s obvody Praha 1 až Praha 22"
        onMouseLeave={() => setHovered(null)}
      >
        {cells.map((cell) => {
          const active = cell.slug === currentSlug;
          const arrival = PRAGUE_DISTRICT_ARRIVAL[cell.slug] ?? PRAGUE_ARRIVAL;
          return (
            <Link
              key={cell.slug}
              href={`/autozamecnik-${cell.slug}`}
              aria-label={`Autozámečník Praha ${cell.label}, dojezd ${arrival}`}
              onMouseEnter={() => setHovered(cell.slug)}
              onFocus={() => setHovered(cell.slug)}
              onBlur={() => setHovered(null)}
            >
              <path
                d={cell.d}
                strokeWidth={1.5}
                strokeLinejoin="round"
                className={`stroke-brand transition ${active ? "fill-brand" : hovered === cell.slug ? "fill-brand/30" : "fill-ink"}`}
              />
              <text
                x={cell.labelAt[0]}
                y={cell.labelAt[1]}
                textAnchor="middle"
                dominantBaseline="central"
                className={`pointer-events-none font-heading text-[14px] font-bold ${active ? "fill-black" : "fill-brand"}`}
              >
                {cell.label}
              </text>
            </Link>
          );
        })}
        <path d={outline} fill="none" strokeWidth={4} strokeLinejoin="round" className="pointer-events-none stroke-brand" />

        {tooltip ? (
          <g className="pointer-events-none">
            <rect x={tooltip.x - tooltip.width / 2} y={tooltip.y} width={tooltip.width} height={26} rx={13} className="fill-brand" />
            <text
              x={tooltip.x}
              y={tooltip.y + 13}
              textAnchor="middle"
              dominantBaseline="central"
              className="font-heading text-[13px] font-bold fill-black"
            >
              {tooltip.text}
            </text>
          </g>
        ) : null}
      </svg>
      <div className="flex items-baseline justify-between gap-4 border-t border-brand/40 px-5 py-4 sm:px-6">
        <p className="font-heading text-lg font-bold text-white sm:text-xl">Dojezd {PRAGUE_ARRIVAL}</p>
        <p className="text-sm text-white">v celé Praze · najeďte na obvod</p>
      </div>
    </div>
  );
}
