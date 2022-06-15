import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { createI18n } from 'vue-i18n'

// Langauge settings
// const i18n = createI18n();

/* component import */
import App from './App.vue'
import router from './router'

import { Button, Alert, Switch } from 'equal-vue'
import 'equal-vue/dist/style.css'

/* init app */
const app = createApp(App)

app.use(createPinia());
app.use(router);
// app.use(i18n);

app.use(Button);
app.use(Alert);
app.use(Switch);

// app.component('Button', Button);

app.mount('#app');
