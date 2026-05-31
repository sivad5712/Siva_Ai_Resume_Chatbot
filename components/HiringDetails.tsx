"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CircleDollarSign, CalendarDays, MapPin, BadgePercent, GraduationCap, ClipboardCheck } from "lucide-react";
import { resumeKnowledge } from "../src/data/resumeKnowledge";

export default function HiringDetails() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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

  const authDetails = [
    { label: "Current Visa Status", value: resumeKnowledge.workAuthorization.currentStatus },
    { label: "Authorization Class", value: resumeKnowledge.workAuthorization.category },
    { label: "Work Eligibility", value: "Immediate / Authorized for U.S. Employment" },
    { label: "Initial Sponsorship", value: "No initial sponsorship required to start" },
    { label: "STEM OPT Extension", value: "Eligible/planning to apply" },
    { label: "Potential Validity", value: "Can extend through 2028 after approval" },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/30">
      
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground shadow-sm select-none">
          Hiring Fast-Tracks
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Work Authorization & Hiring Details
        </h2>
        <p className="text-xs sm:text-base text-muted-foreground/90 max-w-xl">
          Verified status, rates, and geographical flexibility details for immediate coordination.
        </p>
      </div>

      {/* Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        
        {/* Card 1: Work Authorization */}
        <motion.div
          variants={cardVariants}
          className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 bg-card/25 shadow-sm relative overflow-hidden group"
        >
          {/* Decorative background visual */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full -z-10 group-hover:scale-105 transition-transform duration-300 pointer-events-none" />
          
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-foreground tracking-tight">
                  U.S. Work Authorization
                </h3>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mt-0.5">
                  F1 OPT-EAD Status
                </span>
              </div>
            </div>

            {/* Public statement */}
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-4 py-0.5 font-medium italic">
              &ldquo;{resumeKnowledge.workAuthorization.publicStatement}&rdquo;
            </p>

            {/* Checklist details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mt-2">
              {authDetails.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-b border-border/10 pb-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-xs font-semibold text-foreground/90">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border/30">
            <span className="text-[9px] font-extrabold text-emerald-500 bg-emerald-500/5 px-2.5 py-0.5 rounded border border-emerald-500/10">
              Immediate Availability
            </span>
            <span className="text-[9px] font-extrabold text-primary bg-primary/5 px-2.5 py-0.5 rounded border border-primary/10">
              STEM OPT Extensible
            </span>
          </div>
        </motion.div>

        {/* Card 2: Compensation & Coordination Details */}
        <motion.div
          variants={cardVariants}
          className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 bg-card/25 shadow-sm relative overflow-hidden group"
        >
          {/* Decorative background visual */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/5 to-transparent rounded-bl-full -z-10 group-hover:scale-105 transition-transform duration-300 pointer-events-none" />
          
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/5 text-secondary flex items-center justify-center">
                <CircleDollarSign className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-foreground tracking-tight">
                  Rate Flexibility & Hiring Term
                </h3>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mt-0.5">
                  Preferred Compensation Metrics
                </span>
              </div>
            </div>

            {/* Flexibility description */}
            <div className="bg-secondary/[0.02] dark:bg-secondary/[0.01] border border-secondary/15 rounded-xl p-4.5">
              <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Rate Guidelines
              </h4>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                Preferred base range is <strong className="text-foreground font-black text-sm">{resumeKnowledge.rateExpectations.preferredBaseRate}</strong>. Siva is flexible and negotiable depending on the contract structure, client profile, duration, benefits, and overall project scope.
              </p>
            </div>

            {/* Other details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-3 p-3 bg-muted/20 border border-border/30 rounded-xl">
                <CalendarDays className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block leading-none">
                    Availability
                  </span>
                  <p className="text-xs font-semibold text-foreground/95 mt-1 leading-normal">
                    Actively available. Can interview Mon-Fri, 9 AM - 5 PM EST.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/20 border border-border/30 rounded-xl">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block leading-none">
                    Relocation & Scope
                  </span>
                  <p className="text-xs font-semibold text-foreground/95 mt-1 leading-normal">
                    Open to Remote, Hybrid, Onsite. Willing to relocate anywhere in the U.S.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/20 border border-border/30 rounded-xl">
                <ClipboardCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block leading-none">
                    Supported Roles
                  </span>
                  <p className="text-xs font-semibold text-foreground/95 mt-1 leading-normal">
                    C2C, W2, 1099, C2H, contract, and full-time positions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/20 border border-border/30 rounded-xl">
                <BadgePercent className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block leading-none">
                    Negotiability
                  </span>
                  <p className="text-xs font-semibold text-foreground/95 mt-1 leading-normal">
                    Rates are adaptable for the right role. Let&apos;s negotiate!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/30 text-xs text-muted-foreground/95 font-semibold text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span>Have a submission or negotiation question?</span>
            <a 
              href={`tel:${resumeKnowledge.personalInfo.phone.replace(/[\s()-]/g, "")}`}
              className="inline-flex self-center sm:self-auto px-4 py-1.5 rounded-full bg-secondary hover:bg-secondary/90 text-white font-extrabold text-[11px] shadow-sm tracking-wider cursor-pointer active:scale-95 transition-all uppercase"
            >
              Call +1 (614) 664-9498
            </a>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}
