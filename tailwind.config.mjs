/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        spa: {
          cream: '#FDFBF7',     // Nền chính 60% (Kem ấm)
          alabaster: '#FAF9F6', // Nền biến thể (Trắng ngà)
          sage: '#8A9A86',      // Màu phụ trợ 30% (Xanh xô thơm thảo mộc)
          'sage-light': '#E8EFE6', // Nền badge / pill nhạt
          beige: '#F4EFE6',     // Khối phân cách section
          wood: '#7C6E65',      // Màu nâu gỗ / subtitle
          bronze: '#C5A880',    // Màu điểm nhấn 10% (Nâu đồng kim loại)
          terracotta: '#D97757',// Màu điểm nhấn phụ (Cam đất)
          gold: '#D4AF37',      // Sao rating & badge VIP
          charcoal: '#2D3748',  // Text chính (Xám than ấm)
          muted: '#718096',     // Text phụ
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
        'spa-soft': '0 10px 30px -10px rgba(124, 110, 101, 0.08)',
        'spa-card': '0 20px 40px -15px rgba(45, 55, 72, 0.05)',
        'spa-glow': '0 0 25px rgba(197, 168, 128, 0.25)',
      },
    },
  },
  plugins: [],
};
