"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailCheck, MailWarning, Send, Sparkles, User, Mail, HelpCircle, FileText } from "lucide-react";
import { resumeKnowledge } from "../src/data/resumeKnowledge";

export default function ContactRecruiterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [showMailto, setShowMailto] = useState(false);

  const subjectOptions = [
    "Job Opportunity",
    "Contract Role",
    "C2C / Vendor Discussion",
    "W2 / Full-Time Role",
    "Interview Request",
    "Resume / Profile Submission",
    "Work Authorization Question",
    "Rate / Compensation Discussion",
    "Technical Screening Question",
    "General Inquiry",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Client-side validations
    if (!name.trim()) {
      setStatus({ type: "error", message: "Please enter your name." });
      return;
    }
    if (!email.trim()) {
      setStatus({ type: "error", message: "Please enter your email." });
      return;
    }
    if (!subject) {
      setStatus({ type: "error", message: "Please select an inquiry type." });
      return;
    }
    if (!message.trim()) {
      setStatus({ type: "error", message: "Please write your message." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Thank you. Your message has been sent to Siva.",
      });
      setShowMailto(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      console.error("Form submit error:", err);
      setStatus({
        type: "error",
        message: err.message || "Sorry, the message could not be sent. Please try again or email Siva directly at Sivad5712@gmail.com.",
      });
      setShowMailto(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-form-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-border/30">
      
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2 text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground shadow-sm select-none">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          Direct Dispatch
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Have a hiring question?
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
          Recruiters, hiring managers, and vendors can send a message directly to Siva.
        </p>
      </div>

      {/* Main Glassmorphic Form Card */}
      <div className="relative glass-panel rounded-[19px] p-6 sm:p-8 flex flex-col w-full overflow-hidden shadow-lg">
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Recruiter Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-name" className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-primary" />
                  Recruiter Name
                </label>
                <input
                  id="form-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  disabled={isLoading}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border/70 bg-muted/20 focus:bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-xs sm:text-sm leading-normal transition-all placeholder:text-muted-foreground/50 shadow-inner"
                />
              </div>

              {/* Recruiter Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-email" className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  Recruiter Email
                </label>
                <input
                  id="form-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isLoading}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border/70 bg-muted/20 focus:bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-xs sm:text-sm leading-normal transition-all placeholder:text-muted-foreground/50 shadow-inner"
                />
              </div>

            </div>

            {/* Subject / Inquiry Type dropdown */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-subject" className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-primary" />
                Subject / Inquiry Type
              </label>
              <div className="relative">
                <select
                  id="form-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border/70 bg-muted/20 focus:bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-xs sm:text-sm leading-normal transition-all appearance-none cursor-pointer placeholder:text-muted-foreground/50 shadow-inner"
                >
                  <option value="" disabled>Select Inquiry Type</option>
                  {subjectOptions.map((opt, idx) => (
                    <option key={idx} value={opt} className="text-foreground bg-card">
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-muted-foreground">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-message" className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-primary" />
                Message
              </label>
              <textarea
                id="form-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                disabled={isLoading}
                rows={4}
                className="w-full px-3.5 py-2.5 rounded-xl border border-border/70 bg-muted/20 focus:bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none text-xs sm:text-sm leading-relaxed transition-all placeholder:text-muted-foreground/50 shadow-inner min-h-[100px]"
              />
            </div>

            {/* Form Response Banners */}
            <AnimatePresence mode="wait">
              {status.type && (
                <div className="flex flex-col gap-3 w-full">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`flex items-start gap-2.5 p-3 rounded-xl text-xs font-semibold border ${
                      status.type === "success"
                        ? "bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/25 text-emerald-500"
                        : "bg-destructive/5 dark:bg-destructive/10 border-destructive/20 text-destructive"
                    }`}
                  >
                    {status.type === "success" ? (
                      <MailCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    ) : (
                      <MailWarning className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="leading-normal">{status.message}</span>
                  </motion.div>

                  {status.type === "error" && showMailto && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      href={`mailto:sivad5712@gmail.com?subject=[Siva Resume Assistant] ${encodeURIComponent(
                        subject || "General Inquiry"
                      )}&body=Name: ${encodeURIComponent(name)}\nEmail: ${encodeURIComponent(
                        email
                      )}\n\nMessage:\n${encodeURIComponent(message)}`}
                      className="w-full text-center py-2.5 rounded-xl border border-secondary text-secondary hover:bg-secondary/15 transition-all text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer select-none"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send via your Email Client (Pre-filled Mailto)
                    </motion.a>
                  )}
                </div>
              )}
            </AnimatePresence>

            {/* Send Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground font-bold shadow-md shadow-primary/5 hover:shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all cursor-pointer text-xs sm:text-sm active:scale-99"
              id="contact-form-submit-btn"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message to Siva
                </>
              )}
            </button>

          </form>

        </div>

    </section>
  );
}
