// Builds public/sitemap.xml and public/robots.txt from the site data. Runs before every build.
import { writeFileSync } from 'node:fs'
import { site } from '../src/data/site.js'
import { languages } from '../src/data/languages.js'
import { posts } from '../src/data/posts.js'

const today = new Date().toISOString().slice(0, 10)
const urls = [
  { path: '/', priority: '1.0' },
  { path: '/languages', priority: '0.9' },
  ...languages.map((l) => ({ path: `/languages/${l.slug}`, priority: '0.9' })),
  { path: '/language-lab', priority: '0.8' },
  { path: '/about', priority: '0.7' },
  { path: '/blog', priority: '0.7' },
  ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: '0.6', lastmod: p.date })),
  { path: '/contact', priority: '0.7' },
  { path: '/privacy', priority: '0.2' },
  { path: '/terms', priority: '0.2' },
]
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) => `  <url><loc>${site.url}${u.path === '/' ? '/' : u.path}</loc><lastmod>${u.lastmod || today}</lastmod><priority>${u.priority}</priority></url>`)
  .join('\n')}\n</urlset>\n`
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
writeFileSync(new URL('../public/robots.txt', import.meta.url), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)
console.log(`sitemap: ${urls.length} urls`)
