import type { Metadata } from "next";
import "../../globals.css";
import { montserrat } from "@/lib/fonts";
import { buildMetadata, buildJsonLd } from "@/lib/seo";
import { GTMHead, GTMBody } from "@/components/GTM";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileContactBar from "@/components/MobileContactBar";

export const metadata: Metadata = buildMetadata("kk");

export default function KkRootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildJsonLd("kk");

  return (
    <html lang="kk" className="scroll-smooth">
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
        <FloatingWhatsApp lang="kk" />
        <MobileContactBar lang="kk" />
      </body>
    </html>
  );
}
