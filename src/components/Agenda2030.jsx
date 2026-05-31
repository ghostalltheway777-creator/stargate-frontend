import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Agenda2030.css'

const TABS = [
  { id: 'plan',    label: '📋 Planen' },
  { id: 'sdgs',    label: '🎯 SDG\'erne' },
  { id: 'digital', label: '💳 Digital Kontrol' },
  { id: 'food',    label: '🥩 Mad & Land' },
  { id: 'cities',  label: '🏙 15-Min Byer' },
  { id: 'resist',  label: '✦ Alternativet' },
]

const SDGS_DECODED = [
  { n:1,  sdg:'Ingen fattigdom', real:'Universal Basic Income — stat-afhængighed. Ingen der er afhængig af staten bider den hånd der fodrer dem.' },
  { n:2,  sdg:'Ingen sult', real:'Laboratoriekød, insektprotein, GMO. Kontrol over global fødevareforsyning via patenteret "bæredygtig" mad.' },
  { n:3,  sdg:'Sundhed og trivsel', real:'Global vaccineprogram-infrastruktur. WHO som global sundhedsmyndighed over nationale regeringer.' },
  { n:4,  sdg:'Kvalitetsuddannelse', real:'Global standardiseret curriculum. Kritisk tænkning erstattet af "global citizenship education".' },
  { n:6,  sdg:'Rent vand', real:'Privatisering af vandforsyning. Nestlé og BlackRock investerer massivt i vandrettigheder globalt.' },
  { n:11, sdg:'Bæredygtige byer', real:'15-minuttersbyer med digital bevægelsessporing. Smart cities med total sensor-overvågning.' },
  { n:13, sdg:'Klimahandling', real:'Carbon credits = ny skattekilde. ESG ratings kontrollerer hvilke virksomheder der overlever.' },
  { n:16, sdg:'Fred og institutioner', real:'Globale institutioner (FN, WHO, WEF) over nationale demokratier. "Multilateral governance."' },
  { n:17, sdg:'Partnerskaber', real:'Public-private partnerships = virksomheder styrer stats-funktioner. Regulatory capture formaliseret.' },
]

export default function Agenda2030() {
  const [tab, setTab] = useState('plan')
  const nav = useNavigate()

  return (
    <div className="ag-page">
      <div className="ag-hero">
        <div className="ag-icon">🌐</div>
        <h1 className="ag-title">Agenda 2030</h1>
        <p className="ag-sub">Den Rigtige Plan · WEF Great Reset · Digital Kontrol · Du Ejer Intet</p>
        <div className="ag-schwab-quote">
          <p>"You will own nothing, and you will be happy."</p>
          <cite>— Klaus Schwab · WEF · 2030 Vision</cite>
        </div>
      </div>

      <div className="ag-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`ag-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'plan' && (
        <div className="ag-section">
          <p className="ag-intro">FN's Agenda 2030 har 17 "bæredygtige udviklingsmål." Officielt handler det om at redde verden. I virkeligheden er det den mest ambitiøse kontrol-infrastruktur i historien.</p>

          <div className="ag-card">
            <h3>Hvad er Agenda 2030?</h3>
            <p>FN vedtog i 2015 "Transforming Our World: the 2030 Agenda for Sustainable Development" — 17 SDG-mål der skal nås inden 2030. Alle 193 FN-lande har underskrevet. Ingen folkeafstemninger. Ingen demokratisk godkendelse.</p>
            <p style={{marginTop:'10px'}}>Klaus Schwab (WEF) lancerede samme år "The Great Reset" — hans ord: <em>"COVID is a narrow window of opportunity to accelerate our transition to a more sustainable world."</em> Agenda 2030 og The Great Reset er to sider af samme mønt.</p>
          </div>

          <div className="ag-card">
            <h3>Hvem styrer det?</h3>
            {[
              ['WEF (World Economic Forum)', 'Klaus Schwab · private virksomheder sætter den globale dagsorden'],
              ['BlackRock & Vanguard', 'Ejer andele i næsten alle store virksomheder globalt · ESG-ratings tvinger compliance'],
              ['Bill Gates Foundation', 'Finansierer WHO, vacciner, farmland-opkøb, laboratoriekød, digitale ID-systemer'],
              ['FN og WHO', 'Implementerer politikker der omgår nationale demokratier'],
              ['Centralbanker (BIS)', 'Koordinerer overgang til CBDC — programmabel digital valuta'],
            ].map(([who, what]) => (
              <div key={who} className="ag-who-item">
                <div className="ag-who-name">{who}</div>
                <div className="ag-who-what">{what}</div>
              </div>
            ))}
          </div>

          <div className="ag-card red">
            <h3>Tidslinjen der ikke venter</h3>
            {[
              ['2025', 'WHO Pandemic Treaty — WHO kan erklære global nødsituation og tilsidesætte nationale love'],
              ['2026', 'CBDC udrulning i EU (Digital Euro). Kontanter fjernes gradvist'],
              ['2027', 'ESG-ratings obligatoriske for alle virksomheder i EU'],
              ['2030', 'Fuld implementering: Digital ID, CBDC, 15-minuttersbyer, lab-kød mainstream'],
            ].map(([year, event]) => (
              <div key={year} className="ag-timeline-item">
                <span className="ag-tl-year">{year}</span>
                <span className="ag-tl-event">{event}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'sdgs' && (
        <div className="ag-section">
          <p className="ag-intro">De 17 SDG-mål lyder godt. Hvad der gemmer sig bag dem er en anden historie.</p>
          <div className="ag-sdg-header">
            <span>SDG</span><span>Officielt</span><span>I Virkelighed</span>
          </div>
          {SDGS_DECODED.map(s => (
            <div key={s.n} className="ag-sdg-row">
              <span className="ag-sdg-n">{s.n}</span>
              <span className="ag-sdg-official">{s.sdg}</span>
              <span className="ag-sdg-real">{s.real}</span>
            </div>
          ))}
        </div>
      )}

      {tab === 'digital' && (
        <div className="ag-section">
          <p className="ag-intro">Digital ID + CBDC = total kontrol. Ingen af delene virker farlige alene. Kombinationen er det ultimative kontrolsystem.</p>

          {[
            {
              title: 'CBDC — Central Bank Digital Currency',
              icon: '💳',
              text: 'Programmabel digitial valuta udstedt direkte af centralbanker. Det lyder som PayMobile — men er fundamentalt anderledes:\n\n• Centralbanken kan PROGRAMMERE hvad du må bruge penge på\n• Udløbsdato på penge — tving forbrug i en bestemt periode\n• Geografisk begrænsning — penge virker kun i din by\n• Social credit score — brug kan begrænses baseret på adfærd\n• Ingen privathed — alle transaktioner synlige for staten\n\n117 lande undersøger eller implementerer CBDC. EU\'s Digital Euro er planlagt til 2026-2027.',
            },
            {
              title: 'Digital ID — EU Digital Identity Wallet',
              icon: '🪪',
              text: 'EU vedtog i 2024 eIDAS 2.0 — alle EU-borgere skal have en digital identitets-wallet. Officielt valgfri. Men:\n\n• Bank-adgang kræver snart digital ID-verifikation\n• Sundhedsydelser kobles til digital ID\n• Vaccine-status lagret i wallet\n• Bevægelsessporing via QR-koder i 15-minuttersbyer\n• Carbon footprint tracker integreret\n\nUden digital ID kan du ikke deltage i den digitale økonomi. "Valgfri" er ikke valgfrit i praksis.',
            },
            {
              title: 'Social Credit — Ikke kun Kina',
              icon: '📊',
              text: 'Kina\'s sociale kreditsystem beundres åbent af WEF som en model. Elementer er allerede implementeret i vesten under andre navne:\n\n• ESG scores for virksomheder (ESG = Environmental, Social, Governance)\n• Bank de-platforming af "kontroversielle" kunder (sket med politikere og aktivister i Canada 2022)\n• Insurance scores baseret på kørselsmønstre, mad-indkøb, søvn\n• "Nudging" via algoritmisk manipulation af hvad du ser\n\nDe Santis (Florida): "ESG is a Chinese-style social credit score."',
            },
          ].map(s => (
            <div key={s.title} className="ag-digital-card">
              <div className="ag-digital-header">
                <span className="ag-digital-icon">{s.icon}</span>
                <h3 className="ag-digital-title">{s.title}</h3>
              </div>
              <p className="ag-digital-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'food' && (
        <div className="ag-section">
          <p className="ag-intro">Kontroller maden — kontroller menneskeheden. Det har altid været den ultimative magtfaktor.</p>

          {[
            {
              title: 'Bill Gates ejer mest farmland i USA',
              icon: '🌾',
              text: '269.000 acres (109.000 hektar) farmland i 18 stater. Den største private farmlandejer i USA. Formålet ifølge Gates Foundation: "Fremme bæredygtig landbrug."\n\nSamtidigt finansierer Gates laboratoriekød (Impossible Foods, Beyond Meat), insektprotein-startups og vertikale landbrug. Mens han køber traditionelt farmland, promoverer han at du bør spise laboratorieproduceret mad.\n\nXi Jinping og kinesiske virksomheder køber også massivt amerikansk farmland nær militærbaser.',
            },
            {
              title: 'Insektprotein og laboratoriekød',
              icon: '🦗',
              text: 'WEF promoverer aktivt insektprotein som fremtidens mad. EU godkendte insektmel i 2022 — mange forarbejdede fødevarer indeholder nu insektprotein uden tydelig mærkning.\n\nLaboratoriekød (cultivated meat) produceres i industrielle bioreaktorer af cellekulturer. Kræver patenteret teknologi — ejerskab flyttes fra bonden til biotech-selskaber.\n\nHvem producerer din mad bestemmer hvad du spiser. Og hvad du spiser bestemmer din sundhed, din energi og din kapacitet til modstand.',
            },
            {
              title: 'Nitrogenkrisen — Hollands eksempel',
              icon: '🚜',
              text: 'Holland 2022: Regeringen tvang 3.000 bønder til at sælge deres gårde under "nitrogen reduction" program. Demonstration fra bønder i 20+ europæiske lande fulgte.\n\nHolland er verdens næststørste landbrugseksportør. "Nitrogen crisis" er dækket af WEF-dagsorden: koncentrér madproduktionen i færre hænder, eliminér småbønder, gør befolkninger afhængige af centraliseret forsyning.\n\nSrilanka 2021: Regeringen forbød kunstgødning over natten (WHO/WEF anbefaling). Landbruget kollapsede. Hungersnød. Regering væltet.',
            },
          ].map(s => (
            <div key={s.title} className="ag-food-card">
              <div className="ag-food-header">
                <span className="ag-food-icon">{s.icon}</span>
                <h3 className="ag-food-title">{s.title}</h3>
              </div>
              <p className="ag-food-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'cities' && (
        <div className="ag-section">
          <p className="ag-intro">15-minuttersbyen lyder som en bekvem by. Det er en by hvor alt hvad du behøver er inden for 15 minutter — og alt udenfor kræver tilladelse.</p>

          <div className="ag-city-card">
            <h3>Hvad er en 15-minuttersby?</h3>
            <p>Konceptet: Alle basale behov (arbejde, butikker, skole, sundhed) inden for 15 minutters cykeltur. Reducerer bilkørsel og CO2. Lyder ideelt.</p>
            <p style={{marginTop:'10px'}}>Oxford, UK (2024): 15-minuttersbyen implementeret med trafikzoner. For at køre til en anden zone: ansøg om tilladelse online. Begrænset til 100 gange om året. Kamera-kontrol. Bøde ved overtrædelse.</p>
            <p style={{marginTop:'10px'}}>Melbourne, Australien: "20-minute neighbourhood" policy. Bygget med sensor-infrastruktur der sporer bevægelsesmønstre.</p>
          </div>

          <div className="ag-city-card red">
            <h3>Smart Cities — Total Sensor Dækning</h3>
            {[
              'Ansigtsgenkendelses-kameraer i alle offentlige rum',
              'IoT sensorer der måler lyd, bevægelse og luftkvalitet',
              'Digitale betalingssystemer — ingen kontanter accepteres',
              'Elektriske mikromobility (løbehjul, cykler) med GPS-sporing',
              'Affaldssporing — dit affald analyseres for compliance',
              'Smart meters der registrerer energiforbrug i realtid',
              'Digitale bibliotekskort med læse-historik',
              'QR-kode adgang til offentlige rum og transport',
            ].map(s => (
              <div key={s} className="ag-sensor-item">📡 {s}</div>
            ))}
          </div>

          <div className="ag-city-card">
            <h3>C40 Cities Network</h3>
            <p>100 af verdens største byer — inkl. København, Aarhus — er med i C40. Deres 2030 mål inkluderer:</p>
            {[
              '"Zero private vehicles" for nye beboere i visse zoner',
              '"Meat and dairy free" kostanbefaling i offentlige institutioner',
              'Flyrejser begrænset til 1 per 3 år for gennemsnitsborgeren',
              '"New garments" (tøj) reduceret til 3 nye items per person per år',
            ].map(s => <div key={s} className="ag-sensor-item">⚠️ {s}</div>)}
            <p style={{marginTop:'12px', fontSize:'11px', color:'rgba(255,255,255,0.45)'}}>Kilde: C40 Cities "The Future of Urban Consumption in a 1.5°C World" rapport, 2019</p>
          </div>
        </div>
      )}

      {tab === 'resist' && (
        <div className="ag-section">
          <p className="ag-intro">At forstå planen er det første skridt. Det andet er at vælge bevidst hvad du vil støtte og hvad du ikke vil.</p>

          {[
            { icon:'🌱', title:'Støt lokale bønder', text:'Køb direkte fra lokale producenter. Deltag i andelslandbrug (CSA). Jo mere du køber lokalt, jo mindre magt har den globale fødevare-infrastruktur.' },
            { icon:'💵', title:'Brug kontanter', text:'Kontanter er anonyme og kan ikke slukkes. Brug dem bevidst som modstand mod det kontantløse samfund. Brug dem regelmæssigt for at holde dem i cirkulation.' },
            { icon:'🔐', title:'Beskyt din digitale privatliv', text:'VPN, Signal i stedet for SMS, ProtonMail i stedet for Gmail, DuckDuckGo i stedet for Google. Disse valg koster ingenting og reducerer data-indsamling massivt.' },
            { icon:'🌍', title:'Decentraliserede alternativer', text:'Krypto som Bitcoin er censur-resistent og ikke kontrollerbar af centralbanker. Ikke som investering — som principielt alternativ til CBDC.' },
            { icon:'🤝', title:'Byg lokale netværk', text:'Kend dine naboer. Deltag i lokale fællesskaber. Jo stærkere dine lokale bånd, jo mere resistent er du mod centraliseret kontrol.' },
            { icon:'✦', title:'Bevidsthed er den ultimative modstand', text:'Et menneske i høj bevidsthed, kærlighed og klarhed er det sværeste at kontrollere. Agenda 2030 trives på frygt, splittelse og ubevidsthed. Din 5D-rejse er ikke eskapisme — det er modstandskamp.' },
          ].map(r => (
            <div key={r.title} className="ag-resist-card">
              <span className="ag-resist-icon">{r.icon}</span>
              <div>
                <h4 className="ag-resist-title">{r.title}</h4>
                <p className="ag-resist-text">{r.text}</p>
              </div>
            </div>
          ))}

          <div className="ag-connect">
            <button className="ag-connect-btn" onClick={() => nav('/propaganda')}>📺 Propaganda & Narrativer →</button>
            <button className="ag-connect-btn" onClick={() => nav('/epstein')}>🕸 Deep State Netværket →</button>
            <button className="ag-connect-btn" onClick={() => nav('/system')}>⬛ 3D Magten →</button>
          </div>
        </div>
      )}
    </div>
  )
}
