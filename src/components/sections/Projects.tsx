"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    slug: "edelweiss",
    title: "Edelweiss Maritime",
    description:
      "A self-initiated, production-grade concept reimagining the digital presence of a luxury superyacht charter & management company — cinematic 3D and motion, a headless CMS, and full bilingual (EN/AR) RTL support.",
    tags: ["Next.js 16", "Payload CMS", "Three.js", "GSAP", "RTL i18n"],
    liveUrl: "https://edelweiss-dev.elieyammine.com",
    featured: true,
  },
  {
    slug: "vitrine",
    title: "Vitrine",
    description:
      "A modern, open-source portfolio built with Next.js 16, Three.js, and Framer Motion. Dual theme, MDX content, and blazing-fast performance.",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "MDX"],
    liveUrl: "https://elieyammine.com",
    repoUrl: "https://github.com/eliecyammine/vitrine",
    featured: true,
  },
  // {
  //   slug: "taskflow",
  //   title: "TaskFlow",
  //   description:
  //     "A collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
  //   tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
  //   featured: true,
  // },
  // {
  //   slug: "designkit",
  //   title: "DesignKit",
  //   description:
  //     "An opinionated design system and component library for rapid prototyping of modern web interfaces.",
  //   tags: ["TypeScript", "Storybook", "Tailwind CSS", "Figma"],
  //   featured: true,
  // },
  // {
  //   slug: "insightboard",
  //   title: "InsightBoard",
  //   description:
  //     "Analytics dashboard with custom chart components, real-time data streaming, and exportable reports.",
  //   tags: ["Next.js", "D3.js", "Python", "FastAPI"],
  // },
];

/* Floating illustrated shapes */
const floatingShapes = [
  // Rocket
  {
    x: "4%",
    y: "15%",
    size: 34,
    delay: 0,
    dur: 6,
    svg: (
      <svg viewBox="0 0 34 34" fill="none" className="w-full h-full">
        <path
          d="M17 4c0 0-8 10-8 20 0 3 3.6 6 8 6s8-3 8-6c0-10-8-20-8-20z"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          opacity="0.45"
        />
        <circle
          cx="17"
          cy="18"
          r="3"
          stroke="var(--accent-secondary)"
          strokeWidth="1"
          opacity="0.35"
        />
      </svg>
    ),
  },
  // Gear
  {
    x: "92%",
    y: "22%",
    size: 28,
    delay: 1,
    dur: 8,
    svg: (
      <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
        <circle
          cx="14"
          cy="14"
          r="5"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          opacity="0.45"
        />
        <circle
          cx="14"
          cy="14"
          r="9"
          stroke="var(--accent-color)"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.3"
        />
      </svg>
    ),
  },
  // Paintbrush
  {
    x: "6%",
    y: "60%",
    size: 30,
    delay: 0.5,
    dur: 7,
    svg: (
      <svg viewBox="0 0 30 30" fill="none" className="w-full h-full">
        <path
          d="M22 4L10 16c-1 1-1 3 0 4s3 1 4 0L26 8"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path
          d="M6 24c1-2 3-4 4-4"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    ),
  },
  // Window
  {
    x: "93%",
    y: "55%",
    size: 24,
    delay: 2,
    dur: 6,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="var(--accent-color)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="3"
          y1="9"
          x2="21"
          y2="9"
          stroke="var(--accent-color)"
          strokeWidth="1"
          opacity="0.3"
        />
        <circle
          cx="6"
          cy="7"
          r="0.8"
          fill="var(--accent-secondary)"
          opacity="0.45"
        />
        <circle
          cx="9"
          cy="7"
          r="0.8"
          fill="var(--accent-secondary)"
          opacity="0.45"
        />
      </svg>
    ),
  },
];

export function ProjectsGrid() {
  return (
    <div className="relative overflow-hidden py-24 pt-32">
      {/* Background: dot grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="dot-grid"
              x="0"
              y="0"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="var(--accent-color)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      {/* Floating illustrated shapes — first 2 visible on mobile */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -12, 3, -9, 0],
              rotate: [0, 6, -3, 5, 0],
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

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Selected work
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Things I&apos;ve{" "}
            <span className="bg-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              built
            </span>
          </h1>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => {
            const isFeaturedHero = i === 0;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut" as const,
                }}
                className={isFeaturedHero ? "md:col-span-2" : ""}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden rounded-2xl border border-border/30 bg-card transition-all duration-300 hover:border-accent/20 ${
                    isFeaturedHero ? "p-5 sm:p-8 md:p-10" : "p-4 sm:p-6"
                  }`}
                >
                  {/* Gradient top edge */}
                  <div className="absolute top-0 left-0 h-[2px] w-full bg-linear-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/40" />

                  {/* Number watermark */}
                  <span className="absolute -top-3 right-4 select-none font-heading text-6xl font-bold text-accent/5 sm:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="block"
                      >
                        <h3
                          className={`font-heading font-semibold transition-colors duration-200 group-hover:text-accent ${
                            isFeaturedHero ? "text-2xl sm:text-3xl" : "text-xl"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </Link>
                      {project.featured && (
                        <span className="mt-1 shrink-0 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                          Featured
                        </span>
                      )}
                    </div>

                    <p
                      className={`mt-3 leading-relaxed text-muted ${
                        isFeaturedHero ? "text-base max-w-2xl" : "text-sm"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 rounded-xl border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/20"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-border/40 px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:border-accent/20 hover:text-text"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
