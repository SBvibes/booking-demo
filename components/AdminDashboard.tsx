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

const initialBookings: Booking[] = [
  {
    id: "1",
    customerName: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "4695550101",
    address: "1208 Brookstone Dr, McKinney, TX",
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
    address: "905 Cedar Elm Ln, Frisco, TX",
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
    address: "4301 Stone Hollow Way, Allen, TX",
    serviceType: "Move-Out Cleaning",
    homeSize: "Large",
    priceEstimate: 340,
    date: "2026-04-12",
    time: "2:00 PM",
    status: "completed",
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

function mapsLink(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

function BookingCard({
  booking,
  onUpdateStatus,
}: {
  booking: Booking;
  onUpdateStatus: (id: string, status: BookingStatus) => void;
}) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(booking.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  const isInactive =
    booking.status === "completed" || booking.status === "cancelled";

  return (
    <article
      className={`rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-5 transition ${
        isInactive ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {booking.customerName}
          </h3>

          <div className="mt-2 flex items-center gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Mail size={14} />
              {booking.email}
            </div>

            <button
              onClick={copyEmail}
              className="flex items-center gap-1 text-xs hover:text-white"
            >
              <Copy size={14} />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs ${statusClasses(
            booking.status
          )}`}
        >
          {booking.status}
        </span>
      </div>

      <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Service</p>
          <p className="text-white">{booking.serviceType}</p>

          <p className="text-gray-500 mt-2">Home</p>
          <p className="text-white">{booking.homeSize}</p>

          <p className="text-gray-500 mt-2">Estimate</p>
          <p className="text-white">${booking.priceEstimate}</p>
        </div>

        <div>
          <p className="text-gray-500">Schedule</p>
          <div className="flex items-center gap-2 text-white font-semibold">
            <Calendar size={16} className="text-[#1ed760]" />
            {booking.date} · {booking.time}
          </div>

          <p className="text-gray-500 mt-2">Phone</p>
          <a
            href={`tel:${booking.phone}`}
            target="_blank"
            className="flex items-center gap-2 hover:text-[#1ed760]"
          >
            <Phone size={16} />
            {booking.phone}
          </a>

          <p className="text-gray-500 mt-2">Address</p>
          <a
            href={mapsLink(booking.address)}
            target="_blank"
            className="flex items-center gap-2 hover:text-[#1ed760]"
          >
            <MapPin size={16} />
            {booking.address}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="mt-5 flex gap-3 border-t border-[#1A1A1A] pt-4">
        {booking.status === "pending" && (
          <>
            <button
              onClick={() => onUpdateStatus(booking.id, "confirmed")}
              className="border border-[#1ed760] px-4 py-2 rounded-xl text-[#1ed760]"
            >
              Confirm
            </button>

            <button
              onClick={() => onUpdateStatus(booking.id, "cancelled")}
              className="text-gray-400"
            >
              Cancel
            </button>
          </>
        )}

        {booking.status === "confirmed" && (
          <>
            <button
              onClick={() => onUpdateStatus(booking.id, "completed")}
              className="bg-[#1ed760] text-black px-4 py-2 rounded-xl"
            >
              Complete
            </button>

            <button
              onClick={() => onUpdateStatus(booking.id, "cancelled")}
              className="text-gray-400"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </article>
  );
}

export default function AdminDashboard() {
  const [filter, setFilter] = useState<FilterValue>("pending");
  const [bookings, setBookings] = useState(initialBookings);

  function updateStatus(id: string, status: BookingStatus) {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  }

  const filtered = useMemo(() => {
    if (filter === "all") return bookings;
    return bookings.filter((b) => b.status === filter);
  }, [bookings, filter]);

  const stats = useMemo(() => {
    const pending = bookings.filter((b) => b.status === "pending").length;
    const confirmed = bookings.filter((b) => b.status === "confirmed").length;
    const revenue = bookings
      .filter((b) => b.status === "completed")
      .reduce((sum, b) => sum + b.priceEstimate, 0);

    return { pending, confirmed, revenue };
  }, [bookings]);

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <div className="border-b border-[#1A1A1A] px-6 py-4 flex justify-between">
        <h1 className="font-semibold">Admin Dashboard</h1>
      </div>

      <div className="px-6 py-4 flex gap-6 text-sm">
        <div>Pending: {stats.pending}</div>
        <div>Confirmed: {stats.confirmed}</div>
        <div>Revenue: ${stats.revenue}</div>
      </div>

      <div className="px-6 flex gap-3 mb-4">
        {["pending", "confirmed", "all"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as FilterValue)}
            className={`px-4 py-2 rounded-full border ${
              filter === f
                ? "bg-white/10 border-white/20"
                : "border-[#1A1A1A]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="px-6 grid gap-4 pb-10">
        {filtered.map((b) => (
          <BookingCard
            key={b.id}
            booking={b}
            onUpdateStatus={updateStatus}
          />
        ))}
      </div>
    </div>
  );
}