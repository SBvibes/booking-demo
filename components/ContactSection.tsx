export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Contact
      </h2>

      <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
        <p>
          Email{" "}
          <a
            href="mailto:contact@brightnestcleaning.com"
            className="text-gray-900 underline dark:text-white"
          >
            contact@brightnestcleaning.com
          </a>
        </p>

        <p>
          Phone{" "}
          <a
            href="tel:1234567890"
            className="text-gray-900 underline dark:text-white"
          >
            (123) 456-7890
          </a>
        </p>
      </div>
    </section>
  );
}