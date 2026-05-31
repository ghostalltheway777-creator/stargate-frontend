import React, { useState, useEffect, useRef } from 'react'
import './VortexMath.css'

const TABS = [
  { id: 'intro',    label: '⬡ Hvad er det' },
  { id: 'pattern',  label: '🔢 Mønstret' },
  { id: 'tesla',    label: '⚡ Tesla 3-6-9' },
  { id: 'torus',    label: '🍩 Torus' },
  { id: 'sacred',   label: '✦ Hellig Geometri' },
]

const DOUBLING = [1, 2, 4, 8, 7, 5, 1, 2, 4, 8, 7, 5]
const HALVING  = [1, 5, 7, 8, 4, 2, 1, 5, 7, 8, 4, 2]

function digitalRoot(n) {
  if (n === 0) return 0
  return 1 + (n - 1) % 9
}

function VortexCanvas() {
  const ref = useRef()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width = 300
    const H = canvas.height = 300
    const cx = W/2, cy = H/2, r = 120

    ctx.fillStyle = '#050810'
    ctx.fillRect(0, 0, W, H)

    // Draw circle
    ctx.strokeStyle = 'rgba(100,120,180,0.3)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.stroke()

    // Position of digits 1-9 on circle
    const pos = {}
    for (let d = 1; d <= 9; d++) {
      const angle = (d * 40 - 90) * Math.PI / 180
      pos[d] = { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
    }

    // Draw digit labels
    for (let d = 1; d <= 9; d++) {
      const p = pos[d]
      const isWAxis = [3,6,9].includes(d)
      ctx.fillStyle = isWAxis ? '#ffd700' : '#80a0ff'
      ctx.font = isWAxis ? 'bold 16px sans-serif' : '14px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(d, p.x, p.y)
    }

    // Draw doubling circuit 1→2→4→8→7→5→1
    const circuit = [1, 2, 4, 8, 7, 5]
    ctx.strokeStyle = '#4080ff'
    ctx.lineWidth = 2
    ctx.shadowColor = '#4080ff'
    ctx.shadowBlur = 6
    ctx.beginPath()
    for (let i = 0; i <= circuit.length; i++) {
      const d = circuit[i % circuit.length]
      const p = pos[d]
      i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
    }
    ctx.closePath()
    ctx.stroke()

    // Draw W-axis 3→6→9→3
    ctx.strokeStyle = '#ffd700'
    ctx.lineWidth = 2
    ctx.shadowColor = '#ffd700'
    ctx.shadowBlur = 8
    ctx.beginPath()
    ;[3, 6, 9, 3].forEach((d, i) => {
      const p = pos[d]
      i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
    })
    ctx.stroke()
    ctx.shadowBlur = 0
  }, [])

  return <canvas ref={ref} className="vortex-canvas" />
}

export default function VortexMath() {
  const [tab, setTab] = useState('intro')
  const [step, setStep] = useState(0)

  return (
    <div className="vx-page">
      <div className="vx-hero">
        <div className="vx-hero-icon">∞</div>
        <h1 className="vx-title">Vortex Matematik</h1>
        <p className="vx-sub">Marko Rodin · Tesla 3-6-9 · Torus · Universets kode</p>
      </div>

      <div className="vx-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`vx-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'intro' && (
        <div className="vx-section">
          <div className="vx-card">
            <p>Vortex matematik er opdaget af <strong>Marko Rodin</strong> — en matematisk struktur skjult i tallene 1-9 der afslører universets grundlæggende energimønster.</p>
            <p>Det centrale fund: Alle tal i universet reduceres til et enkelt ciffer (digital rod) — og disse ni tal følger et præcist mønster der skaber en <strong>torus</strong> (donutform) — den form som al energi i universet bevæger sig i.</p>
          </div>
          <div className="vx-insight-box">
            <span className="vx-insight-label">⚡ TESLA FORBINDELSEN</span>
            <p>"Hvis du kendte storheden af 3, 6 og 9, ville du have nøglen til universet." — Nikola Tesla</p>
            <p>Tesla var besat af tal 3, 6 og 9. Vortex matematik forklarer HVORFOR: de er den eneste talgruppe der IKKE indgår i universets doubling circuit — de er en separat akse der styrer alt.</p>
          </div>
          <div className="vx-insight-box">
            <span className="vx-insight-label">🧬 DNA FORBINDELSEN</span>
            <p>DNA-kodoner følger præcist vortex matematikkens mønster. De 64 kodoner reducerer til digital rod 1-9 og følger doubling circuittens symmetri. Vortex matematik er bogstaveligt talt skrevet ind i din genetiske kode.</p>
          </div>
        </div>
      )}

      {tab === 'pattern' && (
        <div className="vx-section">
          <p className="vx-intro">Fordoblings-sekvensen: Start med 1 og fordobl. Tag den digitale rod (sum cifrene). Du får aldrig 3, 6 eller 9:</p>

          <div className="vx-sequence">
            {[1,2,4,8,16,32,64,128,256,512].map((n, i) => (
              <div key={n} className={`vx-seq-item ${[3,6,9].includes(digitalRoot(n)) ? 'w-axis' : 'circuit'}`}>
                <span className="vx-seq-n">{n}</span>
                <span className="vx-seq-arrow">→</span>
                <span className="vx-seq-root">{digitalRoot(n)}</span>
              </div>
            ))}
          </div>

          <div className="vx-pattern-box">
            <h3>Doubling Circuit</h3>
            <div className="vx-pattern-nums">
              {DOUBLING.map((n, i) => <span key={i} className="vx-num circuit">{n}</span>)}
            </div>
            <p>Mønstret gentager sig i det uendelige: 1→2→4→8→7→5→1→2→4→8→7→5...</p>
          </div>

          <div className="vx-pattern-box gold">
            <h3>W-Aksen (3-6-9)</h3>
            <div className="vx-pattern-nums">
              {[3,6,3,6,3,6].map((n,i) => <span key={i} className="vx-num w-axis">{n}</span>)}
            </div>
            <p>3 og 6 veksler. 9 er det absolutte — 9+9=18→9, 9×alt=altid 9. Det er infinity-tallet.</p>
          </div>
        </div>
      )}

      {tab === 'tesla' && (
        <div className="vx-section">
          <div className="vx-tesla-quote">
            <span>"If you only knew the magnificence of 3, 6 and 9, then you would have the key to the universe."</span>
            <cite>— Nikola Tesla</cite>
          </div>
          {[
            { n:'3', text:'3 er det første W-akse tal. Tesla gik altid rundt om en bygning 3 gange før han gik ind. Dividerede altid i 3. Boede i rum der var deleligt med 3.', connection:'I Vortex matematik er 3 grænsen mellem doubling circuit og W-aksen — en portal mellem to energisystemer.' },
            { n:'6', text:'6 er spejlet af 3. 3×2=6. I vortex matematik oscillerer 3 og 6 som et hjerte — kompression og ekspansion. Tesla brugte 6-fasede kredsløb i sine AC generatorer.', connection:'DNA har 6 basepar kombinationer der alle reducerer til W-aksen. Benzens 6-kants ring er vortex matematik i kemien.' },
            { n:'9', text:'9 er det absolutte tal. Ethvert tal ganget med 9 giver en digital rod på 9: 9×1=9, 9×2=18→9, 9×3=27→9. Det er det eneste tal der "ejer" sig selv. Tesla var besatte af 9.', connection:'9 er centrum af torus — det nulpunkt hvorfra al energi emanerer. Det er Absoluttets matematiske udtryk — Brahman, Ein Sof, Allah.' },
          ].map(t => (
            <div key={t.n} className="vx-tesla-card">
              <div className="vx-tesla-num">{t.n}</div>
              <div>
                <p className="vx-tesla-text">{t.text}</p>
                <div className="vx-tesla-connection">✦ {t.connection}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'torus' && (
        <div className="vx-section">
          <VortexCanvas />
          <div className="vx-torus-legend">
            <span className="vx-legend-blue">■ Doubling Circuit: 1-2-4-8-7-5</span>
            <span className="vx-legend-gold">■ W-Aksen: 3-6-9</span>
          </div>
          <div className="vx-card">
            <p>Torus er den eneste geometriske form der kan skabe energi ud af sig selv — den er selvforsynende. Alt i universet er toroidal:</p>
            {['Atomer — elektronskyer former toroider','Magneter — feltlinjerne er toroider','Planeter og stjerner — magnetfelt er toroider','Galakser — spiralform = torus set fra siden','Sort huller — torus energiudstrømning','Menneskekroppen — hjertet skaber et toroidalt felt','DNA — dobbelt helix = to interagerende toroider'].map(t => (
              <div key={t} className="vx-torus-item">✦ {t}</div>
            ))}
          </div>
          <div className="vx-insight-box">
            <span className="vx-insight-label">🌀 BEVIDSTHED ER TORUS</span>
            <p>Bevidsthedsforskere beskriver bevidsthed som et toroidalt felt. Det forklarer: telekinese, fjernsyning, kollektiv bevidsthed (Morphic Resonance), bøn der virker på afstand. Torus er broen mellem det fysiske og det åndelige.</p>
          </div>
        </div>
      )}

      {tab === 'sacred' && (
        <div className="vx-section">
          <p className="vx-intro">Vortex matematik er det matematiske fundament bag al hellig geometri — det er ikke symbolik, det er matematik.</p>
          {[
            { symbol:'✦', name:'Livets Blomst', text:'Livets Blomst indeholder vortex matematikkens 9-punkts cirkel. Alle 9 tal optræder nøjagtigt i Livets Blomsts geometri. Det er vortex matematik i 2D.' },
            { symbol:'△▽', name:'Merkaba / Davidsstjernen', text:'To interlagrede trekanter = 3+6 (W-aksen) møder hinanden. Merkaba er en roterende torus — et bevidsthedsfelt der roterer i modsat retning øverst og nederst.' },
            { symbol:'Φ', name:'Det Gyldne Snit', text:'Phi (1.618...) = summen af de to foregående i Fibonacci-sekvensen. Digital rod af Fibonacci: 1,1,2,3,5,8,4,3,7,1,8,9... — det er vortex mønstret! Phi er 9\'ernes fingeraftryk.' },
            { symbol:'⬡', name:'Bikagestrukturen', text:'Bier bygger sekskantet (6) geometri. 6 er W-aksen. Honeycomb er den mest energieffektive struktur i universet — bier har opdaget vortex matematikkens W-akse intuitivt.' },
          ].map(s => (
            <div key={s.name} className="vx-sacred-card">
              <span className="vx-sacred-symbol">{s.symbol}</span>
              <div>
                <div className="vx-sacred-name">{s.name}</div>
                <p className="vx-sacred-text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
