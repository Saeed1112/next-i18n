import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '@/lib/i18n-configs';
import { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const intlMiddleware = createMiddleware({
  locales: locales.map(({ locale }) => locale),
  defaultLocale,
  localePrefix: 'always',
});

const authMiddleware = withAuth((req) => {
  intlMiddleware(req);
});

export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
