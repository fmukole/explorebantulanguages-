import { useMemo, useState } from 'react'
import { geoNaturalEarth1, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import world from 'world-atlas/countries-110m.json'

const W = 960
const H = 500
const BASE = '#E4DDCB'

// Countries where French is an official language (national or co-official).
const FRENCH = {
  250: 'France', 56: 'Belgium', 756: 'Switzerland', 442: 'Luxembourg', 124: 'Canada', 332: 'Haiti', 548: 'Vanuatu',
  204: 'Benin', 854: 'Burkina Faso', 108: 'Burundi', 120: 'Cameroon', 140: 'Central African Republic', 148: 'Chad', 178: 'Republic of the Congo',
  180: 'DR Congo', 262: 'Djibouti', 226: 'Equatorial Guinea', 266: 'Gabon', 324: 'Guinea', 384: "Côte d'Ivoire", 450: 'Madagascar',
  466: 'Mali', 562: 'Niger', 646: 'Rwanda', 686: 'Senegal', 768: 'Togo',
}
// Small states too small to draw at this scale are shown as dots.
const DOTS = [
  { name: 'Monaco', lonlat: [7.42, 43.74] },
  { name: 'Comoros', lonlat: [43.87, -11.88] },
  { name: 'Seychelles', lonlat: [55.45, -4.62] },
]

const features = feature(world, world.objects.countries).features.filter((f) => Number(f.id) !== 10)
const projection = geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H - 6]], { type: 'Sphere' })
const pathGen = geoPath(projection)
const shapes = features.map((f) => ({ id: Number(f.id), name: f.properties.name, d: pathGen(f) }))
const sphere = pathGen({ type: 'Sphere' })
const dots = DOTS.map((d) => ({ ...d, xy: projection(d.lonlat) }))
const count = Object.keys(FRENCH).length + DOTS.length

export default function FrancophoneMap({ color = '#7A4FB5' }) {
  const [hover, setHover] = useState(null)
  const caption = useMemo(() => (hover ? `${hover}: French is an official language.` : 'Hover over or tap a highlighted country.'), [hover])
  return (
    <div className="mt-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The French-speaking world</p>
      <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{count} countries, <span className="font-serif font-medium italic">one language.</span></h3>
      <p className="mt-3 max-w-3xl text-muted">Countries where French is an official language, from Canada and France to the Great Lakes of Africa, including Burundi. In many other places French is widely used without being official.</p>
      <div className="mt-8 overflow-hidden rounded-4xl border border-divider bg-surface p-2 shadow-sm sm:p-4">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`World map highlighting ${count} countries where French is an official language`} className="h-auto w-full">
          <path d={sphere} fill="#F3EEE2" />
          {shapes.map((s) => {
            const on = FRENCH[s.id]
            return (
              <path key={s.id + s.name} d={s.d} fill={on ? color : BASE} stroke="#FBF8F2" strokeWidth="0.6" className={on ? 'cursor-pointer transition-opacity hover:opacity-80' : ''} onMouseEnter={() => on && setHover(FRENCH[s.id])} onMouseLeave={() => setHover(null)} onClick={() => on && setHover(FRENCH[s.id])}>
                <title>{on ? FRENCH[s.id] : s.name}</title>
              </path>
            )
          })}
          {dots.map((d) => (
            <circle key={d.name} cx={d.xy[0]} cy={d.xy[1]} r="4" fill={color} stroke="#fff" strokeWidth="1" className="cursor-pointer" onMouseEnter={() => setHover(d.name)} onMouseLeave={() => setHover(null)} onClick={() => setHover(d.name)}><title>{d.name}</title></circle>
          ))}
        </svg>
      </div>
      <p className="mt-4 min-h-[1.5rem] font-mono text-xs uppercase tracking-[0.14em] text-primary" aria-live="polite">{caption}</p>
      <ul className="sr-only">{Object.values(FRENCH).concat(DOTS.map((d) => d.name)).map((n) => (<li key={n}>{n}</li>))}</ul>
    </div>
  )
}
