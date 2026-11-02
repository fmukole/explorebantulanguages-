import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Sets the title, description, canonical link, social tags and optional structured data (JSON-LD) for the current page.
export default function Seo({ title, description, image = '/images/og-image.jpg', type = 'website', jsonLd, noindex = false }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name}: Learn Swahili, French, Zulu, Xhosa, Portuguese and English`
    const text = description || site.description
    const url = `${site.url}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
    const img = image.startsWith('http') ? image : `${site.url}${image}`
    document.title = fullTitle
    setMeta('name', 'description', text)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', site.name)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', text)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:locale', 'en_ZA')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', text)
    setMeta('name', 'twitter:image', img)
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)

    let script = document.head.querySelector('script[data-seo-jsonld]')
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seo-jsonld', '')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }
    return () => {
      const s = document.head.querySelector('script[data-seo-jsonld]')
      if (s) s.remove()
    }
  }, [title, description, image, type, jsonLd, noindex, pathname])
  return null
}
