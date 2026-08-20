import { Phone } from "lucide-react";
import { SITE_DATA } from "@/constants";
import { getDictionary, type Lang } from "@/constants/dictionaries";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function MobileContactBar({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  // Панель постоянно на экране, поэтому пульсация здесь не нужна — она только
  // мельтешила бы; пульсируют кнопки внутри страницы, до которых нужно долистать.
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-black/5 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${SITE_DATA.phone.replace(/[^\d+]/g, "")}`}
        data-event="click_phone"
        className="flex flex-1 items-center justify-center gap-2 bg-rehab-gold py-4 text-sm font-bold text-white active:brightness-95"
      >
        <Phone size={18} className="shrink-0" />
        {dict.mobileBar.call}
      </a>
      <a
        href={SITE_DATA.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        data-event="click_whatsapp"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-bold text-white active:brightness-95"
      >
        <WhatsAppIcon size={18} className="shrink-0" />
        {dict.mobileBar.whatsapp}
      </a>
    </div>
  );
}
