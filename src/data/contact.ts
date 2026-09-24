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
  // PLACEHOLDER: Cập nhật đường link m.me khi có Fanpage ID chính thức
  FACEBOOK_FANPAGE_URL: "https://m.me/PLACEHOLDER_FANPAGE_ID",

  // PLACEHOLDER: Cập nhật số điện thoại Zalo
  ZALO_PHONE_NUMBER: "09xxxxxxxx",
  ZALO_URL: "https://zalo.me/09xxxxxxxx",

  // === HOTLINE & LIÊN HỆ TRỰC TIẾP ===
  HOTLINE_DISPLAY: "09xx xxx xxx",
  HOTLINE_TEL: "tel:09xxxxxxxx",

  // === ĐỊA ĐIỂM & BẢN ĐỒ ===
  SPA_ADDRESS: "Địa chỉ Xile Spa, Quận X, TP. Hồ Chí Minh (Placeholder)",
  GOOGLE_MAPS_EMBED_URL:
    "https://www.google.com/maps/embed?pb=PLACEHOLDER_EMBED_URL",
  GOOGLE_MAPS_DIRECTIONS_URL: "https://maps.google.com/?q=Xile+Spa",

  // === MENU DỊCH VỤ ĐÃ TRIỂN KHAI ===
  MENU_URL: "https://xile-spa-dinhlnd.github.io/xile-spa-menu/",

  // === GIỜ MỞ CỬA ===
  OPENING_HOURS: "09:00 - 21:00 (Mở cửa tất cả các ngày trong tuần)",
} as const;

export type ContactConfigType = typeof CONTACT_CONFIG;
