import type { MetadataRoute } from "next";
import { SEO_DATA } from "@/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SEO_DATA.url}/sitemap.xml`,
  };
}
