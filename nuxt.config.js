// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: { shim: false },

  runtimeConfig: {
    app: {
      name: 'LIBRARIVM',
      clientId: process.env.CLIENT_ID,
    },
    public: {
      apiBaseUrl: '',
    },
  },

  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/theme.light.css',
    '@/assets/css/theme.dark.css',
    '@/assets/css/app.css',
  ],

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '@nuxt/eslint', '@nuxt/content'],
});
