import React, { useState } from 'react'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import ShareButton from './ShareButton'
import { useTradition } from '../TraditionContext'
import './StudyPlan.css'

const LEVELS = [
  { id: 'begynder',   label: '🌱 Begynder',   desc: 'Ny til emnet' },
  { id: 'øvet',       label: '🌿 Øvet',        desc: 'Har læst noget' },
  { id: 'avanceret',  label: '🌳 Avanceret',   desc: 'Dybt kendskab' },
]

const HOURS = [1, 2, 3, 5, 7, 10]

export default function StudyPlan() {
  const { myTradition, ALL_TRADITIONS } = useTradition()
  const [tradition, setTradition] = useState(myTradition || '')
  const [level, setLevel] = useState('begynder')
  const [hours, setHours] = useState(3)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function generate() {
    if (!tradition) return
    setLoading(true); setError(null); setResult(null)
    try {
      const res = await fetch('/api/study-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tradition, level, hours_per_week: hours }),
      })
      const d = await res.json()
      setResult(d.result)
    } catch { setError('Kunne ikke forbinde til serveren.') }
    setLoading(false)
  }

  return (
    <div className="sp-page">
      <div className="sp-header">
        <div className="sp-icon">◎</div>
        <h2 className="sp-title">Personlig Studieplan</h2>
        <p className="sp-sub">AI laver din 4-ugers åndelige læringsplan</p>
      </div>

      <div className="sp-form card">
        {/* Tradition */}
        <div className="sp-field">
          <label className="sp-label">Din tradition / interesse</label>
          <div className="sp-chips">
            {ALL_TRADITIONS.map(t => (
              <button key={t}
                className={`sp-chip ${tradition === t ? 'active' : ''}`}
                onClick={() => setTradition(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Level */}
        <div className="sp-field">
          <label className="sp-label">Dit niveau</label>
          <div className="sp-levels">
            {LEVELS.map(l => (
              <button key={l.id}
                className={`sp-level-btn ${level === l.id ? 'active' : ''}`}
                onClick={() => setLevel(l.id)}>
                <span className="sl-label">{l.label}</span>
                <span className="sl-desc">{l.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div className="sp-field">
          <label className="sp-label">Timer per uge</label>
          <div className="sp-hours">
            {HOURS.map(h => (
              <button key={h}
                className={`sp-hour-btn ${hours === h ? 'active' : ''}`}
                onClick={() => setHours(h)}>
                {h}t
              </button>
            ))}
          </div>
        </div>

        <button
          className={`tt-btn ${loading ? 'loading' : ''}`}
          onClick={generate}
          disabled={loading || !tradition}>
          {loading
            ? <><span className="spinner" /> Genererer din plan...</>
            : tradition
              ? `Lav plan for ${tradition}`
              : 'Vælg en tradition'}
        </button>
      </div>

      {loading && (
        <div className="tt-loading">
          <div className="tt-loading-ring" />
          <p>Din personlige 4-ugers plan er på vej...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {result && (
        <div className="sp-result card">
          <div className="sp-result-meta">
            <span className="sp-result-tag">◎ {tradition}</span>
            <span className="sp-result-tag secondary">{LEVELS.find(l=>l.id===level)?.label}</span>
            <span className="sp-result-tag secondary">{hours}t/uge</span>
          </div>
          <div className="sp-result-actions">
            <SpeechPlayer htmlText={formatResult(result)} />
            <ShareButton htmlText={formatResult(result)} label={`Studieplan: ${tradition}`} />
          </div>
          <div className="sp-result-body prose"
            dangerouslySetInnerHTML={{ __html: formatResult(result) }} />
          <button className="result-action-btn" style={{ marginTop: '1rem' }}
            onClick={() => { setResult(null) }}>
            Ny plan
          </button>
        </div>
      )}
    </div>
  )
}
