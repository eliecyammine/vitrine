"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

const Scene = dynamic(
  () => import("@/components/three/Scene").then((m) => m.Scene),
  { ssr: false },
);

/* ─── floating illustrated elements ─── */
const floatingElements = [
  // Code brackets
  {
    x: "8%",
    y: "22%",
    delay: 0,
    dur: 5,
    rotate: 12,
    size: 48,
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path
          d="M18 14L8 24L18 34"
          stroke="var(--accent-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
        <path
          d="M30 14L40 24L30 34"
          stroke="var(--accent-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>
    ),
  },
  // Figma cursor
  {
    x: "85%",
    y: "18%",
    delay: 0.5,
    dur: 6,
    rotate: -8,
    size: 36,
    svg: (
      <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
        <path
          d="M8 8L14 28L18 20L26 16L8 8Z"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
  // Lightbulb
  {
    x: "12%",
    y: "65%",
    delay: 1,
    dur: 5.5,
    rotate: 6,
    size: 40,
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle
          cx="20"
          cy="16"
          r="9"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <path
          d="M16 25H24"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M17 28H23"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M20 7V4"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M28 10L30 8"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M12 10L10 8"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
  },
  // Phone
  {
    x: "88%",
    y: "60%",
    delay: 1.5,
    dur: 7,
    rotate: -15,
    size: 34,
    svg: (
      <svg viewBox="0 0 34 34" fill="none" className="w-full h-full">
        <rect
          x="9"
          y="4"
          width="16"
          height="26"
          rx="3"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line
          x1="15"
          y1="27"
          x2="19"
          y2="27"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
  // Pen tool
  {
    x: "78%",
    y: "78%",
    delay: 2,
    dur: 6,
    rotate: 20,
    size: 32,
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path
          d="M22 4L28 10L12 26H6V20L22 4Z"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.4"
        />
      </svg>
    ),
  },
  // Diamond
  {
    x: "20%",
    y: "82%",
    delay: 0.8,
    dur: 8,
    rotate: 45,
    size: 20,
    svg: (
      <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
        <rect
          x="3"
          y="3"
          width="14"
          height="14"
          rx="2"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
    ),
  },
  // Circle
  {
    x: "70%",
    y: "12%",
    delay: 1.2,
    dur: 9,
    rotate: 0,
    size: 16,
    svg: (
      <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
    ),
  },
  // Triangle
  {
    x: "30%",
    y: "15%",
    delay: 2.5,
    dur: 7,
    rotate: -10,
    size: 22,
    svg: (
      <svg viewBox="0 0 22 22" fill="none" className="w-full h-full">
        <path
          d="M11 3L20 19H2L11 3Z"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          opacity="0.25"
        />
      </svg>
    ),
  },
];

export function Hero() {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className="relative h-dvh overflow-hidden">
      <div className="absolute inset-0 motion-safe:block motion-reduce:hidden opacity-30">
        <Scene />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/60 to-bg/20" />

      {/* Floating illustrated elements — show fewer on mobile */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 5, -10, 0],
              rotate: [0, el.rotate, -el.rotate / 2, el.rotate / 3, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 + el.delay },
              scale: { duration: 0.8, delay: 0.5 + el.delay },
              y: {
                duration: el.dur,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: el.delay,
              },
              rotate: {
                duration: el.dur * 1.5,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: el.delay,
              },
            }}
            className={`absolute ${i > 3 ? "hidden sm:block" : ""}`}
            style={{
              left: el.x,
              top: el.y,
              width: el.size,
              height: el.size,
            }}
          >
            {el.svg}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-5 sm:mb-8 flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-medium text-accent">
            Available for new projects
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-muted"
        >
          Hey, I&apos;m Elie
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-3 max-w-3xl font-heading text-3xl font-bold leading-snug tracking-tight sm:text-5xl lg:text-6xl"
        >
          I turn ideas into{" "}
          <span className="bg-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            products
          </span>
          <br />
          people actually{" "}
          <motion.span
            animate={{ rotate: [0, -3, 3, -2, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut" as const,
            }}
            className="inline-block"
          >
            love
          </motion.span>{" "}
          using
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto mt-4 sm:mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-muted"
        >
          Product Strategy, Design, and Code.
          <br className="hidden sm:block" />
          6+ years shipping web &amp; mobile products end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
        >
          <Button href="/projects">
            See my work
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="secondary">
            <Mail className="h-4 w-4" />
            Get in touch
          </Button>
        </motion.div>

        {/* Scroll hint */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
            className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted/30 pt-1.5"
          >
            <div className="h-1.5 w-1 rounded-full bg-muted/50" />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
