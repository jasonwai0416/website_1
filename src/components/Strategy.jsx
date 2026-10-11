import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, DrawRule } from './Reveal.jsx'
import { STRATEGY_CARDS } from '../data.js'

const TONE = {
  ember: 'text-ember',
  bone: 'text-bone',
  ash: 'text-ash',
}

export default function Strategy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.25, 1, 0.25])

  return (
    <section
      id="strategy"
      ref={ref}
      className="relative scroll-mt-20 overflow-hidden border-b border-white/[0.07] py-24 sm:py-32"
    >
      <div className="shell">
        <div className="flex items-center justify-between">
          <Reveal>
            <span className="eyebrow">03 — Strategy</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Philosophy</span>
          </Reveal>
        </div>

        <DrawRule className="mt-6" />

        {/* Oversized statement with a parallax watermark behind it */}
        <div className="relative pt-14">
          <motion.span
            aria-hidden="true"
            style={{ y, opacity }}
            className="pointer-events-none absolute -top-2 right-0 hidden select-none font-display text-[16vw] font-extralight leading-none tracking-tightest text-white/[0.03] lg:block"
          >
            fund?
          </motion.span>

          <Reveal>
            <h2 className="relative text-[12vw] font-extralight leading-[0.95] tracking-tightest text-bone sm:text-[7vw] lg:text-[5vw]">
              It doesn&apos;t look
              <br />
              like a <span className="italic text-ash">fund.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="relative mt-8 max-w-xl text-pretty text-sm leading-relaxed text-ash">
              No trading floor theatre, no noise for the sake of noise. Blink is a quiet system run by
              people who have spent their careers in the market — and know exactly what to ignore.
            </p>
          </Reveal>
        </div>

        {/* Three philosophy cards */}
        <div className="mt-16 grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] lg:grid-cols-3">
          {STRATEGY_CARDS.map((card, i) => (
            <Reveal key={card.index} delay={i * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col justify-between gap-16 bg-ink p-8 transition-colors duration-700 hover:bg-ink-soft sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.28em] text-ash">
                    {card.index}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-current ${TONE[card.tone]} transition-transform duration-500 group-hover:scale-150`}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-tight text-bone sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-ash">{card.body}</p>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 ease-expo group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
