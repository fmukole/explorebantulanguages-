import { Link } from 'react-router-dom'
import { Phone, MapPin, MessageCircle, Mail } from 'lucide-react'
import { site, nav } from '../data/site'
import { languages } from '../data/languages'
import { Logo } from './Navbar'

export default function Footer() {
  return (
    <footer className="relative bg-deep text-white">
      <div className="kente-bar" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo size="h-14 w-14" />
              <span className="font-display text-lg font-bold leading-tight">{site.name}</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">{site.tagline} Swahili, French, Zulu, Xhosa, Portuguese and English, at three levels each.</p>
            <p className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              <span className="ring-pulse h-2 w-2 rounded-full bg-accent" /> Now enrolling in {site.location.split(',')[0]}
            </p>
          </div>
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Languages</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              {languages.map((l) => (
                <li key={l.slug}><Link className="inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0" to={`/languages/${l.slug}`}>{l.name} <span className="font-serif italic text-white/40">{l.native}</span></Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Explore</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              {nav.map((n) => (<li key={n.to}><Link className="inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0" to={n.to}>{n.label}</Link></li>))}
              <li><Link className="inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0" to="/privacy">Privacy policy</Link></li>
              <li><Link className="inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0" to="/terms">Terms</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Contact</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {site.location}</li>
              <li><a className="flex items-center gap-2 inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0" href={`tel:${site.phoneTel}`}><Phone className="h-4 w-4 text-accent" /> {site.phone}</a></li>
              {site.email && (<li><a className="flex items-center gap-2 break-all inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0" href={`mailto:${site.email}`}><Mail className="h-4 w-4 shrink-0 text-accent" /> {site.email}</a></li>)}
              <li><a className="flex items-center gap-2 inline-flex min-h-[44px] items-center hover:text-white sm:min-h-0" href={site.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4 text-accent" /> WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Culture photos from Unsplash photographers, credited on each image.</p>
        </div>
      </div>
    </footer>
  )
}
