import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../UserContext'
import { useTradition } from '../TraditionContext'
import './Profile.css'

const TRADITIONS = [
  'Spiritualitet', 'Islam', 'Sufisme', 'Kristendom', 'Gnosticisme',
  'Hinduisme', 'Buddhisme', 'Jødedom', 'Kabbalah', 'Sikhisme',
  'Hermetisme', 'Ingen specifik',
]

const DAY_COLORS = {
  1:'#e05050', 2:'#5080d0', 3:'#d4a843', 4:'#60a060',
  5:'#c070c0', 6:'#e08030', 7:'#9060c0', 8:'#d4a843',
  9:'#5090c0', 11:'#f0d070', 22:'#f0d070', 33:'#f0d070',
}

// ── Auth screen (not logged in) ───────────────────────────────────────────────
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''

function AuthScreen() {
  const { uuid, signupWithPin, loginWithPin, saveProfile } = useUser()
  const [mode, setMode] = useState('signup')  // 'signup' | 'login' | 'reset'
  const [name,      setName]      = useState('')
  const [pin,       setPin]       = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email,     setEmail]     = useState('')
  const [resetCode, setResetCode] = useState('')
  const [newPin,    setNewPin]    = useState('')
  const [resetStep, setResetStep] = useState(1)
  const [error,     setError]     = useState('')
  const [success,   setSuccess]   = useState('')
  const [loading,   setLoading]   = useState(false)

  async function handleSignup() {
    if (!name.trim())   return setError('Skriv et navn')
    if (pin.length < 4) return setError('PIN skal være 4 tegn')
    setLoading(true); setError('')
    try {
      await signupWithPin(name.trim(), pin, uuid)
      saveProfile({ displayName: name.trim(), birthdate }, pin)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  async function handleLogin() {
    if (!name.trim())   return setError('Skriv dit navn')
    if (pin.length < 4) return setError('PIN skal være 4 tegn')
    setLoading(true); setError('')
    try {
      await loginWithPin(name.trim(), pin)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  async function handleResetRequest() {
    if (!email.trim()) return setError('Skriv din email')
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/auth/reset-request', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ email: email.trim() })
      })
      if (!res.ok) { const d = await res.json(); throw new Error(d.detail) }
      setSuccess('Reset kode sendt til din email ✓')
      setResetStep(2)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  async function handleResetConfirm() {
    if (!resetCode.trim()) return setError('Skriv koden fra din email')
    if (newPin.length < 4) return setError('Ny PIN skal være 4 tegn')
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/auth/reset-confirm', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ email: email.trim(), code: resetCode.trim(), new_pin: newPin })
      })
      if (!res.ok) { const d = await res.json(); throw new Error(d.detail) }
      setSuccess('PIN nulstillet! Log ind med din nye kode ✓')
      setTimeout(() => { setMode('login'); setSuccess(''); setResetStep(1) }, 2000)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  async function handleGoogleLogin(googleResp) {
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ credential: googleResp.credential })
      })
      if (!res.ok) { const d = await res.json(); throw new Error(d.detail) }
      const data = await res.json()
      localStorage.setItem('sg_uuid', data.uuid)
      saveProfile({ displayName: data.display_name, email: data.email || '' })
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  React.useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return
    window.handleGoogleLoginCallback = handleGoogleLogin
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">✦</div>
        <h2 className="profile-name"><span style={{fontSize:'10px',letterSpacing:'3px',display:'block',opacity:0.7}}>P.R.O.J.E.C.T</span>STARGATE</h2>
        <p className="profile-tradition">Din spirituelle portal</p>
      </div>

      {GOOGLE_CLIENT_ID && (
        <div style={{padding:'0 0 0', display:'flex', flexDirection:'column', alignItems:'center', gap:'8px'}}>
          <div id="g_id_onload" data-client_id={GOOGLE_CLIENT_ID} data-callback="handleGoogleLoginCallback" data-auto_prompt="false" />
          <div className="g_id_signin" data-type="standard" data-size="large" data-theme="filled_black" data-text="continue_with" data-shape="pill" data-logo_alignment="left" data-width="300" />
          <div className="auth-divider"><span>eller brug PIN</span></div>
        </div>
      )}

      <div className="auth-tabs">
        <button className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
          onClick={() => { setMode('signup'); setError(''); setSuccess('') }}>Opret profil</button>
        <button className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
          onClick={() => { setMode('login'); setError(''); setSuccess('') }}>Log ind</button>
        <button className={`auth-tab ${mode === 'reset' ? 'active' : ''}`}
          onClick={() => { setMode('reset'); setError(''); setSuccess(''); setResetStep(1) }}>Glemt PIN</button>
      </div>

      <div className="profile-form card">
        {mode === 'signup' && (
          <>
            <p className="auth-desc">Vælg et kaldenavn og en 4-cifret PIN — du kan logge ind fra enhver enhed med disse.</p>
            <div className="pf-field">
              <label>Kaldenavn</label>
              <input placeholder="Hvad vil du hedde?" value={name} onChange={e => setName(e.target.value)} autoFocus />
            </div>
            <div className="pf-field">
              <label>Fødselsdato</label>
              <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
            </div>
            <div className="pf-field">
              <label>Email (til PIN-gendannelse)</label>
              <input type="email" placeholder="din@email.dk" value={email} onChange={e => setEmail(e.target.value)} />
              <span className="pf-hint">Bruges kun til at gendanne din PIN</span>
            </div>
            <div className="pf-field">
              <label>PIN-kode (4+ cifre)</label>
              <input type="password" inputMode="numeric" placeholder="••••"
                maxLength={8} value={pin} onChange={e => setPin(e.target.value.replace(/\D/g, ''))} />
            </div>
            {error && <p className="auth-error">{error}</p>}
            <button className="tt-btn" onClick={handleSignup} disabled={loading || !name.trim() || pin.length < 4}>
              {loading ? '...' : 'Opret min profil →'}
            </button>
          </>
        )}

        {mode === 'login' && (
          <>
            <p className="auth-desc">Log ind med dit kaldenavn og PIN.</p>
            <div className="pf-field">
              <label>Kaldenavn</label>
              <input placeholder="Dit navn" value={name} onChange={e => setName(e.target.value)} autoFocus />
            </div>
            <div className="pf-field">
              <label>PIN-kode</label>
              <input type="password" inputMode="numeric" placeholder="••••"
                maxLength={8} value={pin} onChange={e => setPin(e.target.value.replace(/\D/g, ''))} />
            </div>
            {error && <p className="auth-error">{error}</p>}
            <button className="tt-btn" onClick={handleLogin} disabled={loading || !name.trim() || pin.length < 4}>
              {loading ? '...' : 'Log ind →'}
            </button>
            <button className="auth-link-btn" onClick={() => { setMode('reset'); setError('') }}>
              Glemt din PIN?
            </button>
          </>
        )}

        {mode === 'reset' && resetStep === 1 && (
          <>
            <p className="auth-desc">Skriv den email du oprettede din profil med — vi sender en reset kode.</p>
            <div className="pf-field">
              <label>Email</label>
              <input type="email" placeholder="din@email.dk" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
            </div>
            {error && <p className="auth-error">{error}</p>}
            {success && <p className="auth-success">{success}</p>}
            <button className="tt-btn" onClick={handleResetRequest} disabled={loading || !email.trim()}>
              {loading ? '...' : 'Send reset kode →'}
            </button>
          </>
        )}

        {mode === 'reset' && resetStep === 2 && (
          <>
            <p className="auth-desc">Tjek din email og skriv koden herunder.</p>
            {success && <p className="auth-success">{success}</p>}
            <div className="pf-field">
              <label>Reset kode (6 cifre)</label>
              <input inputMode="numeric" placeholder="123456" maxLength={6}
                value={resetCode} onChange={e => setResetCode(e.target.value.replace(/\D/g, ''))} autoFocus />
            </div>
            <div className="pf-field">
              <label>Ny PIN-kode</label>
              <input type="password" inputMode="numeric" placeholder="••••"
                maxLength={8} value={newPin} onChange={e => setNewPin(e.target.value.replace(/\D/g, ''))} />
            </div>
            {error && <p className="auth-error">{error}</p>}
            <button className="tt-btn" onClick={handleResetConfirm} disabled={loading || resetCode.length < 6 || newPin.length < 4}>
              {loading ? '...' : 'Nulstil PIN →'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ── Profile screen (logged in) ────────────────────────────────────────────────
export default function Profile() {
  const nav = useNavigate()
  const { uuid, profile, saveProfile, personalDay, isSetup, logout, isPremium } = useUser()
  const { choose } = useTradition()

  const [form, setForm] = useState({
    displayName: profile.displayName || '',
    birthdate:   profile.birthdate   || '',
    city:        profile.city        || 'Copenhagen',
    nation:      profile.nation      || 'DK',
    tradition:   profile.tradition   || '',
    email:       profile.email       || '',
  })

  React.useEffect(() => {
    if (profile.displayName) {
      setForm(f => ({
        ...f,
        displayName: profile.displayName,
        birthdate:   profile.birthdate   || f.birthdate,
        tradition:   profile.tradition   || f.tradition,
      }))
    }
  }, [profile.displayName])
  const [newPin,   setNewPin]   = useState('')
  const [saved,    setSaved]    = useState(false)
  const [showLogout, setShowLogout] = useState(false)

  if (!isSetup) return <AuthScreen />

  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  function handleSave() {
    saveProfile(form, newPin || undefined)
    if (form.tradition) choose(form.tradition)
    setNewPin('')
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const dayColor = personalDay ? (DAY_COLORS[personalDay.number] || '#d4a843') : '#d4a843'

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div className="profile-avatar">
          {(form.displayName?.[0] || profile.displayName?.[0] || '✦').toUpperCase()}
        </div>
        <h2 className="profile-name">{form.displayName}</h2>
        {form.tradition && <p className="profile-tradition">{form.tradition}</p>}
      </div>

      {personalDay && (
        <div className="personal-day-card" style={{ borderColor: dayColor + '80', background: dayColor + '10' }}>
          <div className="pd-number" style={{ color: dayColor }}>
            {personalDay.number}{personalDay.is_master ? ' ⚡' : ''}
          </div>
          <div className="pd-content">
            <div className="pd-label">Dit personlige tal i dag</div>
            <div className="pd-name" style={{ color: dayColor }}>{personalDay.name}</div>
            <div className="pd-desc">{personalDay.description}</div>
          </div>
        </div>
      )}

      <div className="profile-form card">
        <h3 className="profile-section-title">Din information</h3>

        <div className="pf-field">
          <label>Kaldenavn / visningsnavn</label>
          <input placeholder="Hvad vil du hedde i fællesskabet?"
            value={form.displayName} onChange={e => set('displayName', e.target.value)} />
        </div>

        <div className="pf-row">
          <div className="pf-field">
            <label>Fødselsdato</label>
            <input type="date" value={form.birthdate}
              onChange={e => set('birthdate', e.target.value)} />
          </div>
          <div className="pf-field">
            <label>Fødeby (engelsk)</label>
            <input placeholder="Copenhagen" value={form.city}
              onChange={e => set('city', e.target.value)} />
          </div>
          <div className="pf-field pf-field-xs">
            <label>Land</label>
            <input placeholder="DK" maxLength={2} value={form.nation}
              onChange={e => set('nation', e.target.value.toUpperCase())} />
          </div>
        </div>

        <div className="pf-field">
          <label>Din spirituelle tradition</label>
          <div className="pf-tradition-pills">
            {TRADITIONS.map(t => (
              <button key={t}
                className={`pf-trad-pill ${form.tradition === t ? 'active' : ''}`}
                onClick={() => set('tradition', form.tradition === t ? '' : t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="pf-field">
          <label>Email (til push-notifikation)</label>
          <input type="email" placeholder="din@email.dk" value={form.email}
            onChange={e => set('email', e.target.value)} />
          <span className="pf-hint">Valgfrit — kun til personlige påmindelser</span>
        </div>

        <div className="pf-field">
          <label>Ny PIN-kode (lad stå tom for at beholde)</label>
          <input type="password" inputMode="numeric" placeholder="••••"
            maxLength={8} value={newPin}
            onChange={e => setNewPin(e.target.value.replace(/\D/g, ''))} />
        </div>

        <button className="tt-btn" onClick={handleSave}
          disabled={!form.displayName || !form.birthdate}>
          {saved ? '✓ Gemt!' : '💾 Gem profil'}
        </button>
      </div>

      <div className="profile-login-info">
        <span>Log ind på anden enhed:</span>
        <strong>{form.displayName}</strong> + din PIN
      </div>

      {/* Premium knap */}
      {isPremium ? (
        <div className="profile-premium-active">
          <span>✦</span> Stargate Premium aktiv
        </div>
      ) : (
        <button className="profile-premium-btn" onClick={() => nav('/premium')}>
          ✦ Oplås Premium — 3 dage gratis →
        </button>
      )}

      {/* Referral */}
      <div className="profile-referral-box">
        <div className="profile-referral-title">✦ Del Stargate — få 1 måned gratis</div>
        <p className="profile-referral-desc">Når en ven tilmelder sig via dit link og starter en prøveperiode — får I begge 1 måneds gratis adgang.</p>
        <button className="profile-referral-btn" onClick={() => {
          const link = `https://project-stargate.uk?ref=${uuid}`
          if (navigator.share) {
            navigator.share({ title: 'Project Stargate', text: '✦ Oplev det appen techgiganter ikke vil have dig til at se', url: link })
          } else {
            navigator.clipboard.writeText(link)
            alert('Link kopieret!')
          }
        }}>
          ↗ Del dit referral link
        </button>
      </div>

      <div className="profile-logout-wrap">
        {!showLogout ? (
          <button className="profile-logout-btn" onClick={() => setShowLogout(true)}>
            Log ud / skift konto
          </button>
        ) : (
          <div className="profile-logout-confirm">
            <p>Er du sikker? Din lokale session slettes.</p>
            <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center' }}>
              <button className="comm-cancel-btn" onClick={() => setShowLogout(false)}>Annuller</button>
              <button className="comm-post-btn" onClick={logout}>Log ud</button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
