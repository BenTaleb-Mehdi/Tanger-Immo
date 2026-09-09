export interface Apartment {
  id: string;
  title: string;
  description: string;
  price: number;
  currency?: string;
  period?: 'month' | 'day' | 'year' | 'total';
  location: {
    address: string;
    city: string;
    neighborhood: string;
    lat?: number;
    lng?: number;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    area: number; // in sq meters
    floor?: number;
    furnished?: boolean;
    parking?: boolean;
    terrace?: boolean;
    elevator?: boolean;
    seaView?: boolean;
  };
  amenities: string[];
  images: string[];
  type: 'apartment' | 'villa' | 'penthouse' | 'duplex' | 'studio';
  status: 'for-rent' | 'for-sale';
  featured?: boolean;
  createdAt: string;
  agent?: {
    name: string;
    phone: string;
    whatsapp: string;
    email: string;
    avatar: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}
