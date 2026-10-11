import type { Metadata } from "next";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nikoo-asadnejad.github.io").replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const seoDescription =
  "Nikoo Asadnejad is a Senior Software Engineer specializing in C#/.NET, distributed systems, microservices, and AI engineering projects. Explore her work and experience.";

const socialImage = absoluteUrl("/assets/nikoo-asadnejad.jpeg");

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Nikoo Asadnejad`;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: absoluteUrl(path),
      siteName: "Nikoo Asadnejad",
      title: fullTitle,
      description,
      images: [{ url: socialImage, width: 400, height: 400, alt: "Nikoo Asadnejad, Senior Software Engineer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}

export const seoKeywords = [
  "Nikoo Asadnejad",
  "software engineer",
  "senior software engineer",
  "backend developer",
  "backend engineer",
  "software consultant",
  ".NET engineer",
  "C# developer",
  "distributed systems engineer",
  "software architecture consultant",
];
