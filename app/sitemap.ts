import type { MetadataRoute } from "next";
import { SEO_DATA } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SEO_DATA.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
