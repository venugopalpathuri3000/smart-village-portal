"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  main: {
    temp: number;
  };
  weather: { description: string }[];
  name: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const village = "Hyderabad"; // change to local village
    if (!API_KEY) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${village}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch(() => setWeather(null));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold text-lg mb-2">🌦️ Weather Information</h2>
      {weather ? (
        <p>
          {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
        </p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}
