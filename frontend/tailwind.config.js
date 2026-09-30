/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ffecec',
          100: '#ffcece',
          500: '#c00000',
          600: '#c00000',
          700: '#960000',
          800: '#6e0000',
          900: '#4a0000',
          950: '#280000',
        },
        red: {
          400: '#e03333',
          500: '#c00000',
          600: '#c00000',
          700: '#960000',
          800: '#6e0000',
          900: '#4a0000',
          950: '#280000',
        },
        slate: {
          950: '#090d16',
          900: '#0f172a',
          850: '#151e32',
          800: '#1e293b',
          700: '#334155',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
