"use client";

type BookingFormProps = {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
  notes: string;
  setNotes: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function BookingForm({
  name,
  setName,
  email,
  setEmail,
  address,
  setAddress,
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
        placeholder="Home address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 dark:border-white/10 dark:bg-[#20252d] dark:text-white dark:placeholder:text-gray-500"
        required
      />

      <textarea
        placeholder="Extra notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={4}
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 dark:border-white/10 dark:bg-[#20252d] dark:text-white dark:placeholder:text-gray-500"
      />

      <button
        type="submit"
        className="rounded-xl bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
      >
        Submit Booking Request
      </button>
    </form>
  );
}
