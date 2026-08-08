import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { resourceGuides } from '../data/resourceGuides';

const staticRoutes = [
  '/',
  '/about',
  '/assessment',
  '/join-the-team',
  '/start-here',
  '/resources',
  '/media',
  '/blog',
  '/privacy',
  '/disclosures',
];

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') ?? 'https://intentionalthrive.com';
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const today = new Date().toISOString();
  const urls = [
    ...staticRoutes.map((route) => `${origin}${route}`),
    ...articles.map((article) => `${origin}/blog/${article.slug}`),
    ...resourceGuides.map((guide) => `${origin}/resources/${guide.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
