import { useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import BlogCard from '../components/BlogCard'
import CTABanner from '../components/CTABanner'
import { posts, postCategories } from '../data/posts'

export default function Blog() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? posts : posts.filter((p) => p.category === cat)
  const [featured, ...rest] = filtered

  return (
    <>
      <Seo title="Blog" description="Tips, phrases and cultural stories for learners of Swahili, French, Zulu, Xhosa, Portuguese and English." />
      <PageHero
        eyebrow="The blog"
        title="Tips, phrases and"
        italic="stories."
        text="Short reads to help you learn faster and understand the cultures behind the languages."
        image="/images/blog/class.webp"
        crumbs={[{ label: 'Blog' }]}
      />
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter posts by category">
            {postCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${cat === c ? 'border-primary bg-primary text-white' : 'border-divider bg-surface text-ink hover:border-primary'}`}
              >
                {c}
              </button>
            ))}
          </div>
          {featured && (
            <div className="mt-10"><BlogCard post={featured} featured /></div>
          )}
          {rest.length > 0 && (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (<BlogCard key={p.slug} post={p} />))}
            </div>
          )}
          <p className="mt-12 text-xs text-muted">Posts are sample drafts for the owner to review and edit.</p>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
