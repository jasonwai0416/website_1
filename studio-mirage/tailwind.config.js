/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0d0d0d',
          deep: '#070707',
          soft: '#141414',
        },
        bone: '#f2f1ed',
        mist: '#8c8c86',
        jade: '#1f6f5c',
        emerald: '#2fbf94',
        gold: '#c8a45c',
      },
      fontFamily: {
        display: ['"Anton"', 'system-ui', 'sans-serif'],
        sans: ['"Archivo"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        mega: '0.4em',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
