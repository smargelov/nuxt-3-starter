// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title:
        'Nuxt Vite TypeScript - Starter Template with ESLint, Prettier, Stylelint, Commitlint, VueUse, and more',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
          sizes: 'any',
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons-mobile/apple-touch-icon-180x180.png',
        },
        {
          rel: 'manifest',
          href: '/icons-mobile/manifest.webmanifest',
        },
      ],
      meta: [
        {
          'http-equiv': 'Expires',
          content: '0',
        },
        {
          'http-equiv': 'Pragma',
          content: 'no-cache',
        },
        {
          'http-equiv': 'Cache-Control',
          content: 'no-cache, no-store, must-revalidate',
        },
        {
          name: 'viewport',
          content:
            'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
        {
          name: 'referrer',
          content: 'no-referrer-when-downgrade',
        },
        {
          name: 'robots',
          content: 'index,follow',
        },
        {
          name: 'description',
          content:
            'Nuxt Vite TypeScript - Starter Template with ESLint, Prettier, Stylelint, Commitlint, VueUse, and more',
        },
        {
          name: 'og:title',
          content:
            'Nuxt Vite TypeScript - Starter Template with ESLint, Prettier, Stylelint, Commitlint, VueUse, and more',
        },
        {
          name: 'og:description',
          content:
            'Nuxt Vite TypeScript - Starter Template with ESLint, Prettier, Stylelint, Commitlint, VueUse, and more',
        },
        {
          name: 'og:image',
          content: 'https://nuxtjs.org/nuxt-card.png',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://nuxtjs.org',
        },
      ],
    },
  },
  srcDir: 'app',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/scss/variables.scss";',
          api: 'modern-compiler',
        },
      },
    },
  },
  modules: ['@vueuse/nuxt', '@nuxt/eslint'],
  compatibilityDate: '2024-10-20',
})
