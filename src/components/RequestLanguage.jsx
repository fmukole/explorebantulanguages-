import { useState } from 'react'
import { MessageCircle, Users, User, Network } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { site } from '../data/site'

const field = 'w-full rounded-2xl border border-divider bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20'
const suggestions = ['Lingala', 'Tshiluba', 'Kikongo', 'Shona', 'Chichewa', 'Sesotho', 'Setswana', 'Kinyarwanda', 'Kirundi', 'Ndebele', 'siSwati', 'Tsonga']

// Visitors ask for any Bantu language. The request opens WhatsApp with the details filled in, so it reaches us without a backend.
export default function RequestLanguage() {
  const [form, setForm] = useState({ name: '', contact: '', language: '', mode: 'In person', people: '', notes: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    const lines = [
      'Hello, I would like to request a Bantu language.',
      `Language: ${form.language}`,
      `Training: ${form.mode}${form.mode === 'In a group' && form.people ? ` (about ${form.people} people)` : ''}`,
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      form.notes ? `Notes: ${form.notes}` : '',
    ].filter(Boolean)
    window.open(`${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
  }

  return (
    <section id="request-a-language" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <div>
          <SectionHeader eyebrow="Request a language" title="Can’t find your" italic="Bantu language?" text="Tell us which language you want to learn. We work with a network of language providers, and we can bring in a teacher to train you, in person or in a group." />
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Network className="h-5 w-5" /></span><span><span className="block font-display font-bold">A network of providers</span><span className="text-sm text-muted">Beyond the six languages on this site, we can connect you with experienced teachers of other Bantu languages.</span></span></li>
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><User className="h-5 w-5" /></span><span><span className="block font-display font-bold">In person</span><span className="text-sm text-muted">One teacher, one learner, at a time and place that suit you.</span></span></li>
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Users className="h-5 w-5" /></span><span><span className="block font-display font-bold">In a group</span><span className="text-sm text-muted">A family, team or organisation learning together.</span></span></li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-4xl border border-divider bg-background p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">Your name
              <input required value={form.name} onChange={set('name')} className={`${field} mt-1.5`} placeholder="Full name" />
            </label>
            <label className="block text-sm font-medium">Phone or email
              <input required value={form.contact} onChange={set('contact')} className={`${field} mt-1.5`} placeholder="How can we reach you?" />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">Language you want to learn
              <input required list="bantu-suggestions" value={form.language} onChange={set('language')} className={`${field} mt-1.5`} placeholder="For example Lingala, Shona, Chichewa" />
              <datalist id="bantu-suggestions">{suggestions.map((l) => (<option key={l} value={l} />))}</datalist>
            </label>
            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-medium">How would you like to be trained?</legend>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {['In person', 'In a group'].map((m) => (
                  <label key={m} className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition ${form.mode === m ? 'border-primary bg-primary/5 text-primary' : 'border-divider bg-white text-ink'}`}>
                    <input type="radio" name="mode" value={m} checked={form.mode === m} onChange={set('mode')} className="accent-[#C8202B]" />
                    {m === 'In person' ? <User className="h-4 w-4" /> : <Users className="h-4 w-4" />} {m}
                  </label>
                ))}
              </div>
            </fieldset>
            {form.mode === 'In a group' && (
              <label className="block text-sm font-medium sm:col-span-2">How many people in the group?
                <input value={form.people} onChange={set('people')} inputMode="numeric" className={`${field} mt-1.5`} placeholder="For example 6" />
              </label>
            )}
            <label className="block text-sm font-medium sm:col-span-2">Anything else? (optional)
              <textarea rows={3} value={form.notes} onChange={set('notes')} className={`${field} mt-1.5 resize-none`} placeholder="Your goals, your city, when you would like to start" />
            </label>
          </div>
          <button type="submit" className="magnetic-btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/30 sm:w-auto"><MessageCircle className="h-4 w-4" /> Send request on WhatsApp</button>
          <p className="mt-3 text-xs text-muted">This opens WhatsApp with your request filled in. Nothing is sent until you press send there.</p>
        </form>
      </div>
    </section>
  )
}
