"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Server, Cloud, FolderGit2, AlertTriangle, Users2, HelpCircle } from "lucide-react";

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
}

type Category = "Experience" | "Backend" | "Cloud" | "Projects" | "Skill-Gap" | "Behavioral";

interface QuestionGroup {
  id: Category;
  label: string;
  icon: any;
  questions: string[];
}

export default function SuggestedQuestions({ onSelectQuestion }: SuggestedQuestionsProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("Experience");

  const questionGroups: QuestionGroup[] = [
    {
      id: "Experience",
      label: "Experience",
      icon: User,
      questions: [
        "Tell me about yourself.",
        "Summarize your professional experience.",
        "Why should we hire you?",
        "What roles are you targeting?",
      ],
    },
    {
      id: "Backend",
      label: "Java / Backend",
      icon: Server,
      questions: [
        "Explain your Java experience.",
        "How did you use Spring Boot?",
        "How did you design REST APIs?",
        "How did you work with microservices?",
      ],
    },
    {
      id: "Cloud",
      label: "Cloud / DevOps",
      icon: Cloud,
      questions: [
        "What cloud platforms have you used?",
        "How did you use AWS?",
        "Do you have Azure experience?",
        "Have you worked with Kubernetes?",
      ],
    },
    {
      id: "Projects",
      label: "Projects",
      icon: FolderGit2,
      questions: [
        "Explain your healthcare project.",
        "Explain your banking or fraud detection project.",
        "What is your strongest project?",
        "What was your biggest technical challenge?",
      ],
    },
    {
      id: "Skill-Gap",
      label: "Skill-Gap Check",
      icon: AlertTriangle,
      questions: [
        "Do you have .NET experience?",
        "Do you have Python experience?",
        "Do you have Node.js experience?",
        "Do you have React experience?",
      ],
    },
    {
      id: "Behavioral",
      label: "Behavioral",
      icon: Users2,
      questions: [
        "Tell me about a challenge you solved.",
        "How do you handle production issues?",
        "How do you work in Agile teams?",
        "How do you mentor junior developers?",
      ],
    },
  ];

  const currentGroup = questionGroups.find((g) => g.id === activeCategory);

  return (
    <div className="mt-8 w-full flex flex-col gap-4">
      
      {/* Category Selection Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto pb-2.5 scrollbar-none border-b border-border/20">
        {questionGroups.map((group) => {
          const Icon = group.icon;
          const isActive = group.id === activeCategory;
          return (
            <button
              key={group.id}
              onClick={() => setActiveCategory(group.id)}
              className={`relative flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer focus:outline-none select-none active:scale-97`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 rounded-full bg-primary -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                />
              )}
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
              <span className={isActive ? "text-primary-foreground font-bold" : "text-muted-foreground hover:text-foreground font-medium"}>
                {group.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Suggested Questions Grid */}
      <div className="relative min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
          >
            {currentGroup?.questions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => onSelectQuestion(question)}
                className="glass-panel glass-panel-hover flex items-center justify-between text-left px-4 py-3 rounded-xl border border-border/70 text-foreground hover:text-primary transition-all duration-200 cursor-pointer shadow-sm group w-full active:scale-99"
                id={`suggested-question-${activeCategory}-${idx}`}
              >
                <span className="text-xs font-semibold pr-3 leading-snug">
                  {question}
                </span>
                <HelpCircle className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
