"use client";

import { motion } from "framer-motion";
import { RevealLine } from "./AnimatedText";

const principles = [
  {
    number: "01",
    title: "Building without validation.",
    body: "Most teams ship before understanding if anyone actually wants what they're building. Speed becomes the excuse. Waste becomes the outcome.",
  },
  {
    number: "02",
    title: "Scaling without systems.",
    body: "Traction without infrastructure is a growth ceiling, not a trajectory. What gets you to 1K users rarely gets you to 100K.",
  },
  {
    number: "03",
    title: "Weak positioning.",
    body: "When everything looks the same, the only differentiator left is price. Positioning is decided in the first 6 seconds — not the first meeting.",
  },
  {
    number: "04",
    title: "Ignoring user behavior.",
    body: "Analytics show what users do. Research reveals why. Most brands optimize clicks. The best ones engineer intent.",
  },
  {
    number: "05",
    title: "Poor retention thinking.",
    body: "Acquisition gets the glory. Retention builds the business. A leaky bucket filled faster is still a leaky bucket.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#060608]" id="about">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealLine delay={0.05}>
          <div className="flex items-center gap-3 mb-14">
            <span className="w-8 h-px bg-white/30" />
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-neutral-500">
              Philosophy
            </span>
          </div>
        </RevealLine>

        <div className="mb-20 max-w-4xl">
          <RevealLine delay={0.12}>
            <h2
              className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-white leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Most brands fail
            </h2>
          </RevealLine>
          <RevealLine delay={0.22}>
            <h2
              className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-tight gradient-text"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              before they begin.
            </h2>
          </RevealLine>
          <RevealLine delay={0.34}>
            <p className="mt-7 text-base lg:text-lg text-neutral-500 max-w-lg leading-relaxed">
              Not because of execution. Because of assumptions built on
              incomplete understanding.
            </p>
          </RevealLine>
        </div>

        <div>
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="group border-t border-white/[0.07] py-10 grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-12 items-start hover:border-white/[0.13] transition-colors duration-300"
            >
              <RevealLine delay={i * 0.04}>
                <span className="text-sm font-mono text-neutral-700 group-hover:text-neutral-400 transition-colors duration-300 mt-1 block">
                  {p.number}
                </span>
              </RevealLine>

              <div className="overflow-hidden">
                <motion.h3
                  initial={{ x: -16, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.04,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  }}
                  className="text-xl lg:text-2xl font-semibold text-white leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {p.title}
                </motion.h3>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: 0.2 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="text-neutral-500 leading-relaxed text-sm lg:text-base"
              >
                {p.body}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 pt-10 border-t border-white/[0.07] text-sm text-neutral-700 italic text-center max-w-sm mx-auto"
        >
          &ldquo;Growth is engineered through understanding — not hope.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
