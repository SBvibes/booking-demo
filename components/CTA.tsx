export default function CTA() {
  return (
    <section className="bg-green-600 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">
            Ready to book your cleaning?
          </h2>
          <p className="text-sm text-green-100">
            Schedule your service in under a minute.
          </p>
        </div>

        <a
          href="/book"
          className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-green-600 transition hover:opacity-90 dark:bg-[#f3f4f6]"
        >
          Book a Cleaning
        </a>
      </div>
    </section>
  );
}