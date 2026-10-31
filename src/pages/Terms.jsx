import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

export default function Terms() {
  return (
    <>
      <Seo title="Terms" />
      <PageHero eyebrow="Legal" title="Terms of use" crumbs={[{ label: 'Terms' }]} />
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-base leading-relaxed text-ink/80 sm:px-10">
          <p className="rounded-2xl bg-accent/20 p-4 text-sm">This is a plain-language draft. Please have it reviewed by a legal professional before relying on it.</p>
          <h2 className="font-display text-2xl font-bold">Courses and fees</h2>
          <p>Course dates, schedules and fees are confirmed in a written quote. Quotes in US dollars include a rand estimate, which may change with the exchange rate at the time of payment.</p>
          <h2 className="font-display text-2xl font-bold">Website content</h2>
          <p>Lesson materials, videos and text on this site belong to Explore Bantu Languages. Photos credited to Unsplash photographers remain the property of those photographers and are used under the Unsplash licence.</p>
          <h2 className="font-display text-2xl font-bold">Changes</h2>
          <p>We may update course details and these terms from time to time. The version on this page is the current one.</p>
        </div>
      </section>
    </>
  )
}
