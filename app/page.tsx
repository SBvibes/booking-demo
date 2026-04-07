import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialGrid from "@/components/TestimonialGrid";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#111317] dark:text-[#f3f4f6]">
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialGrid />
      <CTA />
      <ContactSection />
    </main>
  );
}