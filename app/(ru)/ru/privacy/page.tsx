import type { Metadata } from "next";
import { SEO_DATA } from "@/constants";
import PrivacyPage from "@/components/PrivacyPage";

export const metadata: Metadata = {
  title: `Политика конфиденциальности — ${SEO_DATA.siteName}`,
  description: "Политика конфиденциальности сайта Abyroy Rehab — реабилитационного центра в Шымкенте.",
  openGraph: {
    title: `Политика конфиденциальности — ${SEO_DATA.siteName}`,
    description: "Политика конфиденциальности сайта Abyroy Rehab — реабилитационного центра в Шымкенте.",
    url: `${SEO_DATA.url}/ru/privacy/`,
  },
  alternates: {
    canonical: `${SEO_DATA.url}/ru/privacy/`,
    languages: {
      kk: `${SEO_DATA.url}/privacy/`,
      ru: `${SEO_DATA.url}/ru/privacy/`,
      "x-default": `${SEO_DATA.url}/privacy/`,
    },
  },
};

export default function Page() {
  return <PrivacyPage lang="ru" />;
}
