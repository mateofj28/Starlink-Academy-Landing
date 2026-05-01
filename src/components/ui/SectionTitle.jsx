import { motion } from 'framer-motion'

/**
 * Reusable section title with animated underline
 */
export default function SectionTitle({ tag, title, description, className = '' }) {
  return (
    <motion.div
      className={`text-center max-w-3xl mx-auto mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {tag && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-400 leading-relaxed">{description}</p>
      )}
      <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary-500 to-cyber-400" />
    </motion.div>
  )
}
