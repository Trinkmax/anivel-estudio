"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionDivider label="Sobre Mi" className="mb-16" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo with architectural frame */}
          <RevealOnScroll variant="fade-left">
            <div className="relative">
              {/* Dimension marks around image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-anivel-300" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-anivel-300" />

              {/* Dimension label */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 hidden md:block">
                <span className="font-mono text-[10px] text-anivel-400 tracking-widest">
                  ARQ.
                </span>
              </div>

              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/milagros-ribone.jpg"
                  alt="Arquitecta Milagros Ribone"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Bio text */}
          <RevealOnScroll variant="fade-right" delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.15em] uppercase text-anivel-black">
                Milagros Ribone
              </h2>

              <div className="w-16 h-px bg-anivel-black" />

              <p className="text-anivel-700 leading-relaxed text-sm md:text-base">
                Arquitecta con pasion por crear espacios que transforman la manera en que las personas
                viven y trabajan. Cada proyecto es una oportunidad para materializar ideas en estructuras
                que dialogan con su entorno.
              </p>

              <p className="text-anivel-700 leading-relaxed text-sm md:text-base">
                Mi enfoque combina funcionalidad con estetica, prestando atencion a cada detalle
                constructivo. Creo en la arquitectura como herramienta de cambio, donde cada
                linea trazada tiene un proposito y cada espacio cuenta una historia.
              </p>

              <p className="text-anivel-700 leading-relaxed text-sm md:text-base">
                Desde A Nivel, acompano a cada cliente en el proceso de hacer realidad su proyecto,
                con compromiso, creatividad y rigurosidad tecnica.
              </p>

              {/* Technical detail */}
              <div className="pt-4 flex items-center gap-3">
                <div className="w-8 h-px bg-anivel-300" />
                <span className="font-mono text-[10px] text-anivel-400 tracking-widest uppercase">
                  Arquitectura &middot; Diseno &middot; Direccion de Obra
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
