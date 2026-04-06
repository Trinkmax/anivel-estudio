"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-sm border-b border-anivel-200"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 sm:gap-3 min-h-[44px]">
            <Image
              src="/images/logo.png"
              alt="A Nivel"
              width={36}
              height={36}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
            />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-anivel-black">
              A Nivel
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-anivel-500 hover:text-anivel-black transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger - 44px minimum touch target */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-3 -mr-1 min-w-[44px] min-h-[44px] items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="block w-5 h-px bg-anivel-black"
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-px bg-anivel-black"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-px bg-anivel-black"
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Blueprint decoration in mobile menu */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-anivel-200" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-anivel-200" />

            <nav className="flex flex-col items-center gap-6 sm:gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-base sm:text-lg tracking-[0.2em] uppercase text-anivel-black py-2 min-h-[44px] flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={closeMobile}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Architect label */}
            <motion.div
              className="absolute bottom-12 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-6 h-px bg-anivel-300" />
              <span className="font-mono text-[9px] text-anivel-400 tracking-widest uppercase">
                Arq. Milagros Ribone
              </span>
              <div className="w-6 h-px bg-anivel-300" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
