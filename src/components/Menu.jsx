import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV } from '../data.js'
import { EASE } from './Reveal.jsx'

export default function Menu({ open, onClose, onNavigate }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
        document.removeEventListener('keydown', onKey)
      }
    }
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[110] flex flex-col bg-ink-deep"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />

          <div className="shell relative flex items-center justify-between py-6">
            <span className="eyebrow">Navigation</span>
            <button
              onClick={onClose}
              className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-bone"
              aria-label="Close menu"
            >
              <span className="hidden sm:inline">Close</span>
              <span className="relative grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors duration-500 group-hover:border-bone">
                <span className="absolute h-px w-4 rotate-45 bg-current" />
                <span className="absolute h-px w-4 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav className="shell relative flex flex-1 flex-col justify-center">
            <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.12 + i * 0.06, ease: EASE }}
                >
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="group flex w-full items-baseline gap-5 py-4 text-left sm:gap-10 sm:py-5"
                  >
                    <span className="font-mono text-[10px] tracking-[0.28em] text-ash transition-colors duration-500 group-hover:text-ember">
                      {item.index}
                    </span>
                    <span className="relative flex-1 overflow-hidden pb-[0.14em]">
                      <span className="block text-[8vw] font-light leading-[1.02] tracking-tightest text-bone transition-transform duration-700 ease-expo group-hover:-translate-y-full sm:text-[5.4vw]">
                        {item.label}
                      </span>
                      <span className="absolute inset-0 block translate-y-full pt-[0.14em] text-[8vw] font-light leading-[1.02] tracking-tightest text-ember transition-transform duration-700 ease-expo group-hover:translate-y-0 sm:text-[5.4vw]">
                        {item.label}
                      </span>
                    </span>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-ash opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:inline">
                      Jump →
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className="shell relative flex flex-col gap-4 pb-10 pt-6 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="max-w-sm text-pretty text-sm leading-relaxed text-ash">
              Blink is a system built to act before you even realize there&apos;s a decision to make.
            </div>
            <a
              href="mailto:hello@blink.capital"
              className="link-underline font-mono text-[11px] uppercase tracking-[0.28em] text-bone"
            >
              hello@blink.capital
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
