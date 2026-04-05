import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
     <Navbar />
      <Hero />
      <Features />
    </main>
  );
}