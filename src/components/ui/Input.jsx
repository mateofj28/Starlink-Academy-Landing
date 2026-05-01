/**
 * Reusable input component with label and error display
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
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-slate-300">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
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
          className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-white placeholder-slate-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50 ${
            icon ? 'pl-10' : ''
          } ${
            error
              ? 'border-red-500/50 focus:border-red-500'
              : 'border-white/10 focus:border-primary-500'
          }`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
