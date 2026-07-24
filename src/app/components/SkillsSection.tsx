import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./AboutSection";

const skills = [
  { name: "Photoshop", level: 100, icon: "Ps", color: "#31A8FF" },
  { name: "Illustrator", level: 100, icon: "Ai", color: "#FF9A00" },
  { name: "InDesign", level: 100, icon: "Id", color: "#FF3366" },
  { name: "Figma", level: 100, icon: "Fg", color: "#A259FF" },
  { name: "UI/UX Design", level: 100, icon: "UX", color: "#2563EB" },
  { name: "Brand Identity", level: 100, icon: "Br", color: "#10B981" },
  { name: "Typography", level: 100, icon: "Ty", color: "#F59E0B" },
  { name: "Design Thinking", level: 100, icon: "DT", color: "#EC4899" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function SkillsSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
      style={{ background: "#ffffff" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <SectionHeader label="Skills" title="Tools & Expertise" inView={inView} />

        <div
          className="
            mt-12 grid gap-4
            grid-cols-2
            sm:mt-16 sm:gap-5
            md:grid-cols-3
            lg:mt-20 lg:grid-cols-4 lg:gap-6
            xl:grid-cols-4
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, transition: { delay: index * 0.06, duration: 0.6, ease: "easeOut" } }
                  : { opacity: 0, y: 24 }
              }
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="
                group relative flex flex-col items-center justify-center gap-3
                rounded-2xl border border-white/10 bg-white/[0.04] p-5
                text-center backdrop-blur-xl
                sm:gap-4 sm:rounded-3xl sm:p-6
                min-h-[150px] sm:min-h-[170px] lg:min-h-[190px]
              "
              style={{
                boxShadow: "0 18px 60px -30px rgba(56,189,248,0.35)",
              }}
            >
              {/* Icon */}
              <div
                className="
                  flex h-12 w-12 shrink-0 items-center justify-center
                  rounded-2xl border text-lg font-bold
                  sm:h-16 sm:w-16 sm:rounded-3xl sm:text-2xl
                  transition-transform duration-300 group-hover:scale-110
                "
                style={{
                  background: `${skill.color}15`,
                  color: skill.color,
                  boxShadow: `inset 0 0 20px ${skill.color}20`,
                  borderColor: `${skill.color}30`,
                }}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <span
                className="
                  line-clamp-2 max-w-[130px] text-xs font-semibold
                  tracking-[0.04em] text-black
                  sm:max-w-[140px] sm:text-sm sm:tracking-[0.06em]
                "
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {skill.name}
              </span>

              {/* Level bar */}
              <div className="mt-1 w-full max-w-[110px] sm:max-w-[120px]">
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: skill.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{
                      duration: 1,
                      delay: index * 0.06 + 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>
                {/* <span className="mt-1.5 block text-[10px] font-medium text-white/40 sm:text-xs">
                  {skill.level}%
                </span> */}
              </div>

              {/* Bottom highlight on hover */}
              <div
                className="absolute inset-x-5 bottom-4 h-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inset-x-6"
                style={{ background: "rgba(56,189,248,0.35)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}