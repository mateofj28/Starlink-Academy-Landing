/**
 * Format a number as Colombian Peso currency
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Calculate discount percentage between original and current price
 * @param {number} originalPrice
 * @param {number} currentPrice
 * @returns {number}
 */
export function calcDiscount(originalPrice, currentPrice) {
  if (!originalPrice || originalPrice <= currentPrice) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

/**
 * Build a WhatsApp URL with a pre-filled message
 * @param {string} phone - Phone number with country code (no +)
 * @param {string} message - Pre-filled message
 * @returns {string}
 */
export function buildWhatsAppUrl(phone, message = '') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encoded}`
}
