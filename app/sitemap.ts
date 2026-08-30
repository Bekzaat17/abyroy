import type { MetadataRoute } from "next";
import { getServicePageByKey, getServicePages } from "@/lib/service-pages";
import { absoluteUrl, getServiceAlternates, getServiceUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // kk — язык по умолчанию (корень), ru — на /ru/.
  const alternates = (kkPath: string, ruPath = `/ru${kkPath}`) => ({
    languages: {
      kk: absoluteUrl(kkPath),
      ru: absoluteUrl(ruPath),
      "x-default": absoluteUrl(kkPath),
    },
  });

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: alternates("/", "/ru/"),
      images: [absoluteUrl("/main_page.webp")],
    },
    {
      url: absoluteUrl("/ru/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: alternates("/", "/ru/"),
      images: [absoluteUrl("/main_page.webp")],
    },
    {
      url: absoluteUrl("/services/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alternates("/services/", "/ru/services/"),
    },
    {
      url: absoluteUrl("/ru/services/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alternates("/services/", "/ru/services/"),
    },
    {
      url: absoluteUrl("/privacy/"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("/privacy/", "/ru/privacy/"),
    },
    {
      url: absoluteUrl("/ru/privacy/"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("/privacy/", "/ru/privacy/"),
    },
  ];

  const servicePages: MetadataRoute.Sitemap = getServicePages("kk").flatMap((kkPage) => {
    const ruPage = getServicePageByKey("ru", kkPage.key);
    const localized = { languages: getServiceAlternates("kk", kkPage) };

    return [
      {
        url: getServiceUrl("kk", kkPage),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.9,
        alternates: localized,
      },
      {
        url: getServiceUrl("ru", ruPage),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.9,
        alternates: localized,
      },
    ];
  });

  return [...staticPages, ...servicePages];
}
