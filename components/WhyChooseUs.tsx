export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 transition-colors dark:bg-[#161a20]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-2xl font-semibold text-gray-900 dark:text-white">
          Why choose us
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-transparent p-4 transition-colors dark:border-white/5 dark:bg-[#1a1f26]">
            <h3 className="mb-2 font-medium text-gray-900 dark:text-white">
              Easy booking
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Schedule your cleaning online in just a few steps.
            </p>
          </div>

          <div className="rounded-2xl border border-transparent p-4 transition-colors dark:border-white/5 dark:bg-[#1a1f26]">
            <h3 className="mb-2 font-medium text-gray-900 dark:text-white">
              Reliable service
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Professional cleaners you can trust in your home.
            </p>
          </div>

          <div className="rounded-2xl border border-transparent p-4 transition-colors dark:border-white/5 dark:bg-[#1a1f26]">
            <h3 className="mb-2 font-medium text-gray-900 dark:text-white">
              Flexible times
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose a time that fits your schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}