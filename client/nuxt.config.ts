// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['shadcn-nuxt', '@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
});
