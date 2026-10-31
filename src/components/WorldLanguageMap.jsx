import { useMemo, useState } from 'react'
import { geoNaturalEarth1, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import world from 'world-atlas/countries-110m.json'
import { worldMaps } from '../data/worldMaps'

const W = 960
const H = 500
const BASE = '#E4DDCB'

const features = feature(world, world.objects.countries).features.filter((f) => Number(f.id) !== 10)
const projection = geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H - 6]], { type: 'Sphere' })
const pathGen = geoPath(projection)
const shapes = features.map((f) => ({ id: Number(f.id), name: f.properties.name, d: pathGen(f) }))
const sphere = pathGen({ type: 'Sphere' })

// World map of the countries that share one language. `kind` picks the data in worldMaps.js.
export default function WorldLanguageMap({ kind, color }) {
  const cfg = worldMaps[kind]
  const [hover, setHover] = useState(null)
  const dots = useMemo(() => cfg.dots.map((d) => ({ ...d, xy: projection(d.lonlat) })), [cfg])
  const count = Object.keys(cfg.countries).length + cfg.dots.length
  const caption = hover ? `${hover}: ${cfg.verb}` : 'Hover over or tap a highlighted country.'
  return (
    <div className="mt-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{cfg.eyebrow}</p>
      <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{count} countries, <span className="font-serif font-medium italic">one language.</span></h3>
      <p className="mt-3 max-w-3xl text-muted">{cfg.text}</p>
      <div className="mt-8 overflow-hidden rounded-4xl border border-divider bg-surface p-2 shadow-sm sm:p-4">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`World map highlighting ${count} countries where ${cfg.verb.toLowerCase()}`} className="h-auto w-full">
          <path d={sphere} fill="#F3EEE2" />
          {shapes.map((s) => {
            const name = cfg.countries[s.id]
            return (
              <path key={s.id + s.name} d={s.d} fill={name ? color : BASE} stroke="#FBF8F2" strokeWidth="0.6" className={name ? 'cursor-pointer transition-opacity hover:opacity-80' : ''} onMouseEnter={() => name && setHover(name)} onMouseLeave={() => setHover(null)} onClick={() => name && setHover(name)}>
                <title>{name || s.name}</title>
              </path>
            )
          })}
          {dots.map((d) => (
            <circle key={d.name} cx={d.xy[0]} cy={d.xy[1]} r="4" fill={color} stroke="#fff" strokeWidth="1" className="cursor-pointer" onMouseEnter={() => setHover(d.name)} onMouseLeave={() => setHover(null)} onClick={() => setHover(d.name)}><title>{d.name}</title></circle>
          ))}
        </svg>
      </div>
      <p className="mt-4 min-h-[1.5rem] font-mono text-xs uppercase tracking-[0.14em] text-primary" aria-live="polite">{caption}</p>
      <ul className="sr-only">{Object.values(cfg.countries).concat(cfg.dots.map((d) => d.name)).map((n) => (<li key={n}>{n}</li>))}</ul>
    </div>
  )
}
