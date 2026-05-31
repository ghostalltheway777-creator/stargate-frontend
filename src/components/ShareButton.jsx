import React, { useState } from 'react'
import './ShareButton.css'

function stripHtml(html) {
  const d = document.createElement('div')
  d.innerHTML = html
  return d.textContent || ''
}

export default function ShareButton({ title, htmlText, label }) {
  const [copied, setCopied] = useState(false)

  async function share() {
    const text = label
      ? `✦ STARGATE\n\n${label}\n\n${stripHtml(htmlText || '').slice(0, 600)}...\n\nstargate.app`
      : `✦ STARGATE\n\n${stripHtml(htmlText || '').slice(0, 600)}...\n\nstargate.app`

    if (navigator.share) {
      try {
        await navigator.share({ title: title || 'Stargate', text })
        return
      } catch {}
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {}
  }

  return (
    <button className={`share-btn ${copied ? 'copied' : ''}`} onClick={share}>
      {copied ? '✓ Kopieret!' : '↗ Del'}
    </button>
  )
}
