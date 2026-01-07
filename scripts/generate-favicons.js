import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgPath = join(__dirname, "../public/favicon.svg");
const publicDir = join(__dirname, "../public");

const sizes = [16, 32, 48, 96, 192, 512];

async function generateFavicons() {
  const svgBuffer = readFileSync(svgPath);

  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, `favicon-${size}.png`));

    console.log(`✓ Generated favicon-${size}.png`);
  }

  // Generate apple-touch-icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, "apple-touch-icon.png"));

  console.log("✓ Generated apple-touch-icon.png");

  console.log("\n✅ All favicons generated successfully!");
}

generateFavicons().catch(console.error);
