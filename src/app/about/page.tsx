import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description: "Product-oriented developer who bridges design and engineering.",
};

export default function AboutPage() {
  return <About />;
}
