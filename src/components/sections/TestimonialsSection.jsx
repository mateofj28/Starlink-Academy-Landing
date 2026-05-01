import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { TESTIMONIALS } from '../../constants/courses'

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      className="glass-card rounded-2xl p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-cyber-400 flex items-center justify-center text-sm font-bold text-white">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>{testimonial.role}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
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
    <section id="testimonios" className="relative py-24">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Testimonios"
          title="Lo que dicen nuestros estudiantes"
          description="Miles de personas ya transformaron su carrera con nuestros cursos de Starlink."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
