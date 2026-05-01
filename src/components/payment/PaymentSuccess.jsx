import { motion } from 'framer-motion'
import { CheckCircle, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import { WHATSAPP_NUMBER } from '../../constants/courses'
import { buildWhatsAppUrl } from '../../utils/formatters'

export default function PaymentSuccess({ course, customerName, onClose }) {
  const whatsappMsg = `Hola! Soy ${customerName}. Acabo de comprar el curso "${course.title}" y quiero acceder al contenido.`
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, whatsappMsg)

  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12, delay: 0.2 }}
      >
        <CheckCircle className="w-16 h-16 text-emerald-400/80 mx-auto mb-6" />
      </motion.div>

      <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-display)]">
        Pago exitoso
      </h3>
      <p className="text-sm text-white/30 mb-2">
        Gracias, <span className="text-white/60">{customerName}</span>.
      </p>
      <p className="text-xs text-white/20 mb-10">
        Tu inscripción al curso <span className="text-primary-400/60">{course.title}</span> ha
        sido confirmada. Recibirás un correo con los datos de acceso.
      </p>

      <div className="space-y-2.5">
        <Button
          variant="whatsapp"
          className="w-full"
          href={whatsappUrl}
          target="_blank"
        >
          <MessageCircle className="w-4 h-4" />
          Acceder por WhatsApp
        </Button>
        <Button variant="ghost" className="w-full" onClick={onClose}>
          Cerrar
        </Button>
      </div>
    </motion.div>
  )
}
