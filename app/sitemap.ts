import type { MetadataRoute } from "next";
import { SEO_DATA } from "@/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const alternates = (path: string) => ({
    languages: {
      ru: `${SEO_DATA.url}${path}`,
      kk: `${SEO_DATA.url}/kk${path}`,
    },
  });

  return [
    {
      url: SEO_DATA.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: alternates(""),
    },
    {
      url: `${SEO_DATA.url}/kk`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: alternates(""),
    },
    {
      url: `${SEO_DATA.url}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("/privacy"),
    },
    {
      url: `${SEO_DATA.url}/kk/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("/privacy"),
    },
  ];
}
