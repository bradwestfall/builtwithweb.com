import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'theme-gradient-1': '#ffd652',
        'theme-gradient-2': '#ff7160',
        'theme-gradient-3': '#fe488b',
        'theme-gradient-4': '#d820ae',
        'theme-gradient-5': '#8d2274',
      },
      fontFamily: {
        brush: ['Brush', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
