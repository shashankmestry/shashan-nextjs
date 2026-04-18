/** Public site URL for canonical URLs, OG tags, sitemap, and robots. Set in production via env. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}

export const SITE_NAME = "Shashank Mestry";

export const SITE_TITLE =
  "Shashank Mestry — Scalable Products, Web Platforms & AI Systems";

export const SITE_DESCRIPTION =
  "Full-stack engineer with 15+ years building SaaS platforms, high-scale systems, and production-ready AI solutions. Laravel, Next.js, AWS, Web3.";

export const SITE_KEYWORDS = [
  "Shashank Mestry",
  "full-stack engineer",
  "Next.js",
  "Laravel",
  "SaaS",
  "AI engineering",
  "scalable systems",
  "Web3",
  "AWS",
  "portfolio",
] as const;
