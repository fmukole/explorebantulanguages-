import { useMemo, useState } from 'react'
import { geoMercator, geoPath, geoCentroid } from 'd3-geo'
import { feature } from 'topojson-client'
import world from 'world-atlas/countries-110m.json'

const W = 900
const H = 640
const PALETTE = ['#2E8B57', '#C8202B', '#2D5FA8', '#E8A90C', '#7A4FB5', '#E26A1B', '#0F8B8D', '#B5446E']
const all = feature(world, world.objects.countries).features

// A map of just the countries that touch each other and speak the language, each in its own colour.
export default function RegionMap({ language }) {
  const [hover, setHover] = useState(null)
  const model = useMemo(() => {
    const items = language.countries.map((c, i) => ({ ...c, color: PALETTE[i % PALETTE.length], feat: all.find((f) => Number(f.id) === c.id) })).filter((c) => c.feat)
    const collection = { type: 'FeatureCollection', features: items.map((c) => c.feat) }
    const projection = geoMercator().fitExtent([[24, 24], [W - 24, H - 24]], collection)
    const path = geoPath(projection)
    return items.map((c) => ({ ...c, d: path(c.feat), xy: projection(geoCentroid(c.feat)) }))
  }, [language])

  return (
    <div className="mt-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Swahili-speaking countries</p>
      <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Six countries, <span className="font-serif italic font-medium">one connected region.</span></h3>
      <p className="mt-3 max-w-3xl text-muted">These {model.length} neighbouring countries share borders and form one connected block, from the Indian Ocean coast to the Great Lakes and the Congo basin.</p>
      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="overflow-hidden rounded-4xl border border-divider bg-surface p-3 shadow-sm">
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Map of ${model.map((m) => m.name).join(', ')}`} className="h-auto w-full">
            {model.map((c) => (
              <path
                key={c.id}
                d={c.d}
                fill={c.color}
                stroke="#FBF8F2"
                strokeWidth="2.5"
                strokeLinejoin="round"
                opacity={hover && hover !== c.id ? 0.55 : 1}
                className="cursor-pointer transition-opacity"
                onMouseEnter={() => setHover(c.id)}
                onMouseLeave={() => setHover(null)}
              >
                <title>{c.name}</title>
              </path>
            ))}
            {model.map((c) => (
              <text key={`t${c.id}`} x={c.xy[0]} y={c.xy[1]} textAnchor="middle" dominantBaseline="middle" fontSize={c.id === 646 || c.id === 108 ? 13 : 20} fontWeight="700" fill="#fff" stroke="rgba(0,0,0,0.35)" strokeWidth="0.6" paintOrder="stroke" style={{ pointerEvents: 'none' }}>
                {c.id === 646 ? 'RW' : c.id === 108 ? 'BI' : c.name}
              </text>
            ))}
          </svg>
        </div>
        <ul className="grid gap-3">
          {model.map((c) => (
            <li key={c.id} onMouseEnter={() => setHover(c.id)} onMouseLeave={() => setHover(null)} className="flex items-center gap-4 rounded-3xl border border-divider bg-surface p-3 pr-5">
              <span className="h-10 w-3 shrink-0 rounded-full" style={{ background: c.color }} />
              <img src={c.flag} alt="" width="48" height="32" className="h-8 w-12 rounded object-cover shadow" />
              <span className="font-display font-bold">{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
