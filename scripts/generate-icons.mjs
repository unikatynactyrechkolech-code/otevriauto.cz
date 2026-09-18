// Builds every favicon variant from public/logo.svg. Run with `npm run icons` after changing the logo.
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const svg = readFileSync("public/logo.svg");

const png = (source, size) => sharp(source, { density: 1200 }).resize(size, size).png().toBuffer();

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
const trimmed = await sharp(await png(svg, 1024)).trim().png().toBuffer();
const logo = await sharp(trimmed).resize({ height: 96 }).png().toBuffer({ resolveWithObject: true });
writeFileSync("public/logo-auto-zamek.png", logo.data);
console.log(`public/logo-auto-zamek.png is ${logo.info.width}x${logo.info.height}`);

// iOS fills transparent icons with black anyway, so the touch icon gets an explicit black square.
const glyph = await png(svg, 150);
const appleIcon = await sharp({ create: { width: 180, height: 180, channels: 4, background: "#0a0a0a" } })
  .composite([{ input: glyph, left: 15, top: 15 }])
  .png()
  .toBuffer();
writeFileSync("src/app/apple-icon.png", appleIcon);

console.log("Wrote src/app/favicon.ico, src/app/icon.svg, src/app/apple-icon.png");
