const BASE = "https://api.jikan.moe/v4";

export async function fetchNowSeason() {
  const res = await fetch(`${BASE}/seasons/now`);
  const json = await res.json();
  return json.data;
}

export async function searchAnime(q: string, page = 1) {
  const res = await fetch(`${BASE}/anime?q=${encodeURIComponent(q)}&page=${page}`);
  const json = await res.json();
  return json.data;
}

export async function getAnimeById(id: number | string) {
  const res = await fetch(`${BASE}/anime/${id}`);
  const json = await res.json();
  return json.data;
}