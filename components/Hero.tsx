"use client";
import Image from "next/image";
import { Phone } from "lucide-react";
import { SITE_DATA } from "@/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] h-[80vh] md:h-[85vh] flex flex-col justify-center overflow-hidden bg-[#FFFFFF]">
      {/* Фон */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-full md:w-[60%] bg-[#F8F9FA]"></div>
        <div className="hidden md:block w-[40%] bg-[#333333]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-full grid grid-cols-12 items-center">
        {/* Текст: добавлен max-w чтобы не налезал на фото */}
        <div className="col-span-12 md:col-span-7 mt-12 md:mt-0 text-center md:text-left z-20 max-w-[700px]">
          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1.5 rounded-full mb-4 md:mb-5">
            Реабилитационный центр в Шымкенте
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#333333] leading-tight mb-4 md:mb-6">
            <span className="text-[#D4AF37]">ABYROY</span> <br/>
            Жаңа өмірге қадам
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
            Тәуелділікті еңсеріп, ішкі үйлесімділікке қайта оралыңыз.
          </p>

          {/* Статистика: фиксированные размеры для предсказуемости */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-lg mx-auto md:mx-0 mb-8 md:mb-10">
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-bold text-[#333333]">15+</span>
              <span className="text-[10px] md:text-sm text-gray-500 whitespace-nowrap">Жылдық тәжірибе</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-bold text-[#333333]">2500+</span>
              <span className="text-[10px] md:text-sm text-gray-500 whitespace-nowrap">Сенім білдірген</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-bold text-[#333333]">92%</span>
              <span className="text-[10px] md:text-sm text-gray-500 whitespace-nowrap">Сәтті нәтиже</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href={SITE_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D4AF37] text-white px-6 py-3 md:px-10 md:py-4 rounded-2xl font-bold hover:bg-[#b8962d] transition shadow-xl text-base md:text-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"/>
              </svg>
              Кеңес алу
            </a>
            <a
              href={`tel:${SITE_DATA.phone.replace(/[^\d+]/g, "")}`}
              className="animate-call-pulse inline-flex items-center gap-3 bg-white text-[#333333] border-2 border-[#333333] px-6 py-3 md:px-10 md:py-4 rounded-2xl font-bold hover:bg-[#333333] hover:text-white transition shadow-xl text-base md:text-lg"
            >
              <Phone size={22} />
              Позвонить
            </a>
          </div>
        </div>

        {/* Фото: Контейнер занимает 50%, само фото внутри центрируется */}
        <div className="hidden md:block absolute right-0 bottom-0 h-[90%] md:h-full w-[57%] z-10 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/main_page.png"
              alt="Врач реабилитационного центра Abyroy Rehab в Шымкенте"
              fill
              priority
              className="object-contain object-bottom"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}