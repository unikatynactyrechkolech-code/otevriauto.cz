export type RegionId = "praha" | "praha-zapad" | "praha-vychod";

export type Location = {
  /** URL slug without the "autozamecnik-" prefix, e.g. "praha-1" or "brandys-nad-labem". */
  slug: string;
  /** Display name, e.g. "Praha 1" or "Brandýs nad Labem". */
  name: string;
  /** Locative with preposition, e.g. "v Praze 1" or "ve Zdibech". */
  locative: string;
  region: RegionId;
  /** Approximate centre as [lat, lng]; drives distance, arrival time and nearby pages. */
  geo: [number, number];
  /** Quarters or parts of the municipality listed under "Oblasti, které pokrýváme". */
  parts: string[];
  /** Short unique hook appended to the intro heading. */
  headline: string;
  /** Two unique paragraphs about opening cars in this particular place. */
  intro: [string, string];
  /** Real local places where drivers park and get locked out (car parks, malls, stations, roads). */
  hotspots: string[];
  /** One practical tip for drivers in this location. */
  tip: string;
  /** One location-specific question for the FAQ. */
  faq: { question: string; answer: string };
};
