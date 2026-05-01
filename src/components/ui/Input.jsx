/**
 * Premium input with clean dark aesthetic
 */
export default function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  icon,
  maxLength,
  className = '',
  ...props
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-xs font-medium text-white/40 tracking-wide uppercase">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
            {icon}
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full rounded-xl bg-white/[0.03] border px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all duration-300 focus:ring-1 focus:ring-primary-500/30 text-sm ${
            icon ? 'pl-10' : ''
          } ${
            error
            ? 'border-red-500/30 focus:border-red-500/50'
            : 'border-white/[0.06] focus:border-white/15'
          }`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-400/80">{error}</p>}
    </div>
  )
}
