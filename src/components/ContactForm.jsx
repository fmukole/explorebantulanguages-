import { useState } from 'react'
import { CheckCircle2, Send, Loader2 } from 'lucide-react'
import { languages } from '../data/languages'

const field = 'w-full rounded-2xl border border-divider bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20'

export default function ContactForm({ defaultLanguage = '' }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ name: '', contact: '', language: defaultLanguage, level: 'Beginner', group: '1', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // No backend yet: this simulates sending. Connect Formspree, Netlify Forms or an email service to receive messages.
  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  if (status === 'sent') {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-4xl border border-divider bg-surface p-10 text-center shadow-sm">
        <CheckCircle2 className="h-14 w-14 text-leaf" strokeWidth={1.8} />
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">Asante, thank you, {form.name || 'friend'}!</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">We have noted your interest in {form.language || 'our courses'} ({form.level}). We will reply with course dates and a quote.</p>
        <button type="button" onClick={() => setStatus('idle')} className="lift-on-hover mt-6 text-sm font-semibold text-primary">Send another message</button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-4xl border border-divider bg-surface p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">Your name
          <input required value={form.name} onChange={set('name')} className={`${field} mt-1.5`} placeholder="Full name" />
        </label>
        <label className="block text-sm font-medium">Phone or email
          <input required value={form.contact} onChange={set('contact')} className={`${field} mt-1.5`} placeholder="How can we reach you?" />
        </label>
        <label className="block text-sm font-medium">Language
          <select required value={form.language} onChange={set('language')} className={`${field} mt-1.5`}>
            <option value="" disabled>Choose a language</option>
            {languages.map((l) => (<option key={l.slug} value={l.name}>{l.name} ({l.native})</option>))}
          </select>
        </label>
        <label className="block text-sm font-medium">Level
          <select value={form.level} onChange={set('level')} className={`${field} mt-1.5`}>
            <option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Not sure, test me</option>
          </select>
        </label>
        <label className="block text-sm font-medium sm:col-span-2">How many people will learn?
          <select value={form.group} onChange={set('group')} className={`${field} mt-1.5`}>
            <option value="1">Just me</option><option value="2-4">2 to 4 people</option><option value="5-10">5 to 10 people</option><option value="10+">More than 10</option>
          </select>
        </label>
        <label className="block text-sm font-medium sm:col-span-2">Message (optional)
          <textarea rows={4} value={form.message} onChange={set('message')} className={`${field} mt-1.5 resize-none`} placeholder="Tell us your goals, schedule or questions" />
        </label>
      </div>
      <button type="submit" disabled={status === 'sending'} className="magnetic-btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/30 disabled:opacity-70 sm:w-auto">
        {status === 'sending' ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending</>) : (<><Send className="h-4 w-4" /> Send enquiry</>)}
      </button>
    </form>
  )
}
