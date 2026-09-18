// Hand-drawn schematic geometry of Prague for the districts map. The city outline follows the
// approximate positions of the outermost quarters; district areas are derived from district
// centres and rough district sizes, so shapes are indicative, not cadastral.

type LonLat = [number, number];
type Point = [number, number];

// City outline, clockwise from the northern tip (Březiněves).
const outlineLonLat: LonLat[] = [
  [14.48, 50.177], [14.52, 50.17], [14.545, 50.16], [14.575, 50.15], [14.6, 50.135],
  [14.62, 50.118], [14.655, 50.115], [14.68, 50.1], [14.706, 50.085], [14.69, 50.06],
  [14.675, 50.045], [14.68, 50.025], [14.665, 50.005], [14.64, 49.995], [14.61, 49.99],
  [14.585, 49.995], [14.55, 50.005], [14.53, 49.995], [14.5, 49.985], [14.47, 49.965],
  [14.45, 49.955], [14.43, 49.945], [14.4, 49.941], [14.365, 49.955], [14.34, 49.975],
  [14.32, 49.99], [14.3, 50.02], [14.28, 50.03], [14.255, 50.045], [14.224, 50.058],
  [14.245, 50.075], [14.27, 50.09], [14.29, 50.105], [14.295, 50.125], [14.32, 50.14],
  [14.36, 50.15], [14.39, 50.165], [14.41, 50.155], [14.43, 50.16], [14.455, 50.17],
];

// The Vltava from Zbraslav in the south to Suchdol in the north.
const riverLonLat: LonLat[] = [
  [14.4, 49.941], [14.395, 49.965], [14.405, 49.985], [14.41, 50.005], [14.41, 50.025],
  [14.415, 50.045], [14.41, 50.065], [14.415, 50.085], [14.43, 50.1], [14.445, 50.105],
  [14.44, 50.118], [14.425, 50.128], [14.41, 50.14], [14.395, 50.155], [14.39, 50.165],
];

// District centres and rough sizes (km²), which pull the shared borders towards smaller districts.
const districts: { slug: string; label: string; centre: LonLat; area: number }[] = [
  { slug: "praha-1", label: "1", centre: [14.418, 50.087], area: 5.5 },
  { slug: "praha-2", label: "2", centre: [14.438, 50.07], area: 4.2 },
  { slug: "praha-3", label: "3", centre: [14.462, 50.086], area: 6.5 },
  { slug: "praha-4", label: "4", centre: [14.445, 50.035], area: 32 },
  { slug: "praha-5", label: "5", centre: [14.365, 50.05], area: 35 },
  { slug: "praha-6", label: "6", centre: [14.33, 50.105], area: 56 },
  { slug: "praha-7", label: "7", centre: [14.43, 50.105], area: 11 },
  { slug: "praha-8", label: "8", centre: [14.455, 50.128], area: 40 },
  { slug: "praha-9", label: "9", centre: [14.5, 50.113], area: 18 },
  { slug: "praha-10", label: "10", centre: [14.49, 50.07], area: 19 },
  { slug: "praha-11", label: "11", centre: [14.52, 50.03], area: 22 },
  { slug: "praha-12", label: "12", centre: [14.425, 49.99], area: 33 },
  { slug: "praha-13", label: "13", centre: [14.31, 50.045], area: 21 },
  { slug: "praha-14", label: "14", centre: [14.57, 50.105], area: 20 },
  { slug: "praha-15", label: "15", centre: [14.535, 50.05], area: 22 },
  { slug: "praha-16", label: "16", centre: [14.37, 49.98], area: 44 },
  { slug: "praha-17", label: "17", centre: [14.3, 50.068], area: 13 },
  { slug: "praha-18", label: "18", centre: [14.505, 50.14], area: 15 },
  { slug: "praha-19", label: "19", centre: [14.555, 50.135], area: 25 },
  { slug: "praha-20", label: "20", centre: [14.61, 50.11], area: 22 },
  { slug: "praha-21", label: "21", centre: [14.66, 50.075], area: 34 },
  { slug: "praha-22", label: "22", centre: [14.6, 50.03], area: 40 },
];

export const MAP_WIDTH = 600;
export const MAP_HEIGHT = 420;
const PADDING = 12;
const AREA_WEIGHT = 0.28;

// Equirectangular projection to kilometres around the city centre.
function toKm([lon, lat]: LonLat): Point {
  return [(lon - 14.42) * Math.cos((50.08 * Math.PI) / 180) * 111.32, (50.08 - lat) * 111.32];
}

// Two rounds of Chaikin smoothing so the hand-placed outline doesn't look jagged.
function smooth(points: Point[], rounds = 2): Point[] {
  let result = points;
  for (let round = 0; round < rounds; round++) {
    const next: Point[] = [];
    for (let i = 0; i < result.length; i++) {
      const [ax, ay] = result[i];
      const [bx, by] = result[(i + 1) % result.length];
      next.push([0.75 * ax + 0.25 * bx, 0.75 * ay + 0.25 * by]);
      next.push([0.25 * ax + 0.75 * bx, 0.25 * ay + 0.75 * by]);
    }
    result = next;
  }
  return result;
}

// Keeps the part of a polygon where a·p <= b (Sutherland–Hodgman against one half-plane).
function clip(polygon: Point[], a: Point, b: number): Point[] {
  const inside = (p: Point) => a[0] * p[0] + a[1] * p[1] <= b;
  const output: Point[] = [];
  for (let i = 0; i < polygon.length; i++) {
    const current = polygon[i];
    const previous = polygon[(i + polygon.length - 1) % polygon.length];
    const currentIn = inside(current);
    const previousIn = inside(previous);
    if (currentIn !== previousIn) {
      const dx = current[0] - previous[0];
      const dy = current[1] - previous[1];
      const t = (b - a[0] * previous[0] - a[1] * previous[1]) / (a[0] * dx + a[1] * dy);
      output.push([previous[0] + t * dx, previous[1] + t * dy]);
    }
    if (currentIn) output.push(current);
  }
  return output;
}

function centroid(polygon: Point[]): Point {
  let area = 0;
  let cx = 0;
  let cy = 0;
  for (let i = 0; i < polygon.length; i++) {
    const [x0, y0] = polygon[i];
    const [x1, y1] = polygon[(i + 1) % polygon.length];
    const cross = x0 * y1 - x1 * y0;
    area += cross;
    cx += (x0 + x1) * cross;
    cy += (y0 + y1) * cross;
  }
  area /= 2;
  return area === 0 ? polygon[0] : [cx / (6 * area), cy / (6 * area)];
}

function build() {
  const outlineKm = smooth(outlineLonLat.map(toKm));
  const sites = districts.map((district) => ({ ...district, p: toKm(district.centre), w: AREA_WEIGHT * district.area }));

  // Fit the outline into the SVG viewBox.
  const xs = outlineKm.map((p) => p[0]);
  const ys = outlineKm.map((p) => p[1]);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const scale = Math.min(
    (MAP_WIDTH - 2 * PADDING) / (Math.max(...xs) - minX),
    (MAP_HEIGHT - 2 * PADDING) / (Math.max(...ys) - minY),
  );
  const offsetX = (MAP_WIDTH - (Math.max(...xs) - minX) * scale) / 2;
  const offsetY = (MAP_HEIGHT - (Math.max(...ys) - minY) * scale) / 2;
  const toSvg = ([x, y]: Point): Point => [offsetX + (x - minX) * scale, offsetY + (y - minY) * scale];
  const path = (polygon: Point[]) =>
    polygon.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ") + "Z";

  // Each district is the outline cut down by the (size-weighted) bisectors with every other district.
  const cells = sites.map((site) => {
    let polygon = outlineKm;
    for (const other of sites) {
      if (other === site || polygon.length === 0) continue;
      const a: Point = [2 * (other.p[0] - site.p[0]), 2 * (other.p[1] - site.p[1])];
      const b = other.p[0] ** 2 + other.p[1] ** 2 - site.p[0] ** 2 - site.p[1] ** 2 - other.w + site.w;
      polygon = clip(polygon, a, b);
    }
    const svgPolygon = polygon.map(toSvg);
    return { slug: site.slug, label: site.label, d: path(svgPolygon), labelAt: centroid(svgPolygon) };
  });

  const river = riverLonLat
    .map(toKm)
    .map(toSvg)
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");

  return { outline: path(outlineKm.map(toSvg)), cells, river };
}

export const pragueMap = build();
