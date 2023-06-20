import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'

import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebase'

import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

app.use(createPinia())
app.use(router)
app.use(
  plugin,
  defaultConfig({
    config: {
      classes: generateClasses({
        global: { // applies to all input types
          outer: '$reset form-group',
          input: 'form-control',
          label: 'form-label',
          messages: 'list-unstyled small mb-0',
          message: 'is-invalid',
          help: 'form-text'
        },
        checkbox: {
          label: 'form-check-label',
          wrapper: 'checkbox-wrapper',
          inner: 'form-check',
          input: '$reset form-check-input',
          legend: '$reset form-check-label'
        },
        select: {
          input: '$reset form-select'
        },
        radio: {
          label: 'form-check-label',
          wrapper: 'radio-wrapper',
          inner: 'form-check',
          input: '$reset form-check-input',
          legend: '$reset form-check-label'
        },
        submit: {
          outer: '$reset mt-3',
          input: '$reset btn btn-outline-light px-4'
        }
      })
    }
  })
)

app.mount('#app')
