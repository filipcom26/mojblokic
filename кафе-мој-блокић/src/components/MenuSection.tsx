import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Award, Flame, GlassWater, Citrus, Sparkles, Utensils } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

export default function MenuSection() {
  // Define categories we want to display sequentially
  const categoriesToShow = [
    { id: 'kafe', name: 'Кафе', icon: Coffee },
    { id: 'posebno', name: 'Посебне Кафе & Понуде', icon: Sparkles },
    { id: 'topli_napici', name: 'Топли Напици', icon: Flame },
    { id: 'limunade', name: 'Домаће Лимунаде & Освежење', icon: Citrus },
    { id: 'kokteli', name: 'Коктели', icon: Utensils },
    { id: 'piva', name: 'Пива & Жестине', icon: GlassWater },
  ];

  // Group items by category
  const getItemsByCategory = (catId: string): MenuItem[] => {
    return MENU_ITEMS.filter(item => {
      if (catId === 'piva') {
        return item.category === 'piva' || item.category === 'zestine';
      }
      return item.category === catId;
    });
  };

  return (
    <section id="menu" className="py-24 bg-warm-cream relative overflow-hidden">
      {/* Soft warm background glow */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-berry-accent/35 rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-berry/5 rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-berry bg-berry-accent px-3.5 py-1.5 rounded-full">
            Кућа укуса
          </span>
          <h2 className="font-display text-4xl font-extrabold text-gray-900 mt-4 mb-4">
            Кафе башта и мени блокића
          </h2>
          <p className="font-sans text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Добродошли у наш кутак. Пажљиво одабрана зрна кафе, свеже цеђени цитруси, занатска пива и омиљена домаћа пића — комплетна понуда на једном месту.
          </p>
        </div>

        {/* Categories Grid (Clean 2-Column Menu Sheet Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-16 items-start">
          {categoriesToShow.map((cat, catIdx) => {
            const IconComponent = cat.icon;
            const items = getItemsByCategory(cat.id);

            if (items.length === 0) return null;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: Math.min(catIdx * 0.1, 0.4) }}
                className="bg-white/40 border border-warm-sand/40 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-md hover:border-warm-sand transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3.5 mb-8 border-b border-warm-sand pb-4">
                  <div className="p-2.5 bg-berry text-white rounded-2xl shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-black text-gray-900">
                      {cat.name}
                    </h3>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-berry font-bold">
                      {items.length} {items.length === 1 ? 'артикал' : items.length < 5 ? 'артикла' : 'артикала'}
                    </span>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="group">
                      {/* Name, badges and price row */}
                      <div className="flex justify-between items-baseline mb-1">
                        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                          <h4 className="font-display text-base font-bold text-gray-900 group-hover:text-berry transition-colors duration-200">
                            {item.name}
                          </h4>
                          
                          {/* Badges */}
                          {item.badges?.map((b) => (
                            <span
                              key={b}
                              className="text-[9px] uppercase tracking-wider font-sans font-extrabold text-berry bg-berry-accent px-1.5 py-0.5 rounded-md flex-shrink-0"
                            >
                              {b}
                            </span>
                          ))}
                        </div>

                        {/* Dot Connector */}
                        <span className="flex-grow border-b border-dotted border-gray-300 mx-3 group-hover:border-berry/30 transition-colors duration-200" />

                        {/* Price */}
                        <div className="flex items-baseline space-x-1 flex-shrink-0">
                          <span className="font-display text-base font-black text-gray-900">
                            {item.price}
                          </span>
                          <span className="font-sans text-[10px] text-gray-500 uppercase font-semibold">
                            рсд
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="font-sans text-xs text-gray-500 leading-relaxed font-light pr-8 group-hover:text-gray-600 transition-colors duration-200">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
