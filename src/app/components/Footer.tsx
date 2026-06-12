import { motion } from "motion/react";

export function Footer() {
  return (
    <footer
      className="relative py-10 px-6 text-center overflow-hidden"
      style={{ background: "#050505", borderTop: "1px solid rgba(37,99,235,0.15)" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 60%)" }}
      />
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div
          style={{ fontFamily: "'Orbitron', monospace", color: "#F5F5F5", fontWeight: 700, letterSpacing: "0.2em", fontSize: "0.9rem" }}
        >
          <span style={{ color: "#2563EB" }}>A</span>GRAHARI
        </div>
        <p style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem" }}>
          © 2024 Amit Agrahari. Crafted with precision &amp; passion.
        </p>
        <div
          className="px-3 py-1.5 rounded-full text-xs"
          style={{
            background: "rgba(37,99,235,0.1)",
            border: "1px solid rgba(37,99,235,0.3)",
            color: "#9CA3AF",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Design · UI/UX · Brand
        </div>
      </div>
    </footer>
  );
}
