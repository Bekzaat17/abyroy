import type { Metadata } from "next";
import { SEO_DATA } from "@/constants";
import PrivacyPage from "@/components/PrivacyPage";

export const metadata: Metadata = {
  title: `Құпиялылық саясаты — ${SEO_DATA.siteName}`,
  description: "Abyroy Rehab — Шымкенттегі оңалту орталығы сайтының құпиялылық саясаты.",
  alternates: {
    canonical: `${SEO_DATA.url}/privacy`,
    languages: {
      kk: `${SEO_DATA.url}/privacy`,
      ru: `${SEO_DATA.url}/ru/privacy`,
    },
  },
};

export default function Page() {
  return <PrivacyPage lang="kk" />;
}
