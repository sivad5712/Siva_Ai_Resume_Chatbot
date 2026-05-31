# Siva D's AI Resume Chatbot
> An enterprise-grade, high-performance interactive conversational platform showcasing the software engineering architecture, domain expertise, and enterprise experience of Siva D.

***

<div align="left">

![Live Site](https://img.shields.io/badge/Live_Deployment-siva--ai--resume--chatbot.vercel.app-000000?style=flat-square&logo=vercel&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript_5-000000?style=flat-square&logo=typescript&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Gemini_AI_API-000000?style=flat-square&logo=googlegemini&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-000000?style=flat-square&logo=tailwindcss&logoColor=white)

</div>

***

## 🌐 Live Production Link
Access the fully deployed interactive platform here:  
👉 **[siva-ai-resume-chatbot.vercel.app](https://siva-ai-resume-chatbot.vercel.app/)**

***

## 🏛️ Executive Summary

This repository houses the production code for **Siva D's AI Resume Chatbot**, a high-end, responsive portfolio application designed specifically for recruiters, hiring managers, and technical architects. 

Unlike traditional static portfolios, this platform integrates a advanced **large language model (LLM) pipeline** that represents Siva in the first person. It behaves as an expert conversational representative, fully grounded in verified details of Siva's ~8 years of experience engineering high-scale Java / Spring Boot backend systems, HIPAA-regulated healthcare engines, and bank-grade financial platforms.

---

## ⚙️ Core Architecture & Engineering Highlights

```
                          ┌────────────────────────┐
                          │  Recruiter / User UI   │
                          └───────────┬────────────┘
                                      │
                                      ▼ [POST Request]
                       ┌──────────────────────────────┐
                       │  Next.js API Route handler   │
                       └──────────────┬───────────────┘
                                      │
                       ┌──────────────┴──────────────┐
                       ▼                             ▼
         [Grounding Resume Context]           [Security Blockers]
         - Core Java / Spring Boot            - PII Redaction Filter
         - HIPAA/Fintech Compliance           - strict Visa Rules
         - Project Metrics Data               - Rate Flex Guidelines
                       │                             │
                       └──────────────┬──────────────┘
                                      │
                                      ▼
                      ┌───────────────────────────────┐
                      │    Gemini API Engine Core     │
                      └───────────────┬───────────────┘
                                      │
              ┌───────────────────────┴───────────────────────┐
              │ [Success Status 200]                          │ [Failure Status 429]
              ▼                                               ▼
     ┌──────────────────┐                           ┌──────────────────┐
     │ gemini-2.5-flash │                           │ gemini-2.0-flash │
     └────────┬─────────┘                           └────────┬─────────┘
              │                                              │
              └───────────────────────┬──────────────────────┘
                                      │ [Response Payload]
                                      ▼
                        ┌────────────────────────────┐
                        │    Framer Motion UI Layer  │
                        ├────────────────────────────┤
                        │ - Inline Mermaid Rendering │
                        │ - Live SVG Downloader      │
                        │ - SMTP / Mailto Fallback   │
                        └────────────────────────────┘
```

### 1. Robust Grounded Context & System Prompting
* **Strict Grounding Boundaries**: Configured with a highly structured knowledge database ([resumeKnowledge.ts](file:///Users/SivaD/Desktop/siva-ai-resume-assistant/src/data/resumeKnowledge.ts)) including project descriptions, quantitative metrics, technical toolsets, and contact channels.
* **PII & Data Integrity Filters**: Implements custom regex filters inside the server-side controller to protect sensitive identity data (USCIS, EAD, SSN, Passport, or Date of Birth), returning a standardized security response if requested.
* **Work Authorization & Rates Compliance**: Programmed to outline Siva's extensible F1 OPT-EAD status accurately (without claim of citizenship or permanent residency) and invite C2C/W2 rate discussions flexible around the preferred baseline of $65/hr – $70/hr.

### 2. High-Capacity Model Failover Pipeline
To prevent service interruptions due to Google's free tier rate constraints (`429 Too Many Requests`), the backend features a **dual-model failover system**:
* **Primary Route**: Handles queries via `gemini-2.5-flash` for high-speed, cost-efficient, advanced completions.
* **Fallback Route**: In the event of a primary 429 quota exception, the system automatically redirects the query to `gemini-2.0-flash` on an independent rate limit tier, seamlessly resolving the query without user impact.
* **Graceful Exit**: If both endpoints are exhausted, the endpoint responds with a structured `429` status code, triggering an elegant, non-intrusive 30-second cooldown layout on the client.

### 3. Inline System Architecture Visualization
* **Dynamic Mermaid Compilation**: The chatbot detects technical requests asking for architectural designs and responds with valid Mermaid.js diagrams.
* **Interactive Client-Side Engine**: The frontend captures Markdown code blocks marked as ````mermaid```` and renders them using a reactive SVG compiler.
* **Control Actions**: Users are equipped with "Copy Diagram Code" and "Download as SVG" actions, enabling real-time engineering evaluations.

### 4. Direct Mail Dispatcher with Native Fallback
* **Transactional Email Routing**: Implements server-side **Nodemailer SMTP** forwarding to transmit recruiter inquiries directly to Siva's primary inbox (`sivad5712@gmail.com`).
* **Active Status Verification**: The endpoint performs pre-flight status validation. If the server lacks valid SMTP variables, it yields an explicit `SMTP_MISSING` indicator.
* **Graceful Client Fallback**: The client form captures this indicator and dynamically displays a premium Mailto link containing pre-populated fields (subject, recipient, and message contents) so the recruiter can submit their inquiry via their native mail application seamlessly.

---

## 🛠️ Complete Technical Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 15.2 (App Router) | Standard for high-speed React Server Components, server-side routes, and fast static generation. |
| **Language** | TypeScript 5 | Strict typing to eliminate runtime null reference exceptions. |
| **AI Integration** | Google Gemini API SDK | Low-latency inference, large context window, and robust system instructions. |
| **Rendering** | React 19, Vanilla Three.js | Real-time WebGL particle system providing premium visuals without affecting main thread operations. |
| **Diagrams Engine**| Mermaid.js (Client Component) | On-the-fly client compilation of SVG architecture diagrams. |
| **Animations** | Framer Motion | Smooth, organic page transitions and micro-interactions. |
| **Styling** | Tailwind CSS v4, Vanilla CSS | Minimal utility-first styling utilizing CSS variables for clean Dark/Light theme switching. |
| **Mail Transport** | Nodemailer | Standard, secure Node.js transactional email delivery. |

---

## 💻 Local Workspace Configuration

Follow this guide to initialize, configure, and execute the repository locally on macOS:

### Prerequisites
* **Node.js**: Version 18.0.0 or higher is required. Confirm with:
  ```bash
  node -v
  ```

### Step 1: Clone & Dependency Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   cd ~/Desktop/siva-ai-resume-assistant
   ```
2. Install dependencies securely:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: The `--legacy-peer-deps` flag ensures full compatibility between Next.js 15, React 19, and modular dependencies).*

### Step 2: Establish Local Environment Variables
Create a `.env.local` configuration file in the project's root folder:
```bash
touch .env.local
```
Add the following operational parameters to the file:
```env
# Gemini API Key - Retrieve for free at: https://aistudio.google.com/
GEMINI_API_KEY=your_actual_gemini_api_key

# Nodemailer App Parameters (Gmail SMTP)
GMAIL_USER=sivad5712@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
```
*(Note: `.env.local` is listed inside `.gitignore` to prevent any exposure of sensitive keys in version control).*

### Step 3: Run the Development Server
Execute the Next.js Turbopack compiler:
```bash
npm run dev
```
Navigate to **[http://localhost:3000](http://localhost:3000)** in your web browser.

---

## 🚢 Production Deployment

This application is fully optimized for **Vercel** serverless hosting:

1. Install the Vercel CLI global command tool:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment sequence inside the project directory:
   ```bash
   vercel
   ```
3. Set your production variables in the **Vercel Project Dashboard** under **Settings > Environment Variables**:
   * `GEMINI_API_KEY`
   * `GMAIL_USER`
   * `GMAIL_APP_PASSWORD`
4. Promote the deployment to production:
   ```bash
   vercel --prod
   ```

---

## 📞 Professional Contact Information

Siva is actively interviewing for Contract (C2C/W2), contract-to-hire, and permanent roles throughout the United States. 

* **Live Interactive Platform**: [siva-ai-resume-chatbot.vercel.app](https://siva-ai-resume-chatbot.vercel.app/)
* **Email**: [sivad5712@gmail.com](mailto:sivad5712@gmail.com)
* **Mobile**: [+1 (614) 664-9498](tel:+16146649498)
* **GitHub Codebase**: [github.com/sivad5712/Siva_Ai_Resume_Chatbot](https://github.com/sivad5712/Siva_Ai_Resume_Chatbot)
