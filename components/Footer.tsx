"use client";

import { motion } from "framer-motion";
import { Mail, FileDown, ArrowUp } from "lucide-react";
import { resumeData } from "../src/data/resume";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactLinks = [
    {
      label: "Direct Email",
      value: resumeData.contact.email,
      href: `mailto:${resumeData.contact.email}`,
      icon: (props: any) => <Mail {...props} />,
      color: "hover:text-red-500 hover:border-red-500/20 hover:bg-red-500/[0.01]",
    },
    {
      label: "LinkedIn Professional",
      value: "linkedin.com/in/sivad571",
      href: resumeData.contact.linkedin,
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: "hover:text-blue-500 hover:border-blue-500/20 hover:bg-blue-500/[0.01]",
    },
    {
      label: "GitHub Portfolio",
      value: "github.com/sivad5712",
      href: resumeData.contact.github,
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      color: "hover:text-neutral-900 dark:hover:text-white hover:border-neutral-900/20 dark:hover:border-white/20 hover:bg-neutral-900/[0.01] dark:hover:bg-white/[0.01]",
    },
    {
      label: "Download Resume",
      value: "Printable HTML Document",
      href: "/siva-resume.html",
      icon: (props: any) => <FileDown {...props} />,
      color: "hover:text-primary hover:border-primary/20 hover:bg-primary/[0.01]",
      download: "Siva_D_Resume.html",
    },
  ];

  return (
    <footer id="contact-section" className="relative border-t border-border/30 bg-muted/5 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[500px] h-[150px] bg-gradient-to-t from-primary/5 to-transparent rounded-t-full filter blur-[50px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Call to action text */}
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
            Get in touch directly
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
            Have an open position or want to discuss a role fit? Connect with Siva through any of these platforms.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
          {contactLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                download={link.download}
                target={link.download ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`glass-panel p-4.5 rounded-2xl flex flex-col items-center text-center gap-2.5 transition-all duration-300 shadow-sm cursor-pointer ${link.color}`}
              >
                <div className="w-9 h-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground/80 transition-colors">
                  <Icon className="w-4.5 h-4.5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block">
                    {link.label}
                  </span>
                  <span className="text-xs font-semibold text-foreground/90 mt-1 block truncate max-w-[200px]">
                    {link.value}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border/30 gap-4 text-center sm:text-left text-xs text-muted-foreground font-semibold">
          
          <div>
            <p className="font-extrabold text-foreground/85">
              {resumeData.name} &copy; {new Date().getFullYear()}
            </p>
            <p className="mt-1 text-[10px] opacity-75 font-normal">
              Premium AI Resume Chatbot &bull; Powered by Gemini 2.5 Flash API
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/80 bg-card hover:bg-muted text-foreground transition-all duration-200 cursor-pointer shadow-sm text-xs font-bold active:scale-98"
            title="Scroll to Top"
            id="scroll-to-top-btn"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>

        </div>

      </div>

    </footer>
  );
}
