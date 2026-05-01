/**
 * Validate an email address
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Validate a Colombian phone number
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length === 10 && cleaned.startsWith('3')
}

/**
 * Validate a credit card number using Luhn algorithm
 * @param {string} number
 * @returns {boolean}
 */
export function isValidCardNumber(number) {
  const cleaned = number.replace(/\s/g, '')
  if (!/^\d{13,19}$/.test(cleaned)) return false

  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10)
    if (isEven) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
    isEven = !isEven
  }
  return sum % 10 === 0
}

/**
 * Validate expiry date (MM/YY)
 * @param {string} expiry
 * @returns {boolean}
 */
export function isValidExpiry(expiry) {
  if (!/^\d{2}\/\d{2}$/.test(expiry)) return false
  const [month, year] = expiry.split('/').map(Number)
  if (month < 1 || month > 12) return false
  const now = new Date()
  const currentYear = now.getFullYear() % 100
  const currentMonth = now.getMonth() + 1
  if (year < currentYear) return false
  if (year === currentYear && month < currentMonth) return false
  return true
}

/**
 * Validate CVV
 * @param {string} cvv
 * @returns {boolean}
 */
export function isValidCVV(cvv) {
  return /^\d{3,4}$/.test(cvv)
}

/**
 * Validate the full contact/payment form
 * @param {object} data
 * @returns {{ valid: boolean, errors: object }}
 */
export function validateContactForm(data) {
  const errors = {}

  if (!data.name || data.name.trim().length < 3) {
    errors.name = 'Ingresa tu nombre completo'
  }
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Ingresa un email válido'
  }
  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = 'Ingresa un número de celular válido (10 dígitos)'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

/**
 * Validate payment card fields
 * @param {object} data
 * @returns {{ valid: boolean, errors: object }}
 */
export function validatePaymentForm(data) {
  const errors = {}

  if (!data.cardNumber || !isValidCardNumber(data.cardNumber)) {
    errors.cardNumber = 'Número de tarjeta inválido'
  }
  if (!data.cardName || data.cardName.trim().length < 3) {
    errors.cardName = 'Ingresa el nombre del titular'
  }
  if (!data.expiry || !isValidExpiry(data.expiry)) {
    errors.expiry = 'Fecha de vencimiento inválida (MM/YY)'
  }
  if (!data.cvv || !isValidCVV(data.cvv)) {
    errors.cvv = 'CVV inválido'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}
