export type BrandPage = {
  /** URL slug without the "otevreni-auta-" prefix, e.g. "skoda" or "mercedes-benz". */
  slug: string;
  /** Brand name as written on the car, e.g. "Škoda" or "Mercedes-Benz". */
  name: string;
  /** Other names in the brand chips that should link here, e.g. "VW" or "Cupra". */
  aliases?: string[];
  /** 8–12 most common models on Czech roads, most common first. */
  models: string[];
  /** Short unique hook appended to the heading "Otevření auta Škoda – <headline>". */
  headline: string;
  /** Two unique paragraphs that naturally mention the most common models. */
  intro: [string, string];
  /** Three brand-specific facts about keys and locks (keyless system, key types, hidden lock cylinder…). */
  lockTech: { title: string; text: string }[];
  /** Owner-facing advice: where the emergency key or lock is and what to try before calling. */
  emergencyTip: string;
  /** Four typical lock-out situations specific to this brand and its models. */
  situations: string[];
  /** Two brand-specific questions for the FAQ. */
  faq: { question: string; answer: string }[];
};
