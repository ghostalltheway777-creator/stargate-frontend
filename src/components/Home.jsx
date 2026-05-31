import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FlowerOfLife, MetatronCube } from './SacredGeometry'
import { useTradition } from '../TraditionContext'
import { useUser } from '../UserContext'
import MoonWidget from './MoonWidget'
import SectionDivider from './SectionDivider'
import './Home.css'

const QUOTE = '"Sandheden er én — de vise kalder den ved mange navne."'
const QUOTE_SRC = '— Rigveda 1.164.46'

const EXAMPLES = [
  'Hvad siger sufisme om Guds lys?',
  'Er Kristus-bevidsthed det samme som Buddhanatur?',
  'Hvad skjuler Gilgamesh-eposet om udødelighed?',
  'Hvad er forbindelsen mellem Kabbalah og kvantemekanik?',
]

const DAY_COLORS = { 1:'#e05050',2:'#5080d0',3:'#d4a843',4:'#60a060',5:'#c070c0',6:'#e08030',7:'#9060c0',8:'#d4a843',9:'#5090c0',11:'#f0d070',22:'#f0d070',33:'#f0d070' }

export default function Home() {
  const navigate = useNavigate()
  const { myTradition, choose, ALL_TRADITIONS } = useTradition()
  const { profile, personalDay, isPremium } = useUser()
  const [showPicker, setShowPicker] = useState(false)

  return (
    <div className="home">

      {/* Personlig velkomst */}
      {profile.displayName && (
        <div className="home-welcome">
          <div className="home-welcome-left">
            <p className="home-welcome-hi">Hej {profile.displayName} ✦</p>
            {myTradition && <p className="home-welcome-trad">{myTradition}</p>}
          </div>
          {personalDay && (
            <div className="home-day-badge" style={{borderColor: (DAY_COLORS[personalDay.number] || '#d4a843') + '60', background: (DAY_COLORS[personalDay.number] || '#d4a843') + '12'}}>
              <div className="home-day-num" style={{color: DAY_COLORS[personalDay.number] || '#d4a843'}}>{personalDay.number}{personalDay.is_master ? '⚡' : ''}</div>
              <div className="home-day-name" style={{color: DAY_COLORS[personalDay.number] || '#d4a843'}}>{personalDay.name}</div>
            </div>
          )}
        </div>
      )}

      {/* Hero */}
      <div className="home-hero">
        <div className="hero-geo hero-geo--flower">
          <FlowerOfLife size={360} color="#8855ff" opacity={0.28} />
        </div>
        <div className="hero-geo hero-geo--metatron">
          <MetatronCube size={400} color="#d4a843" opacity={0.22} />
        </div>

        <div className="hero-rings">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
        </div>

        <div className="hero-center">
          <div className="hero-glyph">✦</div>
          <h1 className="hero-title">Stargate</h1>
          <p className="hero-subtitle">Porten fra 3D til 5D bevidsthed</p>
          <p className="hero-desc">
            Alle store traditioner gemmer den samme sandhed —<br />
            bag reglerne, bag ritualerne, bag ordene.
          </p>
        </div>
      </div>

      {/* Måne widget */}
      <MoonWidget />

      {/* Quick links til nye features */}
      <div className="home-quick-new">
        <button className="quick-new-btn" onClick={() => navigate('/ritual')}>🔥 Ritual</button>
        <button className="quick-new-btn" onClick={() => navigate('/dreams')}>☽ Drøm</button>
        <button className="quick-new-btn" onClick={() => navigate('/maya')}>🌎 Maya</button>
        <button className="quick-new-btn" onClick={() => navigate('/higherself')}>⊙ Højere Selv</button>
        <button className="quick-new-btn" onClick={() => navigate('/intentions')}>⬡ Intentioner</button>
      </div>

      <SectionDivider variant="rune" />

      {/* Quote */}
      <blockquote className="home-quote">
        <div className="quote-line" />
        <p>{QUOTE}</p>
        <cite>{QUOTE_SRC}</cite>
        <div className="quote-line" />
      </blockquote>

      <SectionDivider label="Udforsk" />

      {/* Actions */}
      <div className="home-actions">
        <button className="action-card primary" onClick={() => navigate('/search')}>
          <div className="action-symbol">⊕</div>
          <div className="action-body">
            <div className="action-title">Stargate Søg</div>
            <div className="action-sub">Søg frit — få 3D + 5D fortolkning</div>
          </div>
          <div className="action-arrow">›</div>
        </button>

        <button className="action-card gold" onClick={() => navigate('/books')}>
          <div className="action-symbol">📖</div>
          <div className="action-body">
            <div className="action-title">Hellige Bøger</div>
            <div className="action-sub">34 tekster — bladre med 3D + 5D fortolkning</div>
          </div>
          <div className="action-arrow">›</div>
        </button>

        <button className="action-card gold" onClick={() => navigate('/decode')}>
          <div className="action-symbol">⊗</div>
          <div className="action-body">
            <div className="action-title">Sand Fortolkning</div>
            <div className="action-sub">Afkod symboler · Guddommelig vs menneskelig</div>
          </div>
          <div className="action-arrow">›</div>
        </button>

        <button className="action-card" onClick={() => navigate('/quantum')}>
          <div className="action-symbol">⚛</div>
          <div className="action-body">
            <div className="action-title">Quantum & Tesla</div>
            <div className="action-sub">Videnskaben der bekræfter hvad mystikerne vidste</div>
          </div>
          <div className="action-arrow">›</div>
        </button>

        <button className="action-card" onClick={() => navigate('/torah')}>
          <div className="action-symbol">✡</div>
          <div className="action-body">
            <div className="action-title">Torah vs Talmud</div>
            <div className="action-sub">Guddommelig åbenbaring vs babylonsk korrumpering</div>
          </div>
          <div className="action-arrow">›</div>
        </button>

        <button className="action-card" onClick={() => navigate('/origins')}>
          <div className="action-symbol">☥</div>
          <div className="action-body">
            <div className="action-title">Oldtidens Rødder</div>
            <div className="action-sub">Adam, Syndfloden, Engle — fra sten-tavle til bibel</div>
          </div>
          <div className="action-arrow">›</div>
        </button>

        <button className="action-card" onClick={() => navigate('/courses')}>
          <div className="action-symbol">◎</div>
          <div className="action-body">
            <div className="action-title">Stargate Kursus</div>
            <div className="action-sub">16 kapitler — fra dogme til universel sandhed</div>
          </div>
          <div className="action-arrow">›</div>
        </button>

        <button className="action-card" onClick={() => navigate('/traditions')}>
          <div className="action-symbol">⬡</div>
          <div className="action-body">
            <div className="action-title">Den fælles tråd</div>
            <div className="action-sub">21 traditioner — ancient til quantum</div>
          </div>
          <div className="action-arrow">›</div>
        </button>
      </div>

      <SectionDivider variant="rune" label="Eksempler" />
      <p className="section-label">Eksempler</p>
      <div className="examples">
        {EXAMPLES.map(ex => (
          <button key={ex} className="example-pill"
            onClick={() => navigate(`/search?q=${encodeURIComponent(ex)}`)}>
            {ex}
          </button>
        ))}
      </div>

      {/* Din tradition */}
      <div className="my-tradition-block">
        <p className="section-label">Din tradition</p>
        <button className="tradition-btn" onClick={() => setShowPicker(!showPicker)}>
          <span className="tradition-btn-label">
            {myTradition ? `✦ ${myTradition}` : '⊕ Vælg din tradition'}
          </span>
          <span className="tradition-btn-sub">
            {myTradition
              ? 'Søgninger sammenlignes med din tradition'
              : 'Så sammenlignes alt fra dit perspektiv'}
          </span>
          <span className="tradition-btn-arrow">{showPicker ? '▲' : '▼'}</span>
        </button>

        {showPicker && (
          <div className="tradition-picker">
            {myTradition && (
              <button className="tpick-item tpick-clear"
                onClick={() => { choose(null); setShowPicker(false) }}>
                ✕ Ingen (neutral)
              </button>
            )}
            {ALL_TRADITIONS.map(t => (
              <button key={t}
                className={`tpick-item ${myTradition === t ? 'active' : ''}`}
                onClick={() => { choose(t); setShowPicker(false) }}>
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Insight */}
      <div className="home-insight">
        <div className="insight-glyph">☽</div>
        <div className="insight-body">
          <p className="insight-label">Kerneindsigt</p>
          <p className="insight-text">
            Quran 5:48 — <em>"Hvis Gud havde villet, ville Han have gjort jer til ét folk —
            men Han ville prøve jer i hvad Han har givet jer."</em>
          </p>
          <p className="insight-note">
            Gud siger direkte: Jeg lavede flere religioner med vilje. Lær af hinanden.
          </p>
        </div>
      </div>

    </div>
  )
}
