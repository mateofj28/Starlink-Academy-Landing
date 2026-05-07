export const COURSES = [
  {
    id: 'basico',
    title: 'Starlink Básico',
    subtitle: 'Instalación y configuración desde cero',
    price: 149000,
    originalPrice: 249000,
    currency: 'COP',
    badge: 'Más vendido',
    features: [
      'Introducción a la tecnología Starlink',
      'Unboxing y componentes del kit',
      'Instalación paso a paso',
      'Configuración del router WiFi',
      'Optimización de señal básica',
      'Solución de problemas comunes',
      'Certificado de finalización',
    ],
    duration: '4 horas',
    lessons: 12,
    level: 'Principiante',
    icon: '🛰️',
  },
  {
    id: 'avanzado',
    title: 'Starlink Avanzado',
    subtitle: 'Técnico instalador profesional',
    price: 299000,
    originalPrice: 449000,
    currency: 'COP',
    badge: 'Recomendado',
    popular: true,
    features: [
      'Todo lo del curso Básico',
      'Instalación en techos y estructuras',
      'Configuración de redes mesh',
      'Bypass del router Starlink',
      'Integración con routers de terceros',
      'Instalación en zonas rurales difíciles',
      'Herramientas profesionales del técnico',
      'Cotización y cobro de servicios',
      'Certificado profesional',
    ],
    duration: '8 horas',
    lessons: 24,
    level: 'Intermedio',
    icon: '📡',
  },
  {
    id: 'empresarial',
    title: 'Starlink Empresarial',
    subtitle: 'Soluciones corporativas y flotas',
    price: 499000,
    originalPrice: 749000,
    currency: 'COP',
    badge: 'Premium',
    features: [
      'Todo lo del curso Avanzado',
      'Starlink Business y Maritime',
      'Configuración de redes empresariales',
      'VPN y seguridad corporativa',
      'Gestión de múltiples terminales',
      'Starlink para vehículos y flotas',
      'Soporte técnico prioritario',
      'Acceso a comunidad exclusiva',
      'Certificado empresarial',
      'Mentoría personalizada 1 a 1',
    ],
    duration: '12 horas',
    lessons: 36,
    level: 'Avanzado',
    icon: '🏢',
  },
]

export const WHATSAPP_NUMBER = '573108854258'
export const WHATSAPP_BASE_URL = 'https://wa.me'

export const STATS = [
  { value: '2,500+', label: 'Estudiantes formados' },
  { value: '98%', label: 'Satisfacción' },
  { value: '150+', label: 'Instalaciones exitosas' },
  { value: '24/7', label: 'Soporte en comunidad' },
]

export const TESTIMONIALS = [
  {
    name: 'Carlos Mendoza',
    role: 'Técnico independiente',
    location: 'Medellín',
    text: 'Gracias al curso avanzado ahora instalo Starlink profesionalmente. Ya llevo más de 30 instalaciones y mis clientes quedan encantados.',
    rating: 5,
    avatar: 'CM',
  },
  {
    name: 'María Fernanda López',
    role: 'Emprendedora rural',
    location: 'Boyacá',
    text: 'En mi finca no llegaba internet. Con el curso básico aprendí a instalar y configurar Starlink yo misma. Ahora tengo internet de alta velocidad.',
    rating: 5,
    avatar: 'ML',
  },
  {
    name: 'Andrés Gutiérrez',
    role: 'Gerente de TI',
    location: 'Bogotá',
    text: 'El curso empresarial nos permitió implementar Starlink en 5 sedes rurales de nuestra empresa. La mentoría fue clave para el éxito.',
    rating: 5,
    avatar: 'AG',
  },
]

export const FAQ_ITEMS = [
  {
    question: '¿Necesito conocimientos previos?',
    answer: 'No. El curso básico está diseñado para personas sin experiencia técnica. Te guiamos paso a paso desde cero.',
  },
  {
    question: '¿Cuánto tiempo tengo acceso al curso?',
    answer: 'Acceso de por vida. Una vez compras el curso, puedes verlo las veces que quieras, incluyendo todas las actualizaciones futuras.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), PSE, Nequi, Daviplata y transferencia bancaria.',
  },
  {
    question: '¿Puedo trabajar como instalador después del curso?',
    answer: 'Sí. El curso avanzado te prepara como técnico instalador profesional. Incluye módulo de cotización y cobro de servicios para que empieces tu negocio.',
  },
  {
    question: '¿Ofrecen garantía de devolución?',
    answer: 'Sí. Tienes 7 días de garantía. Si el curso no cumple tus expectativas, te devolvemos el 100% de tu dinero sin preguntas.',
  },
  {
    question: '¿Necesito tener un kit Starlink para tomar el curso?',
    answer: 'No es obligatorio, pero es recomendable para practicar. El curso incluye simulaciones y demostraciones detalladas que puedes seguir sin el equipo.',
  },
]
