import { motion } from 'framer-motion'
import { WHATSAPP_NUMBER } from '../../constants/courses'
import { buildWhatsAppUrl } from '../../utils/formatters'

/**
 * Floating WhatsApp button with official WhatsApp icon
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
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-shadow duration-500"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', damping: 12, delay: 1.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.35 22.606c-.392 1.106-1.942 2.024-3.186 2.292-.852.18-1.964.324-5.708-1.226-4.792-1.984-7.872-6.856-8.112-7.174-.228-.318-1.926-2.566-1.926-4.894 0-2.328 1.218-3.47 1.65-3.942.392-.428 1.026-.624 1.632-.624.198 0 .374.01.534.018.47.02.706.048 1.016.786.388.924 1.332 3.252 1.448 3.49.118.238.236.554.078.872-.148.328-.278.474-.516.746-.238.272-.464.48-.702.774-.218.258-.464.534-.198 1.006.266.462 1.182 1.95 2.538 3.16 1.744 1.554 3.212 2.036 3.668 2.262.346.172.758.138 1.034-.158.35-.376.782-.998 1.222-1.612.312-.438.708-.494 1.09-.336.388.148 2.452 1.158 2.872 1.368.42.21.7.318.802.49.1.172.1.998-.292 2.104z" />
      </svg>
    </motion.a>
  )
}
