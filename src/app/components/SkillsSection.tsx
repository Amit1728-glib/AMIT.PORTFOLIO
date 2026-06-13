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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              className="group relative flex flex-col items-center justify-center gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_80px_-40px_rgba(56,189,248,0.55)] backdrop-blur-xl"
              style={{
                minHeight: 180,
                boxShadow: "0 18px 60px -30px rgba(56,189,248,0.45)",
                borderColor: "rgba(96,165,250,0.18)",
              }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 text-2xl font-bold"
                style={{
                  background: `${skill.color}15`,
                  color: skill.color,
                  boxShadow: `inset 0 0 20px ${skill.color}20`,
                  borderColor: `${skill.color}30`,
                }}
              >
                {skill.icon}
              </div>
              <span className="max-w-[120px] text-sm font-semibold tracking-[0.06em] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {skill.name}
              </span>
              <div
                className="absolute inset-x-6 bottom-6 h-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "rgba(56,189,248,0.35)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
