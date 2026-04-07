"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import {
  Calendar,
  CheckCircle2,
  Clock3,
  Copy,
  DollarSign,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Settings,
  Sparkles,
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

function statusBadgeClasses(status: BookingStatus) {
  switch (status) {
    case "pending":
      return "border-yellow-500/25 bg-yellow-500/10 text-yellow-300";
    case "confirmed":
      return "border-[#1ed760]/25 bg-[#1ed760]/10 text-[#1ed760]";
    case "completed":
      return "border-blue-500/25 bg-blue-500/10 text-blue-300";
    case "cancelled":
      return "border-red-500/25 bg-red-500/10 text-red-300";
  }
}

function formatPhone(phone: string) {
  if (phone.length === 10) {
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  }
  return phone;
}

function MetricCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      layout
      className="flex h-[84px] items-center justify-between rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] px-5"
    >
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
          {label}
        </p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
          {value}
        </p>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1A1A1A] bg-white/[0.03] text-[#1ed760]">
        {icon}
      </div>
    </motion.div>
  );
}

function BookingCard({
  booking,
  activeFilter,
  onUpdateStatus,
  onRestoreToPending,
}: {
  booking: Booking;
  activeFilter: FilterValue;
  onUpdateStatus: (id: string, nextStatus: BookingStatus) => void;
  onRestoreToPending: (id: string) => void;
}) {
  const [copied, setCopied] = useState(false);

  const isCancelled = booking.status === "cancelled";
  const isCompleted = booking.status === "completed";
  const isInactive = isCancelled || isCompleted;

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(booking.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      toast.error("Could not copy email");
    }
  }

  function handleCancel() {
    const previousStatus = booking.status;
    onUpdateStatus(booking.id, "cancelled");

    toast("Booking Cancelled", {
      description: `${booking.customerName} moved to archive.`,
      action: {
        label: "Undo",
        onClick: () => onUpdateStatus(booking.id, previousStatus),
      },
    });
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.22 }}
      className={[
        "relative rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-5",
        isCancelled ? "opacity-40" : "",
        isCompleted
          ? "shadow-[0_0_0_1px_rgba(59,130,246,0.06),0_0_18px_rgba(59,130,246,0.10)]"
          : "shadow-[0_10px_30px_rgba(0,0,0,0.22)]",
      ].join(" ")}
    >
      <span
        className={`absolute right-5 top-5 rounded-full border px-3 py-1 text-xs font-medium capitalize ${statusBadgeClasses(
          booking.status
        )}`}
      >
        {booking.status}
      </span>

      <div className="pr-28">
        <h3 className="text-lg font-semibold text-white">{booking.customerName}</h3>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <div className="inline-flex items-center gap-2">
            <Mail size={16} className="text-gray-500" />
            <span>{booking.email}</span>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1 rounded-lg border border-[#1A1A1A] bg-white/[0.02] px-2.5 py-1 text-xs text-gray-300 transition hover:bg-white/[0.05] hover:text-white"
          >
            <Copy size={14} className="text-gray-500" />
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_1.1fr_auto]">
        <div className="grid gap-4 text-sm">
          <div className="rounded-xl border border-[#1A1A1A] bg-white/[0.02] p-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
              Service
            </p>
            <p className="mt-2 font-medium text-white">{booking.serviceType}</p>
          </div>

          <div className="rounded-xl border border-[#1A1A1A] bg-white/[0.02] p-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
              Home Size
            </p>
            <p className="mt-2 font-medium text-white">{booking.homeSize}</p>
          </div>

          <div className="rounded-xl border border-[#1A1A1A] bg-white/[0.02] p-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
              Estimate
            </p>
            <div className="mt-2 inline-flex items-center gap-2 font-medium text-white">
              <DollarSign size={16} className="text-[#1ed760]" />
              <span>${booking.priceEstimate}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 text-sm">
          <div className="rounded-xl border border-[#1A1A1A] bg-white/[0.02] p-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
              Schedule
            </p>
            <div className="mt-2 inline-flex items-center gap-2 font-semibold text-white">
              <Calendar size={16} className="text-[#1ed760]" />
              <span>
                {booking.date} · {booking.time}
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-[#1A1A1A] bg-white/[0.02] p-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
              Phone
            </p>
            <a
              href={`tel:${booking.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 font-medium text-gray-200 underline decoration-transparent underline-offset-4 transition hover:text-[#1ed760] hover:decoration-[#1ed760]/45"
            >
              <Phone size={16} className="text-gray-500" />
              <span>{formatPhone(booking.phone)}</span>
            </a>
          </div>

          <div className="rounded-xl border border-[#1A1A1A] bg-white/[0.02] p-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
              Address
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                booking.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-start gap-2 underline decoration-transparent underline-offset-4 transition hover:text-[#1ed760] hover:decoration-[#1ed760]/45"
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

        <div className="flex flex-col gap-3 xl:min-w-[170px] xl:pt-1">
          {booking.status === "pending" && (
            <>
              <button
                type="button"
                onClick={() => onUpdateStatus(booking.id, "confirmed")}
                className="rounded-xl border border-[#1ed760] px-4 py-2.5 text-sm font-medium text-[#1ed760] transition hover:bg-[#1ed760]/10"
              >
                Confirm
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="rounded-xl px-4 py-2.5 text-sm text-gray-400 transition hover:bg-white/[0.04] hover:text-white"
              >
                Cancel
              </button>
            </>
          )}

          {booking.status === "confirmed" && (
            <>
              <button
                type="button"
                onClick={() => onUpdateStatus(booking.id, "completed")}
                className="rounded-xl bg-[#1ed760] px-4 py-2.5 text-sm font-medium text-black transition hover:brightness-110"
              >
                Complete
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="rounded-xl px-4 py-2.5 text-sm text-gray-400 transition hover:bg-white/[0.04] hover:text-white"
              >
                Cancel
              </button>
            </>
          )}

          {activeFilter === "all" && isInactive && (
            <button
              type="button"
              onClick={() => onRestoreToPending(booking.id)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.05]"
            >
              <RotateCcw size={16} className="text-[#1ed760]" />
              Restore to Pending
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function AdminDashboard() {
  const [filter, setFilter] = useState<FilterValue>("pending");
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);

  function updateStatus(id: string, nextStatus: BookingStatus) {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: nextStatus } : booking
      )
    );
  }

  function restoreToPending(id: string) {
    updateStatus(id, "pending");
    toast.success("Booking restored to Pending");
  }

  const filteredBookings = useMemo(() => {
    if (filter === "all") return bookings;
    return bookings.filter((booking) => booking.status === filter);
  }, [bookings, filter]);

  const stats = useMemo(() => {
    const pending = bookings.filter((booking) => booking.status === "pending").length;
    const confirmed = bookings.filter(
      (booking) => booking.status === "confirmed"
    ).length;
    const revenue = bookings
      .filter((booking) => booking.status === "completed")
      .reduce((sum, booking) => sum + booking.priceEstimate, 0);

    return { pending, confirmed, revenue };
  }, [bookings]);

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <header className="border-b border-[#1A1A1A]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="text-lg font-semibold tracking-tight">
              BrightNest Admin
            </div>

            <nav className="flex items-center gap-5 text-sm">
              <button className="text-white">Bookings</button>
              <button className="inline-flex items-center gap-2 text-gray-500 transition hover:text-white">
                <Settings size={16} />
                Settings
              </button>
            </nav>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A] bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400">
            <Clock3 size={14} className="text-[#1ed760]" />
            Live workflow view
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <MetricCard
            label="Pending Jobs"
            value={String(stats.pending)}
            icon={<Sparkles size={18} />}
          />
          <MetricCard
            label="Confirmed Jobs"
            value={String(stats.confirmed)}
            icon={<CheckCircle2 size={18} />}
          />
          <MetricCard
            label="Completed Revenue"
            value={`$${stats.revenue}`}
            icon={<DollarSign size={18} />}
          />
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          {(["pending", "confirmed", "all"] as FilterValue[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`rounded-full border px-4 py-2 text-sm capitalize transition ${
                filter === value
                  ? "border-white/15 bg-white/10 text-white"
                  : "border-[#1A1A1A] text-gray-400 hover:text-white"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-4 pb-10">
          <AnimatePresence mode="popLayout">
            {filteredBookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                activeFilter={filter}
                onUpdateStatus={updateStatus}
                onRestoreToPending={restoreToPending}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}