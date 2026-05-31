import React, { useState, useRef } from 'react'
import './Vision5D.css'

const AUDIO_TRACKS = [
  { id: 'intro',   title: '5D Intro',                                    duration: '25 sek', src: '/5d-intro.mp3',  desc: 'Hvad er den 5. dimension — 25 sekunder der forklarer alt' },
  { id: 'billy',   title: 'Billy Carson — Ancient Wisdom',               duration: '62 sek', src: '/billy-5d.mp3',  desc: '4biddenknowledge — ancient wisdom om bevidsthedens dimensioner' },
  { id: 'reel499', title: 'There Is Someone You Got To Get Out Of Your Life', duration: '59 sek', src: '/reel-499.mp3', desc: 'Billy Carson — om at frigøre sig fra dem der holder dig nede' },
  { id: 'reel500', title: "Don't Believe Everybody When They Say They Speak From God", duration: '65 sek', src: '/reel-500.mp3', desc: 'Billy Carson — om religiøs manipulation og sand åndelig viden' },
  { id: 'reel501', title: 'Your Brain Is A Receiver',                    duration: '68 sek', src: '/reel-501.mp3',  desc: 'Billy Carson — din hjerne som kosmisk modtager af frekvenser' },
  { id: 'reel503', title: 'Billy Carson — Archons',                      duration: '66 sek', src: '/reel-503.mp3',  desc: 'Billy Carson — om Archonerne og bevidsthedskontrol' },
  { id: 'reel511', title: 'Billy Carson — Anunnaki',                     duration: '~60 sek', src: '/reel-511.mp3', desc: 'Billy Carson — Anunnakierne, menneskelig oprindelse og de fortabte optegnelser' },
  { id: 'reel512', title: 'Billy Carson — DNA Engineering',               duration: '~60 sek', src: '/reel-512.mp3', desc: 'Billy Carson — DNA som kvantumantenner og genetisk manipulation i oldtiden' },
]

const PHILOSOPHY = [
  {
    id: 1,
    type: 'citat',
    text: 'Du er ikke et menneske der har åndelige oplevelser. Du er et åndeligt væsen der har menneskelige oplevelser.',
    source: 'Pierre Teilhard de Chardin',
  },
  {
    id: 2,
    type: 'citat',
    text: 'Virkeligheden er en illusion, omend en meget vedholdende en.',
    source: 'Albert Einstein',
  },
  {
    id: 3,
    type: 'citat',
    text: 'As within, so without. As above, so below. Som i himlen, således på Jorden.',
    source: 'Hermes Trismegistus · Smaragdtavlerne',
  },
  {
    id: 4,
    type: 'citat',
    text: 'Alt er frekvens og vibration. Du er ikke i verden — verden er i dig.',
    source: 'Nikola Tesla · Ancient Wisdom',
  },
  {
    id: 5,
    type: 'citat',
    text: '3D er spillet. 5D er spilleren. Du har glemt at du er spilleren.',
    source: 'Stargate · Project Awareness',
  },
]

export default function Vision5D() {
  const [playing, setPlaying] = useState(null)
  const [tab, setTab] = useState('video')
  const [newText, setNewText] = useState('')
  const [newSource, setNewSource] = useState('')
  const [poems, setPoems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('sg_5d_poems') || '[]') } catch { return [] }
  })
  const [saved, setSaved] = useState(false)
  const audioRefs = useRef({})

  function toggleAudio(id) {
    const audio = audioRefs.current[id]
    if (!audio) return
    if (playing === id) {
      audio.pause()
      setPlaying(null)
    } else {
      Object.values(audioRefs.current).forEach(a => a.pause())
      audio.play().catch(() => {})
      setPlaying(id)
    }
  }

  function savePoem() {
    if (!newText.trim()) return
    const entry = { id: Date.now(), type: 'poesi', text: newText, source: newSource || 'Ghost', date: new Date().toLocaleDateString('da-DK') }
    const updated = [entry, ...poems]
    setPoems(updated)
    localStorage.setItem('sg_5d_poems', JSON.stringify(updated))
    setNewText('')
    setNewSource('')
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  function deletePoem(id) {
    const updated = poems.filter(p => p.id !== id)
    setPoems(updated)
    localStorage.setItem('sg_5d_poems', JSON.stringify(updated))
  }

  const allContent = [...PHILOSOPHY, ...poems].sort((a, b) => (b.id || 0) - (a.id || 0))

  return (
    <div className="v5-page">
      <div className="v5-hero">
        <div className="v5-icon">✦</div>
        <h1 className="v5-title">5D Vision</h1>
        <p className="v5-sub">Hvad er den 5. Dimension · Filosofi · Poesi · Bevidsthed</p>
      </div>

      <div className="v5-tabs">
        {[
          {id:'video', label:'🎬 5D Intro'},
          {id:'wisdom', label:'✦ Visdom'},
          {id:'write', label:'✍️ Skriv'},
        ].map(t => (
          <button key={t.id} className={`v5-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'video' && (
        <div className="v5-section">
          <p className="v5-intro">Luk øjnene og lyt.</p>

          {AUDIO_TRACKS.map(track => (
            <div key={track.id} className="v5-audio-player" style={{marginBottom:'12px'}}>
              <div className="v5-audio-visual">
                {playing === track.id ? (
                  <div className="v5-audio-waves">
                    {[...Array(12)].map((_,i) => (
                      <div key={i} className="v5-wave-bar" style={{animationDelay:`${i*0.08}s`}} />
                    ))}
                  </div>
                ) : <div className="v5-audio-icon">✦</div>}
              </div>
              <div className="v5-track-title">{track.title}</div>
              <div className="v5-track-desc">{track.desc}</div>
              <div className="v5-track-duration">⏱ {track.duration}</div>
              <audio
                ref={el => audioRefs.current[track.id] = el}
                src={track.src}
                onEnded={() => setPlaying(null)}
              />
              <button className="v5-play-btn" onClick={() => toggleAudio(track.id)}>
                {playing === track.id ? '⏸ Stop' : `▶ Afspil`}
              </button>
            </div>
          ))}

          <div className="v5-video-note">
            <p>"Alt hvad vi kalder virkelighed er lavet af ting der ikke kan betragtes som virkelighed."</p>
            <cite>— Niels Bohr</cite>
          </div>
        </div>
      )}

      {tab === 'wisdom' && (
        <div className="v5-section">
          <p className="v5-intro">Ord der peger mod det der ikke kan siges — kun mærkes.</p>
          {allContent.map(item => (
            <div key={item.id} className={`v5-card ${item.type}`}>
              {item.date && <div className="v5-card-date">{item.date}</div>}
              <blockquote className="v5-card-text">"{item.text}"</blockquote>
              <div className="v5-card-source">— {item.source}</div>
              {item.date && (
                <button className="v5-delete" onClick={() => deletePoem(item.id)}>×</button>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'write' && (
        <div className="v5-section">
          <p className="v5-intro">Skriv din egen filosofi, poesi eller indsigt om bevidsthed og 5D.</p>
          <div className="v5-write-box">
            <textarea
              className="v5-textarea"
              placeholder="Skriv din tanke, dit citat eller din poesi her..."
              value={newText}
              onChange={e => setNewText(e.target.value)}
              rows={5}
              style={{background:'#0a0f1e', color:'#fff', border:'1px solid rgba(212,168,67,0.25)', borderRadius:'10px', padding:'12px', fontSize:'13px', resize:'none', outline:'none', width:'100%', boxSizing:'border-box', lineHeight:'1.7'}}
            />
            <input
              placeholder="Kilde / navn (valgfrit)"
              value={newSource}
              onChange={e => setNewSource(e.target.value)}
              style={{background:'#0a0f1e', color:'#fff', border:'1px solid rgba(212,168,67,0.2)', borderRadius:'8px', padding:'10px', fontSize:'12px', outline:'none', width:'100%', boxSizing:'border-box', marginTop:'8px'}}
            />
            <button className="v5-save-btn" onClick={savePoem}>
              {saved ? '✓ Gemt!' : '✦ Gem i min 5D visdom'}
            </button>
          </div>
          <p className="v5-write-note">Dine tekster gemmes lokalt og vises under Visdom.</p>
        </div>
      )}
    </div>
  )
}
