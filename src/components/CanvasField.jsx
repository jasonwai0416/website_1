import { useEffect, useRef } from 'react'

/**
 * A quiet, high-frequency market field rendered on canvas.
 * Vertical depth bars breathe and drift while a faint price trace flows
 * left-to-right. Deliberately low-contrast so type stays the hero.
 *
 * Performance guards:
 *  - DPR capped at 2
 *  - rAF loop pauses when the tab is hidden
 *  - fully skipped for prefers-reduced-motion
 */
export default function CanvasField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let raf = 0
    let running = true
    let t = 0

    // Column descriptors for the depth bars.
    let cols = []
    let trace = []

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const gap = width < 700 ? 34 : 26
      const count = Math.ceil(width / gap) + 2
      cols = Array.from({ length: count }, (_, i) => ({
        x: i * gap,
        seed: Math.random() * Math.PI * 2,
        speed: 0.25 + Math.random() * 0.55,
        base: 0.12 + Math.random() * 0.5,
        accent: Math.random() > 0.94,
      }))

      const points = Math.ceil(width / 4) + 2
      trace = Array.from({ length: points }, (_, i) => ({ i, v: 0.5 }))
    }

    const draw = () => {
      if (!running) return
      t += 0.006

      ctx.clearRect(0, 0, width, height)

      // Depth bars, anchored to the lower third.
      const floor = height * 0.82
      const maxBar = height * 0.46
      for (const c of cols) {
        const wave =
          Math.sin(t * c.speed * 2.1 + c.seed) * 0.5 +
          Math.sin(t * c.speed * 0.7 + c.seed * 2) * 0.5
        const h = maxBar * (c.base + 0.5 * (wave * 0.5 + 0.5))
        const w = 1
        ctx.fillStyle = c.accent ? 'rgba(255,77,28,0.30)' : 'rgba(255,255,255,0.055)'
        ctx.fillRect(Math.round(c.x), floor - h, w, h)
      }

      // Flowing price trace.
      const mid = height * 0.52
      const amp = height * 0.16
      trace.forEach((p) => {
        const x = p.i * 4
        const n =
          Math.sin(x * 0.006 + t * 3.1) * 0.5 +
          Math.sin(x * 0.017 - t * 1.7) * 0.28 +
          Math.sin(x * 0.041 + t * 5.3) * 0.12
        p.v = mid - n * amp
      })

      ctx.beginPath()
      trace.forEach((p, i) => {
        const x = p.i * 4
        if (i === 0) ctx.moveTo(x, p.v)
        else ctx.lineTo(x, p.v)
      })
      ctx.strokeStyle = 'rgba(244,242,238,0.10)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Leading dot on the trace.
      const last = trace[trace.length - 1]
      if (last) {
        ctx.beginPath()
        ctx.arc(last.i * 4, last.v, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,77,28,0.75)'
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const onVisibility = () => {
      running = !document.hidden
      if (running) {
        raf = requestAnimationFrame(draw)
      } else {
        cancelAnimationFrame(raf)
      }
    }

    build()

    if (reduce) {
      // One static frame — atmosphere without motion.
      running = false
      draw()
    } else {
      raf = requestAnimationFrame(draw)
      document.addEventListener('visibilitychange', onVisibility)
    }

    const ro = new ResizeObserver(build)
    ro.observe(canvas)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', onVisibility)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ display: 'block' }}
    />
  )
}
