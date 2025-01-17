import { createI18n } from 'vue-i18n';
import en from './en.json';
import ch from './ch.json';
import hi from './hi.json';
const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    ch,
    hi,
  },
});

export default i18n;
