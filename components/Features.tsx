export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-semibold mb-10">
        Built for local service businesses
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-medium mb-2">Online booking</h3>
          <p className="text-sm text-gray-500">
            Customers can request services anytime.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-medium mb-2">Estimated pricing</h3>
          <p className="text-sm text-gray-500">
            Show pricing instantly based on service.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-medium mb-2">Admin control</h3>
          <p className="text-sm text-gray-500">
            Accept or follow up with customers easily.
          </p>
        </div>

      </div>
    </section>
  );
}