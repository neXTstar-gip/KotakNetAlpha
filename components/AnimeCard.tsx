import Image from 'next/image'

export default function AnimeCard({ anime }: any) {
  const img = anime.images?.jpg.image_url || anime.image_url
  const title = anime.title
  return (
    <div className="rounded overflow-hidden shadow hover:shadow-lg transition">
      {img && (
        <img src={img} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-3">
        <h3 className="font-semibold truncate">{title}</h3>
        {anime.year && <p className="text-sm text-slate-500">{anime.year}</p>}
      </div>
    </div>
  )
}