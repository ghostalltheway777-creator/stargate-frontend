import { useState, useEffect } from 'react'
import './MoonWidget.css'

export default function MoonWidget() {
  const [moon, setMoon] = useState(null)

  useEffect(() => {
    fetch('/api/moon').then(r => r.ok ? r.json() : null).then(d => d && setMoon(d))
  }, [])

  if (!moon) return null

  return (
    <div className="moon-widget">
      <div className="moon-phase-symbol" style={{ filter: `drop-shadow(0 0 10px ${moon.color}88)` }}>
        {moon.symbol}
      </div>
      <div className="moon-body">
        <div className="moon-name">{moon.phase}</div>
        <div className="moon-sign">☿ i {moon.sign} · {moon.illumination}% belyst</div>
        <div className="moon-energy">{moon.energy}</div>
      </div>
      <div className="moon-pct-ring">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(200,180,255,0.1)" strokeWidth="3"/>
          <circle cx="20" cy="20" r="16" fill="none" stroke={moon.color}
            strokeWidth="3" strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 16}`}
            strokeDashoffset={`${2 * Math.PI * 16 * (1 - moon.illumination / 100)}`}
            transform="rotate(-90 20 20)"
          />
        </svg>
      </div>
    </div>
  )
}
