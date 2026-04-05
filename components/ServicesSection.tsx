export default function ServicesSection() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-10">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-2xl p-6">
          <h3 className="font-medium mb-2">Standard Cleaning</h3>
          <p className="text-sm text-gray-500">
            Routine cleaning for maintaining a clean and comfortable home.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-medium mb-2">Deep Cleaning</h3>
          <p className="text-sm text-gray-500">
            Detailed cleaning including hard-to-reach areas and buildup.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-medium mb-2">Move-Out Cleaning</h3>
          <p className="text-sm text-gray-500">
            Thorough cleaning to prepare homes for new occupants.
          </p>
        </div>
      </div>
    </section>
  );
}