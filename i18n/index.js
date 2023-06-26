/* eslint-disable @typescript-eslint/no-var-requires */
const en = require('./translations.en.json')
const ru = require('./translations.ru.json')

const i18n = {
  translations: {
    en,
    ru,
  },
  defaultLang: 'en',
  localeDetection: false,
  useBrowserDefault: true,
}

module.exports = i18n