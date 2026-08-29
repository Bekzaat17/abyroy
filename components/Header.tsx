"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, MapPin } from "lucide-react";
import { getWhatsAppLink, SITE_DATA } from "@/constants";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import LangSwitch from "@/components/LangSwitch";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Header({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const dict = getDictionary(lang);

  const navLinks = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#roadmap", label: dict.nav.roadmap },
    { href: "#team", label: dict.nav.team },
    { href: "#reviews", label: dict.nav.reviews },
    { href: "#faq", label: dict.nav.faq },
  ];

  const home = lang === "ru" ? "/ru/" : "/";
  const tel = `tel:${SITE_DATA.phone.replace(/[^\d+]/g, "")}`;
  const whatsapp = getWhatsAppLink(lang);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href={home} className="shrink-0" aria-label="Abyroy Rehab">
          <div className="relative h-8 w-[112px] md:h-10 md:w-[140px]">
            <Image src="/logo.webp" alt={dict.meta.ogAlt} fill priority className="object-contain" />
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-gray-600 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-rehab-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <LangSwitch lang={lang} className="hidden sm:inline-flex" />

          <a
            href={tel}
            data-event="click_phone"
            aria-label={dict.header.call}
            className="animate-call-pulse flex items-center gap-2 whitespace-nowrap rounded-full bg-rehab-gold px-3.5 py-2.5 text-sm font-bold text-white shadow-lg shadow-rehab-gold/20 transition-colors hover:bg-rehab-gold-dark md:px-5"
          >
            <Phone size={16} className="shrink-0" />
            <span className="hidden md:inline">{SITE_DATA.phone}</span>
          </a>

          <button
            type="button"
            aria-label={open ? dict.header.menuClose : dict.header.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-rehab-dark transition-colors hover:border-rehab-gold/40 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-gray-100 bg-white lg:hidden">
          <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6">
            <nav className="grid grid-cols-2 gap-x-4 gap-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-rehab-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between gap-3">
                <a
                  href={tel}
                  data-event="click_phone"
                  className="inline-flex items-center gap-2 text-sm font-bold text-rehab-dark"
                >
                  <Phone size={16} className="text-rehab-gold" />
                  {SITE_DATA.phone}
                </a>
                <LangSwitch lang={lang} className="sm:hidden" />
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-event="click_whatsapp"
                className="inline-flex items-center gap-2 text-sm font-bold text-rehab-dark"
              >
                <WhatsAppIcon size={16} className="text-[#25D366]" />
                WhatsApp
              </a>

              <p className="flex items-start gap-2 text-xs leading-relaxed text-gray-400">
                <MapPin size={14} className="mt-0.5 shrink-0 text-rehab-gold" />
                {SITE_DATA.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
