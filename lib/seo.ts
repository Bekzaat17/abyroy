import type { Metadata } from "next";
import { SEO_DATA, SITE_DATA } from "@/constants";
import { getDictionary, type Lang } from "@/constants/dictionaries";

// basePath: "" для kk (язык по умолчанию, корень "/"), "/ru" для русской версии.
export function pathFor(lang: Lang) {
  return lang === "ru" ? "/ru" : "";
}

export function buildMetadata(lang: Lang): Metadata {
  const dict = getDictionary(lang);
  const base = pathFor(lang);
  const canonical = `${SEO_DATA.url}${base}`;

  return {
    metadataBase: new URL(SEO_DATA.url),
    title: dict.meta.title,
    description: dict.meta.description,
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
      canonical,
      languages: {
        kk: SEO_DATA.url,
        ru: `${SEO_DATA.url}/ru`,
        "x-default": SEO_DATA.url,
      },
    },
    icons: {
      icon: "/favicon.png?v=2",
      shortcut: "/favicon.png?v=2",
      apple: "/favicon.png?v=2",
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonical,
      siteName: SEO_DATA.siteName,
      locale: lang === "kk" ? "kk_KZ" : "ru_KZ",
      type: "website",
      images: [
        {
          url: SEO_DATA.ogImage,
          width: 1699,
          height: 1424,
          alt: dict.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [SEO_DATA.ogImage],
    },
    // Код подтверждения Google Search Console — вставьте после верификации:
    // verification: { google: "ВАШ_КОД_ПОДТВЕРЖДЕНИЯ" },
  };
}

export function buildJsonLd(lang: Lang) {
  const dict = getDictionary(lang);
  const base = pathFor(lang);
  const url = `${SEO_DATA.url}${base}`;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Abyroy Rehab",
    alternateName:
      lang === "kk"
        ? "Abyroy Rehab — Шымкенттегі оңалту орталығы"
        : "Abyroy Rehab — реабилитационный центр Шымкент",
    description: dict.meta.description,
    image: `${SEO_DATA.url}${SEO_DATA.ogImage}`,
    logo: `${SEO_DATA.url}/logo.png`,
    inLanguage: lang,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Шымкент",
      addressCountry: "KZ",
      streetAddress: "ул. Байтурсынова, 78",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_DATA.geo.lat,
      longitude: SITE_DATA.geo.lng,
    },
    telephone: "+77775331672",
    url,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Шымкент",
    },
    medicalSpecialty: "Addiction",
    sameAs: [SITE_DATA.instagram, SITE_DATA.whatsapp],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:
        lang === "kk"
          ? "«Abyroy Rehab» оңалту орталығының қызметтері"
          : "Услуги реабилитационного центра Abyroy Rehab",
      itemListElement: dict.services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "MedicalTherapy", name: s.tag },
      })),
    },
  };
}
