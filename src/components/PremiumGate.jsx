import React, { useState } from 'react'
import './PremiumGate.css'

const SESSION_KEY = 'sg_session'
function getSession() {
  let s = localStorage.getItem(SESSION_KEY)
  if (!s) { s = 'user_' + Math.random().toString(36).slice(2); localStorage.setItem(SESSION_KEY, s) }
  return s
}

export default function PremiumGate({ chapter }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function goStripe() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: getSession() }),
      })
      const d = await res.json()
      if (d.url) {
        window.location.href = d.url
      } else {
        setError('Kunne ikke starte betaling')
      }
    } catch {
      setError('Stripe ikke konfigureret endnu — kontakt os.')
    }
    setLoading(false)
  }

  return (
    <div className="premium-gate card">
      <div className="pg-icon">✦</div>
      <h3 className="pg-title">Stargate Premium</h3>
      <p className="pg-desc">
        Kapitel {chapter} og alle avancerede kapitler kræver Stargate Premium.
      </p>

      <div className="pg-plans">
        <div className="pg-plan featured">
          <div className="pg-plan-name">Månedlig</div>
          <div className="pg-plan-price">49 <span>kr/md</span></div>
          <div className="pg-plan-note">Afmeld når som helst</div>
        </div>
        <div className="pg-plan">
          <div className="pg-plan-name">Årlig</div>
          <div className="pg-plan-price">399 <span>kr/år</span></div>
          <div className="pg-plan-note">Spar 33%</div>
        </div>
        <div className="pg-plan">
          <div className="pg-plan-name">Livstid</div>
          <div className="pg-plan-price">799 <span>kr</span></div>
          <div className="pg-plan-note">Betal én gang</div>
        </div>
      </div>

      <div className="pg-features">
        <div className="pg-feature">✓ Alle 16 kursuskapitler</div>
        <div className="pg-feature">✓ Ubegrænset søgning & dekodning</div>
        <div className="pg-feature">✓ Personlig studieplan</div>
        <div className="pg-feature">✓ Torah vs Talmud dybdeanalyse</div>
        <div className="pg-feature">✓ Oldtidens rødder — alle begreber</div>
      </div>

      {error && <p className="pg-error">{error}</p>}

      <button className="pg-btn" onClick={goStripe} disabled={loading}>
        {loading ? <><span className="spinner" /> Åbner betaling...</> : '✦ Få adgang nu'}
      </button>
    </div>
  )
}
