import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { site } from "../scripts/site";

const EASE: [number, number, number, number] = [0.2, 0.6, 0.2, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item: Variants = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <header
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-12 text-center"
    >
      <div aria-hidden className="hero-aura pointer-events-none absolute inset-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center gap-7"
      >
        <motion.p variants={item} className="text-[clamp(15px,1.6vw,19px)] font-medium text-dim">
          Welcome to the <span className="gradient-text">web portfolio</span> of
        </motion.p>

        <motion.h1
          variants={item}
          className="text-[clamp(52px,10.5vw,124px)] font-extrabold leading-[1.04] tracking-[-0.03em]"
        >
          {site.firstName} <span className="gradient-text inline-block">{site.lastName}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-[54ch] text-[clamp(11px,1.2vw,13px)] font-medium uppercase tracking-[0.28em] text-faint"
        >
          Scroll down to learn more about my skills and experiences.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-5 flex flex-wrap justify-center gap-4 max-[520px]:w-full max-[520px]:flex-col"
        >
          <a className="btn" href="#contact">
            Contact Me
          </a>
          <a className="btn btn-glow" href={site.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </motion.div>
      </motion.div>

      <div aria-hidden className="scroll-hint absolute bottom-9 left-1/2 text-faint">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </header>
  );
}
