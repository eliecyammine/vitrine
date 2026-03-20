"use client";

import { motion } from "framer-motion";

const words = [
  "Product Design",
  "Full-Stack Development",
  "UI/UX",
  "React",
  "Next.js",
  "TypeScript",
  "Design Systems",
  "Strategy",
  "Prototyping",
  "Node.js",
  "Figma",
  "User Research",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...words, ...words];
  return (
    <div className="flex overflow-hidden">
      <div
        className="animate-marquee flex shrink-0 items-center gap-4"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {items.map((word, i) => (
          <span key={i} className="flex shrink-0 items-center gap-4">
            <span className="whitespace-nowrap font-heading text-2xl text-text/10 sm:text-3xl">
              {word}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/30" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden border-y border-border/30 py-8"
    >
      <MarqueeRow />
    </motion.section>
  );
}
