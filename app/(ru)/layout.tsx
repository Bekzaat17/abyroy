import type { Metadata } from "next";
import "../globals.css";
import { montserrat } from "@/lib/fonts";
import { buildMetadata, buildJsonLd } from "@/lib/seo";
import { GTMHead, GTMBody } from "@/components/GTM";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileContactBar from "@/components/MobileContactBar";

export const metadata: Metadata = buildMetadata("ru");

export default function RuRootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildJsonLd("ru");

  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <GTMHead />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans bg-[#F5F5F7] text-[#1D1D1F] antialiased`}>
        <GTMBody />
        {children}
        <FloatingWhatsApp lang="ru" />
        <MobileContactBar lang="ru" />
      </body>
    </html>
  );
}
