"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  const springCfg = { damping: 22, stiffness: 500, mass: 0.4 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      setHovering(!!(e.target as HTMLElement).closest("a, button, [data-cursor]"));
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Precise dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        animate={{
          opacity: hidden ? 0 : 1,
          scale: hovering ? 2 : 1,
          backgroundColor: hovering ? "#ffffff" : "#d4d4d4",
        }}
        transition={{ duration: 0.15 }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
        }}
      />

      {/* Spring ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-white/20"
        animate={{
          width: hovering ? 44 : 30,
          height: hovering ? 44 : 30,
          opacity: hidden ? 0 : hovering ? 0.8 : 0.4,
          borderColor: hovering ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
