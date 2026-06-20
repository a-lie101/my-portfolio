import { useEffect, useRef, useState } from 'react'

export function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ringPos = useRef({ x: -100, y: -100 })
  const ringEl = useRef(null)
  const rafId = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    const onMove = e => {
      setPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    const updateHover = () => {
      const targets = document.querySelectorAll('[data-cursor-hover]')
      targets.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }
    updateHover()
    const mutationObs = new MutationObserver(updateHover)
    mutationObs.observe(document.body, { childList: true, subtree: true })

    const lerp = (a, b, t) => a + (b - a) * t

    const animateRing = () => {
      if (ringEl.current) {
        ringPos.current.x = lerp(ringPos.current.x, pos.x, 0.12)
        ringPos.current.y = lerp(ringPos.current.y, pos.y, 0.12)
        ringEl.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
      }
      rafId.current = requestAnimationFrame(animateRing)
    }

    rafId.current = requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      mutationObs.disconnect()
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return { pos, isHovering, isVisible, ringEl }
}
