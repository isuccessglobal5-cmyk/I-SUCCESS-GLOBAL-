export type Page = 'home' | 'services' | 'products' | 'about' | 'contact';

export type ProductCategory = 'all' | 'poultry' | 'grains' | 'beans' | 'foodstuffs' | 'others';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  unit: string;
  minOrder?: string;
  image: string;
  fallbackColor: string;
  description: string;
  features: string[];
  inStock: boolean;
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  highlights: string[];
  turnaround: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}

export interface OrderDetails {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  notes?: string;
  paymentMethod: 'delivery' | 'transfer' | 'card';
}
