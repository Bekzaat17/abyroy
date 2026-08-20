// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Меняем Inter на Montserrat
import "./globals.css";
import { SEO_DATA, SITE_DATA } from "@/constants";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileContactBar from "@/components/MobileContactBar";

// Настраиваем шрифт
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"], // Нужны разные веса
  variable: '--font-montserrat', // Используем как CSS переменную
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_DATA.url),
  title: SEO_DATA.title,
  description: SEO_DATA.description,
  keywords: SEO_DATA.keywords,
  applicationName: SEO_DATA.siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SEO_DATA.url,
  },
  icons: {
    icon: '/favicon.png?v=2',
    shortcut: '/favicon.png?v=2',
    apple: '/favicon.png?v=2',
  },
  openGraph: {
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    url: SEO_DATA.url,
    siteName: SEO_DATA.siteName,
    locale: 'ru_KZ',
    type: 'website',
    images: [
      {
        url: SEO_DATA.ogImage,
        width: 1699,
        height: 1424,
        alt: `${SEO_DATA.siteName} — реабилитационный центр в Шымкенте`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    images: [SEO_DATA.ogImage],
  },
  // Как только получите код подтверждения в Google Search Console — вставьте его сюда:
  // verification: { google: "ВАШ_КОД_ПОДТВЕРЖДЕНИЯ" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Abyroy Rehab",
    "alternateName": "Abyroy Rehab — реабилитационный центр Шымкент",
    "description": SEO_DATA.description,
    "image": `${SEO_DATA.url}${SEO_DATA.ogImage}`,
    "logo": `${SEO_DATA.url}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Шымкент",
      "addressCountry": "KZ",
      "streetAddress": "ул. Байтурсынова, 78"
    },
    "telephone": "+77775331672",
    "url": SEO_DATA.url,
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Шымкент"
    },
    "medicalSpecialty": "Addiction",
    "sameAs": [
      SITE_DATA.instagram,
      SITE_DATA.whatsapp,
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги реабилитационного центра Abyroy Rehab",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Лечение наркомании" } },
        { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Лечение алкоголизма" } },
        { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Лечение игровой зависимости (игромании)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Психологическая помощь родственникам зависимых" } },
      ],
    },
  };

  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans bg-[#F5F5F7] text-[#1D1D1F] antialiased pb-mobile-bar md:pb-0`}>
        <main>{children}</main>
        <FloatingWhatsApp />
        <MobileContactBar />
      </body>
    </html>
  );
}