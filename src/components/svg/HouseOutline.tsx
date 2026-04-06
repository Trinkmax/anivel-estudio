"use client";

import { motion } from "framer-motion";
import { drawLine } from "@/lib/animations";

export default function HouseOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
    >
      {/* Recreating the A Nivel logo shape - house/level form */}
      {/* Main thick stroke - roof angle and vertical */}
      <motion.path
        d="M 60 140 L 60 60 L 120 20 L 120 80"
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
        variants={drawLine}
        initial="hidden"
        animate="visible"
        custom={0.3}
      />
      {/* Bottom horizontal line - thin */}
      <motion.line
        x1="30" y1="140" x2="150" y2="140"
        stroke="#0a0a0a"
        strokeWidth="1.5"
        variants={drawLine}
        initial="hidden"
        animate="visible"
        custom={0.8}
      />
      {/* Right vertical connector - thin */}
      <motion.line
        x1="120" y1="80" x2="150" y2="80"
        stroke="#0a0a0a"
        strokeWidth="1.5"
        variants={drawLine}
        initial="hidden"
        animate="visible"
        custom={1.0}
      />
      <motion.line
        x1="150" y1="80" x2="150" y2="140"
        stroke="#0a0a0a"
        strokeWidth="1.5"
        variants={drawLine}
        initial="hidden"
        animate="visible"
        custom={1.2}
      />
    </svg>
  );
}
