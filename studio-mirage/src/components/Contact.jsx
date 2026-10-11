import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, RiseWords, DrawRule, EASE } from './Reveal.jsx'
import { NAV } from '../data.js'

const OFFICES = [
  {
    city: 'Paris',
    script: 'باريس',
    address: '12 rue de la Paix, 75002 Paris, France',
    email: 'paris@studiomirage.io',
    tz: 'CET',
  },
  {
    city: 'Dubai',
    script: 'دبي',
    address: 'DIFC Gate Avenue, Dubai, United Arab Emirates',
    email: 'dubai@studiomirage.io',
    tz: 'GST',
  },
]

function InquiryForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim()

  const onSubmit = (e) => {
    e.preventDefault()
    if (!valid) return
    // No backend — surface the confirmation state only.
    setSent(true)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col items-start gap-5 border border-emerald/40 bg-emerald/[0.06] p-8"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald text-charcoal-deep">
              ✓
            </span>
            <h3 className="font-display text-2xl uppercase tracking-tight text-bone">
              Thank you, {form.name.split(' ')[0]}
            </h3>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-mist">
              Your inquiry is noted. We reply to every serious brief within two working days, from
              whichever studio is closest to your timezone.
            </p>
            <button
              onClick={() => {
                setSent(false)
                setForm({ name: '', email: '', company: '', message: '' })
              }}
              className="link-underline font-mono text-[10px] uppercase tracking-[0.26em] text-emerald"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                  Name
                </span>
                <input
                  className="field"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                  Email
                </span>
                <input
                  className="field"
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@brand.com"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                Company / brand
              </span>
              <input
                className="field"
                value={form.company}
                onChange={set('company')}
                placeholder="Optional"
                autoComplete="organization"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                Project
              </span>
              <textarea
                className="field resize-none"
                rows={4}
                value={form.message}
                onChange={set('message')}
                placeholder="Tell us what you want to build."
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-5 pt-2">
              <button
                type="submit"
                disabled={!valid}
                className={`btn-solid ${!valid ? 'pointer-events-none opacity-40' : ''}`}
              >
                <span>Send inquiry</span>
              </button>
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                Replies within 2 working days
              </span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact({ onNavigate }) {
  return (
    <footer id="contact" className="relative scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(80%_100%_at_50%_0%,rgba(47,191,148,0.12),transparent_70%)]" />

      <div className="shell relative py-24 sm:py-32">
        <div className="flex items-center justify-between">
          <Reveal>
            <span className="eyebrow">Contact us</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span lang="ar" dir="rtl" className="font-arabic text-sm text-mist">
              تواصل معنا
            </span>
          </Reveal>
        </div>

        <DrawRule className="mt-6" />

        <div className="pt-16">
          <h2 className="display text-[12vw] text-bone sm:text-[7vw] lg:text-[5.2vw]">
            <RiseWords text="Let’s make something" stagger={0.05} />
            <br />
            <span className="text-emerald">
              <RiseWords text="you can’t look away from." stagger={0.05} delay={0.15} />
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Offices + direct links */}
          <div className="flex flex-col gap-12">
            <div className="grid gap-10 sm:grid-cols-2">
              {OFFICES.map((o) => (
                <Reveal key={o.city}>
                  <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl uppercase tracking-tight text-bone">
                        {o.city}
                      </h3>
                      <span lang="ar" dir="rtl" className="font-arabic text-base text-emerald">
                        {o.script}
                      </span>
                    </div>
                    <p className="text-pretty text-sm leading-relaxed text-mist">{o.address}</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`mailto:${o.email}`}
                        className="link-underline self-start font-mono text-[11px] uppercase tracking-[0.2em] text-bone"
                      >
                        {o.email}
                      </a>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                        {o.tz}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-5 border-t border-white/[0.08] pt-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
                  Follow
                </span>
                <div className="flex flex-wrap gap-3">
                  {['Instagram', 'LinkedIn', 'Behance', 'Vimeo'].map((s) => (
                    <a
                      key={s}
                      href="https://studiomirage.io"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-full border border-white/12 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/80 transition-colors duration-500 hover:border-emerald hover:text-bone"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Inquiry form */}
          <Reveal delay={0.15}>
            <div className="border-t border-white/[0.08] pt-8">
              <h3 className="mb-8 font-display text-xl uppercase tracking-tight text-bone">
                Start a project
              </h3>
              <InquiryForm />
            </div>
          </Reveal>
        </div>

        {/* Legal / footer bar */}
        <div className="mt-24 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-display text-base uppercase tracking-tight text-bone">
              Studio Mirage
            </span>
            <span lang="ar" dir="rtl" className="font-arabic text-base text-mist">
              ميراج
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist transition-colors duration-500 hover:text-bone"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-mist">
              © Studio Mirage 2026
            </span>
            <button
              onClick={() => onNavigate('top')}
              className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-mist transition-colors duration-500 hover:text-bone"
            >
              Top
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
