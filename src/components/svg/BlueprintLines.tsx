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
      {/* === FLOOR PLAN FRAGMENTS === */}

      {/* Top-left room outline */}
      <motion.path
        d="M 80 120 L 280 120 L 280 300 L 180 300"
        stroke="#d4d4d4" strokeWidth="0.8"
        variants={drawLine} initial="hidden" animate="visible" custom={0.2}
      />
      {/* Door arc */}
      <motion.path
        d="M 180 300 A 40 40 0 0 1 180 260"
        stroke="#d4d4d4" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={0.8}
      />
      {/* Window marks on wall */}
      <motion.path
        d="M 140 120 L 140 112 M 140 120 L 140 128 M 200 120 L 200 112 M 200 120 L 200 128"
        stroke="#d4d4d4" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={1.0}
      />

      {/* Bottom-right room fragment */}
      <motion.path
        d="M 900 500 L 1100 500 L 1100 680 L 900 680 Z"
        stroke="#e5e5e5" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={0.5}
      />
      {/* Interior wall */}
      <motion.line
        x1="1000" y1="500" x2="1000" y2="600"
        stroke="#e5e5e5" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={0.9}
      />

      {/* === DIMENSION LINES === */}

      {/* Horizontal dimension - top */}
      <motion.path
        d="M 80 80 L 280 80 M 80 72 L 80 88 M 280 72 L 280 88"
        stroke="#e5e5e5" strokeWidth="0.4"
        variants={drawLine} initial="hidden" animate="visible" custom={1.2}
      />
      {/* Dimension text mark */}
      <motion.circle cx="180" cy="80" r="1.5" fill="#e5e5e5"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
      />

      {/* Vertical dimension - right side */}
      <motion.path
        d="M 1140 500 L 1140 680 M 1132 500 L 1148 500 M 1132 680 L 1148 680"
        stroke="#e5e5e5" strokeWidth="0.4"
        variants={drawLine} initial="hidden" animate="visible" custom={1.4}
      />

      {/* === STRUCTURAL AXES === */}

      {/* Axis lines with circle markers (typical in architectural plans) */}
      <motion.line
        x1="500" y1="50" x2="500" y2="200"
        stroke="#e5e5e5" strokeWidth="0.3" strokeDasharray="8 4"
        variants={drawLine} initial="hidden" animate="visible" custom={0.6}
      />
      <motion.circle cx="500" cy="40" r="12" stroke="#e5e5e5" strokeWidth="0.4" fill="none"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, duration: 0.4 }}
      />

      <motion.line
        x1="700" y1="600" x2="700" y2="760"
        stroke="#e5e5e5" strokeWidth="0.3" strokeDasharray="8 4"
        variants={drawLine} initial="hidden" animate="visible" custom={0.7}
      />
      <motion.circle cx="700" cy="770" r="12" stroke="#e5e5e5" strokeWidth="0.4" fill="none"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.4 }}
      />

      {/* === ELEVATION MARKS === */}

      {/* Level mark - triangle with line */}
      <motion.path
        d="M 850 150 L 860 140 L 870 150 M 860 140 L 860 100"
        stroke="#d4d4d4" strokeWidth="0.5"
        variants={drawLine} initial="hidden" animate="visible" custom={1.6}
      />

      {/* North arrow simplified */}
      <motion.path
        d="M 1120 120 L 1120 60 M 1120 60 L 1115 72 M 1120 60 L 1125 72"
        stroke="#d4d4d4" strokeWidth="0.6"
        variants={drawLine} initial="hidden" animate="visible" custom={1.8}
      />

      {/* === CORNER ANGLE MARKS === */}

      {/* 90-degree angle marker */}
      <motion.path
        d="M 280 280 L 280 300 L 260 300"
        stroke="#e5e5e5" strokeWidth="0.4"
        variants={drawLine} initial="hidden" animate="visible" custom={1.3}
      />
      <motion.path
        d="M 900 500 L 920 500 L 920 520"
        stroke="#e5e5e5" strokeWidth="0.4"
        variants={drawLine} initial="hidden" animate="visible" custom={1.5}
      />

      {/* === SCATTERED CROSS MARKS (survey points) === */}
      {[
        [400, 400], [600, 250], [750, 450], [350, 600], [950, 300],
      ].map(([x, y], i) => (
        <motion.g key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 2.0 + i * 0.2, duration: 0.3 }}
        >
          <line x1={x - 5} y1={y} x2={x + 5} y2={y} stroke="#0a0a0a" strokeWidth="0.4" />
          <line x1={x} y1={y - 5} x2={x} y2={y + 5} stroke="#0a0a0a" strokeWidth="0.4" />
        </motion.g>
      ))}

      {/* === STAIR SYMBOL === */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i}
            x1={50 + i * 12} y1={500}
            x2={50 + i * 12} y2={540}
            stroke="#0a0a0a" strokeWidth="0.4"
          />
        ))}
        <line x1="50" y1="500" x2="110" y2="500" stroke="#0a0a0a" strokeWidth="0.4" />
        <line x1="50" y1="540" x2="110" y2="540" stroke="#0a0a0a" strokeWidth="0.4" />
        {/* Arrow */}
        <path d="M 60 520 L 100 520 M 95 515 L 100 520 L 95 525" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
      </motion.g>
    </svg>
  );
}
