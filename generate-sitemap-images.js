import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const baseUrl = "https://bestoffmusic.fr";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, "src/data/pastEvents.json");
const events = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
`;

const xmlFooter = `  </url>\n</urlset>`;

// 🔧 Générer titre + nom de fichier image
function generateImageXml(imagePath, eventTitle) {
  const imageName = path.basename(imagePath, path.extname(imagePath)); // sans extension
  const fullTitle = `${eventTitle} - ${imageName}`;
  return `    <image:image>
      <image:loc>${baseUrl}${imagePath}</image:loc>
      <image:caption>${fullTitle}</image:caption>
      <image:title>${fullTitle}</image:title>
    </image:image>`;
}

const imageXml = events.flatMap(event => {
  const images = [];

  if (event.photo_cover) {
    images.push(generateImageXml(event.photo_cover, event.title));
  }

  if (Array.isArray(event.gallery_photos)) {
    images.push(...event.gallery_photos.map(photo => generateImageXml(photo, event.title)));
  }

  if (Array.isArray(event.presse)) {
    images.push(...event.presse.map(photo => generateImageXml(photo, event.title + " - Presse")));
  }

  return images;
}).join("\n");

const fullXml = xmlHeader + imageXml + "\n" + xmlFooter;

// ✅ Écriture dans public/
const outputDir = path.join(__dirname, "public");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "sitemap-images.xml"), fullXml);
console.log("✅ sitemap-images.xml généré !");
