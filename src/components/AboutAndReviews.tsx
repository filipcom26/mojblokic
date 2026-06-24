import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Award, Sparkles, Heart, Star, Quote } from 'lucide-react';
import { CAFE_REVIEWS } from '../data';

export default function AboutAndReviews() {
  const features = [
    {
      icon: <Coffee className="w-6 h-6 text-berry" />,
      title: "Пажљиво Одабрана Кафа",
      desc: "Наш еспресо је пажљиво припремљен од премијум зрна како би сваки гутљај имао богат и пун укус."
    },
    {
      icon: <Award className="w-6 h-6 text-berry" />,
      title: "Традиција & Квалитет",
      desc: "Од праве домаће кафе са ратлуком до домаћих ракија од дуње и кајсије, чувамо квалитет који волиш."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-berry" />,
      title: "Локална Срца",
      desc: "Поносно точимо локално Салто занатско пиво (Лагер и ИПА) произведено управо у Београду."
    },
    {
      icon: <Heart className="w-6 h-6 text-berry" />,
      title: "Пет-Френдли & Топао Дом",
      desc: "Код нас су сви чланови породице добродошли, укључујући и твоје кућне љубимце."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-warm-cream rounded-full mix-blend-multiply filter blur-2xl opacity-60 -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-berry-accent rounded-full mix-blend-multiply filter blur-3xl opacity-40 -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-berry bg-berry-accent px-3 py-1 rounded-full">
              Наша прича
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-4 mb-6">
              Како су хладни блокови постали <span className="text-berry">најтоплији</span> кутак града?
            </h2>
            <p className="font-sans text-gray-600 text-base sm:text-lg mb-6 leading-relaxed font-light">
              Нови Београд је препознатљив по својим бетонским кулама, великим улицама и безбројним &quot;блоковима&quot;. Али иза те монументалне архитектуре куца топло, комшијско срце. 
            </p>
            <p className="font-sans text-gray-600 text-base sm:text-lg mb-8 leading-relaxed font-light">
              Баш ту, на адреси <strong className="font-medium text-gray-800">Гандијева 81</strong>, створили смо <strong className="font-medium text-berry">мој блокић</strong> — кафић који представља игру речи и спој новобеоградских блокова и топлих градивних коцкица заједнице. Облик наше шољице у логотипу направљен је од малих блокова из којих се издиже мирисна пара, симболишући топлину која настаје када се окупимо.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex space-x-4 p-4 rounded-2xl bg-warm-cream/50 border border-warm-sand/30 hover:bg-warm-cream transition-colors duration-200">
                  <div className="flex-shrink-0 p-2 bg-white rounded-xl shadow-sm h-11 w-11 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-gray-900 mb-1">
                      {f.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-warm-sand">
              <img
                src="/src/assets/images/latte_art_cozy_1782318315081.jpg"
                alt="Лате Арт у Блокићу"
                className="w-full h-full object-cover aspect-4/3 hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="font-hand text-2xl text-berry-accent">топла страна блока</span>
                <p className="font-sans text-xs text-gray-200 mt-1">Пажљиво припремљен сваки дан за тебе.</p>
              </div>
            </div>
            
            {/* Cute absolute sticker card */}
            <div className="absolute -bottom-6 -right-4 bg-berry text-white px-5 py-4 rounded-2xl shadow-xl transform rotate-3 max-w-xs hidden sm:block">
              <p className="font-hand text-xl text-center leading-tight">
                &quot;Смех и кафа су најбољи комшијски зачини.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Title */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-berry">
            Утисци наших гостију
          </span>
          <h3 className="font-display text-3xl font-extrabold text-gray-900 mt-2">
            Реч нашег комшилука
          </h3>
          <p className="font-sans text-gray-500 text-sm mt-2 max-w-lg mx-auto font-light">
            Сазнајте зашто нас становници блокова 44, 45, 63 и целе Гандијеве улице бирају сваког дана.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAFE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-warm-cream/40 border border-warm-sand/50 rounded-3xl p-8 relative flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:scale-101"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-berry/10">
                <Quote className="w-12 h-12 stroke-current" />
              </div>

              <div>
                {/* Custom Coffee Cup ratings */}
                <div className="flex items-center space-x-1 mb-4 text-berry">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-sans text-gray-600 text-sm italic leading-relaxed mb-6 font-light">
                  &quot;{review.text}&quot;
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-warm-sand/50 pt-4 mt-2">
                <div className="flex flex-col">
                  <span className="font-display text-sm font-bold text-gray-900">
                    {review.author}
                  </span>
                  <span className="font-sans text-[10px] text-berry font-medium uppercase tracking-wider">
                    {review.authorDetails || "Локални Гост"}
                  </span>
                </div>
                <span className="font-sans text-xs text-gray-400 font-light flex-shrink-0 ml-2">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
