export type Locales = "fa" | "en" | "ar";
export type Direction = "rtl" | "ltr";

interface I18nLanguage {
  direction: Direction;
  locale: Locales;
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
];

export function getLocale(locale: Locales): I18nLanguage {
  return locales.find((loc) => loc.locale === locale) as I18nLanguage;
}
