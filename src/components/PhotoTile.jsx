export default function PhotoTile({ photo, className = '', ratio = 'aspect-[4/3]' }) {
  return (
    <figure className={`group relative overflow-hidden rounded-3xl bg-deep shadow-lg ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        width="1400"
        height="1000"
        className={`${ratio} h-full w-full object-cover transition-transform duration-700 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="font-display text-sm font-semibold text-white sm:text-base">{photo.caption}</p>
        {photo.credit && (
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">
            Photo:{' '}
            <a href={photo.creditUrl} target="_blank" rel="noreferrer" className="underline decoration-white/30 hover:text-white">
              {photo.credit} / Unsplash
            </a>
          </p>
        )}
      </figcaption>
    </figure>
  )
}
