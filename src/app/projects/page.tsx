import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've built.",
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
