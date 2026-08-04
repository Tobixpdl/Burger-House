import { useLayoutEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSiteAnimations(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (!scope.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      const hero = document.querySelector('[data-hero]')
      if (hero) gsap.from('[data-hero] > *', { y: 22, opacity: 0, duration: .65, ease: 'power2.out', stagger: .1 })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => gsap.from(element, { y: 28, opacity: 0, duration: .62, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } }))
    }, scope)
    return () => context.revert()
  }, [scope])
}
