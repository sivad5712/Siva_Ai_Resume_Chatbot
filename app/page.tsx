import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChatBox from "../components/ChatBox";
import ResumeHighlights from "../components/ResumeHighlights";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactRecruiterForm from "../components/ContactRecruiterForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground select-none selection:bg-primary/20 selection:text-primary">
      
      {/* Dynamic Sticky Header */}
      <Navbar />

      {/* Main Core Layout Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Landing Node with 3D Particles */}
        <Hero />

        {/* 2. Interactive Chat Assessment Hub */}
        <div className="bg-gradient-to-b from-transparent via-muted/5 to-muted/20">
          <ChatBox />
        </div>

        {/* 3. Analytical Experience Highlights Grid */}
        <ResumeHighlights />

        {/* 4. Categorized Technical Inventory */}
        <SkillsSection />

        {/* 5. Production Systems Case Studies */}
        <ProjectsSection />

        {/* 6. Recruiter Quick Dispatch Contact Form */}
        <ContactRecruiterForm />

      </main>

      {/* 7. Contact Footer Node */}
      <Footer />

    </div>
  );
}
