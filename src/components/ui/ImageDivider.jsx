import { motion } from 'framer-motion'

/**
 * Full-width image divider between sections.
 * Shows the instructor clearly with soft edge fades.
 */
export default function ImageDivider({ src, alt = '' }) {
  return (
    <motion.div
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      {/* Image - constrained to avoid upscaling and losing resolution */}
      <div className="relative max-w-sm mx-auto px-4">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-2xl"
        />
        {/* Soft edge mask that blends into black */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
          boxShadow: 'inset 0 0 60px 40px black'
        }} />
      </div>
    </motion.div>
  )
}
