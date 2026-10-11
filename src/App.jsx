import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import Origin from './components/Origin.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Strategy from './components/Strategy.jsx'
import People from './components/People.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useCallback((id) => {
    setMenuOpen(false)
    const go = () => {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // Let the menu's clip-path exit start before the page moves.
    window.setTimeout(go, menuOpen ? 220 : 0)
  }, [menuOpen])

  // Route in-page hash links (from the hero/header buttons) through the same path.
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
    <div className="relative min-h-screen bg-ink">
      <ScrollProgress />
      <Cursor />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={navigate} />

      <main>
        <Hero />
        <Origin />
        <HowItWorks />
        <Strategy />
        <People />
      </main>

      <Footer onNavigate={navigate} />
    </div>
  )
}
