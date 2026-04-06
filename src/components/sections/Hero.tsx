"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BlueprintLines from "@/components/svg/BlueprintLines";
import HouseOutline from "@/components/svg/HouseOutline";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Blueprint grid background with parallax */}
      <motion.div
        className="absolute inset-0 blueprint-grid"
        style={{ y: gridY }}
      />

      {/* Animated architectural lines - hidden on very small screens for performance */}
      <BlueprintLines className="opacity-60 hidden sm:block" />

      {/* Simplified mobile blueprint lines */}
      <svg
        className="absolute inset-0 w-full h-full sm:hidden opacity-30"
        viewBox="0 0 400 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M 30 100 L 120 100 L 120 250"
          stroke="#d4d4d4" strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.path
          d="M 280 600 L 370 600 L 370 700 L 320 700"
          stroke="#d4d4d4" strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        <motion.path
          d="M 350 150 L 350 100 M 345 100 L 355 100 M 345 150 L 355 150"
          stroke="#e5e5e5" strokeWidth="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.path
          d="M 20 680 L 20 700 L 40 700"
          stroke="#d4d4d4" strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </svg>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <HouseOutline className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-6 sm:mb-8" />
        </motion.div>

        {/* Studio name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-anivel-black uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          A Nivel
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base tracking-[0.3em] sm:tracking-[0.4em] uppercase text-anivel-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          Estudio de Arquitectura
        </motion.p>

        {/* Dimension line decoration */}
        <motion.div
          className="mt-6 sm:mt-8 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          <div className="w-10 sm:w-14 h-px bg-anivel-300" />
          <span className="font-mono text-[10px] sm:text-xs text-anivel-400 tracking-widest whitespace-nowrap">
            ARQ. MILAGROS RIBONE
          </span>
          <div className="w-10 sm:w-14 h-px bg-anivel-300" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.6 }}
      >
        <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-anivel-400 font-mono">
          Scroll
        </span>
        <motion.div
          className="w-px h-6 sm:h-8 bg-anivel-300"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
