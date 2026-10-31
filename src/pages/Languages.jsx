import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Flag from '../components/Flag'
import CTABanner from '../components/CTABanner'
import { languages, levelMeta } from '../data/languages'

export default function Languages() {
  return (
    <>
      <Seo title="Languages" description="Swahili, French, Zulu, Xhosa and Portuguese, each with Beginner, Intermediate and Advanced courses." />
      <PageHero
        eyebrow="Our languages"
        title="Five languages."
        italic="Fifteen courses."
        text="Pick a language to see its three levels side by side, its short videos, and the countries and cultures behind it."
        image="/images/culture/stone-town-market.jpg"
        crumbs={[{ label: 'Languages' }]}
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-8 px-6 sm:px-10 lg:px-16">
          {languages.map((l) => (
            <Link key={l.slug} to={`/languages/${l.slug}`} className="group grid overflow-hidden rounded-5xl border border-divider bg-surface shadow-sm transition-shadow hover:shadow-2xl lg:grid-cols-5">
              <div className="relative min-h-[220px] lg:col-span-2">
                <img src={l.photos[0].src} alt={l.photos[0].alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${l.color}99, transparent 70%)` }} />
                <div className="absolute bottom-4 left-4 flex -space-x-2">
                  {l.countries.map((c) => (<Flag key={c.name} src={c.flag} name={c.name} size="h-10 w-10" />))}
                </div>
              </div>
              <div className="p-6 sm:p-10 lg:col-span-3">
                <p className="font-serif text-2xl italic" style={{ color: l.color }}>{l.greeting}</p>
                <h2 className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">{l.name} <span className="font-serif font-medium italic text-muted">{l.native}</span></h2>
                <p className="mt-3 max-w-xl text-muted">{l.tagline}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {levelMeta.map((lv) => (
                    <div key={lv.key} className="rounded-2xl bg-background p-4" style={{ borderLeft: `4px solid ${lv.accent}` }}>
                      <p className="font-display text-sm font-bold">{lv.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{l.levels[lv.key].goal}</p>
                    </div>
                  ))}
                </div>
                <span className="lift-on-hover mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Open {l.name} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  )
}
