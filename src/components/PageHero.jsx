import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ChevronRight } from 'lucide-react'
import GreetingsCloud from './GreetingsCloud'

export default function PageHero({ eyebrow, title, italic, text, image, crumbs = [], children, tint = '#C8202B' }) {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ph-in', { y: 32, opacity: 0, duration: 0.9, stagger: 0.12, delay: 0.15, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative min-h-[56dvh] overflow-hidden bg-deep">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover brightness-[0.5]" />}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${tint}55, transparent 55%)` }} />
      <div className="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/45 to-deep/80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep to-transparent" />
      <GreetingsCloud className="hidden sm:block opacity-60" />
      <div className="relative z-10 mx-auto flex min-h-[56dvh] max-w-7xl flex-col justify-end px-6 pb-14 pt-36 sm:px-10 lg:px-16">
        <nav aria-label="Breadcrumb" className="ph-in mb-6 flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60 sm:text-xs">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="ph-in mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>}
        <h1 className="ph-in max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-tighter text-white text-balance sm:text-6xl lg:text-7xl">
          {title} {italic && <span className="font-serif italic font-medium">{italic}</span>}
        </h1>
        {text && <p className="ph-in mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{text}</p>}
        {children && <div className="ph-in mt-8">{children}</div>}
      </div>
    </section>
  )
}
