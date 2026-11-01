import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import WorldMap from '../components/WorldMap'
import { site } from '../data/site'

export default function Contact() {
  const cards = [
    { icon: Phone, label: 'Call', value: site.phone, href: `tel:${site.phoneTel}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Message us', href: site.whatsapp },
    { icon: MapPin, label: 'Where', value: site.location },
    { icon: Clock, label: 'Lesson times', value: site.hours },
  ]
  return (
    <>
      <Seo title="Contact" description="Book a lesson or ask about Swahili, French, Zulu, Xhosa, Portuguese and English courses." />
      <PageHero eyebrow="Contact" title="Book a lesson," italic="say hello." text="Tell us the language, level and group size. We will reply with dates and a quote." image="/images/culture/lisbon-tram.jpg" crumbs={[{ label: 'Contact' }]} />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-5 lg:px-16">
          <div className="space-y-4 lg:col-span-2">
            {cards.map((c) => {
              const inner = (
                <div className="flex items-start gap-4 rounded-3xl border border-divider bg-surface p-5 transition-shadow hover:shadow-lg">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><c.icon className="h-5 w-5" strokeWidth={2.3} /></span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{c.label}</p>
                    <p className="mt-1 text-sm font-semibold text-ink sm:text-base">{c.value}</p>
                  </div>
                </div>
              )
              return c.href ? (<a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">{inner}</a>) : (<div key={c.label}>{inner}</div>)
            })}
          </div>
          <div className="lg:col-span-3"><ContactForm /></div>
        </div>
      </section>
      <WorldMap eyebrow="Where our languages reach" id="map" />
    </>
  )
}
