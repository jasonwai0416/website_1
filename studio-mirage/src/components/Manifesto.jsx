import { Reveal, RiseWords, DrawRule } from './Reveal.jsx'
import { STATS } from '../data.js'

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative scroll-mt-20 border-b border-white/[0.08] py-24 sm:py-32"
    >
      <div className="shell">
        <div className="flex items-center justify-between">
          <Reveal>
            <span className="eyebrow">Introduction</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span lang="ar" dir="rtl" className="font-arabic text-sm text-mist">
              من نحن
            </span>
          </Reveal>
        </div>

        <DrawRule className="mt-6" />

        <div className="pt-16">
          <Reveal>
            <p className="display text-[8.5vw] text-bone sm:text-[5.6vw] lg:text-[4vw]">
              <RiseWords text="We build worlds" stagger={0.05} />
              <br />
              <span className="text-mist">
                <RiseWords text="that don’t sit still." stagger={0.05} delay={0.15} />
              </span>
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
            <Reveal delay={0.1}>
              <p className="text-pretty text-xl font-light leading-relaxed text-bone sm:text-2xl">
                Studio Mirage is a creative tech studio crafting immersive 3D web experiences, motion
                design, and interactive digital campaigns for luxury and global brands.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-pretty text-sm leading-relaxed text-mist">
                We work where art direction meets engineering — real-time rendering, projection, and
                interactive environments built for the brands that can&apos;t afford to look ordinary.
                From a monumental arch in Dubai to a garden archway in Paris, we make the digital feel
                physical.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-white/[0.08] pt-8">
                {STATS.map(([big, small]) => (
                  <div key={big} className="flex flex-col gap-1">
                    <dt className="font-display text-2xl uppercase leading-none tracking-tight text-bone sm:text-3xl">
                      {big}
                    </dt>
                    <dd className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                      {small}
                    </dd>
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
