import schemes from "../data/schemes.json";

interface SchemeItem {
  title: string;
  description: string;
}

export default function SchemesSection() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold text-lg mb-3">📋 Government Schemes</h2>
      {schemes.map((item: SchemeItem, idx: number) => (
        <div key={idx} className="mb-2">
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}