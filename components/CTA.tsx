export default function CTA() {
  return (
    <section className="bg-green-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Ready to book your cleaning?
          </h2>
          <p className="text-sm text-green-100">
            Schedule your service in under a minute.
          </p>
        </div>

        <a
          href="/book"
          className="bg-white text-green-600 px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
        >
          Book a Cleaning
        </a>

      </div>
    </section>
  );
}