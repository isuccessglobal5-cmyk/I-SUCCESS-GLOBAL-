import React from 'react';
import { Page, Service } from '../types';
import { SERVICES } from '../data/services';
import { BrandLogo } from '../components/BrandLogo';
import { ArrowRight, Egg, Wheat, ShoppingBag, PackageCheck, Truck, Headphones } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
  onSelectService: (service: Service) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectService,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Bird':
        return <Egg className="w-5 h-5 text-white" />;
      case 'Wheat':
        return <Wheat className="w-5 h-5 text-white" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-white" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-white" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-white" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-white" />;
      default:
        return <Wheat className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION matching Mockup */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3D0308] via-[#630710] to-[#3D0308] text-white">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
          <img
            src="/src/assets/images/poultry_farm_chickens_1793014763521.jpg"
            alt="Poultry Farm"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-18 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#F9D67E] uppercase block">
                OUR SERVICES
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                We Provide Quality Agricultural &amp; Food Solutions
              </h1>

              <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed max-w-xl">
                From poultry production to foodstuffs and more, we are here to serve you with the best.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#D91B24] hover:bg-[#B3141C] shadow transition-all cursor-pointer"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side Visual Header Photo matching Mockup */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-red-900/50">
                <img
                  src="/src/assets/images/poultry_farm_chickens_1793014763521.jpg"
                  alt="Poultry Chickens"
                  className="w-full h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 6 SERVICE CARDS GRID matching Mockup */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image with Icon Badge */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Circular Red Icon badge in corner like mockup */}
                  <div className="absolute -bottom-4 right-6 w-10 h-10 rounded-full bg-[#C4161F] border-2 border-white flex items-center justify-center shadow-md">
                    {getIcon(s.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-[#C4161F] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {s.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <button
                      onClick={() => onSelectService(s)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-full text-xs font-bold text-white bg-[#C4161F] hover:bg-[#a51219] shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CALLOUT BANNER: "Quality Products. Real Value." matching Mockup */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#4E040B] via-[#7B0D18] to-[#4E040B] py-12 md:py-14 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-script italic text-[#FDF3CF]">
              Quality Products. Real Value.
            </h2>
            <p className="text-xs text-stone-200 mt-1">
              Experience the pinnacle of fresh agriculture and transparent farm distribution.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-[#D91B24] hover:bg-[#B3141C] shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <BrandLogo variant="banner" onClick={() => onNavigate('home')} />
          </div>
        </div>
      </section>
    </div>
  );
};
