import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { SITE_DATA } from "@/constants";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Footer({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const prefix = lang === "ru" ? "/ru" : "";
  const privacyHref = `${prefix}/privacy/`;

  const navLinks = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#roadmap", label: dict.nav.roadmap },
    { href: "#team", label: dict.nav.team },
    { href: "#reviews", label: dict.nav.reviews },
    { href: "#faq", label: dict.nav.faq },
  ];

  return (
    // pb на мобильных компенсирует высоту фиксированной панели контактов, чтобы
    // тёмный фон футера продолжался под ней, а не оставлял светлую полосу.
    <footer className="bg-rehab-dark text-white">
      <div className="mx-auto w-full max-w-7xl px-4 pt-14 pb-[calc(4.5rem+env(safe-area-inset-bottom))] sm:px-6 md:pb-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Бренд */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Abyroy Rehab" className="h-8 w-auto" />
              <span className="font-bold uppercase tracking-wider text-rehab-gold">
                Abyroy Rehab
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {dict.footer.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-rehab-gold hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={SITE_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                data-event="click_whatsapp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-rehab-gold hover:text-white"
              >
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>

          {/* Разделы */}
          <nav className="md:col-span-3" aria-label={dict.footer.navTitle}>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-rehab-gold">
              {dict.footer.navTitle}
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`${prefix}/${link.href}`}
                    className="text-sm text-white/60 transition-colors hover:text-rehab-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакты */}
          <div className="md:col-span-4">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-rehab-gold">
              {dict.footer.contactsTitle}
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${SITE_DATA.phone.replace(/[^\d+]/g, "")}`}
                  data-event="click_phone"
                  className="inline-flex items-center gap-2.5 text-base font-bold text-white transition-colors hover:text-rehab-gold"
                >
                  <Phone size={16} className="shrink-0 text-rehab-gold" />
                  {SITE_DATA.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-rehab-gold" />
                {SITE_DATA.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя строка + дисклеймер: единый низ футера, без второго «этажа» */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {dict.footer.legalName} — {dict.footer.rights}
            </p>
            <Link href={privacyHref} className="transition-colors hover:text-rehab-gold">
              {dict.footer.privacyLink}
            </Link>
          </div>
          {/* Юридическая приписка намеренно почти сливается с фоном футера */}
          <p className="mt-4 max-w-3xl text-[11px] leading-relaxed text-white/20">
            {dict.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
