import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import 'intl-pluralrules';

// Translations
import translationEnglish from './locales/en/translation.json';
const resources = {
  en: {
    translation: translationEnglish,
  },
};

i18n
  // .use(languageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en'],
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
