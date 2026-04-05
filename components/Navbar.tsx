export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Business Name */}
        <div className="text-lg font-semibold">
          BrightNest Cleaning
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-sm">
          <a href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}