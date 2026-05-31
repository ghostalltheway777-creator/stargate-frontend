import React, { useState } from 'react'
import { AllSeeingEye, FlowerOfLife } from './SacredGeometry'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import './Decode.css'

const EXAMPLES = [
  { label: 'Engle', q: 'engle' },
  { label: 'Helvede', q: 'helvede' },
  { label: 'Djævel', q: 'djævel' },
  { label: 'Opstandelse', q: 'opstandelse' },
  { label: 'Synd', q: 'synd' },
  { label: 'Paradis', q: 'paradis' },
  { label: 'Jihad', q: 'jihad' },
  { label: 'Armageddon', q: 'armageddon' },
  { label: 'Nephilim', q: 'nephilim' },
  { label: 'Ilddåb', q: 'ilddåb' },
]

const RELIGIONS = [
  'Islam', 'Kristendom', 'Jødedom', 'Hinduisme', 'Buddhisme',
  'Taoisme', 'Sikhisme', 'Hermetisme', 'Kabbalah', 'Gnostisk',
  'Egyptisk', 'Sumerisk', 'Nordisk', 'Talmudisme',
]

const MODES = [
  { id: 'decode',   label: '⊗ Dekod symbol',        desc: 'Sand mening bag religiøse symboler og ritualer' },
  { id: 'hvd',      label: '⚖ Guddommelig vs Menneskelig', desc: 'Hvad er åbenbaring — hvad er manipulation?' },
]

export default function Decode() {
  const [mode, setMode] = useState('decode')
  const [query, setQuery] = useState('')
  const [religion, setReligion] = useState('Islam')
  const [topic, setTopic] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function run() {
    if (mode === 'decode' && !query.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      if (mode === 'decode') {
        const res = await fetch('/api/decode', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ symbol: query }),
        })
        const d = await res.json()
        setResult(d.result)
      } else {
        const res = await fetch('/api/human-vs-divine', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ religion, topic: topic || 'generelt' }),
        })
        const d = await res.json()
        setResult(d.result)
      }
    } catch {
      setError('Kunne ikke forbinde til serveren.')
    }
    setLoading(false)
  }

  function onKey(e) { if (e.key === 'Enter') run() }

  return (
    <div className="decode-page">

      <div className="decode-header">
        <div className="decode-geo">
          <AllSeeingEye size={180} color="#d4a843" opacity={0.55} />
        </div>
        <h2 className="decode-title">Sand Fortolkning</h2>
        <p className="decode-sub">Se bag den ydre mening — til det mystikerne vidste</p>
      </div>

      {/* Mode switcher */}
      <div className="decode-modes">
        {MODES.map(m => (
          <button key={m.id}
            className={`dmode-btn ${mode === m.id ? 'active' : ''}`}
            onClick={() => { setMode(m.id); setResult(null) }}>
            <span className="dmode-label">{m.label}</span>
            <span className="dmode-desc">{m.desc}</span>
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="decode-input-block">
        {mode === 'decode' ? (
          <>
            <div className="decode-input-wrap">
              <span className="decode-icon">⊗</span>
              <input
                className="decode-input"
                type="text"
                placeholder="Symbol, ritual eller begreb..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={onKey}
                autoFocus
              />
              {query && <button className="clear-btn" onClick={() => { setQuery(''); setResult(null) }}>×</button>}
            </div>
            <div className="decode-examples">
              {EXAMPLES.map(ex => (
                <button key={ex.q} className="ex-pill"
                  onClick={() => { setQuery(ex.q); setResult(null) }}>
                  {ex.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="hvd-setup">
            <div className="hvd-row">
              <span className="hvd-label">Religion:</span>
              <div className="hvd-picker">
                {RELIGIONS.map(r => (
                  <button key={r}
                    className={`ex-pill ${religion === r ? 'active' : ''}`}
                    onClick={() => setReligion(r)}>
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div className="decode-input-wrap" style={{ marginTop: '0.8rem' }}>
              <span className="decode-icon">◎</span>
              <input
                className="decode-input"
                type="text"
                placeholder="Specifikt emne (valgfrit)..."
                value={topic}
                onChange={e => setTopic(e.target.value)}
                onKeyDown={onKey}
              />
            </div>
          </div>
        )}

        <button
          className={`decode-btn ${loading ? 'loading' : ''}`}
          onClick={run}
          disabled={loading || (mode === 'decode' && !query.trim())}>
          {loading ? <span className="spinner" /> : mode === 'decode' ? 'Afkod symbolet' : 'Analyser'}
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="decode-loading">
          <div className="loading-geo spin-slow">
            <FlowerOfLife size={110} color="#d4a843" opacity={0.7} />
          </div>
          <p className="loading-text">Løfter sløret...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {/* Result */}
      {result && (
        <div className="decode-result card">
          <div className="decode-result-meta">
            <span className="decode-tag">
              {mode === 'decode' ? `⊗ ${query}` : `⚖ ${religion}`}
            </span>
          </div>
          <SpeechPlayer htmlText={formatResult(result)} />
          <div className="decode-result-body prose"
            dangerouslySetInnerHTML={{ __html: formatResult(result) }} />
          <button className="result-action-btn" style={{ marginTop: '1rem' }}
            onClick={() => { setResult(null); setQuery('') }}>
            Ny dekodning
          </button>
        </div>
      )}

    </div>
  )
}
