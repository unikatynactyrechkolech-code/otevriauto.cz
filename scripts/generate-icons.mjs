// Builds the header logo and every favicon from public/logo.svg. Run with `npm run icons` after changing it.
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const svg = readFileSync("public/logo.svg");

// The logo is wider than tall; icons centre it in a square with a little breathing room.
const png = (source, size) =>
  sharp(source, { density: 1200 })
    .resize(Math.round(size * 0.92), Math.round(size * 0.92), { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 0, bottom: 0, left: 0, right: 0 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

// ICO container with PNG-encoded images (supported by every current browser and search engine).
function toIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0);
    entry.writeUInt8(size, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });
  return Buffer.concat([header, ...entries, ...images.map((image) => image.data)]);
}

const sizes = [16, 32, 48];
const icoImages = await Promise.all(sizes.map(async (size) => ({ size, data: await png(svg, size) })));
writeFileSync("src/app/favicon.ico", toIco(icoImages));

writeFileSync("src/app/icon.svg", svg);

// Transparent PNG logo for the header and footer, trimmed to the artwork so it lines up with text.
// The file name changes with the artwork so no browser or image cache serves an old version.
const trimmed = await sharp(svg, { density: 1200 }).resize({ width: 1024 }).trim().png().toBuffer();
const logo = await sharp(trimmed).resize({ height: 96 }).png().toBuffer({ resolveWithObject: true });
writeFileSync("public/logo-auto-klic.png", logo.data);
console.log(`public/logo-auto-klic.png is ${logo.info.width}x${logo.info.height}`);

// iOS fills transparent icons with black anyway, so the touch icon gets an explicit black square.
const glyph = await png(svg, 150);
const appleIcon = await sharp({ create: { width: 180, height: 180, channels: 4, background: "#0a0a0a" } })
  .composite([{ input: glyph, left: 15, top: 15 }])
  .png()
  .toBuffer();
writeFileSync("src/app/apple-icon.png", appleIcon);

console.log("Wrote src/app/favicon.ico, src/app/icon.svg, src/app/apple-icon.png");
