import type { Metadata } from "next";
import AnswersHubPage from "@/components/AnswersHubPage";
import { buildAnswersHubMetadata } from "@/lib/seo";

export const metadata: Metadata = buildAnswersHubMetadata("kk");

export default function Page() {
  return <AnswersHubPage lang="kk" />;
}
