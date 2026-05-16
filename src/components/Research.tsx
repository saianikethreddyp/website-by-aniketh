"use client";

import { motion } from "framer-motion";
import { Users, BarChart2, GitBranch, Layers, Brain, Zap, Compass } from "lucide-react";
import { RevealLine, FadeUp } from "./AnimatedText";

const areas = [
  {
    icon: Users,
    title: "User Behavior",
    body: "We map how users actually move — not how teams assume they do. Heatmaps, session patterns, micro-frustrations. The data reveals what users won't say in an interview.",
    large: true,
    col: "lg:col-span-2",
  },
  {
    icon: BarChart2,
    title: "Competitor Analysis",
    body: "Where the market clusters signals where the gap lives.",
    large: false,
    col: "",
  },
  {
    icon: GitBranch,
    title: "Funnel Mapping",
    body: "Every drop-off point is a message. We decode what it's saying before building.",
    large: false,
    col: "",
  },
  {
    icon: Layers,
    title: "Product Strategy",
    body: "Features don't build great products. Clear thinking does. We connect the dots between user need, market position, and what's worth building.",
    large: true,
    col: "lg:col-span-2",
  },
  {
    icon: Brain,
    title: "Audience Psychology",
    body: "Motivations, hesitations, and the language that converts belief into action.",
    large: false,
    col: "",
  },
  {
    icon: Zap,
    title: "Conversion Friction",
    body: "Friction is invisible until it kills revenue. We surface it before it costs you.",
    large: false,
    col: "",
  },
  {
    icon: Compass,
    title: "Brand Perception",
    body: "How a brand makes someone feel in 6 seconds shapes every decision they make after.",
    large: false,
    col: "",
  },
];

export default function Research() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#060608]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <RevealLine delay={0.05} className="mb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/30" />
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-neutral-500">
              How We Think
            </span>
          </div>
        </RevealLine>

        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <RevealLine delay={0.12}>
              <h2
                className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold text-white leading-[1.02] tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                We study{" "}
                <span className="text-neutral-500">before</span>{" "}
                we build.
              </h2>
            </RevealLine>
          </div>
          <FadeUp delay={0.25} className="max-w-sm">
            <p className="text-neutral-500 leading-relaxed text-base lg:text-right">
              Every assumption is a potential failure point. Understanding
              is the only way to build something that works.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.07,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`glass-card rounded-2xl p-7 group hover:border-white/[0.14] hover:bg-white/[0.04] transition-colors duration-300 cursor-default ${area.col}`}
              >
                {area.large ? (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/8 transition-colors duration-300">
                      <Icon size={18} className="text-neutral-300" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold text-white mb-2"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {area.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed max-w-lg">
                        {area.body}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/8 transition-colors duration-300">
                      <Icon size={18} className="text-neutral-300" />
                    </div>
                    <h3
                      className="text-base font-semibold text-white mb-2"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {area.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {area.body}
                    </p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
