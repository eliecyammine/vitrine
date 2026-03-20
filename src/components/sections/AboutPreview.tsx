"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { skills } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AboutPreview() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 md:grid-cols-3 md:grid-rows-2"
        >
          {/* Bio — tall card */}
          <motion.div
            variants={item}
            className="row-span-2 rounded-3xl border border-border/40 bg-card p-8 md:p-10"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              About
            </span>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              I&apos;m a product-minded developer and designer. I believe the
              best software comes from caring equally about how it{" "}
              <span className="text-text">works</span> and how it{" "}
              <span className="text-text">feels</span>.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From early research and prototyping to production code and
              polish — I work across the entire stack.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              More about me
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Years */}
          <motion.div
            variants={item}
            className="flex flex-col justify-between rounded-3xl border border-border/40 bg-card p-8"
          >
            <span className="font-heading text-5xl text-text">8+</span>
            <p className="mt-4 text-sm text-muted">
              Years designing and building products
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={item}
            className="flex flex-col justify-between rounded-3xl border border-border/40 bg-card p-8"
          >
            <span className="font-heading text-5xl text-text">50+</span>
            <p className="mt-4 text-sm text-muted">
              Projects shipped to production
            </p>
          </motion.div>

          {/* Tech stack — wide card */}
          <motion.div
            variants={item}
            className="col-span-1 rounded-3xl border border-border/40 bg-card p-8 md:col-span-2"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted">
              Technologies
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border/40 px-3 py-1.5 text-sm text-muted transition-colors duration-200 hover:border-accent/30 hover:text-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
