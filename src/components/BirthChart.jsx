import React, { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import { formatResult } from '../utils'
import SpeechPlayer from './SpeechPlayer'
import './BirthChart.css'

const PLANET_ICONS = {
  'Sol ☀️': '☀️', 'Måne 🌙': '🌙', 'Ascendant ↑': '↑',
  'Merkur ☿': '☿', 'Venus ♀': '♀', 'Mars ♂': '♂',
  'Jupiter ♃': '♃', 'Saturn ♄': '♄', 'Uranus ♅': '♅',
  'Neptun ♆': '♆', 'Pluto ♇': '♇',
}

const SIGN_COLORS = {
  '♈': '#e05050', '♉': '#50c050', '♊': '#e0c050', '♋': '#5080d0',
  '♌': '#e08030', '♍': '#60b060', '♎': '#c070c0', '♏': '#c03030',
  '♐': '#d06030', '♑': '#707070', '♒': '#4080d0', '♓': '#6060c0',
}

function signColor(sign) {
  for (const [sym, col] of Object.entries(SIGN_COLORS)) {
    if (sign?.includes(sym)) return col
  }
  return '#d4a843'
}

export default function BirthChart() {
  const [form, setForm] = useState({
    name: '', year: '', month: '', day: '',
    hour: '12', minute: '0', city: 'Copenhagen', nation: 'DK',
  })
  const [result, setResult]       = useState(null)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState(null)
  const [pastLife, setPastLife]   = useState(null)
  const [plLoading, setPlLoading] = useState(false)
  const [sharing, setSharing]     = useState(false)
  const resultRef = useRef(null)

  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  async function shareAsImage() {
    if (!resultRef.current) return
    setSharing(true)
    try {
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: '#0d0d1a',
        scale: 2,
        useCORS: true,
      })
      const blob = await new Promise(res => canvas.toBlob(res, 'image/png'))
      if (navigator.share && navigator.canShare({ files: [new File([blob], 'stargate-chart.png', { type: 'image/png' })] })) {
        await navigator.share({
          title: `${form.name}s fødselskort — STARGATE`,
          files: [new File([blob], 'stargate-chart.png', { type: 'image/png' })],
        })
      } else {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url; a.download = 'stargate-chart.png'; a.click()
        URL.revokeObjectURL(url)
      }
    } catch {}
    setSharing(false)
  }

  async function runPastLife(lifePathNum) {
    if (!form.name || !form.year) return
    setPlLoading(true)
    try {
      const res = await fetch('/api/past-life', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          birthdate: `${form.year}-${String(form.month).padStart(2,'0')}-${String(form.day).padStart(2,'0')}`,
          life_path: lifePathNum,
        }),
      })
      const d = await res.json()
      setPastLife(d.result)
    } catch {}
    setPlLoading(false)
  }

  async function run() {
    if (!form.name || !form.year || !form.month || !form.day) return
    setLoading(true); setError(null); setResult(null)
    try {
      const res = await fetch('/api/birth-chart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          year: +form.year, month: +form.month, day: +form.day,
          hour: +form.hour, minute: +form.minute,
          city: form.city, nation: form.nation,
        }),
      })
      const d = await res.json()
      if (!res.ok) throw new Error(d.detail || 'Fejl')
      setResult(d)
    } catch (e) {
      setError(e.message || 'Kunne ikke forbinde til serveren.')
    }
    setLoading(false)
  }

  return (
    <div className="bc-page">

      <div className="bc-header">
        <div className="bc-symbols">♈♉♊♋♌♍♎♏♐♑♒♓</div>
        <h2 className="bc-title">Fødselskort</h2>
        <p className="bc-sub">Dit fulde natal-kort — sol, måne, ascendant og alle planeter</p>
      </div>

      <div className="bc-form card">
        <div className="bc-field-row">
          <div className="bc-field">
            <label>Fulde navn</label>
            <input placeholder="Dit navn" value={form.name}
              onChange={e => set('name', e.target.value)} />
          </div>
        </div>

        <div className="bc-field-row bc-date-row">
          <div className="bc-field">
            <label>Dag</label>
            <input type="number" placeholder="15" min="1" max="31"
              value={form.day} onChange={e => set('day', e.target.value)} />
          </div>
          <div className="bc-field">
            <label>Måned</label>
            <input type="number" placeholder="6" min="1" max="12"
              value={form.month} onChange={e => set('month', e.target.value)} />
          </div>
          <div className="bc-field">
            <label>År</label>
            <input type="number" placeholder="1990" min="1900" max="2025"
              value={form.year} onChange={e => set('year', e.target.value)} />
          </div>
        </div>

        <div className="bc-field-row bc-time-row">
          <div className="bc-field">
            <label>Time</label>
            <input type="number" placeholder="12" min="0" max="23"
              value={form.hour} onChange={e => set('hour', e.target.value)} />
          </div>
          <div className="bc-field">
            <label>Minut</label>
            <input type="number" placeholder="0" min="0" max="59"
              value={form.minute} onChange={e => set('minute', e.target.value)} />
          </div>
          <div className="bc-field bc-field-wide">
            <label>By (engelsk)</label>
            <input placeholder="Copenhagen" value={form.city}
              onChange={e => set('city', e.target.value)} />
          </div>
          <div className="bc-field">
            <label>Land</label>
            <input placeholder="DK" maxLength={2} value={form.nation}
              onChange={e => set('nation', e.target.value.toUpperCase())} />
          </div>
        </div>

        <p className="bc-time-note">💡 Fødselstime giver præcis ascendant. Ukendt tid? Lad stå på 12:00.</p>

        <button className="tt-btn" onClick={run}
          disabled={loading || !form.name || !form.year || !form.month || !form.day}>
          {loading ? <><span className="spinner" /> Beregner dit kort...</> : '🌟 Beregn fødselskort'}
        </button>
      </div>

      {loading && (
        <div className="tt-loading">
          <div className="tt-loading-ring" />
          <p>Kortlægger planernes positioner ved din fødsel...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {result && (
        <div className="bc-result" ref={resultRef}>

          <div className="bc-planets-grid">
            {Object.entries(result.planets).map(([planet, data]) => (
              <div key={planet} className="bc-planet-card"
                style={{ borderColor: signColor(data.sign) + '60', background: signColor(data.sign) + '10' }}>
                <div className="bc-planet-name">{planet}</div>
                <div className="bc-planet-sign" style={{ color: signColor(data.sign) }}>{data.sign}</div>
                <div className="bc-planet-deg">{data.deg}</div>
              </div>
            ))}
          </div>

          <div className="bc-interp card">
            <SpeechPlayer htmlText={formatResult(result.interpretation)} />
            <div className="prose" dangerouslySetInnerHTML={{ __html: formatResult(result.interpretation) }} />
          </div>

          {/* Past Life button */}
          <div className="bc-pastlife-section">
            <button className="bc-pastlife-btn"
              onClick={() => runPastLife(null)}
              disabled={plLoading}>
              {plLoading ? <><span className="spinner" /> Aflæser sjælens rejse...</> : '🌀 Hvem var du i et tidligere liv?'}
            </button>

            {plLoading && (
              <div className="tt-loading" style={{ padding: '1.5rem 0' }}>
                <div className="tt-loading-ring" />
                <p>Rejser gennem sjælens mange inkarnationer...</p>
              </div>
            )}

            {pastLife && (
              <div className="bc-pastlife-result card">
                <h4 className="bc-pastlife-title">🌀 Din sjæls tidligere rejse</h4>
                <SpeechPlayer htmlText={formatResult(pastLife)} />
                <div className="prose" dangerouslySetInnerHTML={{ __html: formatResult(pastLife) }} />
              </div>
            )}
          </div>

          <div className="bc-share-row">
            <button className="bc-share-btn" onClick={shareAsImage} disabled={sharing}>
              {sharing ? <><span className="spinner" /> Gemmer...</> : '📷 Del som billede'}
            </button>
            <button className="result-action-btn" onClick={() => { setResult(null); setPastLife(null) }}>
              Nyt fødselskort
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
