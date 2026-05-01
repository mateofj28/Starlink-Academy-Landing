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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 10, delay: 0.2 }}
      >
        <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
      </motion.div>

      <h3 className="text-2xl font-bold text-white mb-2">
        ¡Pago exitoso! 🎉
      </h3>
      <p className="text-slate-400 mb-2">
        Gracias, <span className="text-white font-medium">{customerName}</span>.
      </p>
      <p className="text-sm text-slate-500 mb-8">
        Tu inscripción al curso <span className="text-primary-400 font-medium">{course.title}</span> ha
        sido confirmada. Recibirás un correo con los datos de acceso.
      </p>

      <div className="space-y-3">
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
