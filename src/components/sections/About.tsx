"use client";

import { motion } from "framer-motion";
import { skills, languages } from "@/lib/constants";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* Floating illustrated shapes */
const floatingShapes = [
  // Pen tool
  {
    x: "5%",
    y: "18%",
    size: 36,
    delay: 0,
    dur: 6,
    svg: (
      <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
        <path
          d="M26 4L32 10L14 28H8V22L26 4Z"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.35"
        />
        <path
          d="M22 8L28 14"
          stroke="var(--accent-secondary)"
          strokeWidth="1"
          opacity="0.25"
        />
      </svg>
    ),
  },
  // Code bracket
  {
    x: "90%",
    y: "25%",
    size: 40,
    delay: 0.8,
    dur: 7,
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path
          d="M14 10L6 20L14 30"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        <path
          d="M26 10L34 20L26 30"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
      </svg>
    ),
  },
  // Lightbulb
  {
    x: "92%",
    y: "60%",
    size: 32,
    delay: 1.5,
    dur: 5,
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <circle
          cx="16"
          cy="13"
          r="7"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <path
          d="M13 20h6M14 23h4"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    ),
  },
  // Star
  {
    x: "8%",
    y: "70%",
    size: 20,
    delay: 2,
    dur: 8,
    svg: (
      <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
        <path
          d="M10 2l2.5 5 5.5.8-4 3.9 1 5.5L10 14.5 4.5 17.2l1-5.5-4-3.9 5.5-.8L10 2z"
          stroke="var(--accent-secondary)"
          strokeWidth="1"
          opacity="0.25"
        />
      </svg>
    ),
  },
];

export function About() {
  return (
    <div className="relative overflow-hidden py-24 pt-32">
      {/* Background: expanding concentric rings */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        {[280, 450, 620].map((size, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.3 + i * 0.2,
              ease: "easeOut" as const,
            }}
            className="absolute rounded-full border border-accent/10"
            style={{ width: size, height: size }}
          />
        ))}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.05, 0.09, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute h-[500px] w-[500px] rounded-full bg-accent/4 blur-[100px]"
        />
      </div>

      {/* Floating illustrated shapes — first 2 visible on mobile */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 5, -8, 0],
              rotate: [0, 8, -4, 6, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 + shape.delay },
              y: {
                duration: shape.dur,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: shape.delay,
              },
              rotate: {
                duration: shape.dur * 1.4,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: shape.delay,
              },
            }}
            className={`absolute ${i >= 2 ? "hidden sm:block" : ""}`}
            style={{
              left: shape.x,
              top: shape.y,
              width: shape.size,
              height: shape.size,
            }}
          >
            {shape.svg}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* The Manifesto — big bold statement */}
          <motion.div variants={item} className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Who I am
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Product.
              <br />
              <span className="bg-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                Design.
              </span>
              <br />
              Code.
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={item}
            className="mt-16 rounded-3xl border border-border/30 bg-card/50 p-8 sm:p-10 backdrop-blur-sm"
          >
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Building digital products from concept to launch, combining
                product strategy, UX design, and full-stack development.
                Experienced in fintech, regulatory-driven platforms, third-party
                integrations, and scalable web and mobile applications, with a
                track record of delivering solutions for both organizations and
                independent clients since 2019.
              </p>
            </div>
          </motion.div>

          {/* Stats — big oversized numbers */}
          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5"
          >
            {[
              { value: "6+", label: "Years shipping", sub: "Since 2019" },
              {
                value: "3",
                label: "Disciplines",
                sub: "Product · Design · Code",
              },
              { value: "E2E", label: "Full stack", sub: "Idea to deploy" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/50 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent/20"
              >
                <motion.p
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                    delay: i * 0.5,
                  }}
                  className="font-heading text-4xl font-bold sm:text-5xl"
                >
                  <span className="bg-linear-to-b from-accent to-accent-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </motion.p>
                <p className="mt-2 text-sm font-medium text-text">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-muted">{stat.sub}</p>
                <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/40" />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills — horizontal scrolling ticker */}
          <motion.div variants={item} className="mt-16">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Technologies I work with
            </p>
            <div className="relative overflow-hidden rounded-2xl border border-border/20 bg-card/30 py-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-bg to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-bg to-transparent" />

              <div className="animate-marquee flex w-max gap-6">
                {[...skills, ...skills].map((skill, i) => (
                  <span
                    key={`${skill}-${i}`}
                    className="shrink-0 text-sm font-medium text-muted/70 transition-colors hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages — spoken */}
          <motion.div variants={item} className="mt-16">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Languages I speak
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2 rounded-full border border-border/30 bg-card/50 px-4 py-2 backdrop-blur-sm transition-colors hover:border-accent/20"
                >
                  <span className="text-sm font-medium text-text">
                    {lang.name}
                  </span>
                  <span className="text-xs text-muted">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
