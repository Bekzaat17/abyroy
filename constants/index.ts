// Данные, которые НЕ зависят от языка (телефон, адрес, ссылки, координаты).
// Переводимый текстовый контент — в constants/dictionaries.ts.

export const SITE_DATA = {
  phone: "+7 (777) 533-16-72",
  whatsapp: "https://wa.me/77775331672",
  instagram: "https://instagram.com/abyroyrehab.kz",
  address: "г. Шымкент, ул. Байтурсынова, 78",
  // Координаты по улице (уточнены геокодированием OpenStreetMap/Nominatim по
  // адресу). Дом №78 точечно не проверялся — рекомендуем сверить и при
  // необходимости поправить по пину из вашего Google Business Profile.
  geo: { lat: 42.341257, lng: 69.602349 },
};

export const SEO_DATA = {
  siteName: "Abyroy Rehab",
  url: "https://abyroyrehab.kz",
  ogImage: "/logo.png",
};

// GTM_ID: контейнер Google Tag Manager ещё не создан на момент подготовки
// сайта под Google Ads. Замените плейсхолдер на реальный ID (вида GTM-XXXXXXX)
// из вашего аккаунта tagmanager.google.com — до этого скрипт GTM не подключится.
export const GTM_ID = "GTM-XXXXXXX";
