import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { getServicePage, getServicePages } from "@/lib/service-pages";
import { buildServiceMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getServicePages("ru").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage("ru", slug);
  if (!page) notFound();
  return buildServiceMetadata("ru", page);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage("ru", slug);
  if (!page) notFound();
  return <ServiceLandingPage lang="ru" page={page} />;
}
