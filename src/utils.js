/**
 * Konverterer Markdown-lignende tekst fra backend til HTML.
 * Håndterer **bold**, *italic*, ## overskrifter, > blockquote, - lister.
 */
export function formatResult(text) {
  if (!text) return ''
  let html = text
    // Escape HTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const lines = html.split('\n')
  const out = []
  let inList = false

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]

    if (line.startsWith('## ')) {
      if (inList) { out.push('</ul>'); inList = false }
      out.push(`<h2>${line.slice(3)}</h2>`)
    } else if (line.startsWith('### ')) {
      if (inList) { out.push('</ul>'); inList = false }
      out.push(`<h3>${line.slice(4)}</h3>`)
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      if (inList) { out.push('</ul>'); inList = false }
      out.push(`<h3>${line.slice(2, -2)}</h3>`)
    } else if (line.startsWith('&gt; ')) {
      if (inList) { out.push('</ul>'); inList = false }
      out.push(`<blockquote>${line.slice(5)}</blockquote>`)
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList) { out.push('<ul>'); inList = true }
      out.push(`<li>${inlineFormat(line.slice(2))}</li>`)
    } else if (line.startsWith('---')) {
      if (inList) { out.push('</ul>'); inList = false }
      out.push('<hr>')
    } else if (line.trim() === '') {
      if (inList) { out.push('</ul>'); inList = false }
      out.push('<br>')
    } else {
      if (inList) { out.push('</ul>'); inList = false }
      out.push(`<p>${inlineFormat(line)}</p>`)
    }
  }
  if (inList) out.push('</ul>')
  return out.join('')
}

function inlineFormat(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
}
