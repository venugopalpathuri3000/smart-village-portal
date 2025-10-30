"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ChiefMinisterSection: React.FC = () => {
  const fallbackSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DaGllZiBNaW5pc3RlcjwvdGV4dD4KPC9zdmc+';
  const [imageSrc, setImageSrc] = useState('/images/chief-minister.jpg');

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl shadow-xl border border-green-200">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Chief Minister of Andhra Pradesh</h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="flex-shrink-0">
          <Image
            src={imageSrc}
            alt="N. Chandrababu Naidu, Chief Minister of Andhra Pradesh"
            width={200}
            height={200}
            className="rounded-full object-cover shadow-lg border-4 border-white"
            priority
            onError={() => setImageSrc(fallbackSrc)}
          />
        </div>
        <div className="text-center lg:text-left flex-1">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">N. Chandrababu Naidu</h3>
          <div className="space-y-4">
            <blockquote className="text-xl italic text-green-700 leading-relaxed bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              "Leading Andhra Pradesh towards sustainable development with a focus on agriculture, innovation, and rural prosperity."
            </blockquote>
            <blockquote className="text-xl italic text-green-700 leading-relaxed bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              "Committed to inclusive growth, empowering farmers, and building stronger communities for a brighter future."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefMinisterSection;