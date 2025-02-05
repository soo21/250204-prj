/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F5FF',
          100: '#D9E2F7',
          200: '#B8C7F1',
          300: '#8F9FDA',
          400: '#6677A4',
          500: '#5A7AC1', // 기본 색상
          600: '#4F6A99',
          700: '#3F5179',
          800: '#2D3852',
          900: '#20273A',
        },
        secondary: {
          50: '#F1F3F7',
          100: '#D8E1E9',
          200: '#A7B6C7',
          300: '#8594A4',
          400: '#6C7A85',
          500: '#444C64', // 보조 색상
          600: '#3A414E',
          700: '#2F353E',
          800: '#242A29',
          900: '#1A1F1F',
        },
      },
    },
  },
  plugins: [],
}
