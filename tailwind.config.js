/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom brand tokens — maps to exact spec hex values
        navy: '#1B3A6B',          // Primary: Navy Blue
        'warm-orange': '#E07855', // Accent 2: Warm Orange
        // Built-in Tailwind matches:
        //   cyan-700   = #0e7490  (Accent 1: Teal)
        //   violet-600 = #7c3aed  (Accent 3: Purple)
        //   emerald-500= #10b981  (Accent 4: Emerald Green)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
