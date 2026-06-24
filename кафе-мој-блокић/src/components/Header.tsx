import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react';
import { CAFE_METADATA } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-warm-cream/95 backdrop-blur-md shadow-md py-2 border-b border-warm-sand'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <Logo size="sm" showText={false} />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-berry group-hover:text-berry-light transition-colors">
                мој блокић
              </span>
              <span className="text-[10px] uppercase tracking-widest font-sans font-medium text-gray-500">
                Гандијева 81
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-sans font-medium text-sm text-gray-700">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-berry transition-colors duration-200 cursor-pointer"
            >
              Почетна
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-berry transition-colors duration-200 cursor-pointer"
            >
              О нама
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="hover:text-berry transition-colors duration-200 cursor-pointer"
            >
              Мени
            </button>
            <button
              onClick={() => scrollToSection('promos')}
              className="hover:text-berry transition-colors duration-200 cursor-pointer"
            >
              Акције
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-berry transition-colors duration-200 cursor-pointer"
            >
              Контакт & Радно Време
            </button>
          </nav>

          {/* Desktop Social & Call Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={CAFE_METADATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-berry-accent text-berry hover:bg-berry hover:text-white transition-all duration-300 shadow-sm"
              title="Инстаграм профил"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`tel:${CAFE_METADATA.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-berry text-white hover:bg-berry-dark transition-all duration-300 font-sans text-xs font-semibold shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Позови нас</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={CAFE_METADATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-berry-accent text-berry shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-berry hover:bg-berry-accent transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-warm-cream/98 backdrop-blur-lg border-b border-warm-sand shadow-lg py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4 font-sans font-medium text-base text-gray-800">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left py-2 hover:text-berry border-b border-gray-100 pb-2"
            >
              Почетна
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 hover:text-berry border-b border-gray-100 pb-2"
            >
              О нама
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-left py-2 hover:text-berry border-b border-gray-100 pb-2"
            >
              Мени
            </button>
            <button
              onClick={() => scrollToSection('promos')}
              className="text-left py-2 hover:text-berry border-b border-gray-100 pb-2"
            >
              Акције
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 hover:text-berry pb-2"
            >
              Контакт & Радно Време
            </button>

            <div className="pt-4 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${CAFE_METADATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-berry text-white font-sans font-semibold text-sm shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Позови нас</span>
              </a>
              <a
                href={CAFE_METADATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-white border border-warm-sand text-gray-700 font-sans font-semibold text-sm shadow-sm"
              >
                <MapPin className="w-4 h-4 text-berry" />
                <span>Мапа Гандијева 81</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
