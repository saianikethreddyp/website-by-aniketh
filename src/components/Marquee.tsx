"use client";

import { motion } from "framer-motion";

const DEFAULT_ITEMS = [
  "Product Strategy",
  "Growth Systems",
  "SaaS Development",
  "Brand Positioning",
  "AI Automation",
  "Performance Marketing",
  "User Research",
  "Conversion Architecture",
  "Retention Engineering",
];

export default function Marquee({
  items = DEFAULT_ITEMS,
  speed = 35,
  direction = "left",
}: {
  items?: string[];
  speed?: number;
  direction?: "left" | "right";
}) {
  const duplicated = [...items, ...items, ...items];
  const xFrom = direction === "left" ? "0%" : "-33.333%";
  const xTo = direction === "left" ? "-33.333%" : "0%";

  return (
    <div className="relative py-5 border-y border-white/[0.06] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-[#060608] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-[#060608] to-transparent" />

      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: [xFrom, xTo] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      >
        {duplicated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-neutral-600 px-6 hover:text-neutral-400 transition-colors duration-200">
              {item}
            </span>
            <span className="text-white/20 text-xs">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
