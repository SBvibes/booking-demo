export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>

      <div className="space-y-3 text-gray-600 text-sm">
        
        <p>
          Email:{" "}
          <a
            href="mailto:contact@brightnestcleaning.com"
            className="text-black underline"
          >
            contact@brightnestcleaning.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a
            href="tel:1234567890"
            className="text-black underline"
          >
            (123) 456-7890
          </a>
        </p>

      </div>
    </section>
  );
}