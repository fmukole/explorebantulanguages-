import { Quote } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { testimonials } from '../data/testimonials'

function Card({ t }) {
  const initials = t.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return (
    <figure className="relative mx-3 flex w-[300px] shrink-0 flex-col rounded-4xl border border-divider bg-surface p-6 shadow-sm sm:w-[380px] sm:p-8">
      <Quote className="h-8 w-8 text-accent" strokeWidth={2} />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/85 sm:text-lg">“{t.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">{initials}</span>
        <span>
          <span className="block font-display text-sm font-bold text-ink">{t.name}</span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{t.detail}</span>
        </span>
      </figcaption>
      {t.placeholder && (
        <span className="absolute right-5 top-5 rounded-full bg-accent/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">Placeholder</span>
      )}
    </figure>
  )
}

// Slides continuously from left to right. Pauses on hover. Respects reduced-motion (see index.css).
export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader eyebrow="What our students say" title="Words from" italic="our students." text="Real voices from people who have learned with us." />
      </div>
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
        <div className="testimonial-track flex w-max">
          <div className="flex">{testimonials.map((t, i) => (<Card key={`a${i}`} t={t} />))}</div>
          <div className="flex" aria-hidden="true">{testimonials.map((t, i) => (<Card key={`b${i}`} t={t} />))}</div>
        </div>
      </div>
    </section>
  )
}
