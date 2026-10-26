import React from 'react';
import { Service } from '../types';
import { X, Check, ArrowRight, PhoneCall, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onGoToContact: () => void;
  onGoToProducts: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onGoToContact,
  onGoToProducts,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-stone-700 bg-white/80 rounded-full shadow-xs hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner image */}
          <div className="relative h-48 bg-stone-900">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
              <div>
                <span className="text-[10px] font-bold text-[#F9D67E] uppercase tracking-widest bg-red-950/70 px-2 py-0.5 rounded">
                  iSuccess Global Solution
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <p className="text-sm text-stone-700 leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Highlights */}
            <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-xl border border-stone-200">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C4161F]" />
                Key Operational Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Turnaround Badge */}
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>
                Standard Fulfillment / Dispatch Time: <strong>{service.turnaround}</strong>
              </span>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => {
                  onClose();
                  onGoToProducts();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#C4161F] hover:bg-[#a51219] shadow transition-colors"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onClose();
                    onGoToContact();
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  Send Inquiry
                </button>
                <a
                  href={CONTACT_INFO.getWhatsAppUrl(`Hello ${CONTACT_INFO.companyName}, I would like to inquire about your ${service.title} services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-emerald-800 bg-[#E8F8EE] border border-emerald-300 hover:bg-emerald-100 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
