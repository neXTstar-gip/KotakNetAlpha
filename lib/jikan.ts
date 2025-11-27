const BASE_URL = "https://api.jikan.moe/v4";

// ==============================
// Get anime airing today
// ==============================
export async function getTodayAnime() {
  const res = await fetch(`${BASE_URL}/schedules?limit=20`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch today's anime");

  const data = await res.json();
  return data.data;
}

export async function getAnime(id: number) { // <-- Added 'export'
  // ... fetching logic using Jikan API
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  if (!res.ok) throw new Error('Failed to fetch anime details');
  const data = await res.json();
  return data.data;
}

// ==============================
// Get trending / hot anime (Top Airing)
// ==============================
export async function getHotAnime() {
  const res = await fetch(`${BASE_URL}/top/anime?limit=20&filter=airing`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch hot anime");

  const data = await res.json();
  return data.data;
}

// ==============================
// Get Top 25 anime (all-time)
// ==============================
export async function getTop25() {
  try {
    const res = await fetch(`${BASE_URL}/top/anime?limit=25`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status);
      return [];
    }

    const json = await res.json();

    if (!json?.data || !Array.isArray(json.data)) {
      console.error("Invalid JSON:", json);
      return [];
    }

    return json.data;
  } catch (err) {
    console.error("Top25 Error:", err);
    return [];
  }
}

// ==============================
// Search Anime
// ==============================
export async function searchAnime(q: string) {
  if (!q) return [];

  const res = await fetch(
    `${BASE_URL}/anime?q=${encodeURIComponent(q)}&limit=20&sfw=true`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to search anime");

  const data = await res.json();
  return data.data || [];
}