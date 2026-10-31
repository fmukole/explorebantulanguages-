import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo title="Privacy policy" />
      <PageHero eyebrow="Legal" title="Privacy policy" crumbs={[{ label: 'Privacy' }]} />
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-base leading-relaxed text-ink/80 sm:px-10">
          <p className="rounded-2xl bg-accent/20 p-4 text-sm">This is a plain-language draft. Please have it reviewed by a legal professional before relying on it, including for compliance with South Africa’s Protection of Personal Information Act (POPIA).</p>
          <h2 className="font-display text-2xl font-bold">What we collect</h2>
          <p>When you send an enquiry we ask for your name, a phone number or email address, the language and level you are interested in, and your group size. We use this only to reply to you and to organise lessons.</p>
          <h2 className="font-display text-2xl font-bold">How we use it</h2>
          <p>We do not sell your information. We may share it with a teacher who will be running your lesson. You can ask us to correct or delete your details at any time by contacting us on {site.phone}.</p>
          <h2 className="font-display text-2xl font-bold">Third-party content</h2>
          <p>Fonts are loaded from Google Fonts, flags from a public flag service and some photos from Unsplash. These providers may receive your IP address when your browser loads their files.</p>
        </div>
      </section>
    </>
  )
}
