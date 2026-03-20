import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { getProjectSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getProjectSlugs();

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${siteConfig.url}/projects/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: siteConfig.url, lastModified: new Date() },
    { url: `${siteConfig.url}/about`, lastModified: new Date() },
    { url: `${siteConfig.url}/projects`, lastModified: new Date() },
    { url: `${siteConfig.url}/experience`, lastModified: new Date() },
    { url: `${siteConfig.url}/contact`, lastModified: new Date() },
    ...projectRoutes,
  ];
}
