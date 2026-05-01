import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import StarField from '../ui/StarField'
import { useScrollTo } from '../../hooks/useScrollTo'
import { STATS } from '../../constants/courses'

export default function HeroSection() {
  const scrollTo = useScrollTo()

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep space background */}
      <StarField count={250} />

      {/* Aurora / nebula glow layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top-left aurora */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full animate-aurora"
          style={{
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Bottom-right cyan glow */}
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full animate-aurora"
          style={{
            background: 'radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)',
            animationDelay: '-4s',
          }}
        />
        {/* Center subtle pink */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Orbital rings decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          {/* Ring 1 */}
          <div className="absolute inset-0 rounded-full border border-white/[0.03] animate-[spin_60s_linear_infinite]" />
          {/* Ring 2 */}
          <div className="absolute inset-12 rounded-full border border-white/[0.02] animate-[spin_45s_linear_infinite_reverse]" />
          {/* Ring 3 */}
          <div className="absolute inset-24 rounded-full border border-dashed border-white/[0.02] animate-[spin_90s_linear_infinite]" />
          {/* Orbiting dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-400/60 shadow-[0_0_10px_rgba(99,102,241,0.4)] animate-[spin_60s_linear_infinite]" style={{ transformOrigin: '50% 400px' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-medium tracking-[0.15em] uppercase text-white/40 border border-white/[0.06] bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Internet satelital de nueva generación
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="mt-8 text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight font-[family-name:var(--font-display)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-white">Domina la</span>
            <br />
            <span className="gradient-text">tecnología</span>
            <br />
            <span className="text-white">Starlink</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-base md:text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Aprende a instalar, configurar y monetizar tus conocimientos en internet satelital.
            Conviértete en un experto certificado.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Button size="lg" onClick={() => scrollTo('cursos')}>
              Ver cursos
            </Button>
            <Button variant="secondary" size="lg" onClick={() => scrollTo('testimonios')}>
              Testimonios
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[11px] text-white/25 mt-1.5 tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <button
            onClick={() => scrollTo('cursos')}
            className="text-white/15 hover:text-white/40 transition-colors duration-500 cursor-pointer"
            aria-label="Scroll hacia abajo"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
