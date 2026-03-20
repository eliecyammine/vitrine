"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`inline-flex items-center rounded-full border border-border/50 bg-secondary/30 px-3 py-1 text-xs font-medium text-muted cursor-default transition-colors duration-200 hover:border-accent/30 hover:text-accent ${className}`}
    >
      {children}
    </motion.span>
  );
}
