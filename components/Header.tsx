"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { SITE_DATA } from "@/constants";

const navLinks = [
  { href: "#about", label: "Біз туралы" },
  { href: "#services", label: "Қызметтер" },
  { href: "#roadmap", label: "Бағдарлама" },
  { href: "#team", label: "Команда" },
  { href: "#reviews", label: "Пікірлер" },
  { href: "#faq", label: "Сұрақтар" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Логотип: w-auto позволяет сохранять пропорции при разной высоте */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 md:h-10 w-[112px] md:w-[140px]">
            <Image
              src="/logo.png"
              alt="Abyroy Rehab — реабилитационный центр в Шымкенте"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Навигация (десктоп) */}
        <nav className="hidden md:flex gap-4 lg:gap-7 font-medium text-xs lg:text-sm text-gray-600 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-rehab-gold transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Кнопка звонка — всегда видна, в т.ч. на телефоне */}
          <a
            href={`tel:${SITE_DATA.phone.replace(/[^\d+]/g, "")}`}
            className="animate-call-pulse rounded-full bg-rehab-gold text-white px-3 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold hover:bg-rehab-goldDark transition-all flex items-center gap-2 shadow-lg shadow-rehab-gold/20 whitespace-nowrap"
          >
            <Phone size={16} className="w-4 h-4 md:w-4 md:h-4" />
            <span className="hidden sm:inline">{SITE_DATA.phone}</span>
          </a>

          {/* Бургер-меню (мобильді) */}
          <button
            type="button"
            aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-rehab-dark"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Мобильная панель навигации + контактов */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-5">
          <nav className="flex flex-col gap-4 font-medium text-base text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-rehab-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            <a
              href={`tel:${SITE_DATA.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 text-sm font-bold text-rehab-dark"
            >
              <Phone size={18} className="text-rehab-gold" />
              {SITE_DATA.phone}
            </a>
            <a
              href={SITE_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-rehab-dark"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-rehab-gold">
                <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"/>
              </svg>
              WhatsApp
            </a>
            <p className="text-xs text-gray-400">{SITE_DATA.address}</p>
          </div>
        </div>
      )}
    </header>
  );
}
