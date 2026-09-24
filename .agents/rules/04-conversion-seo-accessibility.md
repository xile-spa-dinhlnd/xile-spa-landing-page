# Rule: Tối Ưu Chuyển Đổi (CRO), Local SEO & Accessibility

> **Mục tiêu**: Đảm bảo Landing Page đạt tỷ lệ chuyển đổi cao nhất (khách bấm tư vấn Zalo / Messenger và xem Menu), chuẩn SEO địa phương để Google Maps / Tìm kiếm hiển thị đầy đủ thông tin, và tuân thủ các quy tắc trợ năng (Accessibility - a11y).

---

## 1. PHỄU CHUYỂN ĐỔI (CONVERSION RATE OPTIMIZATION - CRO)

Mọi khách hàng vào trang đều có mục tiêu là được tư vấn và đặt lịch hẹn dễ dàng nhất.

### 1. Phân cấp nút kêu gọi hành động (CTA Hierarchy):
- **CTA Chính (Primary CTA):**
  - Màu nền: Nâu đồng ánh kim (`bg-[#C5A880]` hoặc `bg-spa-bronze`) với text sáng (`text-white` hoặc `text-spa-cream`).
  - Văn bản hành động: *"Nhận Ưu Đãi Đặt Lịch"* hoặc *"Tư Vấn & Đặt Lịch Ngay"*.
  - Đích đến: Mở trực tiếp chat Messenger (`CONTACT_CONFIG.FACEBOOK_FANPAGE_URL`) hoặc Zalo (`CONTACT_CONFIG.ZALO_URL`).
- **CTA Phụ (Secondary CTA):**
  - Dạng nút viền mảnh (`border border-[#8A9A86] text-[#2D3748]` hoặc `bg-[#E8EFE6] text-[#2D3748]`).
  - Văn bản hành động: *"Khám Phá Menu Dịch Vụ"* hoặc *"Xem Bảng Giá Chi Tiết"*.
  - Đích đến: `https://xile-spa-dinhlnd.github.io/xile-spa-menu/` (mở tab mới với `target="_blank" rel="noopener noreferrer"`).

### 2. Floating Contact Widget (Thanh liên hệ ghim góc màn hình):
- Trên Mobile: Luôn có cụm nút ghim cố định ở góc dưới bên phải màn hình:
  - 1 nút Zalo tròn màu xanh đặc trưng hoặc phối màu kem/đồng sang trọng.
  - 1 nút Messenger có hiệu ứng `animate-pulse` nhẹ nhàng để thu hút ánh nhìn.
- Nút bấm phải đủ lớn cho ngón tay cái thao tác (tối thiểu `w-14 h-14` / `touch-target 48px`).

---

## 2. CHUẨN LOCAL SEO & STRUCTURED DATA (JSON-LD)

- **Cấu trúc thẻ tiêu đề chuẩn:**
  - `<h1>`: Duy nhất 1 thẻ trên toàn trang, nằm tại Hero section. Phải chứa từ khóa chính + tên thương hiệu (Vd: *"Xile Spa — Không Gian Dưỡng Sinh & Trị Liệu Thư Giãn Chuyên Sâu"*).
  - `<h2>`: Mỗi section một thẻ `<h2>` chứa từ khóa phụ (Dịch vụ nổi bật, Quy trình thảo mộc organic, Cảm nhận khách hàng, Vị trí spa).
- **Thẻ Meta & Open Graph:**
  - `title`: Độ dài 50-60 ký tự, hấp dẫn.
  - `meta name="description"`: 150-160 ký tự, tóm tắt giá trị khác biệt và thông điệp thư giãn.
  - `meta property="og:image"`: Ảnh kích thước `1200x630px` thể hiện không gian spa sang trọng.
- **Schema JSON-LD `BeautySalon` / `LocalBusiness`:**
  - Bắt buộc nhúng trong thẻ `<head>` của `BaseLayout.astro`.
  - Khai báo đầy đủ: `name`, `image`, `telephone`, `address`, `geo`, `openingHoursSpecification`, `priceRange`.

---

## 3. TRỢ NĂNG (ACCESSIBILITY - WCAG AA)

- **Aria Label cho các nút icon:**
  - Mọi thẻ `<a>` hoặc `<button>` chỉ có icon (như nút Zalo, Messenger, nút đóng modal, nút mạng xã hội) BẮT BUỘC phải có `aria-label="Liên hệ Xile Spa qua Zalo"` hoặc `aria-label="Gửi tin nhắn qua Facebook Messenger"`.
- **Thẻ hình ảnh:**
  - 100% thẻ `<Image />` phải có `alt` mô tả nội dung có nghĩa, không viết alt sơ sài như `alt="image"` hay `alt="spa"`.
- **Độ tương phản:**
  - Văn bản trên nền màu phải đạt tỷ lệ tương phản tối thiểu 4.5:1 đối với text thường và 3:1 đối với text lớn.
