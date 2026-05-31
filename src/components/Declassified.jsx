import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Declassified.css'

const API = '/api'

const UAP_VIDEOS = [
  {
    id: 'flir',
    name: 'FLIR1 — Nimitz Hændelsen',
    year: '2004',
    file: `${API}/alien/videos/FLIR1_Nimitz_2004.mp4`,
    desc: 'F/A-18F pilot Commander David Fravor mødte et hvidt Tic-Tac formet objekt ud for Californiens kyst. Objektet bevægede sig uden propulsion, ingen termisk signatur, ingen vinger. 40 fods objekt accelererede til hypersonisk hastighed på millisekunder.',
    archon_link: 'Hypostasis of the Archons beskriver væsener der bevæger sig "hurtigere end tanken" og eksisterer i et domæne uden for vores fysiske love — identisk med hvad piloter observerede.',
    keywords: ['Ingen propulsion', 'Ingen varme', 'Hypersonisk', 'Tic-Tac form'],
  },
  {
    id: 'gimbal',
    name: 'GIMBAL — Ukendt Luftfartøj',
    year: '2015',
    file: `${API}/alien/videos/GIMBAL_2015.wmv`,
    desc: 'F/A-18 piloter observerede et roterende objekt der ignorerede aerodynamikkens love. Objektet roterer mod vinden, ingen kontrolflader, ingen udstødning. Infrared (FLIR) viser ingen varmekilde.',
    archon_link: 'Apocryphon of John beskriver Archon-skabte "biler af ild" der bevæger sig i himlen uden fysisk drivkraft — deres teknologi baseret på bevidsthed ikke mekanik.',
    keywords: ['Rotation mod vinden', 'Ingen varmekilde', 'Bevæger sig mod vinden', 'Uidentificeret'],
  },
  {
    id: 'gofast',
    name: 'GOFAST — Ultrahurtig UAP',
    year: '2015',
    file: `${API}/alien/videos/GOFAST_2015.wmv`,
    desc: 'Et lille objekt bevæger sig ekstremt hurtigt hen over havet i lav højde. Beregninger viser objektet bevæger sig ved ~100 knob ved havoverfladen uden nogen bølgeeffekt, ingen propulsion og ingen sonic boom.',
    archon_link: 'Pistis Sophia beskriver "Rulers of the Aeons" — væsener der opererer i en lavere dimension af vores realitet, synlige men ikke bundet af fysikkens love.',
    keywords: ['100 knob', 'Ingen bølger', 'Ingen sonic boom', 'Lav højde'],
  },
]

const ARCHON_CONNECTIONS = [
  {
    icon: '⬛',
    title: 'Hypostasis of Archons',
    text: 'Nag Hammadi tekst fra ~350 e.Kr. beskriver Archons som "skabere af den falske verden" — dimensionelle væsener der kontrollerer menneskelig bevidsthed fra en skjult dimension. De beskrives som havende teknologi der overstiger menneskelig forståelse.',
    connection: 'Pentagon UAP optagelser viser teknologi der overstiger vores fysik — præcis som Archon teknologi beskrives i Nag Hammadi.',
  },
  {
    icon: '◈',
    title: 'Apocryphon of John',
    text: 'Den hemmelige bog om Johannes beskriver Archons der skabte en "kopi" af den sande åndelige verden — en matrix-lignende realitet. De beskrives som reptilianske og menneskelige hybridvæsener.',
    connection: 'Bob Lazar og andre insidere beskriver EBE (Extraterrestrial Biological Entities) som ekstraterrestriale der har manipuleret menneskelig DNA — direkte parallel til Apocryphon.',
  },
  {
    icon: '∞',
    title: 'Pistis Sophia',
    text: 'Beskriver 13 lag af "Aeons" — dimensioner over vores realitet. Archons kontrollerer de lavere lag og har magt til at påvirke menneskelig sjæl og bevidsthed. De bruger "lys-teknologi" til at binde sjæle.',
    connection: 'UAP optagelser viser objekter der kun er synlige i infrarødt lys — de eksisterer i et spektrum udenfor normal menneskelig perception, som Pistis Sophia beskriver.',
  },
  {
    icon: '⊕',
    title: 'Sumerian Anunnaki',
    text: 'Mesopotamiske tekster fra 3000 f.Kr. beskriver Anunnaki — "dem der kom ned fra himlen". De kom i flyvende fartøjer, genmanipulerede Homo erectus til Homo sapiens og etablerede de første civilisationer.',
    connection: 'Zecharia Sitchin\'s analyser og nyere UAP rapporter peger begge på intelligente væsener med avanceret teknologi der besøger Jorden over tusinder af år.',
  },
]

const RECONSTRUCTION_TOOLS = [
  {
    name: 'Pixelbin — Deblur & Upscale',
    desc: '8x upscaling + deblurring. Bedst til censurerede/slørede billeder. 3 gratis brug.',
    url: 'https://www.pixelbin.io/ai-tools/deblur-image',
    icon: '🔬',
  },
  {
    name: 'Free AI Video Upscaler',
    desc: '4K video enhancement. 100% browser-baseret, ingen login, ingen vandmærke.',
    url: 'https://free.upscaler.video/',
    icon: '🎬',
  },
  {
    name: 'Nightmare AI — Real-ESRGAN',
    desc: 'Industri-standard Real-ESRGAN algoritme. Gratis, ingen installation.',
    url: 'https://www.nightmare-ai.com/',
    icon: '⚡',
  },
  {
    name: 'UnblurImage AI',
    desc: 'Specialiseret i at fjerne motion blur og regeringscensur fra billeder.',
    url: 'https://unblurimage.ai/',
    icon: '👁',
  },
]

export default function Declassified() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [tab, setTab] = useState('videos')
  const nav = useNavigate()

  return (
    <div className="decl-page">

      {/* HERO */}
      <div className="decl-hero">
        <div className="decl-hero-symbol">⬛</div>
        <h1 className="decl-hero-title">Declassified</h1>
        <p className="decl-hero-sub">Officielle Pentagon UAP optagelser · Nag Hammadi forbindelser · AI rekonstruktion</p>
        <div className="decl-hero-badge">OFFICIELT FRIGIVET AF US DEPARTMENT OF DEFENSE</div>
      </div>

      {/* TABS */}
      <div className="decl-tabs">
        {[
          { id: 'videos',  label: '🎬 Pentagon Videoer' },
          { id: 'cia',     label: '🕵️ CIA Dokumenter' },
          { id: 'archons', label: '⬛ Archon Forbindelsen' },
          { id: 'tools',   label: '🔬 Rekonstruer Selv' },
        ].map(t => (
          <button key={t.id} className={`decl-tab ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {/* CIA DOKUMENTER */}
      {tab === 'cia' && (
        <div className="decl-section">
          <p className="decl-intro">CIA's officielle FOIA-bibliotek indeholder millioner af frigivne dokumenter. Her er de mest ekstraordinære — beviser for fjernsyning, bevidsthedskontrol og kontakt med ikke-menneskelig intelligens.</p>

          {[
            {
              code: 'CIA-RDP96-00788R001700210016-5',
              title: 'Gateway Process — Bevidsthed som Våben',
              year: '1983',
              classification: 'FORTROLIGT — FRIGIVET 2003',
              summary: 'US Army Classified Report skrevet af Lt. Col. Jim Channon. Dokumenterer Monroe Institute\'s Hemi-Sync teknologi der synkroniserer hjernens to halvdele via binaurale beats. Konkluderer at menneskelig bevidsthed KAN forlade kroppen og operere i tid og rum uafhængigt af fysik. Side 25 af dokumentet mangler stadig — den eneste side der aldrig er blevet frigivet.',
              quote: '"The Gateway Experience is based on Hemi-Sync technology... it is possible for the human mind to transcend time and space."',
              link: 'https://www.cia.gov/readingroom/document/cia-rdp96-00788r001700210016-5',
            },
            {
              code: 'CIA-RDP79-00999A000300090001-2',
              title: 'Project STARGATE — Fjernsyning',
              year: '1972–1995',
              classification: 'HEMMELIGT — FRIGIVET 1995',
              summary: 'CIA og US Army brugte trænede psykiske agenter (Remote Viewers) i over 20 år til at spionere på Sovjet. Projekt STARGATE, GRILL FLAME og SUN STREAK dokumenterede at fjernsyning er statistisk bevist og reproducerbart. Ingo Swann og Pat Price kortlagde soviets atomubåde og hemmelige anlæg fra en stol i Virginia med 80%+ præcision.',
              quote: '"Remote viewing is real. The statistical evidence is overwhelming. We cannot explain it — but it works."',
              link: 'https://www.cia.gov/readingroom/collection/stargate',
            },
            {
              code: 'CIA-RDP96-00788R001900760001-9',
              title: 'Uri Geller — Eksperimenter ved Stanford',
              year: '1973',
              classification: 'HEMMELIGT — FRIGIVET 1996',
              summary: 'CIA-finansierede eksperimenter ved Stanford Research Institute med Uri Geller. Dokumenterede at Geller konsekvent kunne reproducere skjulte tegninger i forseglet konvolut, påvirke elektronisk udstyr og bøje metal uden fysisk kontakt. Eksperimenterne var dobbelt-blindede og udført af Dr. Hal Puthoff og Russell Targ.',
              quote: '"Geller demonstrated his ability to reproduce target pictures under conditions which precluded the possibility of sensory cueing."',
              link: 'https://www.cia.gov/readingroom/document/cia-rdp96-00788r001900760001-9',
            },
            {
              code: 'CIA-RDP90-00965R000100040001-5',
              title: 'Project MKUltra — Sindskontrol',
              year: '1953–1973',
              classification: 'DESTRUERET 1973 — Overlevende dokumenter frigivet 1977',
              summary: 'CIA\'s klassificerede program til udvikling af sindskontrol teknikker. Brugte LSD, hypnose, elektrochok og psykologisk tortur på uvidende civile, fanger og mentale patienter. Allan Memorial Institute i Montreal. Dr. Ewen Cameron modtog CIA-funding for at "de-patternere" og "re-drive" patienters personligheder. Over 150 underprojekter.',
              quote: '"The objective is to develop a capability in the covert use of biological, chemical, nuclear and radiological materials."',
              link: 'https://www.cia.gov/readingroom/collection/mkultra-declassified',
            },
            {
              code: 'CIA-RDP79B00752A000300070001-5',
              title: 'Adam & Eve Story — Polskifte',
              year: '1966',
              classification: 'HEMMELIGT — FRIGIVET 2013 (delvist)',
              summary: 'Chan Thomas\' bog "The Adam and Eve Story" blev klassificeret af CIA i 1966. Frigivet i 2013 men stadig med mange siders redaktion. Dokumentet beskriver cykliske kataklysmiske polskifte hvert ~6500 år der udsletter civilisationer. CIA klassificerede bogen — men aldrig forklaret hvorfor. Hvad indeholder de fortsat skjulte sider?',
              quote: '"[REDACTED] causing a worldwide catastrophe [REDACTED] every 6,500 years [REDACTED]"',
              link: 'https://www.cia.gov/readingroom/document/cia-rdp79b00752a000300070001-5',
            },
          ].map(doc => (
            <div key={doc.code} className="decl-video-card" style={{marginBottom:'16px'}}>
              <div className="decl-video-header">
                <span className="decl-video-year">{doc.year}</span>
                <h2 className="decl-video-title">{doc.title}</h2>
              </div>
              <div style={{padding:'12px 16px'}}>
                <div style={{fontSize:'10px', color:'rgba(255,80,80,0.7)', fontWeight:'700', letterSpacing:'1px', marginBottom:'8px'}}>{doc.classification}</div>
                <div style={{fontSize:'10px', color:'rgba(255,255,255,0.3)', fontFamily:'monospace', marginBottom:'10px'}}>{doc.code}</div>
                <p style={{fontSize:'12px', color:'rgba(255,255,255,0.75)', lineHeight:'1.7', marginBottom:'12px'}}>{doc.summary}</p>
                <div style={{background:'rgba(212,168,67,0.06)', border:'1px solid rgba(212,168,67,0.2)', borderRadius:'8px', padding:'10px', marginBottom:'12px'}}>
                  <p style={{fontSize:'11px', fontStyle:'italic', color:'rgba(212,168,67,0.85)', margin:0, lineHeight:'1.6'}}>{doc.quote}</p>
                </div>
                <a href={doc.link} target="_blank" rel="noopener noreferrer" style={{
                  display:'inline-block', fontSize:'11px', color:'rgba(80,150,255,0.8)',
                  border:'1px solid rgba(80,150,255,0.25)', borderRadius:'6px',
                  padding:'6px 12px', textDecoration:'none',
                }}>
                  🔗 CIA FOIA Bibliotek →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PENTAGON VIDEOER */}
      {tab === 'videos' && (
        <div className="decl-section">
          <p className="decl-intro">
            Disse tre videoer blev officielt frigivet af US Department of Defense i april 2020.
            De er autentiske — optaget af US Navy piloter med militære FLIR (Forward Looking InfraRed) kameraer.
            Ingen forklaring er nogensinde givet.
          </p>
          {UAP_VIDEOS.map(v => (
            <div key={v.id} className="decl-video-card">
              <div className="decl-video-header">
                <span className="decl-video-year">{v.year}</span>
                <h2 className="decl-video-title">{v.name}</h2>
              </div>

              {activeVideo === v.id ? (
                <video className="decl-video" controls autoPlay>
                  <source src={v.file} />
                  Din browser understøtter ikke dette videoformat.
                </video>
              ) : (
                <button className="decl-video-play" onClick={() => setActiveVideo(v.id)}>
                  <span className="decl-play-icon">▶</span>
                  <span>Afspil officiel DoD optagelse</span>
                </button>
              )}

              <div className="decl-keywords">
                {v.keywords.map(k => <span key={k} className="decl-keyword">{k}</span>)}
              </div>

              <p className="decl-video-desc">{v.desc}</p>

              <div className="decl-archon-box">
                <span className="decl-archon-label">⬛ ARCHON FORBINDELSE</span>
                <p className="decl-archon-text">{v.archon_link}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ARCHON FORBINDELSEN */}
      {tab === 'archons' && (
        <div className="decl-section">
          <p className="decl-intro">
            2.000 år gamle Nag Hammadi tekster beskriver interdimensionelle væsener med præcis de samme karakteristika
            som moderne UAP rapporter. Dette er ikke tilfældigt.
          </p>
          {ARCHON_CONNECTIONS.map(a => (
            <div key={a.title} className="decl-archon-card">
              <div className="decl-archon-icon">{a.icon}</div>
              <h3 className="decl-archon-title">{a.title}</h3>
              <p className="decl-archon-body">{a.text}</p>
              <div className="decl-connection-box">
                <span className="decl-connection-label">🛸 UAP FORBINDELSE</span>
                <p className="decl-connection-text">{a.connection}</p>
              </div>
            </div>
          ))}
          <button className="decl-cta" onClick={() => nav('/search')}>
            Søg i Nag Hammadi tekster →
          </button>
        </div>
      )}

      {/* REKONSTRUKTIONS TOOLS */}
      {tab === 'tools' && (
        <div className="decl-section">
          <p className="decl-intro">
            Den amerikanske stat har sløret og censureret UFO/UAP billeder og videoer i årtier.
            Med moderne AI kan du rekonstruere det de forsøgte at skjule.
            Her er de bedste gratis online tools:
          </p>

          <div className="decl-process">
            <h3 className="decl-process-title">Sådan rekonstruerer du en censureret UAP optagelse:</h3>
            <div className="decl-steps">
              {[
                { n: '1', text: 'Find officielle FOIA-frigivne billeder på aaro.mil eller archives.gov' },
                { n: '2', text: 'Upload billedet til Pixelbin eller UnblurImage AI' },
                { n: '3', text: 'Vælg 4x eller 8x upscaling + deblur' },
                { n: '4', text: 'Download det rekonstruerede billede' },
                { n: '5', text: 'Sammenlign original vs. rekonstrueret — se hvad staten skjulte' },
              ].map(s => (
                <div key={s.n} className="decl-step">
                  <span className="decl-step-n">{s.n}</span>
                  <span className="decl-step-text">{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="decl-tools-grid">
            {RECONSTRUCTION_TOOLS.map(t => (
              <a key={t.name} href={t.url} target="_blank" rel="noreferrer" className="decl-tool-card">
                <span className="decl-tool-icon">{t.icon}</span>
                <span className="decl-tool-name">{t.name}</span>
                <span className="decl-tool-desc">{t.desc}</span>
                <span className="decl-tool-link">Åbn tool →</span>
              </a>
            ))}
          </div>

          <div className="decl-sources-box">
            <h4>📡 Officielle kilder til censurerede billeder:</h4>
            <p>• <strong>aaro.mil/UAP-Cases</strong> — Pentagon's officielle UAP billeder</p>
            <p>• <strong>archives.gov/research/military/air-force/ufos</strong> — Project Blue Book</p>
            <p>• <strong>cia.gov/readingroom</strong> — CIA declassified UFO dokumenter</p>
            <p>• <strong>theblackvault.com</strong> — Privat FOIA database med 1M+ dokumenter</p>
          </div>
        </div>
      )}
    </div>
  )
}
