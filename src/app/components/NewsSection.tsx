"use client";

import { useTranslations } from "next-intl";

export default function NewsSection() {
  const t = useTranslations();

  const newsItems = t.raw("newsItems") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-6">
        <img src="/images/news-farming.svg" alt="Farming news illustration" className="w-14 h-14 mr-4" />
        <h2 className="font-semibold text-2xl text-gray-800">{t("news.title")}</h2>
      </div>
      <div className="space-y-4">
        {newsItems.map((item, idx: number) => (
          <article key={idx} className="border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 transition-colors rounded-r-md">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
            <p className="text-base text-gray-700 leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
