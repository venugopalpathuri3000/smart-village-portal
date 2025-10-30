"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface WeatherData {
  main: {
    temp: number;
  };
  weather: { description: string }[];
  name: string;
}

export default function WeatherWidget() {
  const t = useTranslations();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const village = "Narasingolu"; // change to local village
    if (!API_KEY) {
      setLoading(false);
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${village}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch(() => {
        setWeather(null);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-sky-200 p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <img src="/images/weather-farming.svg" alt="Weather conditions for farming" className="w-12 h-12 mr-3" />
        <h2 className="font-semibold text-xl text-gray-800">{t("weather.title")}</h2>
      </div>
      {loading ? (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ) : weather ? (
        <div className="text-gray-700">
          <p className="text-lg font-medium">{weather.name}</p>
          <p className="text-2xl font-bold text-green-600">{weather.main.temp}°C</p>
          <p className="text-sm text-gray-600 capitalize">{weather.weather[0].description}</p>
        </div>
      ) : (
        <p className="text-gray-500 italic">{t("weather.loading")}</p>
      )}
    </div>
  );
}
