import React, { useState, useEffect } from 'react'
import { useUser } from '../UserContext'
import './Premium.css'

export default function Premium() {
  const { uuid, profile } = useUser()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState('monthly')
  const [promoCode, setPromoCode] = useState('')
  const [promoMsg, setPromoMsg] = useState(null)
  const [promoLoading, setPromoLoading] = useState(false)

  useEffect(() => {
    if (!uuid) return
    fetch(`/api/stripe/status/${uuid}`)
      .then(r => r.json())
      .then(d => setStatus(d))
      .catch(() => {})
  }, [uuid])

  async function redeemPromo() {
    if (!promoCode.trim()) return
    setPromoLoading(true)
    try {
      const r = await fetch('/api/promo/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: promoCode, uuid }),
      })
      const d = await r.json()
      setPromoMsg({ ok: d.valid, text: d.message })
      if (d.valid) setTimeout(() => window.location.reload(), 1500)
    } catch {
      setPromoMsg({ ok: false, text: 'Fejl — prøv igen' })
    }
    setPromoLoading(false)
  }

  async function startCheckout() {
    setLoading(true)
    try {
      const r = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid, plan }),
      })
      const d = await r.json()
      if (d.url) window.location.href = d.url
      else alert('Stripe ikke konfigureret endnu')
    } catch(e) {
      alert('Noget gik galt — prøv igen')
    }
    setLoading(false)
  }

  if (status?.premium) {
    return (
      <div className="pm-page">
        <div className="pm-active">
          <div className="pm-active-icon">✦</div>
          <h1 className="pm-active-title">Du er Premium</h1>
          <p className="pm-active-sub">
            {profile.displayName ? `${profile.displayName} · ` : ''}
            {status.plan === 'yearly' ? 'Årligt abonnement' : 'Månedligt abonnement'}
          </p>
          <div className="pm-active-perks">
            {['Alle kurser ulåst', 'AI Higher Self — ubegrænset', 'Eksklusive frekvenser', 'Nye sider før alle andre'].map(p => (
              <div key={p} className="pm-perk">✓ {p}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pm-page">

      <div className="pm-hero">
        <div className="pm-symbol">✦</div>
        <h1 className="pm-title">Stargate Premium</h1>
        <p className="pm-sub">Alt det systemet ikke vil have dig til at vide — samlet ét sted</p>
      </div>

      <div className="pm-trial-badge">3 DAGE GRATIS — ingen betaling nu</div>

      {/* Plan vælger */}
      <div className="pm-plans">
        <button
          className={`pm-plan ${plan === 'monthly' ? 'active' : ''}`}
          onClick={() => setPlan('monthly')}>
          <div className="pm-plan-name">Månedlig</div>
          <div className="pm-plan-price">49 kr<span>/md</span></div>
          <div className="pm-plan-note">Opsig når som helst</div>
        </button>
        <button
          className={`pm-plan ${plan === 'yearly' ? 'active' : ''}`}
          onClick={() => setPlan('yearly')}>
          <div className="pm-plan-badge">SPAR 32%</div>
          <div className="pm-plan-name">Årlig</div>
          <div className="pm-plan-price">399 kr<span>/år</span></div>
          <div className="pm-plan-note">Svarer til 33 kr/md</div>
        </button>
      </div>

      {/* Hvad får du */}
      <div className="pm-perks-box">
        {[
          { icon: '🌿', title: 'Verdens Bedste AI Natur-Doktor', desc: 'Baseret på tusinders år gammel helbredsviden fra Dr. Sebi, ayurveda og ancient medicine. Stil alle dine sundhedsspørgsmål — få svar som din egen personlige naturlæge' },
          { icon: '📱', title: 'Food Scanner — Se Sandheden', desc: 'Scan stregkoden på enhver fødevare. Få øjeblikkelig analyse af seed oils, E-numre, GMO og skjulte giftstoffer. Aldrig snydt igen' },
          { icon: '∿', title: '432 Hz Musik Konverter', desc: 'Konverter al din musik fra 440 Hz til den naturlige frekvens 432 Hz i realtid. Stream direkte eller download. Hør forskellen med det samme' },
          { icon: '◈', title: 'AI Higher Self Guide', desc: 'Ubegrænset dyb AI-samtale med din personlige åndelige guide. Numerologi, astro-kort, drømmetydning og bevidsthedsudforskning tilpasset præcis dig' },
          { icon: '🎓', title: 'Alt Indhold Ulåst', desc: 'Fuld adgang til alle sektioner — skjult historie, UAP/aliens, frimureri, Rothschild, antik medicin, hellige geometri og meget mere. Indhold der ikke findes andre steder' },
          { icon: '🔮', title: 'Eksklusivt Premium Indhold', desc: 'Nye afsnit og sektioner tilgængelige for premium-brugere dage før alle andre. Du er altid først' },
        ].map(p => (
          <div key={p.title} className="pm-perk-card">
            <span className="pm-perk-icon">{p.icon}</span>
            <div>
              <div className="pm-perk-title">{p.title}</div>
              <div className="pm-perk-desc">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="pm-cta" onClick={startCheckout} disabled={loading}>
        {loading ? 'Henter...' : `Start 3 dages gratis prøve →`}
      </button>

      <div className="pm-promo-box">
        <p className="pm-promo-label">🎟 Har du en adgangskode?</p>
        <div className="pm-promo-row">
          <input
            className="pm-promo-input"
            placeholder="Skriv kode her..."
            value={promoCode}
            onChange={e => setPromoCode(e.target.value.toUpperCase())}
            onKeyDown={e => e.key === 'Enter' && redeemPromo()}
          />
          <button className="pm-promo-btn" onClick={redeemPromo} disabled={promoLoading}>
            {promoLoading ? '...' : '→'}
          </button>
        </div>
        {promoMsg && (
          <p className={`pm-promo-msg ${promoMsg.ok ? 'ok' : 'err'}`}>{promoMsg.text}</p>
        )}
      </div>

      <div className="pm-payment-methods">
        <p className="pm-methods-label">Accepterede betalingsmetoder:</p>
        <div className="pm-methods-row">
          {['💳 Kort', '📱 MobilePay', '🍎 Apple Pay', 'G Google Pay', '🅿 PayPal'].map(m => (
            <span key={m} className="pm-method-badge">{m}</span>
          ))}
        </div>
      </div>

      <div className="pm-crypto-box">
        <p className="pm-crypto-label">₿ Betal med krypto</p>
        <p className="pm-crypto-desc">BTC · ETH · USDT · SOL og 200+ coins</p>
        <a href="https://commerce.coinbase.com/checkout/INDSÆT_CHECKOUT_ID"
           className="pm-crypto-btn" target="_blank" rel="noreferrer">
          Betal med krypto →
        </a>
      </div>

      <p className="pm-legal">Ingen betaling i prøveperioden · Opsig når som helst · Sikker betaling via Stripe</p>
    </div>
  )
}
