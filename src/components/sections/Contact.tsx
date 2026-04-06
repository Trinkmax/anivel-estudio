"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";
import SectionDivider from "@/components/ui/SectionDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { drawLine } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Blueprint decoration background - simplified on mobile */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
        {[
          [100, 100], [300, 80], [900, 120], [1100, 90],
          [150, 450], [500, 500], [800, 480], [1050, 520],
        ].map(([x, y], i) => (
          <g key={i} opacity="0.08">
            <line x1={x - 6} y1={y} x2={x + 6} y2={y} stroke="#0a0a0a" strokeWidth="0.5" />
            <line x1={x} y1={y - 6} x2={x} y2={y + 6} stroke="#0a0a0a" strokeWidth="0.5" />
          </g>
        ))}
        <motion.path
          d="M 40 40 L 40 20 L 60 20"
          stroke="#d4d4d4" strokeWidth="0.5" fill="none"
          variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
        />
        <motion.path
          d="M 1160 40 L 1160 20 L 1140 20"
          stroke="#d4d4d4" strokeWidth="0.5" fill="none"
          variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}
        />
        <motion.path
          d="M 40 560 L 40 580 L 60 580"
          stroke="#d4d4d4" strokeWidth="0.5" fill="none"
          variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6}
        />
        <motion.path
          d="M 1160 560 L 1160 580 L 1140 580"
          stroke="#d4d4d4" strokeWidth="0.5" fill="none"
          variants={drawLine} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.8}
        />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionDivider label="Contacto" className="mb-10 sm:mb-16" />

        <RevealOnScroll variant="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-anivel-black text-center mb-3 sm:mb-4">
            Hablemos
          </h2>
          <p className="text-center text-xs sm:text-sm text-anivel-500 mb-12 sm:mb-16 md:mb-20 max-w-md mx-auto leading-relaxed">
            Cada proyecto comienza con una conversacion.<br />
            Contanos tu idea.
          </p>
        </RevealOnScroll>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Instagram */}
          <RevealOnScroll variant="fade-up" delay={0}>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex sm:flex-col items-center sm:text-center gap-4 sm:gap-4 border border-anivel-200 hover:border-anivel-black active:border-anivel-black p-5 sm:p-8 transition-all duration-500 relative min-h-[56px]"
            >
              <div className="absolute top-2 left-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-l border-t border-anivel-300 group-hover:border-anivel-black transition-colors duration-500" />
              <div className="absolute bottom-2 right-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-r border-b border-anivel-300 group-hover:border-anivel-black transition-colors duration-500" />

              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-anivel-400 group-hover:text-anivel-black flex-shrink-0 transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>

              <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-2">
                <span className="font-mono text-[9px] sm:text-[10px] text-anivel-400 tracking-widest uppercase hidden sm:block">
                  Instagram
                </span>
                <span className="text-sm tracking-wider text-anivel-700 group-hover:text-anivel-black transition-colors">
                  @anivel_mr
                </span>
              </div>
            </a>
          </RevealOnScroll>

          {/* WhatsApp */}
          <RevealOnScroll variant="fade-up" delay={0.1}>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex sm:flex-col items-center sm:text-center gap-4 sm:gap-4 border border-anivel-200 hover:border-anivel-black active:border-anivel-black p-5 sm:p-8 transition-all duration-500 relative min-h-[56px]"
            >
              <div className="absolute top-2 left-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-l border-t border-anivel-300 group-hover:border-anivel-black transition-colors duration-500" />
              <div className="absolute bottom-2 right-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-r border-b border-anivel-300 group-hover:border-anivel-black transition-colors duration-500" />

              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-anivel-400 group-hover:text-anivel-black flex-shrink-0 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>

              <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-2">
                <span className="font-mono text-[9px] sm:text-[10px] text-anivel-400 tracking-widest uppercase hidden sm:block">
                  WhatsApp
                </span>
                <span className="text-sm tracking-wider text-anivel-700 group-hover:text-anivel-black transition-colors">
                  Escribinos
                </span>
              </div>
            </a>
          </RevealOnScroll>

          {/* Email */}
          <RevealOnScroll variant="fade-up" delay={0.2}>
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex sm:flex-col items-center sm:text-center gap-4 sm:gap-4 border border-anivel-200 hover:border-anivel-black active:border-anivel-black p-5 sm:p-8 transition-all duration-500 relative min-h-[56px]"
            >
              <div className="absolute top-2 left-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-l border-t border-anivel-300 group-hover:border-anivel-black transition-colors duration-500" />
              <div className="absolute bottom-2 right-2 w-2.5 sm:w-3 h-2.5 sm:h-3 border-r border-b border-anivel-300 group-hover:border-anivel-black transition-colors duration-500" />

              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-anivel-400 group-hover:text-anivel-black flex-shrink-0 transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 4 L12 13 L22 4" />
              </svg>

              <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-2">
                <span className="font-mono text-[9px] sm:text-[10px] text-anivel-400 tracking-widest uppercase hidden sm:block">
                  Email
                </span>
                <span className="text-xs sm:text-sm tracking-wider text-anivel-700 group-hover:text-anivel-black transition-colors">
                  {CONTACT.email}
                </span>
              </div>
            </a>
          </RevealOnScroll>
        </div>

        {/* Location note */}
        <RevealOnScroll variant="fade-up" delay={0.4}>
          <div className="mt-10 sm:mt-16 flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-2 sm:w-3 h-2 sm:h-3 border border-anivel-300" />
            <div className="w-4 sm:w-8 h-px bg-anivel-300" />
            <span className="font-mono text-[8px] sm:text-[10px] text-anivel-400 tracking-widest uppercase">
              Córdoba, Argentina
            </span>
            <div className="w-4 sm:w-8 h-px bg-anivel-300" />
            <div className="w-2 sm:w-3 h-2 sm:h-3 border border-anivel-300" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
