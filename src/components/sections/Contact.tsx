"use client";

import { CONTACT } from "@/lib/constants";
import SectionDivider from "@/components/ui/SectionDivider";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionDivider label="Contacto" className="mb-16" />

        <RevealOnScroll variant="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.15em] uppercase text-anivel-black text-center mb-4">
            Hablemos
          </h2>
          <p className="text-center text-sm text-anivel-500 mb-16 max-w-md mx-auto">
            Contanos sobre tu proyecto y te responderemos a la brevedad.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <RevealOnScroll variant="fade-left" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-anivel-black mb-6">
                  Contacto directo
                </h3>

                <div className="space-y-5">
                  {/* Instagram */}
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-anivel-500 hover:text-anivel-black transition-colors group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                    <span className="text-sm tracking-wider group-hover:tracking-[0.15em] transition-all duration-300">
                      @anivel.estudio
                    </span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-anivel-500 hover:text-anivel-black transition-colors group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-sm tracking-wider group-hover:tracking-[0.15em] transition-all duration-300">
                      WhatsApp
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-4 text-anivel-500 hover:text-anivel-black transition-colors group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 4 L12 13 L22 4" />
                    </svg>
                    <span className="text-sm tracking-wider group-hover:tracking-[0.15em] transition-all duration-300">
                      {CONTACT.email}
                    </span>
                  </a>
                </div>
              </div>

              {/* Technical decoration */}
              <div className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border border-anivel-200" />
                  <span className="font-mono text-[10px] text-anivel-300 tracking-widest">
                    BUENOS AIRES, ARGENTINA
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact form */}
          <RevealOnScroll variant="fade-right" delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-anivel-500 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-anivel-200 pb-2 text-sm text-anivel-black focus:border-anivel-black focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-anivel-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-anivel-200 pb-2 text-sm text-anivel-black focus:border-anivel-black focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-anivel-500 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-anivel-200 pb-2 text-sm text-anivel-black focus:border-anivel-black focus:outline-none transition-colors"
                    placeholder="+54 11 ..."
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-anivel-500 mb-2">
                    Tipo de Proyecto
                  </label>
                  <select
                    className="w-full bg-transparent border-b border-anivel-200 pb-2 text-sm text-anivel-500 focus:border-anivel-black focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="residencial">Arquitectura Residencial</option>
                    <option value="comercial">Arquitectura Comercial</option>
                    <option value="interiorismo">Interiorismo</option>
                    <option value="remodelacion">Remodelacion</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-anivel-500 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-anivel-200 pb-2 text-sm text-anivel-black focus:border-anivel-black focus:outline-none transition-colors resize-none"
                  placeholder="Contanos sobre tu proyecto..."
                />
              </div>

              <div className="pt-4">
                <Button type="submit">Enviar Consulta</Button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
