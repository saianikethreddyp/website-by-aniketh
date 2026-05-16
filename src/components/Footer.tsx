"use client";

import { motion } from "framer-motion";
import { X, Link, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#060608] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xs"
          >
            <a href="#" className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-white/50" />
              <span
                className="font-bold text-sm tracking-[0.14em] text-white/70"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                AXIOM
              </span>
            </a>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Growth is engineered through understanding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-neutral-600 hover:text-neutral-200 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-neutral-600 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <X size={13} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-neutral-600 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <Link size={13} />
            </a>
            <a
              href="mailto:hello@axiom.studio"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-200 transition-colors duration-200"
            >
              hello@axiom.studio
              <ArrowUpRight size={12} />
            </a>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-neutral-700">
            © {new Date().getFullYear()} AXIOM. All rights reserved.
          </p>
          <p className="text-xs text-neutral-700">
            Digital Strategy &amp; Growth Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
