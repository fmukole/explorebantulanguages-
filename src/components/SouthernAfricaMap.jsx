import { useMemo, useState } from 'react'
import { geoMercator, geoPath, geoCentroid } from 'd3-geo'
import data from '../data/southern-africa.json'

const W = 760
const H = 800
const EXTENT = { type: 'MultiPoint', coordinates: [[16.3, -35.2], [33.3, -35.2], [33.3, -15.4], [16.3, -15.4]] }
const KEY = {
  zulu: { color: '#E8A90C', label: 'KwaZulu-Natal', sub: 'Zululand · isiZulu' },
  xhosa: { color: '#C8202B', label: 'Eastern Cape', sub: 'Xhosaland · isiXhosa' },
  ndebele: { color: '#0F8B8D', label: 'Matabeleland, Zimbabwe', sub: 'isiNdebele (Northern Ndebele)' },
  swati: { color: '#2D5FA8', label: 'Eswatini', sub: 'siSwati' },
  za: { color: '#D8CDB5', label: 'Other provinces of South Africa', sub: 'isiZulu and isiXhosa are spoken in every province' },
  zw: { color: '#8FC9CA', label: 'Rest of Zimbabwe', sub: 'Ndebele speakers also live in towns across the country' },
  ls: { color: '#F0EADB', label: 'Lesotho', sub: 'Sesotho, a Sotho language' },
}
const MATABELE = ['Matabeleland North', 'Matabeleland South', 'Bulawayo']

function groupOf(f) {
  const { cc, name } = f.properties
  if (cc === 'ZA') return name === 'KwaZulu-Natal' ? 'zulu' : name === 'Eastern Cape' ? 'xhosa' : 'za'
  if (cc === 'ZW') return MATABELE.includes(name) ? 'ndebele' : 'zw'
  if (cc === 'SZ') return 'swati'
  return 'ls'
}

// Southern Africa: the Nguni-speaking regions. Used on the Zulu and Xhosa pages.
export default function SouthernAfricaMap({ focus = 'zulu' }) {
  const [hover, setHover] = useState(null)
  const shapes = useMemo(() => {
    const projection = geoMercator().fitExtent([[10, 10], [W - 10, H - 10]], EXTENT)
    const path = geoPath(projection)
    const feats = data.features.map((f) => ({ f, g: groupOf(f), d: path(f) }))
    const label = (g) => {
      const parts = data.features.filter((f) => groupOf(f) === g)
      if (!parts.length) return null
      const pts = parts.map((f) => projection(geoCentroid(f)))
      return [pts.reduce((a, p) => a + p[0], 0) / pts.length, pts.reduce((a, p) => a + p[1], 0) / pts.length]
    }
    return { feats, labels: { zulu: label('zulu'), xhosa: label('xhosa'), ndebele: label('ndebele'), swati: label('swati') } }
  }, [])
  const order = ['zulu', 'xhosa', 'ndebele', 'swati', 'za', 'zw', 'ls']
  const dim = (g) => (hover ? (hover === g ? 1 : 0.45) : 1)

  return (
    <div className="mt-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The Nguni languages on the map</p>
      <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Southern Africa, <span className="font-serif font-medium italic">{focus === 'xhosa' ? 'from Xhosaland to Zululand.' : 'from Zululand to Matabeleland.'}</span></h3>
      <p className="mt-3 max-w-3xl text-muted">isiZulu, isiXhosa, isiNdebele and siSwati belong to the same Nguni branch. The map shows Zululand (KwaZulu-Natal) and Xhosaland (the Eastern Cape) in South Africa, the Ndebele of Zimbabwe and the Swati of Eswatini.</p>
      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-hidden rounded-4xl border border-divider bg-surface p-3 shadow-sm">
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Map of South Africa, Zimbabwe, Eswatini and Lesotho showing Zulu, Xhosa, Ndebele and Swati regions" className="h-auto w-full">
            {shapes.feats.map(({ f, g, d }) => (
              <path key={f.properties.cc + f.properties.name} d={d} fill={KEY[g].color} stroke="#FBF8F2" strokeWidth="1.2" strokeLinejoin="round" opacity={dim(g)} onMouseEnter={() => setHover(g)} onMouseLeave={() => setHover(null)} className="transition-opacity">
                <title>{`${f.properties.name}, ${KEY[g].sub}`}</title>
              </path>
            ))}
            {['zulu', 'xhosa', 'ndebele'].map((g) => shapes.labels[g] && (
              <text key={g} x={shapes.labels[g][0]} y={shapes.labels[g][1]} textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" stroke="rgba(0,0,0,0.4)" strokeWidth="0.7" paintOrder="stroke" style={{ pointerEvents: 'none' }}>
                {g === 'zulu' ? 'Zululand' : g === 'xhosa' ? 'Xhosaland' : 'Ndebele'}
              </text>
            ))}
            {shapes.labels.swati && (
              <g style={{ pointerEvents: 'none' }}>
                <line x1={shapes.labels.swati[0] + 12} y1={shapes.labels.swati[1]} x2={shapes.labels.swati[0] + 40} y2={shapes.labels.swati[1]} stroke="#1B2A4A" strokeWidth="1.5" />
                <text x={shapes.labels.swati[0] + 46} y={shapes.labels.swati[1] + 5} fontSize="18" fontWeight="700" fill="#1B2A4A">Swati</text>
              </g>
            )}
          </svg>
        </div>
        <ul className="grid gap-3">
          {order.map((g) => (
            <li key={g} onMouseEnter={() => setHover(g)} onMouseLeave={() => setHover(null)} className="flex items-center gap-4 rounded-3xl border border-divider bg-surface p-3 pr-5">
              <span className="h-10 w-3 shrink-0 rounded-full border border-black/5" style={{ background: KEY[g].color }} />
              <span><span className="block font-display font-bold leading-tight">{KEY[g].label}</span><span className="block text-xs text-muted">{KEY[g].sub}</span></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
