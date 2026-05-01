import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { FAQ_ITEMS } from '../../constants/courses'

function FaqItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      className="border-b border-white/[0.04] last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className={`text-sm md:text-[15px] font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/50 group-hover:text-white/70'
          }`}>
          {item.question}
        </span>
        <motion.span
          className="shrink-0 w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-white/40" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-white/30" />
          )}
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="pb-6 text-sm text-white/30 leading-relaxed max-w-2xl">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="relative py-28 section-divider">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Preguntas frecuentes"
          title="¿Tienes dudas?"
          description="Aquí respondemos las preguntas más comunes sobre nuestros cursos."
        />

        <div className="glass-card rounded-2xl px-6 md:px-8">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
