import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import { useScrollTo } from '../../hooks/useScrollTo'
import { WHATSAPP_NUMBER } from '../../constants/courses'
import { buildWhatsAppUrl } from '../../utils/formatters'

export default function CtaSection() {
  const scrollTo = useScrollTo()
  const whatsappUrl = buildWhatsAppUrl(
    WHATSAPP_NUMBER,
    'Hola! Quiero más información sobre los cursos de Starlink.'
  )

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-primary-500/[0.05] rounded-full blur-[120px]" />
          <div className="absolute inset-20 bg-cyber-400/[0.03] rounded-full blur-[100px]" />
        </div>
        {/* Horizontal glow line */}
        <div className="absolute top-0 left-0 right-0 glow-line" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)] tracking-tight leading-[1.1]">
            ¿Listo para conectar
            <br />
            <span className="gradient-text">el futuro?</span>
          </h2>
          <p className="text-base text-white/30 mb-12 max-w-lg mx-auto leading-relaxed">
            La tecnología Starlink está transformando la conectividad en Latinoamérica.
            Sé parte de esta revolución.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollTo('cursos')}>
              Empezar ahora
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={whatsappUrl}
              target="_blank"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
