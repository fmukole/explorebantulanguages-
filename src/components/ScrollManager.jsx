import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Pages clean up their own GSAP contexts on unmount (ctx.revert()), so this only resets scroll and refreshes triggers.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
    const id = setTimeout(() => ScrollTrigger.refresh(), 250)
    return () => clearTimeout(id)
  }, [pathname, hash])
  return null
}
