# JSON-LD Schema Templates for BeautySalon / LocalBusiness

> Đoạn mã JSON-LD nhúng trực tiếp vào thẻ `<head>` của `BaseLayout.astro`.

```astro
---
import { CONTACT_CONFIG } from '@/data/contact';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Xile Spa",
  "image": "https://xilespa.vn/assets/images/og-xile-spa.jpg",
  "telephone": CONTACT_CONFIG.HOTLINE_DISPLAY,
  "url": "https://xilespa.vn",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Địa chỉ Xile Spa (Placeholder)",
    "addressLocality": "Hồ Chí Minh",
    "addressRegion": "Hồ Chí Minh",
    "addressCountry": "VN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:30"
    }
  ],
  "sameAs": [
    CONTACT_CONFIG.FACEBOOK_FANPAGE_URL,
    CONTACT_CONFIG.MENU_URL
  ]
};
---

<script type="application/ld+json" set:html={JSON.stringify(schemaData)} />
```
