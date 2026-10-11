import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal, DrawRule, EASE } from './Reveal.jsx'
import { PEOPLE } from '../data.js'

function Portrait({ monogram, active }) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/[0.07] bg-ink-soft">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div
        className={`absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(255,77,28,0.14),transparent_70%)] transition-opacity duration-700 ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[26vw] font-extralight leading-none tracking-tightest text-white/[0.09] transition-transform duration-700 ease-expo sm:text-[9vw] lg:text-[7vw]">
        {monogram}
      </span>
      <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.24em] text-ash">
        Profile · withheld
      </span>
    </div>
  )
}

export default function People() {
  const [active, setActive] = useState(null)

  return (
    <section id="people" className="relative scroll-mt-20 border-b border-white/[0.07] py-24 sm:py-32">
      <div className="shell">
        <div className="flex items-center justify-between">
          <Reveal>
            <span className="eyebrow">04 — The people</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Behind it</span>
          </Reveal>
        </div>

        <DrawRule className="mt-6" />

        <div className="grid gap-10 pt-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="text-balance text-[9vw] font-extralight leading-[1.02] tracking-tightest text-bone sm:text-[5vw] lg:text-[3.4vw]">
              A small, experienced
              <br />
              team of <span className="text-ash">market professionals.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="flex items-end">
            <p className="max-w-lg text-pretty text-sm leading-relaxed text-ash">
              Blink is managed by a small, highly experienced team of market professionals. We avoid
              noise and distraction — for us, freedom is an integral part of professional discipline.
              We focus on what matters and work efficiently.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PEOPLE.map((person, i) => (
            <Reveal key={person.monogram} delay={i * 0.1}>
              <motion.article
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group flex flex-col gap-5"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <Portrait monogram={person.monogram} active={active === i} />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-light tracking-tight text-bone">{person.discipline}</h3>
                  <span className="font-mono text-[10px] tracking-[0.24em] text-ash">
                    {person.years} yrs
                  </span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ember">
                  {person.focus}
                </p>
                <p className="text-pretty text-sm leading-relaxed text-ash">{person.note}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
