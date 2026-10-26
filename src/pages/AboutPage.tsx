import React from 'react';
import { Page } from '../types';
import { BrandLogo } from '../components/BrandLogo';
import { ArrowRight, ShieldCheck, Heart, Target, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3D0308] via-[#630710] to-[#3D0308] text-white">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
          <img
            src="/src/assets/images/farm_barn_sunset_1793014764390.jpg"
            alt="Farmland sunset"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#F9D67E] uppercase block">
              ABOUT ISUCCESS GLOBAL
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Rooted in Agriculture. Dedicated to Food Security.
            </h1>

            <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-normal">
              iSuccess Global was founded on a simple yet transformative conviction: that every family, food business, and community deserves seamless access to wholesome, unadulterated farm produce and hygienic poultry at honest prices.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-[#D91B24] hover:bg-[#B3141C] shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>Contact Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY & FARM INFRASTRUCTURE */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C4161F]">
                Our Journey &amp; Legacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-snug">
                Connecting Rural Harvests to Modern Kitchens
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Operating from our multi-acre bio-secure poultry ranches and nationwide sourcing network, iSuccess Global combines time-tested husbandry with modern, hygienic grading and temperature-conscious logistics.
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We work directly with contracted grain farmers across northern silos, yam cultivators in Benue, and poultry specialists to eliminate exploitative layers of middlemen. The result is supreme freshness, verified weights, and stable market pricing throughout every season.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-xs text-stone-700 font-medium">100% Organic &amp; Hormone-Free Feed Standard</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-xs text-stone-700 font-medium">Sortex Cleaned &amp; Stone-Free Grains</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-xs text-stone-700 font-medium">Zero-Breakage Egg Transit Packaging</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-xs text-stone-700 font-medium">Verified Commercial Weight Guarantees</span>
                </div>
              </div>
            </div>

            {/* Farm visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-red-950/20 relative group">
                <img
                  src="/src/assets/images/hero_agri_harvest_1793014763071.jpg"
                  alt="Farm Produce"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0308]/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-bold text-[#F9D67E] uppercase tracking-wider">
                      ...CHRIST &amp; CLASS...
                    </span>
                    <h3 className="text-base font-extrabold text-white">
                      Excellence in Agricultural Stewardship
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-16 bg-[#FAF8F5] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C4161F]">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1 mb-10">
            What Drives iSuccess Global
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#C4161F]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Uncompromising Integrity</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                What you order is precisely what gets delivered. No adulterated palm oil, no sand in garri or rice, and full honest bird weights every single time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#C4161F]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Food Security &amp; Fair Access</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                By optimizing storage, cold-chain handling, and eliminating superfluous handlers, we protect households and bulk purchasers against inflated market price surges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#C4161F]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Customer Centricity</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our operations are built around your convenience: direct WhatsApp inquiries, custom cutting/dressing of live poultry, and scheduled home or warehouse drops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALLOUT BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#4E040B] via-[#7B0D18] to-[#4E040B] py-12 md:py-14 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-script italic text-[#FDF3CF]">
              Good Food. Healthy Future.
            </h2>
            <p className="text-xs text-stone-200 mt-1">
              Join thousands of satisfied homes, restaurants, and wholesale partners.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <BrandLogo variant="banner" onClick={() => onNavigate('home')} />
          </div>
        </div>
      </section>
    </div>
  );
};
