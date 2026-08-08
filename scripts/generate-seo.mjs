import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const publicDirectory = path.join(process.cwd(), 'public');
const sitemapPath = path.join(publicDirectory, 'sitemap.xml');
await mkdir(publicDirectory, { recursive: true });

const configuredUrl = process.env.VITE_SITE_URL?.trim();
let origin = null;
if (configuredUrl) {
  try {
    const parsed = new URL(configuredUrl);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') origin = parsed.origin;
  } catch {
    throw new Error('VITE_SITE_URL must be an absolute HTTP(S) URL.');
  }
}

const sitemapLine = origin ? `\nSitemap: ${origin}/sitemap.xml` : '';
await writeFile(
  path.join(publicDirectory, 'robots.txt'),
  `User-agent: *\nAllow: /${sitemapLine}\n`,
  'utf8',
);

if (!origin) {
  await rm(sitemapPath, { force: true });
  console.log('Generated robots.txt without sitemap; set VITE_SITE_URL to enable canonical URLs.');
  process.exit(0);
}

const routes = ['pt', 'en', 'es'];
const urls = routes.map((route) => `  <url><loc>${origin}/${route}</loc></url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
await writeFile(sitemapPath, sitemap, 'utf8');
console.log(`Generated sitemap.xml for ${origin}.`);
