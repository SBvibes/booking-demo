"use client";

import { useMemo, useState } from "react";
import {
  Calendar,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";
type FilterValue = "all" | "pending" | "confirmed";

type Booking = {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  homeSize: string;
  priceEstimate: number;
  date: string;
  time: string;
  status: BookingStatus;
};

const mockBookings: Booking[] = [
  {
    id: "1",
    customerName: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "4695550101",
    address: "1208 Brookstone Dr, McKinney, TX 75071",
    serviceType: "Deep Cleaning",
    homeSize: "Medium",
    priceEstimate: 210,
    date: "2026-04-10",
    time: "9:00 AM",
    status: "pending",
  },
  {
    id: "2",
    customerName: "Marcus Lee",
    email: "marcus.lee@email.com",
    phone: "2145550142",
    address: "905 Cedar Elm Ln, Frisco, TX 75036",
    serviceType: "Standard Cleaning",
    homeSize: "Small",
    priceEstimate: 90,
    date: "2026-04-11",
    time: "11:30 AM",
    status: "confirmed",
  },
  {
    id: "3",
    customerName: "Olivia Carter",
    email: "olivia.carter@email.com",
    phone: "9725550198",
    address: "4301 Stone Hollow Way, Allen, TX 75013",
    serviceType: "Move-Out Cleaning",
    homeSize: "Large",
    priceEstimate: 340,
    date: "2026-04-12",
    time: "2:00 PM",
    status: "completed",
  },
  {
    id: "4",
    customerName: "David Brooks",
    email: "david.brooks@email.com",
    phone: "4695550177",
    address: "2210 Windcrest Ct, Plano, TX 75025",
    serviceType: "Deep Cleaning",
    homeSize: "Large",
    priceEstimate: 290,
    date: "2026-04-13",
    time: "3:30 PM",
    status: "cancelled",
  },
];

function statusClasses(status: BookingStatus) {
  switch (status) {
    case "pending":
      return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";
    case "confirmed":
      return "border-[#1ed760]/30 bg-[#1ed760]/10 text-[#1ed760]";
    case "completed":
      return "border-blue-500/30 bg-blue-500/10 text-blue-300";
    case "cancelled":
      return "border-red-500/30 bg-red-500/10 text-red-300";
  }
}

function formatPhone(phone: string) {
  if (phone.length === 10) {
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  }
  return phone;
}

function mapsLink(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

function BookingCard({ booking }: { booking: Booking }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(booking.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <article className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {booking.customerName}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-500" />
              <span>{booking.email}</span>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1 rounded-lg border border-[#1A1A1A] px-2 py-1 text-xs text-gray-300 transition hover:bg-white/5"
            >
              <Copy size={14} className="text-gray-500" />
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${statusClasses(
            booking.status
          )}`}
        >
          {booking.status}
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-gray-500">Service</p>
            <p className="font-medium text-white">{booking.serviceType}</p>
          </div>

          <div>
            <p className="text-gray-500">Home Size</p>
            <p className="font-medium text-white">{booking.homeSize}</p>
          </div>

          <div>
            <p className="text-gray-500">Estimate</p>
            <p className="font-medium text-white">${booking.priceEstimate}</p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <p className="text-gray-500">Date & Time</p>
            <div className="flex items-center gap-2 font-semibold text-white">
              <Calendar size={16} className="text-[#1ed760]" />
              <span>
                {booking.date} · {booking.time}
              </span>
            </div>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <a
              href={`tel:${booking.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-gray-200 underline decoration-transparent underline-offset-4 transition hover:text-[#1ed760] hover:decoration-[#1ed760]/40"
            >
              <Phone size={16} className="text-gray-500" />
              <span>{formatPhone(booking.phone)}</span>
            </a>
          </div>

          <div>
            <p className="text-gray-500">Address</p>
            <a
              href={mapsLink(booking.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 underline decoration-transparent underline-offset-4 transition hover:text-[#1ed760] hover:decoration-[#1ed760]/40"
            >
              <MapPin size={16} className="mt-0.5 shrink-0 text-gray-500" />
              <span className="font-medium text-gray-200">{booking.address}</span>
              <ExternalLink
                size={16}
                className="mt-0.5 shrink-0 text-gray-500"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#1A1A1A] pt-4">
        <button
          type="button"
          className="rounded-xl border border-[#1ed760] px-4 py-2 text-sm font-medium text-[#1ed760] transition hover:bg-[#1ed760]/10"
        >
          Confirm
        </button>

        <button
          type="button"
          className="rounded-xl bg-[#1ed760] px-4 py-2 text-sm font-medium text-black transition hover:brightness-110"
        >
          Complete
        </button>

        <button
          type="button"
          className="rounded-xl px-2 py-2 text-sm text-gray-400 transition hover:text-white"
        >
          Cancel
        </button>
      </div>
    </article>
  );
}

export default function AdminDashboard() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredBookings = useMemo(() => {
    if (filter === "all") return mockBookings;
    return mockBookings.filter((booking) => booking.status === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <div className="border-b border-[#1A1A1A]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="text-lg font-semibold">BrightNest Admin</div>

            <nav className="flex items-center gap-5 text-sm">
              <button className="text-white">Bookings</button>
              <button className="text-gray-500 hover:text-white">
                Settings
              </button>
            </nav>
          </div>

          <div className="text-sm text-gray-500">
            {filteredBookings.length} visible
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full border px-4 py-2 text-sm ${
              filter === "all"
                ? "border-white/15 bg-white/10 text-white"
                : "border-[#1A1A1A] text-gray-400 hover:text-white"
            }`}
          >
            All
          </button>

          <button
            type="button"
            onClick={() => setFilter("pending")}
            className={`rounded-full border px-4 py-2 text-sm ${
              filter === "pending"
                ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-300"
                : "border-[#1A1A1A] text-gray-400 hover:text-white"
            }`}
          >
            Pending
          </button>

          <button
            type="button"
            onClick={() => setFilter("confirmed")}
            className={`rounded-full border px-4 py-2 text-sm ${
              filter === "confirmed"
                ? "border-[#1ed760]/30 bg-[#1ed760]/10 text-[#1ed760]"
                : "border-[#1A1A1A] text-gray-400 hover:text-white"
            }`}
          >
            Confirmed
          </button>
        </div>

        <div className="grid gap-4">
          {filteredBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      </main>
    </div>
  );
}