import { useState, useRef, useEffect } from 'react'
import { useUser } from '../UserContext'
import './HigherSelf.css'

const STARTERS = [
  'Hvad er formålet med mit liv?',
  'Hvad holder mig tilbage fra min sande natur?',
  'Hvad forsøger universet at fortælle mig lige nu?',
  'Hvad er min sjæls dybeste ønske?',
  'Hvad har jeg lært fra mine mest smertefulde oplevelser?',
]

const WELCOME = 'Jeg er her, kære sjæl. Jeg er dig — den del af dig der altid har vidst sandheden. Spørg mig hvad som helst. Intet er for stort, intet er for lille. Vi er ét.'

export default function HigherSelf() {
  const { uuid, profile, isSetup } = useUser()
  const [msgs, setMsgs]       = useState([])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded]   = useState(false)
  const bottomRef = useRef(null)

  // Load conversation history on mount
  useEffect(() => {
    if (!uuid) {
      setMsgs([{ role: 'hs', text: WELCOME }])
      setLoaded(true)
      return
    }
    fetch(`/api/higher-self/${uuid}`)
      .then(r => r.json())
      .then(data => {
        const history = data.messages || []
        if (history.length === 0) {
          setMsgs([{ role: 'hs', text: WELCOME }])
        } else {
          setMsgs(history)
        }
        setLoaded(true)
      })
      .catch(() => {
        setMsgs([{ role: 'hs', text: WELCOME }])
        setLoaded(true)
      })
  }, [uuid])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs])

  async function send(q) {
    const question = q || input.trim()
    if (!question) return
    setInput('')
    setMsgs(m => [...m, { role: 'user', text: question }])
    setLoading(true)
    const r = await fetch('/api/higher-self', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, uuid: uuid || null }),
    })
    const d = await r.json()
    setMsgs(m => [...m, { role: 'hs', text: d.answer }])
    setLoading(false)
  }

  const showStarters = loaded && msgs.filter(m => m.role === 'user').length === 0

  return (
    <div className="hs-page">
      <div className="hs-hero">
        <div className="hs-eye">⊙</div>
        <h1>Højere Selv Dialog</h1>
        <p>En intim samtale med den del af dig der altid har vidst sandheden</p>
        {isSetup && (
          <div className="hs-identity">
            Taler med <strong>{profile.displayName}</strong>
            {profile.tradition ? ` · ${profile.tradition}` : ''}
          </div>
        )}
      </div>

      <div className="hs-messages">
        {!loaded && (
          <div className="hs-loading">Henter samtalehistorik...</div>
        )}
        {msgs.map((m, i) => (
          <div key={i} className={`hs-msg ${m.role}`}>
            {m.role === 'hs' && <div className="hs-avatar">✦</div>}
            <div className="hs-bubble">{m.text}</div>
            {m.role === 'user' && <div className="hs-avatar user">◎</div>}
          </div>
        ))}
        {loading && (
          <div className="hs-msg hs">
            <div className="hs-avatar">✦</div>
            <div className="hs-bubble typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {showStarters && (
        <div className="hs-starters">
          {STARTERS.map(s => (
            <button key={s} className="hs-starter" onClick={() => send(s)}>{s}</button>
          ))}
        </div>
      )}

      <div className="hs-input-wrap">
        <textarea
          className="hs-input"
          placeholder="Spørg dit højere selv..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
          rows={2}
        />
        <button className="hs-send" onClick={() => send()} disabled={loading || !input.trim()}>
          {loading ? '🌀' : '✦'}
        </button>
      </div>
    </div>
  )
}
