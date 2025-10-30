import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'te'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Use default locale if not provided
  const currentLocale = locale || defaultLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(currentLocale as any)) {
    throw new Error(`Invalid locale: ${currentLocale}`);
  }

  return {
    locale: currentLocale,
    messages: (await import(`../../public/locales/${currentLocale}/common.json`)).default
  };
});