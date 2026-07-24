import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./AboutSection";
import { Palette, Share2, Monitor, PenTool, Printer, Play } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    desc: "Comprehensive brand systems including logo, color, typography, and guidelines that create lasting impressions and brand recognition.",
    color: "#2563EB",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
  },
  {
    icon: Share2,
    title: "Social Media Design",
    desc: "Scroll-stopping social media templates, content packs, and campaign assets that drive engagement and grow your audience.",
    color: "#2563EB",
    features: ["Content Templates", "Story Design", "Campaign Assets", "Reel Covers"],
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    desc: "User-centered interface design with thorough research, wireframing, prototyping, and polished high-fidelity designs.",
    color: "#2563EB",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: PenTool,
    title: "Logo Design",
    desc: "Distinctive, memorable logos that encapsulate your brand essence — from wordmarks to emblems, crafted with precision.",
    color: "#2563EB",
    features: ["Custom Logo", "Icon Design", "Variations", "Vector Files"],
  },
  {
    icon: Printer,
    title: "Print Design",
    desc: "Premium print collateral from business cards to large-format displays, brochures, catalogues, and packaging.",
    color: "#2563EB",
    features: ["Brochures", "Catalogues", "Packaging", "Banners"],
  },
  // {
  //   icon: Play,
  //   title: "Motion Graphics",
  //   desc: "Dynamic animated content including intro/outro sequences, animated logos, explainer videos, and social media reels.",
  //   color: "#9999FF",
  //   features: ["Logo Animation", "Title Sequences", "Explainer Videos", "Social Reels"],
  // },
];

function ServiceCard({ service, index, inView }: { service: typeof services[0]; index: number; inView: boolean }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-6 rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.95)",
        border: "1px solid rgba(37,99,235,0.12)",
        backdropFilter: "blur(20px)",
        transition: "border-color 0.3s",
      }}
      whileHover={{ y: -8, borderColor: service.color + "44" } as any}
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${service.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{
          background: `${service.color}15`,
          border: `1px solid ${service.color}33`,
          boxShadow: `0 0 20px ${service.color}22`,
        }}
      >
        <Icon size={24} style={{ color: service.color }} />
      </div>

      <h3
        className="mb-3"
        style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#000000",
        }}
      >
        {service.title}
      </h3>

      <p
        className="mb-5"
        style={{ color: "#1F2937", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", lineHeight: 1.7 }}
      >
        {service.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.features.map((feat) => (
          <span
            key={feat}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              background: `${service.color}10`,
              color: service.color,
              border: `1px solid ${service.color}33`,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {feat}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl"
        style={{ background: `linear-gradient(to right, ${service.color}, transparent)` }}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export function ServicesSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden" style={{ background: "#ffffff" }}>
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.08) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <SectionHeader label="Services" title="What I Offer" inView={inView} />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
