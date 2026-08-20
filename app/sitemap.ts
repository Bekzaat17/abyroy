import type { MetadataRoute } from "next";
import { SEO_DATA } from "@/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // kk — язык по умолчанию (корень), ru — на /ru.
  const alternates = (path: string) => ({
    languages: {
      kk: `${SEO_DATA.url}${path}`,
      ru: `${SEO_DATA.url}/ru${path}`,
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
      url: `${SEO_DATA.url}/ru`,
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
      url: `${SEO_DATA.url}/ru/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("/privacy"),
    },
  ];
}
