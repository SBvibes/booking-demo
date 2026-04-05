import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";
export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
     <Navbar />
      <Hero />
      <Features />
      <ServicesSection />
      <WhyChooseUs />
      <CTA />
      <ContactSection />
    </main>
  );
}