// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/tailwind.scss',
    '@/assets/styles/index.scss',
    '@/assets/styles/ant-design.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs:['./stores/**']
  },
  components: {
    global: true,
    dirs: ['~/components', '~/plugin']
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'vn'
      },
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" },
      ]
    }
  }
})