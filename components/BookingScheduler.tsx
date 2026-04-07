"use client";

type BookingSchedulerProps = {
  service: string;
  setService: (value: string) => void;
  homeSize: string;
  setHomeSize: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
};

type EmptyCell = {
  key: string;
  empty: true;
};

type DayCell = {
  key: string;
  empty: false;
  day: number;
  value: string;
};

type CalendarCell = EmptyCell | DayCell;

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
];

function formatMonthYear(baseDate: Date) {
  return baseDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function getDaysInMonth(baseDate: Date) {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOffset(baseDate: Date) {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  return new Date(year, month, 1).getDay();
}

function formatDateValue(baseDate: Date, day: number) {
  const year = baseDate.getFullYear();
  const month = String(baseDate.getMonth() + 1).padStart(2, "0");
  const date = String(day).padStart(2, "0");
  return `${year}-${month}-${date}`;
}

export default function BookingScheduler({
  service,
  setService,
  homeSize,
  setHomeSize,
  date,
  setDate,
  time,
  setTime,
}: BookingSchedulerProps) {
  const today = new Date();
  const monthLabel = formatMonthYear(today);
  const totalDays = getDaysInMonth(today);
  const firstDayOffset = getFirstDayOffset(today);
  const selectedDay = date ? Number(date.split("-")[2]) : null;

  const calendarCells: CalendarCell[] = [
    ...Array.from({ length: firstDayOffset }, (_, i): EmptyCell => ({
      key: `empty-${i}`,
      empty: true,
    })),
    ...Array.from({ length: totalDays }, (_, i): DayCell => {
      const day = i + 1;
      return {
        key: `day-${day}`,
        day,
        value: formatDateValue(today, day),
        empty: false,
      };
    }),
  ];

  return (
    <section className="rounded-[28px] border border-gray-200 bg-white p-3 shadow-sm transition-colors dark:border-white/10 dark:bg-[#171b22]">
      <div className="grid gap-0 overflow-hidden rounded-[22px] border border-gray-200 dark:border-white/10 lg:grid-cols-[0.95fr_1.15fr_0.9fr]">
        <div className="border-b border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#171b22] lg:border-b-0 lg:border-r">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
            BN
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            BrightNest Cleaning
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Schedule your cleaning
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Choose your service, select a date and time, then enter your
            contact details below.
          </p>

          <div className="mt-6 space-y-3">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors dark:border-white/10 dark:bg-[#20252d] dark:text-white"
            >
              <option value="">Select service</option>
              <option value="Standard Cleaning">Standard Cleaning</option>
              <option value="Deep Cleaning">Deep Cleaning</option>
              <option value="Move-Out Cleaning">Move-Out Cleaning</option>
            </select>

            <select
              value={homeSize}
              onChange={(e) => setHomeSize(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors dark:border-white/10 dark:bg-[#20252d] dark:text-white"
            >
              <option value="">Home size</option>
              <option value="Small">Small home / apartment</option>
              <option value="Medium">Medium home</option>
              <option value="Large">Large home</option>
            </select>
          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Selected appointment
            </p>

            <div className="mt-3 space-y-2 text-sm">
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-medium">Service:</span>{" "}
                {service || "Not selected"}
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-medium">Home size:</span>{" "}
                {homeSize || "Not selected"}
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-medium">Date:</span>{" "}
                {date || "Not selected"}
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                <span className="font-medium">Time:</span>{" "}
                {time || "Not selected"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#171b22] lg:border-b-0 lg:border-r">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {monthLabel}
            </h3>

            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm dark:border-white/10 dark:bg-white/5"
              >
                ‹
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm dark:border-white/10 dark:bg-white/5"
              >
                ›
              </button>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-7 gap-2 text-center text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label) => (
              <div key={label}>{label}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendarCells.map((cell) =>
              cell.empty ? (
                <div key={cell.key} className="aspect-square" />
              ) : (
                <button
                  key={cell.key}
                  type="button"
                  onClick={() => setDate(cell.value)}
                  className={`aspect-square rounded-xl border text-sm font-medium transition-colors ${
                    selectedDay === cell.day
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100 dark:border-white/10 dark:bg-[#20252d] dark:text-gray-200 dark:hover:bg-[#262c35]"
                  }`}
                >
                  {cell.day}
                </button>
              )
            )}
          </div>
        </div>

        <div className="bg-white p-6 dark:bg-[#171b22]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Available times
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {date ? `For ${date}` : "Select a date first"}
              </p>
            </div>

            <div className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
              12h
            </div>
          </div>

          <div className="space-y-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                disabled={!date}
                className={`w-full rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                  time === slot
                    ? "border-green-600 bg-green-600 text-white"
                    : date
                    ? "border-gray-200 bg-white text-gray-800 hover:bg-gray-50 dark:border-white/10 dark:bg-[#20252d] dark:text-gray-200 dark:hover:bg-[#262c35]"
                    : "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 dark:border-white/10 dark:bg-[#20252d] dark:text-gray-500"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}