import type { Metadata } from "next";
import { SEO_DATA, SITE_DATA } from "@/constants";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import {
  getServicePageByKey,
  type ServicePageContent,
} from "@/lib/service-pages";
import {
  getAnswerPageByKey,
  type AnswerPageContent,
} from "@/lib/answer-pages";

// basePath: "" для kk (язык по умолчанию, корень "/"), "/ru" для русской версии.
export function pathFor(lang: Lang) {
  return lang === "ru" ? "/ru/" : "/";
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${SEO_DATA.url}/`).toString();
}

export function buildMetadata(lang: Lang): Metadata {
  const dict = getDictionary(lang);
  const base = pathFor(lang);
  const canonical = absoluteUrl(base);

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
        kk: absoluteUrl("/"),
        ru: absoluteUrl("/ru/"),
        "x-default": absoluteUrl("/"),
      },
    },
    icons: {
      icon: "/favicon.png?v=3",
      shortcut: "/favicon.png?v=3",
      apple: "/favicon.png?v=3",
    },
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
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
          width: 1200,
          height: 1006,
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
  };
}

export function buildJsonLd(lang: Lang) {
  const dict = getDictionary(lang);
  const url = absoluteUrl(pathFor(lang));
  const organizationId = `${SEO_DATA.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SEO_DATA.url}/#website`,
        url: absoluteUrl("/"),
        name: SEO_DATA.siteName,
        alternateName: ["Abyroy", "Abyroy Rehab Шымкент"],
        inLanguage: ["kk", "ru"],
        publisher: { "@id": organizationId },
      },
      {
        "@type": "MedicalBusiness",
        "@id": organizationId,
        name: "Abyroy Rehab",
        alternateName:
          lang === "kk"
            ? "Abyroy Rehab — Шымкенттегі оңалту орталығы"
            : "Abyroy Rehab — реабилитационный центр Шымкент",
        description: dict.meta.description,
        image: absoluteUrl(SEO_DATA.ogImage),
        logo: absoluteUrl("/logo.png"),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Шымкент",
          addressCountry: "KZ",
          streetAddress:
            lang === "kk" ? "Байтұрсынов көшесі, 78" : "ул. Байтурсынова, 78",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_DATA.geo.lat,
          longitude: SITE_DATA.geo.lng,
        },
        telephone: SITE_DATA.phone.replace(/[^+\d]/g, ""),
        url: absoluteUrl("/"),
        priceRange: "$$",
        areaServed: { "@type": "City", name: "Шымкент" },
        openingHours: "Mo-Su 00:00-23:59",
        sameAs: [SITE_DATA.instagram],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name:
            lang === "kk"
              ? "«Abyroy Rehab» оңалту орталығының қызметтері"
              : "Услуги реабилитационного центра Abyroy Rehab",
          itemListElement: dict.services.items.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.tag },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: lang,
        isPartOf: { "@id": `${SEO_DATA.url}/#website` },
        about: { "@id": organizationId },
      },
    ],
  };
}

export function getServiceUrl(lang: Lang, page: ServicePageContent) {
  const prefix = lang === "ru" ? "/ru" : "";
  return absoluteUrl(`${prefix}/services/${page.slug}/`);
}

export function getServiceAlternates(lang: Lang, page: ServicePageContent) {
  const kkPage = getServicePageByKey("kk", page.key);
  const ruPage = getServicePageByKey("ru", page.key);

  return {
    kk: getServiceUrl("kk", kkPage),
    ru: getServiceUrl("ru", ruPage),
    "x-default": getServiceUrl("kk", kkPage),
  };
}

export function buildServiceMetadata(
  lang: Lang,
  page: ServicePageContent,
): Metadata {
  const canonical = getServiceUrl(lang, page);

  return {
    metadataBase: new URL(SEO_DATA.url),
    title: page.metaTitle,
    description: page.metaDescription,
    applicationName: SEO_DATA.siteName,
    alternates: {
      canonical,
      languages: getServiceAlternates(lang, page),
    },
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
    openGraph: {
      type: "website",
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: SEO_DATA.siteName,
      locale: lang === "kk" ? "kk_KZ" : "ru_KZ",
      images: [
        {
          url: SEO_DATA.ogImage,
          width: 1200,
          height: 1006,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [SEO_DATA.ogImage],
    },
  };
}

export function buildServicesHubMetadata(lang: Lang): Metadata {
  const isRu = lang === "ru";
  const canonical = absoluteUrl(isRu ? "/ru/services/" : "/services/");
  const title = isRu
    ? "Лечение зависимостей в Шымкенте — услуги Abyroy Rehab"
    : "Шымкентте тәуелділікті емдеу — Abyroy Rehab қызметтері";
  const description = isRu
    ? "Программы Abyroy Rehab в Шымкенте: лечение наркомании, алкоголизма, игромании и консультации родственникам. Анонимно, приём обращений 24/7."
    : "Шымкенттегі Abyroy Rehab бағдарламалары: есірткіге, алкогольге, ойынға тәуелділікті емдеу және туыстарға кеңес. Анонимді, өтініштер 24/7.";

  return {
    metadataBase: new URL(SEO_DATA.url),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        kk: absoluteUrl("/services/"),
        ru: absoluteUrl("/ru/services/"),
        "x-default": absoluteUrl("/services/"),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SEO_DATA.siteName,
      locale: isRu ? "ru_KZ" : "kk_KZ",
      type: "website",
      images: [{ url: SEO_DATA.ogImage, width: 1200, height: 1006 }],
    },
  };
}

export function buildServiceJsonLd(lang: Lang, page: ServicePageContent) {
  const url = getServiceUrl(lang, page);
  const home = absoluteUrl(pathFor(lang));
  const services = absoluteUrl(lang === "ru" ? "/ru/services/" : "/services/");
  const organizationId = `${SEO_DATA.url}/#organization`;
  const homeName = lang === "ru" ? "Главная" : "Басты бет";
  const servicesName = lang === "ru" ? "Услуги" : "Қызметтер";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.metaDescription,
        inLanguage: lang,
        isPartOf: { "@id": `${SEO_DATA.url}/#website` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(SEO_DATA.ogImage) },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.title,
        description: page.metaDescription,
        url,
        provider: { "@id": organizationId },
        areaServed: { "@type": "City", name: "Шымкент" },
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: {
            "@type": "ContactPoint",
            telephone: SITE_DATA.phone.replace(/[^+\d]/g, ""),
            availableLanguage: ["kk", "ru"],
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeName, item: home },
          { "@type": "ListItem", position: 2, name: servicesName, item: services },
          { "@type": "ListItem", position: 3, name: page.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export function buildServicesHubJsonLd(lang: Lang, pages: ServicePageContent[]) {
  const url = absoluteUrl(lang === "ru" ? "/ru/services/" : "/services/");
  const name = lang === "ru" ? "Услуги Abyroy Rehab" : "Abyroy Rehab қызметтері";

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name,
    inLanguage: lang,
    isPartOf: { "@id": `${SEO_DATA.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.title,
        url: getServiceUrl(lang, page),
      })),
    },
  };
}

export function getAnswerUrl(lang: Lang, page: AnswerPageContent) {
  const prefix = lang === "ru" ? "/ru" : "";
  return absoluteUrl(`${prefix}/answers/${page.slug}/`);
}

export function getAnswerAlternates(page: AnswerPageContent) {
  const kkPage = getAnswerPageByKey("kk", page.key);
  const ruPage = getAnswerPageByKey("ru", page.key);

  return {
    kk: getAnswerUrl("kk", kkPage),
    ru: getAnswerUrl("ru", ruPage),
    "x-default": getAnswerUrl("kk", kkPage),
  };
}

export function buildAnswerMetadata(lang: Lang, page: AnswerPageContent): Metadata {
  const canonical = getAnswerUrl(lang, page);

  return {
    metadataBase: new URL(SEO_DATA.url),
    title: page.metaTitle,
    description: page.metaDescription,
    applicationName: SEO_DATA.siteName,
    alternates: {
      canonical,
      languages: getAnswerAlternates(page),
    },
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
    openGraph: {
      type: "article",
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: SEO_DATA.siteName,
      locale: lang === "kk" ? "kk_KZ" : "ru_KZ",
      images: [{ url: SEO_DATA.ogImage, width: 1200, height: 1006, alt: page.question }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [SEO_DATA.ogImage],
    },
  };
}

export function buildAnswersHubMetadata(lang: Lang): Metadata {
  const isRu = lang === "ru";
  const canonical = absoluteUrl(isRu ? "/ru/answers/" : "/answers/");
  const title = isRu
    ? "Ответы о лечении зависимости — помощь семье | Abyroy Rehab"
    : "Тәуелділікті емдеу туралы жауаптар — отбасыға көмек | Abyroy Rehab";
  const description = isRu
    ? "Что делать, если близкий употребляет наркотики, пьёт, играет на деньги или отказывается лечиться. Понятные ответы специалистов Abyroy Rehab в Шымкенте."
    : "Жақыныңыз есірткі қолданса, ішімдік ішсе, ақшаға ойнаса немесе емделуден бас тартса не істеу керек. Шымкенттегі Abyroy Rehab жауаптары.";

  return {
    metadataBase: new URL(SEO_DATA.url),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        kk: absoluteUrl("/answers/"),
        ru: absoluteUrl("/ru/answers/"),
        "x-default": absoluteUrl("/answers/"),
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: SEO_DATA.siteName,
      locale: isRu ? "ru_KZ" : "kk_KZ",
      images: [{ url: SEO_DATA.ogImage, width: 1200, height: 1006 }],
    },
  };
}

export function buildAnswerJsonLd(lang: Lang, page: AnswerPageContent) {
  const url = getAnswerUrl(lang, page);
  const home = absoluteUrl(pathFor(lang));
  const answers = absoluteUrl(lang === "ru" ? "/ru/answers/" : "/answers/");
  const service = getServicePageByKey(lang, page.serviceKey);
  const serviceUrl = getServiceUrl(lang, service);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: page.question,
        description: page.metaDescription,
        inLanguage: lang,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        author: { "@id": `${SEO_DATA.url}/#organization` },
        publisher: { "@id": `${SEO_DATA.url}/#organization` },
        about: { "@id": `${serviceUrl}#service` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.question,
        description: page.metaDescription,
        inLanguage: lang,
        isPartOf: { "@id": `${SEO_DATA.url}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: lang === "ru" ? "Главная" : "Басты бет",
            item: home,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: lang === "ru" ? "Ответы" : "Жауаптар",
            item: answers,
          },
          { "@type": "ListItem", position: 3, name: page.question, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export function buildAnswersHubJsonLd(lang: Lang, pages: AnswerPageContent[]) {
  const url = absoluteUrl(lang === "ru" ? "/ru/answers/" : "/answers/");

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: lang === "ru" ? "Ответы о зависимости" : "Тәуелділік туралы жауаптар",
    inLanguage: lang,
    isPartOf: { "@id": `${SEO_DATA.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.question,
        url: getAnswerUrl(lang, page),
      })),
    },
  };
}

/** Safely serializes JSON-LD embedded in an HTML script element. */
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
