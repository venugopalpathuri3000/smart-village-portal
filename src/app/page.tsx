import WeatherWidget from "./components/WeatherWidget";
import NewsSection from "./components/NewsSection";
import SchemesSection from "./components/SchemesSection";
import EmergencyContacts from "./components/EmergencyContacts";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <WeatherWidget />
      <NewsSection />
      <SchemesSection />
      <EmergencyContacts />
    </div>
  );
}
