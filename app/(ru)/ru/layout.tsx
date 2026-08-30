import type { Metadata } from "next";
import "../../globals.css";
import { montserrat } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";
import { GTMHead, GTMBody } from "@/components/GTM";
import GoogleAdsTag from "@/components/GoogleAdsTag";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileContactBar from "@/components/MobileContactBar";
import WhatsAppAttribution from "@/components/WhatsAppAttribution";

export const metadata: Metadata = buildMetadata("ru");

export default function RuRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <GTMHead />
        <GoogleAdsTag />
      </head>
      <body className={`${montserrat.variable} font-sans bg-[#F5F5F7] text-[#1D1D1F] antialiased`}>
        <GTMBody />
        <WhatsAppAttribution />
        {children}
        <FloatingWhatsApp lang="ru" />
        <MobileContactBar lang="ru" />
      </body>
    </html>
  );
}
