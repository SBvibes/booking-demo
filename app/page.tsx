import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Booking Demo</h1>
      <p>Simple appointment system for local businesses</p>

      <nav style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <Link href="/book">Book</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </main>
  );
}