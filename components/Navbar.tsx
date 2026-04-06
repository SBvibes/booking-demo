"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <nav className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-[#161a20]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-gray-900 dark:text-white">
          BrightNest Cleaning
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="#services"
            className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Services
          </a>

          <a
            href="#contact"
            className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-xl border border-gray-300 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-sm transition hover:bg-gray-50 dark:border-white/15 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"
          >
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}