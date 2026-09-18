// Traces district outlines from a raster map of Prague's 22 districts (coloured areas with
// black borders and "Praha N" labels) into simplified SVG paths in src/lib/prague-map-data.ts.
// Usage: node scripts/trace-prague-map.mjs <map.png>
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const source = process.argv[2];
const { data, info } = await sharp(source).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const px = (x, y) => [data[(y * width + x) * 3], data[(y * width + x) * 3 + 1], data[(y * width + x) * 3 + 2]];

// Approximate label positions in the source image, used to name each traced area.
const labels = {
  1: [348, 370], 2: [378, 400], 3: [440, 365], 4: [388, 480], 5: [297, 445], 6: [210, 340],
  7: [383, 318], 8: [408, 247], 9: [497, 327], 10: [472, 412], 11: [527, 527], 12: [386, 593],
  13: [185, 475], 14: [583, 353], 15: [575, 432], 16: [283, 610], 17: [148, 428], 18: [511, 247],
  19: [586, 247], 20: [669, 311], 21: [720, 383], 22: [666, 500],
};
// The inset map of Czechia in the top-right corner is not part of Prague.
const isInset = (x, y) => x >= 730 && y <= 270;

const isFill = (x, y) => {
  if (isInset(x, y)) return false;
  const [r, g, b] = px(x, y);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max > 140 && max - min > 45;
};
const colourDistance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);

// 1. Connected components of same-coloured fill pixels.
const label = new Int16Array(width * height);
const components = [];
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (label[y * width + x] || !isFill(x, y)) continue;
    const seed = px(x, y);
    const id = components.length + 1;
    const stack = [[x, y]];
    label[y * width + x] = id;
    let area = 0;
    let sx = 0;
    let sy = 0;
    while (stack.length) {
      const [cx, cy] = stack.pop();
      area++;
      sx += cx;
      sy += cy;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = cx + dx;
        const ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
        const i = ny * width + nx;
        if (label[i] || !isFill(nx, ny) || colourDistance(px(nx, ny), seed) > 60) continue;
        label[i] = id;
        stack.push([nx, ny]);
      }
    }
    components.push({ id, area, cx: sx / area, cy: sy / area });
  }
}
const big = components.filter((c) => c.area > 800).sort((a, b) => b.area - a.area);

// 2. Name components by the nearest label (each label used once, closest pairs first).
const pairs = [];
for (const c of big) for (const [n, [lx, ly]] of Object.entries(labels)) pairs.push([Math.hypot(c.cx - lx, c.cy - ly), c, Number(n)]);
pairs.sort((a, b) => a[0] - b[0]);
const nameOf = new Map();
const used = new Set();
for (const [, c, n] of pairs) {
  if (nameOf.has(c.id) || used.has(n)) continue;
  nameOf.set(c.id, n);
  used.add(n);
}
const districtId = new Int16Array(width * height);
for (let i = 0; i < label.length; i++) if (label[i] && nameOf.has(label[i])) districtId[i] = nameOf.get(label[i]);
if (used.size !== 22) console.warn(`matched ${used.size} of 22 districts; components: ${big.length}`);

// 3. Grow districts over the black border lines and label text so neighbours share borders.
for (let round = 0; round < 6; round++) {
  const next = Int16Array.from(districtId);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = y * width + x;
      if (districtId[i] || isInset(x, y)) continue;
      const [r, g, b] = px(x, y);
      if (Math.max(r, g, b) > 235 && Math.max(r, g, b) - Math.min(r, g, b) < 20) continue; // white background
      const votes = new Map();
      for (const j of [i - 1, i + 1, i - width, i + width]) if (districtId[j]) votes.set(districtId[j], (votes.get(districtId[j]) || 0) + 1);
      if (votes.size) next[i] = [...votes.entries()].sort((a, b) => b[1] - a[1])[0][0];
    }
  }
  districtId.set(next);
}

// 4. Trace the outer boundary of a mask (Moore neighbour tracing on pixel corners).
function trace(inside) {
  let start = null;
  for (let y = 0; y < height && !start; y++) for (let x = 0; x < width; x++) if (inside(x, y)) { start = [x, y]; break; }
  if (!start) return [];
  // Walk along pixel edges keeping the mask on the right: classic square tracing on the corner grid.
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // right, down, left, up (corner grid)
  const at = (x, y) => x >= 0 && y >= 0 && x < width && y < height && inside(x, y);
  const points = [];
  let [x, y] = start; // top-left corner of the start pixel
  let d = 0;
  const startKey = `${x},${y},${d}`;
  for (let step = 0; step < 4_000_000; step++) {
    points.push([x, y]);
    // Cells around corner (x, y) that lie ahead-left / ahead-right for direction d.
    const [dx, dy] = dirs[d];
    const nx = x + dx;
    const ny = y + dy;
    // Pixel to the left and right of the edge from (x,y) to (nx,ny).
    let left;
    let right;
    if (d === 0) { left = at(x, y - 1); right = at(x, y); }
    else if (d === 1) { left = at(x, y); right = at(x - 1, y); }
    else if (d === 2) { left = at(x - 1, y); right = at(x - 1, y - 1); }
    else { left = at(x - 1, y - 1); right = at(x, y - 1); }
    if (right && !left) { x = nx; y = ny; }
    else if (right && left) { d = (d + 3) % 4; }
    else { d = (d + 1) % 4; }
    if (`${x},${y},${d}` === startKey && step > 0) break;
  }
  // Drop duplicate consecutive points produced by turns.
  return points.filter((p, i) => i === 0 || p[0] !== points[i - 1][0] || p[1] !== points[i - 1][1]);
}

function simplify(points, epsilon) {
  if (points.length < 3) return points;
  const distance = (p, a, b) => {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const len = Math.hypot(dx, dy) || 1;
    return Math.abs(dy * p[0] - dx * p[1] + b[0] * a[1] - b[1] * a[0]) / len;
  };
  const run = (pts) => {
    let index = 0;
    let max = 0;
    for (let i = 1; i < pts.length - 1; i++) {
      const dist = distance(pts[i], pts[0], pts[pts.length - 1]);
      if (dist > max) { max = dist; index = i; }
    }
    if (max <= epsilon) return [pts[0], pts[pts.length - 1]];
    return [...run(pts.slice(0, index + 1)).slice(0, -1), ...run(pts.slice(index))];
  };
  // A closed ring starts and ends at the same point, so split it at the farthest vertex first.
  let split = 0;
  let farthest = 0;
  for (let i = 1; i < points.length; i++) {
    const d = Math.hypot(points[i][0] - points[0][0], points[i][1] - points[0][1]);
    if (d > farthest) { farthest = d; split = i; }
  }
  return [...run(points.slice(0, split + 1)).slice(0, -1), ...run(points.slice(split))];
}

const districts = [];
let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
for (let n = 1; n <= 22; n++) {
  const polygon = simplify(trace((x, y) => districtId[y * width + x] === n), 1.6);
  for (const [x, y] of polygon) { minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y); }
  districts.push({ n, polygon });
}
const outline = simplify(trace((x, y) => districtId[y * width + x] > 0), 1.6);

// 5. Fit into a 600-wide viewBox and write the data module.
const VIEW_WIDTH = 600;
const scale = (VIEW_WIDTH - 24) / (maxX - minX);
const viewHeight = Math.round((maxY - minY) * scale + 24);
const fit = ([x, y]) => [((x - minX) * scale + 12).toFixed(1), ((y - minY) * scale + 12).toFixed(1)];
const toPath = (polygon) => polygon.map((p, i) => `${i === 0 ? "M" : "L"}${fit(p).join(" ")}`).join("") + "Z";
const centroid = (polygon) => {
  let a = 0, cx = 0, cy = 0;
  for (let i = 0; i < polygon.length; i++) {
    const [x0, y0] = polygon[i];
    const [x1, y1] = polygon[(i + 1) % polygon.length];
    const cross = x0 * y1 - x1 * y0;
    a += cross; cx += (x0 + x1) * cross; cy += (y0 + y1) * cross;
  }
  return fit([cx / (3 * a), cy / (3 * a)]);
};

const out = `// Generated by scripts/trace-prague-map.mjs from a district map of Prague – do not edit by hand.
export const MAP_WIDTH = ${VIEW_WIDTH};
export const MAP_HEIGHT = ${viewHeight};
export const outline = "${toPath(outline)}";
export const cells: { slug: string; label: string; d: string; labelAt: [number, number] }[] = [
${districts.map(({ n, polygon }) => `  { slug: "praha-${n}", label: "${n}", d: "${toPath(polygon)}", labelAt: [${centroid(polygon).join(", ")}] },`).join("\n")}
];
`;
writeFileSync("src/lib/prague-map-data.ts", out);
console.log(`districts: ${districts.map((d) => `${d.n}:${d.polygon.length}`).join(" ")}; outline: ${outline.length} points; viewBox ${VIEW_WIDTH}x${viewHeight}`);
