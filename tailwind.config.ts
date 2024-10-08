import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'theme-black': colors.stone[900],
        'theme-blue': colors.sky[500],
        'theme-gradient-1': '#ffd652',
        'theme-gradient-2': '#ff7160',
        'theme-gradient-3': '#fe488b',
        'theme-gradient-4': '#d820ae',
        'theme-gradient-5': '#8d2274',
      },
      fontSize: {
        '2xs': '0.65rem',
      },
      fontFamily: {
        brush: ['Brush', 'sans-serif'],
        superLine: ['superlineregular'],
        superLineLine: ['superlineline'],
      },
    },
  },
  plugins: [],
} satisfies Config
