import { motion } from 'framer-motion'

export const EASE = [0.16, 1, 0.3, 1]

/** Scroll-triggered fade/rise. Fires once, a touch before the element centres. */
export function Reveal({ children, delay = 0, y = 28, duration = 0.9, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Per-word masked rise for the big display headers. Words start below their
 * clipping box and slide up — the load-time counterpart to Reveal.
 * `pb/-mb` keeps descenders from being clipped by the mask.
 */
export function RiseWords({ text, delay = 0, stagger = 0.045, className = '', play = true }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '120%' }}
            animate={play ? { y: 0 } : undefined}
            transition={{ duration: 1.1, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** A rule that draws itself in from the left when it enters view. */
export function DrawRule({ delay = 0, className = '' }) {
  return (
    <motion.div
      className={`h-px w-full origin-left bg-white/10 ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay, ease: EASE }}
    />
  )
}
