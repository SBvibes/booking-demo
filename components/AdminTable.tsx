type Booking = {
  id: string;
  name: string;
  email: string;
  service: string;
  datetime: string;
  created_at: string;
};

type AdminTableProps = {
  bookings: Booking[];
};

export default function AdminTable({ bookings }: AdminTableProps) {
  if (bookings.length === 0) {
    return (
      <div
        style={{
          borderRadius: 22,
          padding: 20,
          color: "rgba(255,255,255,0.7)",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow:
            "inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 16px 44px rgba(0, 0, 0, 0.34)",
        }}
      >
        No bookings yet. Submit a request from the booking page to populate the
        dashboard.
      </div>
    );
  }

  return (
    <div
      style={{
        overflowX: "auto",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: 860,
        }}
      >
        <thead>
          <tr
            style={{
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Service</Th>
            <Th>Requested Time</Th>
            <Th>Created</Th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <Td strong>{booking.name}</Td>
              <Td>{booking.email}</Td>
              <Td>
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(99,102,241,0.14)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    color: "#c7d2fe",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  {booking.service}
                </span>
              </Td>
              <Td>{formatDisplayDate(booking.datetime)}</Td>
              <Td>{new Date(booking.created_at).toLocaleString()}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "14px 16px",
        fontSize: 12,
        color: "rgba(255,255,255,0.55)",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        fontWeight: 700,
      }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  strong = false,
}: {
  children: React.ReactNode;
  strong?: boolean;
}) {
  return (
    <td
      style={{
        padding: "16px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        color: strong ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.72)",
        fontWeight: strong ? 700 : 500,
        fontSize: 14,
        verticalAlign: "middle",
      }}
    >
      {children}
    </td>
  );
}

function formatDisplayDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString();
}