import EmergencyContacts from "../components/EmergencyContacts";

export default function ContactPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <img src="/images/contact-farming.svg" alt="Contact our farming support team" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-green-800 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">Get in touch with our agricultural support services and emergency contacts.</p>
      </div>
      <EmergencyContacts />
    </div>
  );
}