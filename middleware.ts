import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "@/data/i18n-configs";

export default createMiddleware({
  locales: locales.map(({ locale }) => locale),
  defaultLocale,
  localePrefix: "always",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
