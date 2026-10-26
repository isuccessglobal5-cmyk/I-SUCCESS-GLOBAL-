import React, { useState } from 'react';
import { Page } from '../types';
import { BrandLogo } from '../components/BrandLogo';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppForward = () => {
    const text = `*New Customer Inquiry via Website*\n\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`;
    window.open(CONTACT_INFO.getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION matching Mockup */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3D0308] via-[#630710] to-[#3D0308] text-white">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
          <img
            src="/src/assets/images/farm_barn_sunset_1793014764390.jpg"
            alt="Farm Landscape"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-18 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#F9D67E] uppercase block">
                GET IN TOUCH
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                We're Here To Help You
              </h1>

              <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed max-w-xl">
                Have a question, need assistance, or want to place an order? Reach out to us. We'd love to hear from you!
              </p>
            </div>

            {/* Right Large Crest Monogram matching Mockup */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="bg-black/30 backdrop-blur-xs p-6 rounded-2xl border border-white/10 shadow-2xl">
                <BrandLogo variant="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & MESSAGE FORM matching Mockup */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C4161F] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Phone
                    </h3>
                    <div className="text-xs font-semibold text-stone-800 space-y-0.5 mt-0.5">
                      <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-[#C4161F] block">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C4161F] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Email
                    </h3>
                    <div className="text-xs font-semibold text-stone-800 space-y-0.5 mt-0.5">
                      <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#C4161F] block break-all">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C4161F] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Address
                    </h3>
                    <div className="text-xs font-semibold text-stone-800 mt-1 leading-relaxed">
                      <p className="font-bold text-stone-900">{CONTACT_INFO.companyName}</p>
                      <p>{CONTACT_INFO.address.line1}</p>
                      <p>{CONTACT_INFO.address.lga}</p>
                      <p>{CONTACT_INFO.address.cityPostal}</p>
                      <p className="text-stone-500">{CONTACT_INFO.address.country}</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C4161F] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Business Hours
                    </h3>
                    <div className="text-xs font-semibold text-stone-800 space-y-0.5 mt-0.5">
                      <p>{CONTACT_INFO.businessHours.weekdays}</p>
                      <p>{CONTACT_INFO.businessHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links matching Mockup */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-xs font-bold text-stone-700 mb-3">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold hover:opacity-90"
                  >
                    f
                  </a>
                  <a
                    href={CONTACT_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-xs font-bold hover:opacity-90"
                  >
                    ig
                  </a>
                  <a
                    href={CONTACT_INFO.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:opacity-90"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: "Send Us a Message" Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">Message Received!</h3>
                  <p className="text-xs text-stone-600 max-w-md mx-auto">
                    Thank you, <strong>{fullName}</strong>. Your inquiry has been dispatched to our sales &amp; customer care desk. We will respond via phone or email shortly.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppForward}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-emerald-800 bg-[#E8F8EE] border border-emerald-300 hover:bg-emerald-100 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Continue on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone number"
                      className="w-full px-4 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold text-white bg-[#D91B24] hover:bg-[#B3141C] shadow-md transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CALLOUT BANNER: "Together for Food Security" matching Mockup */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#4E040B] via-[#7B0D18] to-[#4E040B] py-12 md:py-14 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-script italic text-[#FDF3CF]">
              Together for Food Security
            </h2>
            <p className="text-xs text-stone-200 mt-1">
              Building sustainable agro-allied supply networks from rural fields to urban dinner tables.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <BrandLogo variant="banner" onClick={() => onNavigate('home')} />
          </div>
        </div>
      </section>
    </div>
  );
};
