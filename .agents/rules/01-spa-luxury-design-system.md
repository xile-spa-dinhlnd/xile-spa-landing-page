# Rule: Spa & Wellness Luxury Design System

> **Mục tiêu**: Đảm bảo toàn bộ giao diện của Xile Spa toát lên vẻ thư thái, bình yên, sang trọng (Quiet Luxury / Healing Wellness). Nghiêm cấm tạo giao diện theo các template AI generic, thô cứng hoặc dùng màu sắc chói mắt.

---

## 1. BẢNG MÀU PHÂN BỔ (QUY TẮC 60 - 30 - 10)

Mọi component và layout PHẢI sử dụng đúng bảng mã màu sau:

### Màu nền chính (60% Dominant):
- Nền trang (Body background): `#FDFBF7` (Warm Cream / Kem ấm) hoặc `#FAF9F6` (Alabaster / Trắng ngà).
- **TUYỆT ĐỐI CẤM:** Sử dụng nền trắng toát `#FFFFFF` cho `<body>` hoặc container chính. Nền trắng toát gây cảm giác lạnh lẽo, chói mắt, phá vỡ trải nghiệm spa.
- Nền card / modal nổi: `#FFFFFF` (chỉ dùng cho bề mặt card có viền mờ hoặc nền kem nhạt hơn).

### Màu phụ trợ (30% Secondary & Structure):
- Sage Green (Xanh xô thơm): `#8A9A86` (tượng trưng cho thảo mộc, organic, chữa lành).
- Sage Light: `#E8EFE6` (dùng cho badge nền mềm, highlight pills).
- Warm Beige / Oat: `#F4EFE6` (dùng làm nền xen kẽ giữa các section).
- Wood Taupe / Nâu gỗ: `#7C6E65` (dùng cho phụ đề, icon viền mảnh, border nhẹ).
- Border mềm: `rgba(138, 154, 134, 0.15)` hoặc `rgba(197, 168, 128, 0.2)`.

### Màu điểm nhấn (10% Accent / CTA & Badges):
- Antique Bronze / Nâu đồng cổ điển: `#C5A880` (mang lại cảm giác đẳng cấp quý phái).
- Terracotta / Cam đất dịu: `#D97757` (cho các nút ưu đãi có thời hạn hoặc notification dot).
- Warm Gold Tint: `#D4AF37` (dành riêng cho 5 sao rating hoặc icon huy hiệu chứng nhận).

### Màu chữ & Độ tương phản:
- Text chính: `#2D3748` (Xám than ấm). **TUYỆT ĐỐI CẤM** dùng đen tuyền `#000000`.
- Text phụ (Mô tả, subtitle): `#5A6578` hoặc `#718096`.
- Text trên nền màu tối/nâu đồng: `#FFFFFF` hoặc `#FDFBF7`.

---

## 2. NGHỆ THUẬT TYPOGRAPHY (FONT CHỮ)

- **Headings (H1, H2, H3, H4):**
  - Font họ Serif: `Cormorant Garamond` hoặc `Playfair Display`.
  - Đặc tính: Chữ thanh mảnh, sang trọng, khoảng cách dòng thoáng (`leading-tight` hoặc `leading-snug`), tracking nhẹ (`tracking-wide`).
- **Body & Chữ số (p, span, button, price):**
  - Font họ Sans-serif: `Plus Jakarta Sans` hoặc `Be Vietnam Pro`.
  - Đặc tính: Bo tròn nhẹ ở các nét, nét rõ ràng, cực kỳ dễ đọc trên màn hình điện thoại ở cỡ chữ 14px–16px.
- **Giá dịch vụ & Thời lượng:**
  - Định dạng giá: Luôn kèm đơn vị `đ` hoặc `VNĐ` cách đều, hiển thị kèm thời lượng (Vd: `450.000đ / 60 phút`).

---

## 3. SPACING, SHADOWS & HIỆU ỨNG THỊ GIÁC

### Spacing (Negative Space):
- Không gian âm là yếu tố sống còn tạo nên cảm giác "sang":
  - Desktop: Section padding dọc tối thiểu `py-20` đến `py-28`.
  - Mobile: Section padding dọc `py-12` đến `py-16`.
  - Khoảng cách giữa tiêu đề section và nội dung: `mb-12` đến `mb-16`.

### Bo góc (Border Radius):
- Tất cả Card, Image Container, Modal: `rounded-2xl` (16px) hoặc `rounded-3xl` (24px).
- Nút bấm (Buttons): Bo tròn hoàn toàn `rounded-full` hoặc bo lớn `rounded-xl`.

### Shadow & Glassmorphism:
- **Shadow:** Chỉ dùng shadow tán xạ mềm tông màu ấm:
  - `box-shadow: 0 10px 30px -10px rgba(124, 110, 101, 0.08);`
  - Tránh shadow đen đậm thô ráp (`rgba(0, 0, 0, 0.5)`).
- **Glassmorphism mờ nhẹ (Navbar & Floating Bar):**
  - Nền mờ kính: `bg-[#FDFBF7]/85 backdrop-blur-md border border-[#8A9A86]/15`.

### Micro-interactions & Cảm xúc:
- Hiệu ứng hover nút: Đổi màu mượt mà trong `transition-all duration-300`, đẩy nhẹ lên `hover:-translate-y-0.5`.
- Nút Zalo / Messenger nổi: Hiệu ứng pulse sóng lan tỏa mềm mại, dịu dàng, thu hút thị giác nhưng không gây ức chế khi đọc nội dung.
