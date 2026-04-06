"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import SectionDivider from "@/components/ui/SectionDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { drawLine } from "@/lib/animations";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background blueprint fragment - hidden on mobile */}
      <svg className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.04] pointer-events-none hidden sm:block" viewBox="0 0 300 300" fill="none">
        <path d="M 20 280 L 20 20 L 280 20" stroke="#0a0a0a" strokeWidth="1" />
        <path d="M 20 150 L 150 150 L 150 20" stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="6 4" />
        <circle cx="150" cy="150" r="60" stroke="#0a0a0a" strokeWidth="0.3" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionDivider label="Portfolio" className="mb-10 sm:mb-16" />

        <RevealOnScroll variant="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-anivel-black text-center mb-10 sm:mb-16">
            Proyectos
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <RevealOnScroll key={item.title} variant="fade-up" delay={i * 0.08}>
              <motion.div
                className="group relative aspect-[4/3] bg-anivel-100 overflow-hidden cursor-pointer border border-anivel-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Blueprint placeholder pattern */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                  {/* Grid */}
                  <pattern id={`grid-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="40" x2="40" y2="40" stroke="#e5e5e5" strokeWidth="0.3" />
                    <line x1="40" y1="0" x2="40" y2="40" stroke="#e5e5e5" strokeWidth="0.3" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#grid-${i})`} />

                  {/* Mini floor plan placeholder */}
                  <g opacity="0.15" transform={`translate(${100 + (i % 3) * 20}, ${80 + (i % 2) * 20})`}>
                    <rect x="0" y="0" width="200" height="140" stroke="#0a0a0a" strokeWidth="0.8" fill="none" />
                    <line x1="80" y1="0" x2="80" y2="140" stroke="#0a0a0a" strokeWidth="0.5" />
                    <line x1="0" y1="70" x2="80" y2="70" stroke="#0a0a0a" strokeWidth="0.5" />
                    <rect x="140" y="60" width="40" height="80" stroke="#0a0a0a" strokeWidth="0.4" fill="none" />
                    <path d="M 80 140 A 30 30 0 0 0 110 140" stroke="#0a0a0a" strokeWidth="0.3" fill="none" />
                  </g>
                </svg>

                {/* Mobile: always-visible label at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-3 sm:p-4 md:hidden">
                  <span className="font-mono text-[8px] text-white/60 tracking-widest uppercase block">
                    {item.category}
                  </span>
                  <h3 className="text-xs font-semibold tracking-[0.05em] text-white uppercase mt-0.5">
                    {item.title}
                  </h3>
                </div>

                {/* Desktop: Hover overlay */}
                <div className="absolute inset-0 bg-anivel-black/0 group-hover:bg-anivel-black/85 transition-all duration-500 hidden md:flex flex-col justify-end p-6">
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
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-3 sm:w-4 h-3 sm:h-4 border-l border-t border-anivel-300/50" />
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 sm:w-4 h-3 sm:h-4 border-r border-b border-anivel-300/50 hidden md:block" />

                {/* Project number label */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <span className="font-mono text-[8px] sm:text-[9px] text-anivel-400 tracking-wider">
                    P.{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Coming soon with architectural line */}
        <RevealOnScroll variant="fade-up" delay={0.4}>
          <div className="mt-10 sm:mt-16 flex items-center justify-center gap-3 sm:gap-4">
            <svg className="w-12 sm:w-24 h-4" viewBox="0 0 100 16" preserveAspectRatio="none">
              <motion.path
                d="M 0 8 L 100 8 M 0 4 L 0 12"
                stroke="#d4d4d4" strokeWidth="0.5" fill="none"
                variants={drawLine} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={0}
              />
            </svg>
            <span className="font-mono text-[8px] sm:text-[10px] text-anivel-400 tracking-widest uppercase whitespace-nowrap">
              Proximamente
            </span>
            <svg className="w-12 sm:w-24 h-4" viewBox="0 0 100 16" preserveAspectRatio="none">
              <motion.path
                d="M 0 8 L 100 8 M 100 4 L 100 12"
                stroke="#d4d4d4" strokeWidth="0.5" fill="none"
                variants={drawLine} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={0.2}
              />
            </svg>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
