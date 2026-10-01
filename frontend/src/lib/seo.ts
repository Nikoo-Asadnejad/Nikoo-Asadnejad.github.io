export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nikoo-asadnejad.github.io").replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const seoDescription =
  "Nikoo Asadnejad is a Senior Software Engineer, backend developer, and software consultant specializing in C#, .NET, distributed systems, software architecture, and cloud-native platforms.";

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
