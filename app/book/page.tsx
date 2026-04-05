"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

export default function BookPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Standard Clean");
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
      setService("Standard Clean");
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
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 90%);
          pointer-events: none;
        }

        .shimmer-button {
          position: relative;
          overflow: hidden;
        }

        .shimmer-button::before {
          content: "";
          position: absolute;
          top: -120%;
          left: -40%;
          width: 60%;
          height: 300%;
          transform: rotate(20deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.28),
            transparent
          );
          animation: shimmerSweep 3.5s linear infinite;
        }

        @keyframes shimmerSweep {
          0% {
            transform: translateX(-180%) rotate(20deg);
          }
          100% {
            transform: translateX(320%) rotate(20deg);
          }
        }
      `}</style>

      <div className="grid-lines" />
      <div
        style={{
          position: "absolute",
          top: 60,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "#2563eb",
          filter: "blur(95px)",
          opacity: 0.2,
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
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />

      <section
        style={{
          maxWidth: 1240,
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
          style={{
            marginBottom: 28,
          }}
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
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            alignItems: "start",
          }}
        >
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.08 }}
              className="glass-card"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 999,
                marginBottom: 22,
                fontSize: 13,
                color: "rgba(255,255,255,0.78)",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#34d399",
                  boxShadow: "0 0 14px rgba(52,211,153,0.8)",
                }}
              />
              Appointment request form
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.14 }}
              style={{
                margin: "0 0 16px",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.05em",
                fontWeight: 900,
              }}
            >
              <span className="headline-gradient">Request your clean</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.96)" }}>
                in under a minute.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.22 }}
              style={{
                margin: "0 0 26px",
                fontSize: 17,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.66)",
                maxWidth: 580,
              }}
            >
              This premium request flow is designed for modern cleaning brands
              that want a luxury first impression without making booking feel
              complicated.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.28 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                marginBottom: 18,
              }}
            >
              <InfoCard title="Fast intake" text="Simple, low-friction booking request flow." />
              <InfoCard title="Premium feel" text="Luxury-style presentation for local service brands." />
              <InfoCard title="Clear services" text="Structured options for different cleaning types." />
              <InfoCard title="Admin-ready" text="Requests can be reviewed in a clean dashboard." />
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.16 }}
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card"
              style={{
                borderRadius: 28,
                padding: 24,
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Booking Form
                </p>
                <h2
                  style={{
                    margin: "8px 0 0",
                    fontSize: 28,
                  }}
                >
                  Schedule a service request
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <FormField label="Full Name">
                  <input
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                  />
                </FormField>

                <FormField label="Email Address">
                  <input
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                  />
                </FormField>

                <FormField label="Cleaning Service">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{
                      ...inputStyle,
                      backgroundColor: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <option>Standard Clean</option>
                    <option>Deep Clean</option>
                    <option>Move-Out Clean</option>
                    <option>Recurring Clean</option>
                  </select>
                </FormField>

                <FormField label="Preferred Date & Time">
                  <input
                    type="datetime-local"
                    value={datetime}
                    onChange={(e) => setDatetime(e.target.value)}
                    style={inputStyle}
                  />
                </FormField>

                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-button"
                  style={{
                    marginTop: 4,
                    border: "none",
                    borderRadius: 16,
                    padding: "15px 18px",
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#030303",
                    background: isSubmitting
                      ? "linear-gradient(135deg, #cbd5e1, #94a3b8)"
                      : "linear-gradient(135deg, #ffffff, #c7d2fe)",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    boxShadow: "0 16px 36px rgba(199,210,254,0.20)",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Request Appointment"}
                </motion.button>
              </form>

              {status === "success" && (
                <div
                  style={{
                    marginTop: 18,
                    borderRadius: 16,
                    padding: 14,
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(16,185,129,0.25)",
                    color: "#6ee7b7",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Your booking request was saved successfully.
                </div>
              )}

              {status === "error" && (
                <div
                  style={{
                    marginTop: 18,
                    borderRadius: 16,
                    padding: 14,
                    background: "rgba(239,68,68,0.10)",
                    border: "1px solid rgba(239,68,68,0.22)",
                    color: "#fca5a5",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Please complete all fields before submitting your request.
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: "rgba(255,255,255,0.78)",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.015 }}
      className="glass-card"
      style={{
        borderRadius: 20,
        padding: 18,
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 8,
          fontSize: 18,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          color: "rgba(255,255,255,0.64)",
          lineHeight: 1.65,
          fontSize: 14,
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.10)",
  backgroundColor: "rgba(255,255,255,0.04)",
  color: "white",
  padding: "14px 14px",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};