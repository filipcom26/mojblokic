import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Send, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { CAFE_METADATA, WORKING_HOURS } from '../data';

export default function FooterAndContact() {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const copyAddress = () => {
    navigator.clipboard.writeText(CAFE_METADATA.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) return;
    // Simulate API request
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setName('');
      setEmail('');
      setMsg('');
    }, 4000);
  };

  return (
    <section id="contact" className="bg-white pt-24 pb-0 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-berry-accent/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-berry bg-berry-accent px-3 py-1 rounded-full">
            Локација &amp; Време
          </span>
          <h2 className="font-display text-4xl font-extrabold text-gray-900 mt-3">
            Где се налази блокић?
          </h2>
          <p className="font-sans text-gray-500 text-sm mt-2 max-w-md mx-auto font-light">
            Пронађите нас у Новом Београду. Наша врата су вам отворена сваког дана за прву јутарњу кафу или вечерњи разговор.
          </p>
        </div>

        {/* Contact info and hours grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Left: Contact details & Working Hours */}
          <div className="flex flex-col justify-between space-y-8 bg-warm-cream/50 border border-warm-sand/30 p-8 sm:p-10 rounded-3xl">
            <div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-6">
                Контакт Информације
              </h3>

              {/* Address with copy button */}
              <div className="flex items-start space-x-4 mb-6 group">
                <div className="p-3 bg-white text-berry rounded-2xl shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                    Адреса
                  </span>
                  <p className="font-sans text-sm text-gray-700 font-medium group-hover:text-berry transition-colors">
                    {CAFE_METADATA.address}
                  </p>
                  <div className="flex space-x-3 mt-2">
                    <button
                      onClick={copyAddress}
                      className="inline-flex items-center space-x-1 font-sans text-xs text-berry hover:text-berry-dark font-semibold focus:outline-none cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Копирано!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Копирај adresu</span>
                        </>
                      )}
                    </button>
                    <a
                      href={CAFE_METADATA.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 font-sans text-xs text-gray-500 hover:text-berry font-semibold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Мапа</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-white text-berry rounded-2xl shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                    Телефон за информације
                  </span>
                  <a
                    href={`tel:${CAFE_METADATA.phone.replace(/\s+/g, '')}`}
                    className="font-sans text-sm text-gray-700 font-bold hover:text-berry transition-colors"
                  >
                    {CAFE_METADATA.phone}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white text-berry rounded-2xl shadow-sm">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                    Инстаграм профил
                  </span>
                  <a
                    href={CAFE_METADATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-berry font-bold hover:underline"
                  >
                    @mojblokic
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours list */}
            <div className="border-t border-warm-sand/50 pt-8">
              <h4 className="font-display text-base font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-berry" />
                <span>Радно Време</span>
              </h4>
              <div className="space-y-3 font-sans text-sm">
                {WORKING_HOURS.map((wh, idx) => (
                  <div key={idx} className="flex justify-between items-center text-gray-600">
                    <span className="font-light">{wh.days}</span>
                    <span className="font-semibold text-gray-900 bg-white px-2.5 py-1 rounded-xl shadow-sm border border-warm-sand/20">
                      {wh.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card Right: Beautiful cocktail drink visual card */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-warm-sand flex flex-col justify-end min-h-[400px]">
            <img
              src="/src/assets/images/aperol_spritz_bar_1782318330754.jpg"
              alt="Коктели у Блокићу"
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative p-8 text-white z-10 text-left">
              <span className="px-2.5 py-1 rounded-md bg-berry text-white text-[10px] font-sans font-bold uppercase tracking-widest">
                СВАКОДНЕВНИ УЖИТАК
              </span>
              <h3 className="font-display text-2xl font-bold mt-3 mb-2">
                Свратите на Аперол или Салто
              </h3>
              <p className="font-sans text-xs text-gray-300 leading-relaxed font-light">
                Након напорног дана у блоку, опустите се уз квалитетна занатска пива, коктеле на бази кафе или класичан Аперол шприц.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Map Widget Section (Centered block maps design style) */}
      <div className="w-full h-80 bg-warm-sand relative mt-16 border-t border-warm-sand">
        {/* Simple elegant styled local map banner */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.6030932578504!2d20.3789531!3d44.7990176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f0fa0be7d47%3A0xe2475e7a9e3bc8df!2zR2FuZGlqZXZhIDgxLCBCZW9ncmFkIDExMDcw!5e0!3m2!1ssr!2srs!4v1700000000000!5m2!1ssr!2srs"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Локација кафића на мапи"
          className="grayscale contrast-110 opacity-85 hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* REAL BLACK/SLATE FOOTER */}
      <footer className="bg-gray-950 text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Animated Logo */}
            <Logo size="md" showText={false} className="mb-4" />

            <span className="font-display text-2xl font-black text-white tracking-wide">
              мој блокић
            </span>
            <span className="font-hand text-xl text-berry-light mt-1.5 mb-6">
              — {CAFE_METADATA.slogan} —
            </span>

            {/* Quick navigations */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-sans font-medium text-gray-400 mb-8">
              <a href="#home" className="hover:text-white transition-colors">Почетна</a>
              <a href="#about" className="hover:text-white transition-colors">О нама</a>
              <a href="#menu" className="hover:text-white transition-colors">Мени</a>
              <a href="#promos" className="hover:text-white transition-colors">Акције</a>
              <a href="#contact" className="hover:text-white transition-colors">Контакт</a>
            </div>

            {/* Address snippet */}
            <p className="font-sans text-xs text-gray-500 mb-8 max-w-sm leading-relaxed">
              Гандијева 81, Нови Београд, 11070 Београд
              <br />
              <a href={CAFE_METADATA.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-berry-light hover:underline font-semibold mt-1 inline-block">
                @mojblokic на Инстаграму
              </a>
            </p>

            {/* Copyright line */}
            <div className="border-t border-gray-900 w-full pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 font-sans gap-4">
              <p>© 2026 Кафе &quot;Мој Блокић&quot;. Сва права задржана.</p>
              <p className="font-mono text-[10px] text-gray-700">Гандијева 81 · Нови Београд</p>
            </div>

          </div>
        </div>
      </footer>
    </section>
  );
}
