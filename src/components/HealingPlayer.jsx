import { useState, useRef } from 'react'
import './HealingPlayer.css'

const TONES = [
  { hz: 174,  name: '174 Hz', label: 'Fundament', color: '#c9222a', desc: 'Smerte & stress relief' },
  { hz: 285,  name: '285 Hz', label: 'Healing',   color: '#e07020', desc: 'Celleregenerering' },
  { hz: 396,  name: '396 Hz', label: 'Befrielse', color: '#d4a843', desc: 'Slip frygt & skyld' },
  { hz: 432,  name: '432 Hz', label: 'Universel', color: '#44aa55', desc: 'Naturens frekvens' },
  { hz: 528,  name: '528 Hz', label: 'Kærlighed', color: '#33bb88', desc: 'DNA-reparation' },
  { hz: 639,  name: '639 Hz', label: 'Forbindel.', color: '#3388cc', desc: 'Relationer & hjerte' },
  { hz: 741,  name: '741 Hz', label: 'Udtryk',    color: '#6655cc', desc: 'Intuition & sandhed' },
  { hz: 852,  name: '852 Hz', label: 'Indsigt',   color: '#8844bb', desc: 'Åndelig orden' },
  { hz: 963,  name: '963 Hz', label: 'Krone',     color: '#aa33aa', desc: 'Guddommelig bevidsthed' },
]

export default function HealingPlayer() {
  const [open, setOpen]       = useState(false)
  const [playing, setPlaying] = useState(null)
  const [vol, setVol]         = useState(0.18)
  const ctxRef  = useRef(null)
  const oscRef  = useRef(null)
  const gainRef = useRef(null)

  function getCtx() {
    if (!ctxRef.current) ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    return ctxRef.current
  }

  function play(tone) {
    const ac = getCtx()
    if (ac.state === 'suspended') ac.resume()

    if (oscRef.current) { oscRef.current.stop(); oscRef.current = null }

    const gain = ac.createGain()
    gain.gain.setValueAtTime(0, ac.currentTime)
    gain.gain.linearRampToValueAtTime(vol, ac.currentTime + 0.8)
    gain.connect(ac.destination)
    gainRef.current = gain

    const osc = ac.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = tone.hz
    osc.connect(gain)
    osc.start()
    oscRef.current = osc
    setPlaying(tone.hz)
  }

  function stop() {
    if (gainRef.current && oscRef.current) {
      const ac = ctxRef.current
      gainRef.current.gain.linearRampToValueAtTime(0, ac.currentTime + 0.6)
      const o = oscRef.current
      setTimeout(() => { try { o.stop() } catch {} }, 700)
      oscRef.current = null
    }
    setPlaying(null)
  }

  function changeVol(v) {
    setVol(v)
    if (gainRef.current) gainRef.current.gain.value = v
  }

  return (
    <div className={`healing-wrap ${open ? 'open' : ''}`}>
      <button className="healing-fab" onClick={() => setOpen(o => !o)} title="Healing frekvenser">
        {playing ? '🔊' : '🎵'}
        {playing && <span className="healing-hz">{playing}</span>}
      </button>

      {open && (
        <div className="healing-panel">
          <div className="healing-header">
            <span>✦ Healing Frekvenser</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="healing-vol">
            <span>Vol</span>
            <input type="range" min="0.02" max="0.5" step="0.01"
              value={vol} onChange={e => changeVol(+e.target.value)} />
          </div>

          <div className="healing-tones">
            {TONES.map(t => (
              <button
                key={t.hz}
                className={`healing-tone ${playing === t.hz ? 'active' : ''}`}
                style={{ '--tone-color': t.color }}
                onClick={() => playing === t.hz ? stop() : play(t)}
              >
                <span className="tone-hz">{t.name}</span>
                <span className="tone-label">{t.label}</span>
                <span className="tone-desc">{t.desc}</span>
                {playing === t.hz && <span className="tone-wave">〰</span>}
              </button>
            ))}
          </div>

          {playing && (
            <button className="healing-stop" onClick={stop}>⏹ Stop</button>
          )}
        </div>
      )}
    </div>
  )
}
