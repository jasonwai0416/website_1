import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CanvasField from './CanvasField.jsx'
import { RiseLine, EASE } from './Reveal.jsx'
import { TICKER } from '../data.js'

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const utc = now.toISOString().slice(11, 19)
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
      UTC {utc}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] w-full flex-col overflow-hidden">
      {/* Atmosphere: canvas market field + faint blueprint grid */}
      <div className="absolute inset-0">
        <CanvasField />
        <div className="grid-lines absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_35%,#0a0a0a_100%)]" />
      </div>

      <div className="shell relative flex flex-1 flex-col justify-between pb-10 pt-28 sm:pt-32">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="flex items-start justify-between gap-6"
        >
          <span className="eyebrow max-w-[10rem] leading-relaxed">
            Systematic capital
            <br />
            Multi-asset
          </span>
          <Clock />
        </motion.div>

        {/* Wordmark */}
        <div className="relative flex flex-1 items-center py-10">
          <h1 className="w-full select-none">
            <span className="sr-only">BLINK</span>
            <span
              aria-hidden="true"
              className="flex w-full items-baseline justify-between leading-[0.82] tracking-tightest text-bone"
            >
              {['B', 'L', '/', '*', 'N', 'K'].map((glyph, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                  <motion.span
                    className={`block text-[20vw] font-extralight sm:text-[17vw] ${
                      glyph === '/' || glyph === '*' ? 'text-ember' : ''
                    }`}
                    initial={{ y: '108%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.15, delay: 0.4 + i * 0.075, ease: EASE }}
                  >
                    {glyph}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Statement + actions */}
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, delay: 0.9, ease: EASE }}
            className="h-px w-full origin-left bg-white/10"
          />

          <div className="grid gap-8 pt-7 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
            <h2 className="text-balance text-[7.6vw] font-light leading-[1.06] tracking-tightest text-bone sm:text-[4.4vw] lg:text-[2.9vw]">
              <RiseLine text="Blink is a system built to act before you even realize" delay={0.85} />
              <RiseLine text="there's a decision to make." delay={1.25} className="text-ash" />
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.6, ease: EASE }}
              className="flex flex-col justify-end gap-6"
            >
              <p className="max-w-md text-pretty text-sm leading-relaxed text-ash">
                A proprietary algorithmic core watching multi-asset markets around the clock —
                executing in fractions of a second, supervised by people who know what to look for.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#how" className="btn-ember">
                  <span>How blink works</span>
                </a>
                <a href="#origin" className="btn-ghost">
                  <span>Our story</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Asset-class marquee */}
      <div className="relative border-y border-white/[0.07] bg-ink/40 py-3.5 backdrop-blur-sm">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {TICKER.map((item) => (
                <span
                  key={`${dup}-${item}`}
                  className="flex items-center gap-6 px-6 font-mono text-[10px] uppercase tracking-[0.28em] text-ash"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-ember/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
