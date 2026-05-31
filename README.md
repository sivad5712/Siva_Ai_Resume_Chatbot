# Siva's AI Resume Chatbot 🚀

A premium, recruiter-friendly AI Resume Chatbot designed to showcase the software engineering background, architecture methodologies, and domain depth of Siva. Recruiters can query this interactive system using text or speech-to-text voice questions. The chatbot answers as Siva in the first person, maintaining the tone of an expert 6-8+ years experienced Senior Software Engineer.

---

## 🛠️ Tech Stack & Features

* **Framework**: Next.js App Router (React 19, TypeScript)
* **Styling**: Tailwind CSS v4 (Glassmorphism interfaces, smooth themes, custom scrollbars)
* **Animations**: Framer Motion (Page triggers, micro-interactions, dashboard stagger reveals)
* **3D Visuals**: Lightweight, interactive particle mesh using Vanilla Three.js
* **LLM Engine**: Google Gemini API via the official `@google/generative-ai` SDK
* **Speech to Text**: Built-in HTML5 Web Speech Recognition API
* **Theme System**: Persisted Light/Dark theme configuration with system sync fallbacks

---

## 💻 macOS Setup Guide

Follow this guide to get the project running locally on your Mac.

### Step 1: Install Node.js (If not already installed)
Next.js requires Node.js (v18.0.0 or higher recommended).
1. **Option A (Homebrew)**: If you use Homebrew, open your macOS Terminal and run:
   ```bash
   brew install node
   ```
2. **Option B (Node Website)**: Go to [nodejs.org](https://nodejs.org/), download the **LTS (Long Term Support)** installer for Mac, and double-click the `.pkg` file to install it.
3. Confirm installation in your terminal:
   ```bash
   node -v
   npm -v
   ```

### Step 2: Open terminal and navigate to the project directory
1. Open the **Terminal** app on your Mac (press `Cmd + Space`, type `Terminal`, and press `Enter`).
2. Navigate to this project folder. For example, if it is saved on your desktop:
   ```bash
   cd ~/Desktop/siva-ai-resume-assistant
   ```

### Step 3: Install Project Dependencies
Run the installation command using the terminal inside the project directory:
```bash
npm install --legacy-peer-deps
```
*(We use `--legacy-peer-deps` to ensure complete dependency compatibility with React 19).*

### Step 4: Configure the Gemini API Key
To power the recruiter chatbot, you must supply a Google Gemini API Key.
1. Get a **free** Gemini API Key by visiting [Google AI Studio](https://aistudio.google.com/app/apikey) and signing in with your Google account.
2. In the root of your project folder, create a new file named `.env.local` by running:
   ```bash
   touch .env.local
   ```
3. Open `.env.local` in your editor and add your API key like so:
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```
   *(Note: `.env.local` is automatically listed in your `.gitignore` file, keeping your API key private and secure).*

### Step 5: Personalize Your Resume Data
You can easily personalize all response contexts.
1. Open the file [src/data/resume.ts](file:///Users/SivaD/Desktop/siva-ai-resume-assistant/src/data/resume.ts).
2. Modify the structured objects (`skills`, `companies`, `projects`, `education`, `contact`).
3. Paste the full raw text of your final resume inside the `rawResumeText` variable at the bottom. The Gemini AI uses this comprehensive block of text as its ultimate source of truth to answer recruiter questions.

### Step 6: Start the Local Development Server
Launch the server by running:
```bash
npm run dev
```
Once started, open your browser and navigate to: **[http://localhost:3000](http://localhost:3000)**.

---

## ⚡ How to Test the Assistant

1. **Text Inputs**: Type standard questions like *"Explain your Spring Boot experience"* or *"Why should we hire you?"* in the chat box and press `Enter`.
2. **Voice Inputs**: Click the **Microphone** icon. Allow browser permission if prompted. Speak your question. Your transcript will be loaded, and the query will be sent.
3. **Suggested Questions**: Click on any of the categorized tabs beneath the chat card (e.g. *Projects*, *Cloud*, *Skill-Gap Check*) and select a pre-populated question to trigger a rapid response.
4. **Theme Shifts**: Click the sun/moon icon in the sticky navbar to verify that the ambient Three.js colors, card highlights, and grid overlays transform smoothly.

---

## 🚀 Deploy to Vercel (Production)

Deploying this site is incredibly easy with **Vercel** (the creators of Next.js):
1. Create a free account at [vercel.com](https://vercel.com).
2. Install the Vercel CLI on your Mac:
   ```bash
   npm install -g vercel
   ```
3. Run the deployment command from the project root:
   ```bash
   vercel
   ```
   Follow the prompts to link the project.
4. **CRITICAL**: Go to your Vercel Project Dashboard, navigate to **Settings > Environment Variables**, and add your:
   * **Key**: `GEMINI_API_KEY`
   * **Value**: *[your_gemini_api_key]*
5. Deploy to production:
   ```bash
   vercel --prod
   ```

---

## 🔍 Common Errors & Troubleshooting

* **Issue: Chatbot says "missing API key"**
  * *Fix*: Verify you created a `.env.local` file in the root of the project (not inside `app/` or `src/`) and that the variable name is exactly `GEMINI_API_KEY` with no spaces. Restart the npm server (`Ctrl + C` then `npm run dev`) so Next.js reloads the environment.
* **Issue: "TypeError: Cannot read properties of null (reading 'webkitSpeechRecognition')"**
  * *Fix*: The Web Speech API is natively supported in modern Chrome, Safari, and Edge. If you are testing in a browser or shell preview that does not support it, a gracious warning banner is displayed.
* **Issue: WebGL errors on older Macs**
  * *Fix*: The 3D particle system handles failures gracefully. If WebGL is not enabled or supported, the system falls back onto a beautiful ambient glow background.
