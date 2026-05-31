"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Code2, 
  Cpu, 
  CloudLightning, 
  Layers, 
  HeartHandshake, 
  Webhook, 
  Users 
} from "lucide-react";

interface HighlightItem {
  title: string;
  description: string;
  icon: any;
  metric: string;
}

export default function ResumeHighlights() {
  const highlights: HighlightItem[] = [
    {
      title: "Engineering Depth",
      description: "Around 8 years of software engineering experience in banking, healthcare, IoT, and cloud modernization.",
      icon: Briefcase,
      metric: "8 Years",
    },
    {
      title: "Scale Ingestion",
      description: "Delivered scalable production platforms for 5 major enterprise client and project environments.",
      icon: Layers,
      metric: "5 Projects",
    },
    {
      title: "Credit Union of Atlanta",
      description: "Optimized complex PostgreSQL schemas and improved core query performance by 35%.",
      icon: Code2,
      metric: "35% Boost",
    },
    {
      title: "Downtime Mitigation",
      description: "Used Prometheus and Grafana at Credit Union of Atlanta to reduce overall system downtime by 40%.",
      icon: Cpu,
      metric: "40% Cut",
    },
    {
      title: "Centene Accessibility",
      description: "Built React and care-insights portals that improved data accessibility by 30% for high-risk care coordination.",
      icon: HeartHandshake,
      metric: "30% Gain",
    },
    {
      title: "API Latency Reduction",
      description: "Optimized multi-tenant Spring Boot APIs at Centene, reducing service response latency by 25%.",
      icon: Webhook,
      metric: "25% Faster",
    },
    {
      title: "Fintech Cost Reduction",
      description: "Used Azure serverless patterns at HDFC Bank to reduce overall operational hosting cost by 40%.",
      icon: CloudLightning,
      metric: "40% Save",
    },
    {
      title: "Enterprise TDD Stack",
      description: "Maintained robust JUnit and Mockito unit test suites with an 85% code coverage standard.",
      icon: Users,
      metric: "85% Coverage",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
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
          System Strengths
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Resume Highlights & Metrics
        </h2>
        <p className="text-xs sm:text-base text-muted-foreground/90 max-w-xl">
          A high-level dashboard displaying Siva&apos;s fundamental capabilities, engineering standards, and career highlights.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl flex flex-col justify-between gap-5 shadow-sm relative group overflow-hidden bg-card/25"
            >
              {/* Background gradient decorative orb */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full -z-10 group-hover:scale-115 transition-transform duration-300 pointer-events-none" />
              
              <div className="flex flex-col gap-3.5">
                {/* Icon Container */}
                <div className="w-9 h-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                  <Icon className="w-4.5 h-4.5 stroke-[1.8]" />
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-sm sm:text-base text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Metric Badge */}
              <div className="inline-flex self-start px-2 py-0.5 rounded bg-muted text-[10px] sm:text-xs font-bold tracking-wider text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors uppercase">
                {item.metric}
              </div>

            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
