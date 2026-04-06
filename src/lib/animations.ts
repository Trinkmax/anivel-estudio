import type { Variants } from "framer-motion";

export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, delay, ease: "easeInOut" },
      opacity: { duration: 0.3, delay },
    },
  }),
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const wipeReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: (delay: number = 0) => ({
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, delay, ease: "easeInOut" },
  }),
};
