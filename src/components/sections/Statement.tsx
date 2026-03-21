"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["useful", "beautiful", "delightful", "memorable"];

export function Statement() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-border/20 bg-card py-28 sm:py-36">
      {/* Subtle gradient orbs */}
      <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-heading text-4xl leading-tight sm:text-6xl lg:text-7xl"
        >
          I build things <br className="sm:hidden" />
          that are{" "}
          <span className="relative inline-block min-w-[4ch] text-left sm:min-w-[5ch]">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="inline-block bg-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>
      </div>
    </section>
  );
}
