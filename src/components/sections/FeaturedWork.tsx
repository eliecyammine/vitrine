"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const featured = [
  {
    slug: "vitrine",
    title: "Vitrine",
    description:
      "An open-source portfolio that's actually worth forking. Next.js 16, Three.js, and obsessive attention to detail.",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "MDX"],
    number: "01",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    description:
      "Collaborative project management with real-time sync, Kanban boards, and analytics that teams actually use.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    number: "02",
  },
  {
    slug: "designkit",
    title: "DesignKit",
    description:
      "An opinionated component library for people who ship fast but refuse to ship ugly.",
    tags: ["TypeScript", "Storybook", "Tailwind CSS", "Figma"],
    number: "03",
  },
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="mx-auto w-full max-w-6xl px-6 pb-10">
          <div className="flex items-end justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-medium uppercase tracking-widest text-accent"
              >
                Selected Work
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mt-2 font-heading text-4xl sm:text-5xl"
              >
                Things I&apos;ve built
              </motion.h2>
            </div>
            <Button
              href="/projects"
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              All projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <div className="relative flex-1 min-h-0">
          <motion.div
            style={{ x }}
            className="absolute inset-y-0 left-0 flex items-center gap-6 px-6 sm:gap-8"
          >
            {featured.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="relative flex h-[60vh] w-[75vw] max-w-3xl flex-col justify-between overflow-hidden rounded-3xl border border-border/40 bg-card p-8 transition-colors duration-500 hover:border-accent/30 sm:w-[60vw] sm:p-12"
                >
                  {/* Background number */}
                  <span className="absolute -right-4 -top-8 font-heading text-[12rem] leading-none text-text/2 sm:text-[16rem]">
                    {project.number}
                  </span>

                  <div className="relative">
                    <span className="text-sm text-muted">{project.number}</span>
                    <h3 className="mt-3 font-heading text-3xl transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative flex items-end justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/50 text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* End spacer for scroll room */}
            <div className="w-[10vw] shrink-0" />
          </motion.div>
        </div>

        {/* Mobile fallback link */}
        <div className="mx-auto w-full max-w-6xl px-6 pt-6 sm:hidden">
          <Button href="/projects" variant="secondary">
            All projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
