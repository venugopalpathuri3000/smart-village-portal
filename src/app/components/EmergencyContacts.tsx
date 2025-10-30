"use client";

import { useTranslations } from "next-intl";

export default function EmergencyContacts() {
  const t = useTranslations();

  const contactsItems = t.raw("contactsItems") as Array<{
    name: string;
    phone: string;
    secretary?: string;
    address?: string;
    hours?: string;
    services?: string[];
  }>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-6">
        <img src="/images/emergency-farming.svg" alt="Emergency farming support services" className="w-12 h-12 mr-4" />
        <h2 className="font-semibold text-2xl text-gray-800">{t("contacts.title")}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {contactsItems.map((item, idx: number) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-800 mb-3">{item.name}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={`tel:${item.phone}`} className="text-lg font-semibold text-green-600 hover:text-green-700 transition-colors">
                  {item.phone}
                </a>
              </div>
              {item.secretary && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-700">Secretary:</span>
                    <p className="text-gray-700">{item.secretary}</p>
                  </div>
                </div>
              )}
              {item.address && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-700">Address:</span>
                    <p className="text-gray-700">{item.address}</p>
                  </div>
                </div>
              )}
              {item.hours && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-700">Hours:</span>
                    <p className="text-gray-700">{item.hours}</p>
                  </div>
                </div>
              )}
              {item.services && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1">
                    <span className="font-medium text-gray-700">Services:</span>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      {item.services.map((service, sidx) => (
                        <li key={sidx} className="text-gray-700">{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}