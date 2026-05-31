import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTradition } from '../TraditionContext'
import { useUser } from '../UserContext'
import './Onboarding.css'

const TRADITIONS = [
  { id: 'Islam',           icon: '☽',  color: '#50a080' },
  { id: 'Kristendom',      icon: '✝',  color: '#5080d0' },
  { id: 'Hinduisme',       icon: '🕉', color: '#d06030' },
  { id: 'Buddhisme',       icon: '☸',  color: '#d4a843' },
  { id: 'Jødedom',         icon: '✡',  color: '#6090c0' },
  { id: 'Kabbalah',        icon: '⬡',  color: '#9060d0' },
  { id: 'Sufisme',         icon: '✦',  color: '#50b0a0' },
  { id: 'Gnosticisme',     icon: '⊕',  color: '#c060a0' },
  { id: 'Hermetisme',      icon: '☿',  color: '#c0a040' },
  { id: 'Nordisk',         icon: 'Ω',  color: '#6080c0' },
  { id: 'Ingen specifik',  icon: '◎',  color: '#808080' },
]

export default function Onboarding({ onDone }) {
  const [step, setStep]           = useState(1)
  const [tradition, setTradition] = useState('')
  const [name, setName]           = useState('')
  const [pin, setPin]             = useState('')
  const [email, setEmail]         = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [error, setError]         = useState('')
  const [loading, setLoading]     = useState(false)
  const [loginMode, setLoginMode] = useState(false)
  const { choose } = useTradition()
  const { uuid, signupWithPin, loginWithPin, saveProfile } = useUser()
  const nav = useNavigate()

  function skipOnboarding() {
    localStorage.setItem('sg_onboarded', '1')
    onDone()
  }

  async function handleCreateProfile() {
    if (!name.trim()) return setError('Skriv et navn')
    if (pin.length < 4) return setError('PIN skal være mindst 4 cifre')
    setLoading(true); setError('')
    try {
      await signupWithPin(name.trim(), pin, uuid)
      saveProfile({ displayName: name.trim(), birthdate, email }, pin)
      if (tradition) choose(tradition)
      localStorage.setItem('sg_onboarded', '1')
      setStep(3)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  async function handleLogin() {
    if (!name.trim()) return setError('Skriv dit navn')
    if (pin.length < 4) return setError('PIN skal være mindst 4 cifre')
    setLoading(true); setError('')
    try {
      await loginWithPin(name.trim(), pin)
      if (tradition) choose(tradition)
      localStorage.setItem('sg_onboarded', '1')
      setStep(3)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  function skipProfile() {
    if (tradition) choose(tradition)
    localStorage.setItem('sg_onboarded', '1')
    setStep(3)
  }

  return (
    <div className="ob-overlay">
      <div className="ob-modal">

        {/* STEP 1 — Tradition */}
        {step === 1 && (
          <>
            <div className="ob-header">
              <div className="ob-star">✦</div>
              <h2 className="ob-title">Velkommen til Stargate</h2>
              <p className="ob-sub">Porten fra 3D til 5D bevidsthed</p>
            </div>
            <p className="ob-question">Hvad er din spirituelle baggrund?</p>
            <div className="ob-traditions">
              {TRADITIONS.map(t => (
                <button key={t.id}
                  className={`ob-trad ${tradition === t.id ? 'active' : ''}`}
                  style={tradition === t.id ? {'--tc': t.color} : {}}
                  onClick={() => setTradition(t.id)}>
                  <span className="ob-trad-icon">{t.icon}</span>
                  <span className="ob-trad-name">{t.id}</span>
                </button>
              ))}
            </div>
            <button className="ob-btn" onClick={() => setStep(2)}>
              {tradition ? `Fortsæt med ${tradition} →` : 'Fortsæt →'}
            </button>
            <button className="ob-skip" onClick={() => setStep(2)}>Spring over</button>
          </>
        )}

        {/* STEP 2 — Profil */}
        {step === 2 && (
          <>
            <div className="ob-header">
              <div className="ob-star">◎</div>
              <h2 className="ob-title">{loginMode ? 'Log ind' : 'Opret din profil'}</h2>
              <p className="ob-sub">Log ind fra enhver enhed med navn + PIN</p>
            </div>
            <div className="auth-tabs" style={{marginBottom:'16px'}}>
              <button className={`auth-tab ${!loginMode ? 'active' : ''}`} onClick={() => { setLoginMode(false); setError('') }}>Opret profil</button>
              <button className={`auth-tab ${loginMode ? 'active' : ''}`} onClick={() => { setLoginMode(true); setError('') }}>Log ind</button>
            </div>
            <div className="ob-field">
              <label>Kaldenavn</label>
              <input placeholder={loginMode ? 'Dit navn' : 'Hvad vil du hedde?'} value={name}
                onChange={e => setName(e.target.value)} autoFocus />
            </div>
            <div className="ob-field">
              <label>PIN-kode</label>
              <input type="password" inputMode="numeric" placeholder="••••"
                maxLength={8} value={pin}
                onChange={e => setPin(e.target.value.replace(/\D/g, ''))} />
            </div>
            {!loginMode && (
              <>
                <div className="ob-field">
                  <label>Email <span className="ob-optional">(til PIN-gendannelse)</span></label>
                  <input type="email" placeholder="din@email.dk" value={email}
                    onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="ob-field">
                  <label>Fødselsdato <span className="ob-optional">(til personligt tal)</span></label>
                  <input type="date" value={birthdate}
                    onChange={e => setBirthdate(e.target.value)} />
                </div>
              </>
            )}
            {error && <p className="ob-error">{error}</p>}
            <button className="ob-btn" onClick={loginMode ? handleLogin : handleCreateProfile}
              disabled={loading || !name.trim() || pin.length < 4}>
              {loading ? '...' : loginMode ? 'Log ind →' : 'Opret profil →'}
            </button>
            <button className="ob-skip" onClick={skipProfile}>Spring over — udforsk uden profil</button>
          </>
        )}

        {/* STEP 3 — Start prøveperiode */}
        {step === 3 && (
          <>
            <div className="ob-header">
              <div className="ob-star" style={{fontSize:'40px'}}>🔓</div>
              <h2 className="ob-title">Alt er klar</h2>
              <p className="ob-sub">{name ? `Hej ${name} — ` : ''}din rejse begynder nu</p>
            </div>
            <div className="ob-trial-box">
              <div className="ob-trial-title">✦ 3 dages gratis prøveperiode</div>
              <div className="ob-trial-items">
                {[
                  '53 hellige skrifter fra 17 traditioner',
                  'AI-fortolkning af symboler og drømme',
                  'CIA declassified dokumenter',
                  'Fødselskort + numerologi',
                  'Pjotr Garjajev DNA-forskning',
                  'Project 2045 — digital udødelighed',
                ].map(f => <div key={f} className="ob-trial-item">✦ {f}</div>)}
              </div>
              <p className="ob-trial-note">Ingen kortoplysninger nødvendig med promo kode: <strong>ASWITHINSOWITHOUTT</strong></p>
            </div>
            <button className="ob-btn gold" onClick={() => { onDone(); nav('/premium') }}>
              ✦ Start 3 dages gratis prøve →
            </button>
            <button className="ob-skip" onClick={() => { onDone() }}>Udforsk gratis indhold først</button>
          </>
        )}

        <div className="ob-steps">
          {[1,2,3].map(s => (
            <div key={s} className={`ob-step-dot ${step >= s ? 'active' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
