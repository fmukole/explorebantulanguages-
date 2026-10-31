import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const formatDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' })

export default function BlogCard({ post, featured = false }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group flex overflow-hidden rounded-3xl border border-divider bg-surface shadow-sm transition-shadow hover:shadow-xl ${featured ? 'flex-col lg:flex-row' : 'flex-col'}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : ''}`}>
        <img
          src={post.cover}
          alt={post.coverAlt}
          loading="lazy"
          width="1400"
          height="1000"
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${featured ? 'aspect-[16/10] lg:h-full lg:aspect-auto' : 'aspect-[16/10]'}`}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">{post.category}</span>
      </div>
      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${featured ? 'lg:w-1/2 lg:justify-center' : ''}`}>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h3 className={`mt-3 font-display font-bold leading-tight tracking-tight text-ink ${featured ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>{post.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{post.excerpt}</p>
        <span className="lift-on-hover mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
