import Image from "next/image";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-anivel-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Top section */}
        <div className="flex flex-col items-center gap-5 sm:gap-8 mb-8 sm:mb-12">
          <Image
            src="/images/logo.png"
            alt="A Nivel"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 invert"
          />
          <span className="text-xs sm:text-sm tracking-[0.4em] uppercase font-light">
            A Nivel
          </span>
        </div>

        {/* Navigation - 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-6 mb-8 sm:mb-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-anivel-500 hover:text-white transition-colors duration-300 text-center py-1 min-h-[36px] flex items-center justify-center"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider line */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-anivel-700" />
          <div className="flex gap-5 sm:gap-6">
            {/* Instagram */}
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-anivel-500 hover:text-white transition-colors p-1.5 min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-anivel-500 hover:text-white transition-colors p-1.5 min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="text-anivel-500 hover:text-white transition-colors p-1.5 min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 4 L12 13 L22 4" />
              </svg>
            </a>
          </div>
          <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-anivel-700" />
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-center text-[10px] sm:text-xs text-anivel-600 tracking-wider sm:tracking-widest">
            &copy; 2026 A Nivel &mdash; Arq. Milagros Ribone
          </p>
          <p className="text-center text-[8px] sm:text-[10px] text-anivel-600 tracking-wider sm:tracking-widest flex items-center justify-center gap-1.5 opacity-80">
            Hecho con
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            I.B
          </p>
        </div>
      </div>
    </footer>
  );
}
