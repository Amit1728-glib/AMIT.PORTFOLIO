import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./AboutSection";
import { Award, Users, Briefcase, Star } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 50, suffix: "+", label: "Projects Completed", color: "#2563EB" },
  { icon: Users, value: 20, suffix: "+", label: "Happy Clients", color: "#A259FF" },
  { icon: Award, value: 3, suffix: "+", label: "Years Experience", color: "#10B981" },
  { icon: Star, value: 100, suffix: "%", label: "Client Satisfaction", color: "#FF9A00" },
];

const achievements = [
  {
    title: "Best Brand Identity — Regional Design Awards 2023",
    desc: "Recognized for outstanding brand identity work for Raj Mobile Hub.",
    color: "#2563EB",
    year: "2023",
  },
  {
    title: "Featured in Design India Magazine",
    desc: "Portfolio featured in the monthly spotlight on emerging graphic designers.",
    color: "#A259FF",
    year: "2023",
  },
  {
    title: "Completed 50+ Client Projects",
    desc: "Milestone reached with a 100% client satisfaction rate across all engagements.",
    color: "#10B981",
    year: "2024",
  },
  {
    title: "Certified UI/UX Designer — Google",
    desc: "Completed Google's UX Design Professional Certificate with distinction.",
    color: "#FF9A00",
    year: "2022",
  },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function AchievementsSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: "#050505" }}>
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, rgba(37,99,235,0.1) 0%, transparent 50%)",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <SectionHeader label="Achievements" title="Numbers That Matter" inView={inView} />

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 rounded-2xl text-center group"
                style={{
                  background: "rgba(10,10,20,0.8)",
                  border: `1px solid ${stat.color}22`,
                  backdropFilter: "blur(20px)",
                }}
                whileHover={{ scale: 1.04, borderColor: stat.color + "55" } as any}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${stat.color}12 0%, transparent 70%)` }}
                />
                <Icon size={28} style={{ color: stat.color, margin: "0 auto 12px" }} />
                <div
                  style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <div
                  style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", letterSpacing: "0.05em" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4 p-6 rounded-2xl"
              style={{
                background: "rgba(10,10,20,0.8)",
                border: `1px solid ${ach.color}22`,
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${ach.color}15`, border: `1px solid ${ach.color}33` }}
              >
                <Award size={20} style={{ color: ach.color }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#F5F5F5",
                      lineHeight: 1.4,
                    }}
                  >
                    {ach.title}
                  </h4>
                  <span
                    className="text-xs px-2 py-0.5 rounded flex-shrink-0"
                    style={{
                      background: `${ach.color}15`,
                      color: ach.color,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {ach.year}
                  </span>
                </div>
                <p style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
