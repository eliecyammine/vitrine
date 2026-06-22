import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Pin the workspace root — stray lockfiles above this dir otherwise make
  // Turbopack infer the wrong root (build warning).
  turbopack: {
    root: import.meta.dirname,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
