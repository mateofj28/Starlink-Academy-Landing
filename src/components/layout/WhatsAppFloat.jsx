import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../../constants/courses'
import { buildWhatsAppUrl } from '../../utils/formatters'

/**
 * Floating WhatsApp button — minimal, elegant
 */
export default function WhatsAppFloat() {
  const url = buildWhatsAppUrl(
    WHATSAPP_NUMBER,
    'Hola! Quiero información sobre los cursos de Starlink.'
  )

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-shadow duration-500"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', damping: 12, delay: 1.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
    </motion.a>
  )
}
