import { useState } from 'react'
import { Play, Clapperboard } from 'lucide-react'

// A short-video slot. Plays an mp4 (src) or a YouTube video (youtube id). With neither, it shows a clearly labelled "coming soon" tile.
export default function VideoSlot({ title, label = 'Short clip', src, youtube, poster, color = '#C8202B', aspect = 'aspect-video', note }) {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(src || youtube)

  if (playing && src) {
    return (
      <div className={`${aspect} w-full overflow-hidden rounded-3xl bg-black shadow-xl`}>
        <video src={src} poster={poster} controls autoPlay playsInline className="h-full w-full object-contain" />
      </div>
    )
  }
  if (playing && youtube) {
    return (
      <div className={`${aspect} w-full overflow-hidden rounded-3xl bg-black shadow-xl`}>
        <iframe
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${youtube}?autoplay=1&rel=0`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => hasVideo && setPlaying(true)}
      disabled={!hasVideo}
      aria-label={hasVideo ? `Play video: ${title}` : `${title} (video coming soon)`}
      className={`group relative ${aspect} w-full overflow-hidden rounded-3xl text-left shadow-xl ${hasVideo ? 'cursor-pointer' : 'cursor-default'}`}
      style={{ background: `linear-gradient(135deg, ${color}, #0E1A33)` }}
    >
      {poster && <img src={poster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" />}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-deep/10" />
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 backdrop-blur">
        <Clapperboard className="h-3.5 w-3.5 text-white" strokeWidth={2.4} />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">{hasVideo ? label : 'Video coming soon'}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-2xl transition-transform duration-300 ${hasVideo ? 'group-hover:scale-110 ring-pulse' : 'opacity-70'}`}>
          <Play className="ml-1 h-7 w-7 fill-current" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="font-display text-base font-bold leading-snug text-white sm:text-lg">{title}</p>
        {note && <p className="mt-1 text-xs text-white/70">{note}</p>}
      </div>
    </button>
  )
}
