import React, { useState } from 'react';
import { Product, Service, Page } from '../types';
import { PRODUCTS } from '../data/products';
import { SERVICES } from '../data/services';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectService: (service: Service) => void;
  onNavigate: (page: Page) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectService,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchedProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(trimmed) ||
      p.description.toLowerCase().includes(trimmed) ||
      p.categoryLabel.toLowerCase().includes(trimmed)
  );

  const matchedServices = SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(trimmed) ||
      s.shortDesc.toLowerCase().includes(trimmed)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center p-4 pt-16 sm:pt-24 text-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        <div className="relative w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all">
          {/* Search bar */}
          <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-[#40040A] text-white">
            <Search className="w-5 h-5 text-[#F9D67E]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search eggs, live chickens, rice, beans, yam, wholesale..."
              className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-stone-300 font-medium"
              autoFocus
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-stone-300 hover:text-white p-1">
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-stone-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
            {/* Products Results */}
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-100 text-xs font-bold text-stone-500 uppercase tracking-wider">
                <span>Products &amp; Foodstuffs ({matchedProducts.length})</span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('products');
                  }}
                  className="text-[#C4161F] hover:underline"
                >
                  View All
                </button>
              </div>

              {matchedProducts.length === 0 ? (
                <p className="text-xs text-stone-400 py-2">No matching products found.</p>
              ) : (
                <div className="space-y-2">
                  {matchedProducts.slice(0, 5).map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onClose();
                        onSelectProduct(p);
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-10 h-10 object-cover rounded-lg bg-stone-100"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-stone-900">{p.name}</h4>
                          <span className="text-[11px] text-stone-500">
                            ₦{p.price.toLocaleString()} {p.unit}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Services Results */}
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-100 text-xs font-bold text-stone-500 uppercase tracking-wider">
                <span>Agricultural Services ({matchedServices.length})</span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('services');
                  }}
                  className="text-[#C4161F] hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="space-y-2">
                {matchedServices.slice(0, 3).map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      onClose();
                      onSelectService(s);
                    }}
                    className="p-2.5 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 cursor-pointer transition-colors"
                  >
                    <h4 className="text-xs font-bold text-stone-900">{s.title}</h4>
                    <p className="text-[11px] text-stone-500 truncate mt-0.5">{s.shortDesc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
