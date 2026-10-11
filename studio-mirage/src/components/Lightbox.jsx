import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE } from './Reveal.jsx'

const ACCENT = {
  gold: 'text-gold',
  jade: 'text-jade',
  emerald: 'text-emerald',
}

export default function Lightbox({ project, onClose, onNext }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [project, onClose, onNext])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-charcoal-deep/90 p-0 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          onClick={onClose}
        >
          <motion.div
            className="relative my-0 w-full max-w-5xl bg-charcoal sm:my-6"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.7, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="group absolute right-4 top-4 z-10 flex items-center gap-3 rounded-full border border-white/15 bg-charcoal-deep/70 px-5 py-2.5 backdrop-blur-sm transition-colors duration-500 hover:border-bone"
              aria-label="Close project"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-bone">
                Close
              </span>
              <span className="relative grid h-5 w-5 place-items-center">
                <span className="absolute h-px w-3.5 rotate-45 bg-current" />
                <span className="absolute h-px w-3.5 -rotate-45 bg-current" />
              </span>
            </button>

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal-soft sm:aspect-[16/9]">
              <img
                src={project.image}
                alt={`${project.title} — ${project.blurb}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              <span
                className={`absolute bottom-6 left-6 font-mono text-[11px] tracking-[0.3em] ${
                  ACCENT[project.accent]
                }`}
              >
                {project.index} / {project.year}
              </span>
            </div>

            <div className="shell grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
              <div>
                <h3 className="display text-[10vw] text-bone sm:text-[5rem]">
                  {project.title}
                </h3>
                <p className="mt-2 text-lg text-mist">{project.subtitle}</p>
                <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-bone/90">
                  {project.detail}
                </p>
              </div>

              <dl className="flex flex-col gap-6 self-start border-t border-white/[0.08] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                {[
                  ['Client', project.client],
                  ['Category', project.category],
                  ['Location', project.location],
                  ['Year', project.year],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1.5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                      {k}
                    </dt>
                    <dd className="text-base text-bone">{v}</dd>
                  </div>
                ))}
                <div className="flex flex-col gap-2.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                    Services
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/12 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/80"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>

                <button
                  onClick={onNext}
                  className="group mt-2 flex items-center gap-4 self-start font-mono text-[10px] uppercase tracking-[0.26em] text-emerald"
                >
                  Next project
                  <span className="h-px w-10 bg-emerald/50 transition-all duration-500 ease-expo group-hover:w-16" />
                </button>
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
