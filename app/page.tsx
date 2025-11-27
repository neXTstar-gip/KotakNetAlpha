import { fetchNowSeason } from '../lib/jikan'
import AnimeCard from '../components/AnimeCard'
import Link from 'next/link'

export default async function Home() {
  const season = await fetchNowSeason()
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold">KotakNet</h1>
        <p className="text-slate-500">Streaming anime — data real dari MyAnimeList</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Airing / Season Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {season.map((a: any) => (
            <Link key={a.mal_id} href={`/anime/${a.mal_id}`}>
              <AnimeCard anime={a} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}