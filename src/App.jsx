import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import ImageDivider from './components/ui/ImageDivider'

import HeroSection from './components/sections/HeroSection'
import CoursesSection from './components/sections/CoursesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import SurveySection from './components/sections/SurveySection'
import FaqSection from './components/sections/FaqSection'
import CtaSection from './components/sections/CtaSection'

import img1 from './assets/instructor-1.jpg.jpeg'
import img2 from './assets/instructor-2.jpg.jpeg'
import img3 from './assets/instructor-3.jpg.jpeg'
import img4 from './assets/instructor-4.jpg.jpeg'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <SurveySection />
        <HeroSection />
        <ImageDivider src={img1} alt="Instructor con kit Starlink" />
        <CoursesSection />
        <ImageDivider src={img2} alt="Instructor con equipos Starlink" />
        <TestimonialsSection />
        <ImageDivider src={img3} alt="Instructor mostrando Starlink" />
        <FaqSection />
        <ImageDivider src={img4} alt="Instructor con antena Starlink" />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
