import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Volume2 } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import LevelColumns from '../components/LevelColumns'
import VideoSlot from '../components/VideoSlot'
import PhotoTile from '../components/PhotoTile'
import RegionMap from '../components/RegionMap'
import WorldLanguageMap from '../components/WorldLanguageMap'
import SouthernAfricaMap from '../components/SouthernAfricaMap'
import Flag from '../components/Flag'
import CTABanner from '../components/CTABanner'
import NotFound from './NotFound'
import { languages, getLanguage } from '../data/languages'

export default function LanguagePage() {
  const { slug } = useParams()
  const lang = getLanguage(slug)
  if (!lang) return <NotFound />
  const others = languages.filter((l) => l.slug !== lang.slug)

  return (
    <>
      <Seo title={`Learn ${lang.name}`} description={`${lang.name} (${lang.native}) lessons at Beginner, Intermediate and Advanced level. ${lang.tagline}`} />
      <PageHero
        key={lang.slug}
        tint={lang.color}
        eyebrow={`${lang.native} · ${lang.family}`}
        title={`Learn ${lang.name}.`}
        italic={lang.greeting}
        text={lang.tagline}
        image={lang.photos[0].src}
        crumbs={[{ label: 'Languages', to: '/languages' }, { label: lang.name }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex -space-x-2">
            {lang.countries.map((c) => (<Flag key={c.name} src={c.flag} name={c.name} size="h-11 w-11" />))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
            {lang.countries.map((c) => c.name).join(' · ')}
          </span>
        </div>
      </PageHero>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <p className="max-w-3xl text-lg leading-relaxed text-ink/80 sm:text-xl">{lang.intro}</p>
        </div>
      </section>

      <section className="scroll-mt-24 bg-background pb-24 sm:pb-32" id="levels">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeader eyebrow="Three levels" title={`Your ${lang.name} path,`} italic="from first word to fluency." />
          <div className="mt-12"><LevelColumns language={lang} /></div>
        </div>
      </section>

      <section className="bg-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeader dark eyebrow="Watch and listen" title={`${lang.name} in`} italic="short videos." text="Short clips to watch before and after class. Video slots fill with real lessons as they are recorded." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {lang.videos.map((v) => (
              <VideoSlot key={v.title} title={v.title} label={v.length} color={lang.color} poster={lang.photos[0].src} src={v.src} youtube={v.youtube} note={lang.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeader eyebrow="Your first words" title="Five phrases to" italic="say today." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {lang.phrases.map((p) => (
              <div key={p.text} className="rounded-3xl border border-divider bg-background p-5 transition-shadow hover:shadow-lg">
                <Volume2 className="h-4 w-4" style={{ color: lang.color }} />
                <p className="mt-3 font-serif text-2xl font-semibold italic leading-tight text-ink">{p.text}</p>
                <p className="mt-2 text-sm font-medium text-ink/80">{p.meaning}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{p.reply}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeader eyebrow="Where it is spoken" title="Countries and" italic="flags." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lang.countries.map((c) => (
              <div key={c.name} className="flex items-start gap-4 rounded-3xl border border-divider bg-surface p-5">
                <img src={c.flag} alt={`Flag of ${c.name}`} loading="lazy" width="64" height="43" className="h-11 w-16 shrink-0 rounded-lg object-cover shadow-md" />
                <div>
                  <p className="font-display text-lg font-bold">{c.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
          {lang.history && lang.historyNoPhoto ? (
            <div className="mt-8 rounded-4xl border border-divider bg-surface p-8 sm:p-10 lg:p-12">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">History</p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">{lang.history.title}</h3>
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink/80 sm:text-lg">
                {lang.history.paragraphs.map((t) => (<p key={t.slice(0, 24)}>{t}</p>))}
              </div>
            </div>
          ) : lang.history ? (
            <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-2">
              <PhotoTile photo={lang.photos[0]} ratio="aspect-[4/5] lg:aspect-auto" className="min-h-[360px]" />
              <div className="rounded-4xl border border-divider bg-surface p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">History</p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">{lang.history.title}</h3>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/80">
                  {lang.history.paragraphs.map((t) => (<p key={t.slice(0, 24)}>{t}</p>))}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {lang.photos.map((p) => (<PhotoTile key={p.src} photo={p} ratio="aspect-[16/10]" />))}
            </div>
          )}
          {lang.regionMap === true && <RegionMap language={lang} />}
          {['french', 'portuguese', 'english'].includes(lang.regionMap) && <WorldLanguageMap kind={lang.regionMap} color={lang.color} />}
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeader eyebrow="Culture" title={`The world of`} italic={lang.name} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {lang.culture.map((c, i) => (
              <div key={c.title} className="rounded-4xl bg-background p-8" style={{ borderLeft: `6px solid ${['#2E8B57', '#E8A90C', '#C8202B', '#2D5FA8'][i % 4]}` }}>
                <h3 className="font-display text-xl font-bold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{c.text}</p>
              </div>
            ))}
          </div>
          {lang.regionMap === 'nguni' && <SouthernAfricaMap focus={lang.mapFocus} />}
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Explore another language</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((l) => (
              <Link key={l.slug} to={`/languages/${l.slug}`} className="lift-on-hover inline-flex items-center gap-3 rounded-full border border-divider bg-surface py-2 pl-2 pr-5 font-semibold shadow-sm hover:shadow-md">
                <Flag src={l.countries[0].flag} name={l.countries[0].name} size="h-9 w-9" ring="ring-1 ring-divider" /> {l.name} <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title={`Start learning ${lang.name}`} text={`Tell us your level and how many people are learning, and we will send dates and a quote for ${lang.name}.`} />
    </>
  )
}
