import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'live-chickens',
    name: 'Live Chickens',
    category: 'poultry',
    categoryLabel: 'Poultry',
    price: 6500,
    unit: 'per bird (2.2kg - 2.8kg avg)',
    image: '/src/assets/images/poultry_farm_chickens_1793014763521.jpg',
    fallbackColor: 'from-amber-700 to-amber-900',
    description: 'Farm-raised, organic-fed healthy broilers and cockerels. Raised under strict veterinary supervision with zero hormone injections for premium tender meat.',
    features: [
      'Healthy active live birds',
      'Average weight 2.2kg – 3.0kg',
      'Option for live pickup or humane dressing/cleaning',
      'Bulk discounts for events and caterers'
    ],
    inStock: true,
    popular: true
  },
  {
    id: 'chicken-eggs',
    name: 'Chicken Eggs',
    category: 'poultry',
    categoryLabel: 'Poultry',
    price: 4800,
    unit: 'per crate (30 eggs)',
    image: '/src/assets/images/hero_agri_harvest_1793014763071.jpg',
    fallbackColor: 'from-amber-600 to-orange-800',
    description: 'Freshly gathered brown table eggs from free-roaming, nutrient-fed layers. Rich golden yolks with sturdy shells and high protein value.',
    features: [
      'Fresh daily collection',
      'Carefully candled and sorted for quality',
      'Sturdy egg crates to prevent breakage',
      'Wholesale cartons (12 crates) available'
    ],
    inStock: true,
    popular: true
  },
  {
    id: 'rice',
    name: 'Rice (Premium Parboiled)',
    category: 'grains',
    categoryLabel: 'Rice & Grains',
    price: 78000,
    unit: 'per 50kg bag',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-stone-600 to-amber-900',
    description: 'Stone-free, polished long grain parboiled rice. Cooks non-sticky with excellent grain expansion, ideal for households, restaurants, and celebrations.',
    features: [
      '100% stone-free sortex cleaned',
      'Long-grain parboiled',
      'Also available in 25kg (₦40,000) and 10kg bags',
      'Long shelf-life vacuum-stitched bags'
    ],
    inStock: true,
    popular: true
  },
  {
    id: 'beans',
    name: 'Beans (Oloyin & White)',
    category: 'beans',
    categoryLabel: 'Beans',
    price: 54000,
    unit: 'per 50kg bag',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-red-900 to-amber-950',
    description: 'Naturally sweet Oloyin (honey) beans and premium clean white beans. Weevil-free, clean handpicked grains with rapid cooking time.',
    features: [
      'Natural honey-sweet taste (Oloyin)',
      'Zero chemical storage odors',
      'Cleaned and sifted of debris',
      'Available in 25kg and 50kg bags'
    ],
    inStock: true,
    popular: true
  },
  {
    id: 'yam',
    name: 'Yam (Selected Fresh Tubers)',
    category: 'foodstuffs',
    categoryLabel: 'Foodstuffs',
    price: 3500,
    unit: 'per large tuber (5 tubers ₦16,500)',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-amber-800 to-stone-900',
    description: 'Heavy, mature Abuja and Benue yams with dense, dry white pulp. Perfect for smooth pounded yam, boiling, roasting, and frying.',
    features: [
      'Firm, dry-textured variety for perfect pounded yam',
      'Sourced directly from Benue & Abuja farm gates',
      'Thoroughly inspected against rot or bruises',
      'Available by single tuber, 5-tuber set, or wholesale pickup'
    ],
    inStock: true
  },
  {
    id: 'soya-beans',
    name: 'Soya Beans',
    category: 'beans',
    categoryLabel: 'Beans',
    price: 42000,
    unit: 'per 50kg bag',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-yellow-700 to-amber-900',
    description: 'High-protein, clean golden soya beans. Ideal for soymilk, baby weaning foods, tofu (beske), animal feeds, and industrial food processing.',
    features: [
      'High oil and protein content',
      'De-stoned and mechanically winnowed',
      'Sourced from certified organic seed stocks',
      'Wholesale tonnages available on request'
    ],
    inStock: true
  },
  {
    id: 'maize',
    name: 'Maize (Yellow & White Corn)',
    category: 'grains',
    categoryLabel: 'Rice & Grains',
    price: 38000,
    unit: 'per 50kg bag',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-amber-500 to-amber-800',
    description: 'Well-dried, mold-free yellow and white maize grains. Suitable for ogi/akamu, poultry feed formulation, cornmeal, and commercial milling.',
    features: [
      'Low moisture content (<12% for safe storage)',
      'Rich in natural beta-carotene (yellow variety)',
      'Free from aflatoxins and pests',
      'Direct farm-gate pricing'
    ],
    inStock: true
  },
  {
    id: 'cooking-oil',
    name: 'Cooking Oil (Pure Veg & Palm)',
    category: 'foodstuffs',
    categoryLabel: 'Foodstuffs',
    price: 14500,
    unit: 'per 5 Litre (25L ₦68,000)',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-amber-600 to-yellow-600',
    description: 'Triple-refined clear vegetable oil and traditional unadulterated cold-pressed red palm oil. Cholesterol-free, pure aroma, and rich color.',
    features: [
      'Fortified with Vitamin A',
      'Zero trans-fats and zero foaming',
      'Sealed tamper-proof food-grade kegs',
      'Available in 5L, 10L, and 25L drums'
    ],
    inStock: true,
    popular: true
  },
  {
    id: 'tomatoes',
    name: 'Tomatoes (Fresh Farm Baskets)',
    category: 'foodstuffs',
    categoryLabel: 'Foodstuffs',
    price: 18000,
    unit: 'per medium basket (Big Raffia ₦34,000)',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-red-600 to-rose-900',
    description: 'Firm, fleshy Jos & Kano plum tomatoes. Thick pulp with low water content, giving your stews and jollof rice rich crimson color and natural taste.',
    features: [
      'Freshly delivered weekly in climate-ventilated trucks',
      'High flesh-to-seed ratio',
      'Minimal perishables sorting guarantee',
      'Same-day express delivery available in Lagos'
    ],
    inStock: true
  },
  {
    id: 'onions',
    name: 'Onions (Aliero Purple & White)',
    category: 'foodstuffs',
    categoryLabel: 'Foodstuffs',
    price: 22000,
    unit: 'per half-bag (Full bag ₦42,000)',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-purple-800 to-rose-950',
    description: 'Pungent, dry-skinned Aliero red and white onions. Cured properly for prolonged shelf stability without sprouting or rotting.',
    features: [
      'High pungency and concentrated aroma',
      'Double-skin outer layer for 3-month shelf life',
      'Sorted for medium to large bulb sizes',
      'Mesh ventilated packing'
    ],
    inStock: true
  },
  {
    id: 'garri',
    name: 'Garri (Ijebu White & Yellow)',
    category: 'foodstuffs',
    categoryLabel: 'Foodstuffs',
    price: 28000,
    unit: 'per 50kg bag',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-amber-200 to-amber-700',
    description: 'Extra-crisp, crunchy Ijebu garri with signature tangy sourness, and palm oil infused yellow garri. Fried to perfection, stone-free and grit-free.',
    features: [
      'Floating drinking garri with rich sour kick',
      'Yellow garri enriched with palm oil for eba',
      'Triple-sieved for ultra-fine texture',
      'Sand-free & moisture-sealed'
    ],
    inStock: true
  },
  {
    id: 'other-foodstuffs',
    name: 'Other Foodstuffs (Pepper, Egusi, Spices)',
    category: 'others',
    categoryLabel: 'Others',
    price: 9500,
    unit: 'custom pack / paint rubber',
    image: '/src/assets/images/grains_foodstuffs_display_1793014764127.jpg',
    fallbackColor: 'from-emerald-800 to-amber-900',
    description: 'Hand-peeled melon (Egusi), Ogbono seeds, Rodo habanero peppers, Sombo cayenne, Crayfish, Plantain bunches, and traditional food spices.',
    features: [
      'Machine and hand-peeled clean Egusi',
      'High-draw original Ogbono',
      'Direct sourcing for caterers & restaurants',
      'Custom bundle builder available upon request'
    ],
    inStock: true
  }
];
