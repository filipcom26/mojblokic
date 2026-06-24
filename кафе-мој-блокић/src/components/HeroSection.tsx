import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { Coffee, ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { CAFE_METADATA } from '../data';

export default function HeroSection() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Simple, premium minimalist background design */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-gray-950 via-berry-dark to-black">
        {/* Subtle architectural grid/block line decorations representing blocks */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Soft elegant warm ambient radial glow in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,52,84,0.15)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-berry/20 blur-3xl z-1 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-berry-light/15 blur-3xl z-1 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white flex flex-col items-center">
        {/* Logo and Cafe Name */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, delay: 0.1 }}
          className="mb-6"
        >
          <Logo size="xl" showText={false} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          мој <span className="text-berry-light">блокић</span>
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-hand text-3xl sm:text-4xl md:text-5xl text-warm-cream/90 mb-8 max-w-2xl leading-relaxed"
        >
          — &quot;{CAFE_METADATA.slogan}&quot; —
        </motion.p>

        {/* Short info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light"
        >
          Смештен на Новом Београду у Гандијевој 81, наш локал доноси топлу атмосферу, врхунску кафу, домаће ракије и локална занатска пива. Место где бетон блокира хладноћу, а кафа спаја људе.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md"
        >
          <button
            onClick={scrollToMenu}
            className="flex items-center justify-center space-x-2 bg-berry hover:bg-berry-light text-white font-sans font-semibold text-base px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-berry/20 active:scale-98 cursor-pointer"
          >
            <Coffee className="w-5 h-5 animate-bounce-slow" />
            <span>Истражи Мени</span>
          </button>
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-sans font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
          >
            <MapPin className="w-5 h-5 text-berry-light" />
            <span>Гандијева 81</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator (Sibling to hero content for correct bottom positioning) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 shadow-md"
      >
        <ArrowDown className="w-5 h-5 text-warm-cream/90" />
      </motion.div>
    </section>
  );
}
