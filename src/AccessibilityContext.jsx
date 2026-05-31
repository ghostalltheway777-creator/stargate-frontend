import React, { createContext, useContext, useState, useEffect } from 'react'

const KEY = 'sg_accessibility'

const defaults = {
  dyslexia:   false,
  fontSize:   'normal',   // 'normal' | 'large' | 'xlarge'
  language:   'da',       // sprog til AI + TTS
  ttsSpeed:   1.0,
  ttsVoice:   null,       // voice URI
}

const LANGUAGES = [
  { code: 'da',    label: 'Dansk',     tts: 'da-DK', flag: '🇩🇰' },
  { code: 'en',    label: 'English',   tts: 'en-GB', flag: '🇬🇧' },
  { code: 'en-us', label: 'English US',tts: 'en-US', flag: '🇺🇸' },
  { code: 'de',    label: 'Deutsch',   tts: 'de-DE', flag: '🇩🇪' },
  { code: 'fr',    label: 'Français',  tts: 'fr-FR', flag: '🇫🇷' },
  { code: 'es',    label: 'Español',   tts: 'es-ES', flag: '🇪🇸' },
  { code: 'ar',    label: 'العربية',   tts: 'ar-SA', flag: '🇸🇦' },
  { code: 'nl',    label: 'Nederlands',tts: 'nl-NL', flag: '🇳🇱' },
  { code: 'no',    label: 'Norsk',     tts: 'no-NO', flag: '🇳🇴' },
  { code: 'sv',    label: 'Svenska',   tts: 'sv-SE', flag: '🇸🇪' },
]

const Ctx = createContext(null)

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') } }
    catch { return defaults }
  })

  function update(patch) {
    setSettings(s => {
      const next = { ...s, ...patch }
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }

  // Anvend CSS klasser på body
  useEffect(() => {
    const b = document.body
    b.classList.toggle('dyslexia-mode', settings.dyslexia)
    b.classList.remove('font-large', 'font-xlarge')
    if (settings.fontSize !== 'normal') b.classList.add(`font-${settings.fontSize}`)
  }, [settings.dyslexia, settings.fontSize])

  const lang = LANGUAGES.find(l => l.code === settings.language) || LANGUAGES[0]

  return (
    <Ctx.Provider value={{ settings, update, LANGUAGES, currentLang: lang }}>
      {children}
    </Ctx.Provider>
  )
}

export function useAccessibility() { return useContext(Ctx) }
export { LANGUAGES }
