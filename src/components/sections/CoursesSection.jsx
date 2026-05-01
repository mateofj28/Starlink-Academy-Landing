import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Clock, BookOpen, BarChart3, MessageCircle } from 'lucide-react'
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
      className={`relative glass-card rounded-2xl overflow-hidden ${
        course.popular ? 'ring-2 ring-primary-500/50 scale-[1.02]' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Popular badge */}
      {course.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-cyber-500 text-center py-2 text-xs font-bold text-white tracking-wider uppercase">
          ⭐ Más popular
        </div>
      )}

      <div className={`p-6 md:p-8 ${course.popular ? 'pt-12' : ''}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-3xl">{course.icon}</span>
            <h3 className="text-xl font-bold text-white mt-2">{course.title}</h3>
            <p className="text-sm text-slate-400">{course.subtitle}</p>
          </div>
          {course.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-400 border border-primary-500/20">
              {course.badge}
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> {course.lessons} lecciones
          </span>
          <span className="flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" /> {course.level}
          </span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-white">
              {formatCurrency(course.price)}
            </span>
            {course.originalPrice > course.price && (
              <span className="text-sm text-slate-500 line-through">
                {formatCurrency(course.originalPrice)}
              </span>
            )}
          </div>
          {discount > 0 && (
            <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold bg-green-500/15 text-green-400">
              {discount}% de descuento
            </span>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {course.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
              <Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            className="w-full"
            onClick={() => onBuy(course)}
          >
            Comprar ahora
          </Button>
          <Button
            variant="whatsapp"
            className="w-full"
            href={whatsappUrl}
            target="_blank"
          >
            <MessageCircle className="w-4 h-4" />
            Preguntar por WhatsApp
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <section id="cursos" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Nuestros cursos"
          title="Elige tu camino hacia el éxito"
          description="Desde principiante hasta experto empresarial. Cada curso incluye acceso de por vida, actualizaciones gratuitas y certificado."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
