import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { formatResult } from '../utils'
import { useTradition } from '../TraditionContext'
import { MetatronCube } from './SacredGeometry'
import SpeechPlayer from './SpeechPlayer'
import ShareButton from './ShareButton'
import './Search.css'

const SUGGESTIONS = [
  'Hvad siger sufisme om Guds lys inden i mennesket?',
  'Er Kristus-bevidsthed det samme som Buddhanatur?',
  'Hvad skjuler Gilgamesh-eposet om udødelighed?',
  'Hvad er forbindelsen mellem Emerald Tablets og Kabbalah?',
  'Hvad siger Pyramid Texts om sjælens rejse?',
  'Er Odin og Thoth det samme arketypiske princip?',
  'Hvad er Wu Wei i Taoismen og Advaita i Hinduismen ens?',
  'Hvad fortæller Enuma Elish om bevidsthed?',
]

const HISTORY_KEY = 'stargate_history'

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]') }
  catch { return [] }
}

function addToHistory(q) {
  const h = getHistory().filter(x => x !== q).slice(0, 9)
  localStorage.setItem(HISTORY_KEY, JSON.stringify([q, ...h]))
}

export default function Search() {
  const [params] = useSearchParams()
  const { myTradition, ALL_TRADITIONS } = useTradition()

  const [query, setQuery] = useState(params.get('q') || '')
  const [filterTradition, setFilterTradition] = useState(null)
  const [compareMode, setCompareMode] = useState(false)
  const [compareTo, setCompareTo] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [history, setHistory] = useState(getHistory())
  const [showTradFilter, setShowTradFilter] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    if (params.get('q')) doSearch(params.get('q'))
  }, [])

  async function doSearch(q = query) {
    if (!q.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)
    addToHistory(q.trim())
    setHistory(getHistory())

    try {
      if (compareMode && compareTo) {
        // Sammenlign-mode: kald /compare
        const res = await fetch('/api/compare', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            concept: q,
            tradition_a: myTradition || 'Hermetisme',
            tradition_b: compareTo,
          })
        })
        const data = await res.json()
        setResult(data.result)
      } else {
        const res = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: q,
            tradition: filterTradition || null,
            my_tradition: myTradition || null,
          })
        })
        const data = await res.json()
        setResult(data.result)
      }
    } catch {
      setError('Kunne ikke forbinde til serveren.')
    }
    setLoading(false)
  }

  function onKey(e) { if (e.key === 'Enter') doSearch() }

  function clearAll() {
    setResult(null)
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div className="search-page">

      {/* Search box */}
      <div className="search-box">
        <div className="search-input-wrap">
          <span className="search-icon">⊕</span>
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder={compareMode
              ? `Sammenlign begreb mellem ${myTradition || '?'} og ${compareTo || '?'}...`
              : 'Vers, begreb eller spørgsmål...'}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={onKey}
            autoFocus
          />
          {query && <button className="clear-btn" onClick={clearAll}>×</button>}
        </div>

        {/* Mode toggle */}
        <div className="search-modes">
          <button
            className={`mode-btn ${!compareMode ? 'active' : ''}`}
            onClick={() => setCompareMode(false)}>
            ⊕ Søg
          </button>
          <button
            className={`mode-btn ${compareMode ? 'active' : ''}`}
            onClick={() => setCompareMode(true)}>
            ⇄ Sammenlign
          </button>
        </div>

        {/* Tradition context */}
        {!compareMode && (
          <div className="tradition-context">
            {myTradition && (
              <span className="my-trad-badge">
                ✦ {myTradition}
              </span>
            )}
            <button
              className={`filter-toggle ${showTradFilter ? 'active' : ''}`}
              onClick={() => setShowTradFilter(!showTradFilter)}>
              {filterTradition ? `Filter: ${filterTradition}` : '+ Filter tradition'}
            </button>
            {filterTradition && (
              <button className="clear-filter" onClick={() => setFilterTradition(null)}>×</button>
            )}
          </div>
        )}

        {/* Tradition filter grid */}
        {showTradFilter && !compareMode && (
          <div className="trad-filter-grid">
            {ALL_TRADITIONS.map(t => (
              <button key={t}
                className={`trad-chip ${filterTradition === t ? 'active' : ''}`}
                onClick={() => { setFilterTradition(filterTradition === t ? null : t); setShowTradFilter(false) }}>
                {t}
              </button>
            ))}
          </div>
        )}

        {/* Compare: vælg tradition at sammenligne med */}
        {compareMode && (
          <div className="compare-setup">
            <div className="compare-row">
              <span className="compare-label">Fra:</span>
              <span className="compare-trad my">{myTradition || 'Vælg din tradition på forsiden'}</span>
            </div>
            <div className="compare-row">
              <span className="compare-label">Til:</span>
              <div className="compare-picker">
                {ALL_TRADITIONS.filter(t => t !== myTradition).map(t => (
                  <button key={t}
                    className={`trad-chip ${compareTo === t ? 'active' : ''}`}
                    onClick={() => setCompareTo(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <button
          className={`search-btn ${loading ? 'loading' : ''}`}
          onClick={() => doSearch()}
          disabled={loading || !query.trim() || (compareMode && !compareTo)}>
          {loading ? <span className="spinner" /> : compareMode ? 'Sammenlign' : 'Åbn Stargate'}
        </button>
      </div>

      {/* Suggestions + history */}
      {!result && !loading && (
        <div className="suggestions">
          {history.length > 0 && (
            <>
              <p className="section-title">Seneste søgninger</p>
              {history.slice(0, 3).map(h => (
                <button key={h} className="suggestion-item history"
                  onClick={() => { setQuery(h); doSearch(h) }}>
                  <span className="sug-icon">↺</span> {h}
                </button>
              ))}
            </>
          )}
          <p className="section-title">Forslag</p>
          {SUGGESTIONS.map(s => (
            <button key={s} className="suggestion-item"
              onClick={() => { setQuery(s); doSearch(s) }}>
              <span className="sug-icon">→</span> {s}
            </button>
          ))}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="result-loading">
          <div className="loading-geo">
            <MetatronCube size={120} color="#d4a843" opacity={0.7} />
          </div>
          <p className="loading-text">Åbner porten...</p>
          {myTradition && (
            <p className="loading-sub">søger fra {myTradition} perspektiv</p>
          )}
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {/* Result */}
      {result && (
        <div className="result-card card">
          <div className="result-meta">
            <span className="result-query">"{query}"</span>
            <div className="result-tags">
              {myTradition && <span className="result-tag my">✦ {myTradition}</span>}
              {filterTradition && <span className="result-tag filter">{filterTradition}</span>}
              {compareMode && compareTo && <span className="result-tag compare">⇄ {compareTo}</span>}
            </div>
          </div>
          <div style={{ display:'flex', gap:'0.6rem', flexWrap:'wrap', alignItems:'center' }}>
            <SpeechPlayer htmlText={formatResult(result)} />
            <ShareButton htmlText={formatResult(result)} label={query} />
          </div>
          <div className="result-body prose"
            dangerouslySetInnerHTML={{ __html: formatResult(result) }} />
          <div className="result-actions">
            <button className="result-action-btn" onClick={clearAll}>Ny søgning</button>
            <button className="result-action-btn secondary"
              onClick={() => { setCompareMode(true); setResult(null) }}>
              Sammenlign traditioner
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
