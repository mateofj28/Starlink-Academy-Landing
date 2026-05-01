import { motion } from 'framer-motion'
import { Zap, MessageCircle } from 'lucide-react'
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
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 via-primary-800/30 to-primary-900/50" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-5xl mb-6 block">🛰️</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            ¿Listo para conectar el futuro?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            No te quedes atrás. La tecnología Starlink está transformando la conectividad
            en Latinoamérica y tú puedes ser parte de esta revolución.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollTo('cursos')}>
              <Zap className="w-5 h-5" />
              Empezar ahora
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappUrl}
              target="_blank"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
