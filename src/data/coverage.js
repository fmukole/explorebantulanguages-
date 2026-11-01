// Every country our six languages reach, built from the language data and the world map lists.
// Used by the world map on the Home and Contact pages.
import { languages } from './languages'
import { worldMaps } from './worldMaps'

const bySlug = Object.fromEntries(languages.map((l) => [l.slug, l]))

// Extra country ids per language, beyond the countries listed on each language page.
const extra = {
  french: worldMaps.french.countries,
  portuguese: worldMaps.portuguese.countries,
  english: worldMaps.english.countries,
}
const extraDots = { french: worldMaps.french.dots, portuguese: worldMaps.portuguese.dots, english: worldMaps.english.dots }

export function buildCoverage() {
  const covered = new Map()
  const add = (key, entry, lang) => {
    if (typeof key === 'string') {
      const same = Array.from(covered.values()).find((x) => x.name === entry.name) // a dot for a country already drawn
      if (same) { if (!same.langs.includes(lang)) same.langs.push(lang); if (!same.lonlat) same.lonlat = entry.lonlat; return }
    }
    const e = covered.get(key) || { id: key, name: entry.name, langs: [], lonlat: entry.lonlat }
    if (!e.langs.includes(lang)) e.langs.push(lang)
    covered.set(key, e)
  }
  languages.forEach((l) => {
    l.countries.forEach((c) => add(c.id, c, l))
    Object.entries(extra[l.slug] || {}).forEach(([id, name]) => add(Number(id), { name }, l))
    ;(extraDots[l.slug] || []).forEach((d) => add(`dot-${d.name}`, d, l))
  })
  // Keep the language order stable (Swahili, French, Zulu, Xhosa, Portuguese, English).
  const order = languages.map((l) => l.slug)
  covered.forEach((e) => e.langs.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)))
  return covered
}
export { bySlug }
