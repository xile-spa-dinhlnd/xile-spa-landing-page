# Rule: Kiến Trúc Kỹ Thuật Astro & Tailwind CSS

> **Mục tiêu**: Đảm bảo cấu trúc source code rõ ràng, khai thác tối đa sức mạnh của Astro Static Site Generation (SSG), Zero-JS mặc định và tuân thủ chặt chẽ TypeScript strict mode.

---

## 1. NGUYÊN TẮC ZERO-JS BY DEFAULT

Astro tạo ra HTML tĩnh thuần túy theo mặc định. Điều này mang lại tốc độ tải trang gần như tức thì.

- **Mọi section tĩnh PHẢI dùng `.astro`:**
  - Header / Navbar
  - Hero Section
  - USPs (Điểm khác biệt)
  - Featured Services (Danh sách dịch vụ nổi bật)
  - Social Proof / Testimonials (nếu dạng grid hoặc flex scroll)
  - Location & Map
  - Footer
- **Chỉ sử dụng React (`.tsx`) khi BẮT BUỘC:**
  - Image Carousel / Before-After Slider tương tác kéo chuột.
  - Interactive Filter Tabs (nếu người dùng cần lọc danh mục dịch vụ ngay trên trang).
  - Modal / Drawer đặt lịch popup.
- **Client Hydration Directives:**
  - `client:visible`: Ưu tiên hàng đầu cho các component nằm dưới màn hình đầu tiên (fold).
  - `client:idle`: Dành cho các widget cần tương tác sau khi trang đã render xong.
  - **TUYỆT ĐỐI HẠN CHẾ:** `client:load` trên trang tĩnh, tránh làm chậm chỉ số First Input Delay (FID) hoặc Interaction to Next Paint (INP).

---

## 2. CẤU TRÚC THƯ MỤC CHUẨN MỰC (SECTION-BASED MODULAR)

```text
src/
├── assets/                  # Tài nguyên tĩnh tối ưu qua astro:assets
│   ├── images/
│   │   ├── hero/            # Banner không gian thư giãn
│   │   ├── services/        # Hình ảnh từng gói liệu trình spa
│   │   ├── space/           # Không gian nội thất spa, thảo mộc
│   │   └── testimonials/    # Ảnh chân dung/feedback khách hàng
│   └── icons/               # SVG icons nội bộ tối ưu
├── components/              # Phân tầng UI component mạch lạc
│   ├── common/              # Component dùng chung (Button.astro, Badge.astro, SectionHeading.astro, Container.astro)
│   ├── layout/              # Khung giao diện cố định (Navbar.astro, Footer.astro, MobileMenu.astro)
│   ├── sections/            # Từng block Section hoàn chỉnh trên Landing Page
│   │   ├── HeroSection.astro
│   │   ├── UspsSection.astro
│   │   ├── ServicesSection.astro
│   │   ├── FeedbackSection.astro
│   │   └── LocationSection.astro
│   └── islands/             # Các React Islands (.tsx) tương tác động
│       ├── FloatingContact.tsx  # Cụm nút Zalo/Messenger nổi góc màn hình
│       └── TestimonialSlider.tsx # Slider kéo trượt feedback (nếu có)
├── data/                    # Nguồn dữ liệu tĩnh (BẮT BUỘC tập trung tại đây)
│   ├── contact.ts           # Thông tin liên hệ, hotline, Fanpage placeholder, Zalo
│   ├── services.ts          # Danh sách gói dịch vụ, giá, thời lượng
│   ├── testimonials.ts      # Đánh giá khách hàng, số sao, avatar
│   └── usps.ts              # Các điểm mạnh cốt lõi
├── layouts/                 # BaseLayout.astro (chứa head, meta, JSON-LD Schema, Google Fonts)
├── pages/                   # index.astro (Entry point duy nhất của Landing Page)
├── styles/                  # global.css (Tailwind directives, custom font imports)
└── types/                   # Định nghĩa kiểu dữ liệu TypeScript dùng chung
    ├── service.types.ts
    ├── feedback.types.ts
    └── contact.types.ts
```

---

## 3. QUẢN LÝ DỮ LIỆU TĨNH (STATIC DATA DRIVEN)

- **Không hard-code trực tiếp văn bản dịch vụ vào HTML:**
  - Mọi danh sách dịch vụ, feedback, câu hỏi thường gặp PHẢI được định nghĩa trong `src/data/*.ts`.
  - Mọi data object PHẢI có interface TypeScript đi kèm (khai báo tại `src/types/`).
- **File liên hệ tập trung:**
  - Link Fanpage Messenger, số Zalo, Hotline, Địa chỉ, Map embed PHẢI đọc từ `src/data/contact.ts`.

---

## 4. QUY CHUẨN TAILWIND CSS

- **Cấu hình Theme Token trong `tailwind.config.mjs`:**
  - Mở rộng các màu thương hiệu: `spa-cream`, `spa-sage`, `spa-bronze`, `spa-charcoal`, `spa-beige`.
  - Mở rộng font families: `font-serif` trỏ tới `Cormorant Garamond` hoặc `Playfair Display`, `font-sans` trỏ tới `Plus Jakarta Sans`.
- **Hạn chế Arbitrary Values:**
  - Tránh viết kiểu `w-[327px] mt-[19px] bg-[#fdfbf7]`.
  - Hãy sử dụng: `w-full max-w-sm mt-5 bg-spa-cream`.
- **Mobile-First Breakpoint:**
  - Mặc định viết CSS cho điện thoại trước: `p-4 text-base flex-col`.
  - Sau đó nâng cấp cho màn hình lớn: `md:p-8 md:text-lg md:flex-row lg:p-12`.
