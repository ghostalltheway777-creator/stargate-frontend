import React, { useState, useEffect } from 'react'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import './Chakra.css'

const CHAKRA_EMOJIS = ['🔴','🟠','🟡','💚','🔵','🟣','⚪']

export default function Chakra() {
  const [chakras, setChakras]   = useState([])
  const [selected, setSelected] = useState(null)
  const [question, setQuestion] = useState('')
  const [result, setResult]     = useState(null)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)

  useEffect(() => {
    fetch('/api/chakra/list').then(r => r.json()).then(d => setChakras(d.chakras)).catch(() => {})
  }, [])

  async function analyze() {
    if (!selected) return
    setLoading(true); setError(null); setResult(null)
    try {
      const res = await fetch('/api/chakra/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chakra: selected.id, question: question || null }),
      })
      const d = await res.json()
      setResult(d.result)
    } catch { setError('Kunne ikke forbinde.') }
    setLoading(false)
  }

  return (
    <div className="chakra-page">

      <div className="chakra-header">
        <div className="chakra-stack">
          {CHAKRA_EMOJIS.map((e,i) => <span key={i} className="cs-dot">{e}</span>)}
        </div>
        <h2 className="chakra-title">Chakrasystemet</h2>
        <p className="chakra-sub">De 7 energicentre — fra rod til krone · Vedisk visdom møder moderne healing</p>
      </div>

      {/* Chakra selector */}
      <div className="chakra-wheel">
        {chakras.map((ch, i) => (
          <button key={ch.id}
            className={`chakra-btn ${selected?.id === ch.id ? 'active' : ''}`}
            style={{ '--ch-color': ch.color }}
            onClick={() => { setSelected(selected?.id === ch.id ? null : ch); setResult(null) }}>
            <span className="cb-emoji">{CHAKRA_EMOJIS[i]}</span>
            <span className="cb-num">{ch.number}</span>
            <span className="cb-name">{ch.name}</span>
            <span className="cb-sanskrit">{ch.sanskrit}</span>
            <div className="cb-meta">
              <span>{ch.element}</span>
              <span>{ch.freq}</span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="chakra-detail card">
          <div className="cd-header">
            <div className="cd-orb" style={{ background: selected.color, boxShadow: `0 0 30px ${selected.color}80` }} />
            <div>
              <div className="cd-name" style={{ color: selected.color }}>{selected.name}</div>
              <div className="cd-sanskrit">{selected.sanskrit} · {selected.mantra} · {selected.planet}</div>
              <div className="cd-location">{selected.location}</div>
            </div>
          </div>

          <input className="chakra-q-input" placeholder="Stil et spørgsmål (valgfrit)..."
            value={question} onChange={e => setQuestion(e.target.value)} />

          <button className="tt-btn" onClick={analyze} disabled={loading}>
            {loading ? <><span className="spinner" /> Analyserer...</> : `🌀 Analyser ${selected.name}`}
          </button>
        </div>
      )}

      {loading && (
        <div className="tt-loading">
          <div className="tt-loading-ring" style={{ borderTopColor: selected?.color }} />
          <p>Forbinder med {selected?.name}...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {result && (
        <div className="chakra-result card">
          <SpeechPlayer htmlText={formatResult(result)} />
          <div className="prose" dangerouslySetInnerHTML={{ __html: formatResult(result) }} />
          <button className="result-action-btn" style={{ marginTop: '1rem' }}
            onClick={() => { setResult(null); setQuestion('') }}>Ny analyse</button>
        </div>
      )}

      {/* Static overview */}
      {!selected && chakras.length > 0 && (
        <div className="chakra-overview">
          <p className="chakra-overview-title">Tryk på et chakra for dyb analyse</p>
          <div className="chakra-path">
            {chakras.map((ch, i) => (
              <div key={ch.id} className="cp-item">
                <div className="cp-orb" style={{ background: ch.color, boxShadow: `0 0 12px ${ch.color}60` }}
                  onClick={() => setSelected(ch)} />
                {i < chakras.length - 1 && <div className="cp-line" />}
              </div>
            ))}
          </div>
          <p className="chakra-freq-note">
            Frekvenser: 396 · 417 · 528 · 639 · 741 · 852 · 963 Hz — Solfège-skalaens hellige toner
          </p>
        </div>
      )}
    </div>
  )
}
