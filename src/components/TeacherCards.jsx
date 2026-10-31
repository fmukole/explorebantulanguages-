import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from './SectionHeader'
import Flag from './Flag'
import { teachers } from '../data/teachers'
import { getLanguage } from '../data/languages'

gsap.registerPlugin(ScrollTrigger)

function Portrait({ teacher }) {
  if (teacher.photo) {
    return <img src={teacher.photo} alt={`Portrait of ${teacher.name}`} loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
  }
  const lang = getLanguage(teacher.languages[0])
  const initials = teacher.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  return (
    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3" style={{ background: `linear-gradient(160deg, ${lang.color}, #0E1A33)` }}>
      <span className="font-display text-7xl font-extrabold tracking-tighter text-white/90">{initials}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Photo coming soon</span>
    </div>
  )
}

export default function TeacherCards() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.teacher-card', { scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true }, y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader eyebrow="Meet your teachers" title="The people" italic="behind the languages." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((t) => (
            <article key={t.name} className="teacher-card overflow-hidden rounded-5xl border border-divider bg-surface shadow-sm">
              <Portrait teacher={t} />
              <div className="p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{t.role}</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{t.name}</h3>
                {t.note && <p className="mt-1 text-sm text-muted">{t.note}</p>}
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Teaches</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.languages.map((slug) => {
                    const l = getLanguage(slug)
                    return (
                      <Link key={slug} to={`/languages/${slug}`} className="lift-on-hover inline-flex items-center gap-2 rounded-full border border-divider bg-background py-1.5 pl-1.5 pr-4 text-sm font-semibold hover:border-primary">
                        <Flag src={l.countries[0].flag} name={l.countries[0].name} size="h-7 w-7" ring="ring-1 ring-divider" /> {l.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
