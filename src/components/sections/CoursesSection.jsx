import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Clock, BookOpen, BarChart3, MessageCircle, ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import PaymentModal from '../payment/PaymentModal'
import { COURSES, WHATSAPP_NUMBER } from '../../constants/courses'
import { formatCurrency, calcDiscount, buildWhatsAppUrl } from '../../utils/formatters'

function CourseCard({ course, index, onBuy }) {
  const discount = calcDiscount(course.originalPrice, course.price)
  const whatsappMsg = `Hola! Estoy interesado en el curso "${course.title}". ¿Me pueden dar más información?`
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, whatsappMsg)

  return (
    <motion.div
      className={`relative group ${course.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Popular glow */}
      {course.popular && (
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-primary-500/20 via-cyber-400/10 to-transparent blur-sm pointer-events-none" />
      )}

      <div
        className={`relative glass-card rounded-3xl overflow-hidden h-full ${course.popular ? 'border-primary-500/15' : ''
          }`}
      >
        {/* Popular badge */}
        {course.popular && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
        )}

        <div className="p-7 md:p-8 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-3xl">{course.icon}</span>
              <h3 className="text-lg font-semibold text-white mt-3 font-[family-name:var(--font-display)] tracking-tight">
                {course.title}
              </h3>
              <p className="text-sm text-white/30 mt-1">{course.subtitle}</p>
            </div>
            {course.badge && (
              <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white/50 border border-white/[0.06] bg-white/[0.02]">
                {course.badge}
              </span>
            )}
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6 text-[12px] text-white/25">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> {course.lessons} lecciones
            </span>
            <span className="flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5" /> {course.level}
            </span>
          </div>

          {/* Price */}
          <div className="mb-7">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
                {formatCurrency(course.price)}
              </span>
              {course.originalPrice > course.price && (
                <span className="text-sm text-white/20 line-through">
                  {formatCurrency(course.originalPrice)}
                </span>
              )}
            </div>
            {discount > 0 && (
              <span className="inline-block mt-2 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-emerald-400/80 bg-emerald-400/[0.06] border border-emerald-400/10">
                {discount}% descuento
              </span>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8 flex-1">
            {course.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-[13px] text-white/40">
                <Check className="w-3.5 h-3.5 text-primary-400/60 shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="space-y-2.5 mt-auto">
            <Button
              className="w-full group/btn"
              onClick={() => onBuy(course)}
            >
              Comprar ahora
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full"
              href={whatsappUrl}
              target="_blank"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Preguntar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <section id="cursos" className="relative py-16 sm:py-20 md:py-28 section-divider overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-primary-600/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Nuestros cursos"
          title="Elige tu camino hacia el éxito"
          description="Desde principiante hasta experto empresarial. Cada curso incluye acceso de por vida, actualizaciones gratuitas y certificado."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {COURSES.map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              index={i}
              onBuy={setSelectedCourse}
            />
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {selectedCourse && (
        <PaymentModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </section>
  )
}
