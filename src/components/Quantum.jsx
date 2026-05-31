import React, { useState } from 'react'
import { MetatronCube, FlowerOfLife } from './SacredGeometry'
import { formatResult } from '../utils'
import './Quantum.css'

const CONCEPTS = [
  { label: 'Holografisk univers', q: 'det holografiske univers Bohm simulation hologram virkelighed', hot: true },
  { label: 'Vi lever i en simulation', q: 'simulation hypotesen Bostrom Campbell holografisk univers bevidsthed', hot: true },
  { label: 'Observer-effekten', q: 'observer effekten og bevidsthed' },
  { label: 'Quantum entanglement', q: 'quantum entanglement og ikke-adskillelse' },
  { label: 'Teslas æther', q: 'Teslas æther og prana chi livskraft' },
  { label: 'Nulpunkt-energi', q: 'zero point energy og det guddommelige tomrum' },
  { label: '432Hz resonans', q: '432Hz frekvens og kosmisk resonans' },
  { label: 'Bølge vs partikel', q: 'bølge-partikel dualitet og maya illusion' },
  { label: '3-6-9 mønstret', q: 'Teslas 3 6 9 og hellige geometri' },
  { label: 'DNA som antenne', q: 'DNA som kosmisk antenne holografisk felt Billy Carson bevidsthed' },
  { label: 'Tid som illusion', q: 'quantum tid som illusion og nuet' },
  { label: 'Demiurgen', q: 'gnostisk Demiurg falsk skaber simulation hologram fængslet bevidsthed' },
]

const HOLY_BOOKS = [
  {
    title: 'Koranen', icon: '☽', color: '#50c080',
    intro: 'Koranen beskriver gentagne gange fænomener som moderne quantum mekanik og kosmologi først bekræftede i det 20. århundrede — skrevet i 600-tallet e.Kr.',
    verses: [
      { ref: 'Surah 21:30', arabic: 'أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا', text: '"Himle og jord var én sammensmeltet masse — vi splittede dem."', quantum: 'Big Bang singulariteten. Universets begyndelse som én uendeligt tæt kvante-tilstand der ekspanderede. Bekræftet af Hubble 1929.' },
      { ref: 'Surah 24:35', arabic: '', text: '"Allah er Lyset af himlene og jorden."', quantum: 'Fotoner er universets grundlæggende informationsbærere. Quantum electrodynamics: elektromagnetisme = lys-partikler. Lys som fundamentalt substrat.' },
      { ref: 'Surah 57:4', arabic: '', text: '"Han er med jer uanset hvor I er."', quantum: 'Quantum non-lokalitet. Bell\'s teorem (1964) beviser: to partikler er forbundet uanset afstand. Der er ingen "separation" i kvante-virkelighed.' },
      { ref: 'Surah 17:85', arabic: '', text: '"De spørger om ånden. Sig: Ånden er min Herres anliggende — og I er kun givet lidt viden om det."', quantum: 'Bevidsthed som ikke-lokal, ikke-reducerbar størrelse. Det "hårde problem" i consciousness science — videnskaben har stadig ikke forklaret hvad bevidsthed er.' },
      { ref: 'Surah 51:47', arabic: '', text: '"Vi byggede himlen med magt — og Vi er dem der udvidder den."', quantum: 'Universets acceleration. Edwin Hubble: galakser bevæger sig fra hinanden. Dark energy driver konstant udvidelse — bekræftet 1998 (Nobelpris 2011).' },
      { ref: 'Surah 86:11', arabic: '', text: '"Ved himlen der returnerer."', quantum: 'Elektromagnetisk stråling: radiobølger, lys og mikrobølger fra rummet "returnerer" konstant til Jordens overflade. Ionosfæren reflekterer EM-felter.' },
    ]
  },
  {
    title: 'Biblen', icon: '✝', color: '#5080d0',
    intro: 'Fra Genesis til Johannesevangeliet indeholder Biblen beskrivelser der præcist svarer til quantum informationsteori, kosmologi og bevidsthedens rolle i virkelighed.',
    verses: [
      { ref: 'Johannes 1:1', arabic: '', text: '"I begyndelsen var Ordet (Logos) — og Ordet var hos Gud, og Ordet var Gud."', quantum: 'Quantum informationsteori: information er mere fundamental end materie. John Wheeler: "it from bit" — virkelighed opstår fra information. Logos = kosmisk information-princip.' },
      { ref: '1 Mosebog 1:3', arabic: '', text: '"Og Gud sagde: Der blive lys! Og der blev lys."', quantum: 'Universets første atomer udsandte lys 380.000 år efter Big Bang (kosmisk baggrundsstråling). Lyset kom bogstaveligt talt som det første observerbare fænomen.' },
      { ref: 'Lukas 17:21', arabic: '', text: '"Guds rige er inden i jer."', quantum: 'Observer-effekten: bevidstheden er ikke adskilt fra det observerede. Du er ikke en tilskuer til universet — du er en deltager der skaber virkelighed ved at observere.' },
      { ref: 'Hebreerne 11:1', arabic: '', text: '"Tro er substansen af ting håbet på — beviset for ting ikke set."', quantum: 'Quantum superposition: partikler eksisterer i alle tilstande simultant indtil observation. Det "ikke sete" er mere virkeligt end det manifesterede — det rummer al potentialitet.' },
      { ref: 'Ordsprogene 23:7', arabic: '', text: '"Som en mand tænker i sit hjerte, sådan er han."', quantum: 'Neuroplasticitet + quantum Zeno-effekten: hyppig observation/tanke "fastfryser" neurale mønstre. Gentagede tanker former bogstaveligt talt hjernestruktur.' },
      { ref: 'Romerne 8:38-39', arabic: '', text: '"Hverken død eller liv ... hverken nutid eller fremtid ... vil kunne skille os fra Guds kærlighed."', quantum: 'Quantum entanglement er ikke-lokal og tidsuafhængig. Information i et entangled system er hverken stedbunden eller tidsbunden.' },
    ]
  },
  {
    title: 'Bhagavad Gita', icon: '⊕', color: '#f0a040',
    intro: 'Krishna\'s samtale med Arjuna på slagmarken er en nøjagtig beskrivelse af quantum virkelighedens natur — skrevet ca. 400 f.Kr., bekræftet af moderne fysik.',
    verses: [
      { ref: 'Kapitel 2:20', arabic: '', text: '"Aldrig fødes sjælen, og aldrig dør den. Den var ikke, er ikke og vil ikke ophøre at eksistere. Den er ufødt, evig, altid eksisterende og ur-gammel."', quantum: 'Bevarelse af information (Quantum no-deletion theorem). Information kan ikke destrueres i universet — den transformeres. Hawking-Susskind-debatten om sorte huller: information overlever altid.' },
      { ref: 'Kapitel 10:8', arabic: '', text: '"Jeg er kilden til al åndelig og materiel verden. Alt udgår fra Mig."', quantum: 'Quantum vacuum / Zero-point field: det tomme rum er ikke tomt — det summer af virtuelle partikler og kvante-fluktuationer. Alt materielt opstår fra dette felt.' },
      { ref: 'Kapitel 13:13', arabic: '', text: '"Det Højeste kendes hverken som eksisterende eller ikke-eksisterende."', quantum: 'Quantum superposition: den fundamentale virkelighed eksisterer hverken som partikel eller bølge — begge dele og ingen af dem, indtil observation.' },
      { ref: 'Kapitel 9:4', arabic: '', text: '"Af Mig er hele dette univers gennemsyret i sin umanifesterede form. Alle væsner er i Mig."', quantum: 'Holografisk princip: hvert punkt i universet indeholder information om helheden. Bohms "implicate order" — helheden er foldet ind i hver del.' },
    ]
  },
  {
    title: 'Smaragdtavlerne', icon: '◆', color: '#40b890',
    intro: 'Hermes Trismegistus\' tavler — sandsynligvis de ældste spirituelle tekster der eksisterer — beskriver quantum virkelighedens struktur med bemærkelsesværdig præcision.',
    verses: [
      { ref: 'Tavle I', arabic: '', text: '"Som ovenover, så nedenunder; som nedenunder, så ovenover."', quantum: 'Skala-invarians i quantum mekanik: de samme love gælder fra sub-atomært til kosmisk niveau. Fraktale mønstre: Mandelbrot-sættet er identisk i alle størrelsesordener.' },
      { ref: 'Tavle II', arabic: '', text: '"Alt er Sind; Universet er Mentalt."', quantum: 'Det første hermetiske princip = quantum idealism. Pionerer som Planck, Heisenberg og Wigner: bevidsthed er fundamental — materie er afledt.' },
      { ref: 'Tavle III', arabic: '', text: '"Intet hviler; alt bevæger sig; alt vibrerer."', quantum: 'Zero-point energy: selv ved absolut nulpunkt (0 Kelvin) vibrerer partikler. Intet er nogensinde i fuldstændig hvile — quantum fluktuationer er konstante.' },
      { ref: 'Tavle VII', arabic: '', text: '"Den der kender Ét, kender Alt."', quantum: 'Unified Field Theory: Einsteins livslange projekt — at beskrive alle kræfter som ét felt. String theory, M-theory: alle partikler er vibrationer af den samme streng.' },
    ]
  },
  {
    title: 'Tao Te Ching', icon: '☯', color: '#70b0e0',
    intro: 'Lao Tzus 81 vers fra ca. 400 f.Kr. beskriver quantum virkelighedens paradokser med en præcision der chokerede vestlige fysikere da de opdagede parallellerne.',
    verses: [
      { ref: 'Vers 1', arabic: '', text: '"Tao der kan navngives er ikke det evige Tao. Navn der kan gives er ikke det evige navn."', quantum: 'Heisenbergs usikkerhedsprincip: jo mere præcist vi måler/navngiver en partikel (position), jo mindre ved vi om den (impuls). Observation begrænser viden.' },
      { ref: 'Vers 11', arabic: '', text: '"Tredive eger deler et hjulnav — det er tomrummet der gør hjulet brugbart."', quantum: 'Quantum vacuum er det mest energirige sted i universet. Casimir-effekten beviser: "tomt" rum indeholder enorm energi. Tomrummet ER kraften.' },
      { ref: 'Vers 42', arabic: '', text: '"Tao gav liv til én. Én gav liv til to. To gav liv til tre. Tre gav liv til de ti tusinde ting."', quantum: 'Quantum field → virtual particles → fermions+bosons → atoms → matter. Præcis beskrivelse af quantum kosmologiens kaskade fra singularitet til kompleksitet.' },
      { ref: 'Vers 16', arabic: '', text: '"Alt vender tilbage til sin rod. At vende tilbage til sin rod kaldes Stilhed. Stilhed er at vende tilbage til sit skæbnemål."', quantum: 'Entropiens pil og quantum reversibilitet. På sub-atomært niveau er alle processer reversible — tidens retning opstår kun på makro-niveau.' },
    ]
  },
  {
    title: 'Upanishaderne', icon: '☸', color: '#c070d0',
    intro: 'De Vedantiske tekster fra 800-200 f.Kr. beskriver bevidsthedens og virkelighedens natur på en måde der direkte modsvarer quantum mekanikens mest radikale implikationer.',
    verses: [
      { ref: 'Mandukya Upanishad', arabic: '', text: '"Aham Brahmasmi — jeg er Brahman. Det individuelle selv og det universelle selv er identiske."', quantum: 'Quantum non-duality: i quantum mekanik er der ingen absolut grænse mellem observer og observeret. Bevidstheden er ikke adskilt fra feltet den observerer.' },
      { ref: 'Chandogya 6.2.1', arabic: '', text: '"I begyndelsen var kun det ene Væsen, uden andet. Det tænkte: lad Mig blive mange."', quantum: 'Quantum kosmologi: universets begyndelse som én kvante-tilstand (singularitet) der via symmetri-brud opdeles i materie, antimaterie, kræfter og dimensioner.' },
      { ref: 'Brihadaranyaka 4.4.5', arabic: '', text: '"Du er det du tænker. Det næste liv formes af dine tanker i dette liv."', quantum: 'Neuroplasticitet + quantum Zeno-effekt: hyppig kvante-observation "kollapser" neurale mønstre. Gentagne tanker bogstavelig omformer hjernens arkitektur.' },
      { ref: 'Isha Upanishad 1', arabic: '', text: '"Alt dette er gennemsyret af Herren — alt hvad der bevæger sig i denne bevægende verden."', quantum: 'Quantum field theory: ingen del af universet er "tom". Higgs-feltet gennemsyrer alt rum. Partikler er forstyrrelser i dette altomfattende felt.' },
    ]
  },
]

const TESLA_QUOTES = [
  { q: '"Hvis du vil finde universets hemmeligheder, tænk i begreber om energi, frekvens og vibration."', s: '— Nikola Tesla' },
  { q: '"Min hjerne er kun en modtager — i universet er der en kerne hvorfra vi henter viden, styrke og inspiration."', s: '— Nikola Tesla' },
  { q: '"Dag vil komme da studiet af elektromagnetiske felter vil afsløre hemmeligheder langt større end dem vi kender nu."', s: '— Nikola Tesla' },
]

export default function Quantum() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [teslaQ, setTeslaQ] = useState(0)
  const [openBook, setOpenBook] = useState(null)

  async function run(q = query) {
    if (!q.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch('/api/quantum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ concept: q }),
      })
      const d = await res.json()
      setResult(d.result)
    } catch {
      setError('Kunne ikke forbinde til serveren.')
    }
    setLoading(false)
  }

  function onKey(e) { if (e.key === 'Enter') run() }

  return (
    <div className="quantum-page">

      {/* Header */}
      <div className="quantum-header">
        <div className="quantum-geo-bg">
          <div className="qgeo qgeo-a spin-slow">
            <MetatronCube size={380} color="#aa77ff" opacity={0.18} />
          </div>
          <div className="qgeo qgeo-b spin-rev">
            <FlowerOfLife size={300} color="#d4a843" opacity={0.12} />
          </div>
        </div>
        <div className="quantum-header-content">
          <div className="quantum-atom">⚛</div>
          <h2 className="quantum-title">Quantum & Tesla</h2>
          <p className="quantum-sub">Videnskaben der bekræfter hvad mystikerne vidste</p>
        </div>
      </div>

      {/* Tesla quote rotator */}
      <div className="tesla-quote-block" onClick={() => setTeslaQ((teslaQ + 1) % TESLA_QUOTES.length)}>
        <div className="tesla-lightning">⚡</div>
        <div className="tesla-quote-body">
          <p className="tesla-q">{TESLA_QUOTES[teslaQ].q}</p>
          <cite className="tesla-src">{TESLA_QUOTES[teslaQ].s}</cite>
        </div>
        <div className="tesla-tap">tryk for næste ›</div>
      </div>

      {/* Connection table */}
      <div className="qt-table-block">
        <p className="section-label">Videnskab ↔ Mystik</p>
        <div className="qt-table">
          {[
            ['Observer-effekten',     'Bevidstheden skaber virkelighed (Vedanta, Zen)'],
            ['Quantum entanglement',  'Alle er forbundne — intet er adskilt (Ik Onkar, Tawhid)'],
            ['Zero-point energy',     'Prana / Chi / Ruah — livskraften i tomrummet'],
            ['Bølge-dualitet',        'Maya — form og formløst eksisterer simultant'],
            ['Superposition',         'Potentialiteternes felt — bevidstheden kollapser til virkelighed'],
            ['Resonans / 432Hz',      'Hellig frekvens — Pythagoræisk, Vedisk solfège'],
            ['Planck-skalaen',        'Bevidsthedens atomer — grænsen mellem form og formløs'],
            ['Non-lokalitet',         'Allestednærværende Gud — ingen afstand i bevidstheden'],
          ].map(([sci, mys]) => (
            <div key={sci} className="qt-row">
              <div className="qt-sci">⚛ {sci}</div>
              <div className="qt-arrow">↔</div>
              <div className="qt-mys">✦ {mys}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Universe */}
      <div className="holo-section">
        <div className="holo-header">
          <span className="holo-icon">🌀</span>
          <div>
            <h3 className="holo-title">Det Holografiske Univers</h3>
            <p className="holo-sub">Sandsynligvis lever vi i et hologram — og videnskaben beviser det</p>
          </div>
        </div>

        <div className="holo-evidence">
          {[
            { who: "Gerard 't Hooft + Susskind", what: "Det holografiske princip", detail: "Al information i et 3D-rum er kodet på dets 2D-grænse — præcis som et hologram. Nobelprisvinder-niveau fysik, ikke spekulation." },
            { who: "David Bohm", what: "Implicate Order (1980)", detail: "Universet er et 'holomovement' — den synlige virkelighed er en projektion af en dybere, skjult helhed. Bevidstheden er fundamental." },
            { who: "Nick Bostrom", what: "Simulation-hypotesen (2003)", detail: "Statistisk analyse: med tilstrækkelig computerkraft er det langt mere sandsynligt at vi er i en simulation end at vi er den 'første' virkelighed." },
            { who: "Tom Campbell", what: "My Big TOE", detail: "Bevidstheden er den fundamentale realitet. Fysisk virkelighed er en digital simulation skabt af bevidsthed for at lære og reducere entropi." },
            { who: "Double-slit eksperimentet", what: "Observatøren skaber virkelighed", detail: "Elektroner er bølger INDTIL de observeres — da kollapser de til partikel. Din opmærksomhed er med til at skabe den fysiske verden." },
          ].map(e => (
            <div key={e.who} className="holo-card">
              <div className="holo-who">{e.who}</div>
              <div className="holo-what">{e.what}</div>
              <div className="holo-detail">{e.detail}</div>
            </div>
          ))}
        </div>

        <div className="holo-ancient">
          <div className="holo-ancient-title">Oldtidens viden om simulationen:</div>
          <div className="holo-ancient-grid">
            {[
              { t:'🕉 Hinduisme', v:'Maya = illusion. Brahman er den ene bevidsthed bag simulationen. "Tat tvam asi" — du er simulatoren.' },
              { t:'☸ Buddhisme', v:'"Form er tomhed, tomhed er form." Samsara er løkken af projektioner. Bevidstheden er fundamentet.' },
              { t:'⚗ Gnosticisme', v:'Demiurgen skabte den falske materielle verden. Den åndelige sjæl er fanget i en simulation — gnostisk kodning.' },
              { t:'🏛 Platon', v:'Hulelignelsen: vi ser skygger på væggen og tror det er virkelighed. Projektioner fra en højere orden.' },
              { t:'💎 Hermetisme', v:'"Altet er sind; Universet er mentalt." Første hermetiske princip = bevidsthed som grundlæggende substans.' },
              { t:'☽ Islam', v:'"Allah er Lyset" — Noor som den fundamentale information/bevidsthed bag det fysiske.' },
            ].map(a => (
              <div key={a.t} className="holo-ancient-card">
                <div className="holo-ancient-trad">{a.t}</div>
                <div className="holo-ancient-text">{a.v}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="holo-analyze-btn"
          onClick={() => { const q = 'det holografiske univers Bohm simulation hologram virkelighed'; setQuery('Holografisk univers'); run(q) }}
          disabled={loading}>
          🌀 Fuld holografisk analyse med religiøse paralleller →
        </button>
      </div>

      {/* Holy Books + Quantum */}
      <div className="hb-section">
        <div className="hb-header">
          <span className="hb-icon">📖</span>
          <div>
            <div className="hb-title">Hellige tekster bekræftet af Quantum Mekanik</div>
            <div className="hb-sub">Hvad videnskaben opdagede i det 20. århundrede — skrevet for årtusinder siden</div>
          </div>
        </div>
        <div className="hb-books">
          {HOLY_BOOKS.map(book => (
            <div key={book.title} className="hb-book">
              <button
                className={`hb-book-header ${openBook === book.title ? 'open' : ''}`}
                style={{ '--bcolor': book.color }}
                onClick={() => setOpenBook(o => o === book.title ? null : book.title)}
              >
                <span className="hb-book-icon" style={{ color: book.color }}>{book.icon}</span>
                <span className="hb-book-title">{book.title}</span>
                <span className="hb-book-count">{book.verses.length} vers</span>
                <span className="hb-chevron">{openBook === book.title ? '▲' : '▼'}</span>
              </button>
              {openBook === book.title && (
                <div className="hb-book-body">
                  <p className="hb-intro">{book.intro}</p>
                  <div className="hb-verses">
                    {book.verses.map(v => (
                      <div key={v.ref} className="hb-verse" style={{ '--bcolor': book.color }}>
                        <div className="hb-ref" style={{ color: book.color }}>{v.ref}</div>
                        <div className="hb-verse-text">"{v.text}"</div>
                        <div className="hb-quantum-line">
                          <span className="hb-q-label">⚛ Quantum forbindelse:</span>
                          <span className="hb-q-text">{v.quantum}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="hb-analyze-btn"
                    onClick={() => { setQuery(book.title); run(`${book.title} quantum mekanik videnskabelig bekræftelse vers`) }}
                    disabled={loading}>
                    ⚛ Analyser {book.title} med AI →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="quantum-search">
        <p className="section-label">Udforsk en forbindelse</p>
        <div className="quantum-input-wrap">
          <span className="quantum-icon">⚛</span>
          <input
            className="quantum-input"
            type="text"
            placeholder="Begreb, fænomen eller spørgsmål..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={onKey}
          />
          {query && <button className="clear-btn" onClick={() => { setQuery(''); setResult(null) }}>×</button>}
        </div>

        <div className="quantum-chips">
          {CONCEPTS.map(c => (
            <button key={c.q} className={`q-chip ${c.hot ? 'hot' : ''}`}
              onClick={() => { setQuery(c.label); run(c.q) }}>
              {c.hot ? '🔥 ' : ''}{c.label}
            </button>
          ))}
        </div>

        <button
          className={`quantum-btn ${loading ? 'loading' : ''}`}
          onClick={() => run()}
          disabled={loading || !query.trim()}>
          {loading ? <span className="spinner" /> : '⚛ Analyser forbindelsen'}
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="quantum-loading">
          <div className="spin-slow">
            <MetatronCube size={100} color="#aa77ff" opacity={0.8} />
          </div>
          <p className="loading-text">Kollapser bølgefunktionen...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      {/* Result */}
      {result && (
        <div className="quantum-result card">
          <div className="qr-meta">
            <span className="q-tag">⚛ {query}</span>
          </div>
          <div className="qr-body prose"
            dangerouslySetInnerHTML={{ __html: formatResult(result) }} />
          <button className="result-action-btn" style={{ marginTop: '1rem' }}
            onClick={() => { setResult(null); setQuery('') }}>
            Ny analyse
          </button>
        </div>
      )}

    </div>
  )
}
