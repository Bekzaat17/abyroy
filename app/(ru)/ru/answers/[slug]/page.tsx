import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnswerLandingPage from "@/components/AnswerLandingPage";
import { getAnswerPage, getAnswerPages } from "@/lib/answer-pages";
import { buildAnswerMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAnswerPages("ru").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getAnswerPage("ru", slug);
  if (!page) notFound();
  return buildAnswerMetadata("ru", page);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getAnswerPage("ru", slug);
  if (!page) notFound();
  return <AnswerLandingPage lang="ru" page={page} />;
}
