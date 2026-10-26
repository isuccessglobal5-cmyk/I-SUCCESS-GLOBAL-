import React, { useState } from 'react';
import { Page } from '../types';
import { BrandLogo } from './BrandLogo';
import { Search, ShoppingBag, Menu, X, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'services', label: 'Services' },
    { page: 'products', label: 'Products' },
    { page: 'about', label: 'About Us' },
    { page: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#40040A] text-white shadow-xl border-b border-red-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Brand Logo & Title */}
          <div className="flex items-center gap-3 shrink-0">
            <BrandLogo
              variant="header"
              onClick={() => handleLinkClick('home')}
            />
            <div
              onClick={() => handleLinkClick('home')}
              className="cursor-pointer text-left hidden sm:block pl-1 border-l border-red-900/40"
            >
              <div className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
                <span>iSuccess</span>
                <span className="text-[#F5D061] font-bold">Global</span>
              </div>
              <p className="text-[10px] text-red-200/70 tracking-wider uppercase font-medium">
                Agri &amp; Food Solutions
              </p>
            </div>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative py-1 text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#F9D67E]'
                      : 'text-stone-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C4161F] shadow-[0_0_8px_#C4161F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Interactive Affordances (Search, Cart, Direct WhatsApp/Contact) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search foodstuffs and products"
              className="p-2 text-stone-200 hover:text-[#F9D67E] hover:bg-red-950/40 rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="View Cart"
              className="relative p-2 text-stone-200 hover:text-[#F9D67E] hover:bg-red-950/40 rounded-full transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D91B24] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg ring-2 ring-[#40040A] animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Order Quick Call / WhatsApp */}
            <a
              href={CONTACT_INFO.getWhatsAppUrl('Hello iSuccess Global, I would like to inquire about your farm products')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#25D366]/20 text-[#86efac] border border-[#25D366]/30 hover:bg-[#25D366]/30 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#340307] border-t border-red-900/30 px-5 pt-3 pb-6 space-y-2 animate-in fade-in duration-200 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#C4161F] text-white'
                      : 'text-stone-200 hover:bg-red-950/50 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs uppercase tracking-wider text-red-200 font-bold">Active</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-red-900/30 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="flex items-center gap-2 text-xs font-medium text-stone-200 bg-red-950/60 px-4 py-2 rounded-lg"
            >
              <ShoppingBag className="w-4 h-4 text-[#F9D67E]" />
              <span>Cart ({cartCount} items)</span>
            </button>

            <a
              href={CONTACT_INFO.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-700/30 px-3.5 py-2 rounded-lg"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
