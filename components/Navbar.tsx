"use client";

import { FileDown, MessageSquare, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { resumeData } from "../src/data/resume";

export default function Navbar() {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-border/40 bg-background/60 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo / Branding */}
          <div 
            className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-primary via-indigo-500 to-secondary flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-primary/10 group-hover:scale-105 transition-all duration-300">
              S
              <div className="absolute inset-0 rounded-lg border border-white/10" />
            </div>
            <span className="font-bold text-xs sm:text-base tracking-tight text-foreground transition-colors duration-200 flex items-center">
              {resumeData.name} 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold px-1.5 py-0.5 rounded-md bg-primary/5 border border-primary/10 text-[8px] sm:text-[10px] ml-1 sm:ml-1.5 align-middle select-none whitespace-nowrap">
                <span className="inline sm:hidden">AI ASSISTANT</span>
                <span className="hidden sm:inline">AI RESUME ASSISTANT</span>
              </span>
            </span>
          </div>

          {/* Action Navigation */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact Shortcut */}
            <button
              onClick={() => handleScrollToSection("contact-section")}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-border/80 bg-card hover:bg-muted text-foreground/80 hover:text-foreground transition-all duration-200 cursor-pointer shadow-sm active:scale-98"
              id="nav-contact-btn"
            >
              <MessageSquare className="w-3.5 h-3.5 text-primary" />
              Contact
            </button>

            {/* Download Resume Button */}
            <a
              href="/siva-resume.html"
              download="Siva_D_Resume.html"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-primary hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/10 text-primary-foreground transition-all duration-200 cursor-pointer shadow-md active:scale-98"
              id="nav-download-btn"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}
