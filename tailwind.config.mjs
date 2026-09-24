/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        spa: {
          cream: '#FAF5EE',     // Nền chính 60% (Kem ấm lụa tự nhiên / Warm Silk Cream)
          alabaster: '#F4ECE1', // Nền biến thể (Trắng cát ngà ấm / Warm Sand Ivory)
          sage: '#758771',      // Màu phụ trợ 30% (Xanh xô thơm thảo mộc ấm)
          'sage-light': '#E7ECE4', // Nền badge / pill xanh dịu
          beige: '#EDE4D5',     // Khối phân cách section (Beige hạt dẻ ấm)
          wood: '#6E5D53',      // Màu nâu gỗ tếch ấm / subtitle
          bronze: '#BD8B53',    // Màu điểm nhấn 10% (Nâu đồng hổ phách ấm như ánh nến)
          terracotta: '#C86A4B',// Màu điểm nhấn phụ (Cam đất nung ấm)
          gold: '#CFA13D',      // Sao rating & badge VIP (Vàng mật ong ấm)
          charcoal: '#2C241F',  // Text chính (Nâu than trầm ấm / Warm Deep Espresso)
          muted: '#8A7B72',     // Text phụ (Nâu sương mờ ấm)
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Be Vietnam Pro"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'spa-soft': '0 10px 30px -10px rgba(110, 93, 83, 0.08)',
        'spa-card': '0 20px 40px -15px rgba(44, 36, 31, 0.08)',
        'spa-glow': '0 0 30px rgba(189, 139, 83, 0.28)',
      },
    },
  },
  plugins: [],
};
