"use client";

import { useTranslations } from "next-intl";

export default function SchemesSection() {
  const t = useTranslations();

  const schemesItems = t.raw("schemesItems") as Array<{
    name: string;
    description: string;
    eligibility: string;
    benefits: string;
    application: string;
  }>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-6">
        <img src="/images/schemes-farming.svg" alt="Government schemes for farmers" className="w-14 h-14 mr-4" />
        <h2 className="font-semibold text-2xl text-gray-800">{t("schemes.title")}</h2>
      </div>
      <div className="space-y-8">
        {schemesItems.map((item, idx: number) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-green-800 mb-4">{item.name}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-green-700 mb-2">Description</h4>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-green-700 mb-2">Eligibility</h4>
                  <p className="text-gray-700 leading-relaxed">{item.eligibility}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-green-700 mb-2">Benefits</h4>
                  <p className="text-gray-700 leading-relaxed">{item.benefits}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-green-700 mb-2">Application</h4>
                  <p className="text-gray-700 leading-relaxed">{item.application}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}