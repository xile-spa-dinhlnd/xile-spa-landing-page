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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.583246347571!2d106.6811055!3d10.750536799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0078be499f%3A0x66b1e343122c3138!2sXiLe%20Beauty%20%26%20Spa!5e0!3m2!1svi!2s!4v1790334145396!5m2!1svi!2s",
  GOOGLE_MAPS_DIRECTIONS_URL: "https://maps.app.goo.gl/XafAJZNHmoeHtmjk6",

  // === MENU DỊCH VỤ ĐÃ TRIỂN KHAI ===
  MENU_URL: "https://xile-spa-dinhlnd.github.io/xile-spa-menu/",

  // === GIỜ MỞ CỬA ===
  OPENING_HOURS: "09:00 - 21:00 (Tất cả các ngày trong tuần)",
} as const;

export type ContactConfigType = typeof CONTACT_CONFIG;
