import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <PageHero eyebrow="Error 404" title="This page" italic="got lost in translation." text="The page you are looking for does not exist. Try one of these instead.">
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="magnetic-btn rounded-full bg-primary px-6 py-3 font-semibold text-white">Home</Link>
          <Link to="/languages" className="magnetic-btn glass-dark rounded-full border border-white/15 px-6 py-3 font-semibold text-white">Languages</Link>
          <Link to="/contact" className="magnetic-btn glass-dark rounded-full border border-white/15 px-6 py-3 font-semibold text-white">Contact</Link>
        </div>
      </PageHero>
    </>
  )
}
