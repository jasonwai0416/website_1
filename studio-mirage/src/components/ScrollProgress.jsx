import { useEffect, useState } from 'react'

/** Hairline scroll indicator pinned to the top edge. */
export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setP(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[105] h-px bg-white/[0.06]">
      <div
        className="h-full origin-left bg-emerald"
        style={{ transform: `scaleX(${p})`, transition: 'transform 0.12s linear' }}
      />
    </div>
  )
}
