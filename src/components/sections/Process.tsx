"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import SectionDivider from "@/components/ui/SectionDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { drawLine } from "@/lib/animations";

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-anivel-50">
      <div className="max-w-6xl mx-auto">
        <SectionDivider label="Proceso" className="mb-10 sm:mb-16" />

        <RevealOnScroll variant="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-anivel-black text-center mb-12 sm:mb-16 md:mb-20">
            Proceso de Trabajo
          </h2>
        </RevealOnScroll>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <svg className="absolute top-6 left-0 w-full h-2" viewBox="0 0 1000 8" preserveAspectRatio="none">
              <motion.line
                x1="60" y1="4" x2="940" y2="4"
                stroke="#d4d4d4" strokeWidth="1"
                variants={drawLine}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.3}
              />
            </svg>

            <div className="grid grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <RevealOnScroll key={step.number} variant="fade-up" delay={0.3 + i * 0.15}>
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center w-12 h-12 border border-anivel-300 bg-white mb-8">
                      <span className="font-mono text-sm text-anivel-black">{step.number}</span>
                    </div>

                    <h3 className="text-base font-semibold tracking-[0.15em] uppercase text-anivel-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-anivel-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical timeline */}
        <div className="lg:hidden space-y-0 relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px bg-anivel-200 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {PROCESS_STEPS.map((step, i) => (
            <RevealOnScroll key={step.number} variant="fade-right" delay={i * 0.1}>
              <div className="flex gap-4 sm:gap-6 items-start py-4 sm:py-6">
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 border border-anivel-300 bg-white flex items-center justify-center">
                  <span className="font-mono text-xs sm:text-sm text-anivel-black">{step.number}</span>
                </div>

                <div className="pt-1.5 sm:pt-2">
                  <h3 className="text-sm sm:text-base font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-anivel-black mb-1.5 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-anivel-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
