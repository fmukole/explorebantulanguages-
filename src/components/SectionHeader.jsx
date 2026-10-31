export default function SectionHeader({ eyebrow, title, italic, text, align = 'left', dark = false }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && (
        <p className={`font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] ${dark ? 'text-accent' : 'text-primary'} mb-4`}>{eyebrow}</p>
      )}
      <h2 className={`font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.02] text-balance ${dark ? 'text-white' : 'text-ink'}`}>
        {title} {italic && <span className="font-serif italic font-medium">{italic}</span>}
      </h2>
      {text && <p className={`mt-5 text-base sm:text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-muted'}`}>{text}</p>}
    </div>
  )
}
