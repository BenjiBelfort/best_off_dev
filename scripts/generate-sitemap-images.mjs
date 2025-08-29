// scripts/generate-sitemap-images.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://bestoffmusic.fr';

const eventsPath = resolve(__dirname, '../src/data/pastEvents.json');
const outPath    = resolve(__dirname, '../public/sitemap-images.xml');

function escapeXml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

const ns = `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`;

const raw = await readFile(eventsPath, 'utf8');
const events = JSON.parse(raw);

// Chaque event -> une <url> (archives/:slug) avec toutes ses images
const urls = events.filter(ev => ev.index !== false).map(ev => {
  const slug = ev.slug || ev.id;
  const loc = `${BASE}/archives/${slug}`;
  const images = [
    ...(Array.isArray(ev.images) ? ev.images : []),
    ...(ev.photo_cover ? [ev.photo_cover] : []),
    ...(Array.isArray(ev.gallery_photos) ? ev.gallery_photos : []),
    ...(Array.isArray(ev.presse) ? ev.presse : [])
  ].map(src => src.startsWith('http') ? src : `${BASE}${src}`);
  // Dédup
  const uniq = [...new Set(images)];
  return { loc, images: uniq };
})

  // ne garde que les pages qui ont au moins 1 image
  .filter(u => u.images.length > 0);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${ns}>
${urls.map(u => `  <url>
    <loc>${escapeXml(u.loc)}</loc>${u.images.map(img => `
    <image:image>
      <image:loc>${escapeXml(img)}</image:loc>
    </image:image>`).join('')}
  </url>`).join('\n')}
</urlset>\n`;

await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, xml, 'utf8');
console.log(`✅ sitemap-images.xml généré → public/sitemap-images.xml (${urls.length} pages images)`);
