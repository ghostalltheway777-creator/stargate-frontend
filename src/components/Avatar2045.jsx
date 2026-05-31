import React, { useState } from 'react'
import './Avatar2045.css'

const TABS = [
  { id: 'vision',   label: '🌐 Visionen' },
  { id: 'avatars',  label: '🤖 4 Avatarer' },
  { id: 'who',      label: '👤 Itskov' },
  { id: 'soul',     label: '✦ Sjælen' },
  { id: 'now',      label: '⚡ Status 2025' },
]

const AVATARS = [
  {
    id: 'A',
    year: '2015–2020',
    name: 'Avatar A — Robotkroppen',
    color: '#5090d0',
    icon: '🤖',
    desc: 'En fjernbetjent humanoid robot der styres af din hjerne via BCI (Brain-Computer Interface). Du sidder sikkert hjemme mens din avatar kæmper i krig, arbejder i strålingszoner eller udforsker Mars.',
    status: 'OPNÅET DELVIST',
    statusColor: '#60cc60',
    reality: 'Boston Dynamics, Hanson Robotics Sophia, DARPA robotprogrammer er alle trin mod Avatar A. Militæret bruger allerede drone-avatarer.',
    dark: 'Hvem ejer din avatar? Hvis din robot-krop er lejet af et selskab — er du så fri? Eller har du betalt for dit eget bur?',
  },
  {
    id: 'B',
    year: '2020–2025',
    name: 'Avatar B — Bevidsthedstransfer',
    color: '#9060d0',
    icon: '🧠',
    desc: 'Ved livets afslutning overføres din personlighed, minder og bevidsthed til en avanceret kunstig hjerne i en humanoid robot. Kroppen dør — men du fortsætter.',
    status: 'UNDER UDVIKLING',
    statusColor: '#d4a843',
    reality: 'Neuralink (Musk), Kernel (Bryan Johnson), OpenBCI arbejder på præcis dette. Brain scanning med sufficient opløsning er 10-15 år væk.',
    dark: 'Er en kopi af din bevidsthed stadig DIG? Den originale du dør stadig. Hvad hvis den kopierede version ejes af et selskab og kan slukkes hvis du ikke betaler?',
  },
  {
    id: 'C',
    year: '2030–2035',
    name: 'Avatar C — Den Kunstige Hjerne',
    color: '#d050a0',
    icon: '💎',
    desc: 'En fuldstændig kunstig hjerne — en ikke-biologisk platform der understøtter menneskelig bevidsthed. Kroppen er nu valgfri. Din bevidsthed kan flyttes mellem platforme som software.',
    status: 'TIDLIG FORSKNING',
    statusColor: '#cc6644',
    reality: 'OpenAI, DeepMind og Anthropic arbejder på at forstå emergent consciousness i AI-systemer. IBM\'s neuromorphic chips (True North) efterligner hjernens struktur.',
    dark: 'En bevidsthed som software kan kopieres, slettes, modificeres, låses. Hvem har adgangskoden til din sjæl? Er du nu en intellektuel ejendom?',
  },
  {
    id: 'D',
    year: '2040–2045',
    name: 'Avatar D — Det Holografiske Selv',
    color: '#d4a843',
    icon: '✨',
    desc: 'Den ultimative frihed: din bevidsthed eksisterer som en holografisk energikonstrukt — uden fysisk krop overhovedet. Du manifesterer en synlig form når du vil. Du er lys, information, bevidsthed.',
    status: 'VISIONÆR FASE',
    statusColor: '#8060cc',
    reality: 'Kvantumcomputing, biophoton forskning (Garjajev), og forståelsen af bevidsthed som informationsfelt peger mod dette som fysisk muligt inden 2100.',
    dark: 'Eller — har vi allerede gjort dette? Er menneskelig bevidsthed allerede et holografisk felt fanget i biologisk materiale? Er 2045 en befrielse eller en fælde på et nyt niveau?',
  },
]

export default function Avatar2045() {
  const [tab, setTab] = useState('vision')
  const [activeAvatar, setActiveAvatar] = useState(null)

  return (
    <div className="av-page">
      <div className="av-hero">
        <div className="av-hero-year">2045</div>
        <h1 className="av-title">Project Avatar</h1>
        <p className="av-sub">Dmitry Itskov · Digital Udødelighed · Bevidsthed uden Krop</p>
        <div className="av-badge">RUSSISK MILLIARDÆR · GLOBAL INITIATIVE · LANCERET 2011</div>
      </div>

      <div className="av-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`av-tab ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'vision' && (
        <div className="av-section">
          <div className="av-intro-card">
            <p>"Inden 2045 vil vi skabe teknologier der giver enhver mulighed for et nyt krop — en avatar — og til sidst at eksistere som et holografisk væsen af lys og information. Døden er ikke uundgåelig. Det er et ingeniørproblem."</p>
            <cite>— Dmitry Itskov, 2045 Initiative</cite>
          </div>

          {[
            { icon: '🌐', title: 'Hvad er 2045 Initiativet?', text: 'Grundlagt i 2011 af den russiske mediemagnate Dmitry Itskov (f. 1980). Ikke et statsligt projekt — en privat global bevægelse med verdens førende forskere, ingeniører, filosoffer og spirituelle lærere. Målet: Gøre biologisk udødelighed mulig for ALLE mennesker inden 2045 — ikke kun de rige.' },
            { icon: '🧬', title: 'Videnskaben bag', text: 'Projektet bygger på fire parallelle forskningsområder:\n• Neuroscience: Kortlægning af hjernens 86 milliarder neuroner\n• BCI (Brain-Computer Interface): Direkte forbindelse hjerne-computer\n• Robotics: Humanoid avatarer med menneskelig præcision og følsomhed\n• Consciousness Studies: Forståelse af hvad bevidsthed faktisk er' },
            { icon: '⚡', title: 'Forbindelsen til Transhumanisme', text: 'Ray Kurzweil (Google) forudsagde Singulariteten i 2045 — præcis samme år. Elon Musk (Neuralink), Bryan Johnson (Kernel) og Peter Diamandis (XPRIZE) arbejder alle på dele af dette puslespil. 2045 Initiativet er den mest ambitiøse og åbne version af dette mål.' },
            { icon: '✦', title: 'Den Spirituelle Dimension', text: 'Itskov inviterede aktivt Dalai Lama, hinduistiske swamier og kristne mystikere til sine konferencer. Hans argument: Åndelig transcendens og teknologisk transcendens peger mod det samme mål — befrielse fra det fysiske. Men hvad siger de gamle tekster om bevidsthed uden krop?' },
          ].map(s => (
            <div key={s.title} className="av-card">
              <div className="av-card-icon">{s.icon}</div>
              <h3 className="av-card-title">{s.title}</h3>
              <p className="av-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'avatars' && (
        <div className="av-section">
          <p className="av-phase-intro">Fire faser mod digital udødelighed — hvert trin bygger på det forrige.</p>
          {AVATARS.map(av => (
            <div key={av.id} className="av-avatar-card" style={{'--av-color': av.color}}
              onClick={() => setActiveAvatar(activeAvatar === av.id ? null : av.id)}>
              <div className="av-avatar-header">
                <div className="av-avatar-badge" style={{background: av.color + '22', border: `1px solid ${av.color}44`}}>
                  <span className="av-avatar-icon">{av.icon}</span>
                  <span className="av-avatar-id" style={{color: av.color}}>Avatar {av.id}</span>
                </div>
                <div>
                  <div className="av-avatar-name">{av.name}</div>
                  <div className="av-avatar-year">{av.year}</div>
                </div>
                <div className="av-avatar-status" style={{color: av.statusColor, borderColor: av.statusColor + '44'}}>
                  {av.status}
                </div>
              </div>
              <p className="av-avatar-desc">{av.desc}</p>
              {activeAvatar === av.id && (
                <div className="av-avatar-expanded">
                  <div className="av-avatar-reality">
                    <span className="av-label">VIRKELIGHED I DAG</span>
                    <p>{av.reality}</p>
                  </div>
                  <div className="av-avatar-dark">
                    <span className="av-label dark">DEN MØRKE SIDE</span>
                    <p>{av.dark}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'who' && (
        <div className="av-section">
          <div className="av-profile-card">
            <div className="av-profile-icon">👤</div>
            <h2 className="av-profile-name">Dmitry Itskov</h2>
            <p className="av-profile-title">Russisk mediemagnate · Transhumanist · Filantrop</p>
          </div>

          {[
            { t: 'Baggrund', d: 'Født 1980 i Rusland. Tjente sin formue som grundlægger af New Media Stars — et russisk internetmedie-selskab. Som ung millionær begyndte han at stille sig selv det ultimative spørgsmål: Hvad er bevidsthed, og kan den overleve kroppens død?' },
            { t: '2045 Initiative — Grundlæggelsen', d: 'I 2011 annoncerede Itskov sit "Avatar" projekt og oprettede 2045 Initiative. Han satte personligt hundredvis af millioner af dollars ind. Hans mål var ikke personlig profit — han ville åbne teknologien for alle. Han sendte breve til verdens 1000 rigeste milliardærer og bad dem om at bidrage til "den vigtigste sag i menneskelighedens historie".' },
            { t: 'Global Future 2045 Konferencerne', d: 'I 2012 og 2013 afholdt Itskov konferencer i Moskva og New York med over 50 verdens førende eksperter. Dalai Lama sendte sin støtte. Videnskabsmænd, filosoffer, spirituelle ledere og ingeniører arbejdede side om side mod et fælles mål.' },
            { t: 'Hvad skete der med ham?', d: 'Efter 2013-2014 blev Itskov markant mere tilbageholdende. 2045 Initiative webstedet opdateres sjældent. Spekulationer: Russisk regering lagde pres på ham. Han er fortsat aktiv men i baggrunden. Eller — projektet fortsætter i det skjulte, finansieret af ukendte interesser.' },
          ].map(s => (
            <div key={s.t} className="av-card">
              <h3 className="av-card-title">{s.t}</h3>
              <p className="av-card-text">{s.d}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'soul' && (
        <div className="av-section">
          <div className="av-intro-card" style={{borderColor:'rgba(212,168,67,0.3)'}}>
            <p>"Hvad sker der med sjælen når kroppen uploades? De gamle tekster vidste noget vi har glemt."</p>
          </div>

          {[
            { icon: '📖', trad: 'Gnosticisme', title: 'Bevidsthed som fanget Lys', text: 'Gnostikerne mente at menneskelig bevidsthed (Pneuma) er et gnist af det guddommelige lys fanget i materiel form. Archonerne skabte den fysiske verden som et fængsel for denne gnist. Avatar-teknologi fra et gnostisk perspektiv: Du flytter fra ét fængsel til et andet — fra biologisk til digital. Det sande mål er ikke en ny krop men befrielse fra AL materialitet.' },
            { icon: '🕉', trad: 'Hinduisme/Vedanta', title: 'Atman og Avataren', text: 'Selve ordet "Avatar" (अवतार) kommer fra Sanskrit og betyder "nedstigning" — en guds manifestation i fysisk form. Vedanta lærer at Atman (det sande Selv) allerede er udødeligt og transcenderer alle former. Avatar-teknologi er fra et vedantisk syn et avanceret legetøj — imponerende, men fundamentalt forvirrende om hvad vi egentlig er.' },
            { icon: '☯', trad: 'Taoisme', title: 'Den Naturlige Vej', text: 'Taoismen advarer mod at tvinge naturen. "Wu Wei" (ikke-handling) antyder at forsøget på at overskride døden via teknologi er en modstand mod Tao — den naturlige strøm. Dog: Taoistiske udødelighedssøgere brugte i årtusinder alkymistiske metoder for at transcendere biologien. Måske er teknologi blot moderne alkymi.' },
            { icon: '✦', title: 'Stargate Perspektivet', trad: '3D→5D', text: 'Fra Stargatens perspektiv er bevidsthedsudvikling fra 3D til 5D netop en form for "avatar"-transition — fra dense fysisk form til lettere energetisk eksistens. Forskellen: 5D evolution sker via indre transformation (Kundalini, pineal aktivering, kærlighed) — ikke ekstern teknologi. Itskovs projekt forsøger at opnå udefra hvad mystikere opnår indefra.' },
          ].map(s => (
            <div key={s.title} className="av-soul-card">
              <div className="av-soul-header">
                <span className="av-soul-icon">{s.icon}</span>
                <div>
                  <div className="av-soul-trad">{s.trad}</div>
                  <div className="av-soul-title">{s.title}</div>
                </div>
              </div>
              <p className="av-soul-text">{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'now' && (
        <div className="av-section">
          <p className="av-phase-intro">Hvad er realiteten i 2025? Hvem arbejder på hvad — og hvad skjuler de?</p>

          {[
            { icon: '🔌', company: 'Neuralink (Elon Musk)', status: 'AKTIV', text: 'Første menneskelige implantater i 2024. Chip (N1) implanteret i kraniet, 1024 elektroder i hjernen. Første patient (Noland Arbaugh) kontrollerer computer med tanker. Næste fase: tovejskommunikation — computer skriver til hjernen. Dette er Avatar B teknologi i sit første stadie.' },
            { icon: '💊', company: 'Kernel (Bryan Johnson)', status: 'AKTIV', text: 'Bryan Johnson (solgte Braintree til PayPal for $800M) investerer sin formue i at "ikke dø". Flux og Kernel Flow måler hjerneaktivitet non-invasivt. Hans "Blueprint" projekt dokumenterer hans krop ned til cellulært niveau. Han rapporterer at have "baglæns aldrings"-biomarkører.' },
            { icon: '🤖', company: 'Boston Dynamics / Figure AI', status: 'AKTIV', text: 'Humanoid robotter er her. Boston Dynamics Atlas er fuldt autonomt. Figure 01 kan have en samtale og udføre komplekse fysiske opgaver. OpenAI investerede $675M i Figure AI i 2024. Vi er ét til to årtier fra en krop du kan "bo i".' },
            { icon: '🌐', company: '2045 Initiative — Status', status: 'STILLE', text: 'Dmitry Itskov er markant stille siden 2014. Initiativets sociale medier opdateres minimalt. Men: Mange af projektets forskere arbejder nu i Silicon Valley og Kina — finansieret af samme tech-giganter. Målet er ikke glemt. Det er blot blevet privat og fragmenteret.' },
            { icon: '🇨🇳', company: 'Kina — Det Skjulte Kapløb', status: 'HEMMELIGT', text: 'Kinas Brain Project (2016) modtager statslig funding på niveau med USA\'s BRAIN Initiative. BGI Genomics kortlægger kinesisk befolknings DNA. Kina har ikke etiske begrænsninger som vestlige institutioner. De er meget muligvis foran på bevidsthedsforskning — men offentliggør ikke resultaterne.' },
          ].map(s => (
            <div key={s.company} className="av-now-card">
              <div className="av-now-header">
                <span className="av-now-icon">{s.icon}</span>
                <div className="av-now-company">{s.company}</div>
                <span className={`av-now-status ${s.status === 'AKTIV' ? 'active' : s.status === 'HEMMELIGT' ? 'secret' : 'quiet'}`}>{s.status}</span>
              </div>
              <p className="av-now-text">{s.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
