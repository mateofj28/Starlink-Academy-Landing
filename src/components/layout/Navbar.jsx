import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-black/60 backdrop-blur-2xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-8 h-8">
              {/* Orbital ring */}
              <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-500" />
              {/* Core dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-shadow duration-500" />
              {/* Orbiting dot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary-400" />
            </div>
            <span className="text-base font-semibold text-white tracking-wide font-[family-name:var(--font-display)]">
              STARLINK ACADEMY MR SAT
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNav(link.to)}
                className="text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-300 cursor-pointer tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => handleNav('encuesta')}
            >
              Inscríbete
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white cursor-pointer transition-colors"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-black/90 backdrop-blur-2xl border-t border-white/[0.04]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-6 py-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNav(link.to)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.03] transition-all duration-300 cursor-pointer text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => handleNav('encuesta')}
                >
                  Inscríbete
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
