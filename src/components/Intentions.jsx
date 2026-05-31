import { useState, useEffect } from 'react'
import './Intentions.css'

export default function Intentions() {
  const [items, setItems]     = useState([])
  const [text, setText]       = useState('')
  const [category, setCategory] = useState('healing')
  const [posting, setPosting] = useState(false)

  const CATS = [
    { id: 'healing',   icon: '💚', label: 'Healing' },
    { id: 'love',      icon: '💜', label: 'Kærlighed' },
    { id: 'clarity',   icon: '💡', label: 'Klarhed' },
    { id: 'abundance', icon: '✨', label: 'Overflod' },
    { id: 'peace',     icon: '☮️', label: 'Fred' },
    { id: 'guidance',  icon: '🌟', label: 'Vejledning' },
  ]

  useEffect(() => { load() }, [])

  async function load() {
    const r = await fetch('/api/intentions')
    if (r.ok) setItems(await r.json())
  }

  async function post() {
    if (!text.trim()) return
    setPosting(true)
    const uuid = localStorage.getItem('sg_uuid') || 'guest'
    await fetch('/api/intentions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uuid, text, category }),
    })
    setText(''); setPosting(false)
    load()
  }

  async function resonate(id) {
    const uuid = localStorage.getItem('sg_uuid') || 'guest'
    await fetch(`/api/intentions/${id}/resonate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uuid }),
    })
    load()
  }

  const cat = (id) => CATS.find(c => c.id === id) || CATS[0]

  return (
    <div className="int-page">
      <div className="int-hero">
        <div className="int-symbol">⬡</div>
        <h1>Kollektive Intentioner</h1>
        <p>Send din intention ud i det kollektive felt — andre sjæle sender energi tilbage</p>
      </div>

      <div className="int-compose">
        <div className="int-cats">
          {CATS.map(c => (
            <button key={c.id} className={`int-cat ${category === c.id ? 'active' : ''}`}
              onClick={() => setCategory(c.id)}>
              {c.icon} {c.label}
            </button>
          ))}
        </div>
        <textarea
          className="int-textarea"
          placeholder={`Hvad er din intention? Skriv den fra hjertet...`}
          value={text}
          onChange={e => setText(e.target.value)}
          rows={3}
          maxLength={280}
        />
        <div className="int-footer">
          <span className="int-count">{text.length}/280</span>
          <button className="int-post" onClick={post} disabled={posting || !text.trim()}>
            {posting ? '🌀' : '✦ Send intention'}
          </button>
        </div>
      </div>

      <p className="int-section-label">✦ {items.length} intentioner i det kollektive felt</p>

      <div className="int-list">
        {items.map(item => (
          <div key={item.id} className={`int-item cat-${item.category}`}>
            <div className="int-item-header">
              <span className="int-cat-icon">{cat(item.category).icon}</span>
              <span className="int-cat-label">{cat(item.category).label}</span>
              <span className="int-time">{timeAgo(item.created_at)}</span>
            </div>
            <p className="int-text">{item.text}</p>
            <button className="int-resonate" onClick={() => resonate(item.id)}>
              <span className="resonate-heart">🤍</span>
              <span>{item.resonances || 0} sender energi</span>
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <div className="int-empty">
            <div style={{ fontSize: '2.5rem', opacity: 0.3 }}>⬡</div>
            <p>Det kollektive felt er stille — vær den første til at sende en intention</p>
          </div>
        )}
      </div>
    </div>
  )
}

function timeAgo(iso) {
  const diff = (Date.now() - new Date(iso)) / 1000
  if (diff < 60)    return 'Lige nu'
  if (diff < 3600)  return `${Math.floor(diff/60)}m siden`
  if (diff < 86400) return `${Math.floor(diff/3600)}t siden`
  return `${Math.floor(diff/86400)}d siden`
}
