# ROADMAP — XILE SPA LANDING PAGE

> **Dự án:** Landing Page đơn trang (Single-Page) cho thương hiệu **Xile Spa**  
> **Định vị:** Mô hình chăm sóc & trị liệu toàn diện kết hợp **Gội Đầu Thư Giãn • Làm Da & Peel Da • Sports Rehab & Giải Cơ Sâu**  
> **Mục tiêu cốt lõi:** Tối ưu tỷ lệ chuyển đổi tư vấn/đặt lịch qua **Zalo & Messenger**, điều hướng xem **Menu**, và đạt chuẩn **Local SEO** với tốc độ di động 95–100 điểm Google PageSpeed.

---

## 1. TỔNG QUAN TIẾN ĐỘ DỰ ÁN (PROJECT STATUS)

```text
[Phase 0: Setup & Rules] ────────► [Phase 1: Data & UI Base] ────────► [Phase 2: Hero & USPs]
      ██████████ 100%                    ██████████ 100%                    ██████████ 100%
        (HOÀN THÀNH)                       (HOÀN THÀNH)                       (HOÀN THÀNH)

[Phase 3: Services & Proof] ─────► [Phase 4: Location & Sticky] ────► [Phase 5 & 6: SEO & Deploy]
      ██████████ 100%                     ░░░░░░░░░░  0%                    ░░░░░░░░░░  0%
        (HOÀN THÀNH)                    (TIẾP THEO)                       (CHỜ TRIỂN KHAI)
```

| Phase | Trọng tâm công việc | Trạng thái | Đầu ra dự kiến |
|:---:|---|:---:|---|
| **Phase 0** | Khởi tạo dự án, Tech Stack, Rules & Skills | <kbd>ĐÃ XONG</kbd> | Astro 5, React 19, Tailwind, `.agents/`, `AGENTS.md`, Build pass |
| **Phase 1** | Chuẩn hóa Dataset 3 trụ cột & Core UI Components | <kbd>ĐÃ XONG</kbd> | `services.ts`, `testimonials.ts`, `usps.ts`, `Button`, `Badge` |
| **Phase 2** | Xây dựng Header/Navbar, Hero Section & 3 USPs | <kbd>ĐÃ XONG</kbd> | `Navbar.astro`, `HeroSection.astro`, `UspsSection.astro` |
| **Phase 3** | Showcase 3 Nhóm Dịch Vụ & Social Proof Feedback | <kbd>ĐÃ XONG</kbd> | `ServicesSection.astro`, `FeedbackSection.astro` |
| **Phase 4** | Location, Google Maps, Footer & Floating Widget | 🟡 **Kế tiếp** | `LocationSection.astro`, `Footer.astro`, `FloatingContact.tsx` |
| **Phase 5** | Tối ưu SEO, Core Web Vitals 95–100 & Schema | ⚪ Chờ | Schema JSON-LD `BeautySalon`, Audit LCP < 1.2s, CLS = 0 |
| **Phase 6** | Kiểm thử Responsive mọi thiết bị & Deploy | ⚪ Chờ | Test iPhone/Android/Desktop, sẵn sàng xuất bản |

---

## 2. CHI TIẾT CÁC PHASE TRIỂN KHAI

### Phase 0: Thiết Lập Môi Trường & Quy Chuẩn (Đã hoàn thành ✅)
- [x] Khởi tạo mã nguồn chính thức bằng **Astro 5 + React 19 + Tailwind CSS 3.4 + TypeScript**.
- [x] Cài đặt dependencies: `@astrojs/react`, `@astrojs/tailwind`, `lucide-react`, `clsx`, `tailwind-merge`.
- [x] Thiết lập hệ thống 4 Rules và 7 Skills trong thư mục `.agents/`.
- [x] Tạo file master directive [AGENTS.md](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/AGENTS.md) kèm bảng theo dõi phiên bản.
- [x] Tạo file cấu hình liên hệ tập trung [src/data/contact.ts](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/src/data/contact.ts) với đầy đủ placeholder Fanpage/Zalo/Maps.
- [x] Tạo layout gốc [src/layouts/BaseLayout.astro](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/src/layouts/BaseLayout.astro) (Google Fonts `Cormorant Garamond` + `Plus Jakarta Sans`, Schema JSON-LD).
- [x] Build tĩnh thành công 100% (`npm run build`).

---

### Phase 1: Chuẩn Hóa Dataset & Core UI Components (Đã hoàn thành ✅)
- [x] **Dataset tĩnh (`src/data/`):**
  - [x] `services.ts`: Dữ liệu 3 nhóm dịch vụ chủ lực (Gội đầu dưỡng sinh & thư giãn; Làm da & Peel da sinh học tái sinh; Sports Rehab & Giải cơ cổ vai gáy / vận động viên).
  - [x] `testimonials.ts`: Đánh giá thực tế từ khách làm da, khách gội đầu và khách chơi thể thao/văn phòng giải cơ.
  - [x] `usps.ts`: 3 điểm khác biệt cốt lõi (Peel da đa tầng chuẩn y khoa • Sports Rehab giải cơ tầng sâu • Gội đầu thảo mộc tươi).
- [x] **Core UI Components (`src/components/common/`):**
  - [x] `Button.astro`: Đa hình (polymorphic `<a>` hoặc `<button>`), hỗ trợ biến thể `primary` (nâu đồng `#C5A880`), `secondary`, `outline`, `ghost`, kích thước `sm`/`md`/`lg`.
  - [x] `Badge.astro`: Luxury pill badge (`spa-sage`, `spa-bronze`, `spa-terracotta`, `spa-gold`) có chấm pulse tinh tế.
  - [x] `SectionHeading.astro`: Tiêu đề Serif sang trọng chuẩn SEO H2 kèm subtitle và badge dẫn dắt.
  - [x] `Container.astro`: Bọc lề chuẩn responsive (`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`).
- [x] Build TypeScript xác thực 0 lỗi (`npm run build` trong 662ms).

---

### Phase 2: Header, Hero Section & USPs 3 Trụ Cột (Đã hoàn thành ✅)
- [x] **`Navbar.astro`:**
  - [x] Tích hợp Logo thật `xile_spa_logo.png` tự động nén WebP (6kB).
  - [x] Hiển thị hotline bấm gọi nhanh (`CONTACT_CONFIG.HOTLINE_DISPLAY`).
  - [x] Điều hướng nhanh đến các section và nút CTA *"Đặt Lịch Ngay"*.
  - [x] Kính mờ cao cấp (`bg-spa-cream/85 backdrop-blur-md border-b border-spa-sage/15`).
- [x] **`HeroSection.astro`:**
  - [x] H1 chuẩn SEO: *Chạm Vào Yên Bình, Tái Sinh Năng Lượng Tự Nhiên*.
  - [x] Subtitle nêu bật 3 thế mạnh: Gội Đầu Thư Giãn, Trị Liệu Làm Da/Peel & Sports Rehab Giải Cơ Sâu.
  - [x] 2 CTA nút bấm chuyển đổi cao: *"Tư Vấn & Đặt Lịch Ngay"* (màu đồng) và *"Xem Menu Giá Chi Tiết"*.
  - [x] Khung ảnh không gian trị liệu cao cấp tối ưu qua `astro:assets` (`loading="eager"`, `fetchpriority="high"`, WebP 152kB).
  - [x] 3 Mini Features cam kết thảo mộc tươi, kỹ thuật giải cơ sâu và không gian yên tĩnh.
- [x] **`UspsSection.astro`:**
  - [x] Grid 3 card sang trọng thể hiện 3 thế mạnh độc bản với số thứ tự `01`, `02`, `03` và icon viền tinh tế.
- [x] Build tĩnh thành công 100% không cảnh báo (`npm run build` trong 913ms).

---

### Phase 3: Featured Services (3 Nhóm Dịch Vụ) & Social Proof (Hoàn thành ✅)
- [x] **`ServicesSection.astro`:**
  - [x] Layout xen kẽ image-left / image-right cho 3 nhóm dịch vụ.
  - [x] Ảnh AI-generated chất lượng cao, tự động nén WebP (~22–42kB) qua `astro:assets`.
  - [x] Service cards hiển thị badge, tagline, 3 benefits chính, giá + gạch bỏ + thời lượng.
  - [x] CTA Zalo + Xem Bảng Giá trực tiếp trên từng nhóm.
- [x] **`FeedbackSection.astro`:**
  - [x] Grid 4 cột đánh giá 5 sao với service tag, avatar initials, verified booking badge.
  - [x] Aggregate rating strip (5.0 · N đánh giá đã xác minh).
  - [x] Build pass: 0 lỗi, 0 cảnh báo TypeScript.

---

### Phase 4: Location, Google Maps, Footer & Floating Widget
- [ ] **`LocationSection.astro`:**
  - [ ] Cột thông tin: Giờ mở cửa (09:00 - 21:00), Hotline, Địa chỉ cụ thể.
  - [ ] Cột bản đồ: Nhúng Google Maps iframe mượt mà, hỗ trợ nút bấm mở ứng dụng Google Maps chỉ đường.
- [ ] **`Footer.astro`:**
  - [ ] Logo, lời giới thiệu ngắn, liên kết mạng xã hội, bản quyền © 2026 Xile Spa.
- [ ] **`FloatingContact.tsx` (React Island - `client:idle`):**
  - [ ] Nút Zalo ghim góc dưới màn hình.
  - [ ] Nút Messenger với hiệu ứng sóng lan tỏa (`animate-pulse`) thu hút bấm mà không che nội dung.

---

### Phase 5: Tối Ưu SEO & Hiệu Năng Core Web Vitals (95–100 Điểm)
- [ ] Xác thực thẻ Schema JSON-LD `BeautySalon` / `LocalBusiness` với đầy đủ danh mục dịch vụ.
- [ ] Tối ưu hóa ảnh qua `astro:assets` (`<Image />` WebP, `loading="eager"` cho LCP và `loading="lazy"` cho các ảnh phía dưới).
- [ ] Đo đạc chỉ số: LCP < 1.2s, CLS = 0.00, INP < 50ms trên giả lập mạng di động 4G.
- [ ] Kiểm tra trợ năng (Accessibility WCAG AA): `aria-label` cho mọi nút icon.

---

### Phase 6: Rà Soát Toàn Diện & Chuẩn Bị Xuất Bản
- [ ] Kiểm tra responsive trên các kích thước màn hình phổ biến: Mobile (375px - 430px), Tablet (768px - 1024px), Desktop (1280px+).
- [ ] Kiểm tra toàn bộ luồng click: Zalo, Messenger, Hotline gọi điện thoại, Link Menu.
- [ ] Hướng dẫn thay thế ảnh thật và cập nhật link Fanpage chính thức khi khách hàng bàn giao.

---

## 3. NƠI QUẢN LÝ TÀI NGUYÊN VÀ THÔNG TIN

- **Thay đổi thông tin liên hệ / Fanpage / Zalo:** Sửa trực tiếp tại [src/data/contact.ts](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/src/data/contact.ts).
- **Thêm/thay thế hình ảnh:** Đặt ảnh vào thư mục `src/assets/` (chia theo `head-spa-pics/`, `skincare-pics/`, `sport-rehab-pics/`, và ảnh banner/logo tại gốc `src/assets/`).
- **Tùy chỉnh màu sắc & Typography:** Chỉnh sửa tại [tailwind.config.mjs](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/tailwind.config.mjs).
