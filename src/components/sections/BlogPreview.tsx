"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types";

const recentPosts: BlogPost[] = [
  {
    slug: "building-with-nextjs-16",
    title: "Building with Next.js 16: What's New",
    description:
      "A deep dive into Next.js 16's new features — async params, Turbopack by default, and the future of React Server Components.",
    date: "2026-03-15",
    tags: ["Next.js", "React"],
    readingTime: "5 min read",
  },
  {
    slug: "design-engineering-mindset",
    title: "The Design Engineering Mindset",
    description:
      "How bridging the gap between design and code leads to better products and happier teams.",
    date: "2026-03-01",
    tags: ["Design", "Engineering"],
    readingTime: "4 min read",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function BlogPreview() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="grid gap-6 sm:grid-cols-2"
    >
      {recentPosts.map((post) => (
        <motion.div key={post.slug} variants={item}>
          <Link href={`/blog/${post.slug}`} className="group block">
            <Card>
              <div className="flex items-center gap-2 text-xs text-muted">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span>&middot;</span>
                <span>{post.readingTime}</span>
              </div>
              <h3 className="mt-3 font-heading text-2xl transition-colors duration-200 group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <motion.span
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={false}
              >
                Read more
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
