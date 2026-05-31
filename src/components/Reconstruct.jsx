import React, { useState, useRef } from 'react'
import './Reconstruct.css'

const API = '/api'

const ALIEN_IMAGES = [
  { file: 'DoD_UAP_Sphere_2022.jpg',   label: 'DoD UAP Sphere 2022',   desc: 'Officielt Pentagon billede — sfærisk objekt'},
  { file: 'DoD_UAP_Acorn_2022.jpg',    label: 'DoD UAP Acorn 2022',    desc: 'Officielt Pentagon billede — agern-formet objekt'},
  { file: 'DoD_UAP_Metallic_2022.jpg', label: 'DoD UAP Metallic 2022', desc: 'Officielt Pentagon billede — metallisk objekt'},
]

const ALIEN_VIDEOS = [
  { file: 'FLIR1_Nimitz_2004.mp4', label: 'FLIR1 — Nimitz 2004', desc: 'US Navy · Tic-Tac objekt · Ingen propulsion'},
  { file: 'GIMBAL_2015.wmv',       label: 'GIMBAL — 2015',        desc: 'US Navy · Roterer mod vinden · Ingen varmekilde'},
  { file: 'GOFAST_2015.wmv',       label: 'GOFAST — 2015',        desc: 'US Navy · 100 knob · Ingen bølger · Ingen sonic boom'},
]

const TOOLS = [
  { name: 'Real-ESRGAN — 4x Upscale', url: 'https://huggingface.co/spaces/akhaliq/Real-ESRGAN', desc: 'Gratis · HuggingFace GPU · Bedst til billeder' },
  { name: 'Video Upscaler', url: 'https://free.upscaler.video', desc: 'Gratis · Ingen login · 4K video enhancement' },
  { name: 'Pixelbin Deblur', url: 'https://www.pixelbin.io/ai-tools/deblur-image', desc: 'Gratis · 8x upscale + deblur · Bedst til censurerede billeder' },
  { name: 'Topaz Gigapixel', url: 'https://www.topazlabs.com/gigapixel', desc: 'Bedst kvalitet · Betalt · Industri standard' },
]

const GUIDE = [
  'Download billedet/videoen fra alien_data mappen eller AARO.mil',
  'Vælg det rigtige tool — Real-ESRGAN til billeder, Video Upscaler til video',
  'Upload filen til tool\'et og vælg 4x eller 8x upscaling',
  'Aktiver deblur/sharpen hvis billedet er sløret eller censureret',
  'Download det rekonstruerede resultat',
  'Sammenlign original vs. rekonstrueret — hvad skjulte staten?',
]

export default function Reconstruct() {
  const [tab, setTab] = useState('billeder')
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeImage, setActiveImage] = useState(null)
  const inputRef = useRef()

  function onDrop(e) {
    e.preventDefault()
  }

  return (
    <div className="rec-page">
      <div className="rec-hero">
        <div className="rec-hero-icon">🔬</div>
        <h1 className="rec-title">AI Rekonstruktion</h1>
        <p className="rec-sub">Fjern regeringscensur · 4K upscaling · Deblurring</p>
      </div>

      <div className="rec-tabs">
        {[
          { id: 'billeder', label: '🖼 UAP Billeder' },
          { id: 'videoer',  label: '🎬 UAP Videoer' },
          { id: 'guide',    label: '📋 Guide' },
          { id: 'tools',    label: '🛠 Tools' },
        ].map(t => (
          <button key={t.id} className={`rec-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {/* BILLEDER TAB */}
      {tab === 'billeder' && (
        <div className="rec-section">
          <p className="rec-intro">Officielle DoD billeder frigivet april 2022 — tre uidentificerede objekter fanget af US militær sensorer.</p>
          {ALIEN_IMAGES.map(img => (
            <div key={img.file} className="rec-media-card">
              <img
                src={`${API}/alien/images/${img.file}`}
                alt={img.label}
                className="rec-image"
                onClick={() => setActiveImage(activeImage === img.file ? null : img.file)}
              />
              {activeImage === img.file && (
                <img src={`${API}/alien/images/${img.file}`} alt={img.label} className="rec-image-full" />
              )}
              <div className="rec-media-info">
                <span className="rec-media-label">{img.label}</span>
                <span className="rec-media-desc">{img.desc}</span>
                <a href={`${API}/alien/images/${img.file}`} download className="rec-download">⬇ Download original</a>
                <a href="https://www.pixelbin.io/ai-tools/deblur-image" target="_blank" rel="noreferrer" className="rec-upscale-btn">🔬 Upscale dette billede →</a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIDEOER TAB */}
      {tab === 'videoer' && (
        <div className="rec-section">
          <p className="rec-intro">Officielt frigivet af US Department of Defense 2020 — autentiske Navy FLIR optagelser.</p>
          {ALIEN_VIDEOS.map(vid => (
            <div key={vid.file} className="rec-media-card">
              <div className="rec-media-info" style={{marginBottom: '10px'}}>
                <span className="rec-media-label">{vid.label}</span>
                <span className="rec-media-desc">{vid.desc}</span>
              </div>
              {activeVideo === vid.file ? (
                <video controls autoPlay className="rec-video">
                  <source src={`${API}/alien/videos/${vid.file}`} />
                  Din browser understøtter ikke dette format.
                </video>
              ) : (
                <button className="rec-play-btn" onClick={() => setActiveVideo(vid.file)}>
                  ▶ Afspil {vid.label}
                </button>
              )}
              <div style={{display:'flex', gap:'8px', marginTop:'8px'}}>
                <a href={`${API}/alien/videos/${vid.file}`} download className="rec-download">⬇ Download</a>
                <a href="https://free.upscaler.video" target="_blank" rel="noreferrer" className="rec-upscale-btn">🔬 Upscale video →</a>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'guide' && (
        <div className="rec-section">
          <div className="rec-info-box">
            <p>Den amerikanske stat har sløret UAP billeder og videoer siden 1947. Med moderne AI kan du reversere censuren og se det originale indhold.</p>
          </div>
          <h3 className="rec-section-title">Trin-for-trin guide:</h3>
          {GUIDE.map((step, i) => (
            <div key={i} className="rec-step">
              <span className="rec-step-num">{i+1}</span>
              <span className="rec-step-text">{step}</span>
            </div>
          ))}
          <div className="rec-sources">
            <h4>📡 Officielle kilder til materiale:</h4>
            <div className="rec-source-list">
              {[
                ['AARO.mil', 'Pentagon UAP billeder — officielt frigivet'],
                ['CIA Reading Room', 'Tusinder af declassified UFO dokumenter'],
                ['The Black Vault', '1M+ FOIA dokumenter · theblackvault.com'],
                ['Archives.gov', 'Project Blue Book — 12.000+ UFO cases'],
                ['NAVAIR FOIA', 'Navy UAP videoer — officielle DoD releases'],
              ].map(([src, desc]) => (
                <div key={src} className="rec-source">
                  <span className="rec-source-name">{src}</span>
                  <span className="rec-source-desc">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'tools' && (
        <div className="rec-section">
          <p className="rec-intro">Disse tools kører på cloud GPU — ikke din Jetson. Alle gratis.</p>
          {TOOLS.map(t => (
            <a key={t.name} href={t.url} target="_blank" rel="noreferrer" className="rec-tool">
              <div className="rec-tool-info">
                <span className="rec-tool-name">{t.name}</span>
                <span className="rec-tool-desc">{t.desc}</span>
              </div>
              <span className="rec-tool-arrow">→</span>
            </a>
          ))}
          <div className="rec-tip">
            <span className="rec-tip-icon">💡</span>
            <p>Start med <strong>Real-ESRGAN på HuggingFace</strong> — det er gratis, kræver ingen konto og giver fantastiske resultater på UAP billeder.</p>
          </div>
        </div>
      )}

      {tab === 'files' && (
        <div className="rec-section">
          <p className="rec-intro">Træk dine rekonstruerede filer hertil for at gemme dem i Stargate.</p>
          <div
            className={`rec-dropzone ${dragOver ? 'over' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
          >
            <input ref={inputRef} type="file" multiple accept="image/*,video/*" style={{display:'none'}}
              onChange={e => setFiles(prev => [...prev, ...Array.from(e.target.files)])} />
            <span className="rec-drop-icon">⬆</span>
            <span className="rec-drop-text">Klik eller træk filer hertil</span>
            <span className="rec-drop-sub">JPG, PNG, MP4, WMV</span>
          </div>
          {files.length > 0 && (
            <div className="rec-file-list">
              {files.map((f, i) => (
                <div key={i} className="rec-file">
                  <span>{f.type.startsWith('image') ? '🖼' : '🎬'}</span>
                  <span className="rec-file-name">{f.name}</span>
                  <span className="rec-file-size">{(f.size/1024/1024).toFixed(1)} MB</span>
                </div>
              ))}
            </div>
          )}
          <div className="rec-alien-files">
            <h4>📁 Allerede downloaded:</h4>
            {[
              ['FLIR1_Nimitz_2004.mp4', '5.4 MB', 'Pentagon UAP video 2004'],
              ['GIMBAL_2015.wmv', '13.2 MB', 'Pentagon UAP video 2015'],
              ['GOFAST_2015.wmv', '13.2 MB', 'Pentagon UAP video 2015'],
              ['DoD_UAP_Sphere_2022.jpg', '1.6 MB', 'Officielt DoD billede'],
              ['DoD_UAP_Acorn_2022.jpg', '1.5 MB', 'Officielt DoD billede'],
              ['DoD_UAP_Metallic_2022.jpg', '1.5 MB', 'Officielt DoD billede'],
            ].map(([name, size, desc]) => (
              <div key={name} className="rec-alien-file">
                <span>{name.endsWith('.mp4')||name.endsWith('.wmv') ? '🎬' : '🖼'}</span>
                <div>
                  <span className="rec-file-name">{name}</span>
                  <span className="rec-file-desc">{desc} · {size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
