import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NAV } from '../data.js'
import { EASE } from './Reveal.jsx'

export default function Header({ onNavigate }) {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,backdrop-filter,border-color] duration-500 ${
        solid
          ? 'border-b border-white/[0.08] bg-charcoal/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex items-center justify-between py-5">
        <button
          onClick={() => onNavigate('top')}
          className="group flex items-center gap-3 text-left"
          aria-label="Studio Mirage — home"
        >
          <span className="flex flex-col leading-none">
            <span className="font-display text-base uppercase tracking-tight text-bone">
              Studio Mirage
            </span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.3em] text-mist">
              Paris · Dubai
            </span>
          </span>
          <span
            lang="ar"
            dir="rtl"
            className="hidden font-arabic text-lg leading-none text-emerald sm:inline"
          >
            ميراج
          </span>
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="link-underline font-mono text-[10px] uppercase tracking-[0.26em] text-mist transition-colors duration-500 hover:text-bone"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate('contact')}
          className="group flex items-center gap-2.5 rounded-full border border-white/15 py-2.5 pl-5 pr-2.5 transition-colors duration-500 hover:border-emerald"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-bone">
            Start a project
          </span>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/[0.07] text-emerald transition-colors duration-500 group-hover:bg-emerald group-hover:text-charcoal-deep">
            <span className="text-[11px] leading-none">↗</span>
          </span>
        </button>
      </div>
    </motion.header>
  )
}
