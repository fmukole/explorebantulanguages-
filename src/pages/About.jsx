import { Link } from 'react-router-dom'
import { ArrowUpRight, Headphones, Users, BookOpen, Heart } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import VideoSlot from '../components/VideoSlot'
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
        text="Explore Bantu Languages teaches Swahili, French, Zulu, Xhosa and Portuguese in Cape Town, with a focus on how languages connect people across Africa."
        image="/images/classroom.jpg"
        crumbs={[{ label: 'About' }]}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
          <div>
            <SectionHeader eyebrow="Our story" title="Why these" italic="five languages?" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>Swahili, isiZulu and isiXhosa belong to the Bantu language family, one of the largest language families in Africa. French and Portuguese are not Bantu languages, but they are spoken by millions of Africans and are essential for work, study and family life across the continent.</p>
              <p>Together, these five languages let you move between East, Central, Southern and West Africa, and beyond. We teach each at three levels so that a complete beginner and an experienced speaker can both find the right class.</p>
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
            <SectionHeader dark eyebrow="Your instructor" title={instructor.name} text={instructor.title} />
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              {instructor.name} presented “{instructor.seminar.title}” at the {instructor.seminar.series}, on {instructor.seminar.date} in {instructor.seminar.venue}. That research on the unity and diversity of Bantu languages shapes how our courses compare and connect the languages we teach.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <img src="/images/seminar-poster.jpg" alt="Poster for the UCT SLL Research Seminar Series talk on the unity and diversity of Bantu languages" loading="lazy" className="w-full rounded-3xl shadow-xl" />
              <VideoSlot aspect="aspect-[9/14]" title="Clip from the seminar" label="Seminar clip" src="/videos/intro-lesson.mp4" poster="/images/intro-lesson-poster.jpg" color="#C8202B" />
            </div>
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
