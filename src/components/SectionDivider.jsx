import './SectionDivider.css'

const RUNES = ['Γ','Λ','Σ','Π','Δ','Ω','Φ','Θ','Ξ','Ψ','α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ']
const GLYPHS = ['✦','⊕','⊗','◎','⬡','∞','☽','⚛','☥','⊙','◈','✧','⋆','✵']

export default function SectionDivider({ variant = 'default', label = null }) {
  const symbols = variant === 'rune' ? RUNES : GLYPHS

  return (
    <div className={`sect-divider sect-divider--${variant}`}>
      <div className="sd-line sd-line-left" />
      <div className="sd-center">
        {[0,1,2].map(i => (
          <span key={i} className="sd-glyph" style={{ animationDelay: `${i * 0.8}s` }}>
            {symbols[i * 7 % symbols.length]}
          </span>
        ))}
        {label && <span className="sd-label">{label}</span>}
        {[3,4,5].map(i => (
          <span key={i} className="sd-glyph" style={{ animationDelay: `${i * 0.8}s` }}>
            {symbols[i * 5 % symbols.length]}
          </span>
        ))}
      </div>
      <div className="sd-line sd-line-right" />
    </div>
  )
}
