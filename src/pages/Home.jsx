import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ArrowRight, Headphones, Mic, Globe2, MessageCircle } from 'lucide-react'
import Seo from '../components/Seo'
import GreetingsCloud from '../components/GreetingsCloud'
import SectionHeader from '../components/SectionHeader'
import CountUp from '../components/CountUp'
import Flag from '../components/Flag'
import Testimonials from '../components/Testimonials'
import WorldMap from '../components/WorldMap'
import TeacherCards from '../components/TeacherCards'
import Research from '../components/Research'
import PhotoTile from '../components/PhotoTile'
import BlogCard from '../components/BlogCard'
import CTABanner from '../components/CTABanner'
import { languages, levelMeta } from '../data/languages'
import { posts } from '../data/posts'
import { site } from '../data/site'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-cta, .hero-meta', { y: 24, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.12, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="relative min-h-[100dvh] overflow-hidden bg-deep">
      <img src="/images/classroom.jpg" alt="A Swahili lesson in progress, with greetings written on the whiteboard" className="absolute inset-0 h-full w-full object-cover brightness-[0.5]" />
      <div className="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/40 to-deep/80" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-deep to-transparent" />
      <GreetingsCloud />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 sm:px-10 lg:px-16">
        <p className="hero-meta mb-6 font-mono text-xs uppercase tracking-[0.25em] text-white/70">
          Swahili · French · Zulu · Xhosa · Portuguese · English
        </p>
        <h1 className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-8xl">
          <span className="hero-line-1 block">Learn a language.</span>
          <span className="hero-line-2 block font-serif font-medium italic">Step into a culture.</span>
        </h1>
        <p className="hero-meta mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Six languages, three levels each. Real teachers, short videos and the people, places and music behind every word.
        </p>
        <div className="hero-cta mt-10 flex flex-wrap gap-3">
          <Link to="/languages" className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30">
            Explore the languages <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="magnetic-btn glass-dark inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
        <div className="hero-meta mt-12 flex items-center gap-3">
          <div className="flex -space-x-2">
            {languages.map((l) => (<Flag key={l.slug} src={l.countries[0].flag} name={l.countries[0].name} size="h-9 w-9" ring="ring-2 ring-deep" />))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Taught in {site.location}</span>
        </div>
      </div>
    </section>
  )
}

function LanguageGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.lang-card', { scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true }, y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="relative bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader eyebrow="Choose your language" title="Six languages," italic="one welcoming school." text="Each language has its own page with all three levels, short videos, flags and photos from the countries where it is spoken." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {languages.map((l, i) => (
            <Link
              key={l.slug}
              to={`/languages/${l.slug}`}
              className={`lang-card group relative overflow-hidden rounded-4xl bg-deep p-6 text-white shadow-lg sm:p-8 lg:col-span-2`}
            >
              <img src={l.photos[0].src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${l.color}CC, #0E1A33EE 70%)` }} />
              <div className="relative flex h-full min-h-[250px] flex-col">
                <div className="flex -space-x-2">
                  {l.countries.slice(0, 4).map((c) => (<Flag key={c.name} src={c.flag} name={c.name} size="h-9 w-9" ring="ring-2 ring-white/80" />))}
                </div>
                <div className="mt-auto pt-10">
                  <p className="font-serif text-3xl font-medium italic text-white/90">{l.greeting}</p>
                  <h3 className="mt-1 font-display text-3xl font-bold tracking-tight">{l.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">{l.native}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {levelMeta.map((lv) => (<span key={lv.key} className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium backdrop-blur">{lv.label}</span>))}
                  </div>
                  <span className="lift-on-hover mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    See all three levels <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  const stats = [
    { n: 6, label: 'Languages', sub: 'Swahili, French, Zulu, Xhosa, Portuguese, English' },
    { n: 3, label: 'Levels each', sub: 'Beginner, Intermediate and Advanced' },
    { n: 18, label: 'Courses', sub: 'Six languages across three levels' },
    { n: 1278, label: 'Students to date', sub: 'Learners taught so far', separator: true },
  ]
  return (
    <section className="grid-bg relative bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="gradient-text font-display text-7xl font-extrabold tracking-tighter sm:text-8xl"><CountUp end={s.n} separator={s.separator} /></p>
            <div className="mx-auto my-3 h-px w-24 overflow-hidden sm:mx-0"><div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" style={{ animation: 'pillar-sweep 3s ease-in-out infinite' }} /></div>
            <p className="font-display text-xl font-bold">{s.label}</p>
            <p className="mt-1 text-sm text-muted">{s.sub}</p>
          </div>
        ))}
      </div>
      <style>{`@keyframes pillar-sweep{0%{transform:translateX(-100%)}50%{transform:translateX(100%)}100%{transform:translateX(100%)}}`}</style>
    </section>
  )
}

function Protocol() {
  const ref = useRef(null)
  const steps = [
    { icon: Headphones, title: 'Hear it', text: 'Every lesson starts with real sounds: greetings, rhythms and the clicks and vowels that make each language unique.' },
    { icon: Mic, title: 'Say it', text: 'You speak from the first session. Short phrases, repeated until they feel natural, with gentle correction.' },
    { icon: Globe2, title: 'Live it', text: 'Photos, music, proverbs and stories from the countries where the language lives, so the words always mean something.' },
  ]
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.proto-card').forEach((card, i, all) => {
        if (i === all.length - 1) return
        gsap.to(card, {
          scrollTrigger: { trigger: card, start: 'top top+=110', end: '+=450', scrub: 1 },
          scale: 0.93, opacity: 0.55, ease: 'none',
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="bg-deep py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <SectionHeader dark eyebrow="How lessons work" title="Hear it. Say it." italic="Live it." />
        <div className="mt-14 space-y-6">
          {steps.map((s, i) => (
            <div key={s.title} className="proto-card sticky top-28 rounded-5xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 shadow-2xl backdrop-blur sm:p-12" style={{ zIndex: i + 1 }}>
              <div className="flex items-start gap-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white"><s.icon className="h-6 w-6" strokeWidth={2.3} /></span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Step {i + 1}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">{s.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cultures() {
  const photos = languages.flatMap((l) => l.photos)
  const flags = Array.from(new Map(languages.flatMap((l) => l.countries).map((c) => [c.name, c])).values())
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader eyebrow="The cultures behind the words" title="Where these languages" italic="are spoken." />
        <div className="mt-10 flex flex-wrap gap-3">
          {flags.map((c) => (
            <span key={c.name} className="inline-flex items-center gap-2 rounded-full border border-divider bg-background py-1.5 pl-1.5 pr-4 text-sm font-medium">
              <Flag src={c.flag} name={c.name} size="h-8 w-8" ring="ring-1 ring-divider" /> {c.name}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((p, i) => (
            <PhotoTile key={p.src} photo={p} ratio={i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'} className={i === 0 ? 'lg:col-span-2' : ''} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LatestPosts() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="From the blog" title="Tips, phrases and" italic="culture." />
          <Link to="/blog" className="lift-on-hover inline-flex items-center gap-1 text-sm font-semibold text-primary">View all posts <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (<BlogCard key={p.slug} post={p} />))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 300)
    return () => clearTimeout(id)
  }, [])
  return (
    <>
      <Seo />
      <Hero />
      <LanguageGrid />
      <Pillars />
      <Protocol />
      <Testimonials />
      <Cultures />
      <WorldMap />
      <Research />
      <TeacherCards />
      <LatestPosts />
      <CTABanner />
    </>
  )
}
