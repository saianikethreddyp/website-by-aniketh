"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { RevealLine } from "./AnimatedText";

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-48 bg-[#060608] overflow-hidden"
      id="contact"
    >
      {/* Pulsing glow — white/gray */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[900px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center"
      >
        <RevealLine delay={0.05}>
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-8 h-px bg-white/25" />
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-neutral-500">
              Let&apos;s Build
            </span>
            <span className="w-8 h-px bg-white/25" />
          </div>
        </RevealLine>

        <div className="mb-8">
          <RevealLine delay={0.15}>
            <h2
              className="text-[clamp(2.8rem,8vw,7.5rem)] font-bold text-white leading-[0.93] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Most products
            </h2>
          </RevealLine>
          <RevealLine delay={0.27}>
            <h2
              className="text-[clamp(2.8rem,8vw,7.5rem)] font-bold leading-[0.93] tracking-tight gradient-text"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              fail quietly.
            </h2>
          </RevealLine>
        </div>

        <RevealLine delay={0.38}>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed mb-10">
            Not from bad ideas. From building without understanding.
            Let&apos;s change that.
          </p>
        </RevealLine>

        <RevealLine delay={0.46}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="mailto:hello@axiom.studio"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-base"
              whileHover={{ scale: 1.04, backgroundColor: "#e5e5e5" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Start a Project
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.a>
            <motion.a
              href="mailto:hello@axiom.studio"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/15 text-neutral-400 font-medium text-base"
              whileHover={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar size={16} />
              Book a 15-min Call
            </motion.a>
          </div>
        </RevealLine>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 text-xs text-neutral-700 tracking-wide"
        >
          No retainers. No fluff. Direct work with the team thinking about your
          growth.
        </motion.p>
      </motion.div>
    </section>
  );
}
