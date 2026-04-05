"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const timeSlots = [
  "9:00 AM",
  "11:00 AM",
  "1:00 PM",
  "3:00 PM",
  "5:00 PM",
];

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
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
    <div className="max-w-6xl mx-auto px-4 pt-6">
      <Link href="/" className="text-sm text-gray-500 hover:underline">
        ← Back to home
      </Link>
    </div>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-green-600">
            Cleaning service booking demo
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Book a cleaning in minutes
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* FORM */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Request a booking
            </h2>

            {submitted && (
              <div className="mb-4 text-sm text-green-600">
                Booking saved locally.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl border px-4 py-3"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border px-4 py-3"
                required
              />

              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="rounded-xl border px-4 py-3"
                required
              />

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="rounded-xl border px-4 py-3"
                required
              >
                <option value="">Select service</option>
                <option value="Standard Cleaning">Standard Cleaning</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
                <option value="Move-Out Cleaning">Move-Out Cleaning</option>
              </select>

              <select
                value={homeSize}
                onChange={(e) => setHomeSize(e.target.value)}
                className="rounded-xl border px-4 py-3"
                required
              >
                <option value="">Home size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>

              {/* DATE */}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-xl border px-4 py-3"
                required
              />

              {/* TIME SLOTS */}
              <div>
                <p className="text-sm mb-2">Select time</p>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`rounded-lg border py-2 text-sm ${
                        time === slot
                          ? "bg-green-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="rounded-xl border px-4 py-3"
              />

              <button className="bg-green-600 text-white py-3 rounded-xl">
                Submit Booking
              </button>
            </form>
          </div>

          {/* SIDE PANEL */}
          <div className="space-y-6">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="font-semibold mb-2">Estimated price</h3>

              {estimate ? (
                <p className="text-3xl font-semibold">${estimate}</p>
              ) : (
                <p className="text-sm text-gray-500">
                  Select service + size
                </p>
              )}
            <div className="text-sm text-gray-500">
              <p className="mb-2 font-medium">Demo tools</p>
              <Link href="/admin" className="text-blue-600 hover:underline">
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