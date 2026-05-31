"use client";

import { motion as framerMotion } from "framer-motion";
import { resumeData } from "../src/data/resume";
import { Code, Cloud, Database, Layout, Settings, FileSpreadsheet, ShieldAlert } from "lucide-react";

export default function SkillsSection() {
  // Helper to map category names to nice icons
  const getCategoryIcon = (category: string) => {
    const c = category.toLowerCase();
    if (c.includes("languages")) return Code;
    if (c.includes("cloud") || c.includes("devops")) return Cloud;
    if (c.includes("database") || c.includes("messaging")) return Database;
    if (c.includes("frontend")) return Layout;
    if (c.includes("frameworks") || c.includes("backend")) return Settings;
    if (c.includes("domain")) return ShieldAlert;
    return FileSpreadsheet;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
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
          Technical Inventory
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Core Technologies & Stack
        </h2>
        <p className="text-xs sm:text-base text-muted-foreground/90 max-w-xl">
          A granular map of Siva&apos;s primary software engineering languages, frameworks, cloud tooling, and domain specialties.
        </p>
      </div>

      {/* Skills Grid */}
      <framerMotion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {resumeData.skills.map((skillGroup, groupIdx) => {
          const Icon = getCategoryIcon(skillGroup.category);
          return (
            <framerMotion.div
              key={groupIdx}
              variants={itemVariants}
              className="glass-panel p-5 sm:p-6 rounded-2xl flex flex-col gap-4 shadow-sm bg-card/25 relative overflow-hidden group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-border/30">
                <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-4 h-4 stroke-[1.8]" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-foreground tracking-tight">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skill Chips List */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIdx) => (
                  <framerMotion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.03, y: -0.5 }}
                    transition={{ type: "spring", stiffness: 450, damping: 15 }}
                    className="px-2.5 py-1.5 rounded-lg border border-border/60 bg-card/50 hover:bg-card hover:border-primary/25 hover:shadow-sm text-xs font-semibold text-foreground/80 hover:text-primary cursor-default transition-all duration-150"
                  >
                    {skill}
                  </framerMotion.div>
                ))}
              </div>
            </framerMotion.div>
          );
        })}
      </framerMotion.div>

    </section>
  );
}
