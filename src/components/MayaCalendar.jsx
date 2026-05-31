import { useState, useEffect } from 'react'
import './MayaCalendar.css'

export default function MayaCalendar() {
  const [data, setData]     = useState(null)
  const [loading, setLoading] = useState(true)
  const [date, setDate]     = useState(() => new Date().toISOString().slice(0,10))

  useEffect(() => { load(date) }, [date])

  async function load(d) {
    setLoading(true)
    const r = await fetch(`/api/maya-calendar?date=${d}`)
    if (r.ok) setData(await r.json())
    setLoading(false)
  }

  return (
    <div className="maya-page">
      <div className="maya-hero">
        <div className="maya-glyph">⊙</div>
        <h1>Galaktisk Kalender</h1>
        <p>Maya Tzolkin — 260-dages hellig kalender · Dagens galaktiske signatur</p>
      </div>

      <div className="maya-date-pick">
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="maya-input" />
      </div>

      {loading && <div className="maya-loading">🌀 Beregner galaktisk signatur...</div>}

      {!loading && data && (
        <>
          <div className="maya-signature">
            <div className="sig-glyph">{data.kin_glyph}</div>
            <div className="sig-body">
              <div className="sig-kin">Kin {data.kin}</div>
              <div className="sig-name">{data.tone_name} {data.sign_name}</div>
              <div className="sig-sub">{data.tone_title} · {data.sign_title}</div>
            </div>
          </div>

          <div className="maya-cards">
            <div className="maya-card">
              <div className="mc-icon">🌀</div>
              <h3>Galaktisk Tone {data.tone}</h3>
              <p>{data.tone_desc}</p>
              <div className="mc-keyword">{data.tone_keyword}</div>
            </div>

            <div className="maya-card">
              <div className="mc-icon">{data.sign_glyph}</div>
              <h3>Dag-tegn: {data.sign_name}</h3>
              <p>{data.sign_desc}</p>
              <div className="mc-keyword">{data.sign_keyword}</div>
            </div>

            <div className="maya-card gold">
              <div className="mc-icon">✦</div>
              <h3>Dagens energi</h3>
              <p>{data.daily_energy}</p>
            </div>

            <div className="maya-card">
              <div className="mc-icon">🌎</div>
              <h3>Haab dato</h3>
              <p>{data.haab_month} {data.haab_day} — {data.haab_desc}</p>
            </div>
          </div>

          <div className="maya-lord">
            <h3>☽ Nattens Herre: {data.night_lord}</h3>
            <p>{data.night_lord_desc}</p>
          </div>

          <div className="maya-gregorian">
            <p>📅 {new Date(date + 'T12:00:00').toLocaleDateString('da-DK', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</p>
            <p>Tzolkin position: {data.tzolkin_pos} / 260 · {data.year_bearer}</p>
          </div>
        </>
      )}
    </div>
  )
}
