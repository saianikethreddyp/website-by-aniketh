"use client";

import { motion } from "framer-motion";
import React from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Reveals children by sliding up from an overflow-hidden clip
export function RevealLine({
  children,
  delay = 0,
  duration = 0.95,
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once, margin: "-20px" }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Splits text into words, stagger-reveals each from an overflow clip
export function RevealWords({
  text,
  className = "",
  delay = 0,
  stagger = 0.055,
  duration = 0.75,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: EASE,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

// Simple fade + translate up
export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  distance = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
