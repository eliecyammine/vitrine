import fs from "fs";
import path from "path";
import type { BlogPost, Project } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

function getMdxFiles(dir: string): string[] {
  const fullPath = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getBlogSlugs(): string[] {
  return getMdxFiles("blog");
}

export function getProjectSlugs(): string[] {
  return getMdxFiles("projects");
}

export async function getBlogPost(
  slug: string
): Promise<{ metadata: BlogPost; Content: React.ComponentType } | null> {
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    return {
      metadata: { ...mod.metadata, slug },
      Content: mod.default,
    };
  } catch {
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const slugs = getBlogSlugs();
  const posts: BlogPost[] = [];

  for (const slug of slugs) {
    const post = await getBlogPost(slug);
    if (post) posts.push(post.metadata);
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
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

export async function getProjects(): Promise<Project[]> {
  const slugs = getProjectSlugs();
  const projects: Project[] = [];

  for (const slug of slugs) {
    const project = await getProject(slug);
    if (project) projects.push(project.metadata);
  }

  return projects;
}
