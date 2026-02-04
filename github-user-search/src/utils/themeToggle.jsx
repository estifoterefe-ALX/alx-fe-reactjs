import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-15 h-8 rounded-full p-0.5
    focus:outline-none focus:ring-3 focus:ring-blue-400/30 dark:focus:ring-purple-500/30
    transition-all duration-500 ease-out
    bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100
    dark:from-slate-900 dark:via-gray-900 dark:to-slate-900
    shadow-lg hover:shadow-xl
    border-2 dark:border-yellow-300/80 border-purple-400/80
    hover:scale-[1.02] active:scale-[0.98]
    overflow-hidden
    group"
    >
      {/* Dynamic background glow */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-amber-200/40 via-orange-300/30 to-amber-200/40
      transition-all duration-700 ease-in-out
      ${darkMode ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-indigo-900/40
      transition-all duration-700 ease-in-out
      ${darkMode ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        />
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.3),transparent_50%)]
      transition-opacity duration-700
      ${darkMode ? "opacity-0" : "opacity-100"}`}
        />
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.3),transparent_50%)]
      transition-opacity duration-700
      ${darkMode ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Enhanced toggle thumb with icon inside - ADJUSTED FOR SMALLER SIZE */}
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full
      bg-gradient-to-br from-white to-gray-50
      dark:from-gray-200 dark:to-gray-300
      shadow-lg
      flex items-center justify-center
      transform transition-all duration-700 ease-in-out
      ${darkMode ? "translate-x-7" : "translate-x-0.5"}
      before:absolute before:inset-0 before:rounded-full
      before:bg-gradient-to-br before:from-amber-200 before:to-orange-300
      before:opacity-20 before:transition-all before:duration-700
      before:scale-110
      dark:before:opacity-0 dark:before:scale-100
      after:absolute after:inset-0 after:rounded-full
      after:bg-gradient-to-br after:from-blue-500 after:to-purple-600
      after:opacity-0 after:transition-all after:duration-700
      after:scale-110
      dark:after:opacity-20 dark:after:scale-110`}
      >
        {/* Inner core with icon container */}
        <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30
        transition-opacity duration-700
        ${darkMode ? "opacity-0" : "opacity-100"}`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30
        transition-opacity duration-700
        ${darkMode ? "opacity-100" : "opacity-0"}`}
          />

          {/* Single icon container with both icons positioned absolutely */}
          <div className="relative w-4 h-4 flex items-center justify-center">
            <Sun
              className={`absolute w-4 h-4 text-amber-600 transition-all duration-700 ease-out
          ${darkMode ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
            />
            <Moon
              className={`absolute w-4 h-4 text-indigo-700 dark:text-indigo-600 transition-all duration-700 ease-out
          ${darkMode ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"}`}
            />
          </div>
        </div>

        {/* Enhanced glow rings - ADJUSTED */}
        <div
          className={`absolute -inset-1.5 rounded-full blur-md
      bg-gradient-to-r from-amber-300/40 to-orange-400/40
      transition-opacity duration-1000 ease-out
      ${darkMode ? "opacity-0" : "opacity-100"}`}
        />
        <div
          className={`absolute -inset-1.5 rounded-full blur-md
      bg-gradient-to-r from-blue-500/40 to-purple-600/40
      transition-opacity duration-1000 ease-out
      ${darkMode ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Background icons - ADJUSTED FOR SMALLER SIZE */}
      <div className="relative flex items-center justify-between px-2.5 h-full pointer-events-none">
        <div className="w-4 h-4 flex items-center justify-center opacity-30">
          <Sun className="w-3 h-3 text-amber-600" />
        </div>
        <div className="w-4 h-4 flex items-center justify-center opacity-30">
          <Moon className="w-3 h-3 text-indigo-600" />
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 rounded-full border border-transparent">
        <div
          className={`absolute inset-0 rounded-full border
      border-amber-300/30
      transition-all duration-700
      ${darkMode ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        />
        <div
          className={`absolute inset-0 rounded-full border
      border-blue-500/30
      transition-all duration-700
      ${darkMode ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        />
      </div>

      {/* Subtle sparkle effect - ADJUSTED */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        <div
          className={`absolute top-1/3 left-1/4 w-0.5 h-0.5 rounded-full
      bg-amber-300
      transition-all duration-1000
      ${darkMode ? "opacity-0 scale-0" : "opacity-70 scale-100"}`}
        />
        <div
          className={`absolute bottom-1/3 right-1/4 w-0.5 h-0.5 rounded-full
      bg-blue-400
      transition-all duration-1000
      ${darkMode ? "opacity-70 scale-100" : "opacity-0 scale-0"}`}
        />
      </div>
    </button>
  );
}
