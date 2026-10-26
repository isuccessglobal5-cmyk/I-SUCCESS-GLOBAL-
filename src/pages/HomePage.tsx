import React from 'react';
import { Page, Product } from '../types';
import { BrandLogo } from '../components/BrandLogo';
import { PRODUCTS } from '../data/products';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Award,
  Sparkles,
  ShoppingBag,
  BadgePercent,
  Egg,
  Wheat,
  Lock,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
}) => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION matching Mockup */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3D0308] via-[#630710] to-[#3D0308] text-white">
        {/* Subtle Ambient Farm Backdrop with Red Wash */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
          <img
            src="/src/assets/images/farm_barn_sunset_1793014764390.jpg"
            alt="Farm Backdrop"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Kicker Tagline */}
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#F9D67E] uppercase">
                <span>FRESH FOOD</span>
                <span>•</span>
                <span>QUALITY GOODS</span>
                <span>•</span>
                <span>BETTER LIVING</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                Your Trusted Partner in Agriculture &amp; Food Supply
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed max-w-xl font-normal">
                At iSuccess Global, we bring you the best in poultry production, farm-fresh foodstuffs, rice, beans and more — all in one place.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-[#D91B24] hover:bg-[#B3141C] shadow-lg shadow-red-950/40 transition-transform active:scale-95 cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-4 flex items-center gap-6 text-xs text-stone-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#F9D67E]" /> Direct Farm Gate
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Truck className="w-4 h-4 text-[#F9D67E]" /> Express Metro Logistics
                </span>
              </div>
            </div>

            {/* Right Hero Column: Rich Visual Composition matching Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-red-900/40 group">
                <img
                  src="/src/assets/images/hero_agri_harvest_1793014763071.jpg"
                  alt="Harvest with Rooster, Eggs, and Rice Sacks"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0308]/70 via-transparent to-transparent" />
                
                {/* Floating Farm Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F9D67E]">
                    Quality Farm Harvest
                  </span>
                  <p className="text-xs font-bold text-white">Daily Fresh Poultry &amp; Grains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR FEATURES BAR matching Mockup */}
      <section className="bg-[#4E040B] text-white py-6 border-y border-red-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-full bg-red-900/50 border border-red-800/40 flex items-center justify-center mb-2.5 text-[#F9D67E]">
                <Egg className="w-6 h-6" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                Quality Poultry Products
              </h4>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-full bg-red-900/50 border border-red-800/40 flex items-center justify-center mb-2.5 text-[#F9D67E]">
                <Wheat className="w-6 h-6" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                Fresh &amp; Nutritious Foodstuffs
              </h4>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-full bg-red-900/50 border border-red-800/40 flex items-center justify-center mb-2.5 text-[#F9D67E]">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                Reliable Delivery
              </h4>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-full bg-red-900/50 border border-red-800/40 flex items-center justify-center mb-2.5 text-[#F9D67E]">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                Safe &amp; Secure Shopping
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SPOTLIGHT (Quick Add to Cart) */}
      <section className="py-14 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C4161F]">
                Fresh Harvest Spotlight
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                Popular Farm Staples
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C4161F] hover:text-[#9e1118] transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div
                  className="relative h-48 overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => onSelectProduct(p)}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#630710] text-[#F9D67E] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {p.categoryLabel}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => onSelectProduct(p)}
                      className="font-bold text-sm text-stone-900 group-hover:text-[#C4161F] transition-colors cursor-pointer"
                    >
                      {p.name}
                    </h3>
                    <p className="text-[11px] text-stone-500 line-clamp-2 mt-1">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block text-[10px]">Price:</span>
                      <span className="text-sm font-extrabold text-[#C4161F] tabular-nums">
                        ₦{p.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(p, 1)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#C4161F] hover:bg-[#a51219] shadow-xs cursor-pointer active:scale-95 transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "WHY CHOOSE ISUCCESS GLOBAL?" SECTION matching Mockup */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Why Choose iSuccess Global?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto mt-2 leading-relaxed">
            We are committed to providing quality agricultural products and excellent service to meet your needs.
          </p>

          {/* 4 Icon Pillars matching Mockup */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-12">
            {/* 1. Quality Products */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#C4161F] mb-4 shadow-xs">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Quality Products</h3>
              <p className="text-xs text-stone-500 mt-1 max-w-[180px]">
                Rigorous bio-security &amp; organic feed standards.
              </p>
            </div>

            {/* 2. Affordable Prices */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#C4161F] mb-4 shadow-xs">
                <BadgePercent className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Affordable Prices</h3>
              <p className="text-xs text-stone-500 mt-1 max-w-[180px]">
                Farm-gate prices without exploitative middleman fees.
              </p>
            </div>

            {/* 3. Fast & Reliable Delivery */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#C4161F] mb-4 shadow-xs">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Fast &amp; Reliable Delivery</h3>
              <p className="text-xs text-stone-500 mt-1 max-w-[180px]">
                Safe handling for fragile eggs and quick turnaround.
              </p>
            </div>

            {/* 4. Customer Satisfaction */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#C4161F] mb-4 shadow-xs">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Customer Satisfaction</h3>
              <p className="text-xs text-stone-500 mt-1 max-w-[180px]">
                Personalized support and quality replacement assurance.
              </p>
            </div>
          </div>

          {/* Button matching mockup */}
          <div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold text-white bg-[#D91B24] hover:bg-[#B3141C] shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CALLOUT BANNER: "Good Food Builds a Healthier Future" matching Mockup */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#4E040B] via-[#7B0D18] to-[#4E040B] py-14 md:py-16 text-white text-center">
        <div className="absolute inset-0 opacity-25 mix-blend-overlay">
          <img
            src="/src/assets/images/farm_barn_sunset_1793014764390.jpg"
            alt="Farm Landscape"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left md:max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-script italic text-[#FDF3CF]">
              Good Food Builds a Healthier Future
            </h2>
            <p className="text-xs text-stone-200 mt-1">
              Supplying nutritious farm produce to households, institutions, and businesses across the nation.
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
