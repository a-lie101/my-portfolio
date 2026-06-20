import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '')

  useEffect(() => {
    const ratioMap = new Map(sectionIds.map(id => [id, 0]))

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          ratioMap.set(entry.target.id, entry.intersectionRatio)
        })
        let maxRatio = 0
        let active = activeSection
        ratioMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio
            active = id
          }
        })
        setActiveSection(active)
      },
      { threshold: [0, 0.1, 0.3, 0.5, 0.7, 1] }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}
