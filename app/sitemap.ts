import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://lafiasabigado.vercel.app";
  const now = new Date();
  const locales = ["fr", "en"];

  const routes = ["", "/projects", "/about", "/service", "/contact"];

  const staticRoutes: MetadataRoute.Sitemap = [];
  locales.forEach((locale) => {
    routes.forEach((route) => {
      staticRoutes.push({
        url: `${siteUrl}/${locale}${route}`,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  const projectRoutes: MetadataRoute.Sitemap = [];
  locales.forEach((locale) => {
    projects.forEach((p) => {
      projectRoutes.push({
        url: `${siteUrl}/${locale}/projects/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return [...staticRoutes, ...projectRoutes];
}
