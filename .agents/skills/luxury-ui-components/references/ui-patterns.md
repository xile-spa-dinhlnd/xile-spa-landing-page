# UI Patterns & Code Snippets for Xile Spa

> Catalog các mẫu component Astro & Tailwind chuẩn phong cách spa cao cấp.

---

## 1. Hero Section Pattern (`Hero.astro`)

```astro
---
import { CONTACT_CONFIG } from '@/data/contact';
---

<section class="relative min-h-[90vh] flex items-center justify-center bg-spa-cream px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
  <!-- Soft background ambient glow -->
  <div class="absolute -top-24 -left-24 w-96 h-96 bg-spa-sage/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-spa-bronze/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative max-w-4xl mx-auto text-center z-10">
    <!-- Top badge -->
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spa-sage-light border border-spa-sage/20 mb-6">
      <span class="w-2 h-2 rounded-full bg-spa-sage"></span>
      <span class="text-xs uppercase tracking-widest font-medium text-spa-sage">Không gian trị liệu & dưỡng sinh</span>
    </div>

    <!-- H1 chuẩn SEO -->
    <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl text-spa-charcoal font-normal tracking-tight leading-tight mb-6">
      Chạm Vào Yên Bình, <br class="hidden sm:inline" />
      <span class="italic text-spa-bronze">Tái Sinh Năng Lượng</span> Tự Nhiên
    </h1>

    <!-- Subtitle -->
    <p class="max-w-2xl mx-auto text-base sm:text-lg text-spa-wood font-normal leading-relaxed mb-10">
      Trải nghiệm liệu trình gội đầu dưỡng sinh thảo mộc và massage thư giãn chuyên sâu tại Xile Spa. Nơi xua tan mọi áp lực đô thị trong không gian thiền định thuần khiết.
    </p>

    <!-- CTAs Group -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a 
        href={CONTACT_CONFIG.FACEBOOK_FANPAGE_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-spa-bronze hover:bg-spa-bronze/90 text-spa-cream font-medium tracking-wide shadow-spa-glow transition-all duration-300 hover:-translate-y-0.5"
      >
        Nhận Ưu Đãi Đặt Lịch Ngay
      </a>
      <a 
        href={CONTACT_CONFIG.MENU_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent hover:bg-spa-sage-light/60 text-spa-charcoal border border-spa-sage/30 font-medium tracking-wide transition-all duration-300"
      >
        Xem Menu Dịch Vụ
      </a>
    </div>
  </div>
</section>
```

---

## 2. Floating Contact Bar (`FloatingContact.astro`)

```astro
---
import { CONTACT_CONFIG } from '@/data/contact';
---

<aside class="fixed bottom-6 right-6 z-50 flex flex-col gap-3" aria-label="Kênh liên hệ nhanh">
  <!-- Nút Zalo -->
  <a 
    href={CONTACT_CONFIG.ZALO_URL} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Nhắn tin tư vấn qua Zalo Xile Spa"
    class="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#0068FF] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
  >
    <span class="font-bold text-xs">ZALO</span>
  </a>

  <!-- Nút Messenger với pulse -->
  <a 
    href={CONTACT_CONFIG.FACEBOOK_FANPAGE_URL} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Chat qua Facebook Messenger với Xile Spa"
    class="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#0084FF] to-[#00C6FF] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
  >
    <!-- Pulse animation ring -->
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0084FF] opacity-30 pointer-events-none"></span>
    <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.518 3.735 7.18V22l3.417-1.875c.917.255 1.889.393 2.848.393 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.05 12.385l-2.613-2.787-5.099 2.787 5.61-5.952 2.678 2.787 5.034-2.787-5.61 5.952z"/>
    </svg>
  </a>
</aside>
```
