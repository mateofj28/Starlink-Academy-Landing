import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import HeroSection from './components/sections/HeroSection'
import CoursesSection from './components/sections/CoursesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FaqSection from './components/sections/FaqSection'
import CtaSection from './components/sections/CtaSection'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
