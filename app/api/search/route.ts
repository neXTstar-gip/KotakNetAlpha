import { searchAnime } from "@/lib/jikan";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  const results = await searchAnime(q);

  return Response.json(results);
}