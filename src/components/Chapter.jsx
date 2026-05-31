import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import ShareButton from './ShareButton'
import PremiumGate from './PremiumGate'
import './Chapter.css'

const SESSION_KEY = 'sg_session'
function getSession() {
  let s = localStorage.getItem(SESSION_KEY)
  if (!s) { s = 'user_' + Math.random().toString(36).slice(2); localStorage.setItem(SESSION_KEY, s) }
  return s
}

const TITLES = {
  1:  'Hvad er 3D vs 5D religion?',
  2:  'Islam — fra Sharia til Sufisme',
  3:  'Kristendom — fra Kirke til Gnosis',
  4:  'Jødedom — fra Torah til Kabbalah',
  5:  'Hinduisme — fra Ritual til Advaita',
  6:  'Buddhisme — fra Regler til Zen',
  7:  'Ancient — sten-tavler og primal visdom',
  8:  'Den universelle sandhed',
  9:  'Numerologi — Tal som bevidsthedens frekvens',
  10: 'Astrologi — Planeterne som bevidsthedskort',
  11: 'Talmudisme vs Jødedom — Den kritiske forskel',
  12: 'Menneskelig manipulation i religion',
  13: 'Quantum fysik forklarer religion',
  14: 'Vi er alle én — Perennial filosofi',
  15: "Interdimensionelle væsner — hvad 'engle' er",
  16: 'Bevidsthedsstadier — rejsen fra 1D til 9D',
}

export default function Chapter() {
  const { num } = useParams()
  const chapter = parseInt(num)
  const navigate = useNavigate()
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setLoading(true)
    setContent(null)
    setError(null)
    fetch(`/api/course/${chapter}?session_id=${getSession()}`)
      .then(r => {
        if (r.status === 403) throw new Error('premium')
        if (!r.ok) throw new Error('server')
        return r.json()
      })
      .then(d => { setContent(d.content); setLoading(false) })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [chapter])

  async function markDone() {
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: getSession(), chapter })
    }).catch(() => {})
    setDone(true)
    setTimeout(() => navigate('/courses'), 1200)
  }

  return (
    <div className="chapter-page">
      <button className="back-btn" onClick={() => navigate('/courses')}>← Kursus</button>

      <div className="chapter-header">
        <span className="ch-label">Kapitel {chapter} / 16</span>
        <h1 className="ch-big-title">{TITLES[chapter]}</h1>
      </div>

      {loading && (
        <div className="ch-loading">
          <div className="loading-ring" />
          <p>Henter kapitel...</p>
        </div>
      )}

      {error === 'premium' && <PremiumGate chapter={chapter} />}

      {error && error !== 'premium' && (
        <div className="error-msg card">Kunne ikke hente kapitel. Er backend kørende?</div>
      )}

      {content && (
        <>
          <div style={{ display:'flex', gap:'0.6rem', alignItems:'center', flexWrap:'wrap', marginBottom:'0.5rem' }}>
            <SpeechPlayer htmlText={formatResult(content)} />
            <ShareButton htmlText={formatResult(content)} label={TITLES[chapter]} />
          </div>
          <div
            className="chapter-content card prose"
            dangerouslySetInnerHTML={{ __html: formatResult(content) }}
          />

          {!done ? (
            <button className="done-btn" onClick={markDone}>
              ✓ Marker som gennemført
            </button>
          ) : (
            <div className="done-confirm">
              <span>✓ Kapitel gennemført!</span>
            </div>
          )}

          <div className="ch-nav">
            {chapter > 1 && (
              <button className="nav-arrow" onClick={() => navigate(`/courses/${chapter - 1}`)}>
                ← Kapitel {chapter - 1}
              </button>
            )}
            {chapter < 16 && (
              <button className="nav-arrow" onClick={() => navigate(`/courses/${chapter + 1}`)}>
                Kapitel {chapter + 1} →
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
