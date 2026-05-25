import { motion } from 'framer-motion'
import { Star, MapPin, Quote } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { TESTIMONIALS } from '../../constants/courses'

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      className="glass-card rounded-2xl p-7 md:p-8 relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-white/[0.04] mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400/80 text-amber-400/80" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[14px] text-white/80 leading-relaxed mb-7">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/[0.06] flex items-center justify-center text-xs font-semibold text-white/50">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-white/70">{testimonial.name}</p>
          <div className="flex items-center gap-2 text-[11px] text-white/70">
            <span>{testimonial.role}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
            <span className="flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5" />
              {testimonial.location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative py-16 sm:py-20 md:py-28 section-divider overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Testimonios"
          title="Lo que dicen nuestros estudiantes"
          description="Miles de personas ya transformaron su carrera con nuestros cursos de Starlink."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
