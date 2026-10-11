import { Reveal, RiseLine, DrawRule } from './Reveal.jsx'
import { SPECS } from '../data.js'

export default function Origin() {
  return (
    <section id="origin" className="relative scroll-mt-20 border-b border-white/[0.07] py-24 sm:py-32">
      <div className="shell">
        <div className="flex items-center justify-between">
          <Reveal>
            <span className="eyebrow">01 — Origin</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Our story</span>
          </Reveal>
        </div>

        <DrawRule className="mt-6" />

        <div className="grid gap-12 pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-pretty text-xl font-light leading-snug tracking-tight text-bone sm:text-2xl">
                Blink didn&apos;t begin with a launch or a bold idea.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-ash">
                It started with a simple, practical question. Everything since has been an answer to
                it — refined daily, in the market.
              </p>
            </Reveal>
          </div>

          <div>
            <blockquote className="text-balance text-[7vw] font-light leading-[1.08] tracking-tightest text-bone sm:text-[3.6vw] lg:text-[2.6vw]">
              <RiseLine
                text="Where should our capital be — and how can we manage it without distraction or noise?"
                stagger={0.035}
              />
            </blockquote>

            <Reveal delay={0.2} className="mt-14">
              <dl className="grid grid-cols-1 border-t border-white/[0.07] sm:grid-cols-2">
                {SPECS.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex flex-col gap-2 border-b border-white/[0.07] py-6 sm:px-6 sm:odd:pl-0 ${
                      i % 2 === 1 ? 'sm:border-l' : ''
                    }`}
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
                      {k}
                    </dt>
                    <dd className="text-lg font-light tracking-tight text-bone">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
