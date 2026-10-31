import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Target, CalendarDays, Wallet } from 'lucide-react'
import { levelMeta } from '../data/languages'
import VideoSlot from './VideoSlot'

gsap.registerPlugin(ScrollTrigger)

// All three levels shown side by side for one language.
export default function LevelColumns({ language }) {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.level-col', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [language.slug])

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-3">
      {levelMeta.map((lv, i) => {
        const data = language.levels[lv.key]
        return (
          <article key={lv.key} className="level-col flex flex-col overflow-hidden rounded-4xl border border-divider bg-surface shadow-sm" style={{ borderTop: `6px solid ${lv.accent}` }}>
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{lv.short}</span>
                <span className="flex gap-1" aria-label={`Level ${i + 1} of 3`}>
                  {[0, 1, 2].map((n) => (
                    <span key={n} className="h-2 w-6 rounded-full" style={{ background: n <= i ? lv.accent : '#E6E0D4' }} />
                  ))}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{lv.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{data.goal}</p>

              {data.course && (
                <div className="mt-5 rounded-3xl bg-background p-4 text-sm">
                  <p className="font-display font-bold text-ink">{data.course.name}</p>
                  <p className="mt-2 flex items-start gap-2 text-muted"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {data.course.schedule}</p>
                  <p className="mt-2 flex items-start gap-2 text-muted"><Wallet className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {data.course.rates}</p>
                  <p className="mt-2 text-xs text-muted/80">{data.course.note}</p>
                </div>
              )}

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">What you study</p>
              <ul className="mt-3 space-y-2">
                {data.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-ink/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: lv.accent }} /> {t}
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink"><Target className="h-3.5 w-3.5" /> By the end you can</p>
              <ul className="mt-3 space-y-2">
                {data.canDo.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: lv.accent }} strokeWidth={2.6} /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto p-4 pt-0 sm:p-6 sm:pt-0">
              <VideoSlot title={`${lv.label} preview: ${language.name}`} color={language.color} poster={language.photos[0]?.src} src={data.previewSrc} youtube={data.previewYoutube} />
            </div>
          </article>
        )
      })}
    </div>
  )
}
