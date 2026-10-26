import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, ShoppingBag, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 900);
  };

  const totalPrice = product.price * quantity;

  const waLink = CONTACT_INFO.getWhatsAppUrl(
    `Hello ${CONTACT_INFO.companyName}, I would like to order: ${product.name} (Quantity: ${quantity}). Please let me know the delivery timeframe.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-stone-700 bg-white/80 rounded-full shadow-xs hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image section */}
            <div className="relative bg-stone-100 h-64 md:h-full min-h-[280px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute top-4 left-4 bg-[#7A0C16] text-[#F9D67E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                {product.categoryLabel}
              </div>
            </div>

            {/* Content section */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-widest">
                  Farm Direct Sourced
                </span>
                <h3 className="text-xl font-extrabold text-stone-900 mt-0.5">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#C4161F] tabular-nums">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {product.unit}
                  </span>
                </div>

                <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Features list */}
                <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="pt-4 border-t border-stone-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-700">Select Quantity:</span>
                  <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-stone-50">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1 text-stone-700 hover:bg-stone-200 text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-bold tabular-nums text-stone-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-1 text-stone-700 hover:bg-stone-200 text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                  <span>Total Calculated:</span>
                  <span className="text-base font-extrabold text-stone-900 tabular-nums">
                    ₦{totalPrice.toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleAdd}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#C4161F] hover:bg-[#a51219] shadow transition-all cursor-pointer"
                  >
                    {addedNotice ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add To Cart</span>
                      </>
                    )}
                  </button>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-800 bg-[#E8F8EE] border border-emerald-300 hover:bg-emerald-100 transition-colors text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>

                {/* Trust mini-strip */}
                <div className="flex items-center justify-between pt-2 text-[10px] text-stone-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Quality Verified
                  </span>
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-blue-600" /> Doorstep Logistics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
