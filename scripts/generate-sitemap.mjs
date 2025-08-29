// scripts/generate-sitemap.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://bestoffmusic.fr';

// Routes statiques
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/archives', priority: 0.8, changefreq: 'weekly' },
  { path: '/galerie', priority: 0.8, changefreq: 'monthly' },
  { path: '/presse',  priority: 0.8, changefreq: 'monthly' }
];

const eventsPath = resolve(__dirname, '../src/data/pastEvents.json');
const outPath    = resolve(__dirname, '../public/sitemap.xml');

const today = new Date().toISOString().slice(0,10);
const ns = `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`;

function toISODate(d) {
  if (!d) return today;
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  const dt = new Date(d);
  return isNaN(dt) ? today : dt.toISOString().slice(0,10);
}
function escapeXml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

const raw = await readFile(eventsPath, 'utf8');
const events = JSON.parse(raw);

// Events -> /archives/:slug
const eventUrls = events
  .filter(ev => ev.index !== false)
  .map(ev => {
    const slug = ev.slug || ev.id;
    const loc = `${BASE}/archives/${slug}`;
    const lastmod = toISODate(ev.lastmod || ev.endDate || ev.isoDate);
    // Images pour image sitemap inline (optionnel ici)
    const imgs = Array.isArray(ev.images) && ev.images.length
      ? ev.images
      : (ev.photo_cover ? [ev.photo_cover] : []);
    const imageUrls = imgs.map(src => src.startsWith('http') ? src : `${BASE}${src}`);

    return {
      loc, priority: 0.7, changefreq: 'yearly', lastmod, images: imageUrls
    };
  });

const all = [
  ...staticRoutes.map(r => ({
    loc: `${BASE}${r.path}`,
    priority: r.priority,
    changefreq: r.changefreq,
    lastmod: today,
    images: []
  })),
  ...eventUrls
];

// dédup par loc
const seen = new Set();
const unique = all.filter(u => (seen.has(u.loc) ? false : (seen.add(u.loc), true)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${ns}>
${unique.map(u => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <priority>${u.priority.toFixed(1)}</priority>
    <changefreq>${u.changefreq}</changefreq>
    <lastmod>${u.lastmod}</lastmod>${u.images.map(img => `
    <image:image>
      <image:loc>${escapeXml(img)}</image:loc>
    </image:image>`).join('')}
  </url>`).join('\n')}
</urlset>\n`;

await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, xml, 'utf8');
console.log(`✅ sitemap.xml généré → public/sitemap.xml (${unique.length} URLs)`);
