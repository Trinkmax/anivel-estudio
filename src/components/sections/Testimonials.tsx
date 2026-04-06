"use client";

import { TESTIMONIALS } from "@/lib/constants";
import SectionDivider from "@/components/ui/SectionDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-anivel-900 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionDivider label="Testimonios" className="mb-16 [&_span]:text-anivel-600 [&_div]:bg-anivel-700" />

        <RevealOnScroll variant="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.15em] uppercase text-white text-center mb-16">
            Lo que dicen
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <RevealOnScroll key={testimonial.name} variant="fade-up" delay={i * 0.15}>
              <div className="p-8 border border-anivel-700 h-full flex flex-col">
                {/* Quote mark */}
                <span className="text-5xl font-serif text-anivel-700 leading-none mb-4">
                  &ldquo;
                </span>

                <p className="text-sm text-anivel-300 leading-relaxed flex-1 mb-6">
                  {testimonial.quote}
                </p>

                <div>
                  <div className="w-6 h-px bg-anivel-600 mb-4" />
                  <p className="text-sm font-semibold tracking-[0.1em] text-white uppercase">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-[10px] text-anivel-500 tracking-widest uppercase mt-1">
                    {testimonial.project}
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
