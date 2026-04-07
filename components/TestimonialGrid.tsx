"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    initials: "JS",
    name: "Jane Smith",
    meta: "New Homeowner, McKinney",
    text: "The deep clean was flawless. Every corner of our new home was spotless, and the process was so simple. Highly recommend!",
  },
  {
    initials: "ML",
    name: "Mike Lewis",
    meta: "Apartment Owner",
    text: "Booking was quick and easy. The team showed up on time and did an amazing job. The whole process felt professional from start to finish.",
  },
  {
    initials: "AR",
    name: "Alex Rivera",
    meta: "Property Manager",
    text: "Best cleaning service I’ve used. Everything looked polished, organized, and easy to understand. Exactly the kind of website experience customers want.",
  },
];

export default function TestimonialGrid() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>("[data-glow-card]");
    if (!cards) return;

    const handleMove = (card: HTMLElement, e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    };

    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => handleMove(card, e);
      const onLeave = () => {
        card.style.setProperty("--x", "50%");
        card.style.setProperty("--y", "50%");
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);

      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm font-medium text-green-600 dark:text-green-400">
          Customer feedback
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl">
          Trusted by homeowners who want a simple, reliable booking experience
        </h2>
      </div>

      <div
        ref={gridRef}
        className="grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((item) => (
          <article
            key={item.name}
            data-glow-card
            className="testimonial-card relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-colors dark:border-[#222] dark:bg-[#101010]"
            style={
              {
                "--x": "50%",
                "--y": "50%",
              } as React.CSSProperties
            }
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 testimonial-glow" />

            <div className="relative z-10">
              <div className="mb-4 flex items-start justify-between">
                <div className="text-lg tracking-wide text-green-500">★★★★★</div>
                <div className="text-6xl leading-none text-gray-200 dark:text-[#333]">
                  “
                </div>
              </div>

              <p className="mb-8 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {item.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-900 dark:bg-[#2a2a2a] dark:text-white">
                  {item.initials}
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {item.meta}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .testimonial-card:hover .testimonial-glow {
          opacity: 1;
        }

        .testimonial-glow {
          background: radial-gradient(
            320px circle at var(--x) var(--y),
            rgba(30, 215, 96, 0.15),
            transparent 40%
          );
        }
      `}</style>
    </section>
  );
}