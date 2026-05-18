// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: [
    '@/assets/css/main.css'
  ],
  googleFonts: {
    families: {
      'Nunito Sans': '200..700'
    }
  },
  app: {
    head: {
      script: [
        {
          src: 'https://analytics.ahrefs.com/analytics.js',
          async: true,
          'data-key': 'MHSTUFDhMG2v5MJHrVtu6Q',
          integrity: 'sha384-W1wjYK8T9Gz7xq6XpVAitAMIbyk3r/jlMxGQAdL3M058ajAAUoV9TVg2+zPMr3jR%',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})