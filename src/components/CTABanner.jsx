import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { site } from '../data/site'

export default function CTABanner({ title = 'Ready to start speaking?', text = 'Tell us which language and level you want, and we will arrange your first lesson.' }) {
  return (
    <section className="relative overflow-hidden bg-deep">
      <div className="kente-bar" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">Start today</p>
            <h2 className="font-display text-3xl font-bold leading-[1.02] tracking-tighter text-white text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30">
              Book a lesson <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="magnetic-btn glass-dark inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
