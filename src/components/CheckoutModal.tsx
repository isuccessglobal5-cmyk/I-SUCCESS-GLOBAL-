import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle, Truck, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cityArea, setCityArea] = useState('Aba Metro / Abia State');
  const [paymentMethod, setPaymentMethod] = useState<'delivery' | 'transfer'>('delivery');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = 2500;
  const grandTotal = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const orderRef = `ISG-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedOrder(orderRef);
      setIsSubmitting(false);
      onOrderSuccess();
    }, 800);
  };

  const getConfirmationWhatsAppLink = () => {
    const text = `*New Order Confirmed (#${confirmedOrder})*\n` +
      `*Customer:* ${fullName} (${phone})\n` +
      `*Address:* ${address}, ${cityArea}\n` +
      `*Items:*\n` +
      items.map((it) => `- ${it.product.name} (x${it.quantity}): ₦${(it.product.price * it.quantity).toLocaleString()}`).join('\n') +
      `\n\n*Total Payable:* ₦${grandTotal.toLocaleString()}\n` +
      `*Payment:* ${paymentMethod === 'delivery' ? 'Pay on Delivery' : 'Direct Bank Transfer'}`;
    return CONTACT_INFO.getWhatsAppUrl(text);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        <div className="relative w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all">
          {/* Header */}
          <div className="p-5 bg-[#40040A] text-white flex items-center justify-between border-b border-red-950/40">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#F9D67E]" />
              <h3 className="font-bold text-base">Direct Farm Delivery Checkout</h3>
            </div>
            <button
              onClick={onClose}
              className="text-stone-300 hover:text-white p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {confirmedOrder ? (
            /* Confirmation View */
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-extrabold text-stone-900">
                Order Successfully Placed!
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto">
                Thank you, <strong>{fullName}</strong>. Your order reference is{' '}
                <span className="font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                  {confirmedOrder}
                </span>
                . Our logistics dispatch team has received your order and is preparing fulfillment.
              </p>

              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-stone-500">Delivery Address:</span>
                  <span className="font-medium text-stone-900">{address}, {cityArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Phone:</span>
                  <span className="font-medium text-stone-900">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Total Payable:</span>
                  <span className="font-bold text-[#C4161F]">₦{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getConfirmationWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-emerald-800 bg-[#E8F8EE] border border-emerald-300 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Notify Us on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#C4161F] hover:bg-[#a51219]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Oluwaseun Adeleke"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 812 345 6789"
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Street Address &amp; Landmarks *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 15 Admiralty Way, Lekki Phase 1"
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Location / Region
                    </label>
                    <select
                      value={cityArea}
                      onChange={(e) => setCityArea(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none bg-white"
                    >
                      <option value="Aba Metro / Abia State">Aba Metro (New Umuahia Rd / City)</option>
                      <option value="Umuahia / Abia">Umuahia &amp; Surrounding Areas</option>
                      <option value="Port Harcourt / Rivers">Port Harcourt / Rivers State</option>
                      <option value="Owerri / Imo">Owerri / Imo State</option>
                      <option value="Lagos / Western Hub">Lagos State / Western Hub</option>
                      <option value="Nationwide Express Dispatch">Nationwide Express Dispatch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Special Packaging or Delivery Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Dress and clean the live chickens, deliver before 2 PM"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none"
                  />
                </div>

                {/* Payment Option */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-stone-700 mb-2">
                    Payment Preference
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('delivery')}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                        paymentMethod === 'delivery'
                          ? 'border-[#C4161F] bg-red-50/50 text-[#C4161F]'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="font-bold text-xs">Pay on Delivery</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">Cash or POS on arrival</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('transfer')}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                        paymentMethod === 'transfer'
                          ? 'border-[#C4161F] bg-red-50/50 text-[#C4161F]'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="font-bold text-xs">Direct Bank Transfer</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">Fast electronic transfer</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Calculation */}
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200 text-xs space-y-1">
                <div className="flex justify-between text-stone-600">
                  <span>Items Subtotal:</span>
                  <span className="font-medium text-stone-900 tabular-nums">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Standard Logistics Dispatch:</span>
                  <span className="font-medium text-stone-900 tabular-nums">₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-stone-900 text-sm pt-1 border-t border-stone-200">
                  <span>Total Payable:</span>
                  <span className="text-[#C4161F] tabular-nums">₦{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#C4161F] hover:bg-[#a51219] shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming with Logistics...</span>
                  ) : (
                    <span>Confirm Order (₦{grandTotal.toLocaleString()})</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
