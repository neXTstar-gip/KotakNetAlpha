'use client'
import { useState, useEffect } from 'react'
import { searchAnime } from '../../lib/jikan'
import AnimeCard from '../../components/AnimeCard'

export default function SearchPage(){
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  async function doSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!query) return
    setLoading(true)
    const data = await searchAnime(query)
    setResults(data)
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={doSearch} className="mb-6">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Cari anime..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map(a => (
          <AnimeCard key={a.mal_id} anime={a} />
        ))}
      </div>
    </div>
  )
}