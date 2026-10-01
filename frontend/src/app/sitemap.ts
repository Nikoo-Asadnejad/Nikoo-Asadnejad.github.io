import type { MetadataRoute } from "next";
import { getCheatSheetSlugs } from "@/content/cheatSheets";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = ["/", "/projects/", "/resume/", "/articles/", "/cheat-sheets/", "/contact/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...getCheatSheetSlugs().map((slug) => `/cheat-sheets/${slug}/`),
  ];

  return routes.map((route, index) => ({
    url: absoluteUrl(route),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/resume/" || route === "/projects/" ? 0.8 : 0.6,
  }));
}
