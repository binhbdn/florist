export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'florist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~/assets/scss/general.scss',
  ],

  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : '/florist/',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/base'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/Developmint/nuxt-purgecss#readme
    'nuxt-purgecss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // i18n module configuration: https://i18n.nuxtjs.org/options-reference
  i18n: {
    lazy: true,
    langDir: '~/locales/',
    locales: [
      { code: 'vi', iso: 'vi-VN', file: 'vn.js', name: 'Tiếng Việt' },
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'ja', iso: 'ja-JP', file: 'jp.js', name: '日本語' },
    ],
    // strategy: 'no_prefix',
    detectBrowserLanguage: false,
    defaultLocale: 'vi',
    vueI18n: {
      fallbackLocale: [ 'en', 'vi' ],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
