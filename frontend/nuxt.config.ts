// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  imports: {
    dirs: ['composables/**'],
  },
  ssr: false,
  // CSSの読み込み
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {},
  },
  runtimeConfig: {
    fastApiBaseUrl: process.env.FAST_API_BASE_URL || 'http://localhost:8000',
  },
})
