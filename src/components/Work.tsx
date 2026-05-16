"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeUp } from "./AnimatedText";

const caseStudies = [
  {
    tag: "SaaS · Onboarding",
    title: "Activation redesign for a B2B analytics platform.",
    challenge: "Users were creating accounts but never activating past the free tier.",
    observation: "73% of drop-offs happened at the feature discovery step — users couldn't connect the product to their problem in time.",
    decision: "Rebuilt onboarding around the single 'aha moment.' Removed 7 of 9 steps. Replaced feature tours with outcome demonstrations.",
    outcome: "67% improvement in activation rate within 30 days of relaunch.",
    metric: "+67%",
    metricLabel: "activation rate",
    index: "01",
  },
  {
    tag: "D2C · Positioning",
    title: "Repositioning a supplement brand stuck at flat ROAS.",
    challenge: "High-intent paid traffic was arriving but not converting.",
    observation: "Landing pages described ingredients and certifications. Users buying supplements are buying a version of themselves — not a product.",
    decision: "Rebuilt all landing pages around life transformation narratives. Moved proof from specs to outcome stories.",
    outcome: "3.1× ROAS improvement. CAC dropped 48% in the same period.",
    metric: "3.1×",
    metricLabel: "ROAS",
    index: "02",
  },
  {
    tag: "B2B · Retention",
    title: "Reducing churn for a legal-tech SaaS with great reviews.",
    challenge: "Strong NPS scores but 30-day churn was quietly compounding.",
    observation: "Users didn't leave because the product was bad. They left because they couldn't tell which features solved their specific use case.",
    decision: "Added behavioral segmentation at signup. Personalized feature walkthroughs by use case. Reduced time-to-value by 60%.",
    outcome: "43% reduction in 30-day churn within 6 weeks.",
    metric: "−43%",
    metricLabel: "30-day churn",
    index: "03",
  },
];

export default function Work() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#060608]" id="work">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealLine delay={0.05} className="mb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/30" />
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-neutral-500">
              Selected Work
            </span>
          </div>
        </RevealLine>

        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <RevealLine delay={0.12}>
            <h2
              className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold text-white leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Thinking applied.
            </h2>
          </RevealLine>
          <FadeUp delay={0.25}>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed sm:text-right">
              Each outcome started with the same question: what does the data
              actually say?
            </p>
          </FadeUp>
        </div>

        <div className="flex flex-col gap-3">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="glass-card rounded-2xl p-8 lg:p-10 group hover:border-white/[0.13] hover:bg-white/[0.035] transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-700">{c.index}</span>
                  <span className="px-2.5 py-1 rounded-full text-xs border border-white/[0.08] text-neutral-500">
                    {c.tag}
                  </span>
                </div>
                <div className="text-right">
                  <motion.span
                    className="text-2xl font-bold text-white tabular-nums block"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    {c.metric}
                  </motion.span>
                  <p className="text-xs text-neutral-600">{c.metricLabel}</p>
                </div>
              </div>

              <h3
                className="text-xl lg:text-2xl font-semibold text-white mb-8 leading-snug max-w-2xl"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {c.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Challenge", text: c.challenge },
                  { label: "Observation", text: c.observation },
                  { label: "Decision", text: c.decision },
                  { label: "Outcome", text: c.outcome },
                ].map((block) => (
                  <div key={block.label}>
                    <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-neutral-600 mb-2 block">
                      {block.label}
                    </span>
                    <p className="text-sm text-neutral-400 leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-white/20 transition-all duration-300">
                  <ArrowUpRight size={14} className="text-neutral-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
