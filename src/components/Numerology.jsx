import React, { useState } from 'react'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import './Numerology.css'

const SACRED_NUMBERS = [
  {
    n: '3', color: '#d4a843',
    title: 'Treenighed',
    examples: [
      'Fader, Søn, Helligånd — kristendom',
      'Brahma, Vishnu, Shiva — hinduisme',
      'Krop, Sind, Sjæl — hermetisme',
      'Past, Present, Future — tid',
      '3. grad: Master Mason — frimureri',
    ],
  },
  {
    n: '7', color: '#9060c0',
    title: 'Guddommelig fuldkommenhed',
    examples: [
      '7 dages skabelse — Torah/Bibel',
      '7 himle — Islam (Quran)',
      '7 chakraer — vedisk tradition',
      '7 planeter i oldtidens astronomi',
      '7 søjler i Salomons tempel',
      'Menorah har 7 arme',
    ],
  },
  {
    n: '12', color: '#5090d0',
    title: 'Kosmisk orden',
    examples: [
      '12 apostle — kristendom',
      '12 Israelsstammer — jødedom',
      '12 imamer — shia-islam',
      '12 zodiak-tegn — astrologi',
      '12 måneder i året',
      '12 Olympiske guder — græsk',
    ],
  },
  {
    n: '33', color: '#e05050',
    title: 'Mestertal & Frimureri',
    examples: [
      'Jesu alder ved korsfæstelsen',
      '33. grad = højeste frimurer-grad',
      '33 vertebræ i rygsøjlen',
      'Davids Psalme nr. 33',
      'Guds navn nævnes 33× i Koranen i visse optællinger',
      'Alexander den Store døde 33 år gammel',
    ],
  },
  {
    n: '40', color: '#50b080',
    title: 'Prøvelsens og rensningens tal',
    examples: [
      '40 dage og nætter — Noas syndflod',
      '40 år i ørkenen — Moses og israelitterne',
      '40 dage i ørkenen — Jesus\' fristelse',
      '40 dage (Arba\'een) — islamisk tradition',
      '40 dages faste — fastelavn/lent',
    ],
  },
  {
    n: '144.000', color: '#70a0e0',
    title: 'De udvalgte',
    examples: [
      '144.000 forseglede — Johannes\' Åbenbaring 7:4',
      '12 × 12.000 fra Israels 12 stammer',
      'Jehovas Vidner: 144.000 i himlen',
      '144 = 12² — kosmisk fuldkommenhed',
      'Også forbundet med lyd: 144 Hz',
    ],
  },
  {
    n: '666', color: '#c03030',
    title: 'Dyrets tal',
    examples: [
      'Åbenbaringen 13:18 — Dyrets antal',
      'Gematria: NERO CAESAR = 666 (hebraisk)',
      'Solomon modtog 666 talents guld — 1 Kongebog 10:14',
      'Frimurere: 6-6-6 = tredobbelt perfekt',
      'Carbon-12: 6 protoner, 6 neutroner, 6 elektroner',
    ],
  },
  {
    n: '11 · 22 · 33', color: '#d4a843',
    title: 'Mastertal',
    examples: [
      '11: Intuition, åndelig indsigt — "lysbudbringer"',
      '22: Bygmesteren — materialiserer store visioner',
      '33: Mesteren — højeste spirituelle tjener',
      'Disse reduceres IKKE i numerologi',
      '9/11 → 9+1+1=11. 11/11 portal-dato',
      'Frimurer-pyramide: 33 grader opad',
    ],
  },
]

const LETTER_VALS = {
  A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
  J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,
  S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8,
  Æ:1,Ø:6,Å:1,
}
const VOWELS = new Set(['A','E','I','O','U','Y','Æ','Ø','Å'])

function reduceNum(n, master = true) {
  while (n > 9) {
    if (master && (n === 11 || n === 22 || n === 33)) break
    n = String(n).split('').reduce((a, d) => a + +d, 0)
  }
  return n
}

function calcNumbers(name, dateStr) {
  try {
    const [y, m, d] = dateStr.split('-').map(Number)
    const lpRaw = String(y) + String(m).padStart(2,'0') + String(d).padStart(2,'0')
    const lp = reduceNum([...lpRaw].reduce((a,c) => a + +c, 0))

    const clean = name.toUpperCase().replace(/[^A-ZÆØÅ]/g,'')
    const letters = [...clean].filter(c => LETTER_VALS[c] !== undefined)
    const vowels = letters.filter(c => VOWELS.has(c))
    const cons   = letters.filter(c => !VOWELS.has(c))

    const expression  = reduceNum(letters.reduce((a,c) => a + LETTER_VALS[c], 0))
    const soulUrge    = reduceNum(vowels.reduce((a,c) => a + LETTER_VALS[c], 0))
    const personality = reduceNum(cons.reduce((a,c) => a + LETTER_VALS[c], 0))
    const birthday    = reduceNum(d, false)
    const now = new Date()
    const pyRaw = String(now.getFullYear()) + String(m).padStart(2,'0') + String(d).padStart(2,'0')
    const personalYear = reduceNum([...pyRaw].reduce((a,c) => a + +c, 0))

    return { lp, expression, soulUrge, personality, birthday, personalYear,
             isMaster: [11,22,33].includes(lp) }
  } catch { return null }
}

const NUM_META = {
  lp:           { label: 'Livssti',         icon: '🛤', desc: 'Din grundlæggende livsmission' },
  expression:   { label: 'Udtrykstal',      icon: '💬', desc: 'Din ydre kraft og potentiale' },
  soulUrge:     { label: 'Sjælens længsel', icon: '💛', desc: 'Din dybeste indre motivation' },
  personality:  { label: 'Personlighed',    icon: '🎭', desc: 'Hvordan andre ser dig' },
  birthday:     { label: 'Fødselsdagstal',  icon: '🎂', desc: 'Din medfødte gave' },
  personalYear: { label: 'Personligt år',   icon: '📅', desc: `Energien i ${new Date().getFullYear()}` },
}

export default function Numerology() {
  const [name, setName]   = useState('')
  const [date, setDate]   = useState('')
  const [preview, setPreview] = useState(null)
  const [result, setResult]   = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  function handleChange(n, d) {
    if (n && d) setPreview(calcNumbers(n, d))
    else setPreview(null)
  }

  async function run() {
    if (!name || !date) return
    setLoading(true); setError(null); setResult(null)
    try {
      const res = await fetch('/api/numerology', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, birthdate: date }),
      })
      const d = await res.json()
      if (!res.ok) throw new Error(d.detail || 'Fejl')
      setResult(d)
    } catch (e) {
      setError(e.message || 'Kunne ikke forbinde.')
    }
    setLoading(false)
  }

  return (
    <div className="num-page">

      <div className="num-header">
        <div className="num-symbols">1 · 2 · 3 · 7 · 11 · 22 · 33</div>
        <h2 className="num-title">Numerologi</h2>
        <p className="num-sub">Tallenes skjulte sprog — fra pythagorask urvisdom til frimurerisk arkitektur</p>
      </div>

      {/* Input */}
      <div className="num-form card">
        <div className="num-field-row">
          <div className="num-field">
            <label>Fulde fødselsnavn</label>
            <input placeholder="Dit fulde navn" value={name}
              onChange={e => { setName(e.target.value); handleChange(e.target.value, date) }} />
          </div>
          <div className="num-field num-field-sm">
            <label>Fødselsdato</label>
            <input type="date" value={date}
              onChange={e => { setDate(e.target.value); handleChange(name, e.target.value) }} />
          </div>
        </div>

        {preview && (
          <div className="num-preview">
            {Object.entries(NUM_META).map(([k, m]) => (
              <div key={k} className={`num-preview-item ${[11,22,33].includes(preview[k]) ? 'master' : ''}`}>
                <span className="np-icon">{m.icon}</span>
                <span className="np-label">{m.label}</span>
                <span className="np-val">{preview[k]}{[11,22,33].includes(preview[k]) ? ' ⚡' : ''}</span>
              </div>
            ))}
          </div>
        )}

        <button className="tt-btn" onClick={run}
          disabled={loading || !name || !date}>
          {loading ? <><span className="spinner" /> Beregner...</> : '🔢 Fuld numerologisk analyse'}
        </button>
      </div>

      {loading && (
        <div className="tt-loading">
          <div className="tt-loading-ring" />
          <p>Aflæser tallenes skjulte sprog...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {result && (
        <div className="num-result card">
          {result.is_master && (
            <div className="num-master-banner">
              ⚡ MASTER-TAL {result.numbers['Livssti']} — Du bærer en særlig sjælelig mission
            </div>
          )}
          <SpeechPlayer htmlText={formatResult(result.interpretation)} />
          <div className="prose" dangerouslySetInnerHTML={{ __html: formatResult(result.interpretation) }} />
          <button className="result-action-btn" style={{ marginTop: '1rem' }}
            onClick={() => setResult(null)}>
            Ny analyse
          </button>
        </div>
      )}

      {/* Sacred Numbers section */}
      <div className="num-sacred-section">
        <h3 className="num-sacred-title">🔮 Hellige tal i religion og frimureri</h3>
        <p className="num-sacred-sub">
          Numerologi er ikke new age — det er oldgammel viden brugt af pythagoræere, kabbalisters gematria,
          frimurerisk symbolik og kodet ind i alle store religiøse tekster. Tallene er et universelt sprog.
        </p>

        <div className="num-sacred-grid">
          {SACRED_NUMBERS.map(item => (
            <div key={item.n} className="num-sacred-card"
              style={{ borderColor: item.color + '50', background: item.color + '08' }}>
              <div className="nsc-number" style={{ color: item.color }}>{item.n}</div>
              <div className="nsc-title">{item.title}</div>
              <ul className="nsc-list">
                {item.examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="num-gematria-note">
          <strong>Gematria</strong> — Hebræisk numerologi: hvert bogstav har en talværdi. Brugt i Torah, Talmud og Kabbalah til at finde skjulte budskaber. Fx: "Chai" (liv) = 18, derfor er 18 et helligt gave-tal i jødisk tradition. Frimurere bruger samme princip i arkitektur og ritualer — Washington D.C. er designet med numerologisk præcision.
        </div>
      </div>

    </div>
  )
}
