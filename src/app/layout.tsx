import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';

interface Props {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Smart Village Portal - Empowering farmers and connecting rural communities with essential information and services." />
        <title>Smart Village Portal</title>
      </head>
      <body className="flex flex-col min-h-screen bg-green-50 text-green-900 font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow px-4 py-8 md:px-6 lg:px-8" role="main">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
