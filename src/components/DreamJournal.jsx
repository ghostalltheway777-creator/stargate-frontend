import { useState, useEffect } from 'react'
import './DreamJournal.css'

export default function DreamJournal() {
  const [dreams, setDreams]   = useState([])
  const [text, setText]       = useState('')
  const [mood, setMood]       = useState('neutral')
  const [result, setResult]   = useState(null)
  const [loading, setLoading] = useState(false)
  const [view, setView]       = useState('new') // 'new' | 'history'

  const MOODS = ['😴','😢','😨','😕','😐','🙂','😮','✨','🌟']

  useEffect(() => { loadDreams() }, [])

  async function loadDreams() {
    const uuid = localStorage.getItem('sg_uuid') || 'guest'
    const r = await fetch(`/api/dream/list?uuid=${uuid}`)
    if (r.ok) setDreams(await r.json())
  }

  async function analyze() {
    if (!text.trim()) return
    setLoading(true); setResult(null)
    const uuid = localStorage.getItem('sg_uuid') || 'guest'
    const r = await fetch('/api/dream/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, mood, uuid }),
    })
    const d = await r.json()
    setResult(d)
    setLoading(false)
    loadDreams()
  }

  async function deleteDream(id) {
    const uuid = localStorage.getItem('sg_uuid') || 'guest'
    await fetch(`/api/dream/${id}?uuid=${uuid}`, { method: 'DELETE' })
    loadDreams()
  }

  return (
    <div className="dream-page">
      <div className="dream-hero">
        <div className="dream-moon">☽</div>
        <h1>Drømmejournalen</h1>
        <p>Dine drømme er budskaber fra det ubevidste — AI fortolker symboler, arketyper og åndelige temaer</p>
      </div>

      <div className="dream-tabs">
        <button className={view === 'new' ? 'active' : ''} onClick={() => setView('new')}>✦ Ny drøm</button>
        <button className={view === 'history' ? 'active' : ''} onClick={() => setView('history')}>
          ◎ Historik ({dreams.length})
        </button>
      </div>

      {view === 'new' && (
        <div className="dream-new">
          <div className="dream-card">
            <p className="dream-label">Beskriv din drøm</p>
            <textarea
              className="dream-textarea"
              placeholder="Skriv din drøm her — så detaljeret som du husker den. Farver, følelser, personer, steder, symboler..."
              value={text}
              onChange={e => setText(e.target.value)}
              rows={6}
            />
            <p className="dream-label" style={{ marginTop: '1rem' }}>Følelse ved opvågning</p>
            <div className="mood-row">
              {MOODS.map(m => (
                <button key={m} className={`mood-btn ${mood === m ? 'active' : ''}`}
                  onClick={() => setMood(m)}>{m}</button>
              ))}
            </div>
            <button className="dream-btn" onClick={analyze} disabled={loading || !text.trim()}>
              {loading ? '🌀 Fortolker...' : '✦ Fortolk drøm'}
            </button>
          </div>

          {result && (
            <div className="dream-result">
              <div className="result-section">
                <h3>🔑 Nøglesymboler</h3>
                <p>{result.symbols}</p>
              </div>
              <div className="result-section">
                <h3>🌀 Arketypisk tema</h3>
                <p>{result.archetype}</p>
              </div>
              <div className="result-section">
                <h3>⚡ Åndelig besked</h3>
                <p>{result.message}</p>
              </div>
              <div className="result-section">
                <h3>☽ 3D → 5D fortolkning</h3>
                <p>{result.transcendent}</p>
              </div>
              {result.action && (
                <div className="result-section gold">
                  <h3>✦ Handling i dag</h3>
                  <p>{result.action}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {view === 'history' && (
        <div className="dream-history">
          {dreams.length === 0 && (
            <div className="empty-state">
              <div className="empty-moon">☽</div>
              <p>Ingen drømme gemt endnu</p>
              <p>Skriv din første drøm og lad AI fortolke den</p>
            </div>
          )}
          {dreams.map(d => (
            <div key={d.id} className="dream-entry">
              <div className="entry-header">
                <span className="entry-mood">{d.mood}</span>
                <span className="entry-date">{new Date(d.created_at).toLocaleDateString('da-DK')}</span>
                <button className="entry-del" onClick={() => deleteDream(d.id)}>✕</button>
              </div>
              <p className="entry-text">{d.dream_text.slice(0, 160)}{d.dream_text.length > 160 ? '...' : ''}</p>
              {d.symbols && <p className="entry-symbols">🔑 {d.symbols}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
