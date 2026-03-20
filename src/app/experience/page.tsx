import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where I've been and what I've done.",
};

export default function ExperiencePage() {
  return <Experience />;
}
