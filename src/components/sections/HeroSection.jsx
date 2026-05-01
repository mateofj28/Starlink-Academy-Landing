import { motion } from 'framer-motion'
import { Wifi, Zap, Globe, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import StarField from '../ui/StarField'
import { useScrollTo } from '../../hooks/useScrollTo'
import { STATS } from '../../constants/courses'

export default function HeroSection() {
  const scrollTo = useScrollTo()

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <StarField count={100} />
      <div className="absolute inset-0 bg-grid animate-grid-move opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-dark-950/90 to-dark-950" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-500/15 rounded-full blur-[100px]" />

      {/* Satellite illustration */}
      <div className="absolute top-20 right-10 md:right-20 opacity-20 animate-float" aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="90" ry="30" stroke="rgba(59,130,246,0.4)" strokeWidth="1" strokeDasharray="4 4" />
          <ellipse cx="100" cy="100" rx="60" ry="20" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="6" fill="rgba(59,130,246,0.6)" />
          <circle cx="100" cy="100" r="3" fill="rgba(34,211,238,0.8)" />
          {/* Satellite body */}
          <rect x="55" y="60" width="20" height="12" rx="2" fill="rgba(59,130,246,0.5)" transform="rotate(-20 65 66)" />
          {/* Solar panels */}
          <rect x="35" y="55" width="18" height="8" rx="1" fill="rgba(34,211,238,0.4)" transform="rotate(-20 44 59)" />
          <rect x="77" y="65" width="18" height="8" rx="1" fill="rgba(34,211,238,0.4)" transform="rotate(-20 86 69)" />
          {/* Signal waves */}
          <path d="M 100 110 Q 100 130 80 150" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" />
          <path d="M 100 110 Q 100 135 120 155" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" />
          <path d="M 100 110 Q 100 140 100 160" stroke="rgba(34,211,238,0.3)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Antenna illustration bottom-left */}
      <div className="absolute bottom-32 left-5 md:left-16 opacity-15" aria-hidden="true">
        <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
          {/* Dish */}
          <ellipse cx="60" cy="40" rx="50" ry="20" stroke="rgba(59,130,246,0.5)" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
          <ellipse cx="60" cy="40" rx="35" ry="14" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
          <circle cx="60" cy="40" r="5" fill="rgba(34,211,238,0.5)" />
          {/* Stand */}
          <line x1="60" y1="60" x2="60" y2="140" stroke="rgba(59,130,246,0.4)" strokeWidth="3" />
          <line x1="40" y1="140" x2="80" y2="140" stroke="rgba(59,130,246,0.4)" strokeWidth="3" />
          {/* Signal */}
          <path d="M 60 20 Q 60 5 50 -5" stroke="rgba(34,211,238,0.3)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
          <path d="M 60 20 Q 60 0 70 -10" stroke="rgba(34,211,238,0.3)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-6">
              <Wifi className="w-4 h-4" />
              Internet satelital de nueva generación
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Domina la tecnología{' '}
            <span className="gradient-text">Starlink</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Aprende a instalar, configurar y monetizar tus conocimientos en internet satelital.
            Conviértete en un experto certificado en la tecnología que está conectando al mundo.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Button size="lg" onClick={() => scrollTo('cursos')}>
              <Zap className="w-5 h-5" />
              Ver cursos disponibles
            </Button>
            <Button variant="secondary" size="lg" onClick={() => scrollTo('testimonios')}>
              <Globe className="w-5 h-5" />
              Ver testimonios
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollTo('cursos')}
            className="text-slate-500 hover:text-primary-400 transition-colors cursor-pointer"
            aria-label="Scroll hacia abajo"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
