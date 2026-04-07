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
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 dark:border-white/10 dark:bg-[#20252d] dark:text-white dark:placeholder:text-gray-500"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 dark:border-white/10 dark:bg-[#20252d] dark:text-white dark:placeholder:text-gray-500"
        required
      />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 dark:border-white/10 dark:bg-[#20252d] dark:text-white dark:placeholder:text-gray-500"
        required
      />

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors dark:border-white/10 dark:bg-[#20252d] dark:text-white"
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
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors dark:border-white/10 dark:bg-[#20252d] dark:text-white"
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
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors dark:border-white/10 dark:bg-[#20252d] dark:text-white"
        required
      />

      <div>
        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
          Select time
        </p>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((slot) => (
            <button
              type="button"
              key={slot}
              onClick={() => setTime(slot)}
              className={`rounded-lg border py-2 text-sm transition-colors ${
                time === slot
                  ? "border-green-600 bg-green-600 text-white"
                  : "border-gray-300 bg-white text-gray-700 dark:border-white/10 dark:bg-[#20252d] dark:text-gray-200"
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
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 dark:border-white/10 dark:bg-[#20252d] dark:text-white dark:placeholder:text-gray-500"
        rows={4}
      />

      <button
        type="submit"
        className="rounded-xl bg-green-600 py-3 text-white transition hover:bg-green-700"
      >
        Submit Booking
      </button>
    </form>
  );
}