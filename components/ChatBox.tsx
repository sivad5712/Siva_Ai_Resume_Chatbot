"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Mic, MicOff, Trash2, Copy, Check, Sparkles, MessageSquare, Bot, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../src/data/resume";
import SuggestedQuestions from "./SuggestedQuestions";
import DiagramRenderer from "./DiagramRenderer";

interface Message {
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `Hi! I'm Siva D's AI Resume Chatbot. Feel free to ask me about my Java, Spring Boot, microservices, cloud, healthcare, banking, projects, leadership, or role fit. How can I help you today?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Cooldown countdown timer for rate limit
  useEffect(() => {
    if (cooldownSeconds <= 0) return;
    const timer = setInterval(() => {
      setCooldownSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldownSeconds]);

  // Setup Web Speech API for voice recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        setSpeechSupported(false);
        return;
      }

      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "en-US";

      rec.onstart = () => {
        setIsListening(true);
        setErrorMsg(null);
      };

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInput((prev) => {
            const trimmed = prev.trim();
            return trimmed ? `${trimmed} ${transcript}` : transcript;
          });
        }
      };

      rec.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        if (event.error === "not-allowed") {
          setErrorMsg("Microphone permission denied. Please allow mic access in your browser settings.");
        } else {
          setErrorMsg(`Voice input error: ${event.error}. Please try typing.`);
        }
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    }
  }, []);

  const toggleListening = () => {
    if (!speechSupported) {
      setErrorMsg("Voice input is not supported in this browser. Please try Google Chrome or Safari.");
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setErrorMsg(null);
      try {
        recognitionRef.current?.start();
      } catch (err) {
        console.error("Failed to start speech recognition:", err);
      }
    }
  };

  const handleSend = async (textToSend: string) => {
    const trimmedText = textToSend.trim();
    if (!trimmedText) return;
    if (isLoading || cooldownSeconds > 0) return;
    if (trimmedText.length > 1000) {
      setErrorMsg("Your question is too long (limit is 1000 characters).");
      return;
    }

    // Clear active speech recognition
    if (isListening) {
      recognitionRef.current?.stop();
    }

    setErrorMsg(null);
    setInput("");
    
    // Add user message
    const userMsg: Message = {
      role: "user",
      text: trimmedText,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedText,
          history: messages, // Send entire conversation history
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429 || data.errorType === "rate-limit") {
          setCooldownSeconds(30);
        }
        throw new Error(data.answer || "Failed to fetch response.");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.answer,
          timestamp: new Date(),
        },
      ]);
    } catch (err: any) {
      console.error("Chat error:", err);
      setErrorMsg(err.message || "Something went wrong. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const clearChat = () => {
    if (window.confirm("Are you sure you want to clear the conversation?")) {
      setMessages([
        {
          role: "assistant",
          text: `Hi! I'm Siva D's AI Resume Chatbot. Feel free to ask me about my Java, Spring Boot, microservices, cloud, healthcare, banking, projects, leadership, or role fit. How can I help you today?`,
          timestamp: new Date(),
        },
      ]);
      setInput("");
      setErrorMsg(null);
      if (isListening) recognitionRef.current?.stop();
    }
  };

  const formatResponseText = (text: string) => {
    return text.split("\n").map((line, i) => {
      let formattedLine = line;

      // 1. Double Bold **text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      formattedLine = formattedLine.replace(
        boldRegex,
        '<strong class="font-bold text-foreground">$1</strong>'
      );

      // 2. Inline code `text`
      const codeRegex = /`(.*?)`/g;
      formattedLine = formattedLine.replace(
        codeRegex,
        '<code class="bg-muted dark:bg-muted/60 px-1.5 py-0.5 rounded text-xs font-mono border border-border text-primary font-semibold">$1</code>'
      );

      // 3. Render Bullet points
      if (line.startsWith("* ") || line.startsWith("- ")) {
        return (
          <li
            key={i}
            className="ml-4 list-disc pl-1.5 mb-1.5 text-xs sm:text-sm leading-relaxed text-foreground/90 font-medium"
            dangerouslySetInnerHTML={{ __html: formattedLine.substring(2) }}
          />
        );
      }

      // 4. Render headers
      if (line.startsWith("### ")) {
        return (
          <h4
            key={i}
            className="text-xs sm:text-sm font-extrabold mt-3.5 mb-1.5 text-foreground tracking-tight flex items-center gap-1.5"
            dangerouslySetInnerHTML={{ __html: formattedLine.substring(4) }}
          />
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h3
            key={i}
            className="text-sm sm:text-base font-extrabold mt-4 mb-1.5 text-foreground tracking-tight border-b border-border/20 pb-0.5"
            dangerouslySetInnerHTML={{ __html: formattedLine.substring(3) }}
          />
        );
      }

      if (line.trim() === "") {
        return <div key={i} className="h-1.5" />;
      }

      return (
        <p
          key={i}
          className="text-xs sm:text-sm leading-relaxed mb-2 text-foreground/90 font-medium break-words"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });
  };

  const parseAndRenderResponse = (text: string) => {
    // Detect blocks of: ```mermaid ... ```
    const mermaidRegex = /```mermaid\s+([\s\S]*?)```/g;
    
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let elementKey = 0;

    while ((match = mermaidRegex.exec(text)) !== null) {
      const matchIndex = match.index;
      const mermaidCode = match[0];

      // Add preceding text block
      const precedingText = text.substring(lastIndex, matchIndex);
      if (precedingText.trim()) {
        elements.push(
          <div key={`text-${elementKey++}`}>
            {formatResponseText(precedingText)}
          </div>
        );
      }

      // Add Mermaid Renderer block
      elements.push(
        <DiagramRenderer key={`mermaid-${elementKey++}`} code={mermaidCode} />
      );

      lastIndex = mermaidRegex.lastIndex;
    }

    // Add remaining text block
    const remainingText = text.substring(lastIndex);
    if (remainingText.trim() || elements.length === 0) {
      elements.push(
        <div key={`text-${elementKey++}`}>
          {formatResponseText(remainingText)}
        </div>
      );
    }

    return elements;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  // Determine if we are in the initial landing greeting state
  const isInitialState = messages.length === 1 && messages[0].role === "assistant";

  return (
    <div id="chat-section" className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Visual Header divider */}
      <div className="flex flex-col items-center justify-center gap-2 text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          Assessment Node
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Recruiter Chat Hub
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
          Ask technical fit, architectural experience, domain depth, or behavioral questions.
        </p>
      </div>

      {/* Main Chat Box Container - Premium Glassmorphic Card */}
      <div className="relative glass-panel rounded-[19px] overflow-hidden flex flex-col h-[560px] sm:h-[620px] w-full shadow-lg">
          
          {/* Chat Box Navbar Header */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-border/30 bg-muted/20 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-7.5 h-7.5 rounded-full bg-gradient-to-tr from-primary to-secondary text-white text-xs font-bold shadow-sm">
                S
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-zinc-950 animate-pulse" />
              </div>
              <div>
                <h3 className="font-extrabold text-xs sm:text-sm leading-none text-foreground">{resumeData.name}&apos;s AI Resume Chatbot</h3>
                <span className="text-[10px] text-muted-foreground font-semibold">Active & Grounded API</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors cursor-pointer active:scale-95"
                title="Clear Conversation"
                id="clear-chat-btn"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Message Container Area */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-5 space-y-4">
            <AnimatePresence initial={false} mode="wait">
              {isInitialState ? (
                /* GORGEOUS PREMIUM INITIAL LANDING STATE */
                <motion.div
                  key="welcome-landing"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center h-full max-w-lg mx-auto py-6"
                >
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/10 to-secondary/10 border border-primary/20 text-primary mb-4 shadow-inner">
                    <Bot className="w-7 h-7 stroke-[1.8]" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight mb-2">
                    How can I assist your evaluation of Siva D?
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                    Hi! I am Siva D&apos;s AI Resume Chatbot. I have full context of Siva&apos;s around 8 years of experience engineering high-scale Java / Spring Boot backend systems, HIPAA-regulated healthcare projects at Centene, and bank-grade fintech systems at HDFC Bank and Credit Union of Atlanta. 
                  </p>

                  <div className="w-full border-t border-border/20 pt-5 flex items-center justify-center gap-4 text-[11px] font-semibold text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Grounded in verified data
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      Fast answers via Gemini 2.5
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* DYNAMIC MESSAGE CHAT LIST WRAPPED IN A SINGLE MOTION CONTAINER */
                <motion.div
                  key="chat-history-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {messages.map((msg, idx) => {
                    const isAssistant = msg.role === "assistant";
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`flex w-full ${isAssistant ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm flex flex-col relative group transition-all duration-200 ${
                            isAssistant
                              ? "bg-card/90 border border-border/40 text-foreground rounded-tl-sm"
                              : "bg-primary text-primary-foreground rounded-tr-sm"
                          }`}
                        >
                          
                          {/* Message Text Content */}
                          <div className="pr-1.5">
                            {isAssistant ? (
                              <div>{parseAndRenderResponse(msg.text)}</div>
                            ) : (
                              <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed font-semibold">
                                {msg.text}
                              </p>
                            )}
                          </div>

                          {/* Meta controls & Timestamp */}
                          <div className={`flex items-center justify-between mt-2 pt-1.5 border-t text-[9px] font-semibold opacity-60 transition-opacity ${
                            isAssistant ? "border-border/20 text-muted-foreground" : "border-white/10 text-primary-foreground"
                          }`}>
                            <span>
                              {msg.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>

                            {/* Copy button: always visible at partial opacity on mobile, hover-revealed on desktop */}
                            {isAssistant && (
                              <button
                                onClick={() => copyToClipboard(msg.text, idx)}
                                className="flex items-center gap-1 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all p-1 -m-1 rounded hover:bg-muted cursor-pointer font-bold active:scale-95"
                                title="Copy reply text"
                              >
                                {copiedIndex === idx ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-500" />
                                    <span className="text-emerald-500 font-semibold">Copied</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3 text-muted-foreground" />
                                    <span>Copy</span>
                                  </>
                                )}
                              </button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Assistant Loading/Typing State Bubble */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex w-full justify-start"
              >
                <div className="bg-card/90 border border-border/40 rounded-2xl rounded-tl-sm px-4.5 py-3.5 flex items-center gap-1.5 shadow-sm">
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
              </motion.div>
            )}

            {/* Dummy element for auto-scroll focus */}
            <div ref={messagesEndRef} />
          </div>

          {/* Dynamic Speech Recording Indicator Banner */}
          <AnimatePresence>
            {isListening && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-primary/5 border-t border-primary/10 px-4 py-2 flex items-center justify-between text-xs text-primary font-semibold shadow-inner"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span>Active Voice Recognition: Speak clearly...</span>
                </div>
                <button
                  onClick={toggleListening}
                  className="text-[10px] border border-primary/20 bg-primary/10 rounded-full px-2 py-0.5 hover:bg-primary/25 cursor-pointer font-bold transition-all"
                >
                  Mute Mic
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Global Error Banner */}
          <AnimatePresence>
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-destructive/5 dark:bg-destructive/10 border-t border-destructive/20 px-4 py-2 flex items-center justify-between text-xs text-destructive font-semibold shadow-inner"
              >
                <span>{errorMsg}</span>
                <button
                  onClick={() => setErrorMsg(null)}
                  className="text-[10px] border border-destructive/25 bg-destructive/10 rounded px-1.5 py-0.5 hover:bg-destructive/20 cursor-pointer transition-all active:scale-95"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat Input Toolbar Panel */}
          <div className="p-3 sm:p-4 border-t border-border/30 bg-muted/10 backdrop-blur-md">
            <div className="flex items-end gap-2">
              
              {/* Voice Input Button */}
              <button
                onClick={toggleListening}
                className={`p-2.5 rounded-xl border flex items-center justify-center cursor-pointer transition-all shadow-sm active:scale-95 ${
                  isListening
                    ? "bg-red-500 border-red-600 text-white animate-pulse"
                    : "border-border/60 bg-card hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title="Speak Question"
                id="voice-mic-btn"
              >
                {isListening ? <MicOff className="w-4.5 h-4.5" /> : <Mic className="w-4.5 h-4.5" />}
              </button>

              {/* Message Text Input Area */}
              <div className="flex-1 relative">
                <textarea
                  id="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    cooldownSeconds > 0
                      ? `Cooldown (${cooldownSeconds}s)...`
                      : isListening
                      ? "Listening..."
                      : "Ask Siva a question..."
                  }
                  rows={1}
                  className="w-full pl-3.5 pr-12 py-2.5 rounded-xl border border-border/70 bg-card/75 focus:bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none placeholder:text-muted-foreground/60 shadow-inner text-xs sm:text-sm leading-normal min-h-[40px] max-h-[120px] transition-all"
                  disabled={isLoading || cooldownSeconds > 0}
                />
                
                {/* Character Counter */}
                {input.length > 800 && (
                  <span className={`absolute right-3 top-1.5 text-[8px] font-bold ${input.length > 950 ? "text-destructive" : "text-muted-foreground"}`}>
                    {input.length}/1000
                  </span>
                )}
              </div>

              {/* Message Send Button */}
              <button
                onClick={() => handleSend(input)}
                disabled={isLoading || !input.trim() || cooldownSeconds > 0}
                className="p-2.5 rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground shadow-md shadow-primary/5 hover:shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all cursor-pointer flex items-center justify-center active:scale-95"
                title="Send Question"
                id="chat-submit-btn"
              >
                <Send className="w-4.5 h-4.5" />
              </button>

            </div>
          </div>

        </div>

      {/* Structured Suggested Questions Section */}
      <SuggestedQuestions onSelectQuestion={handleSend} />

    </div>
  );
}
