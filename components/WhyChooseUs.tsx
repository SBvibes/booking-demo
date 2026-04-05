export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-10">Why choose us</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Easy booking</h3>
            <p className="text-sm text-gray-500">
              Schedule your cleaning online in just a few steps.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Reliable service</h3>
            <p className="text-sm text-gray-500">
              Professional cleaners you can trust in your home.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Flexible times</h3>
            <p className="text-sm text-gray-500">
              Choose a time that fits your schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}