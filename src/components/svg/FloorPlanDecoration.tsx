"use client";

import { motion } from "framer-motion";
import { drawLine } from "@/lib/animations";

export default function FloorPlanDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 200"
      fill="none"
      className={`w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Partial floor plan that acts as a section transition */}

      {/* Main horizontal structure */}
      <motion.path
        d="M 100 100 L 400 100 L 400 50 L 600 50 L 600 100 L 800 100"
        stroke="#d4d4d4" strokeWidth="0.8"
        variants={drawLine} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={0}
      />

      {/* Right extension */}
      <motion.path
        d="M 800 100 L 800 60 L 950 60 L 950 100 L 1100 100"
        stroke="#d4d4d4" strokeWidth="0.8"
        variants={drawLine} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={0.3}
      />

      {/* Interior walls */}
      <motion.line
        x1="500" y1="50" x2="500" y2="100"
        stroke="#e5e5e5" strokeWidth="0.5"
        variants={drawLine} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={0.6}
      />

      {/* Door arcs */}
      <motion.path
        d="M 400 100 A 30 30 0 0 0 430 100"
        stroke="#d4d4d4" strokeWidth="0.4"
        variants={drawLine} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={0.8}
      />
      <motion.path
        d="M 800 100 A 25 25 0 0 1 825 100"
        stroke="#d4d4d4" strokeWidth="0.4"
        variants={drawLine} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={1.0}
      />

      {/* Dimension line below */}
      <motion.path
        d="M 100 150 L 1100 150 M 100 143 L 100 157 M 1100 143 L 1100 157"
        stroke="#e5e5e5" strokeWidth="0.3"
        variants={drawLine} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={1.2}
      />

      {/* Window marks */}
      {[250, 700, 875].map((x, i) => (
        <motion.g key={x}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 + i * 0.2 }}
        >
          <line x1={x - 15} y1="100" x2={x - 15} y2="92" stroke="#d4d4d4" strokeWidth="0.4" />
          <line x1={x + 15} y1="100" x2={x + 15} y2="92" stroke="#d4d4d4" strokeWidth="0.4" />
          <line x1={x - 15} y1="96" x2={x + 15} y2="96" stroke="#d4d4d4" strokeWidth="0.3" />
        </motion.g>
      ))}
    </svg>
  );
}
