/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Page, Product, Service, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { ServiceModal } from './components/ServiceModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { MessageCircle, Check, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from './data/contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('isuccess_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('isuccess_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Scroll to top button visibility listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity}x ${product.name} to cart`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
    showToast('Your order has been recorded! Our dispatch desk will contact you.');
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-red-700 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={setCurrentPage}
            onSelectService={(s) => setSelectedService(s)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={setCurrentPage}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={setCurrentPage} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={setCurrentPage} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={setCurrentPage} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onBrowseProducts={() => {
          setIsCartOpen(false);
          setCurrentPage('products');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Product Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onGoToContact={() => {
          setSelectedService(null);
          setCurrentPage('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onGoToProducts={() => {
          setSelectedService(null);
          setCurrentPage('products');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Global Search Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectService={(s) => setSelectedService(s)}
        onNavigate={setCurrentPage}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={handleCheckoutSuccess}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#340307] text-white px-5 py-3 rounded-full shadow-2xl border border-red-800/50 flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-[#F9D67E] hover:underline cursor-pointer"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Floating WhatsApp Quick Order Button */}
      <a
        href={CONTACT_INFO.getWhatsAppUrl('Hello I-SUCCESS GLOBAL, I would like to place an order for foodstuffs and poultry.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Order"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl hover:scale-108 transition-all duration-200 group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Order on WhatsApp</span>
        {/* Tooltip on hover */}
        <span className="absolute right-15 bg-stone-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Order via WhatsApp
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-22 right-7 z-40 w-10 h-10 rounded-full bg-[#40040A] text-white hover:bg-[#630710] flex items-center justify-center shadow-lg border border-red-900/40 transition-all hover:scale-105 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
