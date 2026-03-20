import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/Callout";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-heading text-3xl font-bold tracking-tight mt-10 mb-4 sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-heading text-2xl font-semibold tracking-tight mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-heading text-xl font-semibold mt-6 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-muted leading-relaxed mb-4" {...props} />
  ),
  ul: (props) => (
    <ul className="text-muted mb-4 ml-6 list-disc space-y-1" {...props} />
  ),
  ol: (props) => (
    <ol className="text-muted mb-4 ml-6 list-decimal space-y-1" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="text-accent underline underline-offset-2 transition-colors duration-200 hover:text-accent/80"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-accent/50 pl-4 italic text-muted my-6"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-secondary/60 px-1.5 py-0.5 text-sm font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="rounded-lg bg-primary border border-border/50 p-4 overflow-x-auto my-6 text-sm"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-text" {...props} />,
  hr: () => <hr className="border-border/50 my-8" />,
  Callout,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
