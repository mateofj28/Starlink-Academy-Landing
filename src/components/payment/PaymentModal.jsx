import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowLeft, ArrowRight, Shield, Lock } from 'lucide-react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useForm } from '../../hooks/useForm'
import { formatCurrency } from '../../utils/formatters'
import { validateContactForm, validatePaymentForm } from '../../utils/validators'
import PaymentSuccess from './PaymentSuccess'

const STEPS = ['contact', 'payment', 'success']

export default function PaymentModal({ course, onClose }) {
  const [step, setStep] = useState(0)
  const [processing, setProcessing] = useState(false)

  const contact = useForm({ name: '', email: '', phone: '' })
  const payment = useForm({ cardNumber: '', cardName: '', expiry: '', cvv: '' })

  function handleNextStep() {
    if (step === 0) {
      const { valid, errors } = validateContactForm(contact.values)
      if (!valid) {
        contact.setErrors(errors)
        return
      }
      setStep(1)
    } else if (step === 1) {
      const { valid, errors } = validatePaymentForm(payment.values)
      if (!valid) {
        payment.setErrors(errors)
        return
      }
      handlePayment()
    }
  }

  async function handlePayment() {
    setProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2500))
    setProcessing(false)
    setStep(2)
  }

  function handleCardNumberChange(e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 16)
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ')
    payment.setValues((prev) => ({ ...prev, cardNumber: value }))
    payment.setErrors((prev) => {
      const next = { ...prev }
      delete next.cardNumber
      return next
    })
  }

  function handleExpiryChange(e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4)
    if (value.length >= 3) {
      value = value.slice(0, 2) + '/' + value.slice(2)
    }
    payment.setValues((prev) => ({ ...prev, expiry: value }))
    payment.setErrors((prev) => {
      const next = { ...prev }
      delete next.expiry
      return next
    })
  }

  const currentStep = STEPS[step]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-lg glass rounded-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          {/* Close button */}
          {currentStep !== 'success' && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10 cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Header */}
          {currentStep !== 'success' && (
            <div className="p-6 pb-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{course.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
                  <p className="text-sm text-slate-400">{course.subtitle}</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-2xl font-extrabold text-white">
                  {formatCurrency(course.price)}
                </span>
                {course.originalPrice > course.price && (
                  <span className="text-sm text-slate-500 line-through">
                    {formatCurrency(course.originalPrice)}
                  </span>
                )}
              </div>

              {/* Step indicator */}
              <div className="flex items-center gap-2 mt-5">
                {['Datos', 'Pago'].map((label, i) => (
                  <div key={label} className="flex items-center gap-2 flex-1">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        i <= step
                          ? 'bg-primary-500 text-white'
                          : 'bg-white/10 text-slate-500'
                      }`}
                    >
                      {i + 1}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        i <= step ? 'text-white' : 'text-slate-500'
                      }`}
                    >
                      {label}
                    </span>
                    {i < 1 && (
                      <div className={`flex-1 h-0.5 rounded ${
                        step > i ? 'bg-primary-500' : 'bg-white/10'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Body */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {currentStep === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <Input
                    label="Nombre completo"
                    name="name"
                    placeholder="Tu nombre"
                    value={contact.values.name}
                    onChange={contact.handleChange}
                    error={contact.errors.name}
                  />
                  <Input
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={contact.values.email}
                    onChange={contact.handleChange}
                    error={contact.errors.email}
                  />
                  <Input
                    label="Celular"
                    name="phone"
                    type="tel"
                    placeholder="3001234567"
                    maxLength={10}
                    value={contact.values.phone}
                    onChange={contact.handleChange}
                    error={contact.errors.phone}
                  />

                  <Button className="w-full mt-2" onClick={handleNextStep}>
                    Continuar al pago
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}

              {currentStep === 'payment' && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <Input
                    label="Número de tarjeta"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={payment.values.cardNumber}
                    onChange={handleCardNumberChange}
                    error={payment.errors.cardNumber}
                    maxLength={19}
                  />
                  <Input
                    label="Nombre del titular"
                    name="cardName"
                    placeholder="Como aparece en la tarjeta"
                    value={payment.values.cardName}
                    onChange={payment.handleChange}
                    error={payment.errors.cardName}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Vencimiento"
                      name="expiry"
                      placeholder="MM/YY"
                      value={payment.values.expiry}
                      onChange={handleExpiryChange}
                      error={payment.errors.expiry}
                      maxLength={5}
                    />
                    <Input
                      label="CVV"
                      name="cvv"
                      type="password"
                      placeholder="•••"
                      value={payment.values.cvv}
                      onChange={payment.handleChange}
                      error={payment.errors.cvv}
                      maxLength={4}
                    />
                  </div>

                  {/* Security badge */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Pago seguro con encriptación SSL de 256 bits</span>
                    <Lock className="w-3 h-3 text-green-500" />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <Button
                      variant="ghost"
                      onClick={() => setStep(0)}
                      className="flex-shrink-0"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Atrás
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={handleNextStep}
                      disabled={processing}
                    >
                      {processing ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          Pagar {formatCurrency(course.price)}
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 'success' && (
                <PaymentSuccess
                  course={course}
                  customerName={contact.values.name}
                  onClose={onClose}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
