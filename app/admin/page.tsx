"use client";

import { useEffect, useState } from "react";

type Booking = {
  id: string;
  name: string;
  email: string;
  service: string;
  datetime: string;
  created_at: string;
};

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const existing = localStorage.getItem("bookings");
    const parsed: Booking[] = existing ? JSON.parse(existing) : [];

    parsed.sort((a, b) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

    setBookings(parsed);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        backgroundColor: "#f7f7f8",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          backgroundColor: "white",
          padding: 24,
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: 8 }}>Admin Dashboard</h1>
        <p style={{ marginTop: 0, marginBottom: 24, color: "#555" }}>
          View submitted bookings below.
        </p>

        {bookings.length === 0 ? (
          <div
            style={{
              padding: 16,
              borderRadius: 12,
              backgroundColor: "#f3f4f6",
              color: "#444",
            }}
          >
            No bookings yet.
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f3f4f6" }}>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Email</th>
                  <th style={thStyle}>Service</th>
                  <th style={thStyle}>Datetime</th>
                  <th style={thStyle}>Created At</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td style={tdStyle}>{booking.name}</td>
                    <td style={tdStyle}>{booking.email}</td>
                    <td style={tdStyle}>{booking.service}</td>
                    <td style={tdStyle}>{booking.datetime}</td>
                    <td style={tdStyle}>
                      {new Date(booking.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: 12,
  borderBottom: "1px solid #ddd",
};

const tdStyle: React.CSSProperties = {
  padding: 12,
  borderBottom: "1px solid #eee",
};