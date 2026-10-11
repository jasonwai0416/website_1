import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal, DrawRule, EASE } from './Reveal.jsx'
import { PROJECTS } from '../data.js'

const ACCENT = {
  gold: 'text-gold',
  jade: 'text-jade',
  emerald: 'text-emerald',
}

/* ------------------------------------------------------------------ *
 * Project card — image with a scale-on-hover, a scan-line sweep, and
 * an accent wash. The whole card opens the lightbox.
 * ------------------------------------------------------------------ */
function Card({ project, onOpen }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.9, ease: EASE }}
      className="group relative"
    >
      <button
        onClick={() => onOpen(project)}
        className="relative block w-full overflow-hidden text-left"
        aria-label={`Open project ${project.title}`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-soft">
          {!loaded && <div className="absolute inset-0 animate-pulse bg-white/[0.03]" />}
          <img
            src={project.image}
            alt={`${project.title} — ${project.blurb}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`h-full w-full object-cover transition-[transform,opacity,filter] duration-[1200ms] ease-expo group-hover:scale-[1.06] ${
              loaded ? 'opacity-100' : 'opacity-0'
            } grayscale-[35%] group-hover:grayscale-0`}
          />

          {/* Accent wash + legibility scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />
          <div className="absolute inset-0 bg-emerald/0 mix-blend-soft-light transition-colors duration-700 group-hover:bg-emerald/20" />

          {/* Scan-line sweep on hover */}
          <div className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent via-white/10 to-transparent transition-transform duration-[1100ms] ease-expo group-hover:translate-y-full" />

          {/* Corner index */}
          <span
            className={`absolute left-5 top-5 font-mono text-[10px] tracking-[0.3em] ${
              ACCENT[project.accent]
            }`}
          >
            {project.index}
          </span>

          {/* Hover CTA */}
          <span className="absolute right-5 top-5 grid h-10 w-10 translate-y-2 place-items-center rounded-full border border-white/25 text-bone opacity-0 backdrop-blur-sm transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-sm leading-none">↗</span>
          </span>
        </div>

        <div className="flex items-start justify-between gap-6 border-t border-white/[0.08] pt-5">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display text-2xl uppercase leading-none tracking-tight text-bone transition-colors duration-500 group-hover:text-emerald sm:text-3xl">
              {project.title}
            </h3>
            <p className="text-sm text-mist">{project.subtitle}</p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1.5 text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
              {project.category}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist/60">
              {project.location} · {project.year}
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  )
}

/* Asymmetric spans applied only at lg+, so tablet/mobile stay single-column. */
const SPAN = {
  wide: 'lg:col-span-8',
  tall: 'lg:col-span-4',
  normal: 'lg:col-span-4',
}

export default function Works({ onOpen }) {
  return (
    <section id="works" className="relative scroll-mt-20 border-b border-white/[0.08] py-24 sm:py-32">
      <div className="shell">
        <div className="flex items-center justify-between">
          <Reveal>
            <span className="eyebrow">Featured projects</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">{PROJECTS.length} selected works</span>
          </Reveal>
        </div>

        <DrawRule className="mt-6" />

        <div className="flex flex-wrap items-end justify-between gap-6 pt-14">
          <Reveal>
            <h2 className="display text-[13vw] text-bone sm:text-[8vw] lg:text-[6vw]">
              Selected
              <br />
              <span className="text-emerald">works</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-mist">
              Immersive 3D, real-time rendering and interactive campaigns — built for luxury and global
              brands across Europe and the Gulf.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric grid: 12 columns at lg+, stacked below */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`${SPAN[project.span]} ${
                project.span === 'normal' ? 'sm:col-span-1' : 'sm:col-span-2'
              }`}
            >
              <Card project={project} onOpen={onOpen} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
