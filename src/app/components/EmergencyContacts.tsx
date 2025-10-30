import contacts from "../data/contacts.json";

interface ContactItem {
  name: string;
  phone: string;
}

export default function EmergencyContacts() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold text-lg mb-3">🚨 Emergency Contacts</h2>
      {contacts.map((item: ContactItem, idx: number) => (
        <div key={idx} className="mb-2">
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.phone}</p>
        </div>
      ))}
    </div>
  );
}