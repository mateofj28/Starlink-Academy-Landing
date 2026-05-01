import { motion } from 'framer-motion'

const variants = {
  primary:
    'relative bg-white text-black font-semibold hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]',
  secondary:
    'relative bg-transparent text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.03]',
  whatsapp:
    'relative bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] shadow-[0_0_20px_rgba(37,211,102,0.15)]',
  outline:
    'relative border border-primary-500/30 text-primary-400 hover:bg-primary-500/10 hover:border-primary-500/50',
  ghost:
    'relative text-white/60 hover:text-white hover:bg-white/[0.04]',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
}

/**
 * Premium button with subtle hover animations
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 font-medium rounded-full transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed tracking-wide'
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
