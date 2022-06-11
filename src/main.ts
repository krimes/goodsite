import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* css import */
import "primeflex/primeflex.css";

/* component import */
import App from './App.vue'
import router from './router'

/* init app */ 
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
