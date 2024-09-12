import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        radial: 'radial-gradient(circle at 70%, var(--tw-gradient-stops))',
      },
      colors: {
        'radial-edge': '#F00',
        'radial-center': '#ff9b00',
      },
    },
  },
  plugins: [],
} satisfies Config
