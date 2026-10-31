import SectionHeader from './SectionHeader'
import { instructor } from '../data/site'

export default function Research() {
  const s = instructor.seminar
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <div>
          <SectionHeader eyebrow="Our research" title="What Bantu languages" italic="have in common." />
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            Our founder, {instructor.name}, {instructor.title.toLowerCase()}, researches the commonality of Bantu languages. He presented “{s.title}” at the {s.series}.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Bantu languages such as Swahili, Zulu and Xhosa share related vocabulary, noun classes and verb patterns. That research shapes how we teach: when you learn one Bantu language, we show you how it connects to the others, so the next one comes faster.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-primary">{s.date} · {s.venue}</p>
        </div>
        <img src="/images/seminar-poster.jpg" alt={`Poster for the seminar “${s.title}” at the University of Cape Town`} loading="lazy" className="mx-auto max-h-[560px] w-auto rounded-4xl border border-divider object-contain shadow-2xl" />
      </div>
    </section>
  )
}
