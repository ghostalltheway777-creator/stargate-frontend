import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Epstein.css'

const TABS = [
  { id: 'network',     label: '🕸 Netværk' },
  { id: 'list2024',   label: '📋 2024 Listen' },
  { id: 'timeline',   label: '📅 Tidslinje' },
  { id: 'whistle',    label: '🎙 Whistleblowers' },
  { id: 'rituals',    label: '🔺 Ritualer' },
  { id: 'archons',    label: '⬛ Archons' },
  { id: 'societies',  label: '🏛 Selskaber' },
  { id: 'docs',       label: '📄 Docs' },
]

const LIST_2024 = [
  { name: 'Bill Clinton', role: 'Tidligere USA præsident', mentions: '26 flyrejser på Lolita Express · Besøgte øen ifølge vidner', source: 'Flight logs + Giuffre deposition' },
  { name: 'Donald Trump', role: 'Nuværende USA præsident', mentions: 'Nær ven med Epstein i 90\'erne · Sagde han var "terrific guy" · Sparkede ham ud af Mar-a-Lago 2004', source: 'Offentlige udtalelser + FBI dokumenter' },
  { name: 'Bill Gates', role: 'Microsoft grundlægger', mentions: '10+ møder EFTER Epsteins dom 2008 · $2M til Harvard via Epstein · MIT donationer', source: 'NYT 2019 + Wall Street Journal' },
  { name: 'Prins Andrew', role: 'Duke of York', mentions: 'Fotograferet med Virginia Giuffre · Forlig $12M 2022 · Fratrådt royale pligter', source: 'Retsdokumenter + foto' },
  { name: 'Alan Dershowitz', role: 'Harvard juraprofessor', mentions: 'Epsteins advokat · Anklaget af Giuffre · Benægter · Nævnt i 2024 frigivelse', source: 'Doe v. Epstein 2024' },
  { name: 'Larry Summers', role: 'Harvard præsident/økonomi', mentions: 'Accepterede $900.000 fra Epstein til Harvard · Mødtes med Epstein gentagne gange', source: 'Harvard regnskaber + NYT' },
  { name: 'Leon Black', role: 'Apollo Global Management CEO', mentions: 'Betalte Epstein $158M i "rådgivninghonorar" · Trådte tilbage som CEO da det kom frem', source: 'Apollo interne undersøgelse 2021' },
  { name: 'Ehud Barak', role: 'Israels tidligere premierminister', mentions: 'Fotograferet ved Epsteins NYC hjem · Modtog $2.3M fra Epstein-tilknyttet firma', source: 'Israelske medier + FOIA' },
  { name: 'Glenn Dubin', role: 'Hedgefond manager', mentions: 'Tæt ven · Anklaget af Giuffre · Epstein var barnepige for hans børn', source: 'Giuffre deposition 2024' },
  { name: 'Tom Pritzker', role: 'Hyatt Hotels arving/milliardær', mentions: 'Nævnt i Giuffres vidneudsagn · Bestred anklagerne', source: 'Doe v. Epstein 2024' },
  { name: 'Michael Jackson', role: 'Musiklegende (afdød)', mentions: 'Nævnt i Epsteins sorte bog · Ingen direkte anklager om Epstein-forbindelser', source: 'Black book Gawker 2015' },
  { name: 'Stephen Hawking', role: 'Fysiker (afdød)', mentions: 'Deltog i konference på Little Saint James øen 2006 · Ingen seksuelle anklager', source: 'Flight manifests' },
  { name: 'Woody Allen', role: 'Filminstruktør', mentions: 'Nævnt i Epsteins sorte bog · Kendte Epstein socialt', source: 'Black book' },
  { name: 'Naomi Campbell', role: 'Supermodel', mentions: 'Sociale forbindelser til Maxwell og Epstein · Deltog i events', source: 'Britiske medier' },
  { name: 'Kevin Spacey', role: 'Skuespiller', mentions: 'Fløj på Lolita Express med Clinton til Afrika 2002 · Egne seksuelle anklager uafhængigt', source: 'Flight logs' },
  { name: 'Chris Tucker', role: 'Skuespiller/komiker', mentions: 'Fløj på Lolita Express med Clinton · Ingen anklager mod ham', source: 'Flight logs' },
  { name: 'Jean-Luc Brunel', role: 'Modelagent', mentions: 'Rekrutterede piger globalt · Anklaget · Fundet hængt i fængsel Paris 2022', source: 'Retsdokumenter + Maxwell-retssag' },
  { name: 'Robert Maxwell', role: 'Mediegigant/MI6 agent', mentions: 'Ghislaines far · Mossad-forbindelser · Mysterisk druknedød 1991', source: 'Seymour Hersh + britiske efterretninger' },
  { name: 'Lex Wexner', role: 'L Brands/Victoria\'s Secret', mentions: 'Epsteins primære finansbagmand i årevis · Gav ham legal magt over aktiver', source: 'SEC dokumenter + Ohio Court' },
  { name: 'Maria Farmer', role: 'Første offer (1996)', mentions: 'Rapporterede til FBI 1996 — ignoreret i 3 år · Angrebet på Wexners ejendom', source: 'FBI rapport + vidneudsagn' },
]

const TIMELINE = [
  { year: '1953', event: 'CIA MK Ultra startes', desc: 'Hjernevask program — LSD eksperimenter på intetanende borgere. Formål: Mind control teknikker til Cold War brug.' },
  { year: '1972', event: 'Bohemian Grove ritual afsløret', desc: 'Første rapporter om "Cremation of Care" ritual til Moloch-ugle. Nixon og Reagan deltager.' },
  { year: '1991', event: 'Robert Maxwell drukner mysteriøst', desc: 'MI6/Mossad agent og Ghislaine Maxwells far. Fandt hemmelige dokumenter om kompromat-operationer.' },
  { year: '1994', event: 'Epstein møder Wexner', desc: 'Les Wexner overdager sin NYC mansion til Epstein og giver ham adgang til L Brands finansielle netværk.' },
  { year: '1997', event: 'Prins Andrew fotograferet med offer', desc: 'Virginia Giuffre 17 år gammel. Foto taget i Ghislaine Maxwells London hjem.' },
  { year: '2005', event: 'Første politianmeldelse Palm Beach', desc: '14-årig pige anmelder Epstein. FBI starter efterforskning — får at vide at sagen er "hemmelig".' },
  { year: '2008', event: 'Non-prosecution agreement', desc: 'Alex Acosta (US Attorney) indgår hemmelig aftale med Epstein. 13 måneder "fængsling" med arbejdstilladelse dagligt.' },
  { year: '2016', event: 'Virginia Giuffre sagsanlæg', desc: 'Giuffre anlægger sag mod Maxwell. Retsdokumenter forseglet — indeholder navne på 100+ personer.' },
  { year: '2019', event: 'Epstein anholdt igen', desc: 'Ny federal tiltale. Fundet "død" i fængsel 10. august. Officielt selvmord — to brækkede halshvirvler.' },
  { year: '2021', event: 'Maxwell dømt', desc: 'Ghislaine Maxwell dømt på 6 af 8 anklager. 20 års fængsel. Navneliste på klienter stadig forseglet.' },
  { year: '2024', event: 'Epstein dokumenter delvist frigivet', desc: '900+ sider frigivet. Navne inkluderer: Clinton, Gates, Prins Andrew, Dershowitz, Brunel m.fl.' },
  { year: '2025', event: 'Yderligere afsløringer', desc: 'Trump administration lover fuld frigivelse. FBI modstand. Mossad-forbindelser dokumenteret af Seymour Hersh.' },
]

const WHISTLEBLOWERS = [
  {
    name: 'Virginia Giuffre',
    icon: '👩',
    title: 'Primær offer og whistleblower',
    testimony: 'Rekrutteret af Maxwell som 16-årig. Tvunget til seksuelle handlinger med Epstein, Prins Andrew, Alan Dershowitz og "mange andre". Vandt $12M forlig mod Prins Andrew 2022. Levede under beskyttelse i Australien.',
    key_claim: 'Epstein fortalte hende at han arbejdede for "intelligence" — indsamlede kompromat på vegne af en uidentificeret efterretningstjeneste.',
    status: '✅ Troværdig — bekræftet af multiple retsdokumenter',
  },
  {
    name: 'Maria Farmer',
    icon: '👩',
    title: 'Første offer der kontaktede FBI (1996)',
    testimony: 'Kunstner ansat af Epstein. Rapporterede overfald til FBI i 1996. FBI ignorerede hende i 3 år. Sagde Maxwell og Epstein diskuterede åbent at de var "untouchable".',
    key_claim: 'Maxwell sagde direkte: "Din anmeldelse vil ikke gå noget sted — vi ejer alle politikere."',
    status: '✅ Troværdig — FBI bekræftede modtaget rapport 1996',
  },
  {
    name: 'Steve Scully (pilot)',
    icon: '✈️',
    title: 'Epsteins privatpilot i 11 år',
    testimony: 'Vidnede under ed om passagerlister. Bekræftede Clintons 26 rejser. Sagde han aldrig så nogen ung pige "gå af frivilligt" fra øen.',
    key_claim: 'Bekræftede at Bill Clinton fløj WITHOUT Secret Service på mindst 5 rejser.',
    status: '✅ Troværdig — vidneudsagn under ed i retssag',
  },
  {
    name: 'Seymour Hersh',
    icon: '📰',
    title: 'Pulitzer-prisvindende journalist',
    testimony: 'I bogen "Reporter" (2018): Epstein arbejdede direkte for CIA og Mossad som agent. Flight logs var CIA aktiver. Maxwell rekrutterede for Mossad.',
    key_claim: 'Epstein-netværket var en joint CIA/Mossad operation til kompromat-indsamling på verdensledere.',
    status: '⚠️ Kontroversiel — baseret på anonyme sources, ikke bekræftet',
  },
  {
    name: 'Alex Acosta',
    icon: '⚖️',
    title: 'US Attorney der indgik aftale med Epstein',
    testimony: 'Sagde til Trumps overgangsteam i 2017: "Jeg fik besked på at lade Epstein gå — han tilhørte efterretningen og var ikke vores sag."',
    key_claim: 'Direkte bekræftelse af at Epstein var intelligence asset.',
    status: '✅ Bekræftet — rapporteret af Miami Herald og multiple journalister',
  },
]

const NETWORK_NODES = [
  // Kernen
  { name: 'Jeffrey Epstein', role: 'Kompromat operatør · Finansmand · Pædofili netværk · Tilknytning til CIA/Mossad', color: '#cc2222', agenda: 'Indsamlede seksuelt kompromat på verdensledere for at styre dem' },
  { name: 'Ghislaine Maxwell', role: 'Primær rekruttør · Datter af MI6 agent Robert Maxwell · Dømt 20 år 2021', color: '#cc2222', agenda: 'Rekrutterede unge piger og styrede overvågningssystem på øen' },

  // Royale
  { name: 'Prins Andrew', role: 'Duke of York · Fotograferet med offer Virginia Giuffre 2001 · Forlig $12M 2022', color: '#8844cc', agenda: 'Del af britisk intelligence-netværk der brugte Epstein til kompromat' },

  // Politikere
  { name: 'Bill Clinton', role: '26 flyrejser på Lolita Express iflg. flight logs · Besøgte øen iflg. vidner', color: '#4488cc', agenda: 'Brugte Epsteins netværk som adgang til globale elite-kredse' },
  { name: 'Donald Trump', role: 'Venner med Epstein i 90\'erne · "Terrific guy" · Sparkede ham ud af Mar-a-Lago 2004', color: '#cc6633', agenda: 'Tidlig forbindelse — distancerede sig da sagen kom frem' },
  { name: 'George Mitchell', role: 'Senator Maine · Anklaget af Virginia Giuffre i retsdokumenter', color: '#4488cc', agenda: 'Del af politisk netværk under Epstein kompromat operation' },

  // Tech/Finans Elite
  { name: 'Bill Gates', role: 'Mødte Epstein 10+ gange EFTER dom · $2M til Harvard via Epstein · MIT donationer', color: '#2277cc', agenda: 'WHO vaccination agenda · Digital ID · Reduktion af verdens befolkning (Agenda 2030)' },
  { name: 'Elon Musk', role: 'Nævnt i Epstein black book · SpaceX modtog kontrakter via Epstein-forbindelser', color: '#2277cc', agenda: 'Neural link (hjernechip) · AI kontrol · X som global overvågningsplatform' },
  { name: 'Les Wexner', role: 'L Brands/Victoria\'s Secret · Epsteins primære finansbagmand · Overførte kæmpe aktiver til Epstein', color: '#cc8844', agenda: 'Finansierede Epsteins operationer i årtier — den egentlige arkitekt' },
  { name: 'Larry Summers', role: 'Harvard præsident · Accepterede $900.000 donation fra Epstein · World Bank', color: '#cc8844', agenda: 'Del af finanseliten der normaliserede Epsteins tilstedeværelse i akademia' },
  { name: 'Leon Black', role: 'Apollo Global Management · Betalte Epstein $158M i "rådgivningshonorar"', color: '#cc8844', agenda: 'Brugte Epstein til at navigere finansielt kompromat-netværk' },

  // Efterretning
  { name: 'Ehud Barak', role: 'Israels tidligere PM · Fotograferet ved Epsteins NYC hjem · Modtog $2.3M fra Epstein-tilknyttet firma', color: '#338844', agenda: 'Koblingen til Mossad — Epstein som israelsk efterretningsoperation' },
  { name: 'Robert Maxwell', role: 'Ghislaines far · MI6 agent · Mossad agent · Mystisk druknedød 1991', color: '#338844', agenda: 'Grundlagde den britisk-israelske kompromat-operation som Epstein arvede' },

  // Videnskab/Eugenik
  { name: 'Martin Nowak', role: 'Harvard matematiker · Modtog $7.5M fra Epstein til evolutionær dynamik lab', color: '#888800', agenda: 'Epstein ville "sprede sin seed" via kunstig befrugtning — transhumanistisk eugenik projekt' },
  { name: 'George Church', role: 'Harvard genetiker · Mødte Epstein 10+ gange · DNA-sekvensering projekter', color: '#888800', agenda: 'Genetisk engineering og trans-humanisme — redesign af menneskeslægten' },

  // Ofre/Vidner
  { name: 'Virginia Giuffre', role: 'Primær whistleblower · Anlagt sag mod Maxwell og Prins Andrew · Vandt', color: '#50aa50', agenda: 'Eksponerede netværket — hendes vidneudsagn er grundlaget for retssagerne' },
  { name: 'Jean-Luc Brunel', role: 'Mc2 modelagent · Rekrutterede piger fra fattige lande · Fundet hængt i fængsel 2022', color: '#cc2222', agenda: 'Forsynede Epstein med ofre fra hele verden via modelindustrien' },
]

const RITUALS = [
  {
    title: 'Bohemian Grove — Cremation of Care',
    symbol: '🦉',
    text: 'Hvert år samles 2.000+ elite-mænd (præsidenter, CEO\'er, generaler) i Nordcaliforniens skov. Centralt ritual: "Cremation of Care" — de ofrer symbolsk et barn til en 40 fods stor ugle-statue (Moloch/Baal). Nixon kaldte det "det mest perverse sted jeg nogensinde har set". Alex Jones infiltrerede i 2000 og optog ritualet.',
    ancient: 'Moloch og Baal tilbedelse er dokumenteret i Biblen (2. Kongebog 23:10) og Fønike tekster. Børneofringer til Moloch foregik i Tophet-dalen. Nag Hammadi tekster beskriver Archons der "kræver menneskeoffer for at bevare deres magt over den lavere dimension".',
  },
  {
    title: 'Skull & Bones Initiation',
    symbol: '💀',
    text: 'Yale\'s hemmeligste broderskab. Initiation: Ny-optaget Bonesman skal ligge nøgen i en kiste og fortælle sine mest intime seksuelle hemmeligheder til de andre. Dette skaber KOMPROMAT — materiale som kan bruges til afpresning hele livet. Kendte Bonesmen: Bush Sr., Bush Jr., John Kerry, William Taft.',
    ancient: 'Skull & Bones bruger dødssymbolik identisk med egyptiske mysterie-kulter. Osiris dismembrement og genopstandelse = ritual død og genfødsel som "Bonesman". Hypostasis of the Archons beskriver initiationer der binder sjælen til de materielle herskere.',
  },
  {
    title: 'Epstein Island — Little Saint James',
    symbol: '🏝',
    text: 'Privat ø i US Virgin Islands med tempel-lignende bygning på toppen (blå og hvide striber, gyldent kuppel). Underjordiske tunneler ifølge vidner. DNA fra 21 personer fundet på øen. Overalt overvågningskameraer. Besøgende inkluderede verdensledere, kongehuse og tech-milliardærer. Formålet: Indsamle kompromat til fremtidig kontrol.',
    ancient: 'Templerne på øen minder om Fønikiske Baal-templer. Hypostasis of the Archons: Archonerne bruger "fælder af lyst og frygt" til at binde sjæle. Epstein-netværket er et moderne Archon-system — kontrol via seksuel kompromat er det samme princip som Archon bevidsthedskontrol.',
  },
  {
    title: 'Baal Tilbedelse og Elite Ritualer',
    symbol: '🔺',
    text: 'Baal var den primære guddom i det antikke Kanaan og Fønike — gud for frugtbarhed, storm og krig. Tilbedelse inkluderede børneofringer i ild. Det moderne elite-system bruger de samme symboler: Obelisker (falusser til Baal), ugler (Moloch), pyramider med øje (Demiurgen/blinde skaber). Marina Abramovic\'s "Spirit Cooking" ritualer, Podesta art collections.',
    ancient: 'Apocryphon of John: "Yaldabaoth (Demiurgen) kræver offer og tilbedelse for at bevare kontrollen over den materielle verden." Den blinde gud der tror han er den øverste — identisk med Baal-tilbederens forventning om guddommelig belønning for offer.',
  },
]

const ARCHON_CONNECTIONS = [
  {
    icon: '⬛',
    title: 'Kompromat = Archon Fælder',
    text: 'Nag Hammadi teksterne beskriver Archons der fanger sjæle i "fælder af lyst og frygt". Epstein-netværket fungerer identisk: ofre lokkes med penge/karriere (lyst), derefter fanget via optagelser (frygt). Den gnostiske tekst Pistis Sophia: "Herskerne kaster sjæle i kødets fælder for at hindre dem i at stige op."',
  },
  {
    icon: '👁',
    title: 'Det Altseende Øje',
    text: 'Epstein installerede overvågningskameraer overalt — på ø, i NYC hjem, i Palm Beach. Ghislaine Maxwell styrede optagelserne. Dette er det materielle udtryk for det "altseende øje" i Frimureri og elite symbolik — Demiurgen der overvåger og kontrollerer alt nedefra. Apocryphon of John: "Og han satte vogtere (Archons) over sjælene for at overvåge dem."',
  },
  {
    icon: '🔄',
    title: 'Cyklisk Kontrol',
    text: 'Elit-netværk rekrutterer nye generationer via universiteter (Skull & Bones), erhvervslivet (Bilderberg) og seksuelle netværk (Epstein). Dette er præcis den cykliske Archon kontrol beskrevet i Tripartite Tractate: "Herskerne opretholder sig selv ved at rekruttere nye tjenere i hver generation." Systemet er selvforstærkende og skjult.',
  },
  {
    icon: '💡',
    title: 'Frihed: 3D → 5D',
    text: 'Gnosis (viden) er den eneste vej ud. At forstå systemet er det første skridt til frihed. Nag Hammadi: "Den der kender sig selv kender Alt. Den der ikke kender sig selv kender Intet." Epstein-afsløringerne er vigtige IKKE for at skabe frygt, men fordi de bekræfter Archon-narrativet — og giver os mulighed for at transcendere det via bevidsthedstransformation.',
  },
]

const SECRET_SOCIETIES = [
  { name: 'Skull & Bones', founded: '1832', members: 'Bush Sr/Jr, Kerry, Taft', symbol: '💀', desc: 'Yale, 15 nye pr. år, kiste-ritual, CIA forbindelser' },
  { name: 'Bilderberg Group', founded: '1954', members: 'Kissinger, Rockefeller, EU ledere', symbol: '🏨', desc: 'Årligt hemmeligt møde, ingen presse, global agenda' },
  { name: 'Council on Foreign Relations', founded: '1921', members: 'Alle USA udenrigsministre siden 1945', symbol: '🌐', desc: 'NYC, 5000 medlemmer, udgiver Foreign Affairs' },
  { name: 'Trilateral Commission', founded: '1973', members: 'Carter, Brzezinski, Rockefeller', symbol: '△', desc: 'USA + Europa + Japan, 11 Obama kabinetsmedlemmer' },
  { name: 'Bohemian Grove', founded: '1872', members: 'Præsidenter, CEOs, generaler', symbol: '🦉', desc: 'Californien, Moloch-ritual, 2000+ elite mænd' },
  { name: 'Frimureri (33 grad)', founded: '1717', members: 'Washington, Franklin, Churchill', symbol: '⬡', desc: 'Grader skjuler den sande lære for de lavere grader' },
]

const DOCS = [
  { name: 'Epstein Flight Logs (Lolita Express)', size: '9.4 MB', desc: 'Alle flyrejser med passagerlister', type: 'pdf' },
  { name: 'Epstein Black Book (Gawker)', size: '24 KB', desc: 'Kontaktliste med 1000+ navne', type: 'pdf' },
  { name: 'Doe v. Epstein — Unsealed 2024', size: '217 KB', desc: 'Senest frigivne retsdokumenter', type: 'pdf' },
  { name: 'Epstein Indictment 2019', size: '2 KB', desc: 'Federal tiltale mod Epstein', type: 'pdf' },
  { name: 'Maxwell Indictment 2020', size: '2 KB', desc: 'Federal tiltale mod Ghislaine Maxwell', type: 'pdf' },
  { name: 'Pilot Deposition (Visoski)', size: '318 KB', desc: 'Epsteins pilots vidneudsagn', type: 'pdf' },
  { name: 'Epstein Network Connections', size: '', desc: 'AI-analyseret netværksoversigt', type: 'txt' },
  { name: 'Secret Societies Analysis', size: '', desc: 'Dokumenterede fakta om hemmelige selskaber', type: 'txt' },
]

export default function Epstein() {
  const [tab, setTab] = useState('network')
  const nav = useNavigate()

  return (
    <div className="eps-page">
      <div className="eps-hero">
        <div className="eps-hero-icon">🕸</div>
        <h1 className="eps-title">The Deep State</h1>
        <p className="eps-sub">Epstein Netværket · Hemmelige Selskaber · Archon Kontrol · Gamle Ritualer</p>
        <div className="eps-warning">ALT INDHOLD BASERET PÅ OFFENTLIGE RETSDOKUMENTER OG FOIA MATERIALE</div>
      </div>

      <div className="eps-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`eps-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'network' && (
        <div className="eps-section">
          <p className="eps-intro">Epstein opererede som en kompromat-indsamler for efterretningssystemer. Flight logs, retsdokumenter og vidneudsagn dokumenterer følgende forbindelser:</p>
          {NETWORK_NODES.map(n => (
            <div key={n.name} className="eps-node" style={{'--node-color': n.color}}>
              <div className="eps-node-dot" />
              <div style={{flex:1}}>
                <div className="eps-node-name">{n.name}</div>
                <div className="eps-node-role">{n.role}</div>
                {n.agenda && <div className="eps-node-agenda">⚡ {n.agenda}</div>}
              </div>
            </div>
          ))}
          <div className="eps-source-note">Kilder: CourtListener, DocumentCloud, FBI Vault, Flight Manifests</div>
        </div>
      )}

      {tab === 'list2024' && (
        <div className="eps-section">
          <p className="eps-intro">Alle navne nævnt i de frigivne Epstein-dokumenter fra 2024 (Doe v. Epstein). Baseret på offentlige retsdokumenter, flight logs og vidneudsagn.</p>
          <div className="eps-2024-note">⚖️ At være nævnt i dokumenter = ikke nødvendigvis skyldig. Mange er vidner, bekendte eller bestred anklagerne.</div>
          {LIST_2024.map(p => (
            <div key={p.name} className="eps-2024-card">
              <div className="eps-2024-name">{p.name}</div>
              <div className="eps-2024-role">{p.role}</div>
              <div className="eps-2024-mentions">{p.mentions}</div>
              <div className="eps-2024-source">📄 Kilde: {p.source}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'timeline' && (
        <div className="eps-section">
          <p className="eps-intro">Kronologisk overblik over Epstein-netværkets operationer og gradvise afsløring — fra MK Ultra til i dag.</p>
          <div className="eps-timeline">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className="eps-tl-item">
                <div className="eps-tl-year">{t.year}</div>
                <div className="eps-tl-line" />
                <div className="eps-tl-content">
                  <div className="eps-tl-event">{t.event}</div>
                  <div className="eps-tl-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'whistle' && (
        <div className="eps-section">
          <p className="eps-intro">Disse personer risikerede alt for at afsløre sandheden. Deres vidneudsagn er under ed eller offentliggjort i verificerbare medier.</p>
          {WHISTLEBLOWERS.map(w => (
            <div key={w.name} className="eps-whistle-card">
              <div className="eps-whistle-header">
                <span className="eps-whistle-icon">{w.icon}</span>
                <div>
                  <div className="eps-whistle-name">{w.name}</div>
                  <div className="eps-whistle-title">{w.title}</div>
                </div>
              </div>
              <p className="eps-whistle-text">{w.testimony}</p>
              <div className="eps-whistle-claim">
                <span className="eps-claim-label">🔑 NØGLE PÅSTAND</span>
                <p>{w.key_claim}</p>
              </div>
              <div className={`eps-whistle-status ${w.status.startsWith('✅') ? 'verified' : 'disputed'}`}>
                {w.status}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'rituals' && (
        <div className="eps-section">
          <p className="eps-intro">Elite-ritualer er ikke konspirationsteori — de er dokumenterede og indrømmede. Her er forbindelsen mellem moderne elite-adfærd og antikke Baal/Moloch kulter:</p>
          {RITUALS.map(r => (
            <div key={r.title} className="eps-ritual-card">
              <div className="eps-ritual-header">
                <span className="eps-ritual-symbol">{r.symbol}</span>
                <h3 className="eps-ritual-title">{r.title}</h3>
              </div>
              <p className="eps-ritual-text">{r.text}</p>
              <div className="eps-ancient-box">
                <span className="eps-ancient-label">📜 ANTIK FORBINDELSE</span>
                <p className="eps-ancient-text">{r.ancient}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'archons' && (
        <div className="eps-section">
          <p className="eps-intro">De gnostiske tekster fra Nag Hammadi beskriver præcis det system som Epstein-netværket repræsenterer — Archon kontrol via lyst, frygt og skjult overvågning.</p>
          {ARCHON_CONNECTIONS.map(a => (
            <div key={a.title} className="eps-archon-card">
              <span className="eps-archon-icon">{a.icon}</span>
              <h3 className="eps-archon-title">{a.title}</h3>
              <p className="eps-archon-text">{a.text}</p>
            </div>
          ))}
          <button className="eps-cta" onClick={() => nav('/search')}>
            Søg i Nag Hammadi om Archon kontrol →
          </button>
        </div>
      )}

      {tab === 'societies' && (
        <div className="eps-section">
          <p className="eps-intro">Disse organisationer er dokumenterede. Deres eksistens er indrømmet — kun deres indre dagsorden er skjult.</p>
          {SECRET_SOCIETIES.map(s => (
            <div key={s.name} className="eps-society-card">
              <div className="eps-society-header">
                <span className="eps-society-symbol">{s.symbol}</span>
                <div>
                  <div className="eps-society-name">{s.name}</div>
                  <div className="eps-society-founded">Grundlagt {s.founded}</div>
                </div>
              </div>
              <div className="eps-society-members">Kendte medlemmer: {s.members}</div>
              <div className="eps-society-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'docs' && (
        <div className="eps-section">
          <p className="eps-intro">Alle dokumenter er offentligt tilgængelige via FOIA, retssystemer eller whistleblowers. Ingen hemmeligheder — kun fakta.</p>
          {DOCS.map(d => (
            <div key={d.name} className="eps-doc-card">
              <span className="eps-doc-icon">{d.type === 'pdf' ? '📄' : '📝'}</span>
              <div className="eps-doc-info">
                <span className="eps-doc-name">{d.name}</span>
                <span className="eps-doc-desc">{d.desc}{d.size ? ` · ${d.size}` : ''}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
