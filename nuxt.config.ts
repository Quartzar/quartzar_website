import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  // https://github.com/nuxt-community/google-fonts-module
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    // Simple usage
    '@nuxtjs/google-fonts',
    // With options
    ['@nuxtjs/google-fonts', { /* module options */ }]
  ],
  // https://tailwindcss.nuxtjs.org/examples/tailwindui
  googleFonts: {
    families: {
      Poppins: true
    }
  },
  tailwindcss: {
    jit: true
  },
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula'
    }
  },
})
