import React, { useState, useEffect } from 'react'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import './Origins.css'

const FLOW = [
  { label: 'Sumerisk',   year: '3500 f.Kr.', color: '#c8a020', icon: '☥' },
  { label: 'Babylonsk',  year: '2000 f.Kr.', color: '#b07830', icon: '🏛' },
  { label: 'Egyptisk',   year: '3000 f.Kr.', color: '#d4943a', icon: '⊙' },
  { label: 'Vedisk',     year: '1500 f.Kr.', color: '#9060c0', icon: '🕉' },
  { label: 'Jødedom',    year: '600 f.Kr.',  color: '#3060a0', icon: '✡' },
  { label: 'Kristendom', year: '0-100 e.Kr.', color: '#507030', icon: '✝' },
  { label: 'Islam',      year: '600 e.Kr.',  color: '#305090', icon: '☽' },
]

export default function Origins() {
  const [concepts, setConcepts] = useState([])
  const [selected, setSelected] = useState(null)
  const [custom, setCustom] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/origins/concepts')
      .then(r => r.json())
      .then(d => setConcepts(d.concepts))
      .catch(() => {})
  }, [])

  async function search(concept) {
    if (!concept?.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch('/api/origins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ concept }),
      })
      const d = await res.json()
      setResult(d.result)
    } catch {
      setError('Kunne ikke forbinde til serveren.')
    }
    setLoading(false)
  }

  function run() {
    const q = selected || custom.trim()
    if (q) search(q)
  }

  return (
    <div className="origins-page">

      <div className="origins-header">
        <div className="origins-symbols">
          <span>☥</span><span>⊙</span><span>✡</span><span>✝</span><span>☽</span>
        </div>
        <h2 className="origins-title">Oldtidens Rødder</h2>
        <p className="origins-sub">Hvor stammer alle religioners kernefortællinger fra?</p>
      </div>

      {/* Abrahamic Succession */}
      <div className="abr-section">
        <p className="abr-label">✡ ✝ ☽ — Én fælles stamtavle, tre åbenbaringer</p>
        <div className="abr-chain">

          <div className="abr-faith torah-faith">
            <div className="abr-icon">✡</div>
            <div className="abr-name">TORAH</div>
            <div className="abr-year">~1300 f.Kr.</div>
            <div className="abr-desc">Åbenbaret til Moses på Sinai. De 5 Mosebøger. Guds pagt med det jødiske folk.</div>
            <div className="abr-figures">Adam · Noah · Abraham · Isak · Jakob · Moses</div>
          </div>

          <div className="abr-arrow-block">
            <div className="abr-arrow">↓</div>
            <div className="abr-inherit">Bibelen bekræfter Torah som "Det Gamle Testamente" — Jesus siger: "Jeg er ikke kommet for at afskaffe loven, men for at opfylde den" (Matt 5:17)</div>
          </div>

          <div className="abr-faith bible-faith">
            <div className="abr-icon">✝</div>
            <div className="abr-name">BIBELEN</div>
            <div className="abr-year">~0–100 e.Kr.</div>
            <div className="abr-desc">Ny pagt gennem Jesus (Isa). Torah + evangelierne. Frelse og kærlighed som centrum.</div>
            <div className="abr-figures">Abraham · Moses · David · Johannes Døber · Jesus/Isa</div>
          </div>

          <div className="abr-arrow-block">
            <div className="abr-arrow">↓</div>
            <div className="abr-inherit">Koranen bekræfter Torah og Bibelen som ægte åbenbaringer — men siger de er delvist forvanskede. Muhammad er "profeternes segl" (Khatam an-Nabiyyin)</div>
          </div>

          <div className="abr-faith quran-faith">
            <div className="abr-icon">☽</div>
            <div className="abr-name">KORANEN</div>
            <div className="abr-year">~610–632 e.Kr.</div>
            <div className="abr-desc">Åbenbaret til Muhammad. Bekræfter alle tidligere profeter. Islam = fuldendelse af åbenbaringen.</div>
            <div className="abr-figures">Adam · Ibrahim/Abraham · Musa/Moses · Isa/Jesus · Muhammad</div>
          </div>

        </div>

        <div className="abr-shared">
          <span className="abr-shared-label">Fælles figurer i alle tre:</span>
          <div className="abr-shared-pills">
            {['Adam & Eva', 'Noah/Nuh', 'Abraham/Ibrahim', 'Ishmael/Ismail', 'Isak', 'Jakob/Yaqub', 'Josef/Yusuf', 'Moses/Musa', 'David/Dawud', 'Salomon/Sulayman', 'Jesus/Isa'].map(f => (
              <span key={f} className="abr-shared-pill">{f}</span>
            ))}
          </div>
        </div>

        <div className="abr-note">
          Alle tre religioner deler Abraham som forfader — deraf "abrahamitiske religioner". De er ikke konkurrenter, men efterfølgere i én åbenbaringsstrøm. Uenigheder handler om <em>hvem der er den endelige profet</em> — ikke om Guds eksistens eller de tidlige profeters rolle.
        </div>
      </div>

      {/* Timeline flow */}
      <div className="origins-flow">
        {FLOW.map((f, i) => (
          <React.Fragment key={f.label}>
            <div className="flow-node" style={{ borderColor: f.color }}>
              <span className="flow-icon">{f.icon}</span>
              <span className="flow-label">{f.label}</span>
              <span className="flow-year">{f.year}</span>
            </div>
            {i < FLOW.length - 1 && <div className="flow-arrow">→</div>}
          </React.Fragment>
        ))}
      </div>
      <p className="flow-caption">Følg et begreb fra dens ældste kilde til moderne religioner</p>

      {/* Anunnaki featured card */}
      <div
        className={`anunnaki-featured ${selected === 'Anunnaki' ? 'active' : ''}`}
        onClick={() => { setSelected(selected === 'Anunnaki' ? null : 'Anunnaki'); setResult(null) }}>
        <div className="af-glow" />
        <div className="af-top">
          <span className="af-icon">👽</span>
          <div>
            <div className="af-title">ANUNNAKI</div>
            <div className="af-sub">An-unna-ki · "Dem af himlen til Jord" · Sumerisk panteon</div>
          </div>
        </div>
        <blockquote className="af-quote">
          "Lad os skabe Lulu — mennesket — i vores billede, så de kan bære vores arbejde."<br />
          <span className="af-source">— Atrahasis-eposet, ~1700 f.Kr.</span>
        </blockquote>
        <div className="af-deities">
          {[
            {n:'Anu',r:'Himmelkong'},
            {n:'Enlil',r:'Hersker'},
            {n:'Enki',r:'Visdom/DNA'},
            {n:'Inanna',r:'Kærlighed'},
            {n:'Ninhursag',r:'Moder'},
            {n:'Utu',r:'Sol/Ret'},
          ].map(d => (
            <div key={d.n} className="af-deity">
              <span className="af-dname">{d.n}</span>
              <span className="af-drole">{d.r}</span>
            </div>
          ))}
        </div>
        <div className="af-note">Elohim (flertal) · Nephilim · Faldne engle · Jinns · Deva/Asura — alle spejlinger af samme ur-fortælling</div>
        <div className="af-cta">Tryk for fuld analyse →</div>
      </div>

      {/* Emerald Tablets featured card */}
      <div
        className={`emerald-featured ${selected === 'Smaragdtavlerne' ? 'active' : ''}`}
        onClick={() => { setSelected(selected === 'Smaragdtavlerne' ? null : 'Smaragdtavlerne'); setResult(null) }}>
        <div className="ef-glow" />
        <div className="ef-top">
          <span className="ef-icon">💎</span>
          <div>
            <div className="ef-title">Smaragdtavlerne</div>
            <div className="ef-sub">Hermes Trismegistus · Thoth · Tabula Smaragdina</div>
          </div>
        </div>
        <blockquote className="ef-quote">
          "Som ovenover, så nedenunder — som nedenunder, så ovenover.<br />
          Som indeni, så udenfor — for at fuldende miraklet af det Ene."
        </blockquote>
        <div className="ef-tags">
          {['Hermetisme','Kabbalah','Frimureri','Alkymi','Islam','Kristendom','Hinduisme'].map(t => (
            <span key={t} className="ef-tag">{t}</span>
          ))}
        </div>
        <div className="ef-cta">Tryk for at spore visdommen gennem alle religioner →</div>
      </div>

      {/* Concept grid */}
      <div className="origins-grid">
        {concepts.filter(c => !c.featured).map(c => (
          <button
            key={c.name}
            className={`origins-card ${selected === c.name ? 'active' : ''}`}
            onClick={() => { setSelected(selected === c.name ? null : c.name); setResult(null) }}>
            <span className="oc-icon">{c.icon}</span>
            <span className="oc-name">{c.name}</span>
            <span className="oc-desc">{c.desc}</span>
          </button>
        ))}
      </div>

      {/* Moderne Fortolkere */}
      <div className="interpreters-section">
        <p className="interpreters-label">👁 Moderne fortolkere af oldtidens viden</p>
        <div className="interpreters-grid">
          {[
            { name: 'Billy Carson', brand: '4biddenknowledge', icon: '👁️', color: '#d4a843',
              focus: 'Anunnaki · DNA som antenne · Smaragdtavlerne · Holografisk bevidsthed',
              query: 'Billy Carson 4biddenknowledge Anunnaki DNA antenne holografisk bevidsthed Smaragdtavlerne' },
            { name: 'Graham Hancock', brand: 'Fingerprints of the Gods', icon: '🗿', color: '#60a080',
              focus: 'Fortabte civilisationer · Antarktis · Bevidsthed og DMT',
              query: 'Graham Hancock fortabte civilisationer oldtid søjler Göbekli Tepe bevidsthed' },
            { name: 'Zecharia Sitchin', brand: 'Earth Chronicles', icon: '📖', color: '#8060c0',
              focus: 'Anunnaki og 12. planet · Nibiru · Sumerisk astronomi',
              query: 'Zecharia Sitchin Anunnaki 12 planet Nibiru sumerisk astronomi guder' },
            { name: 'Manly P. Hall', brand: 'Secret Teachings', icon: '🔺', color: '#c05050',
              focus: 'Frimureri · Rosenkreuzere · Hermetisme · Mysterieskolerne',
              query: 'Manly Hall Secret Teachings frimureri hermetisme mysterieskoler oldtidens visdom' },
          ].map(p => (
            <button key={p.name} className="interp-card"
              style={{ borderColor: p.color + '40' }}
              onClick={() => { setSelected(p.query); setCustom(''); setResult(null); search(p.query) }}>
              <span className="interp-icon" style={{ filter: `drop-shadow(0 0 8px ${p.color}80)` }}>{p.icon}</span>
              <div className="interp-name" style={{ color: p.color }}>{p.name}</div>
              <div className="interp-brand">{p.brand}</div>
              <div className="interp-focus">{p.focus}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom input */}
      <div className="origins-custom">
        <div className="decode-input-wrap">
          <span className="decode-icon">☥</span>
          <input
            className="decode-input"
            type="text"
            placeholder="Eller skriv dit eget begreb, person eller symbol..."
            value={custom}
            onChange={e => { setCustom(e.target.value); setSelected(null) }}
            onKeyDown={e => e.key === 'Enter' && run()}
          />
          {custom && <button className="clear-btn" onClick={() => setCustom('')}>×</button>}
        </div>
      </div>

      <button
        className={`tt-btn ${loading ? 'loading' : ''}`}
        onClick={run}
        disabled={loading || (!selected && !custom.trim())}>
        {loading
          ? <><span className="spinner" /> Sporer gennem historien...</>
          : selected || custom.trim()
            ? `Spor: ${selected || custom}`
            : 'Vælg et begreb'}
      </button>

      {loading && (
        <div className="tt-loading">
          <div className="tt-loading-ring" />
          <p>Rejser 5000 år tilbage i historien...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {result && (
        <div className="origins-result card">
          <div className="origins-result-header">
            <span className="origins-result-icon">☥</span>
            <span className="origins-result-title">{selected || custom}</span>
            <span className="origins-result-sub">— fra sten-tavle til bibel</span>
          </div>
          <SpeechPlayer htmlText={formatResult(result)} />
          <div className="origins-result-body prose"
            dangerouslySetInnerHTML={{ __html: formatResult(result) }} />
          <button className="result-action-btn" style={{ marginTop: '1rem' }}
            onClick={() => { setResult(null); setSelected(null); setCustom('') }}>
            Spor nyt begreb
          </button>
        </div>
      )}
    </div>
  )
}
