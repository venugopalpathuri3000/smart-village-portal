import WeatherWidget from "./components/WeatherWidget";
import NewsSection from "./components/NewsSection";
import SchemesSection from "./components/SchemesSection";
import EmergencyContacts from "./components/EmergencyContacts";
import ChiefMinisterSection from "./components/ChiefMinisterSection";

export default function HomePage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 md:p-12 rounded-xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <img src="/images/hero-farming.svg" alt="Farming landscape with village" className="w-full max-w-md mx-auto mb-6 rounded-lg shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Smart Village Portal</h1>
          <p className="text-xl md:text-2xl opacity-90">Empowering farmers and connecting communities</p>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <WeatherWidget />
        <NewsSection />
      </div>

      <SchemesSection />

      <ChiefMinisterSection />

      <EmergencyContacts />
    </div>
  );
}
