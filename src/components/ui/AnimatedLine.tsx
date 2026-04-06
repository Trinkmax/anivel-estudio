"use client";

import { motion } from "framer-motion";
import { drawLine } from "@/lib/animations";

interface AnimatedLineProps {
  d: string;
  delay?: number;
  duration?: number;
  strokeWidth?: number;
  className?: string;
  viewBox?: string;
}

export default function AnimatedLine({
  d,
  delay = 0,
  duration = 1.5,
  strokeWidth = 1,
  className = "",
  viewBox = "0 0 100 100",
}: AnimatedLineProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      className={className}
      preserveAspectRatio="none"
    >
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={delay}
        transition={{
          pathLength: { duration, delay, ease: "easeInOut" },
          opacity: { duration: 0.3, delay },
        }}
      />
    </svg>
  );
}
