import { motion } from 'framer-motion'

export const EASE = [0.16, 1, 0.3, 1]

/** Generic scroll reveal — fires once, slightly before the element is centred. */
export function Reveal({ children, delay = 0, y = 26, duration = 0.9, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Word-by-word masked rise. Each word sits in an overflow-hidden box and
 * slides up — the load-time counterpart to Reveal's scroll-triggered fade.
 */
export function RiseLine({ text, delay = 0, stagger = 0.05, className = '', play = true }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.16em] -mb-[0.16em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '130%' }}
            animate={play ? { y: 0 } : undefined}
            transition={{ duration: 1.05, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** Thin section rule that draws itself in from the left. */
export function DrawRule({ delay = 0, className = '' }) {
  return (
    <motion.div
      className={`h-px w-full origin-left bg-white/10 ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    />
  )
}
