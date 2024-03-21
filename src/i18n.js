import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

const Languages = ['ru', 'ky']

i18n
   .use(Backend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      lng: 'en',
      react: {
         useSuspense: false,
         wait: true,
      },
      fallbackLng: 'en',
      supportedLngs: ['ru', 'ky'],

      debug: false,
      whitelist: Languages,
      interpolation: {
         escapeValue: false,
      },
      nsSeperator: false,
      keySeperator: false,
      backend: {
         loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
   })
// .init({
//    debug: true,
//    supportedLngs: ['ru', 'ky'],
//    fallbackLng: 'ru',
//    interpolation: {
//       escapeValue: false,
//    },
// })

export default i18n
