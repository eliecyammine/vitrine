import type { NavLink, SocialLink, ExperienceItem } from "@/types";

export const siteConfig = {
  name: "Elie Yammine",
  title: "Elie Yammine — Product Owner, Full-Stack Developer & Designer",
  description:
    "Full-stack developer and product owner turning ideas into polished web and mobile products. 6+ years shipping across fintech, SaaS, and e-commerce.",
  url: "https://elieyammine.com",
  ogImage: "/og.png",
  email: "eliecyammine@gmail.com",
  location: "Keserwan, Lebanon",
  resumeUrl: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/elieyammine",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/elieyammine",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/elieyammine",
    icon: "twitter",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Product Owner — UI/UX Specialist",
    company: "Mojo Verse LTD",
    period: "Aug 2025 — Present",
    description:
      "Leading product discovery and UX for a digital fintech platform. Bridging product strategy with development — prototyping UI in React/React Native, running usability testing, and managing third-party integrations including Central Bank of Lebanon compliance.",
    tags: ["React", "React Native", "Figma", "Product Strategy", "Fintech"],
  },
  {
    role: "Quality Assurance Lead",
    company: "Mojo Verse LTD",
    period: "Aug 2024 — Aug 2025",
    description:
      "Built reusable component libraries, authored comprehensive test suites that improved validation efficiency by 40%, and optimized app performance through profiling and refactoring critical code paths.",
    tags: ["React Native", "TypeScript", "Testing", "Performance"],
  },
  {
    role: "Freelance Software Developer",
    company: "Remote",
    period: "2019 — Present",
    description:
      "Architecting and delivering end-to-end web and mobile applications for diverse clients — from database design to cloud deployment using React, Next.js, Node.js, Nest.js, Flutter, and PostgreSQL.",
    tags: ["React", "Next.js", "Node.js", "Flutter", "PostgreSQL"],
  },
  {
    role: "Software & DevOps Engineer",
    company: "EndSpace Mena",
    period: "2022 — 2023",
    description:
      "Full-stack development for international clients including prominent Australian companies. Built RESTful APIs with Nest.js, managed AWS/Azure infrastructure, and implemented CI/CD pipelines.",
    tags: ["Next.js", "Nest.js", "AWS", "Azure", "Docker", "CI/CD"],
  },
  {
    role: "Freelance Visual Designer",
    company: "Remote",
    period: "2018 — 2020",
    description:
      "Created graphics, logos, and UI/UX designs using Adobe Illustrator and Figma. Built responsive front-end prototypes for handoff to development teams.",
    tags: ["Figma", "Adobe Illustrator", "UI/UX", "HTML/CSS"],
  },
];

export const skills = [
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Flutter",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Azure",
  "GraphQL",
  "Figma",
  "CI/CD",
];
