import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return unsub;
  }, [scrollY]);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ backgroundColor: scrolled ? "rgba(5,5,5,0.9)" : "transparent" }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="absolute inset-0 border-b transition-opacity duration-500"
        style={{
          borderColor: "rgba(37,99,235,0.2)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          opacity: scrolled ? 1 : 0,
        }}
      />
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-white font-bold tracking-widest uppercase text-sm"
          style={{ fontFamily: "'Orbitron', monospace", letterSpacing: "0.3em" }}
          whileHover={{ scale: 1.05 }}
        >
          <span style={{ color: "#2563EB" }}>A</span>GRAHARI
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm tracking-widest uppercase transition-colors duration-300"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#9CA3AF",
                letterSpacing: "0.15em",
              }}
              whileHover={{ color: "#2563EB", y: -1 }}
            >
              {link.label}
            </motion.button>
          ))}
          <MagneticButton onClick={() => scrollTo("#contact")}>
            Hire Me
          </MagneticButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden absolute left-0 right-0 top-full px-6 pb-6 pt-2"
        style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(20px)" }}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        hidden={!open}
      >
        <div className="flex flex-col gap-4 pt-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#9CA3AF" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export function MagneticButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * 0.3, y: (e.clientY - cy) * 0.3 });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  const isPrimary = variant === "primary";

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="relative px-6 py-2.5 rounded-full text-sm tracking-widest uppercase overflow-hidden group"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        letterSpacing: "0.12em",
        background: isPrimary ? "#2563EB" : "transparent",
        color: "#F5F5F5",
        border: isPrimary ? "none" : "1px solid rgba(37,99,235,0.6)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative z-10">{children}</span>
      {isPrimary && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "linear-gradient(135deg,#3B82F6,#1D4ED8)" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
