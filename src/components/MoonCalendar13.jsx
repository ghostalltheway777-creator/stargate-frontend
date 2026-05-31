import React, { useState, useEffect } from 'react'
import './MoonCalendar13.css'

const MONTHS_13 = [
  { n:1,  name:'Magnetic Moon',    color:'#cc3333', tone:1,  desc:'Attraction · Purpose · Unify' },
  { n:2,  name:'Lunar Moon',       color:'#cc6633', tone:2,  desc:'Challenge · Stabilize · Polarize' },
  { n:3,  name:'Electric Moon',    color:'#cc9933', tone:3,  desc:'Service · Bond · Activate' },
  { n:4,  name:'Self-Existing Moon',color:'#cccc33',tone:4,  desc:'Form · Measure · Define' },
  { n:5,  name:'Overtone Moon',    color:'#66cc33', tone:5,  desc:'Radiance · Command · Empower' },
  { n:6,  name:'Rhythmic Moon',    color:'#33cc66', tone:6,  desc:'Equality · Organize · Balance' },
  { n:7,  name:'Resonant Moon',    color:'#33cccc', tone:7,  desc:'Attunement · Channel · Inspire' },
  { n:8,  name:'Galactic Moon',    color:'#3366cc', tone:8,  desc:'Integrity · Harmonize · Model' },
  { n:9,  name:'Solar Moon',       color:'#6633cc', tone:9,  desc:'Intention · Pulse · Realize' },
  { n:10, name:'Planetary Moon',   color:'#cc33cc', tone:10, desc:'Manifestation · Perfect · Produce' },
  { n:11, name:'Spectral Moon',    color:'#cc33aa', tone:11, desc:'Liberation · Dissolve · Release' },
  { n:12, name:'Crystal Moon',     color:'#aa33cc', tone:12, desc:'Cooperation · Dedicate · Universalize' },
  { n:13, name:'Cosmic Moon',      color:'#3399cc', tone:13, desc:'Presence · Endure · Transcend' },
]

function getCurrentMoon() {
  const start = new Date(Date.UTC(2025, 6, 26))
  const today = new Date()
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24))
  const dayOfYear = ((diff % 365) + 365) % 365
  if (dayOfYear >= 364) return { moon: null, day: 0, isDayOutOfTime: true }
  const moonNum = Math.floor(dayOfYear / 28) + 1
  const dayInMoon = (dayOfYear % 28) + 1
  return { moon: MONTHS_13[moonNum - 1], day: dayInMoon, isDayOutOfTime: false }
}

export default function MoonCalendar13() {
  const [tab, setTab] = useState('today')
  const { moon, day, isDayOutOfTime } = getCurrentMoon()

  return (
    <div className="m13-page">
      <div className="m13-hero">
        <div className="m13-hero-icon">🌙</div>
        <h1 className="m13-title">13 Måne Kalender</h1>
        <p className="m13-sub">28 dage × 13 måneder = 364 dage · Naturlig tid · José Argüelles</p>
      </div>

      <div className="m13-tabs">
        {[
          { id:'today',   label:'🌙 I dag' },
          { id:'why',     label:'❓ Hvorfor' },
          { id:'months',  label:'📅 13 Måneder' },
          { id:'switch',  label:'🔺 Skiftet' },
        ].map(t => (
          <button key={t.id} className={`m13-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'today' && (
        <div className="m13-section">
          {isDayOutOfTime ? (
            <div className="m13-doot">
              <div className="m13-doot-icon">☀️</div>
              <h2>Day Out of Time</h2>
              <p>Den 365. dag — uden for alle måneder. En dag for kreativitet, tilgivelse og ny begyndelse. Den eneste dag der er fri fra tid.</p>
            </div>
          ) : moon ? (
            <div className="m13-today-card" style={{'--moon-color': moon.color}}>
              <div className="m13-today-num">Måne {moon.n} · Dag {day}</div>
              <div className="m13-today-name">{moon.name}</div>
              <div className="m13-today-desc">{moon.desc}</div>
              <div className="m13-today-grid">
                {Array.from({length: 28}, (_, i) => (
                  <div key={i} className={`m13-day-cell ${i+1 === day ? 'today' : i+1 < day ? 'past' : ''}`}>
                    {i+1}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <div className="m13-info-box">
            <p>13 Måne Kalender er baseret på månens naturlige cyklus. Månen kredser Jorden <strong>13 gange</strong> om året — ikke 12. Den gregorianske kalender ignorerer dette faktum.</p>
          </div>
        </div>
      )}

      {tab === 'why' && (
        <div className="m13-section">
          <div className="m13-compare">
            <div className="m13-compare-col gregorian">
              <h3>Gregoriansk Kalender</h3>
              <ul>
                <li>12 måneder med 28-31 dage</li>
                <li>Uregelmæssig og kunstig</li>
                <li>Baseret på Julius Cæsar (46 f.Kr.)</li>
                <li>Ændret af Pave Gregor XIII (1582)</li>
                <li>Disconnected fra naturens rytme</li>
                <li>Skaber stress og tidspres</li>
                <li>Synchroniserer med økonomi og kontrol</li>
              </ul>
            </div>
            <div className="m13-compare-col natural">
              <h3>13 Måne Kalender</h3>
              <ul>
                <li>13 måneder af præcis 28 dage</li>
                <li>Perfekt regelmæssig</li>
                <li>Baseret på månens faktiske cyklus</li>
                <li>Genoplivet af José Argüelles 1987</li>
                <li>Harmonisk med naturens tid</li>
                <li>Reducerer stress og angst</li>
                <li>Synchroniserer med galaktisk tid</li>
              </ul>
            </div>
          </div>
          <div className="m13-insight">
            <span className="m13-insight-label">🌊 KVINDELIG VISDOM</span>
            <p>Kvinders menstruationscyklus er 28 dage — præcis én måne. Den gregorianske kalender bryder denne forbindelse. 13 Måne Kalender genskaber kvindelig og lunar bevidsthed som fundamentet for civilisation.</p>
          </div>
          <div className="m13-insight">
            <span className="m13-insight-label">⬡ 28 = 4 × 7</span>
            <p>28 dage = 4 uger af 7 dage. Hver måned starter på samme ugedag. Ingen "hvilken dag er det?" — tid bliver enkel og naturlig igen. 13 × 28 = 364 + 1 "Day Out of Time" = 365 dage præcis.</p>
          </div>
        </div>
      )}

      {tab === 'months' && (
        <div className="m13-section">
          {MONTHS_13.map(m => (
            <div key={m.n} className="m13-month-card" style={{'--mc': m.color}}>
              <div className="m13-month-num">Måne {m.n}</div>
              <div className="m13-month-name">{m.name}</div>
              <div className="m13-month-desc">{m.desc}</div>
            </div>
          ))}
          <div className="m13-doot-card">
            <div className="m13-month-num">Dag 365</div>
            <div className="m13-month-name">Day Out of Time ☀️</div>
            <div className="m13-month-desc">Den grønne dag · Ingen tid · Ren kreativitet</div>
          </div>
        </div>
      )}

      {tab === 'switch' && (
        <div className="m13-section">
          <p className="m13-intro">Skiftet fra 13-måne til 12-måne kalender var ikke tilfældigt — det var en bevidst handling for at afskære menneskeheden fra naturlig tid.</p>
          {[
            { year:'46 f.Kr.', event:'Julius Cæsar indfører Julian kalender', desc:'Skifter fra lunar (13 måneder) til solar (12 måneder) kalender. Første store afkobling fra naturlig tid.' },
            { year:'325 e.Kr.', event:'Nikæa Konciliet standardiserer kristne helligdage', desc:'Påske, jul og alle helligdage beregnes nu efter solar kalender. Fuldmåne mister sin sakrale status.' },
            { year:'1582', event:'Pave Gregor XIII indfører Gregoriansk Kalender', desc:'Oktober 1582: 10 dage "slettes" natten over. Folk vågner op og 10 dage er forsvundet. Europa accepterer den kunstige tid.' },
            { year:'1752', event:'England tvunget til at skifte', desc:'"Giv os vores 11 dage tilbage!" — faktiske optøjer i England. Folk vidste instinktivt at deres tid blev stjålet.' },
            { year:'1987', event:'José Argüelles lancerer 13:20 frekvensen', desc:'Dreamspell kalender og 13 Måne bevægelsen starter. Harmonic Convergence — 144.000 mennesker mediterer globalt for første gang.' },
            { year:'2012', event:'Slutningen af den Maya lange tælling', desc:'IKKE verdens afslutning — men slutningen af 13. Baktun og starten på en ny cyklus. Galaktisk synkronisering.' },
          ].map(t => (
            <div key={t.year} className="m13-tl-item">
              <div className="m13-tl-year">{t.year}</div>
              <div className="m13-tl-content">
                <div className="m13-tl-event">{t.event}</div>
                <div className="m13-tl-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
