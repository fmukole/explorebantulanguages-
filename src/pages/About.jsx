import { Link } from 'react-router-dom'
import { ArrowUpRight, Headphones, Users, BookOpen, Heart } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'
import { instructor, site } from '../data/site'

const values = [
  { icon: Headphones, title: 'Listen first', text: 'Sounds before rules. You hear a language before you are asked to analyse it.' },
  { icon: Users, title: 'Respect the people', text: 'Every language comes with manners, greetings and history, and we teach those too.' },
  { icon: BookOpen, title: 'Clear structure', text: 'Three levels with clear goals, so you always know where you are and what is next.' },
  { icon: Heart, title: 'Learn with joy', text: 'Songs, proverbs, photos and stories keep lessons human and memorable.' },
]

export default function About() {
  return (
    <>
      <Seo title="About" description={`About ${site.name}: language lessons rooted in Bantu linguistics and the cultures of Africa.`} />
      <PageHero
        eyebrow="About us"
        title="Languages taught"
        italic="with respect for the culture."
        text="Explore Bantu Languages teaches Swahili, French, Zulu, Xhosa, Portuguese and English in Cape Town, with a focus on how languages connect people across Africa."
        image="/images/classroom.jpg"
        crumbs={[{ label: 'About' }]}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
          <div>
            <SectionHeader eyebrow="Our story" title="Why these" italic="six languages?" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>Swahili, isiZulu and isiXhosa belong to the Bantu language family, one of the largest language families in Africa. French, Portuguese and English are not Bantu languages, but they are spoken by millions of Africans and are essential for work, study and family life across the continent.</p>
              <p>Together, these six languages let you move between East, Central, Southern and West Africa, and beyond. We teach each at three levels so that a complete beginner and an experienced speaker can both find the right class.</p>
            </div>
          </div>
          <div className="relative">
            <img src="/images/logo.jpg" alt="Explore Bantu Languages logo: a speech bubble around a map of Africa" loading="lazy" className="w-full rounded-5xl bg-white object-contain p-6 shadow-xl" />
          </div>
        </div>
      </section>

      <section className="bg-deep py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-5 lg:px-16">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-5xl bg-black shadow-2xl">
              <img src="/images/instructor-portrait.jpg" alt={`Portrait of ${instructor.name}`} loading="lazy" className="aspect-[3/4] w-full object-cover object-top" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <SectionHeader dark eyebrow="Our founder" title={instructor.name} text={`${instructor.title}. Founder and teacher, Explore Bantu Languages.`} />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-white/75 sm:text-lg">
              <p>{instructor.name} started out as a teacher of French and Swahili. Teaching two languages from different families, one Romance and one Bantu, made him look closely at how languages are built and how they relate to each other.</p>
              <p>That curiosity grew into research on the commonality of Bantu languages, which he presented at the University of Cape Town. It also grew into a school: Explore Bantu Languages, which he founded to teach African languages, and the languages Africans use every day, together and with respect for the cultures behind them.</p>
              <p>Today he leads the school as its founder and teacher, together with a team that covers French, Portuguese, English, Xhosa and Zulu as well as Swahili.</p>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">He speaks</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {instructor.speaks.map((l) => (<li key={l} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white">{l}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeader eyebrow="Our methodology" title="Learn the family," italic="not just the language." text="Languages that share an ancestor share patterns. We teach those patterns on purpose, so each new language you add is easier than the last." />

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <img src="/images/about/nguni.webp" alt="A man and a woman in traditional Nguni dress greeting each other" loading="lazy" className="aspect-[4/3] w-full rounded-5xl object-cover shadow-xl" />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The Bantu and Nguni family</p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">Zulu, Xhosa and their cousins</h3>
              <p className="mt-4 leading-relaxed text-muted">isiZulu, isiXhosa, siSwati and the Ndebele of Zimbabwe belong to the Nguni branch of the Bantu languages. They share noun classes, verb endings and much of their vocabulary, so a learner of one can often follow the others. Swahili sits in the wider Bantu family and follows the same basic design.</p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-divider bg-surface">
                <table className="w-full text-left text-sm">
                  <thead className="bg-background font-mono text-[10px] uppercase tracking-[0.14em] text-muted"><tr><th className="px-4 py-3">English</th><th className="px-4 py-3">Zulu</th><th className="px-4 py-3">Xhosa</th><th className="px-4 py-3">Swahili</th></tr></thead>
                  <tbody className="divide-y divide-divider">
                    <tr><td className="px-4 py-3">person</td><td className="px-4 py-3 font-semibold">umuntu</td><td className="px-4 py-3 font-semibold">umntu</td><td className="px-4 py-3 font-semibold">mtu</td></tr>
                    <tr><td className="px-4 py-3">people</td><td className="px-4 py-3 font-semibold">abantu</td><td className="px-4 py-3 font-semibold">abantu</td><td className="px-4 py-3 font-semibold">watu</td></tr>
                    <tr><td className="px-4 py-3">water</td><td className="px-4 py-3 font-semibold">amanzi</td><td className="px-4 py-3 font-semibold">amanzi</td><td className="px-4 py-3 font-semibold">maji</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">The same idea, a prefix for a singular and a prefix for the plural, appears in all three. We use it to teach noun classes once and apply them everywhere.</p>
            </div>
          </div>

          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <img src="/images/about/latin.webp" alt="A student at a laptop with greetings in German, Spanish, French, English and Portuguese on a chalkboard" loading="lazy" className="aspect-[4/3] w-full rounded-5xl object-cover shadow-xl" />
            </div>
            <div className="lg:order-1">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The Latin family</p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">French and Portuguese, sisters of Latin</h3>
              <p className="mt-4 leading-relaxed text-muted">French and Portuguese, like Spanish, Italian and Romanian, grew out of Latin. Their verbs, genders and many everyday words match, so we teach them as a pair. English joins the circle through its large French and Latin vocabulary.</p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-divider bg-surface">
                <table className="w-full text-left text-sm">
                  <thead className="bg-background font-mono text-[10px] uppercase tracking-[0.14em] text-muted"><tr><th className="px-4 py-3">Latin</th><th className="px-4 py-3">French</th><th className="px-4 py-3">Portuguese</th><th className="px-4 py-3">Spanish</th></tr></thead>
                  <tbody className="divide-y divide-divider">
                    <tr><td className="px-4 py-3">aqua</td><td className="px-4 py-3 font-semibold">eau</td><td className="px-4 py-3 font-semibold">água</td><td className="px-4 py-3 font-semibold">agua</td></tr>
                    <tr><td className="px-4 py-3">nox</td><td className="px-4 py-3 font-semibold">nuit</td><td className="px-4 py-3 font-semibold">noite</td><td className="px-4 py-3 font-semibold">noche</td></tr>
                    <tr><td className="px-4 py-3">lingua</td><td className="px-4 py-3 font-semibold">langue</td><td className="px-4 py-3 font-semibold">língua</td><td className="px-4 py-3 font-semibold">lengua</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">Spotting the shared root is often the fastest way to remember a word, and to know how it will be spelled.</p>
            </div>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Sound first', 'You hear and say a language before you analyse it.'],
              ['Patterns before rules', 'We show you the pattern, then name the rule.'],
              ['Compare across the family', 'Noun classes in Bantu, gender and verbs in Latin languages: learn once, use again.'],
              ['Real situations', 'Greetings, markets, work and family, with examples from where you will use the language.'],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-4xl border border-divider bg-surface p-6">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h4 className="mt-3 font-display text-xl font-bold tracking-tight">{t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeader eyebrow="How we teach" title="Four" italic="principles." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-4xl border border-divider bg-background p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><v.icon className="h-6 w-6" strokeWidth={2.3} /></span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
          <Link to="/languages" className="magnetic-btn mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30">
            See the courses <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
