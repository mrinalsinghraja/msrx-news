import type { MetadataRoute } from "next";
import { stories } from "@/lib/news";
import { SITE_URL } from "@/lib/site";

// lastModified is each story's real update date, never the build time.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: stories[0]?.updated, changeFrequency: "daily", priority: 1 },
    ...stories.map((s) => ({ url: `${SITE_URL}/${s.slug}`, lastModified: s.updated, changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
