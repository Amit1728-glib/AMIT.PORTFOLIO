import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./AboutSection";
import { Send, Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";

const socials = [
  { Icon: Instagram, label: "Instagram", color: "#E1306C", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", color: "#0A66C2", href: "#" },
  { Icon: Dribbble, label: "Dribbble", color: "#EA4C89", href: "#" },
  { Icon: Twitter, label: "Twitter/X", color: "#1DA1F2", href: "#" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "amit.agrahari@design.com", color: "#2563EB" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", color: "#10B981" },
  { icon: MapPin, label: "Location", value: "India", color: "#FF9A00" },
];

function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label
        className="absolute left-4 transition-all duration-300 pointer-events-none"
        style={{
          top: focused || value ? "8px" : "50%",
          transform: focused || value ? "translateY(0) scale(0.8)" : "translateY(-50%)",
          transformOrigin: "left",
          color: focused ? "#2563EB" : "#9CA3AF",
          fontSize: focused || value ? "0.7rem" : "0.9rem",
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full pt-6 pb-3 px-4 rounded-xl outline-none transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${focused ? "rgba(37,99,235,0.6)" : "rgba(255,255,255,0.08)"}`,
          color: "#F5F5F5",
          fontFamily: "'Space Grotesk', sans-serif",
          boxShadow: focused ? "0 0 20px rgba(37,99,235,0.15)" : "none",
        }}
      />
    </div>
  );
}

function FloatingTextarea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label
        className="absolute left-4 transition-all duration-300 pointer-events-none"
        style={{
          top: focused || value ? "12px" : "20px",
          color: focused ? "#2563EB" : "#9CA3AF",
          fontSize: focused || value ? "0.7rem" : "0.9rem",
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={5}
        className="w-full pt-8 pb-3 px-4 rounded-xl outline-none resize-none transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${focused ? "rgba(37,99,235,0.6)" : "rgba(255,255,255,0.08)"}`,
          color: "#F5F5F5",
          fontFamily: "'Space Grotesk', sans-serif",
          boxShadow: focused ? "0 0 20px rgba(37,99,235,0.15)" : "none",
        }}
      />
    </div>
  );
}

export function ContactSection() {
  const { ref, inView } = useInView(0.2);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden" style={{ background: "#070710" }}>
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.15) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <SectionHeader label="Contact" title="Let's Work Together" inView={inView} />

        <div className="mt-16 grid lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <p style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.8 }}>
              Ready to elevate your brand with exceptional design? I'd love to hear about your project. Let's create something extraordinary together.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: "rgba(10,10,20,0.8)",
                      border: `1px solid ${info.color}22`,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}15`, border: `1px solid ${info.color}33` }}
                    >
                      <Icon size={18} style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif" }}>
                        {info.label}
                      </div>
                      <div style={{ color: "#F5F5F5", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif" }}>
                Find me on
              </p>
              <div className="flex gap-4">
                {socials.map(({ Icon, label, color, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}33`,
                    }}
                    whileHover={{
                      scale: 1.15,
                      boxShadow: `0 0 20px ${color}44`,
                      borderColor: color,
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={label}
                  >
                    <Icon size={18} style={{ color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "rgba(10,10,20,0.8)",
                border: "1px solid rgba(37,99,235,0.2)",
                backdropFilter: "blur(30px)",
                boxShadow: "0 0 80px rgba(37,99,235,0.05)",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-64 gap-4 text-center"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.4)" }}
                  >
                    <Send size={32} style={{ color: "#2563EB" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Orbitron', monospace", color: "#F5F5F5", fontSize: "1.25rem" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#9CA3AF", fontFamily: "'Space Grotesk', sans-serif" }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-sm underline"
                    style={{ color: "#2563EB", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FloatingInput label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                    <FloatingInput label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                  </div>
                  <FloatingInput label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} required />
                  <FloatingTextarea label="Your Message" value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-3 py-4 px-8 rounded-xl text-sm tracking-widest uppercase font-medium"
                    style={{
                      background: loading ? "rgba(37,99,235,0.5)" : "linear-gradient(135deg, #2563EB, #1D4ED8)",
                      color: "#F5F5F5",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "0.15em",
                      boxShadow: "0 0 30px rgba(37,99,235,0.3)",
                    }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(37,99,235,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
