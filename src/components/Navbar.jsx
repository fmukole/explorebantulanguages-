import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { nav, site } from '../data/site'
import { languages } from '../data/languages'
import Flag from './Flag'

export function Logo({ size = 'h-11 w-11' }) {
  return (
    <span className={`${size} shrink-0 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white/70`}>
      <img src="/images/logo.jpg" alt="" width="44" height="44" className="h-full w-full scale-[1.15] object-cover" />
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const textColor = scrolled ? 'text-ink' : 'text-white'
  const linkClass = ({ isActive }) =>
    `lift-on-hover text-sm font-medium transition-colors ${isActive ? 'text-primary' : `${textColor} opacity-90 hover:opacity-100`}`

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className={`flex w-full max-w-6xl items-center justify-between rounded-full px-3 py-2 pr-3 transition-all duration-500 sm:px-4 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
          <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
            <Logo />
            <span className={`hidden font-display text-sm font-bold leading-tight tracking-tight sm:block ${textColor}`}>
              Explore<br />Bantu Languages
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <div className="group relative">
              <NavLink to="/languages" className={(s) => `${linkClass(s)} inline-flex items-center gap-1`}>
                Languages <ChevronDown className="h-3.5 w-3.5" />
              </NavLink>
              <div className="invisible absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid grid-cols-2 gap-2 rounded-3xl border border-divider bg-surface p-3 shadow-2xl">
                  {languages.map((l) => (
                    <Link key={l.slug} to={`/languages/${l.slug}`} className="flex flex-col items-start gap-2 rounded-2xl border border-divider bg-background p-3 transition hover:border-primary hover:shadow-md">
                      <span className="flex w-full items-center justify-between">
                        <Flag src={l.countries[0].flag} name={l.countries[0].name} size="h-9 w-9" ring="ring-1 ring-divider" />
                        <span className="font-serif text-base italic text-muted">{l.greeting}</span>
                      </span>
                      <span className="text-sm font-semibold text-ink">{l.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {nav.slice(2).map((n) => (
              <NavLink key={n.to} to={n.to} className={linkClass}>{n.label}</NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="magnetic-btn hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 sm:inline-flex">
              Book a lesson <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${scrolled ? 'text-ink' : 'text-white glass-dark'}`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-deep/95 backdrop-blur-xl lg:hidden" role="dialog" aria-modal="true">
          <div className="kente-bar" />
          <div className="mx-auto flex max-w-md flex-col px-6 py-6">
            <div className="flex items-center justify-between">
              <Logo />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full glass-dark text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-1">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="py-3 font-display text-3xl font-bold tracking-tight text-white">{n.label}</Link>
              ))}
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Languages</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {languages.map((l) => (
                <Link key={l.slug} to={`/languages/${l.slug}`} className="flex flex-col items-start gap-2 rounded-2xl border border-white/10 px-4 py-3 text-white">
                  <Flag src={l.countries[0].flag} name={l.countries[0].name} size="h-8 w-8" ring="ring-1 ring-white/30" />
                  <span className="font-semibold">{l.name}</span>
                  <span className="font-serif text-sm italic text-white/60">{l.greeting}</span>
                </Link>
              ))}
            </div>
            <Link to="/contact" className="magnetic-btn mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-white">
              Book a lesson <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
