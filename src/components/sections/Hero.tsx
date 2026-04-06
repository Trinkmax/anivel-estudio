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
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Blueprint grid background with parallax */}
      <motion.div
        className="absolute inset-0 blueprint-grid"
        style={{ y: gridY }}
      />

      {/* Animated architectural lines */}
      <BlueprintLines className="opacity-60" />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <HouseOutline className="w-24 h-24 md:w-32 md:h-32 mb-8" />
        </motion.div>

        {/* Studio name */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.3em] text-anivel-black uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          A Nivel
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-xs md:text-sm tracking-[0.4em] uppercase text-anivel-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          Estudio de Arquitectura
        </motion.p>

        {/* Dimension line decoration */}
        <motion.div
          className="mt-8 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          <div className="w-12 h-px bg-anivel-300" />
          <span className="font-mono text-[10px] text-anivel-400 tracking-widest">
            ARQ. MILAGROS RIBONE
          </span>
          <div className="w-12 h-px bg-anivel-300" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-anivel-400 font-mono">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-anivel-300"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
