import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onBrowseProducts: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onBrowseProducts,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Generate WhatsApp order message string
  const generateWhatsAppMessage = () => {
    let msg = `*Order from iSuccess Global Store:*\n\n`;
    items.forEach((it, idx) => {
      msg += `${idx + 1}. *${it.product.name}* x ${it.quantity} = ₦${(it.product.price * it.quantity).toLocaleString()}\n`;
    });
    msg += `\n*Subtotal: ₦${subtotal.toLocaleString()}*\n\nPlease confirm availability and delivery dispatch to my location.`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAFAF8] text-stone-900 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 bg-[#40040A] text-white flex items-center justify-between border-b border-red-950/50">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#F9D67E]" />
              <h3 className="font-bold text-base tracking-tight">Your Order Cart</h3>
              <span className="text-xs bg-[#C4161F] text-white font-bold px-2 py-0.5 rounded-full">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-stone-800 text-base">Your cart is currently empty</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore our farm-fresh eggs, live poultry, parboiled rice, beans, and kitchen staples to begin.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onBrowseProducts();
                  }}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#C4161F] hover:bg-[#a51219] shadow transition-colors cursor-pointer"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs hover:border-red-900/30 transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-18 object-cover rounded-lg bg-stone-100 shrink-0"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-bold text-xs text-stone-900 leading-snug truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-stone-400 hover:text-red-600 p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      ₦{item.product.price.toLocaleString()} {item.product.unit}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity stepper */}
                      <div className="flex items-center border border-stone-200 rounded-md bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="px-2 py-0.5 text-stone-600 hover:bg-stone-200 rounded-l transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold tabular-nums text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="px-2 py-0.5 text-stone-600 hover:bg-stone-200 rounded-r transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#C4161F] tabular-nums">
                        ₦{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Summary & Dual Checkout */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600">Subtotal</span>
                <span className="font-bold text-base text-stone-900 tabular-nums">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-stone-500">
                Taxes included. Delivery calculated based on exact drop-off address.
              </p>

              <div className="space-y-2 pt-1">
                {/* 1. Direct Checkout Button */}
                <button
                  onClick={onProceedToCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs tracking-wide text-white bg-[#C4161F] hover:bg-[#a51219] shadow-md transition-all cursor-pointer"
                >
                  <span>Proceed to Delivery Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* 2. Order via WhatsApp direct button */}
                <a
                  href={CONTACT_INFO.getWhatsAppUrl(
                    `*Order from ${CONTACT_INFO.companyName} Store:*\n\n` +
                    items.map((it, idx) => `${idx + 1}. *${it.product.name}* x ${it.quantity} = ₦${(it.product.price * it.quantity).toLocaleString()}`).join('\n') +
                    `\n\n*Subtotal: ₦${subtotal.toLocaleString()}*\n\nPlease confirm availability and delivery dispatch to my location.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-stone-800 bg-[#E8F8EE] border border-emerald-300 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Order Directly via WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
