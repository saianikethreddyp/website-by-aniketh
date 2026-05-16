"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealLine, FadeUp } from "./AnimatedText";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We start where most skip. Deep discovery of users, markets, competitors, and context. No assumptions. Only evidence.",
    detail: "User research · Market mapping · Audience analysis",
  },
  {
    number: "02",
    title: "Decode",
    description: "Raw data becomes insight. We identify the exact gaps, friction points, and untapped leverage that shape the strategy.",
    detail: "Funnel analysis · Pattern recognition · Strategic framing",
  },
  {
    number: "03",
    title: "Build",
    description: "Execution informed by understanding. Products, systems, and interfaces built with precision — not guesswork.",
    detail: "Product engineering · Brand systems · Growth infrastructure",
  },
  {
    number: "04",
    title: "Optimize",
    description: "We measure what matters and iterate relentlessly. Conversion, retention, performance — tuned until the system hums.",
    detail: "A/B testing · Analytics · Performance loops",
  },
  {
    number: "05",
    title: "Scale",
    description: "Growth infrastructure built to compound. Automation, systems, and positioning that make scaling the natural outcome.",
    detail: "Automation · Paid systems · Retention engines",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-40 bg-[#060608]" id="process">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <RevealLine delay={0.05} className="mb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/30" />
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-neutral-500">
              The Process
            </span>
          </div>
        </RevealLine>

        <div className="mb-20">
          <RevealLine delay={0.12}>
            <h2
              className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold text-white leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              How understanding
            </h2>
          </RevealLine>
          <RevealLine delay={0.22}>
            <h2
              className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold leading-[1.02] tracking-tight gradient-text"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              becomes outcomes.
            </h2>
          </RevealLine>
        </div>

        <div className="relative">
          {/* Scroll-animated vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 hidden md:block">
            <div className="w-px h-full bg-white/[0.05]" />
            <motion.div
              className="absolute top-0 left-0 w-px bg-gradient-to-b from-white/60 to-white/10"
              style={{ height: lineH }}
            />
          </div>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="group relative flex gap-8 items-start py-10 border-b border-white/[0.06] last:border-0 hover:border-white/[0.1] transition-colors duration-300"
              >
                {/* Circle */}
                <motion.div
                  className="shrink-0 relative z-10"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-[54px] h-[54px] rounded-full border border-white/[0.09] bg-[#060608] flex items-center justify-center group-hover:border-white/25 group-hover:bg-white/[0.04] transition-all duration-300">
                    <span
                      className="text-sm font-bold text-neutral-600 group-hover:text-neutral-200 transition-colors duration-300 tabular-nums"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                <div className="flex-1 pt-2 md:flex md:gap-12 md:items-start">
                  <div className="md:w-44 shrink-0 mb-4 md:mb-0">
                    <h3
                      className="text-2xl lg:text-3xl font-bold text-white"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-neutral-400 leading-relaxed mb-3 text-sm lg:text-base">
                      {step.description}
                    </p>
                    <span className="text-[11px] text-neutral-600 tracking-wider">
                      {step.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
