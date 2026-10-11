import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { RiseWords, EASE } from './Reveal.jsx'
import { SERVICES } from '../data.js'

// WebGL is the heaviest dependency — keep it out of the initial chunk.
const MirageScene = lazy(() => import('./MirageScene.jsx'))

export default function Hero({ onNavigate }) {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Real-time 3D canvas */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <MirageScene />
        </Suspense>
      </div>

      {/* Cinematic grade: vignette + film grain + a jade floor glow */}
      <div className="noise pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_75%_at_50%_45%,transparent_30%,#0d0d0d_92%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(70%_100%_at_50%_120%,rgba(47,191,148,0.16),transparent_70%)]" />

      <div className="shell relative flex flex-1 flex-col justify-between pb-8 pt-32 sm:pt-36">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex items-start justify-between gap-6"
        >
          <span className="eyebrow max-w-[12rem] leading-relaxed">
            Immersive 3D
            <br />
            &amp; interactive design
          </span>
          <span className="eyebrow text-right">
            Paris
            <br />
            Dubai
          </span>
        </motion.div>

        <div className="flex flex-1 flex-col justify-center py-10">
          <h1 className="display text-[16vw] text-bone sm:text-[13.5vw] lg:text-[11.5vw]">
            <RiseWords text="Studio" delay={0.45} stagger={0.09} />
            <br />
            <span className="text-emerald">
              <RiseWords text="Mirage" delay={0.72} stagger={0.09} />
            </span>
          </h1>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 1.1, ease: EASE }}
            className="h-px w-full origin-left bg-white/10"
          />
          <div className="grid gap-8 pt-7 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
              className="max-w-2xl text-pretty text-lg font-light leading-snug tracking-tight text-bone sm:text-2xl"
            >
              Immersive 3D &amp; interactive design studio,{' '}
              <span className="text-mist">Paris &amp; Dubai.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.45, ease: EASE }}
              className="flex flex-col justify-end gap-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <button onClick={() => onNavigate('works')} className="btn-solid">
                  <span>Our works</span>
                </button>
                <button onClick={() => onNavigate('contact')} className="btn-outline">
                  <span>Contact us</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue — in normal flow so it never collides with the marquee */}
      <motion.button
        onClick={() => onNavigate('manifesto')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="group relative z-10 mx-auto mb-5 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-mist transition-colors duration-500 group-hover:text-bone">
          Scroll to start exploring
        </span>
        <span className="cue-line relative h-10 w-px overflow-hidden bg-white/10" />
      </motion.button>

      {/* Service marquee */}
      <div className="relative border-y border-white/[0.08] bg-charcoal/40 py-3.5 backdrop-blur-sm">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {SERVICES.map((s) => (
                <span
                  key={`${dup}-${s}`}
                  className="flex items-center gap-6 px-7 font-mono text-[10px] uppercase tracking-[0.26em] text-mist"
                >
                  {s}
                  <span className="h-1 w-1 rounded-full bg-emerald/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
