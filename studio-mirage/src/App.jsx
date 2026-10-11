import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Works from './components/Works.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Lightbox from './components/Lightbox.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import { PROJECTS } from './data.js'

export default function App() {
  const [openIndex, setOpenIndex] = useState(null)

  const openProject = useCallback((project) => {
    const i = PROJECTS.findIndex((p) => p.id === project.id)
    setOpenIndex(i === -1 ? null : i)
  }, [])

  const closeProject = useCallback(() => setOpenIndex(null), [])

  const nextProject = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % PROJECTS.length))
  }, [])

  const navigate = useCallback((id) => {
    const go = () => {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    go()
  }, [])

  // Route in-page hash links through the smooth-scroll handler.
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest?.('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href').slice(1)
      if (!id) return
      e.preventDefault()
      navigate(id)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  return (
    <div className="relative min-h-screen bg-charcoal">
      <ScrollProgress />
      <Header onNavigate={navigate} />

      <main>
        <Hero onNavigate={navigate} />
        <Manifesto />
        <Works onOpen={openProject} />
        <About />
      </main>

      <Contact onNavigate={navigate} />

      <Lightbox
        project={openIndex === null ? null : PROJECTS[openIndex]}
        onClose={closeProject}
        onNext={nextProject}
      />
    </div>
  )
}
