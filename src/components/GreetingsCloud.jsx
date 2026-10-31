// Signature animation: greetings from the five languages drift upward like speech from a classroom.
const WORDS = [
  { t: 'Jambo', c: '#2E8B57', l: '6%', d: '0s', s: 'text-3xl' },
  { t: 'Sawubona', c: '#E8A90C', l: '22%', d: '1.8s', s: 'text-2xl' },
  { t: 'Bonjour', c: '#7FA8E6', l: '40%', d: '3.4s', s: 'text-3xl' },
  { t: 'Molo', c: '#F0707A', l: '58%', d: '0.9s', s: 'text-2xl' },
  { t: 'Olá', c: '#F59A57', l: '74%', d: '2.7s', s: 'text-3xl' },
  { t: 'Habari', c: '#2E8B57', l: '88%', d: '4.5s', s: 'text-2xl' },
  { t: 'Molweni', c: '#F0707A', l: '14%', d: '5.4s', s: 'text-xl' },
  { t: 'Karibu', c: '#E8A90C', l: '50%', d: '6.3s', s: 'text-xl' },
  { t: 'Bom dia', c: '#F59A57', l: '82%', d: '7.2s', s: 'text-xl' },
  { t: 'Merci', c: '#7FA8E6', l: '30%', d: '8s', s: 'text-xl' },
]

export default function GreetingsCloud({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {WORDS.map((w) => (
        <span
          key={w.t}
          className={`absolute bottom-10 font-serif italic font-semibold ${w.s} animate-drift-up opacity-0`}
          style={{ left: w.l, color: w.c, animationDelay: w.d, textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
        >
          {w.t}
        </span>
      ))}
    </div>
  )
}
