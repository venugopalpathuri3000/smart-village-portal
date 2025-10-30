"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-green-800 text-white py-4">
      <div className="container mx-auto px-4 text-center flex items-center justify-center">
        <img src="/images/footer-farming.svg" alt="Farming community illustration" className="w-8 h-8 mr-3" />
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}