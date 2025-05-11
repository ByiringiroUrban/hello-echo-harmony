import Navbar from "@/components/layouts/navbar"
import Hero from "@/components/hero"
import ServiceCards from "@/components/services/service-cards"
import DepartmentSection from "@/components/department-section"
import StatsSection from "@/components/stats-section"
import DoctorsSection from "@/components/doctors/doctors-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import ContactSection from "@/components/contact/contact-section"
import Footer from "@/components/layouts/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 rounded-bl-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-20"></div> */}

        <Hero />
        <ServiceCards />
        <DepartmentSection />
        <StatsSection />
        <DoctorsSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
