export default function DemoPreview() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
      
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 bg-red-400 rounded-full" />
        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
        <div className="w-3 h-3 bg-green-400 rounded-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        
        {/* LEFT */}
        <div className="border rounded-xl p-4">
          <h3 className="font-medium mb-2">BrightNest Cleaning</h3>
          <p className="text-sm text-gray-500 mb-4">
            Request a cleaning service.
          </p>

          <div className="space-y-2">
            <div className="border rounded-lg px-3 py-2 text-sm">
              Standard Cleaning
            </div>
            <div className="border rounded-lg px-3 py-2 text-sm">
              Deep Cleaning
            </div>
            <div className="border rounded-lg px-3 py-2 text-sm">
              Move-Out Cleaning
            </div>
          </div>

          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg text-sm">
            Request Booking
          </button>
        </div>

        {/* RIGHT */}
        <div className="border rounded-xl p-4">
          <h3 className="font-medium mb-3">Available Times</h3>

          <div className="grid grid-cols-3 gap-2 text-xs mb-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="bg-gray-100 rounded-md py-2 text-center">
                {d}
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm">
            <div className="border rounded-md py-2 text-center">10:00 AM</div>
            <div className="border rounded-md py-2 text-center">12:30 PM</div>
            <div className="border rounded-md py-2 text-center">2:00 PM</div>
            <div className="border rounded-md py-2 text-center">4:30 PM</div>
          </div>
        </div>

      </div>
    </div>
  );
}