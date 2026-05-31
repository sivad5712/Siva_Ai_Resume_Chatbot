"use client";

import { motion } from "framer-motion";
import { resumeData } from "../src/data/resume";
import { FolderGit2, AlertCircle, Award, Terminal, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/30">
      
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground shadow-sm select-none">
          System Portfolios
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Core Engineering Projects
        </h2>
        <p className="text-xs sm:text-base text-muted-foreground/90 max-w-xl">
          A deep dive into high-compliance, high-scale systems Siva has designed, developed, and deployed to production.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between gap-5 shadow-sm bg-card/25 relative overflow-hidden group"
          >
            {/* Corner project card index */}
            <div className="absolute top-4 right-4 text-2xl font-black text-foreground/[0.04] dark:text-foreground/[0.015] tracking-wider select-none font-mono">
              0{idx + 1}
            </div>

            <div className="flex flex-col gap-4">
              
              {/* Project Title & Role */}
              <div className="flex items-start gap-3 pr-8">
                <div className="w-9 h-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <FolderGit2 className="w-4.5 h-4.5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight">
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1 block">
                    {project.role}
                  </span>
                  
                  {/* Company & Domain Badges */}
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-[9px] font-extrabold text-primary bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10 select-none">
                      {project.company}
                    </span>
                    <span className="text-[8px] font-extrabold text-muted-foreground bg-muted border border-border/30 px-2 py-0.5 rounded-full uppercase tracking-wider select-none">
                      {project.domain}
                    </span>
                  </div>
                </div>
              </div>

              {/* Context Summary */}
              <p className="text-xs text-muted-foreground/80 font-medium italic border-l-2 border-border/40 pl-3 leading-relaxed">
                {project.context}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {project.description}
              </p>

              {/* Challenge vs Outcome Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1 bg-muted/15 dark:bg-muted/5 border border-border/20 rounded-xl p-3.5 sm:p-4">
                
                {/* Challenge */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-red-500/80 dark:text-red-400/80 uppercase tracking-wider flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Technical Challenge
                  </span>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Outcome */}
                <div className="flex flex-col gap-1 border-t border-border/30 sm:border-t-0 sm:border-l sm:pl-4 pt-3 sm:pt-0">
                  <span className="text-[10px] font-bold text-emerald-500/80 dark:text-emerald-400/80 uppercase tracking-wider flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Engineering Outcome
                  </span>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

              </div>

              {/* Recruiter Impact Summary */}
              <div className="flex flex-col gap-1 mt-1 bg-primary/[0.02] dark:bg-primary/[0.01] border border-primary/10 rounded-xl p-3">
                <span className="text-[9px] font-bold text-primary uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                  Recruiter-Friendly Impact Summary
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.outcome}
                </p>
              </div>

            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-col gap-2 pt-3 border-t border-border/30">
              <span className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-wider flex items-center gap-1">
                <Terminal className="w-2.5 h-2.5 text-primary" />
                Stack Integration
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2.5 py-0.5 rounded bg-muted/50 border border-border/20 text-[10px] font-bold text-foreground/80 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
