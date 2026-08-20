export default function Reviews() {
  const reviews = [
    { 
      name: "Талғат", 
      text: "Кәсіби мамандардың көмегі өте зор болды. Консультанттар өз ісінің шеберлері, шынымен де өмірге деген құлшынысымды қайтарып берді.", 
      date: "12.09.2025" 
    },
    { 
      name: "Мария", 
      text: "Орталықтың құпиялылықты сақтағанына және әр қадам сайын қолдау көрсеткеніне өте ризамын. Жатын жағдайы мен күтім деңгейі жоғары.", 
      date: "05.01.2026" 
    },
    { 
      name: "Қайрат", 
      text: "Бұл жердегі психологтардың әдісі өте нәтижелі. Өзімді түсініп, қиын кезеңнен шығуыма тікелей септігін тигізді. Рақмет!", 
      date: "15.04.2025" 
    },
    { 
      name: "Гүлнар", 
      text: "Жақынымды емдетуге бергенде алаңдап едім, бірақ мамандардың жылы қарым-қатынасы мен жүйелі бағдарламасы сенімімді ақтады. Бәріне алғысым шексіз.", 
      date: "20.11.2025" 
    },
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-rehab-light scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-rehab-dark">Пациенттеріміздің пікірлері</h2>
        
        {/* Мобильдіде карусель (кішірейтілген ені бар), Десктопта баяғыдай 2 бағанды grid */}
        <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-2 md:gap-8 snap-x snap-mandatory pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {reviews.map((rev, i) => (
            <div key={i} className="w-[85vw] max-w-[350px] md:max-w-none md:w-auto shrink-0 snap-center bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-black/5 border border-gray-50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="text-rehab-gold text-xl">★</span>
                  ))}
                </div>
                <p className="text-rehab-muted mb-6 md:mb-8 italic text-base md:text-lg leading-relaxed">
                  &quot;{rev.text}&quot;
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 md:pt-6 border-t border-gray-100">
                <span className="font-bold text-rehab-dark text-sm md:text-base">{rev.name}</span>
                <span className="text-xs md:text-sm text-gray-400 font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}