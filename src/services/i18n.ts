// import { nextTick } from 'vue'
// import { createI18n } from 'vue-i18n'

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/locales/en.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages // set locale messages
});

const LOADED_LOCALES = ['en'];
const LOCALE_FILE_URL = `@/locales/{locale}.json`;

/**
 * setI18nLanguage
 * @param lang
 */
function setI18nLanguage(lang) {
  i18n.locale = lang;
  // axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}


/**
 * loadLanguageAsync
 * @param lang
 */
export const loadLanguageAsync = (lang) => {
  const url = LOCALE_FILE_URL.replace('{locale}', lang);

  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (LOADED_LOCALES.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  return fetch(url)
    .then(response => response.json())
    .then((messages) => {

      i18n.setLocaleMessage(lang, messages.default)
      LOADED_LOCALES.push(lang)
      return setI18nLanguage(lang)
    });
}
