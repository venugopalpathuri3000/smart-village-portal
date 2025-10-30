import news from "../data/news.json";

interface NewsItem {
  title: string;
  description: string;
}

export default function NewsSection() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold text-lg mb-3">📰 Village News</h2>
      {news.map((item: NewsItem, idx: number) => (
        <div key={idx} className="mb-2">
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
