import { SITE_DATA } from "@/constants";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function FloatingWhatsApp({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <a
      href={SITE_DATA.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.mobileBar.whatsapp}
      data-event="click_whatsapp"
      // Пульс зелёный — под цвет самой кнопки (правило см. в globals.css)
      className="animate-whatsapp-pulse fixed bottom-8 right-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-105 active:scale-95 md:flex"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
