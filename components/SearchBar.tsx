"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type AnimeItem = {
  mal_id: number;
  title: string;
  images?: { jpg?: { image_url: string } };
  genres?: { name: string }[];
  type?: string;
  year?: number;
  score?: number;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AnimeItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const boxRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown saat klik di luar
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Debounce search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }

    setLoading(true);
    const t = setTimeout(() => search(query), 450);
    return () => clearTimeout(t);
  }, [query]);

  async function search(text: string) {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&limit=12`
      );
      const json = await res.json();

      // Filter hentai (opsional tapi gw biarin ON deh biar aman)
      const safe = (json.data || []).filter((a: AnimeItem) => {
        if (!a.genres) return true;
        return !a.genres.some((g) => g.name.toLowerCase() === "hentai");
      });

      setResults(safe);
      setOpen(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  const goTo = (id: number) => {
    router.push(`/anime/${id}`);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={boxRef} className="relative w-full max-w-xl mx-auto">
      
      {/* INPUT */}
      <div className="glass px-4 py-2 rounded-3xl backdrop-blur-lg border border-white/10 shadow-lg flex items-center gap-3">
        <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" strokeWidth="1.5" d="M21 21l-4.35-4.35" />
          <circle stroke="currentColor" strokeWidth="1.5" cx="11" cy="11" r="6" />
        </svg>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent flex-1 outline-none text-sm placeholder-white/60"
          placeholder="Search anime..."
        />

        {query && (
          <button onClick={() => { setQuery(""); setOpen(false); }}>
            ✕
          </button>
        )}

        {loading && (
          <span className="text-xs opacity-70 animate-pulse">...</span>
        )}
      </div>

      {/* DROPDOWN FIXED */}
      {open && (
        <div
          className="
            absolute left-0 right-0 top-full mt-2
            z-50 animate-fadeInUp
          "
        >
          <div
            className="
              glass rounded-2xl border border-white/10 shadow-xl
              max-h-80 overflow-y-auto p-2
            "
          >
            {results.length === 0 ? (
              <div className="p-4 text-sm opacity-70">No result</div>
            ) : (
              results.map((anime) => (
                <div
                  key={anime.mal_id}
                  onClick={() => goTo(anime.mal_id)}
                  className="flex gap-4 p-2 rounded-xl cursor-pointer hover:bg-white/5 transition result-hover"
                >
                  <img
                    src={anime.images?.jpg?.image_url}
                    className="w-14 h-20 rounded-md object-cover"
                  />

                  <div className="flex flex-col">
                    <p className="font-semibold text-sm">{anime.title}</p>
                    <p className="text-xs opacity-60">
                      {anime.type} • {anime.year ?? "?"}
                    </p>
                    <p className="text-xs opacity-60">⭐ {anime.score ?? "?"}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}