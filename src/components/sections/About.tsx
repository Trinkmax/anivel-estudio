"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";
import { drawLine } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Blueprint annotation in background - smaller on mobile */}
      <svg className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 opacity-[0.06] pointer-events-none" viewBox="0 0 200 200" fill="none">
        <rect x="20" y="20" width="160" height="160" stroke="#0a0a0a" strokeWidth="0.5" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="#0a0a0a" strokeWidth="0.3" strokeDasharray="4 4" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="#0a0a0a" strokeWidth="0.3" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="40" stroke="#0a0a0a" strokeWidth="0.3" />
      </svg>

      <div className="max-w-6xl mx-auto">
        <SectionDivider label="Sobre Mi" className="mb-10 sm:mb-16" />

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
          {/* Photo with architectural frame */}
          <RevealOnScroll variant="fade-left">
            <div className="relative max-w-sm mx-auto md:max-w-none">
              {/* Dimension marks around image */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 border-l border-t border-anivel-300" />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 border-r border-b border-anivel-300" />

              {/* Vertical dimension label */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 hidden md:block">
                <span className="font-mono text-[10px] text-anivel-400 tracking-widest">
                  ARQ.
                </span>
              </div>

              {/* Horizontal dimension line above */}
              <svg className="absolute -top-8 left-0 w-full h-4 hidden md:block" viewBox="0 0 400 16" preserveAspectRatio="none">
                <motion.path
                  d="M 0 8 L 400 8 M 0 4 L 0 12 M 400 4 L 400 12"
                  stroke="#d4d4d4" strokeWidth="0.5" fill="none"
                  variants={drawLine} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} custom={0.5}
                />
              </svg>

              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/milagros-ribone.jpg"
                  alt="Arquitecta Milagros Ribone"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 50vw"
                  priority
                />
              </div>

              {/* Technical label below photo */}
              <div className="mt-3 sm:mt-4 flex items-center gap-2">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 border border-anivel-300" />
                <span className="font-mono text-[8px] sm:text-[9px] text-anivel-400 tracking-widest uppercase">
                  Fig. 01 &mdash; Milagros Ribone
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Bio text */}
          <RevealOnScroll variant="fade-right" delay={0.2}>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-anivel-black">
                Milagros Ribone
              </h2>

              {/* Animated underline */}
              <motion.div
                className="h-px bg-anivel-black"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              />

              <p className="text-anivel-700 leading-relaxed text-sm">
                Arquitecta recibida de la Universidad Nacional de Córdoba (UNC), con pasion por crear espacios que transforman la manera en que las personas
                viven y trabajan. Cada proyecto es una oportunidad para materializar ideas en estructuras
                que dialogan con su entorno.
              </p>

              <p className="text-anivel-700 leading-relaxed text-sm">
                Mi enfoque combina funcionalidad con estetica, prestando atencion a cada detalle
                constructivo. Creo en la arquitectura como herramienta de cambio, donde cada
                linea trazada tiene un proposito y cada espacio cuenta una historia.
              </p>

              <p className="text-anivel-700 leading-relaxed text-sm">
                Desde A Nivel, acompano a cada cliente en el proceso de hacer realidad su proyecto,
                con compromiso, creatividad y rigurosidad tecnica.
              </p>

              {/* Technical specs style */}
              <div className="pt-4 sm:pt-6 space-y-2.5 sm:space-y-3">
                {[
                  "Arquitectura",
                  "Diseno",
                  "Direccion de Obra",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-anivel-black flex-shrink-0" />
                    <div className="flex-1 h-px bg-anivel-200" />
                    <span className="font-mono text-[9px] sm:text-[10px] text-anivel-500 tracking-widest uppercase flex-shrink-0">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
