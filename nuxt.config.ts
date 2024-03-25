// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in', // default
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/content',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
      },
      display: 'block'
    }],
    // ...
  ],
  content: {
    // ... options
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ['~/assets/main.scss'],
  devtools: { enabled: true }
})
