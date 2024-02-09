// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

const lisaTheme = {
  dark: false,
  colors: {
    background: '#FCFAF9',
    primary: '#F4CA98',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.25,
    // 'high-emphasis-opacity': 0.87,
    // 'medium-emphasis-opacity': 0.60,
    // 'disabled-opacity': 0.38,
    // 'idle-opacity': 0.04,
    // 'hover-opacity': 0.04,
    // 'focus-opacity': 0.12,
    // 'selected-opacity': 0.08,
    // 'activated-opacity': 0.12,
    // 'pressed-opacity': 0.12,
    // 'dragged-opacity': 0.08,
    // 'theme-kbd': '#212529',
    // 'theme-on-kbd': '#FFFFFF',
    // 'theme-code': '#F5F5F5',
    // 'theme-on-code': '#000000',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'lisaTheme',
      themes: {
        lisaTheme,
      },
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 1,
        darken: 2,
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
  })
  app.vueApp.use(vuetify)
})
