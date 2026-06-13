import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ParticleBackground } from "./components/ParticleBackground";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Hide scrollbar globally
  useEffect(() => {
    document.documentElement.style.scrollbarWidth = "none";
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar { display: none; }
      * { -ms-overflow-style: none; }
      html { scroll-behavior: smooth; }
      body { background: #050505; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: "#050505", fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* MARKER-MAKE-KIT-INVOKED */}

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[100] origin-left"
        style={{ scaleX, background: "linear-gradient(to right, #2563EB, #60A5FA, #2563EB)" }}
      />

      {/* Particle canvas */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
