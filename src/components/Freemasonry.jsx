import React, { useState } from 'react'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import './Freemasonry.css'

const TOPICS = [
  'De 33 grader forklaret',
  'Symbolernes skjulte sprog',
  'Washington D.C. og frimurerisk geometri',
  'Tempelridderne og det tabte tempel',
  'GAOTU — Den store arkitekt',
  'Frimureri og Kabbalah',
  'Det åbne øje og pinealkirtlen',
  'Novus Ordo Seclorum — den nye verdensorden',
  'Berømte frimurerbrødre og deres agenda',
]

const DEGREES = [
  { n:1,  name:'Lærling',         secret:'Hemmelighed: selvet. At kende sig selv som råmateriale der skal poleres.' },
  { n:2,  name:'Håndværker',      secret:'Hemmelighed: balance. Vinkelmål (jord) møder passer (himmel).' },
  { n:3,  name:'Mester',          secret:'Hemmelighed: opstandelse. Hiram Abiffs mord og genopstandelse — den hermetiske kerne.' },
  { n:13, name:'Royal Arch',      secret:'Hemmelighed: det tabte Guds navn (YHWH / Jahbulon?).' },
  { n:18, name:'Rose Croix',      secret:'Hemmelighed: den guddommelige kærlighed. Rosenkreuzernes fusion med frimureri.' },
  { n:30, name:'Knight Kadosh',   secret:'Hemmelighed: hævnen for Hiram og Tempelridderne. Politisk dimension.' },
  { n:32, name:'Sublime Prince',  secret:'Hemmelighed: kosmisk orden. De 7 hermetiske principper internaliseret.' },
  { n:33, name:'Suveræn Greve',   secret:'Hemmelighed: ikke-viden. Den sande indviede ved at den største hemmelighed er kærlighed og enhed.' },
]

const SYMBOLS = [
  {
    sym: '👁️△',
    name: 'Det Altseende Øje',
    desc: 'Horus\' øje (Udjat) → Det tredje øje (pinealkirtel) → Guds altseende bevidsthed. På dollarsedlen: Annuit Coeptis = "Han har begunstiget vores foretagender". Ikke en sammensværgelse — en erklæring om guddommelig beskyttelse af projektet Amerika.',
  },
  {
    sym: '📐⚙',
    name: 'Passer og Vinkelmål',
    desc: 'Passer = cirkel = ånd = himmel. Vinkelmål = 90° = materie = jord. Tilsammen: "Som ovenover, så nedenunder." G\'et i midten = Geometry + God + Gnosis. Universets store arkitekt skabte via hellig geometri.',
  },
  {
    sym: '🏛️🏛️',
    name: 'Boaz og Jakin',
    desc: 'De to søjler i Salomons tempel. Boaz = "I ham er styrke." Jakin = "Han etablerer." Polaritetens princip — intet eksisterer uden sin modsætning. Søjlerne markerer grænsen mellem det profane og det hellige rum.',
  },
  {
    sym: '♟️',
    name: 'Tjekkerbræt',
    desc: 'Sort og hvidt = dualitet. Lys og mørke, godt og ondt, kendt og ukendt. Livet som skakbræt — initiaten lærer at navigere dualiteten med visdom fremfor at fanges i den.',
  },
  {
    sym: '🔺',
    name: 'Pyramiden',
    desc: '4 sider = de 4 elementer (jord, vand, luft, ild). Toppen = det 5. element: ånd/æter. Pyramiden som portal mellem det jordiske og det guddommelige. 33 sten i frimurerisk symbolik = 33 grader.',
  },
  {
    sym: '☀️',
    name: 'Solsymbolik',
    desc: 'GAOTU = solen som kosmisk princip. Frimureriske templer orienteres mod øst (solopgang). Hiram Abiff = solen der dør og genopstår. Parallelt til Osiris, Kristus, Mithras — alle solguddomme der dør og opstår.',
  },
]

export default function Freemasonry() {
  const [topic, setTopic]   = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState(null)

  async function run() {
    setLoading(true); setError(null); setResult(null)
    try {
      const res = await fetch('/api/freemasonry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic || null }),
      })
      const d = await res.json()
      setResult(d.result)
    } catch { setError('Kunne ikke forbinde.') }
    setLoading(false)
  }

  return (
    <div className="fm-page">

      <div className="fm-header">
        <div className="fm-eye">👁️</div>
        <h2 className="fm-title">Frimureri</h2>
        <p className="fm-sub">Den hemmelige orde — oldtidens visdom bevaret i symboler og ritualer</p>
      </div>

      {/* Degrees pyramid */}
      <div className="fm-pyramid-section">
        <h3 className="fm-section-title">🔺 De 33 Grader</h3>
        <p className="fm-section-sub">Hver grad åbner et nyt lag af den skjulte virkelighed</p>
        <div className="fm-degrees">
          {DEGREES.map(d => (
            <div key={d.n} className="fm-degree">
              <div className="fm-degree-n">{d.n}°</div>
              <div className="fm-degree-info">
                <div className="fm-degree-name">{d.name}</div>
                <div className="fm-degree-secret">{d.secret}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="fm-degree-note">
          Grens 4–12 og 14–17 og 19–29 og 31 er administrative/ceremonielle — de 8 viste er de symbolsk tunge.
          Den egentlige hemmelighed: der ER ingen ydre hemmelighed. Hemmeligheden er den indre transformation.
        </div>
      </div>

      {/* Symbols */}
      <div className="fm-symbols-section">
        <h3 className="fm-section-title">🔣 Symbolernes skjulte sprog</h3>
        <div className="fm-symbols-grid">
          {SYMBOLS.map(s => (
            <div key={s.name} className="fm-symbol-card">
              <div className="fm-sym-icon">{s.sym}</div>
              <div className="fm-sym-name">{s.name}</div>
              <div className="fm-sym-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Analysis */}
      <div className="fm-analysis-section">
        <h3 className="fm-section-title">🔮 Dyb AI-analyse</h3>
        <div className="fm-topics">
          {TOPICS.map(t => (
            <button key={t}
              className={`tt-pill ${topic === t ? 'active' : ''}`}
              onClick={() => setTopic(topic === t ? '' : t)}>
              {t}
            </button>
          ))}
        </div>
        <button className="tt-btn" style={{ marginTop: '0.8rem' }}
          onClick={run} disabled={loading}>
          {loading
            ? <><span className="spinner" /> Analyserer...</>
            : topic ? `Analysér: ${topic}` : 'Fuld frimurerisk analyse'}
        </button>
      </div>

      {loading && (
        <div className="tt-loading">
          <div className="tt-loading-ring" />
          <p>Træder ind i logebrødrenes hemmelige viden...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {result && (
        <div className="fm-result card">
          <SpeechPlayer htmlText={formatResult(result)} />
          <div className="prose" dangerouslySetInnerHTML={{ __html: formatResult(result) }} />
          <button className="result-action-btn" style={{ marginTop: '1rem' }}
            onClick={() => { setResult(null); setTopic('') }}>
            Ny analyse
          </button>
        </div>
      )}
    </div>
  )
}
