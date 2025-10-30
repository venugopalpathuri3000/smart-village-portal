"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    const newPath = `/${lng}${pathname}`;
    router.push(newPath);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-amber-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/header-farming.svg" alt="Smart village farming portal" className="w-8 h-8 mr-3" />
            <Link href="/" className="text-xl font-bold hover:text-white transition-colors" aria-label="Home">
              {t("header.title")}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link href="/" className="hover:underline hover:text-white transition-colors" aria-label="Home page">
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline hover:text-white transition-colors" aria-label="About page">
                  {t("header.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline hover:text-white transition-colors" aria-label="Contact page">
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
            <button
              onClick={() => changeLanguage(locale === 'en' ? 'te' : 'en')}
              className="bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors font-medium"
              aria-label={`Switch to ${locale === 'en' ? 'Telugu' : 'English'}`}
            >
              {locale === 'en' ? 'తెలుగు' : 'English'}
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-green-600 pt-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link href="/" className="block hover:text-white transition-colors" onClick={toggleMenu} aria-label="Home page">
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="block hover:text-white transition-colors" onClick={toggleMenu} aria-label="About page">
                  {t("header.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:text-white transition-colors" onClick={toggleMenu} aria-label="Contact page">
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}