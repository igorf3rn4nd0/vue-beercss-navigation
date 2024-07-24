import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'beercss'
import 'material-dynamic-colors'
import VueBeercssNavigation from './components/VueBeercssNavigation.vue'

const app = createApp(App)
app.component('VueBeercssNavigation', VueBeercssNavigation)
app.use(router)
app.mount('#app')