"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, Download, MapPin } from "lucide-react";
import { socialLinks, siteConfig } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* Floating paper planes + shapes */
const floatingShapes = [
  // Paper plane
  {
    x: "8%",
    y: "20%",
    size: 32,
    delay: 0,
    dur: 6,
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path
          d="M4 16L28 4L20 28L16 18L4 16Z"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.3"
        />
        <path
          d="M16 18L28 4"
          stroke="var(--accent-color)"
          strokeWidth="1"
          opacity="0.2"
        />
      </svg>
    ),
  },
  // Chat bubble
  {
    x: "88%",
    y: "18%",
    size: 28,
    delay: 1,
    dur: 7,
    svg: (
      <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
        <path
          d="M4 6h20a2 2 0 012 2v10a2 2 0 01-2 2H10l-4 4v-4H4a2 2 0 01-2-2V8a2 2 0 012-2z"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <path
          d="M8 12h12M8 15h8"
          stroke="var(--accent-secondary)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    ),
  },
  // At symbol
  {
    x: "6%",
    y: "70%",
    size: 24,
    delay: 1.5,
    dur: 8,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          opacity="0.25"
        />
        <path
          d="M16 12v1a3 3 0 006 0v-1a9 9 0 10-4 7.5"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.25"
        />
      </svg>
    ),
  },
  // Paper plane 2
  {
    x: "90%",
    y: "65%",
    size: 26,
    delay: 2,
    dur: 5,
    svg: (
      <svg viewBox="0 0 26 26" fill="none" className="w-full h-full">
        <path
          d="M3 13L23 3L17 23L13 15L3 13Z"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.25"
        />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <div className="relative flex min-h-[calc(100dvh-4rem-4.5rem)] items-center justify-center overflow-hidden py-24 pt-32">
      {/* Background: drifting aurora blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute left-[30%] top-[20%] h-[350px] w-[350px] rounded-full bg-accent/4 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 25, -15, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute right-[25%] bottom-[15%] h-[300px] w-[300px] rounded-full bg-accent-secondary/3 blur-[120px]"
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
              rotate: [0, 5, -3, 4, 0],
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
                duration: shape.dur * 1.3,
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

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-4">
          {/* Left: big text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="text-xs font-medium uppercase tracking-[0.3em] text-accent"
            >
              Get in touch
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
            >
              Let&apos;s{" "}
              <span className="bg-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                talk.
              </span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-4 max-w-sm text-lg text-muted"
            >
              Have a project, an idea, or just want to connect — I&apos;d love
              to hear from you.
            </motion.p>

            {/* Availability */}
            <motion.div variants={item} className="mt-6 flex flex-col">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-sm font-medium text-accent">
                  Available for new projects
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: action cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {/* Email — hero card */}
            <motion.div variants={item}>
              <motion.a
                href={`mailto:${siteConfig.email}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="group relative block overflow-hidden rounded-2xl border border-accent/20 bg-linear-to-br from-accent/8 to-transparent p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--accent-color)_12%,transparent)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-lg font-semibold text-text">
                      Send me an email
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {siteConfig.email}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-linear-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/50" />
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item}>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.3 }}
                      className="group flex flex-col items-center gap-2 rounded-2xl border border-border/30 bg-card py-4 transition-all duration-300 hover:border-accent/20 hover:bg-accent/6"
                    >
                      {Icon && (
                        <Icon className="h-5 w-5 text-muted transition-colors group-hover:text-accent" />
                      )}
                      <span className="text-xs font-medium text-muted transition-colors group-hover:text-text">
                        {link.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Resume — download */}
            <motion.div variants={item}>
              <motion.a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeFileName}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="group flex items-center justify-between rounded-2xl border border-border/30 bg-card px-5 py-4 transition-all duration-300 hover:border-accent/20 hover:bg-accent/6"
              >
                <div className="flex items-center gap-3">
                  <Download className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                  <div>
                    <p className="text-sm font-medium text-text">Resume</p>
                    <p className="text-xs text-muted">Download PDF</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
              </motion.a>
            </motion.div>

            {/* Location */}
            <motion.div variants={item} className="mt-6 flex flex-col">
              <div className="flex items-center justify-center gap-1.5 text-sm text-muted/60">
                <MapPin className="h-3.5 w-3.5" />
                <span>{siteConfig.location}</span>
                <span>&middot;</span>
                <span>Working globally</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
