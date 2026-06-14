"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { experience, education } from "@/lib/constants";

/* Role-specific mini illustrations */
const roleIllustrations: Record<string, React.ReactNode> = {
  "Product Owner": (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <circle
        cx="16"
        cy="10"
        r="4"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <path
        d="M8 26c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M22 8l3-3m0 0l3 3m-3-3v6"
        stroke="var(--accent-secondary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  ),
  "Quality Assurance": (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <path
        d="M10 16l4 4 8-8"
        stroke="var(--accent-color)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <rect
        x="4"
        y="6"
        width="24"
        height="20"
        rx="4"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle
        cx="26"
        cy="8"
        r="3"
        fill="var(--accent-secondary)"
        opacity="0.3"
      />
    </svg>
  ),
  "Freelance Software": (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <path
        d="M12 10l-4 6 4 6"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        d="M20 10l4 6-4 6"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        d="M18 6l-4 20"
        stroke="var(--accent-secondary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  ),
  "Software & DevOps": (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect
        x="6"
        y="8"
        width="20"
        height="14"
        rx="2"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <path
        d="M6 22l4 4h12l4-4"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle
        cx="16"
        cy="15"
        r="3"
        stroke="var(--accent-secondary)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M16 12v6M13 15h6"
        stroke="var(--accent-secondary)"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  ),
  "Freelance Visual": (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <path
        d="M24 4L8 20l-2 8 8-2L30 10 24 4z"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        d="M20 8l4 4"
        stroke="var(--accent-secondary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle
        cx="8"
        cy="26"
        r="1.5"
        fill="var(--accent-secondary)"
        opacity="0.4"
      />
    </svg>
  ),
};

function getRoleIllustration(role: string) {
  for (const key of Object.keys(roleIllustrations)) {
    if (role.includes(key)) return roleIllustrations[key];
  }
  return null;
}

/* Floating decorative shapes for background */
const bgShapes = [
  {
    x: "6%",
    y: "20%",
    size: 18,
    delay: 0,
    dur: 7,
    content: (
      <circle
        cx="9"
        cy="9"
        r="7"
        stroke="var(--accent-color)"
        strokeWidth="1"
        opacity="0.12"
      />
    ),
  },
  {
    x: "92%",
    y: "35%",
    size: 14,
    delay: 1,
    dur: 8,
    content: (
      <rect
        x="2"
        y="2"
        width="10"
        height="10"
        rx="2"
        stroke="var(--accent-secondary)"
        strokeWidth="1"
        opacity="0.1"
        transform="rotate(45 7 7)"
      />
    ),
  },
  {
    x: "4%",
    y: "55%",
    size: 12,
    delay: 0.5,
    dur: 6,
    content: (
      <path
        d="M6 1L11 11H1L6 1Z"
        stroke="var(--accent-color)"
        strokeWidth="1"
        opacity="0.1"
      />
    ),
  },
  {
    x: "94%",
    y: "70%",
    size: 16,
    delay: 1.5,
    dur: 9,
    content: (
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="var(--accent-secondary)"
        strokeWidth="1"
        opacity="0.1"
      />
    ),
  },
  {
    x: "15%",
    y: "85%",
    size: 10,
    delay: 2,
    dur: 7,
    content: (
      <rect
        x="1"
        y="1"
        width="8"
        height="8"
        rx="1"
        stroke="var(--accent-color)"
        strokeWidth="1"
        opacity="0.08"
      />
    ),
  },
];

export function Experience() {
  return (
    <div className="relative overflow-hidden py-24 pt-32">
      {/* Floating background shapes — first 2 visible on mobile */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {bgShapes.map((shape, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -12, 4, -8, 0],
              rotate: [0, 10, -5, 8, 0],
            }}
            transition={{
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
            <svg
              viewBox={`0 0 ${shape.size} ${shape.size}`}
              fill="none"
              className="w-full h-full"
            >
              {shape.content}
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            My journey
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Where I&apos;ve{" "}
            <span className="bg-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              been
            </span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" as const }}
            className="absolute left-5 top-0 h-full w-[2px] origin-top bg-linear-to-b from-accent/30 via-accent/15 to-transparent"
          />

          <div className="space-y-10">
            {experience.map((exp, i) => {
              const illustration = getRoleIllustration(exp.role);

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: "easeOut" as const,
                  }}
                  className="group relative pl-10 sm:pl-14"
                >
                  {/* Timeline node — pulsing ring */}
                  <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut" as const,
                        delay: i * 0.5,
                      }}
                      className="absolute h-6 w-6 rounded-full border border-accent/30"
                    />
                    <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent/40 bg-bg transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card p-6 transition-all duration-300 hover:border-accent/20">
                    {/* Number watermark */}
                    <span className="absolute -top-2 right-4 select-none font-heading text-5xl font-bold text-accent/5">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-start gap-4">
                      {/* Role illustration */}
                      {illustration && (
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut" as const,
                            delay: i * 0.3,
                          }}
                          className="mt-0.5 flex shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent/6 p-2"
                        >
                          {illustration}
                        </motion.div>
                      )}

                      <div className="flex-1">
                        <span className="text-xs font-medium text-accent">
                          {exp.period}
                        </span>
                        <h3 className="mt-1 text-lg font-semibold text-text">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted">{exp.company}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {exp.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom glow */}
                    <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/30" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mt-20"
        >
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Education
          </p>
          <div className="mt-6 space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card p-6 transition-all duration-300 hover:border-accent/20"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                    }}
                    className="mt-0.5 flex shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent/6 p-2"
                  >
                    <GraduationCap
                      className="h-7 w-7 text-accent/70"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-accent">
                      {edu.period}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-text">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted">{edu.school}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/30" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
