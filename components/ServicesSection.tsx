export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-10 text-2xl font-semibold text-gray-900 dark:text-white">
        Our Services
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#1a1f26]">
          <h3 className="mb-2 font-medium text-gray-900 dark:text-white">
            Standard Cleaning
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Routine cleaning for maintaining a clean and comfortable home.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#1a1f26]">
          <h3 className="mb-2 font-medium text-gray-900 dark:text-white">
            Deep Cleaning
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Detailed cleaning including hard-to-reach areas and buildup.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#1a1f26]">
          <h3 className="mb-2 font-medium text-gray-900 dark:text-white">
            Move-Out Cleaning
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Thorough cleaning to prepare homes for new occupants.
          </p>
        </div>
      </div>
    </section>
  );
}