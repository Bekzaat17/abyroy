// Данные, которые НЕ зависят от языка (телефон, адрес, ссылки, координаты).
// Переводимый текстовый контент — в constants/dictionaries.ts.

import type { Lang } from "@/constants/dictionaries";

export const SITE_DATA = {
  phone: "+7 (747) 047-40-81",
  whatsapp: "https://wa.me/77470474081",
  instagram: "https://instagram.com/abyroyrehab.kz",
  address: "г. Шымкент, ул. Байтурсынова, 78",
  // Координаты по улице (уточнены геокодированием OpenStreetMap/Nominatim по
  // адресу). Дом №78 точечно не проверялся — рекомендуем сверить и при
  // необходимости поправить по пину из вашего Google Business Profile.
  geo: { lat: 42.341257, lng: 69.602349 },
};

/** Ссылка сразу содержит текст, поэтому он работает и до загрузки JavaScript. */
export function getWhatsAppLink(lang: Lang) {
  const text = lang === "kk"
    ? "Сәлеметсіз бе! Тәуелділікті емдеу бойынша кеңес алғым келеді."
    : "Здравствуйте! Хочу получить консультацию по лечению зависимости.";

  return `${SITE_DATA.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const SEO_DATA = {
  siteName: "Abyroy Rehab",
  url: "https://abyroyrehab.kz",
  ogImage: "/logo.png",
};

export const GTM_ID = "GTM-T85HHBFV";
export const GOOGLE_ADS_ID = "AW-18401473334";
