import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Satellite } from 'lucide-react'
import Button from '../ui/Button'
import { useScrollTo } from '../../hooks/useScrollTo'

const NAV_LINKS = [
  { label: 'Inicio', to: 'hero' },
  { label: 'Cursos', to: 'cursos' },
  { label: 'Testimonios', to: 'testimonios' },
  { label: 'FAQ', to: 'faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNav(sectionId) {
    scrollTo(sectionId)
    setMobileOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyber-400 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow">
              <Satellite className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">Starlink</span>
              <span className="text-lg font-bold text-primary-400"> Academy</span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNav(link.to)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => handleNav('cursos')}
            >
              Inscríbete ahora
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNav(link.to)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => handleNav('cursos')}
                >
                  Inscríbete ahora
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
