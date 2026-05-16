"use client";

import { motion } from "framer-motion";
import { Rocket, Search, Package, Code2, BarChart3, Cpu } from "lucide-react";
import { RevealLine, FadeUp } from "./AnimatedText";

const differentiators = [
  {
    icon: Search,
    title: "Research before action.",
    body: "We don't start with deliverables. We start with questions. Understanding drives every decision that follows.",
  },
  {
    icon: Package,
    title: "Product thinking, not service delivery.",
    body: "We think in systems, not tasks. Each engagement is treated like a product problem — with ownership and outcomes.",
  },
  {
    icon: Rocket,
    title: "Startup fluency.",
    body: "We've built inside constraints. We understand what speed and clarity mean when runway matters and every decision compounds.",
  },
  {
    icon: Code2,
    title: "Speed without shortcuts.",
    body: "Fast execution doesn't mean cutting corners. It means knowing exactly what to build and building it right the first time.",
  },
  {
    icon: BarChart3,
    title: "Systems that scale.",
    body: "We don't just solve the immediate problem. We build infrastructure that makes the next 10x easier to achieve.",
  },
  {
    icon: Cpu,
    title: "Clarity over complexity.",
    body: "We translate ambiguity into direction. Complex problems become clear strategies. Noise becomes signal.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function WhyUs() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#060608]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealLine delay={0.05} className="mb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/30" />
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-neutral-500">
              Why AXIOM
            </span>
          </div>
        </RevealLine>

        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <RevealLine delay={0.12}>
              <h2
                className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold text-white leading-[1.02] tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Built for founders
              </h2>
            </RevealLine>
            <RevealLine delay={0.22}>
              <h2
                className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold leading-[1.02] tracking-tight gradient-text"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                who think differently.
              </h2>
            </RevealLine>
          </div>
          <FadeUp delay={0.3}>
            <p className="text-base text-neutral-500 max-w-sm leading-relaxed lg:text-right">
              Not an agency. Not a freelancer. A studio that thinks like a
              co-founder.
            </p>
          </FadeUp>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="glass-card rounded-2xl p-7 group hover:border-white/[0.14] hover:bg-white/[0.04] transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/8 transition-colors duration-300">
                  <Icon size={16} className="text-neutral-300" />
                </div>
                <h3
                  className="text-base font-semibold text-white mb-2.5 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {d.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{d.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
