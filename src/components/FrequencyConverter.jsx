import React, { useState, useRef } from 'react'
import './FrequencyConverter.css'

export default function FrequencyConverter() {
  const [tab, setTab]           = useState('history')
  const [file, setFile]         = useState(null)
  const [url, setUrl]           = useState('')
  const [loading, setLoading]   = useState(false)
  const [progress, setProgress] = useState('')
  const [error, setError]       = useState('')
  const [downloadUrl, setDownloadUrl] = useState(null)
  const [downloadName, setDownloadName] = useState('')
  const inputRef = useRef()

  async function convertFile() {
    if (!file) return
    setLoading(true); setError(''); setDownloadUrl(null)
    setProgress('Konverterer til 432 Hz...')
    try {
      const form = new FormData()
      form.append('file', file)
      const res = await fetch('/api/frequency/convert-file', { method: 'POST', body: form })
      if (!res.ok) { const d = await res.json(); throw new Error(d.detail) }
      const blob = await res.blob()
      const name = file.name.replace(/(\.[^.]+)$/, '_432hz$1')
      setDownloadUrl(URL.createObjectURL(blob))
      setDownloadName(name)
      setProgress('Færdig ✓')
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  async function convertUrl() {
    if (!url.trim()) return
    setLoading(true); setError(''); setDownloadUrl(null)
    setProgress('Downloader og konverterer...')
    try {
      const res = await fetch('/api/frequency/convert-url', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ url: url.trim() })
      })
      if (!res.ok) { const d = await res.json(); throw new Error(d.detail) }
      const blob = await res.blob()
      setDownloadUrl(URL.createObjectURL(blob))
      setDownloadName('432hz_converted.mp3')
      setProgress('Færdig ✓')
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  return (
    <div className="fc-page">
      <div className="fc-hero">
        <div className="fc-icon">∿</div>
        <h1 className="fc-title">432 Hz Konverter</h1>
        <p className="fc-sub">Genskab den naturlige frekvens — fra 440 Hz til 432 Hz</p>
      </div>

      <div className="fc-tabs">
        {[['history','📖 Historien'],['convert','⚙️ Konverter']].map(([id,label]) => (
          <button key={id} className={`fc-tab ${tab===id?'active':''}`} onClick={() => setTab(id)}>{label}</button>
        ))}
      </div>

      {tab === 'history' && (
        <div className="fc-section">
          <div className="fc-alert">
            <div className="fc-alert-title">⚠️ I 1953 ændrede de din musik</div>
            <p className="fc-alert-text">ISO 16 standardiserede A=440 Hz som global koncertpitch. Før dette brugte de fleste musikere og orkestre 432 Hz — i harmoni med naturens egne frekvenser. Det var ikke tilfældigt.</p>
          </div>

          {[
            {
              icon: '🏛',
              title: 'Goebbels & Nazi-Tyskland — 1939',
              text: 'Det første kendte forsøg på at standardisere 440 Hz kom fra Nazi-Tyskland i 1939. Joseph Goebbels, Hitlers propagandaminister, pressede på for 440 Hz som international standard. Den britiske musikinstitution afviste det. Men frøet var sået.',
              source: 'International Broadcasting Convention, London, 1939'
            },
            {
              icon: '🛢',
              title: 'John D. Rockefeller — Finansiering af ISO Standarden',
              text: 'Rockefeller Foundation finansierede aktivt studier og institutioner der arbejdede mod 440 Hz standardisering. Teorien: en befolkning der er ude af naturlig frekvens-harmoni er mere modtagelig for angst, aggression og sygdom — og køber mere medicin og behandling. En kronisk syg befolkning er en profitabel befolkning.',
              source: 'Rockefeller Foundation Archives, 1939-1953'
            },
            {
              icon: '📻',
              title: '1953 — ISO 16 Vedtages',
              text: 'Den Internationale Standardiseringsorganisation vedtager officielt A=440 Hz. Fra dette punkt tunes alle instrumenter, al radioudsendelse og al musikproduktion til 440 Hz. Verden der har sunget og spillet i naturlig harmoni i årtusinder — skifter på én generation.',
              source: 'ISO 16:1975 — Acoustics: Standard tuning frequency'
            },
            {
              icon: '🧬',
              title: 'Hvad 432 Hz gør ved kroppen',
              text: 'Cymatic eksperimenter (Hans Jenny, Masaru Emoto): 432 Hz danner symmetriske, harmoniske mønstre i vand og sand. 440 Hz danner kaotiske, uregelmæssige mønstre.\n\nVandkrystaller ved 432 Hz = perfekte geometriske former.\nVandkrystaller ved 440 Hz = ufuldstændige, asymmetriske.\n\nMenneskekroppen er 70% vand. Hvad sker der med din krops vand når al din musik er 440 Hz?',
              source: 'Cymatic research: Jenny (1967), Emoto (1994)'
            },
            {
              icon: '∞',
              title: '432 Hz og Naturens Matematik',
              text: 'Jordens rotation: 432 × 1000 = 432.000 sekunder = 5 dage\nSchumann Resonans: 7.83 Hz × 55 = 430.65 Hz ≈ 432 Hz\nDNA-helix: vinklen på 432 grader per fuld rotation\nPythagoræisk skala: naturligt producerer harmonier der er identiske med 432 Hz tuning\nAncient egyptisk: pyramidens geometri er baseret på 432\n\nNaturen er tunet til 432. Vi er det eneste dyr der bevidst stemmer forkert.',
              source: 'Sacred geometry, cymatics, mathematics'
            },
          ].map(s => (
            <div key={s.title} className="fc-card">
              <div className="fc-card-icon">{s.icon}</div>
              <h3 className="fc-card-title">{s.title}</h3>
              <p className="fc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              <p className="fc-card-source">📄 {s.source}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'convert' && (
        <div className="fc-section">
          <div className="fc-info-box">
            <p>Konverter din musik fra 440 Hz til 432 Hz. Ratio: 432÷440 = 0.9818̄ — pitch shift ned med 31.8 cents.</p>
          </div>

          {/* FILE UPLOAD */}
          <div className="fc-convert-box">
            <div className="fc-convert-title">📁 Upload fil</div>
            <p className="fc-convert-desc">MP3 · MP4 · WAV · M4A · FLAC · OGG</p>
            <div className="fc-drop-zone" onClick={() => inputRef.current?.click()}>
              {file ? (
                <div className="fc-file-selected">
                  <span className="fc-file-icon">🎵</span>
                  <span className="fc-file-name">{file.name}</span>
                  <span className="fc-file-size">{(file.size/1024/1024).toFixed(1)} MB</span>
                </div>
              ) : (
                <div className="fc-drop-inner">
                  <div className="fc-drop-icon">⬆</div>
                  <div className="fc-drop-text">Klik for at vælge fil</div>
                </div>
              )}
            </div>
            <input ref={inputRef} type="file" accept=".mp3,.mp4,.wav,.m4a,.flac,.ogg"
              style={{display:'none'}} onChange={e => { setFile(e.target.files[0]); setDownloadUrl(null); setError('') }} />
            <button className="fc-btn" onClick={convertFile} disabled={!file || loading}>
              {loading && tab === 'convert' ? progress : '⚙ Konverter til 432 Hz'}
            </button>
          </div>

          {/* URL INPUT */}
          <div className="fc-convert-box">
            <div className="fc-convert-title">🔗 YouTube / SoundCloud link</div>
            <p className="fc-convert-desc">Indsæt et direkte link til musikken</p>
            <input className="fc-url-input" placeholder="https://youtube.com/... eller https://soundcloud.com/..."
              value={url} onChange={e => { setUrl(e.target.value); setDownloadUrl(null); setError('') }} />
            <div className="fc-supported">
              <span>✓ YouTube</span>
              <span>✓ SoundCloud</span>
              <span>✓ Vimeo</span>
              <span>✓ Bandcamp</span>
            </div>
            <button className="fc-btn" onClick={convertUrl} disabled={!url.trim() || loading}>
              {loading ? progress : '⚙ Download & Konverter'}
            </button>
          </div>

          {error && <div className="fc-error">⚠ {error}</div>}

          {downloadUrl && (
            <div className="fc-success">
              <div className="fc-success-icon">✓</div>
              <div className="fc-success-title">Konverteret til 432 Hz!</div>
              <a href={downloadUrl} download={downloadName} className="fc-download-btn">
                ⬇ Download {downloadName}
              </a>
              <p className="fc-success-note">Filen er pitch-shifted fra A=440 Hz til A=432 Hz</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
