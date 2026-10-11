import { Reveal, RiseWords, DrawRule } from './Reveal.jsx'
import { CAPABILITIES } from '../data.js'

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 border-b border-white/[0.08] py-24 sm:py-32">
      <div className="shell">
        <div className="flex items-center justify-between">
          <Reveal>
            <span className="eyebrow">About us</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span lang="ar" dir="rtl" className="font-arabic text-sm text-mist">
              الاستوديو
            </span>
          </Reveal>
        </div>

        <DrawRule className="mt-6" />

        <div className="grid gap-12 pt-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-[11vw] text-bone sm:text-[6.4vw] lg:text-[4.4vw]">
              <RiseWords text="Art direction," stagger={0.05} />
              <br />
              <RiseWords text="engineering" stagger={0.05} delay={0.12} className="text-mist" />
              <br />
              <span className="text-emerald">
                <RiseWords text="and everything between." stagger={0.05} delay={0.24} />
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col justify-end gap-8">
            <p className="text-pretty text-base leading-relaxed text-bone/90 sm:text-lg">
              Studio Mirage is a multidisciplinary team bridging artistic direction, 3D development and
              interactive engineering. We keep the whole pipeline under one roof — the person who
              imagines the world is in the room with the person who makes it run at sixty frames a
              second.
            </p>
            <p className="text-pretty text-sm leading-relaxed text-mist">
              From Paris and Dubai, we partner with luxury houses, cultural institutions and global
              brands on work that has to be felt, not just viewed.
            </p>
          </Reveal>
        </div>

        {/* Capability grid */}
        <div className="mt-20 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.index} delay={i * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col justify-between gap-14 bg-charcoal p-8 transition-colors duration-700 hover:bg-charcoal-soft">
                <span className="font-mono text-[10px] tracking-[0.3em] text-mist">{cap.index}</span>
                <div>
                  <h3 className="font-display text-xl uppercase leading-none tracking-tight text-bone">
                    {cap.title}
                  </h3>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-mist">{cap.body}</p>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-emerald transition-transform duration-700 ease-expo group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
