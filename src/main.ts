import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18nInstance, loadLocale, DEFAULT_LOCALE } from './services/i18n';

// Langauge settings
const i18n = createI18nInstance();
const htmlLocale = document?.querySelector('html')?.getAttribute('lang');
const locale = (!htmlLocale) ? DEFAULT_LOCALE : htmlLocale;

/**
 * Init default locale
 */
async function initDefaultLocale(): Promise<any> {
  try {
    const messages = await loadLocale(i18n, locale);
    i18n.global.setLocaleMessage(DEFAULT_LOCALE, messages);
  }
  catch (error: any) {
    throw new Error(error);
  }
}

initDefaultLocale();


/* component import */
import App from './App.vue'
import router from './router'

import Equal from 'equal-vue';
import 'equal-vue/dist/style.css'


/* init app */
const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(i18n);

app.use(Equal);

// app.use(Alert)
//    .use(Avatar)
//    .use(Button)
//    .use(Checkbox)
//    .use(Dropdown)
//    .use(Icon)
//    .use(Input)
//    .use(Switch);

// app.component('Button', Button);

app.mount('#app');
