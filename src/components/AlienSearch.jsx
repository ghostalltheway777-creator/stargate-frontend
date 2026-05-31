import React, { useState } from 'react'
import './AlienSearch.css'

export default function AlienSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [category, setCategory] = useState('all')

  async function search() {
    if (!query.trim()) return
    setLoading(true)
    setSearched(true)
    try {
      const r = await fetch('/api/alien-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, category }),
      })
      const d = await r.json()
      setResults(d.results || [])
    } catch {
      setResults([])
    }
    setLoading(false)
  }

  const SUGGESTIONS = [
    'Archons kontrollerer menneskeheden',
    'Epstein CIA Mossad forbindelse',
    'Anunnaki menneskelig DNA',
    'Tesla fri energi undertrykt',
    'Tartaria Mud Flood bevis',
    'Pentagon UAP teknologi',
    'Hypostasis of the Archons',
    'Bill Gates vaccine agenda',
  ]

  return (
    <div className="as-page">
      <div className="as-hero">
        <div className="as-icon">🔍</div>
        <h1 className="as-title">Declassified Søgning</h1>
        <p className="as-sub">Søg i 1700+ dokumenter · UAP filer · Epstein · Nag Hammadi · CIA · Sumeriske tekster</p>
      </div>

      <div className="as-search-box">
        <div className="as-category-row">
          {[
            { id:'all',     label:'Alt' },
            { id:'uap',     label:'🛸 UAP' },
            { id:'epstein', label:'🕸 Epstein' },
            { id:'gnostic', label:'📜 Gnostisk' },
            { id:'ancient', label:'🏛 Oldtid' },
          ].map(c => (
            <button key={c.id} className={`as-cat ${category===c.id?'active':''}`} onClick={() => setCategory(c.id)}>
              {c.label}
            </button>
          ))}
        </div>
        <div className="as-input-row">
          <input
            className="as-input"
            placeholder="Søg i alle declassified dokumenter..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && search()}
          />
          <button className="as-btn" onClick={search} disabled={loading}>
            {loading ? '⏳' : '→'}
          </button>
        </div>
      </div>

      {!searched && (
        <div className="as-suggestions">
          <p className="as-sugg-label">Prøv disse søgninger:</p>
          {SUGGESTIONS.map(s => (
            <button key={s} className="as-sugg" onClick={() => { setQuery(s); setTimeout(search, 50) }}>
              {s}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="as-loading">
          <div className="as-spinner" />
          <p>Søger i 1700+ dokumenter...</p>
        </div>
      )}

      {searched && !loading && results.length === 0 && (
        <div className="as-empty">
          <p>Ingen resultater fundet for "{query}"</p>
          <p>Prøv kortere søgeord</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="as-results">
          <p className="as-count">{results.length} resultater for "{query}"</p>
          {results.map((r, i) => (
            <div key={i} className="as-result">
              <div className="as-result-source">{r.source}</div>
              <p className="as-result-text">{r.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
