/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutAndReviews from './components/AboutAndReviews';
import MenuSection from './components/MenuSection';
import FooterAndContact from './components/FooterAndContact';

export default function App() {
  return (
    <div className="min-h-screen bg-warm-cream font-sans text-gray-800 antialiased selection:bg-berry selection:text-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Story & Reviews Section */}
        <AboutAndReviews />

        {/* Dynamic Interactive Menu & Promos Section */}
        <MenuSection />

        {/* Contact info, Hours, Map & Footer Section */}
        <FooterAndContact />
      </main>
    </div>
  );
}

