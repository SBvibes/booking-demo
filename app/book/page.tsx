"use client";

import { useState } from "react";

type Booking = {
  id: string;
  name: string;
  email: string;
  service: string;
  datetime: string;
  created_at: string;
};

export default function BookPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Service 1");
  const [datetime, setDatetime] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !service || !datetime) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const newBooking: Booking = {
        id: crypto.randomUUID(),
        name,
        email,
        service,
        datetime,
        created_at: new Date().toISOString(),
      };

      const existing = localStorage.getItem("bookings");
      const bookings: Booking[] = existing ? JSON.parse(existing) : [];

      bookings.push(newBooking);
      localStorage.setItem("bookings", JSON.stringify(bookings));

      setStatus("success");
      setName("");
      setEmail("");
      setService("Service 1");
      setDatetime("");
    } catch (error) {
      console.error("BOOKING ERROR:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        backgroundColor: "#f7f7f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          backgroundColor: "white",
          padding: 24,
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: 8 }}>
          Book Appointment
        </h1>

        <p style={{ marginTop: 0, marginBottom: 24, color: "#555" }}>
          Fill out the form below to request an appointment.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Name</span>
            <input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: 12,
                borderRadius: 10,
                border: "1px solid #ccc",
                fontSize: 14,
              }}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Email</span>
            <input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: 12,
                borderRadius: 10,
                border: "1px solid #ccc",
                fontSize: 14,
              }}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Service</span>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{
                padding: 12,
                borderRadius: 10,
                border: "1px solid #ccc",
                fontSize: 14,
                backgroundColor: "white",
              }}
            >
              <option>Service 1</option>
              <option>Service 2</option>
            </select>
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Date & Time</span>
            <input
              type="datetime-local"
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
              style={{
                padding: 12,
                borderRadius: 10,
                border: "1px solid #ccc",
                fontSize: 14,
              }}
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: 8,
              padding: 12,
              borderRadius: 10,
              border: "none",
              backgroundColor: isSubmitting ? "#999" : "#111",
              color: "white",
              fontSize: 14,
              fontWeight: 600,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {status === "success" && (
          <p
            style={{
              marginTop: 16,
              padding: 12,
              borderRadius: 10,
              backgroundColor: "#e8f7ec",
              color: "#1f6f3d",
              fontSize: 14,
            }}
          >
            Booking saved successfully.
          </p>
        )}

        {status === "error" && (
          <p
            style={{
              marginTop: 16,
              padding: 12,
              borderRadius: 10,
              backgroundColor: "#fdeaea",
              color: "#a12626",
              fontSize: 14,
            }}
          >
            There was a problem saving the booking. Check your fields and try
            again.
          </p>
        )}
      </div>
    </main>
  );
}