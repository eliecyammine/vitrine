"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background: diagonal gradient streak */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: "-30%", rotate: -12 }}
          whileInView={{ opacity: 1, x: "0%", rotate: -12 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" as const }}
          className="absolute left-[-10%] top-[20%] h-[200px] w-[120%] bg-linear-to-r from-transparent via-accent/3 to-transparent blur-[60px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Let&apos;s work together
          </p>
          <h2 className="mt-4 font-heading text-5xl font-bold sm:text-6xl lg:text-7xl">
            Got a{" "}
            <span className="bg-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              project?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted">
            I&apos;m always open to new opportunities, collaborations, or just a
            good conversation about product and design.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="mailto:eliecyammine@gmail.com" external>
              Say hello
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              All my links
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
