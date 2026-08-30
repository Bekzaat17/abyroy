import type { Metadata } from "next";
import AnswersHubPage from "@/components/AnswersHubPage";
import { buildAnswersHubMetadata } from "@/lib/seo";

export const metadata: Metadata = buildAnswersHubMetadata("ru");

export default function Page() {
  return <AnswersHubPage lang="ru" />;
}
