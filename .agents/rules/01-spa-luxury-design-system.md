# Rule: Spa & Wellness Luxury Design System

> **Mục tiêu**: Đảm bảo toàn bộ giao diện của Xile Spa toát lên vẻ thư thái, bình yên, sang trọng (Quiet Luxury / Healing Wellness). Nghiêm cấm tạo giao diện theo các template AI generic, thô cứng hoặc dùng màu sắc chói mắt.

---

## 1. BẢNG MÀU PHÂN BỔ (QUY TẮC 60 - 30 - 10)

Mọi component và layout PHẢI sử dụng đúng bảng mã màu sau:

### Màu nền chính (60% Dominant - Warm Sanctuary):
- Nền trang (Body background): `#FAF5EE` (Warm Silk Cream / Kem ấm lụa tự nhiên) hoặc `#F4ECE1` (Sand Ivory / Trắng cát ngà ấm).
- **TUYỆT ĐỐI CẤM:** Sử dụng nền trắng toát `#FFFFFF` cho `<body>` hoặc container chính. Nền trắng toát gây cảm giác lạnh lẽo, chói mắt, phá vỡ trải nghiệm spa.
- Nền card / modal nổi: `#FCF9F5` (Kem ngọc mềm) với viền ấm mờ `border-spa-bronze/15`.

### Màu phụ trợ (30% Secondary & Structure):
- Sage Green (Xanh xô thơm thảo mộc ấm): `#758771` (tượng trưng cho thảo mộc đun nấu, organic, chữa lành).
- Sage Light: `#E7ECE4` (dùng cho badge nền mềm, highlight pills).
- Warm Beige / Oat: `#EDE4D5` (dùng làm nền xen kẽ giữa các section).
- Wood Taupe / Nâu gỗ tếch ấm: `#6E5D53` (dùng cho phụ đề, icon viền mảnh, border nhẹ).
- Border mềm: `rgba(189, 139, 83, 0.15)` (ánh đồng ấm) hoặc `rgba(110, 93, 83, 0.1)`.

### Màu điểm nhấn (10% Accent / CTA & Badges):
- Amber Bronze / Nâu đồng hổ phách ấm: `#BD8B53` (mang lại cảm giác đẳng cấp quý phái, ấm cúng như ngọn nến).
- Terracotta / Cam đất nung dịu: `#C86A4B` (cho các nút ưu đãi hoặc notification dot).
- Warm Honey Gold: `#CFA13D` (dành riêng cho 5 sao rating hoặc icon huy hiệu chứng nhận).

### Màu chữ & Độ tương phản:
- Text chính: `#2C241F` (Nâu than trầm ấm / Warm Deep Espresso). **TUYỆT ĐỐI CẤM** dùng đen tuyền `#000000` hoặc xám xanh lạnh.
- Text phụ (Mô tả, subtitle): `#6E5D53` hoặc `#8A7B72` (nâu sương mờ ấm).
- Text trên nền màu tối/nâu đồng: `#FAF5EE` hoặc `#FFFFFF`.

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
