import { useState } from 'react'
import { Reveal, DrawRule, EASE } from './Reveal.jsx'
import { motion } from 'framer-motion'
import { MODULES } from '../data.js'

function Module({ mod, i }) {
  const [open, setOpen] = useState(i === 0)

  return (
    <Reveal delay={i * 0.08} className="h-full">
      <div
        className={`group relative flex h-full flex-col border-t border-white/[0.07] transition-colors duration-500 ${
          open ? 'bg-white/[0.02]' : 'hover:bg-white/[0.015]'
        }`}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-start justify-between gap-6 px-1 py-7 text-left sm:px-6"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.28em] text-ash">{mod.index}</span>
            <h3 className="text-2xl font-light tracking-tight text-bone sm:text-3xl">{mod.title}</h3>
          </div>
          <span
            className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
              open ? 'rotate-45 border-ember text-ember' : 'border-white/15 text-ash group-hover:border-bone group-hover:text-bone'
            }`}
            aria-hidden="true"
          >
            <span className="relative block h-3 w-3">
              <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
            </span>
          </span>
        </button>

        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="overflow-hidden"
        >
          <div className="px-1 pb-8 sm:px-6">
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-ash">{mod.body}</p>
            <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/[0.07] pt-6">
              {mod.stats.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1.5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-ash">{k}</dt>
                  <dd className="font-display text-base font-light tracking-tight text-bone sm:text-lg">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </Reveal>
  )
}

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 border-b border-white/[0.07] py-24 sm:py-32">
      <div className="shell">
        <div className="flex items-center justify-between">
          <Reveal>
            <span className="eyebrow">02 — System architecture</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Algorithmic core</span>
          </Reveal>
        </div>

        <DrawRule className="mt-6" />

        <div className="grid gap-10 pt-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="text-balance text-[9vw] font-extralight leading-[1.02] tracking-tightest text-bone sm:text-[5vw] lg:text-[3.4vw]">
              Market data in,
              <br />
              <span className="text-ash">decisions out —</span>
              <br />
              before the shift is visible.
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="flex items-end">
            <p className="max-w-lg text-pretty text-sm leading-relaxed text-ash">
              Blink is powered by proprietary algorithms built to process market data at speeds no
              human can match. It makes decisions in fractions of a second — often before the shift is
              even visible. Below, the three layers that make that possible.
            </p>
          </Reveal>
        </div>

        {/* Modular grid of system layers */}
        <div className="mt-16 grid gap-x-10 lg:grid-cols-3">
          {MODULES.map((mod, i) => (
            <Module key={mod.id} mod={mod} i={i} />
          ))}
          <div className="hidden border-t border-white/[0.07] lg:block" aria-hidden="true" />
        </div>

        <Reveal delay={0.1} className="mt-2">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.07] py-6">
            {['Ingest', 'Evaluate', 'Size', 'Execute', 'Monitor'].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-8">
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-ember">0{i + 1}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone">
                    {step}
                  </span>
                </span>
                {i < arr.length - 1 && <span className="hidden h-px w-10 bg-white/15 sm:block" />}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
