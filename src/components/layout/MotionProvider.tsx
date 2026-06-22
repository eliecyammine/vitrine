"use client";

import { MotionConfig } from "framer-motion";

/**
 * Makes every Framer Motion animation respect the user's
 * `prefers-reduced-motion` setting. The CSS media query in globals.css only
 * neutralizes CSS animations/transitions — JS-driven motion needs this.
 * `reducedMotion="user"` keeps opacity fades but drops transform/layout motion.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
