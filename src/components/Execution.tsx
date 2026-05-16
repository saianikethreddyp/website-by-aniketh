"use client";

import { motion } from "framer-motion";
import { Layers2, TrendingUp, Megaphone, Bot } from "lucide-react";
import { RevealLine, FadeUp } from "./AnimatedText";

const capabilities = [
  {
    icon: Layers2,
    metric: "↓ 40%",
    metricLabel: "avg. drop-off",
    headline: "Interfaces designed to reduce hesitation.",
    body: "Every click, scroll, and pause is a decision point. We build products that guide users toward action without friction.",
  },
  {
    icon: TrendingUp,
    metric: "3×",
    metricLabel: "avg. growth",
    headline: "Systems engineered for measurable growth.",
    body: "Infrastructure that scales. Automation that removes overhead. Data pipelines that surface what actually moves the needle.",
  },
  {
    icon: Megaphone,
    metric: "↑ 60%",
    metricLabel: "recall rate",
    headline: "Positioning built for instant recognition.",
    body: "Messaging that lands in 6 seconds. Brands that own a corner of the mind. Clarity that converts visitors into believers.",
  },
  {
    icon: Bot,
    metric: "↑ 2.8×",
    metricLabel: "funnel efficiency",
    headline: "Funnels designed to convert, not leak.",
    body: "Paid, organic, or referral — traffic without a system is just noise. We build the path from first touch to retained customer.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Execution() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#060608]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <RevealLine delay={0.05} className="mb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/30" />
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-neutral-500">
              What We Build
            </span>
          </div>
        </RevealLine>

        <div className="mb-16">
          <RevealLine delay={0.12}>
            <h2
              className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold text-white leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Precision execution.
            </h2>
          </RevealLine>
          <RevealLine delay={0.22}>
            <h2
              className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold leading-[1.02] tracking-tight gradient-text"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Measurable outcomes.
            </h2>
          </RevealLine>
          <FadeUp delay={0.35}>
            <p className="mt-6 text-base text-neutral-500 max-w-xl leading-relaxed">
              We don&apos;t sell services. We engineer outcomes across the
              layers that move the business.
            </p>
          </FadeUp>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.headline}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="glass-card rounded-2xl p-8 group hover:border-white/[0.14] hover:bg-white/[0.04] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/8 transition-colors duration-300">
                    <Icon size={18} className="text-neutral-300" />
                  </div>
                  <div className="text-right">
                    <span
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {c.metric}
                    </span>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      {c.metricLabel}
                    </p>
                  </div>
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {c.headline}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {c.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
