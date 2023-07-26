export type Locale = "fa" | "en" | "ar";
export type Direction = "rtl" | "ltr";

interface I18nLanguage {
  direction: Direction;
  locale: Locale;
}

export const defaultLocale = "en";
export const locales: I18nLanguage[] = [
  {
    locale: "fa",
    direction: "rtl",
  },
  {
    locale: "en",
    direction: "ltr",
  },
  {
    locale: "ar",
    direction: "rtl",
  },
];

export function getLocale(locale: Locale): I18nLanguage {
  return locales.find((loc) => loc.locale === locale) as I18nLanguage;
}
