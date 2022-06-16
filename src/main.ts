import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18nInstance, loadLocale, DEFAULT_LOCALE } from './services/i18n';

// Langauge settings
const i18n = createI18nInstance();
let locale = document?.querySelector('html')?.getAttribute('lang');
locale = (!locale) ? DEFAULT_LOCALE : locale;

try {
  const messages = await loadLocale(i18n, locale);
  i18n.global.setLocaleMessage(DEFAULT_LOCALE, messages);
}
catch (error) {
  throw new Error(error);
}

/* component import */
import App from './App.vue'
import router from './router'

import { Button, Alert, Switch, Checkbox, Icon, Input, Avatar } from 'equal-vue'
import 'equal-vue/dist/style.css'

/* init app */
const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(i18n);

app.use(Button)
   .use(Avatar)
   .use(Input)
   .use(Alert)
   .use(Icon)
   .use(Checkbox)
   .use(Switch);

// app.component('Button', Button);

app.mount('#app');
