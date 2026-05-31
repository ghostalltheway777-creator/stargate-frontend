import React, { useState, useEffect } from 'react'
import { FlowerOfLife } from './SacredGeometry'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import './Books.css'

const TRADITION_COLORS = {
  Kristendom: '#ff9944', Islam: '#55aaff', Jødedom: '#d4a843',
  Hinduisme: '#ff6688', Buddhisme: '#44ddbb', Taoisme: '#88ffdd',
  Sikhisme: '#ffaa33', Hermetisme: '#aa77ff', Kabbalah: '#d4a843',
  Gnostisk: '#cc77ff', Egyptisk: '#ffcc44', Sumerisk: '#ffe066',
  Nordisk: '#aaddff', Maya: '#ff8833', Zoroastrisk: '#ffaa55',
  Interdimensionel: '#dd99ff',
}

export default function Books() {
  const [books, setBooks] = useState([])
  const [selected, setSelected] = useState(null)       // valgt bog
  const [sections, setSections] = useState([])
  const [sectionIdx, setSectionIdx] = useState(null)   // valgt sektion
  const [reading, setReading] = useState(null)         // AI analyse
  const [loadingBooks, setLoadingBooks] = useState(true)
  const [loadingSections, setLoadingSections] = useState(false)
  const [loadingRead, setLoadingRead] = useState(false)
  const [error, setError] = useState(null)
  const [filterTrad, setFilterTrad] = useState(null)
  const [showOrig, setShowOrig] = useState(false)

  useEffect(() => {
    fetch('/api/books')
      .then(r => r.json())
      .then(d => { setBooks(d.books); setLoadingBooks(false) })
      .catch(() => { setError('Kunne ikke hente bøger'); setLoadingBooks(false) })
  }, [])

  async function openBook(book) {
    setSelected(book)
    setSections([])
    setSectionIdx(null)
    setReading(null)
    setLoadingSections(true)
    const id = book.filename.replace('.txt', '').replace(/ /g, '_')
    try {
      const r = await fetch(`/api/books/${encodeURIComponent(id)}/sections`)
      const d = await r.json()
      setSections(d.sections || [])
    } catch { setError('Kunne ikke hente sektioner') }
    setLoadingSections(false)
  }

  async function readSection(idx) {
    setSectionIdx(idx)
    setReading(null)
    setLoadingRead(true)
    setShowOrig(false)
    try {
      const r = await fetch('/api/books/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: selected.filename, section_index: idx }),
      })
      const d = await r.json()
      setReading(d)
    } catch { setError('Kunne ikke hente fortolkning') }
    setLoadingRead(false)
  }

  function prev() { if (sectionIdx > 0) readSection(sectionIdx - 1) }
  function next() { if (sectionIdx < sections.length - 1) readSection(sectionIdx + 1) }

  const traditions = [...new Set(books.map(b => b.tradition))].sort()
  const filtered = filterTrad ? books.filter(b => b.tradition === filterTrad) : books

  // READING VIEW
  if (reading) {
    return (
      <div className="books-page">
        <div className="reading-header">
          <button className="back-small" onClick={() => setReading(null)}>← Sektioner</button>
          <div className="reading-meta">
            <span className="reading-book">{reading.book}</span>
            <span className="reading-section">{reading.title}</span>
          </div>
          <span className="reading-progress">{sectionIdx + 1}/{sections.length}</span>
        </div>

        {/* 3D/5D split */}
        <div className="reading-body">
          <SpeechPlayer htmlText={reading.analysis} />
          <div className="reading-analysis prose"
            dangerouslySetInnerHTML={{ __html: formatResult(reading.analysis) }} />

          <button className="orig-toggle" onClick={() => setShowOrig(!showOrig)}>
            {showOrig ? '▲ Skjul originaltekst' : '▼ Vis originaltekst'}
          </button>

          {showOrig && (
            <div className="original-text">
              <p className="orig-label">Originaltekst</p>
              <pre className="orig-content">{reading.original}</pre>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="reading-nav">
          <button className="nav-arrow" onClick={prev} disabled={sectionIdx === 0}>
            ← Forrige
          </button>
          <button className="nav-arrow" onClick={next} disabled={sectionIdx >= sections.length - 1}>
            Næste →
          </button>
        </div>
      </div>
    )
  }

  // SECTIONS VIEW
  if (selected && sections.length > 0) {
    return (
      <div className="books-page">
        <div className="sections-header">
          <button className="back-small" onClick={() => { setSelected(null); setSections([]) }}>← Bøger</button>
          <div className="section-book-info">
            <span className="sb-icon" style={{ color: selected.color }}>{selected.icon}</span>
            <span className="sb-title">{selected.short}</span>
          </div>
        </div>

        {loadingSections && (
          <div className="center-loading">
            <div className="mini-spin">
              <FlowerOfLife size={80} color="#d4a843" opacity={0.7} />
            </div>
            <p>Indlæser sektioner...</p>
          </div>
        )}

        <div className="sections-list">
          {sections.map(s => (
            <button key={s.index} className="section-item"
              onClick={() => readSection(s.index)}>
              <span className="sec-num">{s.index + 1}</span>
              <span className="sec-title">{s.title}</span>
              <span className="sec-arrow">›</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // LOADING READ
  if (loadingRead) {
    return (
      <div className="books-page">
        <div className="center-loading big">
          <div className="spin-geo">
            <FlowerOfLife size={130} color="#d4a843" opacity={0.75} />
          </div>
          <p className="loading-title">Åbner porten...</p>
          <p className="loading-sub">Fortolker {selected?.short} — {sections[sectionIdx]?.title}</p>
        </div>
      </div>
    )
  }

  // BOOK LIST
  return (
    <div className="books-page">
      <div className="books-header">
        <h2 className="books-title">Hellige Bøger</h2>
        <p className="books-sub">34 tekster — læs med 3D + 5D fortolkning</p>
      </div>

      {/* Tradition filter */}
      <div className="trad-filter">
        <button className={`trad-pill ${!filterTrad ? 'active' : ''}`}
          onClick={() => setFilterTrad(null)}>Alle</button>
        {traditions.map(t => (
          <button key={t}
            className={`trad-pill ${filterTrad === t ? 'active' : ''}`}
            style={filterTrad === t ? { borderColor: TRADITION_COLORS[t], color: TRADITION_COLORS[t] } : {}}
            onClick={() => setFilterTrad(filterTrad === t ? null : t)}>
            {t}
          </button>
        ))}
      </div>

      {loadingBooks && (
        <div className="center-loading">
          <div className="mini-spin">
            <FlowerOfLife size={80} color="#8855ff" opacity={0.7} />
          </div>
          <p>Indlæser bibliotek...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      <div className="books-grid">
        {filtered.map(book => (
          <button key={book.filename} className="book-card"
            style={{ '--bc': book.color || '#8855ff' }}
            onClick={() => openBook(book)}>
            <div className="book-icon" style={{ color: book.color }}>{book.icon}</div>
            <div className="book-info">
              <div className="book-title">{book.short}</div>
              <div className="book-trad" style={{ color: book.color }}>{book.tradition}</div>
            </div>
            <div className="book-arrow">›</div>
          </button>
        ))}
      </div>
    </div>
  )
}
