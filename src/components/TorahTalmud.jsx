import React, { useState } from 'react'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import './TorahTalmud.css'

const TOPICS = [
  'Politisk zionisme vs Torah-jødedom',
  'Talmudisme som ideologisk strømning',
  'Neturei Karta — Torah-jøder mod zionisme',
  'Kol Nidre og rabbinsk autoritet',
  'Renter og økonomi — Torah vs Talmud',
  'Babylonsk eksils indflydelse på rabbinsk lov',
  'Benjamin Freedman og Israel Shahak',
  'Karaitter — Torah uden Talmud',
  'Den mystiske Torah — Kabbalah og Zohar',
  'Ikke alle jøder er ens — de tre strømninger',
]

export default function TorahTalmud() {
  const [topic, setTopic] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function run(topicOverride) {
    const t = topicOverride !== undefined ? topicOverride : topic
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch('/api/torah-vs-talmud', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: t || null }),
      })
      const d = await res.json()
      setResult(d.result)
    } catch {
      setError('Kunne ikke forbinde til serveren.')
    }
    setLoading(false)
  }

  return (
    <div className="tt-page">

      <div className="tt-header">
        <div className="tt-symbol">
          <span className="tt-star-of-david">✡</span>
        </div>
        <h2 className="tt-title">Torah vs Talmud</h2>
        <p className="tt-sub">Guddommelig åbenbaring overfor babylonsk korrumpering</p>
      </div>

      {/* Forklaring */}
      <div className="tt-intro-note">
        Ligesom ikke alle muslimer er ens, og ikke alle kristne er korstogenes riddere —
        er ikke alle jøder ens. Her er de tre helt forskellige strømninger.
      </div>

      {/* Three-way split */}
      <div className="tt-split tt-split-3">
        <div className="tt-side torah">
          <div className="tt-side-icon">📜</div>
          <h3>TORAH-JØDEDOM</h3>
          <p>Guds åbenbaring til Moses.<br />Kærlighed, retfærdighed, universel etik.</p>
          <ul>
            <li>Elsk din næste — og den fremmede</li>
            <li>Alle skabt i Guds billede</li>
            <li>Neturei Karta: mod zionisme</li>
            <li>Karaitter: kun Torah, ingen Talmud</li>
          </ul>
        </div>
        <div className="tt-side talmud">
          <div className="tt-side-icon">📚</div>
          <h3>TALMUDISME</h3>
          <p>Rabbinsk tradition 200–500 e.Kr.<br />Menneskelig fortolkning — ikke guddommeligt.</p>
          <ul>
            <li>Rabbinsk autoritet over Torah</li>
            <li>Kol Nidre — annullering af løfter</li>
            <li>Babylonsk eksils indflydelse</li>
            <li>De fleste vestlige synagoger</li>
          </ul>
        </div>
        <div className="tt-side zionism">
          <div className="tt-side-icon">🏛</div>
          <h3>POLITISK ZIONISME</h3>
          <p>Sekulær nationalisme fra 1896.<br />Grundlagt af Herzl — ikke religiøst.</p>
          <ul>
            <li>Europæisk nationalisme, ikke Torah</li>
            <li>Mange Torah-jøder er imod</li>
            <li>Israel som menneskelig stat</li>
            <li>Adskilt fra jødisk religion</li>
          </ul>
        </div>
      </div>

      {/* Topic picker */}
      <div className="tt-topics">
        <p className="tt-topics-label">Vælg specifikt emne eller kør fuld analyse:</p>
        <div className="tt-pills">
          {TOPICS.map(t => (
            <button
              key={t}
              className={`tt-pill ${topic === t ? 'active' : ''}`}
              onClick={() => setTopic(topic === t ? '' : t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <button
        className={`tt-btn ${loading ? 'loading' : ''}`}
        onClick={() => run()}
        disabled={loading}>
        {loading ? <><span className="spinner" /> Analyserer...</> : topic ? `Analyser: ${topic}` : 'Fuld Torah vs Talmud Analyse'}
      </button>

      {loading && (
        <div className="tt-loading">
          <div className="tt-loading-ring" />
          <p>Løfter sløret over historiens største bedrag...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {result && (
        <div className="tt-result card">
          <div className="tt-result-meta">
            <span className="tt-tag torah-tag">📜 Torah</span>
            <span className="tt-vs-tag">vs</span>
            <span className="tt-tag talmud-tag">⚠ Talmud</span>
            {topic && <span className="tt-topic-tag">— {topic}</span>}
          </div>
          <SpeechPlayer htmlText={formatResult(result)} />
          <div className="tt-result-body prose"
            dangerouslySetInnerHTML={{ __html: formatResult(result) }} />
          <button className="result-action-btn" style={{ marginTop: '1rem' }}
            onClick={() => { setResult(null); setTopic('') }}>
            Ny analyse
          </button>
        </div>
      )}
    </div>
  )
}
