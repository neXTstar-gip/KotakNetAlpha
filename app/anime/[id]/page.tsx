import { getAnimeById } from '../../../lib/jikan'

export default async function AnimeDetail({ params }: { params: { id: string } }) {
  const anime = await getAnimeById(params.id)
  if (!anime) return <div>Anime tidak ditemukan</div>

  const img = anime.images?.jpg.image_url

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {img && <img src={img} alt={anime.title} className="w-full md:w-48 h-auto object-cover rounded" />}
        <div>
          <h1 className="text-2xl font-bold">{anime.title}</h1>
          {anime.year && <p className="text-slate-600">{anime.year}</p>}
          {anime.synopsis && <p className="mt-4">{anime.synopsis}</p>}
          {anime.episodes && <p className="mt-2">Episodes: {anime.episodes}</p>}
        </div>
      </div>
      {/* nanti di sini bisa tambah list episode / tombol watch */}
    </div>
  )
}