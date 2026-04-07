"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookingScheduler from "@/components/BookingScheduler";
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
      id: String(Date.now()),
      customerName: name,
      email,
      phone: "",
      address,
      serviceType: service,
      homeSize,
      priceEstimate: getEstimate() ?? 0,
      date,
      time,
      notes,
      status: "pending",
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
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium text-green-600 dark:text-green-400">
            Schedule your cleaning
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Book a professional cleaning in minutes
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Choose your service, pick a date and time, and send your booking
            request online.
          </p>
        </div>

        <BookingScheduler
          service={service}
          setService={setService}
          homeSize={homeSize}
          setHomeSize={setHomeSize}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#1a1f26]">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Your details
            </h2>

            {submitted && (
              <div className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/40 dark:bg-green-950/30 dark:text-green-400">
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
              notes={notes}
              setNotes={setNotes}
              handleSubmit={handleSubmit}
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#1a1f26]">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Booking summary
              </h3>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-medium">Service:</span>{" "}
                  {service || "Not selected"}
                </p>
                <p>
                  <span className="font-medium">Home size:</span>{" "}
                  {homeSize || "Not selected"}
                </p>
                <p>
                  <span className="font-medium">Date:</span> {date || "Not selected"}
                </p>
                <p>
                  <span className="font-medium">Time:</span> {time || "Not selected"}
                </p>
              </div>

              <div className="mt-5 rounded-2xl bg-gray-50 p-4 dark:bg-white/5">
                {estimate ? (
                  <>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Estimated total
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                      ${estimate}
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Select a service and home size to preview an estimate.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}