import { useCursor } from '../../hooks/useCursor'
import './Cursor.css'

export function Cursor() {
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
  if (isTouch) return null

  const { pos, isHovering, isVisible, ringEl } = useCursor()

  return (
    <>
      <div
        className={`cursor-dot${isHovering ? ' is-hovering' : ''}${!isVisible ? ' is-hidden' : ''}`}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` }}
      />
      <div
        ref={ringEl}
        className={`cursor-ring${isHovering ? ' is-hovering' : ''}${!isVisible ? ' is-hidden' : ''}`}
      />
    </>
  )
}
