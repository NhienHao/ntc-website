import type { MetadataRoute } from "next";
import { legacyRedirects } from "@/content/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://namtanuyen.com.vn";
  const paths = new Set<string>(["/", ...Object.values(legacyRedirects)]);
  return [...paths].map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
