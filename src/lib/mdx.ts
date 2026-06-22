import fs from "fs";
import path from "path";
import type { Project } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

function getMdxFiles(dir: string): string[] {
  const fullPath = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getProjectSlugs(): string[] {
  return getMdxFiles("projects");
}

export async function getProject(
  slug: string
): Promise<{ metadata: Project; Content: React.ComponentType } | null> {
  try {
    const mod = await import(`@/content/projects/${slug}.mdx`);
    return {
      metadata: { ...mod.metadata, slug },
      Content: mod.default,
    };
  } catch {
    return null;
  }
}
