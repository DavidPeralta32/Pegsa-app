import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import '@mdi/font/css/materialdesignicons.css'
//Animate.css
import 'animate.css';


// Vuetify
import 'vuetify/styles' // Importante para que se vea bien
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false, // O true si quieres que sea el tema oscuro por defecto
        colors: {
          primary: '#76b82d',    // El verde de tu logo PEGSA
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount("#app");
