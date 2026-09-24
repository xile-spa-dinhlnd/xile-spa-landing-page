# PROJECT CONTEXT: XILE SPA LANDING PAGE

## 1. TỔNG QUAN DỰ ÁN & MỤC TIÊU KINH DOANH

- **Tên thương hiệu:** Xile Spa
- **Loại dự án:** Landing Page đơn trang (Single-Page Landing Page) phục vụ chiến dịch chạy quảng cáo (Meta Ads, TikTok Ads) và tối ưu SEO địa phương (Local SEO).
- **Mục tiêu chuyển đổi cốt lõi (Conversion Goal):**
  - Kích thích khách hàng bấm vào nút chat để tư vấn đặt lịch qua **Facebook Messenger** hoặc **Zalo**.
  - Điều hướng khách hàng xem bảng giá đầy đủ tại Menu đã triển khai: `https://xile-spa-dinhlnd.github.io/xile-spa-menu/`.
- **Triết lý sản phẩm:** Tối giản, sang trọng, mang lại cảm giác thư giãn (healing/wellness). Website phải đạt tốc độ tải trang cực nhanh trên mạng di động 4G/5G (Google Core Web Vitals 95–100 điểm).

---

## 2. TECH STACK & KIẾN TRÚC KỸ THUẬT

- **Framework:** **Astro** (chế độ Static Site Generation - SSG).
- **Styling:** **Tailwind CSS**.
- **Ngôn ngữ:** **TypeScript**.
- **Interactive Islands (Đảo tương tác):** **React** (CHỈ dùng khi thực sự cần thiết, ví dụ: Image Carousel/Slider hoặc Modal nếu có).
- **Icons:** Lucide Icons hoặc SVG nội tuyến tối ưu.
- **Tối ưu hình ảnh:** Thư viện tích hợp `astro:assets` (`<Image />`).
- **Triển khai (Deployment):** GitHub Pages

---

## 3. NGUYÊN TẮC THIẾT KẾ UI/UX (SPA & HEALING STYLE)

Mọi giao diện do AI tạo ra hoặc chỉnh sửa PHẢI tuân thủ các quy chuẩn sau:

### Bảng màu (Quy tắc 60 - 30 - 10)

- **Màu nền (60%):** `#FDFBF7` (Kem ấm) hoặc `#FAF9F6` (Trắng ngà). TUYỆT ĐỐI KHÔNG dùng màu trắng tinh `#FFFFFF` làm nền toàn trang hoặc màu đen kịt `#000000` cho văn bản.
- **Màu phụ trợ (30%):** Xanh xô thơm (`#8A9A86` / Sage Green), be ấm, nâu gỗ nhạt để tạo các khối card hoặc phân cách section.
- **Màu điểm nhấn (10% - Dành cho CTA/Badge):** Nâu đồng cổ điển (`#C5A880`) hoặc cam đất mềm mại (`#D97757`).
- **Màu chữ chính:** Xám than ấm (`#2D3748`), không dùng đen nguyên chất để tránh tạo cảm giác chói mắt.

### Typography (Font chữ)

- **Heading (H1, H2, H3):** Serif sang trọng, thanh mảnh (`Playfair Display`, `Cormorant Garamond`).
- **Body text (p, span, li):** Sans-serif hiện đại, dễ đọc trên di động (`Plus Jakarta Sans`, `Be Vietnam Pro`).

### Khoảng cách & Hiệu ứng

- **Negative Space (Khoảng trắng):** Khoảng đệm section thoáng rộng (`py-16` đến `py-24` trên Desktop, `py-12` trên Mobile).
- **Bo góc:** Mềm mại (`rounded-2xl` hoặc `rounded-3xl`).
- **Shadow:** Đổ bóng rất nhẹ, mờ mịn (`shadow-sm`, `shadow-md` với tông màu ấm).

---

## 4. CẤU TRÚC TRANG (LANDING PAGE SECTIONS)

Trang bao gồm các thành phần được sắp xếp theo thứ tự chuyển đổi từ trên xuống dưới:

1. **Header / Navbar:** Logo Xile Spa tối giản, hotline, nút CTA nhanh.
2. **Hero Section:**
   - Tiêu đề H1 chuẩn SEO nêu bật giá trị cốt lõi (Vd: Dịch vụ spa, gội đầu dưỡng sinh & thư giãn chuyên sâu).
   - Nút CTA chính: "Nhận Ưu Đãi / Tư Vấn Ngay" (mở Messenger/Zalo).
   - Nút CTA phụ: "Xem Menu Dịch Vụ" (link trỏ sang `https://xile-spa-dinhlnd.github.io/xile-spa-menu/`).
3. **Core USPs (Điểm khác biệt):** 3-4 thế mạnh (Không gian chuẩn organic, Kỹ thuật viên lành nghề, Dược liệu tự nhiên).
4. **Featured Services (Dịch vụ nổi bật):** Trích chọn 3-4 gói dịch vụ "chủ lực" kèm hình ảnh, thời lượng, mức giá và nút bấm chuyển tiếp sang Menu.
5. **Customer Social Proof / Feedback:** Hình ảnh khách hàng thực tế và đánh giá tích cực.
6. **Location & Contact:** Bản đồ, địa chỉ cụ thể, giờ mở cửa.
7. **Footer:** Thông tin bản quyền, liên kết xã hội, chính sách.
8. **Floating Contact Widget (Ghim góc dưới màn hình):**
   - 1 nút Zalo: `https://zalo.me/<PHONE_NUMBER>`
   - 1 nút Messenger: `https://m.me/<FANPAGE_ID>` (có hiệu ứng pulse nhẹ thu hút bấm).

---

## 5. BẮT BUỘC VỀ SEO & PERFORMANCE

- **Zero-JS by Default:** Toàn bộ Header, Hero, USPs, Featured Services, Feedback và Footer PHẢI viết bằng cú pháp `.astro` thuần túy. KHÔNG bọc vào React Component nếu không có tương tác người dùng phức tạp.
- **Client Directives:** Nếu dùng React Component, chỉ sử dụng `client:visible` hoặc `client:idle`. Tránh dùng `client:load` trừ khi bắt buộc.
- **Tối ưu hình ảnh:** Bắt buộc import ảnh thông qua `<Image />` từ `astro:assets` để tự động chuyển sang WebP/AVIF và chống giật bố cục (CLS = 0).
- **Heading Hierarchy:** Duy nhất **1 thẻ `<h1>`** trên toàn trang. Thẻ `<h2>` cho từng section.
- **Structured Data:** Bắt buộc nhúng Schema JSON-LD `BeautySalon` / `LocalBusiness` vào thẻ `<head>` của layout.
- **Accessibility:** Mọi thẻ `<a>`, `<button>` dạng icon (không có text) phải có thuộc tính `aria-label`.

---

## 6. QUY TẮC DÀNH CHO AI KHI SINH MÃ (AI CODING RULES)

1. **Không giả định có Backend:** Đây là trang tĩnh 100%, không viết code gọi API REST hay kết nối database. Mọi dữ liệu (dịch vụ, feedback) lưu trực tiếp trong các file tĩnh (`src/data/*.ts`).
2. **Không cài thư viện thừa:** Không tự ý cài đặt thêm các thư viện UI cồng kềnh (như Material-UI, Ant Design, Bootstrap). Chỉ dùng Tailwind CSS.
3. **Giữ phong cách code sạch:**
   - Dùng TypeScript strict mode, khai báo interface/type rõ ràng cho props.
   - Code mobile-first: Ưu tiên kích thước và trải nghiệm trên điện thoại trước, sau đó mới dùng breakpoint `md:`, `lg:` cho máy tính.
