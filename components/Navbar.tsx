import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="w-full p-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
      <h1 className="text-white text-xl font-bold">KotakNet</h1>
      <div className="w-1/2">
        <SearchBar />
      </div>
    </div>
  );
}