import { useEffect } from 'react'
import { site } from '../data/site'

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name}: ${site.tagline}`
    const text = description || site.description
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', text)
    let og = document.querySelector('meta[property="og:title"]')
    if (!og) {
      og = document.createElement('meta')
      og.setAttribute('property', 'og:title')
      document.head.appendChild(og)
    }
    og.setAttribute('content', document.title)
  }, [title, description])
  return null
}
