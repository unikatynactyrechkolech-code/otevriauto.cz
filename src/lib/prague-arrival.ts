// Arrival estimates in Prague, measured from the base in Hostivař (Praha 15). Kept apart from
// the location data so the client-side map can import them without the page texts.

/** Range promised for Prague as a whole. */
export const PRAGUE_ARRIVAL = "10–40 minut";

/** Typical driving time from Hostivař to each district, slug → minutes. */
export const PRAGUE_DISTRICT_ARRIVAL: Record<string, string> = {
  "praha-15": "5–15 minut",
  "praha-10": "10–20 minut",
  "praha-11": "10–20 minut",
  "praha-22": "10–20 minut",
  "praha-4": "15–25 minut",
  "praha-14": "15–25 minut",
  "praha-3": "15–25 minut",
  "praha-2": "15–25 minut",
  "praha-9": "15–30 minut",
  "praha-12": "15–30 minut",
  "praha-20": "15–30 minut",
  "praha-21": "15–30 minut",
  "praha-1": "20–30 minut",
  "praha-8": "20–35 minut",
  "praha-7": "20–35 minut",
  "praha-18": "20–35 minut",
  "praha-19": "20–35 minut",
  "praha-5": "20–35 minut",
  "praha-16": "25–40 minut",
  "praha-13": "25–40 minut",
  "praha-6": "25–40 minut",
  "praha-17": "25–40 minut",
};
