import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/mdi'

import colors from 'vuetify/lib/util/colors'

export default createVuetify({
  themes: {
    light: {
      dark: false,
      colors: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD
      }
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    set: {
      fa
    },
  },
})