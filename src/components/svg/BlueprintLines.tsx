"use client";

import { motion } from "framer-motion";
import { drawLine } from "@/lib/animations";

export default function BlueprintLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      fill="none"
      className={`absolute inset-0 w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Floor plan lines - architectural feel */}
      {/* Horizontal main lines */}
      <motion.line
        x1="50" y1="200" x2="400" y2="200"
        stroke="#d4d4d4" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={0.2}
      />
      <motion.line
        x1="800" y1="200" x2="1150" y2="200"
        stroke="#d4d4d4" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={0.4}
      />

      {/* Vertical structural lines */}
      <motion.line
        x1="200" y1="100" x2="200" y2="350"
        stroke="#d4d4d4" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={0.6}
      />
      <motion.line
        x1="1000" y1="450" x2="1000" y2="700"
        stroke="#d4d4d4" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={0.8}
      />

      {/* Dimension lines with serifs */}
      <motion.path
        d="M 100 600 L 500 600 M 100 590 L 100 610 M 500 590 L 500 610"
        stroke="#e5e5e5" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={1.0}
      />
      <motion.path
        d="M 700 150 L 700 400 M 690 150 L 710 150 M 690 400 L 710 400"
        stroke="#e5e5e5" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={1.2}
      />

      {/* Corner detail - bottom right */}
      <motion.path
        d="M 1050 550 L 1150 550 L 1150 650"
        stroke="#d4d4d4" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={1.4}
      />

      {/* Corner detail - top left */}
      <motion.path
        d="M 50 100 L 50 50 L 150 50"
        stroke="#d4d4d4" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={0.3}
      />

      {/* Angle mark */}
      <motion.path
        d="M 50 350 L 100 350 L 100 300"
        stroke="#e5e5e5" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={1.6}
      />

      {/* Diagonal reference */}
      <motion.line
        x1="900" y1="100" x2="1100" y2="250"
        stroke="#e5e5e5" strokeWidth="0.3"
        strokeDasharray="4 4"
        variants={drawLine} initial="hidden" animate="visible" custom={1.8}
      />
    </svg>
  );
}
