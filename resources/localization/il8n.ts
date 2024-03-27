import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// import {Localization} from 'expo-localization';

// const languageDetector = {
//   type: 'languageDetector',
//   async: true, // flags below detection to be async
//   detect: callback => {
//     return /*'en'; */ Localization.getLocalizationAsync().then(({locale}) => {
//       callback(locale);
//     });
//   },
//   init: () => {},
//   cacheUserLanguage: () => {},
// };

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
    backend: {
      loadPath: './locales/{{lng}}/translation.json',
    },
  });

export default i18n;
