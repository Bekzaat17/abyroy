const tags = [
  "Реабилитация в Шымкенте",
  "Лечение наркомании",
  "Лечение алкоголизма",
  "Лечение игромании",
];

export default function Intro() {
  return (
    <section id="about" className="bg-white pt-8 pb-16 md:pt-10 md:pb-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-rehab-dark mb-4">
            Реабилитационный центр (рехаб) в Шымкенте
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
            Abyroy Rehab — анонимный реабилитационный центр в Шымкенте. Помогаем пройти
            лечение наркомании, лечение алкоголизма и лечение игровой зависимости, а также
            поддерживаем родственников зависимых. Комплексная программа реабилитации,
            проживание в комфортных условиях и сопровождение после выписки — в одном центре
            в Шымкенте, без огласки и осуждения.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs md:text-sm font-medium text-rehab-gold bg-rehab-gold/10 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
