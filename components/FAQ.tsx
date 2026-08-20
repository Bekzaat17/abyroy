const faqItems = [
  {
    q: "Сколько стоит реабилитация в Шымкенте?",
    a: "Стоимость зависит от вида зависимости, состояния пациента и длительности программы. Мы подбираем план индивидуально — оставьте заявку по телефону или в WhatsApp, и мы бесплатно проконсультируем и озвучим стоимость.",
  },
  {
    q: "Лечение в Abyroy Rehab анонимное?",
    a: "Да, полностью. Мы не разглашаем информацию о пациентах третьим лицам. Обращение, проживание и лечение проходят конфиденциально.",
  },
  {
    q: "Какие виды зависимости вы лечите в Шымкенте?",
    a: "Лечение наркомании, лечение алкоголизма и лечение игровой зависимости (игромании), а также психологическую помощь родственникам зависимых.",
  },
  {
    q: "Как быстро можно записаться на консультацию?",
    a: "Первичная консультация проводится в день обращения. Позвоните по телефону или напишите в WhatsApp — мы ответим и договоримся о ближайшем удобном времени.",
  },
  {
    q: "Что делать, если зависимый человек не хочет обращаться за помощью?",
    a: "Обратитесь к нам сами — мы проконсультируем родственников, поможем правильно построить разговор и мотивировать человека начать лечение.",
  },
  {
    q: "Как проходит реабилитация после выписки из центра?",
    a: "После стационарного этапа мы сопровождаем пациента на этапе ресоциализации: помогаем адаптироваться к обычной жизни и предотвратить срыв.",
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-rehab-dark mb-3">Частые вопросы</h2>
          <p className="text-gray-500 text-sm md:text-base">
            О реабилитации и лечении зависимостей в Шымкенте
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="group bg-rehab-light rounded-2xl px-5 py-4 md:px-6 md:py-5 open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 font-bold text-rehab-dark text-sm md:text-base cursor-pointer list-none">
                {item.q}
                <span className="shrink-0 text-rehab-gold text-xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
