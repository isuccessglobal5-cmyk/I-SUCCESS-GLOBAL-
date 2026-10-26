import React, { useState } from 'react';
import { Page, Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { ArrowRight, ShoppingCart, Filter } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: Page) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');

  const filterTabs: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'poultry', label: 'Poultry' },
    { id: 'grains', label: 'Rice & Grains' },
    { id: 'beans', label: 'Beans' },
    { id: 'foodstuffs', label: 'Foodstuffs' },
    { id: 'others', label: 'Others' },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="w-full">
      {/* 1. HERO SECTION matching Mockup */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3D0308] via-[#630710] to-[#3D0308] text-white">
        <div className="absolute inset-0 z-0 opacity-35 mix-blend-overlay pointer-events-none">
          <img
            src="/src/assets/images/grains_foodstuffs_display_1793014764127.jpg"
            alt="Farm harvest display"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-18 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#F9D67E] uppercase block">
                OUR PRODUCTS
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Fresh, Quality &amp; Affordable
              </h1>

              <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed max-w-xl">
                We offer a wide range of agricultural products, foodstuffs and poultry items to meet your needs.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('products-grid');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-[#D91B24] hover:bg-[#B3141C] shadow-lg transition-transform active:scale-95 cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side Visual Header Photo matching Mockup */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-red-900/50">
                <img
                  src="/src/assets/images/grains_foodstuffs_display_1793014764127.jpg"
                  alt="Market Foodstuffs"
                  className="w-full h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS & PRODUCTS CATALOG matching Mockup */}
      <section id="products-grid" className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs matching Mockup */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 sm:gap-3">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C4161F] text-white shadow-md'
                      : 'bg-white text-stone-700 border border-stone-200 hover:border-red-800/40 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 12-Card Grid matching Mockup (4 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Product Image */}
                <div
                  className="relative h-36 sm:h-44 overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => onSelectProduct(p)}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-[#54060D]/90 backdrop-blur-xs text-[#F9D67E] text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                    {p.categoryLabel}
                  </div>
                </div>

                {/* Content & Order Action matching Mockup */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between text-center space-y-3">
                  <div>
                    <h3
                      onClick={() => onSelectProduct(p)}
                      className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-[#C4161F] transition-colors cursor-pointer line-clamp-1"
                    >
                      {p.name}
                    </h3>
                    <p className="text-[11px] font-bold text-[#C4161F] tabular-nums mt-0.5">
                      ₦{p.price.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-stone-400 truncate">
                      {p.unit}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => onAddToCart(p, 1)}
                      className="w-full py-2 px-3 rounded-full text-xs font-bold text-white bg-[#C4161F] hover:bg-[#a51219] shadow-xs active:scale-95 transition-all cursor-pointer"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-stone-500 text-sm">No products found in this category.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-3 text-xs font-bold text-[#C4161F] underline"
              >
                Reset to All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. CALLOUT BANNER: "Quality Products. Great Prices." matching Mockup */}
      <section className="bg-[#C4161F] text-white py-4 px-4 sm:px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-white shrink-0" />
            <span className="font-extrabold text-sm sm:text-base tracking-wide">
              Quality Products. Great Prices.
            </span>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-[#C4161F] bg-white hover:bg-stone-100 shadow transition-colors cursor-pointer"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
