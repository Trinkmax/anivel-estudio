"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import SectionDivider from "@/components/ui/SectionDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionDivider label="Portfolio" className="mb-16" />

        <RevealOnScroll variant="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.15em] uppercase text-anivel-black text-center mb-16">
            Proyectos
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <RevealOnScroll key={item.title} variant="fade-up" delay={i * 0.1}>
              <motion.div
                className="group relative aspect-[4/3] bg-anivel-100 overflow-hidden cursor-pointer border border-anivel-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Placeholder pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Diagonal lines pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
                    <pattern id={`diag-${i}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="20" stroke="#737373" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#diag-${i})`} />
                  </svg>

                  {/* Camera icon placeholder */}
                  <svg className="w-12 h-12 text-anivel-300" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 48 48">
                    <rect x="4" y="10" width="40" height="28" rx="3" />
                    <circle cx="24" cy="24" r="8" />
                    <circle cx="24" cy="24" r="4" />
                    <rect x="18" y="6" width="12" height="6" rx="1" />
                  </svg>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-anivel-black/0 group-hover:bg-anivel-black/80 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="font-mono text-[10px] text-anivel-400 tracking-widest uppercase">
                      {item.category} &middot; {item.year}
                    </span>
                    <h3 className="text-lg font-semibold tracking-[0.1em] text-white uppercase mt-1">
                      {item.title}
                    </h3>
                    <div className="mt-3 w-8 h-px bg-white/40" />
                  </div>
                </div>

                {/* Corner marks */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-anivel-300/50" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-anivel-300/50" />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* "More coming soon" note */}
        <RevealOnScroll variant="fade-up" delay={0.4}>
          <p className="text-center mt-12 font-mono text-xs text-anivel-400 tracking-widest uppercase">
            Proximamente mas proyectos
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
