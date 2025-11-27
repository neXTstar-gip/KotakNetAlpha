import Image from "next/image";
import { getAnime } from "@/lib/jikan";

export default async function AnimeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const anime = await getAnime(id);

  if (!anime) {
    return (
      <div className="text-center py-20 text-white">
        <h2 className="text-3xl font-bold">Anime not found</h2>
        <p className="opacity-60 mt-2">ID: {id}</p>
      </div>
    );
  }

  return (
    <main className="p-6 text-white">
      <div className="flex gap-6">
        <Image
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={300}
          height={430}
          className="rounded-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-2">{anime.title}</h1>

          {anime.title_english && (
            <p className="opacity-70 mb-4">{anime.title_english}</p>
          )}

          <p className="mb-4">⭐ Score: {anime.score || "N/A"}</p>
          <p className="mb-4">📺 Episodes: {anime.episodes || "?"}</p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Synopsis</h3>
            <p className="opacity-80 max-w-2xl">{anime.synopsis}</p>
          </div>
        </div>
      </div>
    </main>
  );
}