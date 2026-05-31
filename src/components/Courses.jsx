import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Courses.css'

const CHAPTERS = [
  { n: 1,  title: 'Hvad er 3D vs 5D religion?',                    free: true,  icon: '◎', cat: 'Grundlæggende' },
  { n: 2,  title: 'Islam — fra Sharia til Sufisme',                 free: true,  icon: '☽', cat: 'Grundlæggende' },
  { n: 3,  title: 'Kristendom — fra Kirke til Gnosis',              free: false, icon: '✝', cat: 'Grundlæggende' },
  { n: 4,  title: 'Jødedom — fra Torah til Kabbalah',               free: false, icon: '✡', cat: 'Grundlæggende' },
  { n: 5,  title: 'Hinduisme — fra Ritual til Advaita',             free: false, icon: '☸', cat: 'Grundlæggende' },
  { n: 6,  title: 'Buddhisme — fra Regler til Zen',                 free: false, icon: '☯', cat: 'Grundlæggende' },
  { n: 7,  title: 'Ancient — sten-tavler og primal visdom',         free: false, icon: '☥', cat: 'Grundlæggende' },
  { n: 8,  title: 'Den universelle sandhed',                        free: false, icon: '✦', cat: 'Grundlæggende' },
  { n: 9,  title: 'Numerologi — Tal som bevidsthedens frekvens',    free: false, icon: '∞', cat: 'Udvidet' },
  { n: 10, title: 'Astrologi — Planeterne som bevidsthedskort',     free: false, icon: '★', cat: 'Udvidet' },
  { n: 11, title: 'Talmudisme vs Jødedom — Den kritiske forskel',   free: false, icon: '⚖', cat: 'Kritisk analyse' },
  { n: 12, title: 'Menneskelig manipulation i religion',             free: false, icon: '⊘', cat: 'Kritisk analyse' },
  { n: 13, title: 'Quantum fysik forklarer religion',               free: false, icon: '⚛', cat: 'Videnskab & Mystik' },
  { n: 14, title: "Vi er alle én — Perennial filosofi",             free: false, icon: '◈', cat: 'Videnskab & Mystik' },
  { n: 15, title: "Interdimensionelle væsner — hvad 'engle' er",    free: false, icon: '⬡', cat: 'Dybde' },
  { n: 16, title: 'Bevidsthedsstadier — rejsen fra 1D til 9D',      free: false, icon: '▲', cat: 'Dybde' },
]

const CATS = ['Grundlæggende', 'Udvidet', 'Kritisk analyse', 'Videnskab & Mystik', 'Dybde']

const SESSION_KEY = 'sg_session'

function getSession() {
  let s = localStorage.getItem(SESSION_KEY)
  if (!s) {
    s = 'user_' + Math.random().toString(36).slice(2)
    localStorage.setItem(SESSION_KEY, s)
  }
  return s
}

export default function Courses() {
  const navigate = useNavigate()
  const [completed, setCompleted] = useState([])
  const [openCat, setOpenCat] = useState('Grundlæggende')

  useEffect(() => {
    const session = getSession()
    fetch(`/api/progress/${session}`)
      .then(r => r.json())
      .then(d => setCompleted(d.completed || []))
      .catch(() => {})
  }, [])

  const pct = Math.round(completed.length / 16 * 100)

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h2 className="courses-title">Stargate Kursus</h2>
        <p className="courses-sub">16 kapitler fra dogme til universel sandhed</p>
        <div className="progress-bar-wrap">
          <div className="progress-bar" style={{ width: `${pct}%` }} />
        </div>
        <p className="progress-text">{completed.length}/16 kapitler gennemført</p>
      </div>

      {CATS.map(cat => {
        const items = CHAPTERS.filter(ch => ch.cat === cat)
        const isOpen = openCat === cat
        const catDone = items.filter(ch => completed.includes(ch.n)).length
        return (
          <div key={cat} className="course-cat">
            <button className={`course-cat-header ${isOpen ? 'open' : ''}`}
              onClick={() => setOpenCat(isOpen ? null : cat)}>
              <span className="ccat-name">{cat}</span>
              <span className="ccat-progress">{catDone}/{items.length}</span>
              <span className="ccat-chevron">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className="chapter-list">
                {items.map(ch => {
                  const done = completed.includes(ch.n)
                  return (
                    <button
                      key={ch.n}
                      className={`chapter-item ${done ? 'done' : ''}`}
                      onClick={() => navigate(`/courses/${ch.n}`)}
                    >
                      <div className="ch-icon">{done ? '✓' : ch.icon}</div>
                      <div className="ch-body">
                        <div className="ch-num">Kapitel {ch.n}</div>
                        <div className="ch-title">{ch.title}</div>
                      </div>
                      <div className="ch-right">
                        {ch.free
                          ? <span className="badge free">Gratis</span>
                          : <span className="badge premium">Premium</span>
                        }
                        <span className="ch-arrow">›</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}

      <div className="card" style={{ margin: '1rem' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--gold)' }}>Stargate Premium</strong> — Adgang til alle 16 kapitler.<br />
          49 kr/måned · 399 kr/år · 7 dage gratis
        </p>
        <button className="upgrade-btn" onClick={() => window.location.href = '/premium'}>
          Start 7 dages gratis prøve →
        </button>
      </div>
    </div>
  )
}
