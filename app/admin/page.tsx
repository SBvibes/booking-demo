"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import AdminTable from "@/components/AdminTable";

type Booking = {
  id: string;
  name: string;
  email: string;
  service: string;
  datetime: string;
  created_at: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
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

  const stats = useMemo(() => {
    const total = bookings.length;
    const deepClean = bookings.filter((b) => b.service === "Deep Clean").length;
    const recurring = bookings.filter(
      (b) => b.service === "Recurring Clean"
    ).length;

    return { total, deepClean, recurring };
  }, [bookings]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030303",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style jsx global>{`
        body {
          background: #030303;
          font-family: Inter, Geist Sans, Arial, sans-serif;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 16px 44px rgba(0, 0, 0, 0.34);
        }

        .headline-gradient {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #dbeafe 28%,
            #a5b4fc 68%,
            #ffffff 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 90%);
          pointer-events: none;
        }
      `}</style>

      <div className="grid-lines" />

      <div
        style={{
          position: "absolute",
          top: 80,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "#2563eb",
          filter: "blur(95px)",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: -100,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "#7c3aed",
          filter: "blur(95px)",
          opacity: 0.16,
          pointerEvents: "none",
        }}
      />

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "56px 24px 96px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 28 }}
        >
          <a
            href="/"
            style={{
              color: "rgba(255,255,255,0.72)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            ← Back to home
          </a>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 22,
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <div
              className="glass-card"
              style={{
                borderRadius: 28,
                padding: 24,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Operations Dashboard
              </p>

              <h1
                style={{
                  margin: "10px 0 10px",
                  fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.05em",
                  fontWeight: 900,
                }}
              >
                <span className="headline-gradient">Booking visibility</span>
                <br />
                <span style={{ color: "rgba(255,255,255,0.96)" }}>
                  for premium cleaning operations.
                </span>
              </h1>

              <p
                style={{
                  margin: 0,
                  maxWidth: 760,
                  color: "rgba(255,255,255,0.66)",
                  lineHeight: 1.8,
                  fontSize: 16,
                }}
              >
                A clean internal view for recent booking requests, service mix,
                and lightweight local business scheduling oversight.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            <StatCard label="Total Requests" value={String(stats.total)} />
            <StatCard label="Deep Cleans" value={String(stats.deepClean)} />
            <StatCard label="Recurring" value={String(stats.recurring)} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{
              borderRadius: 28,
              padding: 22,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                marginBottom: 18,
                flexWrap: "wrap",
              }}
            >
              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: 24,
                  }}
                >
                  Incoming booking requests
                </h2>
                <p
                  style={{
                    margin: "8px 0 0",
                    color: "rgba(255,255,255,0.62)",
                    fontSize: 14,
                  }}
                >
                  Newest requests appear first.
                </p>
              </div>

              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  color: "#6ee7b7",
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                {bookings.length} active records
              </div>
            </div>

            <AdminTable bookings={bookings} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, scale: 1.015 }}
      className="glass-card"
      style={{
        borderRadius: 22,
        padding: 20,
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 12,
          color: "rgba(255,255,255,0.55)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </p>
      <h3
        style={{
          margin: "10px 0 0",
          fontSize: 38,
          lineHeight: 1,
        }}
      >
        {value}
      </h3>
    </motion.div>
  );
}