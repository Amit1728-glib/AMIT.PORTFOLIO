import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const experience = [
  {
    role: "Graphic Designer",
    company: "Raj Mobile Hub",
    period: "2022 – Present",
    desc: "Spearheading brand identity, in-store visual design, promotional materials, and digital marketing assets for a growing retail brand.",
    color: "#2563EB",
  },
  {
    role: "Graphic Designer",
    company: "Amit Men's Wear",
    period: "2020 – 2022",
    desc: "Created comprehensive brand collateral, catalogue design, social media campaigns, and seasonal lookbook layouts that elevated the brand presence.",
    color: "#3B82F6",
  },
];

export function AboutSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden" style={{ background: "#050505" }}>
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <SectionHeader label="About Me" title="The Designer Behind the Work" inView={inView} />

        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "rgba(15,15,25,0.8)",
                border: "1px solid rgba(37,99,235,0.2)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 60px rgba(37,99,235,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#9CA3AF",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  marginBottom: "1.5rem",
                }}
              >
                I'm a passionate Graphic and UI/UX Designer based in India, with over 3 years of experience creating visually compelling, user-centered design solutions. I bridge the gap between aesthetics and functionality — transforming ideas into premium digital and print experiences.
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#9CA3AF",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                My design philosophy is rooted in meticulous attention to detail, deep empathy for the end user, and a relentless pursuit of visual excellence. From brand identity systems to complex UI flows, I approach every project as an opportunity to create something truly extraordinary.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Amit Agrahari" },
                  { label: "Specialty", value: "UI/UX & Branding" },
                  { label: "Location", value: "India" },
                  { label: "Status", value: "Available" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-xs tracking-widest uppercase" style={{ color: "#2563EB", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.label}
                    </span>
                    <span style={{ color: "#F5F5F5", fontFamily: "'Space Grotesk', sans-serif" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3
              className="mb-8 text-sm tracking-widest uppercase"
              style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Experience Timeline
            </h3>

            <div className="relative pl-6" style={{ borderLeft: "1px solid rgba(37,99,235,0.3)" }}>
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                  className="relative mb-10 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-9 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      background: exp.color,
                      boxShadow: `0 0 20px ${exp.color}66`,
                      top: "6px",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{
                      background: "rgba(15,15,25,0.8)",
                      border: `1px solid ${exp.color}22`,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4
                        style={{
                          fontFamily: "'Orbitron', monospace",
                          color: "#F5F5F5",
                          fontSize: "1rem",
                          fontWeight: 600,
                        }}
                      >
                        {exp.role}
                      </h4>
                      <span
                        className="text-xs px-3 py-1 rounded-full ml-4 flex-shrink-0"
                        style={{
                          background: `${exp.color}22`,
                          color: exp.color,
                          fontFamily: "'JetBrains Mono', monospace",
                          border: `1px solid ${exp.color}33`,
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div
                      className="text-sm mb-3"
                      style={{ color: exp.color, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                    >
                      {exp.company}
                    </div>
                    <p style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Future node */}
              <div
                className="absolute -left-3.5 bottom-0 w-5 h-5 rounded-full border-2"
                style={{ borderColor: "rgba(37,99,235,0.4)", background: "#050505" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ label, title, inView }: { label: string; title: string; inView: boolean }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
        style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.3)" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#2563EB", fontFamily: "'Space Grotesk', sans-serif" }}>
          {label}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "#F5F5F5",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-4 h-px w-24"
        style={{ background: "linear-gradient(to right, transparent, #2563EB, transparent)" }}
      />
    </div>
  );
}
