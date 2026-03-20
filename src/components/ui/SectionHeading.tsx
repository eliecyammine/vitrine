"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12"
    >
      <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted">{subtitle}</p>
      )}
    </motion.div>
  );
}
