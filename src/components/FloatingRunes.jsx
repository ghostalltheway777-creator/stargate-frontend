import { useMemo } from 'react'
import './FloatingRunes.css'

const SYMBOLS = ['Γ','Λ','Σ','Π','Δ','Ω','Φ','Θ','✦','⊕','◎','⊗','∞','☽','⬡','⊙','⋆','✧']

export default function FloatingRunes({ count = 12, color = 'rgba(212,168,67,0.06)' }) {
  const runes = useMemo(() => Array.from({ length: count }, (_, i) => ({
    symbol: SYMBOLS[i % SYMBOLS.length],
    left:   `${5 + (i * 73) % 90}%`,
    top:    `${10 + (i * 61) % 80}%`,
    size:   0.7 + (i % 4) * 0.22,
    delay:  `${(i * 1.3) % 6}s`,
    dur:    `${4 + (i % 5)}s`,
    anim:   `fr-sym rune-f${i % 3}`,
  })), [count])

  return (
    <div className="floating-runes-wrap">
      {runes.map((r, i) => (
        <span key={i} className={r.anim} style={{
          left: r.left, top: r.top,
          fontSize: `${r.size}rem`,
          color,
          animationDuration: r.dur,
          animationDelay: r.delay,
        }}>
          {r.symbol}
        </span>
      ))}
    </div>
  )
}
