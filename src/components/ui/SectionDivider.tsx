"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export default function SectionDivider({ label, className = "" }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-2 ${className}`}>
      <motion.div
        className="h-px flex-1 max-w-32 bg-anivel-300"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      {label && (
        <span className="font-mono text-xs text-anivel-400 tracking-widest uppercase">
          {label}
        </span>
      )}
      <motion.div
        className="h-px flex-1 max-w-32 bg-anivel-300"
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  );
}
