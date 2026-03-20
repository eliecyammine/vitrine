"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`gradient-border relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 ${className}`}
      style={{
        background: hover
          ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, var(--glow), transparent 50%), var(--card-color)`
          : undefined,
      }}
    >
      {children}
    </motion.div>
  );
}
