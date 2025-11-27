import AnimeCard from "../components/AnimeCard";
import SearchBar from "../components/SearchBar";
import WeeklyTabs from "../components/WeeklyTabs";
import { getTodayAnime, getHotAnime, getTop25 } from "../lib/jikan";

export default async function Home() {
  const today = await getTodayAnime();
  const hot = await getHotAnime();
  const top50 = await getTop25();

  const weekly = {
    monday: today.filter((x) => x.broadcast?.day === "monday"),
    tuesday: today.filter((x) => x.broadcast?.day === "tuesday"),
    wednesday: today.filter((x) => x.broadcast?.day === "wednesday"),
    thursday: today.filter((x) => x.broadcast?.day === "thursday"),
    friday: today.filter((x) => x.broadcast?.day === "friday"),
    saturday: today.filter((x) => x.broadcast?.day === "saturday"),
    sunday: today.filter((x) => x.broadcast?.day === "sunday"),
  };

  return (
    <main className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">KotakNet — Anime Zone</h1>

      <SearchBar />

      {/* Today */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Anime Airing Today</h2>
        <div className="grid grid-cols-6 gap-4">
          {today.map((anime, index) => (
            <AnimeCard key={`${anime.mal_id}-${index}`} {...anime} />
          ))}
        </div>
      </section>

      {/* Hot */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">🔥 Hot Anime</h2>
        <div className="grid grid-cols-6 gap-4">
          {hot.map((anime, index) => (
            <AnimeCard key={`${anime.mal_id}-${index}`} {...anime} />
          ))}
        </div>
      </section>

      {/* Top 50 */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">🏆 Top 25 Anime</h2>
        <div className="grid grid-cols-6 gap-4">
          {top50.map((anime, index) => (
            <AnimeCard key={`${anime.mal_id}-${index}`} {...anime} />
          ))}
        </div>
      </section>

      <WeeklyTabs weekly={weekly} />
    </main>
  );
}