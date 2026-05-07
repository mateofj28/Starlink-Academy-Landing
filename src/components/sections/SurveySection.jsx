import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

export default function SurveySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interested: '',
    timing: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)

    // Build email body
    const subject = encodeURIComponent('Nuevo formulario de interés – Curso Starlink')
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Celular: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `¿Te gustaría formarte en distribución y manejo de antenas Starlink?\n${formData.interested}\n\n` +
      `¿Estás interesado en tomar el curso próximamente?\n${formData.timing}`
    )

    // Use FormSubmit service to send email without backend
    const form = new FormData()
    form.append('_subject', 'Nuevo formulario de interés – Curso Starlink')
    form.append('_captcha', 'false')
    form.append('_template', 'box')
    form.append('_autoresponse', 'Gracias por tu interés en el Curso Starlink. Nos pondremos en contacto contigo pronto.')
    form.append('_replyto', formData.email)
    form.append('Nombre', formData.name)
    form.append('Celular', formData.phone)
    form.append('Email', formData.email)
    form.append('Formarse-en-Starlink', formData.interested)
    form.append('Tomar-curso', formData.timing)

    try {
      await fetch('https://formsubmit.co/comercial@soingtel.com', {
        method: 'POST',
        body: form,
      })
      setSubmitted(true)
    } catch {
      // Fallback: open mailto
      window.open(`mailto:comercial@soingtel.com?subject=${subject}&body=${body}`)
      setSubmitted(true)
    }

    setSending(false)
  }

  if (submitted) {
    return (
      <section id="encuesta" className="relative py-16 sm:py-20 md:py-28 section-divider">
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-10 md:p-14"
          >
            <CheckCircle className="w-16 h-16 text-emerald-400/80 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-white font-[family-name:var(--font-display)] mb-3">
              ¡Gracias por tu interés!
            </h3>
            <p className="text-sm text-white/30">
              Hemos recibido tu información. Nos pondremos en contacto contigo pronto.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="encuesta" className="relative py-16 sm:py-20 md:py-28 section-divider">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Formulario de interés"
          title="¿Quieres participar en el curso?"
          description="Déjanos tus datos y te contactaremos con toda la información sobre el Curso Starlink e Internet Satelital."
        />

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Datos personales */}
          <div>
            <h4 className="text-xs font-semibold text-white/30 tracking-[0.15em] uppercase mb-4">
              Datos personales
            </h4>
            <div className="space-y-4">
              <div>
                <label htmlFor="survey-name" className="block text-xs font-medium text-white/40 tracking-wide uppercase mb-1.5">
                  Nombre completo
                </label>
                <input
                  id="survey-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all duration-300 focus:ring-1 focus:ring-primary-500/30 focus:border-white/15 text-sm"
                />
              </div>
              <div>
                <label htmlFor="survey-phone" className="block text-xs font-medium text-white/40 tracking-wide uppercase mb-1.5">
                  Número de celular
                </label>
                <input
                  id="survey-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="3101234567"
                  maxLength={10}
                  className="w-full rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all duration-300 focus:ring-1 focus:ring-primary-500/30 focus:border-white/15 text-sm"
                />
              </div>
              <div>
                <label htmlFor="survey-email" className="block text-xs font-medium text-white/40 tracking-wide uppercase mb-1.5">
                  Correo electrónico
                </label>
                <input
                  id="survey-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all duration-300 focus:ring-1 focus:ring-primary-500/30 focus:border-white/15 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Preguntas */}
          <div>
            <h4 className="text-xs font-semibold text-white/30 tracking-[0.15em] uppercase mb-4">
              Preguntas sobre el curso
            </h4>
            <div className="space-y-6">
              {/* Pregunta 1 */}
              <fieldset>
                <legend className="text-sm text-white/50 mb-3">
                  ¿Te gustaría formarte en distribución y manejo de antenas Starlink e internet satelital?
                </legend>
                <div className="flex flex-col sm:flex-row gap-3">
                  <label className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.interested === 'Sí'
                    ? 'border-primary-500/30 bg-primary-500/[0.06] text-white'
                    : 'border-white/[0.06] bg-white/[0.02] text-white/40 hover:border-white/10'
                    }`}>
                    <input
                      type="radio"
                      name="interested"
                      value="Sí"
                      required
                      checked={formData.interested === 'Sí'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.interested === 'Sí' ? 'border-primary-400' : 'border-white/20'
                      }`}>
                      {formData.interested === 'Sí' && <span className="w-2 h-2 rounded-full bg-primary-400" />}
                    </span>
                    <span className="text-sm">Sí</span>
                  </label>
                  <label className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.interested === 'No'
                    ? 'border-primary-500/30 bg-primary-500/[0.06] text-white'
                    : 'border-white/[0.06] bg-white/[0.02] text-white/40 hover:border-white/10'
                    }`}>
                    <input
                      type="radio"
                      name="interested"
                      value="No"
                      checked={formData.interested === 'No'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.interested === 'No' ? 'border-primary-400' : 'border-white/20'
                      }`}>
                      {formData.interested === 'No' && <span className="w-2 h-2 rounded-full bg-primary-400" />}
                    </span>
                    <span className="text-sm">No</span>
                  </label>
                </div>
              </fieldset>

              {/* Pregunta 2 */}
              <fieldset>
                <legend className="text-sm text-white/50 mb-3">
                  ¿Estás interesado en tomar el curso próximamente?
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Sí, quiero más información',
                    'Sí, deseo inscribirme',
                    'Tal vez más adelante',
                    'No por el momento',
                  ].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.timing === option
                        ? 'border-primary-500/30 bg-primary-500/[0.06] text-white'
                        : 'border-white/[0.06] bg-white/[0.02] text-white/40 hover:border-white/10'
                        }`}
                    >
                      <input
                        type="radio"
                        name="timing"
                        value={option}
                        required
                        checked={formData.timing === option}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${formData.timing === option ? 'border-primary-400' : 'border-white/20'
                        }`}>
                        {formData.timing === option && <span className="w-2 h-2 rounded-full bg-primary-400" />}
                      </span>
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full"
            disabled={sending}
          >
            {sending ? (
              <>
                <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar formulario
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
