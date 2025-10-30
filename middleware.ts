import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'te'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};