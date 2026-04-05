import Link from "next/link";
import DemoPreview from "./DemoPreview";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 py-20">
      
      <div>
        <p className="text-sm text-green-600 font-medium mb-3">
          Websites for cleaning businesses
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
          Get more cleaning bookings without phone calls
        </h1>

        <p className="text-gray-600 mb-8">
          Customers can request jobs, see estimated pricing, and you can respond — all in one place.
        </p>

        <div className="flex gap-4">
        <Link href="/book" className="bg-green-600 text-white px-6 py-3 rounded-xl">
            Book a Cleaning
        </Link>

        </div>

        <div className="flex gap-6 text-sm text-gray-500 mt-6">
          <span>Simple</span>
          <span>Modern</span>
          <span>Built for local businesses</span>
        </div>
      </div>

      <DemoPreview />
    </section>
  );
}