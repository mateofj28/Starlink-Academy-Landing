import { motion } from 'framer-motion'

/**
 * Premium section title with animated reveal
 */
export default function SectionTitle({ tag, title, description, className = '' }) {
  return (
    <motion.div
      className={`text-center max-w-3xl mx-auto mb-20 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {tag && (
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80 border border-white/[0.06] bg-white/[0.02] mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
          {tag}
        </motion.span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 font-[family-name:var(--font-display)] tracking-tight leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  )
}
