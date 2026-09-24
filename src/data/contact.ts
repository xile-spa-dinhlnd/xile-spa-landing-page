/**
 * CONTACT CONFIGURATION — XILE SPA
 *
 * Toàn bộ thông tin liên hệ, hotline, Zalo và mạng xã hội của Xile Spa.
 *
 * LƯU Ý CHO DEVELOPER:
 * Khi khách hàng cung cấp Fanpage ID hoặc số điện thoại Zalo chính thức,
 * chỉ cần cập nhật các giá trị placeholder bên dưới mà KHÔNG cần sửa code ở từng component!
 */

export const CONTACT_CONFIG = {
  // === THÔNG TIN MẠNG XÃ HỘI & CHAT TRỰC TUYẾN ===
  FACEBOOK_URL: "https://www.facebook.com/xilebeautyspa",
  FACEBOOK_FANPAGE_URL: "https://www.facebook.com/xilebeautyspa",
  MESSENGER_URL: "https://m.me/xilebeautyspa",

  ZALO_PHONE_NUMBER: "0909722408",
  ZALO_URL: "https://zalo.me/0909722408",

  // === HOTLINE & LIÊN HỆ TRỰC TIẾP ===
  HOTLINE_DISPLAY: "0909 722 408",
  HOTLINE_TEL: "tel:0909722408",

  // === ĐỊA ĐIỂM & BẢN ĐỒ ===
  SPA_ADDRESS: "67 Đ. Hưng Phú, Quận 8, TP. Hồ Chí Minh",
  SPA_FULL_ADDRESS: "67 Đ. Hưng Phú, Quận 8, Hồ Chí Minh 700000, Việt Nam",
  GOOGLE_MAPS_EMBED_URL:
    "https://www.google.com/maps?q=67+%C4%90.+H%C6%B0ng+Ph%C3%BA,+Qu%E1%BA%ADn+8,+H%E1%BB%93+Ch%C3%AD+Minh&output=embed",
  GOOGLE_MAPS_DIRECTIONS_URL: "https://maps.app.goo.gl/XafAJZNHmoeHtmjk6",

  // === MENU DỊCH VỤ ĐÃ TRIỂN KHAI ===
  MENU_URL: "https://xile-spa-dinhlnd.github.io/xile-spa-menu/",

  // === GIỜ MỞ CỬA ===
  OPENING_HOURS: "09:00 - 21:00 (Tất cả các ngày trong tuần)",
} as const;

export type ContactConfigType = typeof CONTACT_CONFIG;
