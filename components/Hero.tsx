import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-medium text-green-600 dark:text-green-400">
            Trusted home cleaning services
          </p>

          <h1 className="mb-6 text-4xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white md:text-5xl">
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Book a professional cleaning service
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">in minutes</span>
          </h1>

          <p className="mb-8 max-w-xl text-gray-600 dark:text-gray-300">
            Reliable residential cleaning with simple online booking. Choose
            your service, pick a time that works for you, and submit your
            request in just a few steps.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/book"
              className="inline-flex items-center rounded-xl bg-green-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-700"
            >
              Book a Cleaning
            </Link>

            <a
              href="#services"
              className="inline-flex items-center rounded-xl border border-gray-300 bg-white/70 px-6 py-3 text-sm font-medium text-gray-700 backdrop-blur-sm transition hover:bg-gray-50 dark:border-white/15 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              View Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span>Easy online booking</span>
            <span>Flexible scheduling</span>
            <span>Professional service</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/40 bg-white/60 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-[#1a1f26]/70 dark:shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
          <div className="overflow-hidden rounded-2xl bg-white dark:bg-[#20252d]">
            <div className="flex aspect-[4/3] w-full items-center justify-center bg-[linear-gradient(135deg,#f8fafc_0%,#e5e7eb_100%)] text-center text-gray-400 dark:bg-[linear-gradient(135deg,#232933_0%,#2b3440_100%)] dark:text-gray-500">
              <div>
                <p className="text-sm uppercase tracking-wide">
                  Homepage image area
                </p>
                <p className="mt-2 text-xs">
                  Replace with a real cleaning-business photo or booking-page screenshot
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/40 bg-white/70 p-5 backdrop-blur-md dark:border-white/10 dark:bg-[#20252d]/80">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Simple online booking
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Customers can choose a cleaning service, select a date and time,
              and submit a request without calling first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}