import { useEffect, useRef, useState } from 'react'

/**
 * Hook per animazioni allo scroll usando Intersection Observer
 * @param {Object} options - Opzioni per Intersection Observer
 * @param {number} options.threshold - Percentuale di visibilità per triggare (default: 0.1)
 * @param {string} options.rootMargin - Margine per il trigger (default: '0px')
 * @param {boolean} options.triggerOnce - Se true, anima solo una volta (default: true)
 * @returns {Object} - { ref, isVisible }
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Se triggerOnce è true, disconnetti l'observer dopo il primo trigger
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

/**
 * Hook semplificato per fade-in-up animation
 * @param {number} delay - Delay in millisecondi (default: 0)
 * @returns {Object} - { ref, className }
 */
export function useFadeInUp(delay = 0) {
  const { ref, isVisible } = useScrollAnimation()

  const className = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {}

  return { ref, className, style }
}
