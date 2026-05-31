"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, FileDown } from "lucide-react";
import ThreeBackground from "./ThreeBackground";
import { resumeData } from "../src/data/resume";

export default function Hero() {
  const handleScrollToChat = () => {
    const chatSection = document.getElementById("chat-section");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
      
      // Auto focus on the chat input after scrolling
      setTimeout(() => {
        const chatInput = document.getElementById("chat-input");
        if (chatInput) chatInput.focus();
      }, 800);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ambient-glow">
      {/* 3D Interactive Particle Background */}
      <ThreeBackground />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern -z-20" />

      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-5 sm:gap-6"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-semibold tracking-wide backdrop-blur-md hover:border-primary/40 hover:bg-primary/10 transition-colors cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>Interactive Resume Assistant for Recruiters</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-foreground max-w-4xl"
          >
            Hi, this is Siva D —{" "}
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-secondary bg-clip-text text-transparent drop-shadow-sm font-black">
              Senior Software Engineer
            </span>{" "}
            specializing in Java, Spring Boot, Microservices, React, and Cloud-Native Engineering.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-xs sm:text-sm md:text-base text-muted-foreground/90 leading-relaxed px-4"
          >
            I designed this assistant so recruiters and hiring teams can quickly understand my background, projects, skills, availability, and role fit before scheduling a call.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full px-4 mt-3"
          >
            <button
              onClick={handleScrollToChat}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-99 group cursor-pointer"
              id="hero-start-asking-btn"
            >
              Start Assessing
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              href="/siva-resume.html"
              download="Siva_D_Resume.html"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full border border-border/80 bg-card hover:bg-muted text-foreground transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-99 cursor-pointer shadow-sm"
              id="hero-download-resume-btn"
            >
              <FileDown className="w-4 h-4 text-primary" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative side blurs */}
      <div className="absolute left-[-15%] top-[20%] w-[380px] h-[380px] rounded-full bg-primary/8 blur-[120px] -z-10 pulse-glow hidden sm:block pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[10%] w-[380px] h-[380px] rounded-full bg-secondary/8 blur-[120px] -z-10 pulse-glow hidden sm:block pointer-events-none" />
    </section>
  );
}
