import React from 'react';
import { Page } from '../types';
import { BrandLogo } from './BrandLogo';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (p: Page) => {
    onNavigate(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#240104] text-stone-300 border-t border-red-950/60 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-red-950/40">
          {/* Col 1: Brand Logo & Mission */}
          <div className="flex flex-col items-start gap-4">
            <BrandLogo variant="footer" onClick={() => handleNav('home')} />
            <p className="text-xs text-stone-400 leading-relaxed max-w-xs mt-1">
              Your dependable partner for high-standard poultry production, farm-fresh foodstuffs, stone-free rice, and wholesale food supply across Nigeria and beyond.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-red-950/80 hover:bg-[#C4161F] text-stone-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                f
              </a>
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-red-950/80 hover:bg-[#C4161F] text-stone-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                ig
              </a>
              <a
                href={CONTACT_INFO.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-red-950/80 hover:bg-[#25D366] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#F9D67E] uppercase mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Agricultural Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Highlights */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#F9D67E] uppercase mb-4">
              Core Offerings
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>• Live Broilers, Layers &amp; Cockerels</li>
              <li>• Farm-Fresh Crates of Brown Eggs</li>
              <li>• Sortex De-stoned Parboiled Rice (50kg)</li>
              <li>• Sweet Oloyin &amp; White Beans</li>
              <li>• Selected Fresh Benue Yams</li>
              <li>• Ijebu Garri &amp; Pure Cooking Oils</li>
              <li>• Bulk Catering &amp; Wholesale Supplies</li>
            </ul>
          </div>

          {/* Col 4: Quick Contact */}
          <div className="space-y-3 text-xs text-stone-300">
            <h4 className="text-xs font-bold tracking-widest text-[#F9D67E] uppercase mb-4">
              Direct Contact
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C4161F] shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-stone-300 leading-snug">
                <p className="font-semibold text-white">{CONTACT_INFO.companyName}</p>
                <p>{CONTACT_INFO.address.line1}</p>
                <p>{CONTACT_INFO.address.lga}</p>
                <p>{CONTACT_INFO.address.cityPostal}</p>
                <p className="text-stone-400">{CONTACT_INFO.address.country}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 pt-1">
              <Phone className="w-4 h-4 text-[#C4161F] shrink-0" />
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white">
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#C4161F] shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white break-all">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="pt-2">
              <span className="inline-block text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded">
                ● Open {CONTACT_INFO.businessHours.weekdays}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching mockup */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">iSuccess Global</span>
            <span>—</span>
            <span>...CHRIST &amp; CLASS...</span>
          </div>
          <p>© 2026 iSuccess Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
