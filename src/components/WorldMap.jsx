import { useMemo, useState } from 'react'
import { geoNaturalEarth1, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import world from 'world-atlas/countries-110m.json'
import SectionHeader from './SectionHeader'
import { languages } from '../data/languages'

const W = 960
const H = 500
const BASE = '#1B2A4A'

// Build the map geometry once.
const features = feature(world, world.objects.countries).features.filter((f) => Number(f.id) !== 10) // drop Antarctica
const projection = geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H - 6]], { type: 'Sphere' })
const pathGen = geoPath(projection)
const shapes = features.map((f) => ({ id: Number(f.id), name: f.properties.name, d: pathGen(f) }))
const sphere = pathGen({ type: 'Sphere' })

// country id -> { name, langs, lonlat? } built from the language data
const covered = new Map()
languages.forEach((l) => {
  l.countries.forEach((c) => {
    const entry = covered.get(c.id) || { id: c.id, name: c.name, langs: [], lonlat: c.lonlat }
    entry.langs.push(l)
    covered.set(c.id, entry)
  })
})
const patternId = (ls) => `stripe-${ls.map((l) => l.slug).join('-')}`
const stripeCombos = Array.from(new Map(Array.from(covered.values()).filter((e) => e.langs.length > 1).map((e) => [patternId(e.langs), e.langs])).entries())
const markers = Array.from(covered.values()).filter((e) => e.lonlat).map((e) => ({ ...e, xy: projection(e.lonlat) }))

export default function WorldMap() {
  const [active, setActive] = useState(null)
  const [hover, setHover] = useState(null)
  const total = covered.size

  const langsFor = (entry) => (entry ? (active ? entry.langs.filter((l) => l.slug === active) : entry.langs) : [])
  const fillFor = (entry) => {
    const ls = langsFor(entry)
    if (ls.length === 0) return BASE
    if (ls.length === 1) return ls[0].color
    return `url(#${patternId(ls)})`
  }
  const caption = useMemo(() => {
    if (!hover) return 'Hover over or tap a highlighted country to see its languages.'
    const ls = hover.langs.map((l) => l.name).join(' · ')
    return `${hover.name}: ${ls}`
  }, [hover])

  return (
    <section className="bg-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader dark eyebrow="Our world" title={`${total} countries,`} italic="six languages." text="Each colour is one of our languages. Countries with stripes speak more than one of them. Pick a language below to see only its countries." />

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter the map by language">
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-pressed={active === null}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active === null ? 'border-white bg-white text-deep' : 'border-white/20 text-white/80 hover:border-white/60'}`}
          >
            All languages
          </button>
          {languages.map((l) => (
            <button
              key={l.slug}
              type="button"
              onClick={() => setActive(active === l.slug ? null : l.slug)}
              aria-pressed={active === l.slug}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active === l.slug ? 'border-white bg-white text-deep' : 'border-white/20 text-white/80 hover:border-white/60'}`}
            >
              <span className="h-3 w-3 rounded-full" style={{ background: l.color }} /> {l.name}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-5xl border border-white/10 bg-[#0A1428] p-2 sm:p-4">
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`World map highlighting ${total} countries where our languages are spoken`} className="h-auto w-full">
            <defs>
              {stripeCombos.map(([id, ls]) => {
                const size = 7
                return (
                  <pattern key={id} id={id} patternUnits="userSpaceOnUse" width={size * ls.length} height={size * ls.length} patternTransform="rotate(45)">
                    {ls.map((l, i) => (<rect key={l.slug} x={i * size} y="0" width={size} height={size * ls.length} fill={l.color} />))}
                  </pattern>
                )
              })}
            </defs>
            <path d={sphere} fill="#0A1428" />
            {shapes.map((s) => {
              const entry = covered.get(s.id)
              const on = langsFor(entry).length > 0
              return (
                <path
                  key={s.id + s.name}
                  d={s.d}
                  fill={fillFor(entry)}
                  stroke="#0E1A33"
                  strokeWidth="0.6"
                  className={on ? 'cursor-pointer transition-opacity hover:opacity-80' : ''}
                  onMouseEnter={() => on && setHover(entry)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => on && setHover(entry)}
                >
                  <title>{on ? `${entry.name}: ${langsFor(entry).map((l) => l.name).join(', ')}` : s.name}</title>
                </path>
              )
            })}
            {markers.map((m) => {
              const on = langsFor(m).length > 0
              return (
                <circle
                  key={m.name}
                  cx={m.xy[0]}
                  cy={m.xy[1]}
                  r="5"
                  fill={on ? fillFor(m) : BASE}
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  className={on ? 'cursor-pointer' : ''}
                  onMouseEnter={() => on && setHover(m)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => on && setHover(m)}
                >
                  <title>{`${m.name}: ${langsFor(m).map((l) => l.name).join(', ')}`}</title>
                </circle>
              )
            })}
          </svg>
        </div>

        <p className="mt-4 min-h-[1.5rem] font-mono text-xs uppercase tracking-[0.14em] text-accent" aria-live="polite">{caption}</p>
        <p className="mt-2 max-w-3xl text-xs leading-relaxed text-white/50">
          The countries shown are those featured on our language pages. Each language is spoken in more places than this map can show.
        </p>
        <ul className="sr-only">
          {Array.from(covered.values()).map((e) => (<li key={e.id}>{e.name}: {e.langs.map((l) => l.name).join(', ')}</li>))}
        </ul>
      </div>
    </section>
  )
}
