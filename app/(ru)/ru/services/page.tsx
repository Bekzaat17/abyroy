import type { Metadata } from "next";
import ServicesHubPage from "@/components/ServicesHubPage";
import { buildServicesHubMetadata } from "@/lib/seo";

export const metadata: Metadata = buildServicesHubMetadata("ru");

export default function Page() {
  return <ServicesHubPage lang="ru" />;
}
