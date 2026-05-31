import { useState, useEffect } from 'react'
import './RitualTracker.css'

const PRACTICES = [
  { id: 'meditation', icon: '🧘', label: 'Meditation' },
  { id: 'tarot',      icon: '🃏', label: 'Tarot kort' },
  { id: 'journal',    icon: '📓', label: 'Journaling' },
  { id: 'breathwork', icon: '🌬️', label: 'Åndedræt' },
  { id: 'gratitude',  icon: '🙏', label: 'Taknemmelighed' },
  { id: 'movement',   icon: '🌿', label: 'Bevægelse' },
  { id: 'reading',    icon: '📖', label: 'Hellig tekst' },
  { id: 'silence',    icon: '☽', label: 'Stilhed' },
]

export default function RitualTracker() {
  const [today, setToday]     = useState({})
  const [streak, setStreak]   = useState(0)
  const [history, setHistory] = useState([])
  const [note, setNote]       = useState('')
  const [saved, setSaved]     = useState(false)

  useEffect(() => { load() }, [])

  async function load() {
    const uuid = localStorage.getItem('sg_uuid') || 'guest'
    const r = await fetch(`/api/ritual?uuid=${uuid}`)
    if (r.ok) {
      const d = await r.json()
      setToday(d.today || {})
      setStreak(d.streak || 0)
      setHistory(d.history || [])
      setNote(d.today_note || '')
    }
  }

  async function toggle(id) {
    const next = { ...today, [id]: !today[id] }
    setToday(next)
    const uuid = localStorage.getItem('sg_uuid') || 'guest'
    await fetch('/api/ritual', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uuid, practices: next, note }),
    })
    load()
  }

  async function saveNote() {
    const uuid = localStorage.getItem('sg_uuid') || 'guest'
    await fetch('/api/ritual', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uuid, practices: today, note }),
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const done = Object.values(today).filter(Boolean).length
  const pct  = Math.round((done / PRACTICES.length) * 100)

  return (
    <div className="ritual-page">
      <div className="ritual-hero">
        <div className="ritual-flame">🔥</div>
        <h1>Daglig Ritual</h1>
        <p>Spor din spirituelle praksis — byg momentum dag for dag</p>
      </div>

      <div className="ritual-streak">
        <div className="streak-num">{streak}</div>
        <div className="streak-label">dages streak</div>
        <div className="streak-ring">
          <svg viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(212,168,67,0.15)" strokeWidth="6" />
            <circle cx="40" cy="40" r="34" fill="none" stroke="#d4a843"
              strokeWidth="6" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 34}`}
              strokeDashoffset={`${2 * Math.PI * 34 * (1 - pct / 100)}`}
              transform="rotate(-90 40 40)"
              style={{ transition: 'stroke-dashoffset 0.6s ease' }}
            />
          </svg>
          <div className="ring-pct">{pct}%</div>
        </div>
      </div>

      <div className="ritual-grid">
        {PRACTICES.map(p => (
          <button
            key={p.id}
            className={`ritual-item ${today[p.id] ? 'done' : ''}`}
            onClick={() => toggle(p.id)}
          >
            <span className="ritual-icon">{p.icon}</span>
            <span className="ritual-label">{p.label}</span>
            {today[p.id] && <span className="ritual-check">✓</span>}
          </button>
        ))}
      </div>

      <div className="ritual-note-wrap">
        <p className="ritual-note-label">Dagens refleksion</p>
        <textarea
          className="ritual-note"
          placeholder="Hvad mærker du i dag? Hvad er din intention?"
          value={note}
          onChange={e => setNote(e.target.value)}
          rows={3}
        />
        <button className="ritual-save" onClick={saveNote}>
          {saved ? '✓ Gemt' : 'Gem dagbog'}
        </button>
      </div>

      {history.length > 0 && (
        <div className="ritual-history">
          <p className="section-label">De seneste 7 dage</p>
          {history.slice(0, 7).map(h => (
            <div key={h.date} className="history-row">
              <span className="h-date">{new Date(h.date).toLocaleDateString('da-DK', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
              <div className="h-dots">
                {PRACTICES.map(p => (
                  <span key={p.id} className={`h-dot ${h.practices?.[p.id] ? 'done' : ''}`} title={p.label} />
                ))}
              </div>
              <span className="h-count">{Object.values(h.practices || {}).filter(Boolean).length}/{PRACTICES.length}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
