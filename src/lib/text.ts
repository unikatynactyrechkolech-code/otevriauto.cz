// Small helpers for natural Czech copy built from data.

/** "a" → "a", ["a", "b"] → "a a b", ["a", "b", "c"] → "a, b a c". */
export function formatList(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} a ${items[items.length - 1]}`;
}

/** "v Praze 1" → "V Praze 1". */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
