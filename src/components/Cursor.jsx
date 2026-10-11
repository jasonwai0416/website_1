import { useEffect, useRef, useState } from 'react'

/**
 * A minimal cursor reticle: a small ember dot with a lagging ring that
 * grows over interactive targets. Pointer-fine devices only — touch and
 * reduced-motion users keep the native cursor.
 */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-reticle')

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const r = { x: target.x, y: target.y }
    let raf = 0
    let hovering = false
    let down = false

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const onOver = (e) => {
      const el = e.target.closest?.('a, button, [data-cursor]')
      hovering = Boolean(el)
    }

    const onDown = () => (down = true)
    const onUp = () => (down = false)

    const tick = () => {
      r.x += (target.x - r.x) * 0.16
      r.y += (target.y - r.y) * 0.16
      if (dot.current) {
        dot.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`
      }
      if (ring.current) {
        const scale = hovering ? (down ? 0.8 : 1.85) : down ? 0.72 : 1
        ring.current.style.transform = `translate3d(${r.x}px, ${r.y}px, 0) translate(-50%, -50%) scale(${scale})`
        ring.current.style.opacity = hovering ? '0.9' : '0.42'
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      document.documentElement.classList.remove('cursor-reticle')
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
    }
  }, [])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[120] hidden md:block">
      <div
        ref={ring}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-bone/70"
        style={{ transition: 'opacity 0.3s ease', willChange: 'transform' }}
      />
      <div
        ref={dot}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-ember"
        style={{ willChange: 'transform' }}
      />
    </div>
  )
}
