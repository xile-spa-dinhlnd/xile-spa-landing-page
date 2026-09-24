export type ServiceCategory = 'head-spa' | 'skincare-peel' | 'sports-rehab' | 'combo';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: ServiceCategory;
  categoryLabel: string; // Vd: "Gội Đầu Thư Giãn" | "Làm Da & Peel Da" | "Rehab Giải Cơ"
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
  badge?: string; // Vd: "Best Seller" | "Hot Liệu Trình" | "Rehab Chuyên Sâu"
  benefits: string[];
}
