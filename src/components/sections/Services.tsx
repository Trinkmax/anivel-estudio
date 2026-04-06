"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import {
  HomeIcon,
  BuildingIcon,
  InteriorIcon,
  RenovationIcon,
} from "@/components/svg/ServiceIcons";
import SectionDivider from "@/components/ui/SectionDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const icons = {
  home: HomeIcon,
  building: BuildingIcon,
  interior: InteriorIcon,
  renovation: RenovationIcon,
} as const;

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-anivel-50">
      <div className="max-w-6xl mx-auto">
        <SectionDivider label="Servicios" className="mb-16" />

        <RevealOnScroll variant="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.15em] uppercase text-anivel-black text-center mb-16">
            Lo que hacemos
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <RevealOnScroll key={service.title} variant="fade-up" delay={i * 0.1}>
                <motion.div
                  className="group p-8 md:p-10 bg-white border border-anivel-200 hover:border-anivel-400 transition-all duration-500"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-10 h-10 text-anivel-400 group-hover:text-anivel-black transition-colors duration-500 mb-6" />

                  <h3 className="text-lg font-semibold tracking-[0.1em] uppercase text-anivel-black mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm text-anivel-500 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated bottom line */}
                  <div className="mt-6 h-px bg-anivel-200 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-anivel-black"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
