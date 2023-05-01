import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vue3-toastify/dist/index.css'
import App from './App.vue'

import router from './router/index'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
  
})

createApp(App).use(router).use(vuetify).use(createPinia()).mount('#app')
