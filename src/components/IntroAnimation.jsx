import React, { useEffect, useState, useRef } from 'react'
import './IntroAnimation.css'

const N = 9
const CX = 200, CY = 200
const OUTER_R   = 182
const RING_MID  = 158
const INNER_R   = 134
const PORTAL_R  = 128
const GLYPH_R   = 146

const GLYPHS = ['ψ','Ω','Φ','Θ','Ξ','Δ','Λ','Σ','Π','Γ','⊕','⊗','◎','✦','◆','▲','⊙','∞','⬡','◈','☥','✺']
const SUBTITLE = {
  da: 'Den sande ånd og kerne af al religion  ·  Velkommen til Awareness',
  en: 'The true spirit and core of all religion  ·  Welcome to Awareness',
  de: 'Der wahre Geist und Kern aller Religion  ·  Willkommen bei Awareness',
  fr: "L'esprit véritable de toute religion  ·  Bienvenue à Awareness",
  es: 'El verdadero espíritu de toda religión  ·  Bienvenido a Awareness',
  ar: 'الروح الحقيقية لكل الأديان  ·  أهلاً بك في Awareness',
  nl: 'De ware geest van alle religie  ·  Welkom bij Awareness',
  no: 'Den sanne ånd og kjerne av all religion  ·  Velkommen til Awareness',
  sv: 'Den sanna andan i all religion  ·  Välkommen till Awareness',
}
const COUNTRY_LANG = {
  DK:'da', NO:'no', SE:'sv', DE:'de', AT:'de', CH:'de',
  FR:'fr', BE:'fr', ES:'es', MX:'es', AR:'es', CO:'es',
  NL:'nl', SA:'ar', EG:'ar', AE:'ar', MA:'ar',
  US:'en', GB:'en', AU:'en', CA:'en', NZ:'en', IE:'en',
}

function chevronPath(i, size = 1) {
  const angle = (i * 360 / N - 90) * Math.PI / 180
  const perp  = angle + Math.PI / 2
  const cos   = Math.cos, sin = Math.sin

  // Tip at outer edge
  const tx = CX + (OUTER_R + 6) * cos(angle)
  const ty = CY + (OUTER_R + 6) * sin(angle)
  // Shoulder
  const sh = 11 * size
  const sd = 14 * size
  const slx = CX + (RING_MID + 12) * cos(angle) + sh * cos(perp)
  const sly = CY + (RING_MID + 12) * sin(angle) + sh * sin(perp)
  const srx = CX + (RING_MID + 12) * cos(angle) - sh * cos(perp)
  const sry = CY + (RING_MID + 12) * sin(angle) - sh * sin(perp)
  // Base
  const blx = CX + (INNER_R + 4) * cos(angle) + sd * cos(perp)
  const bly = CY + (INNER_R + 4) * sin(angle) + sd * sin(perp)
  const brx = CX + (INNER_R + 4) * cos(angle) - sd * cos(perp)
  const bry = CY + (INNER_R + 4) * sin(angle) - sd * sin(perp)

  return `M${tx},${ty} L${slx},${sly} L${blx},${bly} L${brx},${bry} L${srx},${sry} Z`
}

function crystalPos(i) {
  const angle = (i * 360 / N - 90) * Math.PI / 180
  return {
    x: CX + (OUTER_R - 4) * Math.cos(angle),
    y: CY + (OUTER_R - 4) * Math.sin(angle),
  }
}

async function detectLang() {
  try {
    const r = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(2500) })
    const { country_code } = await r.json()
    return COUNTRY_LANG[country_code] || navigator.language?.slice(0, 2) || 'da'
  } catch {
    return navigator.language?.slice(0, 2) || 'da'
  }
}

export default function IntroAnimation({ onDone }) {
  const [phase,       setPhase]       = useState('appear')
  const [locked,      setLocked]      = useState(0)
  const [innerRot,    setInnerRot]    = useState(0)
  const [kawoosh,     setKawoosh]     = useState(false)
  const [showText,    setShowText]    = useState(false)
  const [fading,      setFading]      = useState(false)
  const [lang,        setLang]        = useState('da')
  const rotRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => { detectLang().then(setLang) }, [])

  // Spil 5D intro lyd ved opstart
  useEffect(() => {
    const audio = new Audio('/5d-intro.mp3')
    audio.volume = 0.8
    const tryPlay = () => audio.play().catch(() => {})
    tryPlay()
    document.addEventListener('click', tryPlay, { once: true })
    return () => { audio.pause(); audio.src = ''; document.removeEventListener('click', tryPlay) }
  }, [])

  // Spinning inner ring animation
  useEffect(() => {
    if (phase === 'fade' || phase === 'appear') return
    const speed = phase === 'chevrons' ? 1.8 : 0.3
    function tick() {
      rotRef.current = (rotRef.current + speed) % 360
      setInnerRot(rotRef.current)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [phase])

  useEffect(() => {
    const ts = []
    // Ring appears
    ts.push(setTimeout(() => setPhase('chevrons'), 900))

    // Lock chevrons one by one (spin fast, then stop & lock)
    for (let i = 0; i < N; i++) {
      ts.push(setTimeout(() => setLocked(i + 1), 900 + i * 420))
    }

    // Kawoosh
    ts.push(setTimeout(() => {
      setKawoosh(true)
      setPhase('kawoosh')
    }, 900 + N * 420 + 200))

    // Text
    ts.push(setTimeout(() => setShowText(true), 900 + N * 420 + 1000))

    // Fade
    ts.push(setTimeout(() => { setFading(true); setPhase('fade') }, 900 + N * 420 + 7000))

    // Done — varer 25 sekunder total (matcher 5D intro lyden)
    ts.push(setTimeout(onDone, 25000))

    return () => ts.forEach(clearTimeout)
  }, [])

  const subtitle = SUBTITLE[lang] || SUBTITLE.da

  return (
    <div className={`intro-overlay ${fading ? 'fading' : ''}`}>

      {/* Stars */}
      <div className="intro-stars">
        {[...Array(80)].map((_, i) => (
          <div key={i} className="intro-star"
            style={{
              left:  `${Math.random() * 100}%`,
              top:   `${Math.random() * 100}%`,
              width:  `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }} />
        ))}
      </div>

      {/* Gate SVG */}
      <div className={`intro-gate ${phase !== 'appear' ? 'gate-ready' : ''}`}>
        <svg viewBox="0 0 400 400" width="min(360px, 90vw)" height="min(360px, 90vw)">
          <defs>
            {/* Metallic gold gradient */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#8B6914" />
              <stop offset="25%"  stopColor="#D4A843" />
              <stop offset="50%"  stopColor="#FFE480" />
              <stop offset="75%"  stopColor="#C8961E" />
              <stop offset="100%" stopColor="#8B6914" />
            </linearGradient>

            {/* Portal gradient */}
            <radialGradient id="portalGrad" cx="50%" cy="40%">
              <stop offset="0%"   stopColor="#c8f0ff" stopOpacity="1" />
              <stop offset="20%"  stopColor="#60d0ff" stopOpacity="0.95" />
              <stop offset="50%"  stopColor="#0090d8" stopOpacity="0.9" />
              <stop offset="80%"  stopColor="#003878" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#000c28" stopOpacity="1" />
            </radialGradient>

            {/* Outer glow filter */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="chevGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="portalGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>

            {/* Clip for portal */}
            <clipPath id="portalClip">
              <circle cx={CX} cy={CY} r={PORTAL_R} />
            </clipPath>
          </defs>

          {/* ── Outer glow halo ── */}
          <circle cx={CX} cy={CY} r={OUTER_R + 20}
            fill="none" stroke="rgba(212,168,67,0.08)" strokeWidth="40" />
          <circle cx={CX} cy={CY} r={OUTER_R + 10}
            fill="none" stroke="rgba(212,168,67,0.14)" strokeWidth="20" />

          {/* ── Portal interior ── */}
          <circle cx={CX} cy={CY} r={PORTAL_R}
            fill={kawoosh ? 'url(#portalGrad)' : '#000810'} />

          {/* ── Kawoosh wave rings ── */}
          {kawoosh && [0,1,2,3,4].map(i => (
            <circle key={i} cx={CX} cy={CY} r={18 + i * 26}
              fill="none" stroke={`rgba(${180-i*20},${230},${255},${0.5-i*0.08})`}
              strokeWidth={3.5 - i * 0.5}
              className={`kawoosh-ring kr${i}`}
              clipPath="url(#portalClip)" />
          ))}

          {/* ── Spinning inner ring with glyphs ── */}
          <g transform={`rotate(${innerRot}, ${CX}, ${CY})`}>
            <circle cx={CX} cy={CY} r={GLYPH_R}
              fill="none" stroke="rgba(180,140,30,0.5)" strokeWidth="14" />
            {[...Array(22)].map((_, i) => {
              const a = (i * 360 / 22) * Math.PI / 180
              return (
                <text key={i}
                  x={CX + GLYPH_R * Math.cos(a)}
                  y={CY + GLYPH_R * Math.sin(a)}
                  textAnchor="middle" dominantBaseline="central"
                  fontSize="9" fill="rgba(212,168,67,0.7)"
                  transform={`rotate(${i * 360/22 + 90}, ${CX + GLYPH_R*Math.cos(a)}, ${CY + GLYPH_R*Math.sin(a)})`}>
                  {GLYPHS[i % GLYPHS.length]}
                </text>
              )
            })}
          </g>

          {/* ── Main outer ring (gold) ── */}
          <circle cx={CX} cy={CY} r={RING_MID}
            fill="none" stroke="url(#goldGrad)" strokeWidth={RING_MID - INNER_R + 2}
            filter="url(#goldGlow)" />

          {/* ── Ring edge highlights ── */}
          <circle cx={CX} cy={CY} r={OUTER_R - 2}
            fill="none" stroke="rgba(255,235,150,0.35)" strokeWidth="2" />
          <circle cx={CX} cy={CY} r={INNER_R + 2}
            fill="none" stroke="rgba(80,50,0,0.8)" strokeWidth="3" />
          <circle cx={CX} cy={CY} r={INNER_R - 1}
            fill="none" stroke="rgba(255,235,150,0.2)" strokeWidth="1.5" />

          {/* ── Chevrons (unlocked — dark) ── */}
          {[...Array(N)].map((_, i) => i >= locked && (
            <path key={i} d={chevronPath(i)}
              fill="rgba(60,45,10,0.9)"
              stroke="rgba(120,90,20,0.6)" strokeWidth="1" />
          ))}

          {/* ── Chevrons (locked — glowing gold) ── */}
          {[...Array(N)].map((_, i) => i < locked && (
            <g key={i}>
              {/* Glow layer */}
              <path d={chevronPath(i)}
                fill="rgba(255,160,30,0.25)"
                filter="url(#chevGlow)" />
              {/* Main body */}
              <path d={chevronPath(i)}
                fill="url(#goldGrad)"
                stroke="rgba(255,220,80,0.6)" strokeWidth="1" />
              {/* Crystal tip */}
              <circle cx={crystalPos(i).x} cy={crystalPos(i).y} r="5"
                fill="#ff8800" filter="url(#chevGlow)" className="crystal-pulse" />
              <circle cx={crystalPos(i).x} cy={crystalPos(i).y} r="3"
                fill="#ffdd00" />
            </g>
          ))}

          {/* ── Center star (shows after kawoosh) ── */}
          {kawoosh && (
            <g className="center-star-group">
              {[...Array(8)].map((_, i) => {
                const a1 = (i * 45 - 90) * Math.PI / 180
                const a2 = (i * 45 + 22.5 - 90) * Math.PI / 180
                return null
              })}
              <polygon
                points={[...Array(8)].flatMap((_, i) => {
                  const a1 = (i*45-90)*Math.PI/180, a2=(i*45+22.5-90)*Math.PI/180
                  return [
                    `${CX+20*Math.cos(a1)},${CY+20*Math.sin(a1)}`,
                    `${CX+8 *Math.cos(a2)},${CY+8 *Math.sin(a2)}`,
                  ]
                }).join(' ')}
                fill="rgba(255,248,210,0.95)"
                filter="url(#chevGlow)"
                className="center-star" />
              <circle cx={CX} cy={CY} r="5" fill="white" />
            </g>
          )}
        </svg>
      </div>

      {/* Kawoosh flash overlay */}
      {kawoosh && <div className="kawoosh-flash" />}

      {/* Text */}
      <div className={`intro-text ${showText ? 'visible' : ''}`}>
        <div className="intro-projekt">P · R · O · J · E · C · T</div>
        <div className="intro-stargate">STARGATE</div>
        <div className="intro-subtitle" lang={lang}>{subtitle}</div>
      </div>

      <button className="intro-skip" onClick={onDone}>
        {lang === 'da' || lang === 'no' ? 'Spring over' : lang === 'de' ? 'Überspringen' : lang === 'fr' ? 'Passer' : lang === 'es' ? 'Saltar' : lang === 'ar' ? 'تخطى' : 'Skip'} ›
      </button>
    </div>
  )
}
