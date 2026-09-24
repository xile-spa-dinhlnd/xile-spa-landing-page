# PROJECT CONTEXT: XILE SPA LANDING PAGE

## 1. TỔNG QUAN DỰ ÁN & MỤC TIÊU KINH DOANH

- **Tên thương hiệu:** Xile Spa
- **Định vị & Mô hình dịch vụ:** Không gian chăm sóc toàn diện kết hợp giữa **Thư Giãn, Trị Liệu Da Chuyên Sâu & Phục Hồi Vận Động (Sports Rehab)**:
  1. **Gội đầu thư giãn & Dưỡng sinh:** Xoa dịu căng thẳng, chăm sóc da đầu, giải tỏa stress tức thì.
  2. **Chăm sóc da & Peel da chuyên sâu:** Trị liệu da, làm sạch chuyên sâu, peel da tái tạo tế bào (trị thâm mụn, làm sáng, trẻ hóa và phục hồi hàng rào bảo vệ da).
  3. **Rehab thể thao & Giải cơ / Giãn cơ chuyên sâu (Sports Rehab & Myofascial Release):** Giải phóng các điểm co thắt cơ (trigger points), kéo giãn cơ tầng sâu, phục hồi thể lực cho người chơi thể thao (Gym, Chạy bộ, Pickleball, Tennis...) và dân văn phòng đau mỏi cổ vai gáy, thắt lưng.
- **Loại dự án:** Landing Page đơn trang (Single-Page Landing Page) tối ưu chuyển đổi từ quảng cáo (Meta Ads, TikTok Ads) và SEO địa phương (Local SEO).
- **Mục tiêu chuyển đổi cốt lõi (Conversion Goal):**
  - Kích thích khách hàng bấm vào nút chat để nhận tư vấn & đặt lịch nhanh qua **Facebook Messenger** hoặc **Zalo**.
  - Điều hướng khách hàng xem bảng giá đầy đủ tại Menu đã triển khai: `https://xile-spa-dinhlnd.github.io/xile-spa-menu/`.
- **Triết lý sản phẩm:** Hiện đại, sang trọng, thư thái và hiệu quả thực chứng. Tốc độ tải trang cực nhanh trên mạng di động 4G (Google Core Web Vitals 95–100 điểm).

---

## 2. TECH STACK & KIẾN TRÚC KỸ THUẬT

- **Framework:** **Astro** (Static Site Generation - SSG).
- **Interactive Islands:** **React** (với client directives `client:visible`, `client:idle`).
- **Styling:** **Tailwind CSS**.
- **Ngôn ngữ:** **TypeScript** (Strict Mode, không dùng `any`).
- **Icons:** Lucide Icons.
- **Tối ưu hình ảnh:** `astro:assets` (`<Image />`).
- **Triển khai (Deployment):** GitHub Pages.

---

## 3. NGUYÊN TẮC THIẾT KẾ UI/UX (QUIET LUXURY & MODERN WELLNESS)

- **Bảng màu 60 - 30 - 10:**
  - **Màu nền (60%):** `#FDFBF7` (Kem ấm) hoặc `#FAF9F6` (Trắng ngà).
  - **Màu phụ trợ (30%):** Xanh xô thơm (`#8A9A86` / Sage Green), be ấm, xám nhạt để tạo card và phân tách section.
  - **Màu điểm nhấn (10% - Dành cho CTA/Badge):** Nâu đồng ánh kim (`#C5A880`) hoặc cam đất mềm (`#D97757`).
  - **Màu chữ chính:** Xám than ấm (`#2D3748`).
- **Typography:**
  - Heading: Serif sang trọng thanh lịch (`Cormorant Garamond`, `Playfair Display`).
  - Body & Price: Sans-serif hiện đại, rõ nét (`Plus Jakarta Sans`, `Be Vietnam Pro`).
- **Khoảng cách & Hiệu ứng:**
  - Spacing thoáng đãng (`py-20` trên desktop, `py-12` trên mobile).
  - Bo góc mềm mại (`rounded-2xl` hoặc `rounded-3xl`).
  - Đổ bóng nhẹ ấm (`shadow-spa-soft`).

---

## 4. CẤU TRÚC LANDING PAGE CHI TIẾT

1. **Header / Navbar:** Logo Xile Spa tối giản, hotline, nút CTA nhanh "Đặt Lịch Ngay".
2. **Hero Section:**
   - Tiêu đề H1 chuẩn SEO: Nêu bật 3 trụ cột (Thư Giãn Gội Đầu, Trị Liệu Làm Da/Peel & Rehab Giải Cơ Thể Thao).
   - Nút CTA chính: "Tư Vấn & Đặt Lịch Hẹn" (mở Messenger/Zalo).
   - Nút CTA phụ: "Xem Menu Dịch Vụ" (link trỏ sang Menu).
3. **Core USPs (Điểm khác biệt):**
   - Chăm sóc da chuyên sâu với kỹ thuật Peel tái tạo an toàn, cá nhân hóa.
   - Trị liệu Rehab giải cơ chuyên sâu cho cơ bắp vận động & dân văn phòng.
   - Không gian gội đầu dưỡng sinh thư thái tuyệt đối.
4. **Featured Services (3 Nhóm Dịch Vụ Chủ Lực):**
   - **Nhóm 1: Gội Đầu Dưỡng Sinh & Thư Giãn:** Đả thông kinh lạc, chăm sóc tóc & da đầu.
   - **Nhóm 2: Chăm Sóc Da & Peel Da Tái Tạo:** Trị thâm mụn, trẻ hóa da, căng bóng phục hồi.
   - **Nhóm 3: Sports Rehab & Giải Cơ Chuyên Sâu:** Giải phóng bó cơ, giãn cơ sâu, phục hồi cơ khớp.
5. **Customer Social Proof / Feedback:** Cảm nhận của khách hàng (cả khách nữ chăm da/gội đầu và khách chơi thể thao/văn phòng giải cơ).
6. **Location & Contact:** Bản đồ, địa chỉ, hotline, giờ mở cửa.
7. **Footer:** Bản quyền, chính sách, thông tin liên hệ.
8. **Floating Contact Widget (Góc dưới màn hình):** Nút Zalo + Nút Messenger (hiệu ứng pulse).

---

## 5. DỮ LIỆU TĨNH & QUY TẮC PHÁT TRIỂN

1. Không dùng backend, toàn bộ dữ liệu nằm trong `src/data/*.ts`.
2. Mọi link liên hệ sử dụng hằng số từ `src/data/contact.ts`.
3. Tuân thủ 100% chuẩn TypeScript strict mode và Zero-JS mặc định.
