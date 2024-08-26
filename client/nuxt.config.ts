// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      rootUrl: process.env.NUXT_PUBLIC_ROOT_URL ?? 'http://localhost:3000',
      generateApi: process.env.NUXT_PUBLIC_API_GENERATE_API,
      hashApi: process.env.NUXT_PUBLIC_API_HASH_API,
    },
  },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
});
