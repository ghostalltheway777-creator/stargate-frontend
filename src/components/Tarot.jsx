import React, { useState, useEffect } from 'react'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import './Tarot.css'

const CARD_ICONS = ['🃏','🌟','🌙','👑','⚔️','🏛️','❤️','🏆','🦁','🕯️','☸️','⚖️','🌊','💀','🌈','😈','⚡','⭐','🌑','☀️','📯','🌍']
const CARD_COLORS = [
  '#a0a0a0','#e0c050','#c050c0','#50c050','#e08030','#d4a843','#e06080','#4080d0',
  '#e07030','#6080a0','#d0a030','#80c080','#5090d0','#c03060','#50b0a0','#c04040',
  '#c06030','#5090c0','#6060b0','#e0c030','#d07050','#8060d0',
]
function enrich(card) {
  return {
    ...card,
    number: `${card.n} · ${card.en}`,
    icon: CARD_ICONS[card.n] || '🔮',
    color: CARD_COLORS[card.n] || '#d4a843',
    keywords: `${card.keyword} · ${card.element}`,
  }
}

export default function Tarot() {
  const [cards, setCards]       = useState([])
  const [daily, setDaily]       = useState(null)
  const [spread, setSpread]     = useState(null)
  const [question, setQuestion] = useState('')
  const [flipped, setFlipped]   = useState({})
  const [result, setResult]     = useState(null)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)
  const [tab, setTab]           = useState('daily') // 'daily' | 'spread' | 'all'

  useEffect(() => {
    fetch('/api/tarot/cards').then(r => r.json()).then(d => {
      const enriched = d.cards.map(enrich)
      setCards(enriched)
      const todayIdx = new Date().getDate() % enriched.length
      setDaily(enriched[todayIdx])
    }).catch(() => {})
  }, [])

  async function drawSpread(n) {
    setLoading(true); setError(null); setSpread(null); setResult(null); setFlipped({})
    try {
      const res = await fetch('/api/tarot/cards')
      const d = await res.json()
      const shuffled = [...d.cards.map(enrich)].sort(() => Math.random() - 0.5).slice(0, n)
      setSpread(shuffled)
    } catch { setError('Forbindelsesfejl.') }
    setLoading(false)
  }

  async function interpret(card) {
    setLoading(true); setError(null); setResult(null)
    try {
      const res = await fetch('/api/tarot/draw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ card_n: card.n, question: question || null }),
      })
      const d = await res.json()
      setResult(d.result)
    } catch { setError('Forbindelsesfejl.') }
    setLoading(false)
  }

  function flip(i) { setFlipped(f => ({ ...f, [i]: true })) }

  return (
    <div className="tarot-page">

      <div className="tarot-header">
        <div className="tarot-arcana-row">
          {['🌟','🌙','☀️','⚡','🔮','🌀','⚖️'].map((s,i) => <span key={i} className="ta-sym">{s}</span>)}
        </div>
        <h2 className="tarot-title">Tarot</h2>
        <p className="tarot-sub">22 Major Arcana · Kabbalah · Det kollektive ubevidste</p>
      </div>

      <div className="tarot-tabs">
        {[['daily','Dagligt kort'],['spread','Spread'],['all','Alle kort']].map(([k,l]) => (
          <button key={k} className={`tt-tab ${tab===k?'active':''}`} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {/* Daily card */}
      {tab === 'daily' && daily && (
        <div className="tarot-daily">
          <p className="tarot-daily-label">Dagens kort</p>
          <div className={`tarot-card-flip ${flipped['daily'] ? 'flipped' : ''}`}
            onClick={() => flip('daily')}>
            <div className="tcf-front">
              <div className="tcf-back-face">🂠</div>
            </div>
            <div className="tcf-back">
              <div className="tc-inner" style={{ borderColor: daily.color + '60', background: daily.color + '10' }}>
                <div className="tc-num" style={{ color: daily.color }}>{daily.number}</div>
                <div className="tc-icon" style={{ color: daily.color }}>{daily.icon}</div>
                <div className="tc-name" style={{ color: daily.color }}>{daily.name}</div>
                <div className="tc-sub">{daily.keywords}</div>
                <div className="tc-kabbalah">{daily.kabbalah}</div>
              </div>
            </div>
          </div>

          {flipped['daily'] && (
            <div className="tarot-daily-actions">
              <input className="tarot-q-input" placeholder="Dit spørgsmål (valgfrit)..."
                value={question} onChange={e => setQuestion(e.target.value)} />
              <button className="tt-btn" onClick={() => interpret(daily)} disabled={loading}>
                {loading ? <><span className="spinner" /> Tolker...</> : `🔮 Fortolk ${daily.name}`}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Spread */}
      {tab === 'spread' && (
        <div className="tarot-spread-section">
          <div className="tarot-spread-btns">
            <button className="tt-btn tarot-spread-btn" onClick={() => drawSpread(1)}>1 kort</button>
            <button className="tt-btn tarot-spread-btn" onClick={() => drawSpread(3)}>3-korts spread</button>
            <button className="tt-btn tarot-spread-btn" onClick={() => drawSpread(5)}>5-korts spread</button>
          </div>
          <input className="tarot-q-input" placeholder="Dit spørgsmål (valgfrit)..."
            value={question} onChange={e => setQuestion(e.target.value)} />

          {loading && (
            <div className="tt-loading">
              <div className="tt-loading-ring" />
              <p>Shuffler kortene...</p>
            </div>
          )}

          {spread && (
            <div className="tarot-spread-grid">
              {spread.map((card, i) => (
                <div key={i} className="tarot-spread-item">
                  <div className={`tarot-card-flip ${flipped[i] ? 'flipped' : ''}`} onClick={() => flip(i)}>
                    <div className="tcf-front"><div className="tcf-back-face">🂠</div></div>
                    <div className="tcf-back">
                      <div className="tc-inner" style={{ borderColor: card.color + '60', background: card.color + '10' }}>
                        <div className="tc-num" style={{ color: card.color }}>{card.number}</div>
                        <div className="tc-icon" style={{ color: card.color }}>{card.icon}</div>
                        <div className="tc-name" style={{ color: card.color }}>{card.name}</div>
                        <div className="tc-sub">{card.keywords}</div>
                      </div>
                    </div>
                  </div>
                  {flipped[i] && (
                    <button className="tarot-interp-btn" onClick={() => interpret(card)} disabled={loading}>
                      Fortolk
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* All cards */}
      {tab === 'all' && (
        <div className="tarot-all-grid">
          {cards.map((card, i) => (
            <div key={i} className="tc-all-card"
              style={{ borderColor: card.color + '50', background: card.color + '08' }}
              onClick={() => { setTab('daily'); setDaily(card); setFlipped({ daily: true }) }}>
              <div className="tca-icon" style={{ color: card.color }}>{card.icon}</div>
              <div className="tca-name" style={{ color: card.color }}>{card.name}</div>
              <div className="tca-num">{card.number}</div>
              <div className="tca-kw">{card.keywords}</div>
            </div>
          ))}
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {result && (
        <div className="tarot-result card">
          <SpeechPlayer htmlText={formatResult(result)} />
          <div className="prose" dangerouslySetInnerHTML={{ __html: formatResult(result) }} />
          <button className="result-action-btn" style={{ marginTop: '1rem' }}
            onClick={() => { setResult(null); setQuestion('') }}>Ny fortolkning</button>
        </div>
      )}
    </div>
  )
}
