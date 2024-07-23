/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-lighter': 'var(--color-lighter)',
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        white: 'var(--color-white)',
        black: ' var(--color-black)',
        CF6: 'var(--color-CF6)',
        CF1: 'var(--color-CF1)',
        CF3: 'var(--color-CF3)',
        C9A: 'var(--color-C9A)',
        CDD: 'var(--color-CDD)',
        CFF: 'var(--color-CFF)',
        CEA: 'var(--color-CEA)',
        CD1: 'var(--color-CD1)',
      },
    },
  },
  plugins: [],
}

