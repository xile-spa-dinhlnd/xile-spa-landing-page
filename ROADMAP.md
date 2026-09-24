# ROADMAP — XILE SPA LANDING PAGE

> **Dự án:** Landing Page đơn trang (Single-Page) cho thương hiệu **Xile Spa**  
> **Định vị:** Mô hình chăm sóc & trị liệu toàn diện kết hợp **Gội Đầu Thư Giãn • Làm Da & Peel Da • Sports Rehab & Giải Cơ Sâu**  
> **Mục tiêu cốt lõi:** Tối ưu tỷ lệ chuyển đổi tư vấn/đặt lịch qua **Zalo & Messenger**, điều hướng xem **Menu**, và đạt chuẩn **Local SEO** với tốc độ di động 95–100 điểm Google PageSpeed.

---

## 1. TỔNG QUAN TIẾN ĐỘ DỰ ÁN (PROJECT STATUS)

```text
[Phase 0: Setup & Rules] ────────► [Phase 1: Data & UI Base] ────────► [Phase 2: Hero & USPs]
      ██████████ 100%                     ░░░░░░░░░░  0%                    ░░░░░░░░░░  0%
        (HOÀN THÀNH)                      (TIẾP THEO)                      (CHỜ TRIỂN KHAI)

[Phase 3: Services & Proof] ─────► [Phase 4: Location & Sticky] ────► [Phase 5 & 6: SEO & Deploy]
      ░░░░░░░░░░  0%                      ░░░░░░░░░░  0%                    ░░░░░░░░░░  0%
    (CHỜ TRIỂN KHAI)                    (CHỜ TRIỂN KHAI)                   (CHỜ TRIỂN KHAI)
```

| Phase | Trọng tâm công việc | Trạng thái | Đầu ra dự kiến |
|:---:|---|:---:|---|
| **Phase 0** | Khởi tạo dự án, Tech Stack, Rules & Skills | <kbd>ĐÃ XONG</kbd> | Astro 5, React 19, Tailwind, `.agents/`, `AGENTS.md`, Build pass |
| **Phase 1** | Chuẩn hóa Dataset 3 trụ cột & Core UI Components | 🟡 **Kế tiếp** | `services.ts`, `testimonials.ts`, `usps.ts`, `Button`, `Badge` |
| **Phase 2** | Xây dựng Header/Navbar, Hero Section & 3 USPs | ⚪ Chờ | `Navbar.astro`, `HeroSection.astro`, `UspsSection.astro` |
| **Phase 3** | Showcase 3 Nhóm Dịch Vụ & Social Proof Feedback | ⚪ Chờ | `ServicesSection.astro`, `FeedbackSection.astro` |
| **Phase 4** | Location, Google Maps, Footer & Floating Widget | ⚪ Chờ | `LocationSection.astro`, `Footer.astro`, `FloatingContact.tsx` |
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

### Phase 1: Chuẩn Hóa Dataset & Core UI Components (Mục tiêu tiếp theo 🎯)
- [ ] **Dataset tĩnh (`src/data/`):**
  - [ ] `services.ts`: Dữ liệu 3 nhóm dịch vụ chủ lực:
    - *Nhóm 1:* Gội đầu dưỡng sinh & thư giãn thảo mộc (thời lượng, giá, benefits).
    - *Nhóm 2:* Làm da & Peel da tái sinh chuyên sâu (thải độc, trị thâm mụn, căng bóng).
    - *Nhóm 3:* Sports Rehab & Giải cơ / Giãn cơ sâu (cổ vai gáy, thắt lưng, myofascial release).
  - [ ] `testimonials.ts`: Đánh giá thực tế từ cả khách nữ làm da/gội đầu và khách chơi thể thao/văn phòng giải cơ.
  - [ ] `usps.ts`: 3 điểm khác biệt cốt lõi (Công nghệ peel an toàn • Chuyên viên giải cơ thể thao • Không gian thư thái).
- [ ] **Core UI Components (`src/components/common/`):**
  - [ ] `Button.astro`: Hỗ trợ biến thể `primary` (nâu đồng `#C5A880`), `outline`, `ghost`, kích thước `sm`/`md`/`lg`.
  - [ ] `Badge.astro`: Hiển thị tag dịch vụ (*Best Seller*, *Hot Liệu Trình*, *Rehab Chuyên Sâu*).
  - [ ] `SectionHeading.astro`: Tiêu đề Serif sang trọng kèm subtitle và badge định hướng.
  - [ ] `Container.astro`: Bọc lề chuẩn responsive (`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`).

---

### Phase 2: Header, Hero Section & USPs 3 Trụ Cột
- [ ] **`Navbar.astro`:**
  - [ ] Logo Xile Spa tối giản thanh lịch.
  - [ ] Hotline hiển thị nhanh (`CONTACT_CONFIG.HOTLINE_DISPLAY`).
  - [ ] Nút CTA *"Đặt Lịch"* nhanh trên header.
  - [ ] Hiệu ứng kính mờ (glassmorphism) mượt mà khi cuộn trang.
- [ ] **`HeroSection.astro`:**
  - [ ] Tiêu đề H1 chuẩn SEO nêu bật: *Chăm Sóc Toàn Diện: Thư Giãn, Trị Liệu Da & Phục Hồi Thể Thao*.
  - [ ] Subtitle dẫn dắt cảm xúc chữa lành & tái sinh năng lượng.
  - [ ] 2 nút CTA: Nút chính *"Tư Vấn & Nhận Ưu Đãi"* (mở Messenger/Zalo) + Nút phụ *"Xem Menu Dịch Vụ"*.
  - [ ] Banner thể hiện không gian clinic & spa hiện đại, ấm áp.
- [ ] **`UspsSection.astro`:**
  - [ ] 3 thẻ Card nổi bật 3 thế mạnh độc bản (Peel Da Đa Tầng • Sports Rehab Chuyên Sâu • Gội Đầu Thảo Dược).

---

### Phase 3: Featured Services (3 Nhóm Dịch Vụ) & Social Proof
- [ ] **`ServicesSection.astro`:**
  - [ ] Thiết kế Showcase 3 khối dịch vụ lớn riêng biệt, rõ ràng từng chuyên khoa:
    1. *Khối 1: Gội Đầu Dưỡng Sinh & Thư Giãn* (Ảnh bồn gội, thời lượng, mức giá, lợi ích).
    2. *Khối 2: Làm Da & Peel Da Tái Sinh* (Ảnh liệu trình peel da, công dụng sáng da/giảm thâm, phục hồi).
    3. *Khối 3: Sports Rehab & Giải Cơ Sâu* (Ảnh kỹ thuật viên giải cơ, giải tỏa co thắt cơ, phục hồi vận động).
  - [ ] Nút CTA trực tiếp trên từng card trỏ về tư vấn đặt lịch.
  - [ ] Link điều hướng sang Menu đầy đủ (`CONTACT_CONFIG.MENU_URL`).
- [ ] **`FeedbackSection.astro`:**
  - [ ] Grid đánh giá 5 sao từ khách hàng đa dạng (chăm da, gội đầu, giải cơ thể thao).
  - [ ] Trích dẫn cảm xúc, avatar chân dung và chứng nhận *"Đã trải nghiệm dịch vụ"*.

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
- **Thêm/thay thế hình ảnh:** Đặt ảnh vào thư mục `src/assets/images/` (chia theo `hero/`, `services/`, `space/`, `testimonials/`).
- **Tùy chỉnh màu sắc & Typography:** Chỉnh sửa tại [tailwind.config.mjs](file:///Users/dinhlu2482/Desktop/XileSpa/xile-spa-landing-page/tailwind.config.mjs).
