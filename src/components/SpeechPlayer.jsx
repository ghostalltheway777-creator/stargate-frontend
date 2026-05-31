import React, { useState, useRef } from 'react'
import { useAccessibility } from '../AccessibilityContext'
import './SpeechPlayer.css'

function stripHtml(html) {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/#{1,6}\s/g, '')
    .replace(/\|.*\|/g, '')
    .replace(/^[-•]\s/gm, '')
    .trim()
}

// Unlock browser audio én gang og behold unlock-staten
let audioUnlocked = false
function unlockAudio() {
  if (audioUnlocked) return
  const ctx = new (window.AudioContext || window.webkitAudioContext)()
  ctx.resume().then(() => { ctx.close(); audioUnlocked = true })
}

export default function SpeechPlayer({ text, htmlText }) {
  const { settings, currentLang } = useAccessibility()
  const [playing, setPlaying]   = useState(false)
  const [loading, setLoading]   = useState(false)
  const [paused,  setPaused]    = useState(false)
  const [error,   setError]     = useState(null)
  const audioRef  = useRef(null)
  const objUrlRef = useRef(null)

  const cleanText = htmlText
    ? stripMarkdown(stripHtml(htmlText))
    : stripMarkdown(text || '')

  async function speak() {
    // Unlock browser audio i user-gesture kontekst — SKAL være synkront
    unlockAudio()

    if (paused && audioRef.current) {
      audioRef.current.play()
      setPaused(false)
      setPlaying(true)
      return
    }

    stopAudio()
    if (!cleanText) return

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text:  cleanText.slice(0, 4000),
          lang:  currentLang.code,
          speed: settings.ttsSpeed,
        }),
      })
      if (!res.ok) throw new Error(`Server fejl ${res.status}`)

      const blob = await res.blob()
      const url  = URL.createObjectURL(blob)
      objUrlRef.current = url

      const audio = new Audio(url)
      audioRef.current = audio

      audio.onended = () => { setPlaying(false); setPaused(false); cleanup() }
      audio.onerror = () => { setPlaying(false); setPaused(false); setError('Afspilningsfejl'); cleanup() }

      await audio.play()
      setPlaying(true)
    } catch (e) {
      setError('Kunne ikke afspille — tjek lydstyrke og internet')
      console.error('TTS:', e)
    }
    setLoading(false)
  }

  function cleanup() {
    if (objUrlRef.current) {
      URL.revokeObjectURL(objUrlRef.current)
      objUrlRef.current = null
    }
  }

  function pauseAudio() {
    audioRef.current?.pause()
    setPaused(true)
    setPlaying(false)
  }

  function stopAudio() {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current = null
    }
    cleanup()
    setPlaying(false)
    setPaused(false)
    setError(null)
  }

  if (!cleanText) return null

  return (
    <div className="speech-player">
      <div className="sp-controls">
        {loading ? (
          <button className="sp-btn sp-play" disabled>
            <span className="sp-spinner" /> Forbereder...
          </button>
        ) : !playing ? (
          <button className="sp-btn sp-play" onClick={speak}>
            {paused ? '▶ Fortsæt' : '▶ Oplæs'}
          </button>
        ) : (
          <button className="sp-btn sp-pause" onClick={pauseAudio}>⏸ Pause</button>
        )}
        {(playing || paused) && (
          <button className="sp-btn sp-stop" onClick={stopAudio}>⏹</button>
        )}
        <span className="sp-lang">{currentLang.flag} {currentLang.label}</span>
      </div>

      {error && <div className="sp-error">{error}</div>}

      {playing && (
        <div className="sp-wave">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="sp-bar" style={{ animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
      )}
    </div>
  )
}
