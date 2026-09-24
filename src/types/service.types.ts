export type ServiceCategory = 'massage' | 'head-spa' | 'skincare' | 'body-treatment' | 'combo';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  durationMinutes: number;
  formattedDuration: string; // Vd: "60 phút"
  priceVND: number;
  formattedPrice: string; // Vd: "350.000đ"
  originalPriceVND?: number;
  formattedOriginalPrice?: string;
  imagePath: string;
  imageAlt: string;
  isFeatured: boolean;
  benefits: string[];
}
