# Rule: Tối Ưu Hiệu Năng & Google Core Web Vitals (95–100 Điểm)

> **Mục tiêu**: Đảm bảo Landing Page đạt điểm số tối đa (95–100) trên Google PageSpeed Insights cho thiết bị di động (Mobile 4G). Tốc độ tải trang cực nhanh là yếu tố then chốt để giảm chi phí chạy quảng cáo Facebook/TikTok Ads và tăng tỷ lệ giữ chân khách hàng.

---

## 1. TIÊU CHUẨN CORE WEB VITALS BẮT BUỘC

| Chỉ số | Mục tiêu tối thiểu | Giải pháp kỹ thuật |
|---|---|---|
| **LCP** (Largest Contentful Paint) | **< 1.2 giây** | Hero image tải `loading="eager"`, `fetchpriority="high"`, nén WebP/AVIF. |
| **CLS** (Cumulative Layout Shift) | **= 0.00** | Luôn quy định rõ `width`, `height` và `aspect-ratio` cho mọi thẻ `<img>`, video hoặc placeholder. |
| **INP / FID** (Interactivity) | **< 50 mili-giây** | Zero-JS mặc định với `.astro`, không nạp các bundle script nặng nề. |
| **FCP** (First Contentful Paint) | **< 0.8 giây** | Inline critical CSS, font-display: swap, DNS preconnect. |

---

## 2. QUY CHUẨN XỬ LÝ HÌNH ẢNH VỚI `astro:assets`

- **BẮT BUỘC dùng `<Image />` component của Astro:**
  ```astro
  ---
  import { Image } from 'astro:assets';
  import heroImage from '@/assets/hero-spa.jpg';
  ---

  <!-- Ảnh Hero: Tải ưu tiên, không lazy -->
  <Image 
    src={heroImage} 
    alt="Không gian thư giãn trị liệu tại Xile Spa" 
    width={1200}
    height={800}
    format="webp"
    quality={85}
    loading="eager"
    fetchpriority="high"
    class="w-full h-auto object-cover rounded-3xl"
  />
  ```
- **Ảnh dưới màn hình đầu tiên (Below the fold):**
  - Luôn sử dụng `loading="lazy"` và `decoding="async"`.
- **Kích thước ảnh:**
  - Không bao giờ để ảnh gốc dung lượng > 500KB.
  - Sử dụng định dạng hiện đại `webp` hoặc `avif`.

---

## 3. TỐI ƯU HÓA PHÔNG CHỮ (TYPOGRAPHY OPTIMIZATION)

1. **Self-hosted hoặc Google Fonts có preconnect:**
   - Nếu dùng Google Fonts, chèn thẻ tối ưu vào `<head>` trong `BaseLayout.astro`:
     ```html
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
     ```
2. **`font-display: swap`:**
   - Luôn kèm thuộc tính này để tránh hiện tượng mất chữ tạm thời (FOIT - Flash of Invisible Text).

---

## 4. QUY TẮC BUNDLE & THƯ VIỆN BÊN NGOÀI

- **TUYỆT ĐỐI KHÔNG** cài đặt các thư viện UI cồng kềnh:
  - Cấm: Bootstrap, jQuery, Material UI, Ant Design, Semantic UI.
- **Icon:**
  - Sử dụng SVG nội tuyến tối ưu hóa hoặc `lucide-astro` / `lucide-react` (chỉ import đúng icon cần dùng, không import wildcard).
- **Mã theo dõi (Meta Pixel / TikTok Pixel / Google Tag):**
  - Đặt tải bất đồng bộ `async` hoặc `defer`.
  - Không để script chặn luồng render chính của DOM.
