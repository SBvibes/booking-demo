"use client";

type BookingFormProps = {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
  service: string;
  setService: (value: string) => void;
  homeSize: string;
  setHomeSize: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
  notes: string;
  setNotes: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const timeSlots = [
  "9:00 AM",
  "11:00 AM",
  "1:00 PM",
  "3:00 PM",
  "5:00 PM",
];

export default function BookingForm({
  name,
  setName,
  email,
  setEmail,
  address,
  setAddress,
  service,
  setService,
  homeSize,
  setHomeSize,
  date,
  setDate,
  time,
  setTime,
  notes,
  setNotes,
  handleSubmit,
}: BookingFormProps) {
  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3"
        required
      />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3"
        required
      />

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3"
        required
      >
        <option value="">Select service</option>
        <option value="Standard Cleaning">Standard Cleaning</option>
        <option value="Deep Cleaning">Deep Cleaning</option>
        <option value="Move-Out Cleaning">Move-Out Cleaning</option>
      </select>

      <select
        value={homeSize}
        onChange={(e) => setHomeSize(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3"
        required
      >
        <option value="">Home size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3"
        required
      />

      <div>
        <p className="mb-2 text-sm">Select time</p>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((slot) => (
            <button
              type="button"
              key={slot}
              onClick={() => setTime(slot)}
              className={`rounded-lg border py-2 text-sm ${
                time === slot ? "bg-green-600 text-white" : "bg-white"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-3"
        rows={4}
      />

      <button
        type="submit"
        className="rounded-xl bg-green-600 py-3 text-white"
      >
        Submit Booking
      </button>
    </form>
  );
}