"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030303",
        color: "white",
        overflow: "hidden",
      }}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

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
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 12px 40px rgba(0, 0, 0, 0.35);
        }

        .headline-gradient {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #dbeafe 30%,
            #a5b4fc 65%,
            #ffffff 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
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

        .grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 90%);
          pointer-events: none;
        }

        .radial-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          opacity: 0.22;
          pointer-events: none;
        }
      `}</style>

      <div className="grid-lines" />
      <div
        className="radial-glow"
        style={{
          top: 40,
          left: -120,
          width: 320,
          height: 320,
          background: "#3b82f6",
        }}
      />
      <div
        className="radial-glow"
        style={{
          top: 180,
          right: -100,
          width: 280,
          height: 280,
          background: "#8b5cf6",
        }}
      />

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "32px 24px 110px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.nav
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 72,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(129,140,248,0.8))",
                boxShadow: "0 10px 30px rgba(129,140,248,0.3)",
              }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>Velora Clean</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                Premium Booking Experience
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            <Link
              href="/admin"
              style={{
                color: "rgba(255,255,255,0.72)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Admin
            </Link>
            <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/book"
                className="glass-card shimmer-button"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "white",
                  padding: "12px 18px",
                  borderRadius: 14,
                  fontWeight: 700,
                }}
              >
                Book Cleaning
              </Link>
            </motion.div>
          </div>
        </motion.nav>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.12fr 0.88fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.55, delay: 0.08 }}
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
              Luxury home cleaning service booking system
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.14 }}
              style={{
                margin: "0 0 18px",
                fontSize: "clamp(3rem, 7vw, 6.2rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.06em",
                fontWeight: 900,
                maxWidth: 780,
              }}
            >
              <span className="headline-gradient">Book premium cleaning</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.96)" }}>
                with a modern luxury feel.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.22 }}
              style={{
                margin: "0 0 30px",
                fontSize: 18,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.68)",
                maxWidth: 670,
              }}
            >
              A sleek booking experience for clients and a simple admin dashboard
              for operators. Designed to feel premium, fast, and trustworthy for
              local service businesses.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginBottom: 24,
              }}
            >
              <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/book"
                  className="shimmer-button"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    textDecoration: "none",
                    color: "#030303",
                    background: "linear-gradient(135deg, #ffffff, #c7d2fe)",
                    padding: "15px 22px",
                    borderRadius: 16,
                    fontWeight: 800,
                    boxShadow: "0 18px 40px rgba(199,210,254,0.22)",
                  }}
                >
                  Request Appointment
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/admin"
                  className="glass-card"
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    color: "white",
                    padding: "15px 22px",
                    borderRadius: 16,
                    fontWeight: 700,
                  }}
                >
                  View Admin Preview
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.36 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 18,
                color: "rgba(255,255,255,0.6)",
                fontSize: 14,
              }}
            >
              <span>• Fast booking request flow</span>
              <span>• Premium local business presentation</span>
              <span>• Admin-ready booking visibility</span>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass-card"
              style={{
                borderRadius: 28,
                padding: 22,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                  marginBottom: 14,
                }}
              >
                <DashboardMiniStat label="New Requests" value="24" />
                <DashboardMiniStat label="Today" value="8" />
              </div>

              <div
                className="glass-card"
                style={{
                  borderRadius: 22,
                  padding: 18,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 12,
                        color: "rgba(255,255,255,0.55)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Today’s Schedule
                    </p>
                    <h3
                      style={{
                        margin: "6px 0 0",
                        fontSize: 22,
                      }}
                    >
                      Cleaning Appointments
                    </h3>
                  </div>

                  <div
                    style={{
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.25)",
                      color: "#6ee7b7",
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    Live
                  </div>
                </div>

                <PreviewBookingCard
                  name="Sarah Mitchell"
                  service="Deep Clean"
                  time="10:00 AM"
                />
                <PreviewBookingCard
                  name="Ava Bennett"
                  service="Standard Clean"
                  time="1:30 PM"
                />
                <PreviewBookingCard
                  name="Jordan Clark"
                  service="Move-Out Clean"
                  time="4:15 PM"
                  last
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.1fr 0.9fr",
                  gap: 14,
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    borderRadius: 20,
                    padding: 18,
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
                    Client Experience
                  </p>
                  <h4 style={{ margin: "10px 0 8px", fontSize: 20 }}>
                    Easy, frictionless booking.
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      color: "rgba(255,255,255,0.68)",
                      lineHeight: 1.6,
                      fontSize: 14,
                    }}
                  >
                    Clear form flow, instant request capture, and a clean visual
                    presentation built for trust.
                  </p>
                </div>

                <div
                  className="glass-card"
                  style={{
                    borderRadius: 20,
                    padding: 18,
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
                    Conversion
                  </p>
                  <h4 style={{ margin: "10px 0 0", fontSize: 34 }}>+32%</h4>
                  <p
                    style={{
                      marginTop: 8,
                      marginBottom: 0,
                      color: "rgba(255,255,255,0.68)",
                      fontSize: 14,
                    }}
                  >
                    Better booking presentation can improve trust and lead flow.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px 110px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr 1fr",
            gridTemplateRows: "220px 220px",
            gap: 18,
          }}
        >
          <BentoCard
            title="A booking flow that feels premium"
            text="Designed for local businesses that want a refined first impression without operational complexity."
            style={{
              gridColumn: "1 / 2",
              gridRow: "1 / 3",
            }}
          />

          <BentoCard
            title="Cleaner ops visibility"
            text="Bookings are easy to view, review, and sort inside the admin dashboard."
            style={{
              gridColumn: "2 / 3",
              gridRow: "1 / 2",
            }}
          />

          <BentoCard
            title="Flexible service categories"
            text="Adaptable for standard cleans, deep cleans, recurring visits, and move-out appointments."
            style={{
              gridColumn: "3 / 4",
              gridRow: "1 / 2",
            }}
          />

          <BentoCard
            title="Local-business ready"
            text="This template can be repositioned for salons, detailing, tutoring, home services, and more."
            style={{
              gridColumn: "2 / 4",
              gridRow: "2 / 3",
            }}
          />
        </motion.div>
      </section>
    </main>
  );
}

function DashboardMiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass-card"
      style={{
        borderRadius: 20,
        padding: 18,
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
          fontSize: 34,
          lineHeight: 1,
        }}
      >
        {value}
      </h3>
    </motion.div>
  );
}

function PreviewBookingCard({
  name,
  service,
  time,
  last = false,
}: {
  name: string;
  service: string;
  time: string;
  last?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr auto",
        gap: 12,
        alignItems: "center",
        padding: "14px 0",
        borderBottom: last ? "none" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div>
        <div style={{ fontWeight: 700 }}>{name}</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
          Incoming request
        </div>
      </div>
      <div style={{ color: "rgba(255,255,255,0.78)", fontSize: 14 }}>
        {service}
      </div>
      <div
        style={{
          fontWeight: 700,
          fontSize: 13,
          color: "#c7d2fe",
        }}
      >
        {time}
      </div>
    </motion.div>
  );
}

function BentoCard({
  title,
  text,
  style,
}: {
  title: string;
  text: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01 }}
      className="glass-card"
      style={{
        borderRadius: 26,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...style,
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 14,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(129,140,248,0.22))",
          border: "1px solid rgba(255,255,255,0.08)",
          marginBottom: 18,
        }}
      />
      <div>
        <h3
          style={{
            marginTop: 0,
            marginBottom: 10,
            fontSize: 24,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.66)",
            lineHeight: 1.75,
            fontSize: 15,
          }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}