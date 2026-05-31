"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Synchronize initial theme state on client mount
  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Render a placeholder button during server-side rendering to avoid layout shifts
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border bg-transparent flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted cursor-pointer transition-colors shadow-sm focus:outline-none"
      aria-label="Toggle Theme"
      id="theme-toggle-btn"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ scale: 0.6, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.6, rotate: 45, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-amber-500"
          >
            <Sun className="w-5 h-5 stroke-[2]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0.6, rotate: 45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.6, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-indigo-400"
          >
            <Moon className="w-5 h-5 stroke-[2]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
