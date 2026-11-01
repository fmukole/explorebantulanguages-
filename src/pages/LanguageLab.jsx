import { Link } from 'react-router-dom'
import { ArrowLeftRight, ArrowRight, FileText, Headphones, MessageCircle, Mic } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { site } from '../data/site'

// Language pairs. `both: true` means the service works in both directions.
const services = [
  {
    id: 'interpretation',
    icon: Mic,
    title: 'Interpretation',
    intro: 'A professional speaks for you, live, so that two people or two groups can understand each other in meetings, events, interviews and appointments.',
    bullets: ['Spoken interpreting in both directions', 'Meetings, conferences, interviews and community events', 'We also interpret between the other languages above, for example Swahili and French'],
    pairs: [
      { a: 'French', b: 'English', both: true },
      { a: 'Swahili', b: 'English', both: true },
      { a: 'Portuguese', b: 'English', both: true },
      { a: 'French', b: 'Swahili', both: true },
      { a: 'French', b: 'Portuguese', both: true },
    ],
    quoteText: 'interpretation',
    photo: '/images/lab/interpretation.webp',
    photoAlt: 'Two people talking across languages in a café, with speech bubbles in Spanish and Portuguese',
  },
  {
    id: 'translation',
    icon: FileText,
    title: 'Translation',
    intro: 'Written texts rendered carefully from one language into another: documents, books and research papers.',
    bullets: ['Documents, books and research papers', 'Mostly English and French, and Portuguese and English', 'Other language pairs on request'],
    pairs: [
      { a: 'English', b: 'French', both: true },
      { a: 'Portuguese', b: 'English', both: true },
    ],
    quoteText: 'translation',
    photo: '/images/lab/translation.webp',
    photoAlt: 'Two people studying a book with French and English words side by side',
  },
  {
    id: 'transcription',
    icon: Headphones,
    title: 'Transcription',
    intro: 'We turn recordings into written text, and into another language when you need it: meetings, conversations and speeches.',
    bullets: ['Meetings, conversations and speeches', 'Transcription in all the languages we teach, with or without translation', 'What is possible depends on the recording, so please tell us about it when you ask'],
    pairs: [
      { a: 'French', b: 'English' },
      { a: 'English', b: 'French' },
      { a: 'Portuguese', b: 'English' },
      { a: 'English', b: 'Portuguese' },
      { a: 'Swahili', b: 'English' },
    ],
    quoteText: 'transcription',
    photo: '/images/lab/transcription.webp',
    photoAlt: 'A person wearing headphones, working at a laptop',
  },
]

const waLink = (what) => `${site.whatsapp}?text=${encodeURIComponent(`Hello, I would like a quote for ${what}. Language pair: `)}`

function Pair({ p }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-divider bg-background px-4 py-2 text-sm font-semibold">
      {p.a} {p.both ? <ArrowLeftRight className="h-4 w-4 text-primary" aria-label="and" /> : <ArrowRight className="h-4 w-4 text-primary" aria-label="to" />} {p.b}
    </li>
  )
}

export default function LanguageLab() {
  return (
    <>
      <Seo title="Language Lab" description="Interpretation, translation and transcription in French, English, Swahili and Portuguese, from Cape Town. Ask for a quote." />
      <PageHero
        eyebrow="Language Lab"
        title="Interpretation, translation"
        italic="and transcription."
        text="Professional language work in French, English, Swahili and Portuguese. Every job is different, so we quote each one. Ask us for a quote."
        image="/images/classroom.jpg"
        crumbs={[{ label: 'Language Lab' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a href={waLink('the Language Lab')} target="_blank" rel="noreferrer" className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30"><MessageCircle className="h-4 w-4" /> Ask for a quote</a>
          <a href="#interpretation" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10">See the services</a>
        </div>
      </PageHero>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-24 py-20 sm:py-28 ${i % 2 === 0 ? 'bg-background' : 'bg-surface'}`}>
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"><s.icon className="h-7 w-7" strokeWidth={2.2} /></span>
              <div className="mt-6"><SectionHeader eyebrow={`Service ${i + 1} of 3`} title={s.title} text={s.intro} /></div>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">Language pairs</p>
              <ul className="mt-4 flex flex-wrap gap-3">{s.pairs.map((p) => (<Pair key={p.a + p.b} p={p} />))}</ul>
              {s.id === 'interpretation' && <p className="mt-3 text-sm text-muted">Arrows pointing both ways mean we interpret in both directions.</p>}
              <ul className="mt-8 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink/80"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {b}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={waLink(s.quoteText)} target="_blank" rel="noreferrer" className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30"><MessageCircle className="h-4 w-4" /> Ask for a {s.title.toLowerCase()} quote</a>
                <Link to="/contact" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">or use the contact form</Link>
              </div>
            </div>
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <img src={s.photo} alt={s.photoAlt} loading="lazy" className="aspect-[4/3] w-full rounded-5xl object-cover shadow-xl" />
            </div>
          </div>
        </section>
      ))}

      <section className="bg-deep py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <SectionHeader dark align="center" eyebrow="Prices" title="Ask us for" italic="a quote." text="We do not publish prices because each job depends on the languages, the length, the subject and the deadline. Tell us what you need and we will send you a quote." />
          <a href={waLink('the Language Lab')} target="_blank" rel="noreferrer" className="magnetic-btn mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/30"><MessageCircle className="h-4 w-4" /> Request a quote on WhatsApp</a>
        </div>
      </section>
    </>
  )
}
