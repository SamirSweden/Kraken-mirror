/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Прописываем сами кадры анимации
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-6px)' },
          '40%, 80%': { transform: 'translateX(6px)' },
        }
      },
      // 2. Регистрируем анимацию, чтобы появился класс animate-shake
      animation: {
        shake: 'shake 0.4s ease-in-out',
      }
    },
  },
  plugins: [],
};