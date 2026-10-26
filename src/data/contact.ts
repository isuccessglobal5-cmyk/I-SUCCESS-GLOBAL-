export const CONTACT_INFO = {
  companyName: 'I-SUCCESS GLOBAL',
  phone: '+234 912 423 3808',
  phoneRaw: '+2349124233808',
  phoneDigits: '2349124233808',
  email: 'isuccessglobal5@gmail.com',
  address: {
    line1: 'No. 32 New Umuahia Road',
    lga: 'Aba South Local Government Area',
    cityPostal: 'Aba - 450002',
    country: 'Nigeria (NG)',
    oneLine: 'No. 32 New Umuahia Road, Aba South LGA, Aba - 450002, Nigeria (NG)',
  },
  businessHours: {
    weekdays: 'Mon – Sat: 8:00 AM – 6:00 PM',
    sunday: 'Sunday: 10:00 AM – 4:00 PM',
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
  getWhatsAppUrl: (message?: string) => {
    const baseUrl = 'https://wa.me/2349124233808';
    return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
  },
};
