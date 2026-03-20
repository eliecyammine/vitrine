import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getProject, getProjectSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: project.metadata.title,
    description: project.metadata.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const { metadata, Content } = project;

  return (
    <div className="mx-auto max-w-2xl px-6 pt-32 pb-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-text mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <header className="text-center">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {metadata.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{metadata.description}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {metadata.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          {metadata.liveUrl && (
            <a
              href={metadata.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              Live Site
            </a>
          )}
          {metadata.repoUrl && (
            <a
              href={metadata.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-text"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          )}
        </div>
      </header>

      <article className="prose mt-12">
        <Content />
      </article>
    </div>
  );
}
