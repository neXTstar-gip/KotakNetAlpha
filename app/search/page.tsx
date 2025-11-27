import SearchBar from "../../components/SearchBar";

export default function SearchPage() {
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Search Anime</h2>
        <SearchBar />
        <p className="mt-6 text-sm opacity-60">Type to search anime. Click a result to open the detail page.</p>
      </div>
    </div>
  );
}