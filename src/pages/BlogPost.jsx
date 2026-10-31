import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import BlogCard, { formatDate } from '../components/BlogCard'
import CTABanner from '../components/CTABanner'
import NotFound from './NotFound'
import { posts, getPost } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFound />
  const index = posts.findIndex((p) => p.slug === slug)
  const prev = posts[index + 1]
  const next = posts[index - 1]
  const related = posts.filter((p) => p.category === post.category && p.slug !== slug).slice(0, 2)

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <PageHero
        eyebrow={`${post.category} · ${formatDate(post.date)} · ${post.readTime}`}
        title={post.title}
        image={post.cover}
        crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.category }]}
      />
      <article className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <img src={post.cover} alt={post.coverAlt} className="-mt-32 mb-12 aspect-[16/9] w-full rounded-5xl object-cover shadow-2xl relative z-10" />
          <div className="space-y-6">
            {post.body.map((b, i) => {
              if (b.type === 'h2') return <h2 key={i} className="pt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">{b.text}</h2>
              if (b.type === 'ul') return (
                <ul key={i} className="space-y-3 pl-1">
                  {b.items.map((it) => (<li key={it} className="flex gap-3 text-base leading-relaxed text-ink/80 sm:text-lg"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" /> {it}</li>))}
                </ul>
              )
              if (b.type === 'quote') return <blockquote key={i} className="border-l-4 border-accent py-1 pl-6 font-serif text-2xl italic leading-snug text-ink">{b.text}</blockquote>
              return <p key={i} className="text-base leading-relaxed text-ink/80 sm:text-lg">{b.text}</p>
            })}
          </div>
          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-divider pt-8 sm:flex-row">
            {prev ? (<Link to={`/blog/${prev.slug}`} className="lift-on-hover inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="h-4 w-4" /> {prev.title}</Link>) : <span />}
            {next ? (<Link to={`/blog/${next.slug}`} className="lift-on-hover inline-flex items-center gap-2 text-right text-sm font-semibold text-primary">{next.title} <ArrowRight className="h-4 w-4" /></Link>) : <span />}
          </div>
        </div>
        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-7xl px-6 sm:px-10 lg:px-16">
            <h2 className="font-display text-2xl font-bold tracking-tight">More like this</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">{related.map((p) => (<BlogCard key={p.slug} post={p} />))}</div>
          </div>
        )}
      </article>
      <CTABanner />
    </>
  )
}
