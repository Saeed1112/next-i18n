"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales } from "@/data/i18n-configs";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLocale = useLocale();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return locales
    .filter(({ locale }) => locale !== currentLocale)
    .map(({ locale }) => (
      <Link
        key={locale}
        className="flex h-7 w-8 items-center justify-center rounded-md border pt-0.5 font-medium  capitalize"
        href={redirectedPathName(locale)}
      >
        {locale}
      </Link>
    ));
}
