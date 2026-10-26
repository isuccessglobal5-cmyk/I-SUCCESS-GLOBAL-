import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'poultry-production',
    title: 'Poultry Production',
    shortDesc: 'Healthy, well-managed poultry for quality meat and eggs.',
    fullDesc: 'We operate state-of-the-art bio-secure poultry housing where our broilers, layers, and cockerels are nourished on nutritionally balanced organic feed. From day-old chick brooding to mature table birds and daily egg collection, our stringent veterinary protocols guarantee birds of superior vitality and hormone-free tenderness.',
    iconName: 'Bird',
    image: '/src/assets/images/poultry_farm_chickens_1793014763521.jpg',
    highlights: [
      'Daily harvested crates of brown table eggs',
      'Live or dressed and blast-frozen broilers',
      'Veterinary inspected & NAFDAC compliant operations',
      'Contract farming options for food processors'
    ],
    turnaround: 'Same day for eggs & live birds'
  },
  {
    id: 'rice-beans-supply',
    title: 'Rice & Beans Supply',
    shortDesc: 'Premium quality rice, beans and other foodstuffs.',
    fullDesc: 'We bridge rural grain silos directly with commercial distributors, retail stores, supermarkets, boarding schools, and families. Sourcing directly from Kebbi, Kano, Benue, and Niger states, our grains undergo multi-stage sortex destoning, winnowing, and protective moisture sealing.',
    iconName: 'Wheat',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    highlights: [
      '100% stone-free parboiled long-grain rice',
      'Sweet Oloyin honey beans & sorted white cowpeas',
      'Standardized 50kg, 25kg, and 10kg tamper-proof bags',
      'Direct farm-gate price guarantee without middleman markups'
    ],
    turnaround: '24 - 48 hours delivery'
  },
  {
    id: 'general-foodstuffs',
    title: 'General Foodstuffs',
    shortDesc: 'A wide range of essential food items for your home and business.',
    fullDesc: 'An all-in-one pantry and commercial foodstuff procurement solution. We supply fresh yams, triple-refined cooking oils, red palm oil, fresh tomatoes, dry onions, Ijebu garri, crayfish, and local condiments. We eliminate the stress of crowded open-market shopping with curated doorstep logistics.',
    iconName: 'ShoppingBag',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    highlights: [
      'Comprehensive catalog of over 40 essential pantry staples',
      'Handpicked freshness and strict quality sorting',
      'Flexible packaging tailored for domestic & industrial kitchens',
      'Weekly automated pantry replenishment schedules'
    ],
    turnaround: 'Same-day express in metro hubs'
  },
  {
    id: 'bulk-wholesale',
    title: 'Bulk Orders & Wholesale',
    shortDesc: 'Great deals for businesses, retailers and bulk buyers.',
    fullDesc: 'Designed specifically for catering companies, hotels, restaurants, supermarkets, cooperatives, charity feeding drives, and retail food merchants. Take advantage of tiered wholesale volume pricing, customized pallet bagging, and dedicated account management.',
    iconName: 'PackageCheck',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    highlights: [
      'Tiered bulk discounts starting from 10+ bags / 50+ crates',
      'Flexible credit arrangements for verified corporate accounts',
      'Custom branded bagging for corporate end-of-year gifts',
      'Consistent seasonal supply buffering against market spikes'
    ],
    turnaround: 'Scheduled pallet dispatches'
  },
  {
    id: 'fast-safe-delivery',
    title: 'Fast & Safe Delivery',
    shortDesc: 'We ensure your orders get to you on time and in perfect condition.',
    fullDesc: 'Our dedicated logistics fleet utilizes temperature-conscious, shock-cushioned transit to guarantee fragile commodities like eggs, perishables like fresh tomatoes, and heavy grain bags reach your doorstep or warehouse intact and without spillage.',
    iconName: 'Truck',
    image: '/src/assets/images/farm_barn_sunset_1793014764390.jpg',
    highlights: [
      'Zero-breakage guarantee on fresh egg crate transit',
      'GPS-tracked dispatch across Lagos and interstate delivery',
      'Careful offloading and stacking at customer premises',
      'Emergency same-day dispatch for catering events'
    ],
    turnaround: 'Under 12 hours within metro zones'
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    shortDesc: 'Our team is always ready to assist you with your inquiries and orders.',
    fullDesc: 'We pride ourselves on responsive, personalized service. Whether you need a real-time price quotation, custom bulk commodity specifications, order tracking, or special event catering coordination, our dedicated agri-business representatives are available 7 days a week.',
    iconName: 'Headphones',
    image: '/src/assets/images/hero_agri_harvest_1793014763071.jpg',
    highlights: [
      'Direct WhatsApp and hotline access with quick turnaround',
      'Knowledgeable commodity market advisors',
      'Transparent order tracking from farm gate to your door',
      'Prompt resolution and product replacement guarantee'
    ],
    turnaround: 'Instant response on WhatsApp & hotline'
  }
];
