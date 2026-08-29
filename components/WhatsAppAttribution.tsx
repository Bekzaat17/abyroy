"use client";

import { useEffect } from "react";

const ATTRIBUTION_KEY = "abyroy-whatsapp-source";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

type GoogleTrafficSource = "google_ads" | "google_search";

function getGoogleTrafficSource(): GoogleTrafficSource | null {
  const params = new URLSearchParams(window.location.search);
  if (params.has("gclid") || params.has("gbraid") || params.has("wbraid")) {
    return "google_ads";
  }

  const source = params.get("utm_source")?.toLowerCase();
  const medium = params.get("utm_medium")?.toLowerCase();
  if (source === "google" && ["cpc", "ppc", "paidsearch", "google_ads"].includes(medium ?? "")) {
    return "google_ads";
  }

  if (source === "google" || /(^|\.)google\.[a-z.]+$/i.test(new URL(document.referrer).hostname)) {
    return "google_search";
  }

  return null;
}

function getGoogleAttribution() {
  try {
    const source = getGoogleTrafficSource();
    if (source) {
      window.sessionStorage.setItem(ATTRIBUTION_KEY, source);
    }
    const savedSource = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    return savedSource === "google_ads" || savedSource === "google_search" ? savedSource : null;
  } catch {
    return null;
  }
}

/**
 * Помечает WhatsApp-обращения из Google и отправляет событие в GTM.
 * Делегирование оставляет все кнопки WhatsApp единообразными без копирования логики.
 */
export default function WhatsAppAttribution() {
  useEffect(() => {
    getGoogleAttribution();

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[data-event="click_whatsapp"]');
      const trafficSource = getGoogleAttribution();
      if (!link || !trafficSource) return;

      const text = document.documentElement.lang === "kk"
        ? "Сәлеметсіз бе! Тәуелділікті емдеу бойынша кеңес алғым келеді."
        : "Здравствуйте! Хочу получить консультацию по лечению зависимости.";
      const url = new URL(link.href);
      url.searchParams.set("text", text);
      link.href = url.toString();

      const dataLayer = (window.dataLayer ??= []);
      dataLayer.push({ event: "whatsapp_click", traffic_source: trafficSource });
    };

    // Capture-фаза гарантирует, что адрес с текстом будет установлен до
    // стандартного перехода браузера в приложение WhatsApp на мобильном.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
