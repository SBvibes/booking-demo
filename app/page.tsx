import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
     <Navbar />
      <Hero />
      <Features />
      <ServicesSection />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}