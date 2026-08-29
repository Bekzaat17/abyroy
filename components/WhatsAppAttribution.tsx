"use client";

import { useEffect } from "react";

const ATTRIBUTION_KEY = "abyroy-whatsapp-source";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function isGoogleAdsTraffic(params: URLSearchParams) {
  if (params.has("gclid") || params.has("gbraid") || params.has("wbraid")) {
    return true;
  }

  const source = params.get("utm_source")?.toLowerCase();
  const medium = params.get("utm_medium")?.toLowerCase();
  return source === "google" && ["cpc", "ppc", "paidsearch", "google_ads"].includes(medium ?? "");
}

function cameFromGoogleAds() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (isGoogleAdsTraffic(params)) {
      window.sessionStorage.setItem(ATTRIBUTION_KEY, "google_ads");
    }
    return window.sessionStorage.getItem(ATTRIBUTION_KEY) === "google_ads";
  } catch {
    return false;
  }
}

/**
 * Помечает WhatsApp-обращения из Google Ads и отправляет событие в GTM.
 * Делегирование оставляет все кнопки WhatsApp единообразными без копирования логики.
 */
export default function WhatsAppAttribution() {
  useEffect(() => {
    cameFromGoogleAds();

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[data-event="click_whatsapp"]');
      if (!link || !cameFromGoogleAds()) return;

      const text = document.documentElement.lang === "kk"
        ? "Сәлеметсіз бе! Тәуелділікті емдеу бойынша құпия кеңес алғым келеді."
        : "Здравствуйте! Хочу получить конфиденциальную консультацию по лечению зависимости.";
      const url = new URL(link.href);
      url.searchParams.set("text", text);
      link.href = url.toString();

      const dataLayer = (window.dataLayer ??= []);
      dataLayer.push({ event: "whatsapp_click", traffic_source: "google_ads" });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
