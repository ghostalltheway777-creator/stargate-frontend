import React, { useState, useEffect } from 'react'
import { useAccessibility, LANGUAGES } from '../AccessibilityContext'
import './AccessibilityPanel.css'

const SESSION_KEY = 'sg_session'
function getSession() {
  let s = localStorage.getItem(SESSION_KEY)
  if (!s) { s = 'user_' + Math.random().toString(36).slice(2); localStorage.setItem(SESSION_KEY, s) }
  return s
}

function usePushSubscription() {
  const [subscribed, setSubscribed] = useState(false)
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    setSupported('serviceWorker' in navigator && 'PushManager' in window)
    setSubscribed(localStorage.getItem('sg_push') === '1')
  }, [])

  async function subscribe() {
    try {
      const keyRes = await fetch('/api/push/vapid-key')
      const { key } = await keyRes.json()
      const reg = await navigator.serviceWorker.ready
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: key,
      })
      await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: getSession(), subscription: sub.toJSON() }),
      })
      localStorage.setItem('sg_push', '1')
      setSubscribed(true)
    } catch (e) { console.error('Push subscribe:', e) }
  }

  return { subscribed, supported, subscribe }
}

export default function AccessibilityPanel({ onClose }) {
  const { settings, update } = useAccessibility()
  const { subscribed, supported, subscribe } = usePushSubscription()

  return (
    <div className="a11y-panel">
      <div className="a11y-header">
        <h3 className="a11y-title">⚙ Tilgængelighed & Sprog</h3>
        <button className="a11y-close" onClick={onClose}>✕</button>
      </div>

      {/* Sprog */}
      <div className="a11y-section">
        <p className="a11y-label">Sprog (AI + Oplæsning)</p>
        <div className="lang-grid">
          {LANGUAGES.map(l => (
            <button key={l.code}
              className={`lang-btn ${settings.language === l.code ? 'active' : ''}`}
              onClick={() => update({ language: l.code })}>
              <span className="lang-flag">{l.flag}</span>
              <span className="lang-name">{l.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Ordblind-tilstand */}
      <div className="a11y-section">
        <p className="a11y-label">Ordblind-tilstand</p>
        <button
          className={`toggle-btn ${settings.dyslexia ? 'on' : ''}`}
          onClick={() => update({ dyslexia: !settings.dyslexia })}>
          <span className="toggle-track">
            <span className="toggle-thumb" />
          </span>
          <span className="toggle-label">
            {settings.dyslexia ? 'Slået til — OpenDyslexic skrift' : 'Slå til'}
          </span>
        </button>
        {settings.dyslexia && (
          <p className="a11y-hint">Bruger ordblind-venlig skrift, større afstand og varmere baggrund</p>
        )}
      </div>

      {/* Skriftstørrelse */}
      <div className="a11y-section">
        <p className="a11y-label">Skriftstørrelse</p>
        <div className="size-row">
          {[
            { val: 'normal', label: 'Normal' },
            { val: 'large',  label: 'Stor' },
            { val: 'xlarge', label: 'Meget stor' },
          ].map(s => (
            <button key={s.val}
              className={`size-btn ${settings.fontSize === s.val ? 'active' : ''}`}
              onClick={() => update({ fontSize: s.val })}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* TTS hastighed */}
      <div className="a11y-section">
        <p className="a11y-label">Oplæsningshastighed: {settings.ttsSpeed}×</p>
        <input
          type="range" min="0.5" max="2" step="0.1"
          value={settings.ttsSpeed}
          onChange={e => update({ ttsSpeed: parseFloat(e.target.value) })}
          className="speed-slider"
        />
        <div className="speed-labels">
          <span>Langsom</span><span>Normal</span><span>Hurtig</span>
        </div>
      </div>

      {/* Push notifikationer */}
      {supported && (
        <div className="a11y-section">
          <p className="a11y-label">Daglig Visdom</p>
          {subscribed ? (
            <div className="push-active">
              <span className="push-dot" /> Daglig visdomsbesked aktiveret
            </div>
          ) : (
            <button className="push-btn" onClick={subscribe}>
              🔔 Modtag daglig visdomsbesked
            </button>
          )}
          <p className="a11y-hint">Én kort visdom om morgenen fra en tilfældig tradition</p>
        </div>
      )}
    </div>
  )
}
