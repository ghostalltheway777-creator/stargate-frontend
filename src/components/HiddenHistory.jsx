import React, { useState } from 'react'
import './HiddenHistory.css'

const TABS = [
  { id: 'tartaria',  label: '🏰 Tartaria' },
  { id: 'mudflood',  label: '🌊 Mud Flood' },
  { id: 'buildings', label: '🏛 Bygninger' },
  { id: 'energy',    label: '⚡ Fri Energi' },
  { id: 'weather',   label: '🌧 Vejr Kontrol' },
  { id: 'phantom',   label: '📅 Phantom Tid' },
  { id: 'electric',  label: '🌌 Elektrisk Univers' },
]

const WEATHER_CONTROL = [
  {
    title: 'Chemtrails — Dokumenteret Faktum',
    text: 'Kondensationsstriber fra fly forsvinder normalt inden for sekunder til minutter. Chemtrails forbliver i timer og spreder sig til en hvid dis der dækker hele himlen.\n\nDOKUMENTATION:\n• CIA-direktør John Brennan nævnte "stratospheric aerosol injection" åbent i CFR-tale (2016)\n• Harvard\'s SCoPEx projekt spreder reflektive partikler i stratosfæren — finansieret af Bill Gates\n• USAF-dokument "Owning the Weather 2025" (1996): Plan for vejrkontrol inden 2025\n• 900+ peer-reviewed studier om "geoengineering" og "stratospheric aerosol injection"\n• EU-rapport om Climate Engineering metoder (2022)\n\nHVAD SPREDES:\n• Aluminiumoxid · Bariumsulfat · Strontium · Svovlsyre-partikler\n• Alle fundet i unormalt høje koncentrationer i regnvand, jord og menneskehår',
  },
  {
    title: 'HAARP — Vejr som Våben',
    text: 'HAARP (High-frequency Active Auroral Research Program) i Alaska bruger kraftige elektromagnetiske pulser til at opvarme ionosfæren.\n\nOFFICIELT FORMÅL: Kommunikationsforskring.\n\nDOKUMENTERET KAPABILITET:\n• Kan skabe kunstige ionosfæriske forandringer\n• Secretary of Defense William Cohen sagde i 1997: "Terrorism bruger elektromagnetiske bølger til at forstyrre vejr, jordskælv og vulkaner"\n• Venezuela og Pakistan anklager USA for vejr-krigsførelse\n• Eugenio Beltran Fuentes (mexicansk kongresmedlem): Skylden for tørke i Mexico\n\nLIGNENDE ANLÆG GLOBALT:\n• EISCAT i Norge · SURA i Rusland · HAARP kopier i Kina og Europa',
  },
  {
    title: 'Solar Geoengineering — Gates\' Plan',
    text: 'Bill Gates finansierer Harvard\'s SCoPEx projekt der vil sprøjte millioner af tons kalksten (calciumkarbonat) og svovlsyre-partikler ind i stratosfæren "for at reflektere sollys og modvirke global opvarmning".\n\nKONSEKVENSER:\n• Blokerer solens UV-B stråler → reducerer D-vitamin produktion hos alle levende organismer\n• Ødelægger ozonlaget\n• Ændrer monsum-mønstre → hungersnød i Asien og Afrika\n• Hvem kontrollerer termostat-knappen? Den der kontrollerer solen kontrollerer mad\n• Ingen demokratisk godkendelse\n\nDEN VIRKELIGE AGENDA:\n• Blokér solen → folk producerer intet D-vitamin → immunsystem svækkes → flere syge → mere medicin\n• Afhængighed af kunstigt lys og kunstige vitaminer\n• Kontrol over global landbrugsproduktion via vejr-kontrol',
  },
  {
    title: 'Historisk Vejrmanipulation',
    text: 'Vejrmanipulation er ikke nyt:\n\n• Operation Popeye (1967-1972): USA brugte cloud seeding over Ho Chi Minh-stien i Vietnam for at øge monsun og mudre vejene\n• Project Cirrus (1947): USA eksperimenterede med hurricane-manipulation\n• China National Weather Modification Office: Kina har officielt 50.000 vejrmanipulatorer og bruger milliarder på cloud seeding\n• UAE: Spreder kemikalier for kunstig regn i ørken\n• Israel: Aktiv cloud seeding siden 1975\n\nDET ER IKKE TEORI:\n• FN\'s Konvention ENMOD (1978) forbyder "militær brug af miljømodifikation" — det beviser at det eksisterer\n• 56 lande har underskrevet konventionen\n• Du kan ikke forbyde noget der ikke eksisterer',
  },
]

const TARTARIA_FACTS = [
  { icon: '🗺', title: 'Størst land i verden — officielle kort', text: 'På Encyclopædia Britannica 1771 og officielle europæiske kort frem til 1800-tallet er "Tartaria" eller "Grand Tartary" det STØRSTE land i verden — langt større end Rusland, Kina eller Indien. Det strakte sig fra Østeuropa til Stillehavet. Derefter forsvinder det fra alle kort.' },
  { icon: '🌍', title: 'Global civilisation — samme arkitektur overalt', text: 'Identisk arkitektur optræder på alle kontinenter: røde bygninger med hvide søjler, kuppelbygninger, stjernefæstninger. Fra Buenos Aires til Bombay til San Francisco — bygget "i 1800-tallet" af nybyggere med tømmerhakker og hestevogne? Umuligt.' },
  { icon: '📚', title: 'Slettet fra historiebøger', text: 'Søg "Tartaria" i officielle historiebøger fra før 1850 → massiv omtale. Søg i moderne historiebøger → næsten ingenting. En civilisation der var større end det Mongolske Imperium er næsten fuldstændig slettet fra den officielle fortælling.' },
  { icon: '🔥', title: 'Resetten — hvad skete der?', text: 'Teorien: En global katastrofe (muligvis plasma-event, kometenedslag eller bevidst militær handling) ramte Tartaria ca. 1750-1850. Vinderne omskrev historien. Overlevende børn blev adoptet af det "nye" system — Waisenhaus (børnehjem) optræder pludselig overalt i 1800-tallets Europa med tusinder af "forælreløse" børn.' },
]

const MUDFLOOD_EVIDENCE = [
  { title: 'Halvt begravede bygninger overalt', text: 'I byer verden over finder man bygninger hvor de første etager er under jordens overflade. Vinduer i kældre der engang var stueetager-vinduer. Kirker med halvt begravede tårne. Sankt Petersborg, Moskva, Chicago, London — alle har dette fænomen.' },
  { title: 'Anerledes konstruktioner', text: 'Kældre er bygget med finere materialer end etagerne over dem. Kældre har ornamentale vinduer og højloftede rum — typisk for beboelse, ikke opbevaring. Mange "kældre" har udgange der nu er under jord.' },
  { title: 'Foto-dokumentation 1850-1900', text: 'De tidligste fotografier af europæiske og amerikanske byer viser mennekser på gadeniveau — men bygningerne rundt om dem mangler tydeligt de øverste etager. De er begravet i jord op til halvvejs.' },
  { title: 'Verdensudstillingerne', text: 'Chicago 1893 "White City" — 200 enorme neo-klassiske bygninger opført på 2 år af utrænede arbejdere. Samme i Paris, London, Philadelphia. Bygningerne rives ned bagefter. Mange mener de var PRE-EKSISTERENDE Tartariske bygninger der blev "re-branded" som nybyggede.' },
]

const BUILDINGS = [
  { name: 'Europæiske katedraler', period: 'Hævdes bygget 1100-1400 e.Kr.', problem: 'Notre Dame, Köln Dom, Chartres — hævdes at tage 100-600 år at bygge med middelalder teknologi. Men fuger er perfecte, sten præcist tilpasset, akustik videnskabeligt optimal. Umuligt med datidens teknologi.', theory: 'Pre-eksisterende Tartariske bygninger genanvendt. Historien om "årtiers byggeri" er retcon.' },
  { name: 'Egyptiske pyramider', period: 'Hævdes bygget 2560 f.Kr.', problem: 'De 2.3 millioner sten á 2.5 tons hver. En sten pr. 2 minutter, 24/7, i 20 år. Eller en sten pr. minut i 40 år. Med kobberredskaber og menneskekraft. Umuligt.', theory: 'Bygget af en langt mere avanceret civilisation — muligvis ved brug af lydfrekvenser (cymatics/levitation) eller teknologi vi ikke kender.' },
  { name: 'Chicago World\'s Fair 1893', period: 'Hævdes bygget 1891-1893', problem: '200 massive neo-klassiske bygninger på 2 år. Ingen cement — brugte gips og hestehår. Rives ned bagefter. Kostede $27 millioner (=$800M i dag) — finansieret af hvem?', theory: 'Pre-eksisterende Tartariske bygninger ryddet for snavs og re-lanceret. Forklarer perfekt kvalitet og hurtig "nedrivning" — de måtte skjules igen.' },
  { name: 'Star Forts — Stjernefæstninger', period: 'Hævdes 1500-1700 e.Kr.', problem: 'Perfekte stjerneforme synlige kun fra luften. Verdensomspændende — fra Europa til Amerika til Asien til Afrika. Identisk design. Hvem koordinerede dette globalt i 1500-tallet?', theory: 'Tartarisk militær infrastruktur. Stjernefestningernes form optimerer plasma/energi afledning — måske forsvar mod plasma events, ikke kanonkugler.' },
  { name: 'St. Petersburg, Rusland', period: 'Hævdes grundlagt 1703', problem: 'Peter den Store "grundlagde" byen 1703. Men bygningerne er i en stil der ikke eksisterede i 1703. Zar-paladser med teknologi og skala der kræver årtier — ikke de 10 år der hævdes.', theory: 'Pre-Tartarisk by genopbygget/genanvendt. Mud Flood beviser: talrige halvt begravede bygninger i St. Petersborg dokumenteret i 1800-tals fotografier.' },
]

const ENERGY = [
  { title: 'Wardenclyffe Tower — Free Energy', text: 'Teslas Wardenclyffe Tower (1901-1917) skulle overføre elektricitet GRATIS til hele verden via jordens naturlige resonans. J.P. Morgan finansierede det — derefter stoppede han finansieringen da han forstod at man ikke kunne sætte en "meter" på gratis energi. Tårnet blev sprængt i 1917.', impact: 'Hvis det var lykkedes: Ingen elregninger nogensinde. Hele energiindustrien ville kollapse. Morgan og Rockefeller vidste dette.' },
  { title: 'Ioniske søjler som Tesla-spoler', text: 'Tartariske bygningers ioniske søjler (spiralformet kapitel) er identiske med Tesla-spoler i design. Store kuppelbygninger fungerer som Faraday-bure kombineret med Earth resonans-modtagere. Teorien: Tartarisk arkitektur var funktionel fri energi infrastruktur — ikke blot dekorativ.', impact: 'Det forklarer HVORFOR alle disse bygninger har identisk design globalt — det var et globalt gratis energi-netværk.' },
  { title: 'Royal Raymond Rife — frekvensmedicin', text: 'Dr. Rife (1930\'erne) udviklede et mikroskop 100× stærkere end nutidens og behandlede kræft med specifikke frekvenser — 100% succesrate i klinisk studie. AMA (American Medical Association) ødelagde hans laboratorium, brændte hans papirer, ruinerede ham.', impact: 'Frekvensmedicin ville eliminere Big Pharma. Det er det samme der skete med Tesla og Tartarisk gratis energi — enhver teknologi der truer profit-modellen undertrykkes.' },
  { title: 'Elektriske civilisationer', text: 'Sumeriske tekster beskriver "ME" — enheder der gav guddommelig magt. Egyptiske "Dendera pærer" — relieffer der viser det der ligner elektriske glødepærer med tråd og sokkel, dateret 50 f.Kr. Baghdad-batterier (250 f.Kr.) producerer elektricitet. Mesopotamisk civilisation kendte elektricitet.', impact: 'Vi har haft elektricitet og fri energiteknologi i årtusinder. Den er blevet undertrykt gentagene gange af den herskende klasse.' },
]

const PHANTOM_TIME = [
  { claim: 'Heribert Illig\'s Phantom Time Hypothesis (1991)', text: 'Den tyske historiker Heribert Illig argumenterer for at 297 år (614-911 e.Kr.) aldrig eksisterede. Karl den Store, pave Leo III og Konstantin VII opfandt disse år for at placere Karl den Store i år 1000 e.Kr. og give kirken mere magt.' },
  { claim: 'Beviser for Phantom Time', text: '• Astronomiske beregninger: Gregoriansk kalenderreform 1582 burde have fjernet 13 dage, men fjernede kun 10 — de manglende 3 dage svarer til ~297 år der ikke eksisterede.\n• Ingen arkæologiske fund fra perioden 614-911 e.Kr. i Vesteuropa.\n• Karl den Store optræder i arabiske og byzantinske krøniker — men som en meget kortere periode.\n• Romansk og gotisk arkitektur springer abrupt over Karolingisk periode.' },
  { claim: '1000-årsproblemet', text: 'Hvem byggede alt det der hævdes bygget i middelalderen — 614-1200 e.Kr.? Denne periode er arkæologisk ekstremt tynd. De fleste "middelalder" bygninger viser sig at have tidligere lag. Phantom Time forklarer: Det meste af middelalderen er opdigtet — civilisationen fra 300-600 e.Kr. fortsatte direkte til 900-1200 e.Kr.' },
]

const ELECTRIC = [
  { title: 'Elektrisk Univers Teori', text: 'Mainstream astronomi: Gravitationen styrer universet. Alt er mekanisk.\n\nElektrisk Univers (Thornhill, Talbott): Plasma og elektricitet styrer universet. Galakser er forbundet via Birkeland strømme. Planeter og stjerner er elektrisk ladede.', connection: 'Bekræftet: NASA har målt Birkeland strømme. Plasma udgør 99.9% af det synlige univers. Elektricitet bevæger sig millioner af gange hurtigere end gravitationen.' },
  { title: 'Plasma og Mytologi', text: 'Alle antikke kulturer beskriver "himmelfænomener" — guder der kæmper på himlen med ild og torden. David Talbott\'s forskning: Disse er PRÆCISE beskrivelser af plasma-events der var synlige fra Jordens overflade.\n\nSaturns tidligere position som "Solsolen" — Saturn var engang nærme Jorden og lyste som en lille sol. Det er beskrevet i Vedaerne, egyptiske tekster, Sumeriske myter.', connection: 'Arkons fra Nag Hammadi = elektrisk plasma intelligens? Interdimensionelle væsener der eksisterer i Birkeland strømmene?' },
  { title: 'Thunderbolts of the Gods', text: 'Zeus\' tordenkile, Indras Vajra, Thors Mjolnir, Enki\'s strålende krone — alle kulturer beskriver identiske plasma-figurer. Ikke symbolik — direkte observation af plasma-discharge fænomener.\n\nSkotshen petroglypherne viser plasma-konfigurationer identiske med laboratorie plasma-eksperimenter — tegnet af folk for 10.000+ år siden.', connection: 'Vortex matematik\'s torus = plasma torus. Universets grundform er elektrisk og toroidal — præcis som Marko Rodin og Tesla beskrev det.' },
]

export default function HiddenHistory() {
  const [tab, setTab] = useState('tartaria')

  return (
    <div className="hh-page">
      <div className="hh-hero">
        <div className="hh-icon">🏰</div>
        <h1 className="hh-title">Skjult Historie</h1>
        <p className="hh-sub">Tartaria · Mud Flood · Fri Energi · Phantom Tid · Elektrisk Univers</p>
        <div className="hh-badge">ALT DER IKKE PASSER IND I DEN OFFICIELLE FORTÆLLING</div>
      </div>

      <div className="hh-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`hh-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'tartaria' && (
        <div className="hh-section">
          <p className="hh-intro">Tartaria var verdens største imperium — og det er næsten fuldstændig slettet fra historien. Her er hvad vi ved.</p>
          {TARTARIA_FACTS.map(f => (
            <div key={f.title} className="hh-card">
              <div className="hh-card-header">
                <span className="hh-card-icon">{f.icon}</span>
                <h3 className="hh-card-title">{f.title}</h3>
              </div>
              <p className="hh-card-text">{f.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'mudflood' && (
        <div className="hh-section">
          <p className="hh-intro">Byer verden over er delvist begravet under jord. Bygninger der hævdes at have kældre var engang stueetager. Hvad skete der?</p>
          {MUDFLOOD_EVIDENCE.map(e => (
            <div key={e.title} className="hh-card">
              <h3 className="hh-card-title">{e.title}</h3>
              <p className="hh-card-text">{e.text}</p>
            </div>
          ))}
          <div className="hh-highlight">
            <span className="hh-hl-label">🧠 KONKLUSION</span>
            <p>En global katastrofe — plasma event, kometenedslag eller kontrolleret destruktion — ramte Tartarisk civilisation ca. 1750-1850. Vinderne begravede bogstaveligt talt fortiden under jord og omskrev historien. "Nybyggere" i Amerika og "modernisering" i Europa var faktisk genopbygning oven på det der var.</p>
          </div>
        </div>
      )}

      {tab === 'buildings' && (
        <div className="hh-section">
          <p className="hh-intro">Disse bygninger eksisterer. Den officielle forklaring er teknisk umulig. Her er hvad der faktisk kan have sket.</p>
          {BUILDINGS.map(b => (
            <div key={b.name} className="hh-building-card">
              <div className="hh-building-name">{b.name}</div>
              <div className="hh-building-period">Officielt: {b.period}</div>
              <div className="hh-problem-box">
                <span className="hh-problem-label">❌ PROBLEMET</span>
                <p>{b.problem}</p>
              </div>
              <div className="hh-theory-box">
                <span className="hh-theory-label">💡 ALTERNATIV TEORI</span>
                <p>{b.theory}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'energy' && (
        <div className="hh-section">
          <p className="hh-intro">Fri energi er ikke teori — det er bevist teknologi der er blevet undertrykt gentagene gange. Her er dokumentationen.</p>
          {ENERGY.map(e => (
            <div key={e.title} className="hh-card">
              <h3 className="hh-card-title">{e.title}</h3>
              <p className="hh-card-text">{e.text}</p>
              <div className="hh-impact">⚡ {e.impact}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'weather' && (
        <div className="hh-section">
          <p className="hh-intro">Vejrkontrol er ikke science fiction — det er dokumenteret, finansieret og implementeret. Chemtrails, HAARP og Solar Geoengineering er alle verificerede programmer.</p>
          {WEATHER_CONTROL.map(w => (
            <div key={w.title} className="hh-card">
              <h3 className="hh-card-title">{w.title}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{w.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'phantom' && (
        <div className="hh-section">
          <p className="hh-intro">Hvad hvis 297 år af europæisk middelalderhistorie aldrig eksisterede? Det er Heribert Illig's kontroversielle men veldokumenterede tese.</p>
          {PHANTOM_TIME.map(p => (
            <div key={p.claim} className="hh-card">
              <h3 className="hh-card-title">{p.claim}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{p.text}</p>
            </div>
          ))}
          <div className="hh-highlight">
            <span className="hh-hl-label">🔗 FORBINDELSEN TIL ARCHONS</span>
            <p>Apocryphon of John beskriver Archons der aktivt manipulerer menneskelig perception af tid og rum. Phantom Time, Mud Flood og Tartarisk sletning er ikke separate teorier — de er dele af én systematisk manipulation af menneskelig historisk bevidsthed. At kontrollere historien er at kontrollere fremtiden.</p>
          </div>
        </div>
      )}

      {tab === 'electric' && (
        <div className="hh-section">
          <p className="hh-intro">Universet er ikke primært gravitationelt — det er elektrisk. Og det har massive implikationer for alt vi tror vi ved om fysik, kosmologi og bevidsthed.</p>
          {ELECTRIC.map(e => (
            <div key={e.title} className="hh-card">
              <h3 className="hh-card-title">{e.title}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{e.text}</p>
              <div className="hh-connection">⬡ {e.connection}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
