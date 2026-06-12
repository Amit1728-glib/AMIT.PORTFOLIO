import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./AboutSection";

const skills = [
  { name: "Photoshop", level: 95, icon: "Ps", color: "#31A8FF" },
  { name: "Illustrator", level: 90, icon: "Ai", color: "#FF9A00" },
  { name: "InDesign", level: 85, icon: "Id", color: "#FF3366" },
  { name: "Figma", level: 92, icon: "Fg", color: "#A259FF" },
  { name: "UI/UX Design", level: 88, icon: "UX", color: "#2563EB" },
  { name: "Brand Identity", level: 90, icon: "Br", color: "#10B981" },
  { name: "Typography", level: 87, icon: "Ty", color: "#F59E0B" },
  { name: "Motion Graphics", level: 80, icon: "Mg", color: "#9999FF" },
  { name: "Design Thinking", level: 93, icon: "DT", color: "#EC4899" },
  { name: "User-Centered Design", level: 88, icon: "UC", color: "#14B8A6" },
];

function SkillSphere() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 40,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 40,
    });
  };
  const onLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-80 h-80 mx-auto"
      style={{ perspective: "800px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: mouse.x, rotateX: -mouse.y }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {skills.map((skill, i) => {
          const phi = Math.acos(-1 + (2 * i) / skills.length);
          const theta = Math.sqrt(skills.length * Math.PI) * phi;
          const radius = 120;
          const x = radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.sin(phi) * Math.sin(theta);
          const z = radius * Math.cos(phi);

          return (
            <motion.div
              key={skill.name}
              className="absolute flex items-center justify-center rounded-xl cursor-pointer group"
              style={{
                width: "56px",
                height: "56px",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
                background: `linear-gradient(135deg, ${skill.color}33, ${skill.color}11)`,
                border: `1px solid ${skill.color}55`,
                backdropFilter: "blur(10px)",
                boxShadow: `0 0 20px ${skill.color}33`,
                fontFamily: "'Orbitron', monospace",
                fontSize: "0.65rem",
                fontWeight: 700,
                color: skill.color,
              }}
              whileHover={{ scale: 1.3, zIndex: 10 }}
              title={skill.name}
              animate={{ rotateY: -mouse.x * 0.5 }}
            >
              {skill.icon}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-2 py-1 rounded text-xs z-20"
                style={{
                  background: "rgba(5,5,5,0.95)",
                  border: `1px solid ${skill.color}44`,
                  color: "#F5F5F5",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  pointerEvents: "none",
                }}
              >
                {skill.name}
              </div>
            </motion.div>
          );
        })}

        {/* Center orb */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "60px",
            height: "60px",
            background: "radial-gradient(circle, rgba(37,99,235,0.8), rgba(37,99,235,0.2))",
            boxShadow: "0 0 40px rgba(37,99,235,0.6)",
          }}
        />
      </motion.div>
    </div>
  );
}

function SkillBar({ skill, inView, index }: { skill: typeof skills[0]; inView: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{
              background: `${skill.color}22`,
              border: `1px solid ${skill.color}44`,
              color: skill.color,
              fontFamily: "'Orbitron', monospace",
            }}
          >
            {skill.icon}
          </span>
          <span style={{ color: "#F5F5F5", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}>
            {skill.name}
          </span>
        </div>
        <span style={{ color: skill.color, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem" }}>
          {skill.level}%
        </span>
      </div>
      <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: `linear-gradient(to right, ${skill.color}aa, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden" style={{ background: "#070710" }}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <SectionHeader label="Skills" title="Tools & Expertise" inView={inView} />

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SkillSphere />
            <p className="text-center mt-6 text-xs tracking-widest uppercase" style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif" }}>
              Hover to explore — drag to rotate
            </p>
          </motion.div>

          {/* Skill bars */}
          <div className="flex flex-col gap-5">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} inView={inView} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
