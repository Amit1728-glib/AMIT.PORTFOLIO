import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./AboutSection";
import { Eye } from "lucide-react";

const projects = [
 {
  id: 1,
  title: "BRAND IDENTITY",
  category: "Brand Identity",
  desc: "Complete brand overhaul including logo system, color palette, typography, and comprehensive brand guidelines for a leading mobile retail brand.",
  tags: ["Branding", "Logo", "Print"],
  color: "#2563EB",

  link: "https://drive.google.com/drive/folders/1wkc905P16YVogBJdRASr7MUcxz5AiAdb?usp=sharing",

  image:
    "https://i.pinimg.com/736x/b3/4d/ef/b34def81c0b78a0fe390984aee669d48.jpg",
},

  {
    id: 2,
    title: "UI-UX DESIGN",
    category: "UI/UX Design",
    desc: "Seasonal lookbook design, catalogue layouts, and fashion brand visual identity that communicated premium quality and contemporary style.",
    tags: ["Fashion", "Catalogue", "Typography"],
    color: "#2563EB",
    // bgColor: "#1e3a8a",
    link: "https://www.figma.com/design/CXiDK3q0L95e7ghnpVZvjh/maxican-food-app?node-id=0-1&t=lgovuWFyePcwFVtG-1",
    image:
      "https://i.pinimg.com/736x/3c/a2/8b/3ca28b8d9c7741583c365780f551220f.jpg",
  },

  {
    id: 3,
    title: "SOCIAL MEDIA POST",
    category: "Social Media",
    desc: "End-to-end UX research and interface redesign for a retail e-commerce platform, increasing conversion by 40% through user-centered design principles.",
    tags: ["Figma", "UX Research", "Prototyping"],
    color: "#2563EB",
    // bgColor: "#2d1458",
    link: "https://drive.google.com/drive/folders/1zI0Be73i6_C7YkDWpPruc6RpbpObFECN?usp=sharing",
    image:
      "https://i.pinimg.com/736x/9a/d7/7c/9ad77c1ef8e05e9d9641e0ac1b6d4b3d.jpg",
  },

  {
    id: 4,
    title: "PRINT DESIGN",
    category: "Print Design",
    desc: "300+ social media templates and animated assets for multi-platform campaigns spanning Instagram, Facebook, and YouTube.",
    tags: ["Social Media", "Motion", "Templates"],
    color: "#2563EB",
    // bgColor: "#4d2e00",
    link: "https://drive.google.com/drive/folders/1Tkw2ZU9Jay8CyDdZfDMyw7CeCD6w26MF?usp=sharing",
    image:
      "https://i.pinimg.com/736x/c9/00/8d/c9008dceeaca4f19acd36edc8ebfcd12.jpg",
  },

  // {
  //   id: 5,
  //   title: "CORPORATE ANNUAL REPORT",
  //   category: "Print Design",
  //   desc: "48-page annual report design with infographics, data visualizations, and editorial layout that transformed complex data into compelling visual stories.",
  //   tags: ["InDesign", "Infographics", "Print"],
  //   color: "#10B981",
  //   bgColor: "#064e3b",
  //   image:
  //     "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&auto=format",
  // },
   {
  id: 5,
  title: "LOGO DESIGN",
  category: "Logo Design",
  desc: "Creative and memorable logo designs crafted to build strong brand identities and create a lasting visual impression.",
  tags: ["Logo Design", "Branding", "Illustrator"],
  color: "#2563EB",
  link: "https://drive.google.com/drive/folders/1p4_2jZeVOCe7INehUQ-G5Kt6BZ007-Gl?usp=sharing",
  image:
    "https://i.pinimg.com/736x/b4/20/71/b42071c4cb7dd758ea6bcb0c789b6539.jpg",
},
];

const categories = [
  "All",
  "Brand Identity",
  "UI/UX Design",
  "Social Media",
  "Print Design",
   "Logo Design",
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
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
  exit={{ opacity: 0, y: 60 }}
  transition={{
    duration: 0.7,
    delay: index * 0.1,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="relative group cursor-pointer overflow-hidden rounded-2xl"

  onClick={() => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  }}

  style={{
    background: "#ffffff",
    border: "1px solid rgba(15,23,42,0.06)",
    perspective: "800px",
  }}
>
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: "220px" }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: hovered ? 1.1 : 1,
            rotateX: mouse.y * 0.3,
            rotateY: mouse.x * 0.3,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 40%,
              ${project.bgColor}dd 100%
            )`,
          }}
        />

        {/* View Case Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(6px)",
          }}
        >
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{
              background: project.color,
              color: "#FFFFFF",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <Eye size={14} />
            View Case
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
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

        {/* Title */}
        <h3
          className="mb-2"
          style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#000000",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: "#000000",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.6,
          }}
        >
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded"
              style={{
                background: "rgba(15,23,42,0.04)",
                color: "#1F2937",
                fontFamily: "'JetBrains Mono', monospace",
                border: "1px solid rgba(15,23,42,0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: `1px solid ${project.color}`,
        }}
        animate={{
          opacity: hovered ? 0.4 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  );
}

export function ProjectsSection() {
  const { ref, inView } = useInView(0.1);

  const [active, setActive] = useState("All");

  // FILTER LOGIC
  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: "#ffffff",
      }}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(37,99,235,0.08) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(59,130,246,0.06) 0%, transparent 50%)",
        }}
      />

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <SectionHeader
          label="Work"
          title="Featured Projects"
          inView={inView}
        />

        {/* Filter Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="flex flex-wrap gap-3 justify-center mt-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",

                background:
                  active === cat
                    ? "#2563EB"
                    : "rgba(37,99,235,0.1)",

                color:
                  active === cat
                    ? "#F5F5F5"
                    : "#9CA3AF",

                border:
                  active === cat
                    ? "none"
                    : "1px solid rgba(37,99,235,0.2)",

                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}