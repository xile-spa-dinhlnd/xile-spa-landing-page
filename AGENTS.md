# AGENTS.md — Xile Spa Landing Page Master Directives

Dự án này là trang **Landing Page đơn trang (Single-Page)** cho thương hiệu **Xile Spa** — mô hình chăm sóc và trị liệu hiện đại, kết hợp hài hòa giữa **Thư Giãn Tinh Thần, Chăm Sóc Da Chuyên Sâu & Phục Hồi Thể Lực (Sports Rehab)**:
1. **Gội đầu thư giãn & Dưỡng sinh:** Xoa dịu mệt mỏi, chăm sóc da đầu và tóc, xả stress tức thì.
2. **Chăm sóc da & Peel da tái sinh:** Liệu trình làm da chuyên sâu, chemical/bio peel tái tạo da, trị thâm mụn, làm sáng và phục hồi.
3. **Rehab thể thao & Giải cơ / Giãn cơ sâu (Sports Rehab & Myofascial Release):** Giải phóng các điểm co cứng cơ (trigger points), phục hồi vận động sau chơi thể thao (Gym, Chạy bộ, Pickleball, Tennis...) và trị liệu đau mỏi cổ vai gáy cho dân văn phòng.

Trang web tối ưu tỷ lệ chuyển đổi tư vấn/đặt lịch qua Zalo & Facebook Messenger, điều hướng xem Menu giá và đạt chuẩn SEO địa phương.

Toàn bộ AI agent (Antigravity) hoạt động trong workspace này PHẢI đọc và tuân thủ các quy tắc dưới đây.

---

## 1. TECH STACK CHI TIẾT & BẢNG THEO DÕI PHIÊN BẢN (VERSION TRACKING)

Dưới đây là danh mục công nghệ và phiên bản chuẩn được phê duyệt cho dự án **Xile Spa**:

| Thành phần | Gói / Công nghệ | Phiên bản | Mục đích & Vai trò |
|---|---|---|---|
| **Core Framework** | `astro` | `^5.x` (Latest) | Static Site Generation (SSG), Zero-JS mặc định, tối ưu SEO & Core Web Vitals tối đa |
| **Interactive Islands** | `react`, `react-dom` | `^18.x` hoặc `^19.x` | Xử lý các UI tương tác động khi cần (Carousel, Modal đặt lịch, Floating Bar) |
| **Astro React Integration**| `@astrojs/react` | `^4.x` | Tích hợp React Islands vào Astro với các client directives (`client:visible`, `client:idle`) |
| **CSS Framework** | `tailwindcss` | `^3.4.x` | Hệ thống utility classes, custom design tokens bảng màu spa và responsive mobile-first |
| **Astro Tailwind Integration**| `@astrojs/tailwind` | `^5.x` | Tích hợp Tailwind CSS tự động vào pipeline build của Astro |
| **Ngôn ngữ lập trình** | `typescript` | `^5.x` | Strict typing, an toàn kiểu dữ liệu, cấm hoàn toàn `any` |
| **Icons Library** | `lucide-react` / `lucide-astro` | Latest | Hệ thống icon tối giản, nhẹ, chuẩn stroke thanh mảnh sang trọng |
| **Image Engine** | `sharp` (via `astro:assets`) | Tích hợp sẵn | Tự động chuyển đổi ảnh WebP/AVIF, responsive srcset, ngăn giật bố cục (CLS = 0) |
| **Môi trường & Package Manager** | `Node.js` + `npm` | Node >= 18.17 | Quản lý phụ thuộc và chạy dev server / build production |

### Các lệnh cài đặt & khởi tạo chuẩn:
- **Khởi tạo Astro:** `npm create astro@latest ./ -- --template minimal --no-git --yes`
- **Tích hợp React & Tailwind:** `npx astro add react tailwind --yes`
- **Cài thêm Icons & Utilities:** `npm install lucide-react clsx tailwind-merge`
- **Chạy môi trường phát triển (Dev Server):** `npm run dev` (mặc định tại `http://localhost:4321`)
- **Kiểm tra build thành phẩm:** `npm run build` & `npm run preview`

---

## 2. QUY CHUẨN THIẾT KẾ (LUXURY WELLNESS & SPA)
1. **Bảng màu 60 - 30 - 10:**
   - **Nền chính (60%):** `#FDFBF7` (Kem ấm) hoặc `#FAF9F6` (Trắng ngà). **TUYỆT ĐỐI KHÔNG** dùng nền trắng toát `#FFFFFF` hoặc văn bản đen kịt `#000000`.
   - **Màu phụ trợ (30%):** Xanh xô thơm (`#8A9A86` / Sage Green), be ấm, nâu gỗ nhạt để chia section/card.
   - **Màu điểm nhấn (10%):** Nâu đồng ánh kim (`#C5A880`) hoặc cam đất mềm (`#D97757`) cho nút CTA, badge, rating stars.
   - **Văn bản:** Xám than ấm (`#2D3748`).
2. **Typography:**
   - Heading (H1, H2, H3): Serif sang trọng kiêu kỳ (`Playfair Display`, `Cormorant Garamond`).
   - Body: Sans-serif hiện đại, dễ đọc trên mobile (`Plus Jakarta Sans`, `Be Vietnam Pro`).
3. **Hiệu ứng & Bo góc:**
   - Bo góc lớn mềm mại: `rounded-2xl` hoặc `rounded-3xl`.
   - Đổ bóng mịn nhẹ: `shadow-sm`, `shadow-md` với warm tone tint.
   - Spacing rộng thoáng (`py-16` đến `py-24` trên desktop, `py-12` trên mobile).

---

## 3. ZERO-JS & PERFORMANCE FIRST
- Mặc định viết bằng cú pháp `.astro` thuần túy để đạt Zero-JS khi render client.
- Nếu cần React component, chỉ nạp khi cần với `client:visible` hoặc `client:idle`.
- Mục tiêu tốc độ: **95–100 điểm Google Core Web Vitals** trên mạng 4G di động.

---

## 4. DỮ LIỆU TĨNH & PLACEHOLDER LIÊN HỆ
- Không giả định có backend. Toàn bộ dữ liệu nằm ở `src/data/*.ts`.
- Mọi link chuyển đổi (Zalo, Messenger, Hotline, Google Maps) **BẮT BUỘC** lấy từ file hằng số tập trung:
  - [src/data/contact.ts](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/src/data/contact.ts)
  - Khi chưa có Facebook Fanpage ID thật, sử dụng biến placeholder `CONTACT_CONFIG.FACEBOOK_FANPAGE_URL`.

---

## 5. BẢN ĐỒ RULES & SKILLS HỖ TRỢ
Khi thực hiện các tác vụ, hãy chủ động kích hoạt và tham chiếu các rules/skills trong `.agents/`:

### Rules (Tự động áp dụng):
- [01-spa-luxury-design-system.md](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/.agents/rules/01-spa-luxury-design-system.md)
- [02-astro-tailwind-architecture.md](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/.agents/rules/02-astro-tailwind-architecture.md)
- [03-performance-core-web-vitals.md](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/.agents/rules/03-performance-core-web-vitals.md)
- [04-conversion-seo-accessibility.md](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/.agents/rules/04-conversion-seo-accessibility.md)

### Skills (Kích hoạt theo tác vụ):
- `react-best-practices`: Chuẩn clean code React trong Astro Islands, typed props, hook hygiene.
- `tailwind-best-practices`: Thiết lập tokens, utility classes, mobile-first & responsive.
- `typescript-best-practices`: TypeScript strict standards, no `any`, typed data models.
- `luxury-ui-components`: Mẫu thiết kế component spa sang trọng (Hero, Service card, Feedback, Floating bar).
- `astro-seo-schema`: Cấu hình Schema JSON-LD `BeautySalon` & thẻ meta Open Graph.
- `lighthouse-optimizer`: Tối ưu hóa điểm số Core Web Vitals 95-100.
- `copywriting-spa-vietnamese`: Tone of voice thư giãn, sang trọng & câu từ chốt lịch.
