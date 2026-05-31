import React, { useState, useEffect } from 'react'
import './UniversalQuote.css'

const FIXED_BOTTOM = {
  text: 'Everything is energy, frequency and vibration. You are not in the world — the world is in you.',
  src: 'Nikola Tesla · Ancient Wisdom'
}

const QUOTES = [
  { text: 'Guds rige er inden i jer', src: 'Jesus · Lukas 17:21' },
  { text: 'Som ovenover, så nedenunder — som inden i, så udenfor', src: 'Hermes Trismegistus · Smaragdtavlerne' },
  { text: 'Gud er lys, og i ham er der intet mørke', src: '1 Johannes 1:5' },
  { text: 'Aham Brahmasmi — jeg er Brahman', src: 'Brihadaranyaka Upanishad' },
  { text: 'La ilaha illa Allah — der er ingen gud undtagen Gud', src: 'Koranen · Shahada' },
  { text: 'Tao der kan navngives er ikke det evige Tao', src: 'Lao Tzu · Tao Te Ching 1' },
  { text: 'Kend dig selv, og du vil kende universet og guderne', src: 'Templet i Delfi · Apollon' },
  { text: 'Shema Yisrael — Herren er vores Gud, Herren er Én', src: 'Torah · Deuteronomium 6:4' },
  { text: 'Vi er ikke menneskelige væsner med åndelige oplevelser — vi er åndelige væsner med menneskelige oplevelser', src: 'Pierre Teilhard de Chardin' },
  { text: 'Det er ikke vi der søger Gud — det er Gud der søger sig selv gennem os', src: 'Meister Eckhart' },
  { text: 'Intet bevæger sig, medmindre det røres af det guddommelige', src: 'Rumi' },
  { text: 'Tat Tvam Asi — det er dig', src: 'Chandogya Upanishad · Hinduisme' },
  { text: 'Fana — at opløse selvet i Gud er at finde sit sande selv', src: 'Al-Ghazali · Sufisme' },
  { text: 'En Sof — det grænseløse. Hinsides navn og tanke', src: 'Zohar · Kabbalah' },
  { text: 'Sarvam khalv idam Brahma — alt dette er Brahman', src: 'Chandogya Upanishad 3.14.1' },
  { text: 'Gud skabte mennesket i sit billede — og mennesket skabte Gud i sit billede', src: 'Voltaire' },
  { text: 'Hjertets renselse er grunden til al åndelig praksis', src: 'Buddha · Dhammapada' },
  { text: 'Al-Haqq — Sandheden. Gud er den eneste virkelige virkelighed', src: 'Al-Hallaj · Sufisme' },
]

export default function UniversalQuote({ position = 'bottom' }) {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * QUOTES.length))
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % QUOTES.length)
        setFade(true)
      }, 400)
    }, 12000)
    return () => clearInterval(t)
  }, [])

  const q = QUOTES[idx]

  if (position === 'bottom') {
    return (
      <div className="uq-wrap uq-bottom">
        <div className="uq-fixed-bottom">
          <blockquote className="uq-fixed-text">"{FIXED_BOTTOM.text}"</blockquote>
          <cite className="uq-src">— {FIXED_BOTTOM.src}</cite>
        </div>
      </div>
    )
  }

  return (
    <div className={`uq-wrap uq-${position}`}>
      <div className={`uq-inner ${fade ? 'uq-visible' : 'uq-hidden'}`}>
        <span className="uq-line" />
        <blockquote className="uq-text">"{q.text}"</blockquote>
        <cite className="uq-src">— {q.src}</cite>
        <span className="uq-line" />
      </div>
    </div>
  )
}
