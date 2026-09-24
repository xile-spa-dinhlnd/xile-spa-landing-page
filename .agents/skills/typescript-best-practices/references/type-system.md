# TypeScript Type System Definitions for Xile Spa

> Toàn bộ các định nghĩa kiểu dữ liệu mẫu chuẩn cho dự án.

```typescript
// src/types/contact.types.ts
export interface ContactConfig {
  FACEBOOK_FANPAGE_URL: string;
  ZALO_PHONE_NUMBER: string;
  ZALO_URL: string;
  HOTLINE_DISPLAY: string;
  HOTLINE_TEL: string;
  SPA_ADDRESS: string;
  GOOGLE_MAPS_EMBED_URL: string;
  GOOGLE_MAPS_DIRECTIONS_URL: string;
  MENU_URL: string;
  OPENING_HOURS: string;
}

// src/types/service.types.ts
export type ServiceCategory = 'massage' | 'head-spa' | 'skincare' | 'body-treatment' | 'combo';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  durationMinutes: number;
  priceVND: number;
  formattedPrice: string; // Vd: "350.000đ"
  originalPriceVND?: number;
  formattedOriginalPrice?: string;
  imagePath: string;
  imageAlt: string;
  isFeatured: boolean;
  benefits: string[];
  ctaUrl?: string; // Mặc định mở Zalo/Messenger
}

// src/types/testimonial.types.ts
export interface TestimonialItem {
  id: string;
  clientName: string;
  serviceUsed: string;
  rating: 5;
  comment: string;
  avatarUrl?: string;
  date: string;
  verifiedBooking: boolean;
}

// src/types/usp.types.ts
export interface SpaUSP {
  id: string;
  iconName: string;
  title: string;
  description: string;
}
```
