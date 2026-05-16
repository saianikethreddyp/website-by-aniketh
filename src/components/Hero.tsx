"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import { RevealLine } from "./AnimatedText";

const capabilities = [
  "Product Strategy",
  "SaaS Development",
  "Brand Positioning",
  "Growth Systems",
  "AI Automation",
  "Performance Marketing",
  "UX Research",
];

function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const controls = animate(0, to, {
            duration,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            onUpdate: (v) => setValue(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration, started]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useSpring(mouseX, { damping: 50, stiffness: 120 });
  const orbY = useSpring(mouseY, { damping: 50, stiffness: 120 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 50);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 50);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#060608]"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Mouse-parallax ambient glow — white/gray instead of violet */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ x: orbX, y: orbY, top: "-20%", right: "-12%", width: 700, height: 700 }}
      >
        <div
          className="w-full h-full rounded-full animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 45%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Bottom-left glow */}
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Scroll-parallax text container */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full"
      >
        {/* Eyebrow */}
        <RevealLine delay={0.1}>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-white/30" />
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-neutral-500">
              Strategy-First Studio
            </span>
          </div>
        </RevealLine>

        {/* Headline — massive, BingeLabs scale */}
        <div className="mb-10 space-y-1">
          <RevealLine delay={0.18}>
            <h1
              className="text-[clamp(3rem,9vw,8.5rem)] font-bold text-white leading-[0.93] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Products don&apos;t
            </h1>
          </RevealLine>
          <RevealLine delay={0.3}>
            <h1
              className="text-[clamp(3rem,9vw,8.5rem)] font-bold leading-[0.93] tracking-tight gradient-text"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              scale by accident.
            </h1>
          </RevealLine>
        </div>

        {/* Divider line */}
        <RevealLine delay={0.42}>
          <div className="w-full h-px bg-white/[0.07] mb-10" />
        </RevealLine>

        {/* Two-column info block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <RevealLine delay={0.48}>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Growth is engineered through understanding — not assumptions.
              We map user behavior, decode market gaps, and build systems
              that compound. From brand positioning to product architecture,
              research-led and execution-ready.
            </p>
          </RevealLine>

          <RevealLine delay={0.56}>
            <div className="space-y-5">
              <p className="text-sm text-neutral-500 leading-relaxed">
                AXIOM is a research-driven digital growth studio for
                ambitious founders. We study before we build. We position
                before we launch. We optimize before we scale.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Most brands fail because they skip the hard thinking.
                We exist to do that thinking — then execute on it.
              </p>
            </div>
          </RevealLine>
        </div>

        {/* Capability tags */}
        <RevealLine delay={0.62}>
          <div className="flex flex-wrap gap-2 mb-10">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="px-3 py-1.5 text-xs rounded-full border border-white/10 text-neutral-500 hover:border-white/20 hover:text-neutral-300 transition-all duration-200"
              >
                {cap}
              </span>
            ))}
          </div>
        </RevealLine>

        {/* CTAs */}
        <RevealLine delay={0.68}>
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm"
              whileHover={{ scale: 1.03, backgroundColor: "#e5e5e5" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Start a Project
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.a>
            <motion.a
              href="#work"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/15 text-neutral-400 text-sm font-medium"
              whileHover={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              See Our Work
              <MoveRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.a>
          </div>
        </RevealLine>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 pt-10 border-t border-white/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { to: 50, suffix: "+", label: "Products Shipped" },
            { to: 3, suffix: "×", label: "Avg. Growth Rate" },
            { to: 12, suffix: "", label: "Industries Decoded" },
            { to: 8, suffix: " yrs", label: "Studio Experience" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <span
                className="text-2xl lg:text-3xl font-bold text-white tabular-nums"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <CountUp to={s.to} suffix={s.suffix} />
              </span>
              <span className="text-xs text-neutral-600 tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
        />
        <span className="text-[10px] tracking-[0.22em] uppercase text-neutral-700">
          Scroll
        </span>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none bg-gradient-to-t from-[#060608] to-transparent z-20" />
    </section>
  );
}
