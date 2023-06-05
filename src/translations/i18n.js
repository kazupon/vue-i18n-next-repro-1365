import { createI18n } from "vue-i18n";
import translation_en from "./en";

// keeping this in a separate file allows us to use the translator in files that are not vue components

const i18n = createI18n({
  legacy: false,
  allowComposition: true,
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages: {
    en: translation_en
  },
  flatJson: true
  // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});
const $t = i18n.global.t;

export { $t };
export default i18n;
