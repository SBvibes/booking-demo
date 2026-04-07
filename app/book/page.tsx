"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";

export default function BookPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [homeSize, setHomeSize] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function getEstimate() {
    if (!service || !homeSize) return null;

    const priceMap: Record<string, Record<string, number>> = {
      "Standard Cleaning": { Small: 90, Medium: 130, Large: 180 },
      "Deep Cleaning": { Small: 150, Medium: 210, Large: 290 },
      "Move-Out Cleaning": { Small: 180, Medium: 250, Large: 340 },
    };

    return priceMap[service]?.[homeSize] ?? null;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!date || !time) {
      alert("Please select a date and time.");
      return;
    }

    const booking = {
      id: Date.now(),
      name,
      email,
      address,
      service,
      homeSize,
      date,
      time,
      notes,
      estimate: getEstimate(),
      createdAt: new Date().toISOString(),
    };

    const existing =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("bookings") || "[]")
        : [];

    localStorage.setItem("bookings", JSON.stringify([booking, ...existing]));
    setSubmitted(true);

    setName("");
    setEmail("");
    setAddress("");
    setService("");
    setHomeSize("");
    setDate("");
    setTime("");
    setNotes("");
  }

  const estimate = getEstimate();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-[#111317] dark:text-[#f3f4f6]">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 pt-6">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:underline dark:text-gray-400"
        >
          ← Back to home
        </Link>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-green-600 dark:text-green-400">
            Cleaning service booking demo
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Book a cleaning in minutes
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#1a1f26]">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Request a booking
            </h2>

            {submitted && (
              <div className="mb-4 text-sm text-green-600 dark:text-green-400">
                Booking saved locally.
              </div>
            )}

            <BookingForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              address={address}
              setAddress={setAddress}
              service={service}
              setService={setService}
              homeSize={homeSize}
              setHomeSize={setHomeSize}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              notes={notes}
              setNotes={setNotes}
              handleSubmit={handleSubmit}
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#1a1f26]">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Estimated price
              </h3>

              {estimate ? (
                <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                  ${estimate}
                </p>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Select service + size
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#1a1f26]">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p className="mb-2 font-medium text-gray-700 dark:text-gray-200">
                  Demo tools
                </p>
                <Link
                  href="/admin"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  View submitted bookings (admin preview) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}