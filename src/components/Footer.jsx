import { Reveal, RiseLine, DrawRule } from './Reveal.jsx'
import { NAV } from '../data.js'

export default function Footer({ onNavigate }) {
  return (
    <footer id="contacts" className="relative scroll-mt-20 overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(90%_100%_at_50%_0%,rgba(255,77,28,0.10),transparent_70%)]" />

      <div className="shell relative py-24 sm:py-32">
        <Reveal>
          <span className="eyebrow">05 — Contacts</span>
        </Reveal>
        <DrawRule className="mt-6" />

        {/* Closing statement */}
        <div className="pt-16">
          <h2 className="text-balance text-[8.6vw] font-extralight leading-[1.04] tracking-tightest text-bone sm:text-[5vw] lg:text-[3.6vw]">
            <RiseLine
              text="Blink exists for those who understand the value of time,"
              stagger={0.03}
            />
            <RiseLine
              text="and place their trust in those who know how to act on it."
              stagger={0.03}
              className="text-ash"
            />
          </h2>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <div className="flex flex-col gap-8 border-t border-white/[0.07] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="mailto:hello@blink.capital"
              className="group flex items-center gap-5"
              data-cursor
            >
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/15 transition-colors duration-500 group-hover:border-ember">
                <span className="text-lg text-bone transition-transform duration-500 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember">
                  ↗
                </span>
              </span>
              <span className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
                  Connect with us
                </span>
                <span className="text-2xl font-light tracking-tight text-bone sm:text-3xl">
                  hello@blink.capital
                </span>
              </span>
            </a>

            <div className="flex flex-wrap items-center gap-6">
              <a href="tel:+10000000000" className="link-underline font-mono text-[11px] uppercase tracking-[0.24em] text-ash hover:text-bone">
                +1 (000) 000-0000
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline font-mono text-[11px] uppercase tracking-[0.24em] text-ash hover:text-bone"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        {/* Footer nav + legal */}
        <div className="mt-20 grid gap-10 border-t border-white/[0.07] pt-10 lg:grid-cols-[1.2fr_1fr_auto]">
          <div className="flex flex-col gap-4">
            <span className="font-display text-xl font-semibold leading-none tracking-tightest text-bone">
              B<span className="text-ember">L</span>NK
            </span>
            <p className="max-w-xs text-pretty text-xs leading-relaxed text-ash">
              Systematic, multi-asset capital management. This page is a design concept and does not
              constitute investment advice or an offer of securities.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 self-start">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-left text-sm text-ash transition-colors duration-500 hover:text-bone"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <span className="eyebrow">© blink 2026</span>
            <button
              onClick={() => onNavigate('top')}
              className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ash transition-colors duration-500 hover:text-bone"
            >
              Back to top
              <span className="transition-transform duration-500 ease-expo group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
