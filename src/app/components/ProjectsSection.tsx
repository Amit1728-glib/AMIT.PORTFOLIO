import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./AboutSection";
import { ExternalLink, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Raj Mobile Hub — Brand Identity",
    category: "Brand Identity",
    desc: "Complete brand overhaul including logo system, color palette, typography, and comprehensive brand guidelines for a leading mobile retail brand.",
    tags: ["Branding", "Logo", "Print"],
    color: "#2563EB",
    bgColor: "#1e3a8a",
    image: "https://images.unsplash.com/photo-1636051028886-0059ad2383c8?w=800&h=500&fit=crop&auto=format",
    // year: "2024",
  },
  {
    id: 2,
    title: "Amit Men's Wear — Visual Identity",
    category: "Brand Design",
    desc: "Seasonal lookbook design, catalogue layouts, and fashion brand visual identity that communicated premium quality and contemporary style.",
    tags: ["Fashion", "Catalogue", "Typography"],
    color: "#3B82F6",
    bgColor: "#1e3a8a",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format",
    // year: "2023",
  },
  {
    id: 3,
    title: "E-Commerce UI/UX Redesign",
    category: "UI/UX Design",
    desc: "End-to-end UX research and interface redesign for a retail e-commerce platform, increasing conversion by 40% through user-centered design principles.",
    tags: ["Figma", "UX Research", "Prototyping"],
    color: "#A259FF",
    bgColor: "#2d1458",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&auto=format",
    // year: "2024",
  },
  {
    id: 4,
    title: "Social Media Campaign Pack",
    category: "Social Media",
    desc: "300+ social media templates and animated assets for multi-platform campaigns spanning Instagram, Facebook, and YouTube.",
    tags: ["Social Media", "Motion", "Templates"],
    color: "#FF9A00",
    bgColor: "#4d2e00",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&auto=format",
    // year: "2023",
  },
  {
    id: 5,
    title: "Corporate Annual Report",
    category: "Print Design",
    desc: "48-page annual report design with infographics, data visualizations, and editorial layout that transformed complex data into compelling visual stories.",
    tags: ["InDesign", "Infographics", "Print"],
    color: "#10B981",
    bgColor: "#064e3b",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&auto=format",
    // year: "2022",
  },
  {
    id: 6,
    title: "Motion Graphics Showreel",
    category: "Motion Graphics",
    desc: "A curated showreel of animated brand spots, title sequences, and motion graphics pieces crafted in After Effects.",
    tags: ["After Effects", "Animation", "Motion"],
    color: "#9999FF",
    bgColor: "#1a1a4a",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop&auto=format",
    // year: "2024",
  },
];

const categories = ["All", "Brand Identity", "UI/UX Design", "Social Media", "Print Design", "Motion Graphics"];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl"
      style={{
        background: "rgba(15,15,25,0.9)",
        border: `1px solid ${project.color}22`,
        backdropFilter: "blur(20px)",
        perspective: "800px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }); }}
      onMouseMove={onMove}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          style={{ rotateX: mouse.y * 0.3, rotateY: mouse.x * 0.3 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, ${project.bgColor}dd 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          style={{ background: "rgba(5,5,5,0.7)", backdropFilter: "blur(10px)" }}
        >
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{
              background: project.color,
              color: "#F5F5F5",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <Eye size={14} /> View Case
          </button>
        </div>


      </div>

      {/* Content */}
      <div className="p-6">
        <div
          className="text-xs mb-3 px-3 py-1 rounded-full inline-block"
          style={{
            background: `${project.color}15`,
            color: project.color,
            fontFamily: "'Space Grotesk', sans-serif",
            border: `1px solid ${project.color}33`,
          }}
        >
          {project.category}
        </div>

        <h3
          className="mb-2"
          style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#F5F5F5",
          }}
        >
          {project.title}
        </h3>

        <p style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", lineHeight: 1.6 }}>
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "#9CA3AF",
                fontFamily: "'JetBrains Mono', monospace",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ border: `1px solid ${project.color}` }}
        animate={{ opacity: hovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function ProjectsSection() {
  const { ref, inView } = useInView(0.1);
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden" style={{ background: "#050505" }}>
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 0% 50%, rgba(37,99,235,0.08) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(59,130,246,0.06) 0%, transparent 50%)",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <SectionHeader label="Work" title="Featured Projects" inView={inView} />

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mt-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: active === cat ? "#2563EB" : "rgba(37,99,235,0.1)",
                color: active === cat ? "#F5F5F5" : "#9CA3AF",
                border: active === cat ? "none" : "1px solid rgba(37,99,235,0.2)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
