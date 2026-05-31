import React, { useState, useRef, useEffect } from 'react'
import './FoodScanner.css'
import { BrowserMultiFormatReader } from '@zxing/browser'

const DANGER_INGREDIENTS = [
  'rapsolie','solsikkeolie','majsolie','sojaolie','vegetabilsk olie','palmeolie',
  'hydrogeneret','transfedtsyre','high fructose','majssirup','fruktosesirup',
  'mononatriumglutamat','msg','e621','glutamat',
  'aspartam','e951','saccharin','sucralose','acesulfam',
  'natriumnitrat','natriumnitrit','e250','e251','e252',
  'bha','bht','e320','e321',
  'carrageenan','e407',
  'sojalecitin','sojalecithin',
]

const GOOD_SIGNS = ['whole','biologisk','økologisk','koldpresset','raw','rå','fermenteret','sprouted']

function scoreProduct(product) {
  const ingredients = (product.ingredients_text || '').toLowerCase()
  const name = (product.product_name || '').toLowerCase()
  const novaGroup = product.nova_group || 4
  const nutriScore = product.nutrition_grades || 'e'

  let score = 100
  let dangers = []
  let goods = []
  let warnings = []

  // NOVA score (1=unprocessed, 4=ultra-processed)
  if (novaGroup >= 4) { score -= 40; warnings.push('Ultra-forarbejdet (NOVA 4)') }
  else if (novaGroup === 3) { score -= 20; warnings.push('Forarbejdet (NOVA 3)') }
  else if (novaGroup <= 2) { score += 10; goods.push('Minimalt forarbejdet') }

  // Farlige ingredienser
  DANGER_INGREDIENTS.forEach(d => {
    if (ingredients.includes(d)) {
      score -= 15
      dangers.push(d.charAt(0).toUpperCase() + d.slice(1))
    }
  })

  // Gode tegn
  GOOD_SIGNS.forEach(g => {
    if (ingredients.includes(g) || name.includes(g)) {
      score += 5
      goods.push(g.charAt(0).toUpperCase() + g.slice(1))
    }
  })

  // Nutri-score
  if (['d','e'].includes(nutriScore)) score -= 10
  else if (['a','b'].includes(nutriScore)) score += 5

  score = Math.max(0, Math.min(100, score))

  const grade = score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 40 ? 'C' : score >= 20 ? 'D' : 'F'
  const color = score >= 80 ? '#50cc80' : score >= 60 ? '#aabb44' : score >= 40 ? '#ffaa30' : score >= 20 ? '#ff6633' : '#cc2222'
  const label = score >= 80 ? '✓ Godt valg' : score >= 60 ? '~ Acceptabelt' : score >= 40 ? '⚠ Vær forsigtig' : score >= 20 ? '✗ Undgå' : '✗✗ Dr. Sebi UACCEPTABEL'

  return { score, grade, color, label, dangers: [...new Set(dangers)], goods: [...new Set(goods)], warnings }
}

export default function FoodScanner() {
  const [barcode, setBarcode] = useState('')
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [aiAnalysis, setAiAnalysis] = useState(null)
  const [aiLoading, setAiLoading] = useState(false)
  const [scanMode, setScanMode] = useState('manual')
  const videoRef = useRef(null)
  const streamRef = useRef(null)

  async function lookupBarcode(code) {
    setLoading(true)
    setError(null)
    setProduct(null)
    setAiAnalysis(null)
    try {
      const r = await fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      const d = await r.json()
      if (d.status === 1 && d.product) {
        setProduct(d.product)
      } else {
        setError('Produkt ikke fundet — prøv med et andet stregkode')
      }
    } catch {
      setError('Fejl ved opslag — tjek din internetforbindelse')
    }
    setLoading(false)
  }

  async function getAiAnalysis(prod) {
    setAiLoading(true)
    const ingredients = prod.ingredients_text || 'Ukendt'
    try {
      const r = await fetch('/api/ancient-medicine/doctor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{
            role: 'user',
            content: `Analysér dette produkt ud fra Dr. Sebi og naturmedicin perspektiv:\n\nProdukt: ${prod.product_name}\nIngredienser: ${ingredients}\n\nGiv en kort analyse (maks 150 ord): Er dette et sundt valg? Hvilke ingredienser er problematiske? Hvad er et bedre alternativ?`
          }],
          profile: {}
        })
      })
      const d = await r.json()
      setAiAnalysis(d.response)
    } catch {}
    setAiLoading(false)
  }

  const readerRef = useRef(null)

  async function startCamera() {
    try {
      setScanMode('camera')
      setError(null)
      const codeReader = new BrowserMultiFormatReader()
      readerRef.current = codeReader
      await codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
        if (result) {
          const code = result.getText()
          setBarcode(code)
          stopCamera()
          lookupBarcode(code)
        }
      })
    } catch {
      setError('Kamera ikke tilgængeligt — brug manuel stregkode')
      setScanMode('manual')
    }
  }

  function stopCamera() {
    if (readerRef.current) {
      try { BrowserMultiFormatReader.releaseAllDevices() } catch {}
      readerRef.current = null
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    setScanMode('manual')
  }

  useEffect(() => { return () => { stopCamera() } }, [])

  const result = product ? scoreProduct(product) : null

  return (
    <div className="fs-page">
      <div className="fs-hero">
        <div className="fs-icon">📱</div>
        <h1 className="fs-title">Food Scanner</h1>
        <p className="fs-sub">Scan stregkode · Dr. Sebi analyse · Seed oil detektion · AI vurdering</p>
      </div>

      <div className="fs-scanner">
        {scanMode === 'camera' ? (
          <div className="fs-camera-wrap">
            <video ref={videoRef} autoPlay playsInline className="fs-video" />
            <div className="fs-camera-overlay">
              <div className="fs-scan-line" />
            </div>
            <p className="fs-camera-note">Hold stregkoden foran kameraet</p>
            <button className="fs-camera-stop" onClick={stopCamera}>Stop kamera</button>
          </div>
        ) : (
          <div className="fs-manual">
            <div className="fs-input-row">
              <input
                className="fs-barcode-input"
                placeholder="Skriv stregkode (EAN-13)..."
                value={barcode}
                onChange={e => setBarcode(e.target.value.replace(/\D/g,''))}
                onKeyDown={e => e.key === 'Enter' && barcode.length >= 8 && lookupBarcode(barcode)}
                style={{background:'#0a0f1e', color:'#fff', border:'1px solid rgba(80,200,120,0.25)', borderRadius:'10px', padding:'12px', fontSize:'16px', outline:'none', flex:1, letterSpacing:'2px'}}
              />
              <button className="fs-search-btn" onClick={() => lookupBarcode(barcode)} disabled={barcode.length < 8 || loading}>
                {loading ? '⏳' : '→'}
              </button>
            </div>
            <button className="fs-camera-btn" onClick={startCamera}>
              📷 Åbn kamera til scanning
            </button>
          </div>
        )}
      </div>

      {error && <div className="fs-error">{error}</div>}

      {product && result && (
        <div className="fs-result">
          {product.image_url && (
            <img src={product.image_url} alt={product.product_name} className="fs-product-img" />
          )}
          <h2 className="fs-product-name">{product.product_name || 'Ukendt produkt'}</h2>
          <div className="fs-brand">{product.brands || ''}</div>

          {/* Score */}
          <div className="fs-score-box" style={{'--sc': result.color}}>
            <div className="fs-score-grade" style={{color: result.color}}>{result.grade}</div>
            <div className="fs-score-bar-wrap">
              <div className="fs-score-bar" style={{width: `${result.score}%`, background: result.color}} />
            </div>
            <div className="fs-score-label" style={{color: result.color}}>{result.label}</div>
          </div>

          {/* Farlige ingredienser */}
          {result.dangers.length > 0 && (
            <div className="fs-dangers">
              <div className="fs-section-label danger">⚠️ PROBLEMATISKE INGREDIENSER</div>
              {result.dangers.map(d => <span key={d} className="fs-tag danger">{d}</span>)}
            </div>
          )}

          {/* Gode tegn */}
          {result.goods.length > 0 && (
            <div className="fs-goods">
              <div className="fs-section-label good">✓ POSITIVE TEGN</div>
              {result.goods.map(g => <span key={g} className="fs-tag good">{g}</span>)}
            </div>
          )}

          {/* Advarsler */}
          {result.warnings.length > 0 && (
            <div className="fs-warnings">
              {result.warnings.map(w => <div key={w} className="fs-warning">{w}</div>)}
            </div>
          )}

          {/* Ingredienser */}
          {product.ingredients_text && (
            <div className="fs-ingredients">
              <div className="fs-section-label">📋 INGREDIENSER</div>
              <p className="fs-ingredients-text">{product.ingredients_text}</p>
            </div>
          )}

          {/* AI Natur Doctor analyse */}
          {!aiAnalysis && !aiLoading && (
            <button className="fs-ai-btn" onClick={() => getAiAnalysis(product)}>
              🌿 Få Natur Doctorens vurdering →
            </button>
          )}
          {aiLoading && <p className="fs-ai-loading">🌿 Natur Doctoren analyserer...</p>}
          {aiAnalysis && (
            <div className="fs-ai-result">
              <div className="fs-section-label">🌿 NATUR DOCTORENS DOM</div>
              <pre className="fs-ai-text">{aiAnalysis}</pre>
            </div>
          )}
        </div>
      )}

      <div className="fs-tip">
        <p>💡 Tip: Prøv at scanne dagligvarer, brød, pålæg og snacks. Seed oils og MSG er skjult i de fleste forarbejdede produkter.</p>
      </div>
    </div>
  )
}
