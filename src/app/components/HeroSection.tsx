import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MagneticButton } from "./Navigation";
import { Download, Eye } from "lucide-react";

const floatingSoftware = [
  { name: "Ps", color: "#31A8FF", label: "Photoshop", angle: 0 },
  { name: "Ai", color: "#FF9A00", label: "Illustrator", angle: 72 },
  { name: "Fg", color: "#A259FF", label: "Figma", angle: 144 },
  { name: "Id", color: "#FF3366", label: "InDesign", angle: 216 },
  { name: "Ae", color: "#9999FF", label: "After Effects", angle: 288 },
];

function FloatingOrb({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
        filter: "blur(40px)",
        width: "300px",
        height: "300px",
      }}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SoftwareIcon({ item, index }: { item: typeof floatingSoftware[0]; index: number }) {
  const radius = 200;
  const rad = (item.angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1 cursor-pointer"
      style={{ left: "50%", top: "50%", x: x - 28, y: y - 28 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
    >
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${item.color}33, ${item.color}11)`,
          border: `1px solid ${item.color}44`,
          backdropFilter: "blur(10px)",
          fontFamily: "'Orbitron', monospace",
          boxShadow: `0 0 20px ${item.color}33`,
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          delay: index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {item.name}
      </motion.div>
      <span className="text-xs" style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif" }}>
        {item.label}
      </span>
    </motion.div>
  );
}

function AvatarGlobe() {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ border: "1px solid rgba(37,99,235,0.3)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {/* Middle ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "16px",
          border: "1px dashed rgba(59,130,246,0.4)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      {/* Avatar container */}
      <div
        className="absolute rounded-full overflow-hidden"
        style={{
          inset: "32px",
          background: "linear-gradient(135deg, #1e3a8a, #1d4ed8, #2563eb)",
          boxShadow: "0 0 60px rgba(37,99,235,0.5), inset 0 0 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* Stylized designer avatar */}
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            background: "linear-gradient(160deg, #1e3a8a 0%, #2563eb 50%, #1d4ed8 100%)",
          }}
        >
          {/* Abstract face / silhouette */}
          <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="faceGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            {/* Body */}
            <ellipse cx="100" cy="185" rx="55" ry="35" fill="rgba(15,30,80,0.8)" />
            {/* Neck */}
            <rect x="88" y="140" width="24" height="30" rx="8" fill="rgba(147,197,253,0.7)" />
            {/* Head */}
            <ellipse cx="100" cy="110" rx="42" ry="48" fill="url(#faceGrad)" />
            {/* Hair */}
            <ellipse cx="100" cy="70" rx="44" ry="20" fill="rgba(30,58,138,0.9)" />
            <ellipse cx="62" cy="90" rx="10" ry="22" fill="rgba(30,58,138,0.9)" />
            <ellipse cx="138" cy="90" rx="10" ry="22" fill="rgba(30,58,138,0.9)" />
            {/* Eyes */}
            <ellipse cx="84" cy="112" rx="8" ry="9" fill="rgba(15,23,42,0.9)" />
            <ellipse cx="116" cy="112" rx="8" ry="9" fill="rgba(15,23,42,0.9)" />
            <circle cx="86" cy="110" r="3" fill="white" opacity="0.9" />
            <circle cx="118" cy="110" r="3" fill="white" opacity="0.9" />
            {/* Glasses */}
            <rect x="74" y="104" width="24" height="16" rx="5" fill="none" stroke="rgba(59,130,246,0.8)" strokeWidth="1.5" />
            <rect x="102" y="104" width="24" height="16" rx="5" fill="none" stroke="rgba(59,130,246,0.8)" strokeWidth="1.5" />
            <line x1="98" y1="112" x2="102" y2="112" stroke="rgba(59,130,246,0.8)" strokeWidth="1.5" />
            {/* Smile */}
            <path d="M 88 128 Q 100 138 112 128" fill="none" stroke="rgba(147,197,253,0.7)" strokeWidth="2" strokeLinecap="round" />
            {/* Collar / shirt */}
            <path d="M 65 172 L 75 150 L 100 160 L 125 150 L 135 172 Z" fill="rgba(37,99,235,0.7)" />
          </svg>
        </div>
      </div>
      {/* Glow underneath */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-10 rounded-full"
        style={{
          background: "rgba(37,99,235,0.4)",
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [gyro, setGyro] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: DeviceOrientationEvent) => {
      setGyro({
        x: ((e.gamma ?? 0) / 45) * 10,
        y: ((e.beta ?? 0) / 90) * 10,
      });
    };
    window.addEventListener("deviceorientation", handle);
    return () => window.removeEventListener("deviceorientation", handle);
  }, []);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const parallaxX = mouse.x + gyro.x;
  const parallaxY = mouse.y + gyro.y;

  const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Background glow orbs */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4" style={{ transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)` }}>
          <FloatingOrb delay={0} />
        </div>
        <div className="absolute top-2/3 right-1/4" style={{ transform: `translate(${-parallaxX * 0.2}px, ${parallaxY * 0.2}px)` }}>
          <FloatingOrb delay={2} />
        </div>
        <div className="absolute top-1/2 right-1/3" style={{ transform: `translate(${parallaxX * 0.1}px, ${-parallaxY * 0.1}px)` }}>
          <FloatingOrb delay={4} />
        </div>
      </motion.div>

      {/* Cursor follow glow */}
      <div
        className="absolute pointer-events-none w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 60%)",
          left: `calc(50% + ${mouse.x * 5}px)`,
          top: `calc(50% + ${mouse.y * 5}px)`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.1s, top 0.1s",
          filter: "blur(10px)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 pt-24"
      >
        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.3)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2563EB" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif" }}>
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="leading-none mb-4"
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 800,
              color: "#F5F5F5",
              letterSpacing: "-0.02em",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #60A5FA, #2563EB)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Amit
            </span>
            <br />
            Agrahari
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <div className="h-px flex-1 max-w-12" style={{ background: "rgba(37,99,235,0.5)" }} />
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#9CA3AF",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                letterSpacing: "0.08em",
              }}
            >
              Graphic Designer &amp; UI/UX Designer
            </p>
            <div className="h-px flex-1 max-w-12" style={{ background: "rgba(37,99,235,0.5)" }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#9CA3AF", maxWidth: "480px", lineHeight: 1.7 }}
            className="mx-auto lg:mx-0 mb-10"
          >
            Crafting premium digital experiences with a passion for bold design, immersive interfaces, and pixel-perfect execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <MagneticButton onClick={scrollToProjects} variant="primary">
              <Eye size={14} className="inline mr-2" />
              View Projects
            </MagneticButton>
            <MagneticButton variant="outline">
              <Download size={14} className="inline mr-2" />
              Download Resume
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-8 mt-12 justify-center lg:justify-start"
          >
            {[
              { value: "3+", label: "Years Exp." },
              { value: "50+", label: "Projects" },
              { value: "20+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual side */}
        <motion.div
          className="relative flex-shrink-0"
          style={{
            transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
            transition: "transform 0.1s",
          }}
        >
          <div className="relative" style={{ width: "420px", height: "420px" }}>
            <AvatarGlobe />
            {floatingSoftware.map((item, i) => (
              <SoftwareIcon key={item.name} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif" }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(37,99,235,0.8), transparent)" }}
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
