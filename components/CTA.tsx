import { Phone, Lock } from "lucide-react";
import { getWhatsAppLink, SITE_DATA } from "@/constants";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function CTA({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const whatsapp = getWhatsAppLink(lang);

  return (
    <section className="relative overflow-hidden bg-rehab-dark py-16 md:py-24">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-rehab-gold/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-rehab-gold ring-1 ring-inset ring-rehab-gold/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rehab-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rehab-gold" />
          </span>
          {dict.cta.badge}
        </span>

        <h2 className="mt-5 text-balance text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
          {dict.cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/60 md:text-base">
          {dict.cta.text}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${SITE_DATA.phone.replace(/[^\d+]/g, "")}`}
            data-event="click_phone"
            className="animate-call-pulse inline-flex items-center justify-center gap-2.5 rounded-2xl bg-rehab-gold px-6 py-4 text-base font-bold text-white shadow-lg shadow-rehab-gold/25 transition hover:bg-rehab-gold-dark active:scale-[0.98] md:text-lg"
          >
            <Phone size={20} />
            {SITE_DATA.phone}
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-event="click_whatsapp"
            className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-4 text-base font-bold text-rehab-dark transition hover:bg-white/90 active:scale-[0.98] md:text-lg"
          >
            <WhatsAppIcon size={22} className="text-[#25D366]" />
            {dict.cta.whatsapp}
          </a>
        </div>

        <p className="mx-auto mt-6 inline-flex max-w-md items-start gap-2 text-left text-xs leading-relaxed text-white/40">
          <Lock size={14} className="mt-0.5 shrink-0" />
          {dict.cta.note}
        </p>
      </div>
    </section>
  );
}
