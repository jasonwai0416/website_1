import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Header({ onOpenMenu }) {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,backdrop-filter,border-color] duration-500 ${
        solid
          ? 'border-b border-white/[0.07] bg-ink/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex items-center justify-between py-4">
        <a href="#top" className="group flex items-center gap-3" aria-label="Blink — home">
          <span className="font-display text-lg font-semibold leading-none tracking-tightest text-bone">
            B<span className="text-ember">L</span>NK
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-ash sm:inline">
            capital
          </span>
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          <div className="hidden items-center gap-2.5 md:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
              System live
            </span>
          </div>

          <a
            href="#contacts"
            className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-ash transition-colors duration-500 hover:text-bone lg:inline"
          >
            Connect
          </a>

          <button
            onClick={onOpenMenu}
            className="group flex items-center gap-3 rounded-full border border-white/15 py-2 pl-5 pr-2 transition-colors duration-500 hover:border-bone"
            aria-label="Open navigation menu"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone">
              Menu
            </span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.06] transition-colors duration-500 group-hover:bg-ember">
              <span className="flex flex-col gap-[3px]">
                <span className="block h-px w-3 bg-current" />
                <span className="block h-px w-3 bg-current" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
