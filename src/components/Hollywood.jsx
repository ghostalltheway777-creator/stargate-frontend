import React, { useState } from 'react'
import './Hollywood.css'

const TABS = [
  { id: 'tellavision', label: '📺 Tell-A-Vision' },
  { id: 'rituals',     label: '🕯 Ritualerne' },
  { id: 'bluebeam',   label: '👽 Operation Blue Beam' },
  { id: 'aliens',     label: '🛸 Alien Programmering' },
  { id: 'symbols',    label: '🔺 Symboler' },
  { id: 'awake',      label: '✦ At Se Det' },
]

export default function Hollywood() {
  const [tab, setTab] = useState('tellavision')

  return (
    <div className="hw-page">
      <div className="hw-hero">
        <div className="hw-icon">🎬</div>
        <h1 className="hw-title">HOLLY-WOOD</h1>
        <p className="hw-sub">Tell-A-Vision · Ritualerne · Operation Blue Beam · Bevidsthedskontrol</p>
        <div className="hw-badge">Holly = Magisk Træ · Wood = Trolldomsstav</div>
      </div>

      <div className="hw-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`hw-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'tellavision' && (
        <div className="hw-section">
          <div className="hw-alert">
            <p>"Tell-A-Vision" — TV'et fortæller dig en vision. Ikke din vision. Deres vision.<br/>
            "Program" — hvad du ser på TV hedder "programmer". Du bliver programmeret.</p>
          </div>

          {[
            {
              icon: '📺',
              title: 'Sproget afslører sandheden',
              text: 'TELEVISION:\n• "Tele" = fjern\n• "Vision" = syn, vision\n→ Fjern-syn. En vision sendt til dig fra et fjernt sted.\n\nPROGRAM:\n• Det du ser hedder "programmer"\n• Du sidder og modtager et "program"\n• Dit sind programmerres\n\nHOLLYWOOD:\n• "Holly" = den hellige Europæiske Kristtorn — brugt i trolldomsstave\n• "Wood" = træ, stav\n→ Hollywood = Trolldomsstaven der kaster trylleri over masserne\n\nDette er ikke tilfældig sprogbrug. Det er "hidden in plain sight" — okkultisternes foretrukne metode.',
            },
            {
              icon: '🧠',
              title: 'Alfatilstand og Bevidsthedskontrol',
              text: 'Når du ser TV aktivt går din hjerne i alfa-tilstand — den samme tilstand som ved let hypnose.\n\nI alfa-tilstand er din kritiske tænkning reduceret. Forslag passerer direkte til underbevidstheden uden at blive filtreret.\n\nDette er videnskabeligt dokumenteret af neurolog Herbert Krugman (CBS Research) i 1969:\n\n"TV producerer hurtige hjerneændringer fra beta til alfa. Det svarer til hvad vi ser ved hypnose."\n\nHvis du ser 3+ timer TV dagligt — er du i hypnotisk modtagelig tilstand i 3+ timer. Hvad er det du modtager?',
              src: 'Herbert Krugman, Journal of Advertising Research, 1971'
            },
            {
              icon: '🎭',
              title: 'Hvad de sender ind',
              text: 'I alfa-tilstand modtager du:\n\n• FRYGT: Nyheder er 95% dårlige nyheder. Frygt holder dig i lav frekvens og konform\n• SPLITTELSE: "Os vs. dem" — race, køn, politik, nation. Opdelt er svagt\n• FALSKT BEGÆR: Reklamer skaber kunstigt begær efter ting du ikke har brug for\n• NORMALISERING: Det der var utænkeligt for 20 år siden — normaliseres gradvist\n• FREMTIDSPROGRAMMERING: Films og serier "forudsiger" kommende begivenheder\n\nNFL Super Bowl halftime shows, Grammy Awards, MTV Music Awards — alt er okkulte ritualer udført foran milliarder af hypnotiserede seere.',
            },
            {
              icon: '📡',
              title: 'Edward Bernays — Propagandaens Fader',
              text: 'Edward Bernays — Sigmund Freuds nevø — opfandt moderne public relations og propaganda.\n\nHans bog "Propaganda" (1928):\n\n"Den bevidste og intelligente manipulation af de organiserede vaner og meninger hos masserne er et vigtigt element i det demokratiske samfund. Dem der manipulerer denne usynlige mekanisme i samfundet udgør en usynlig regering der er den sande regerende magt i vores land."\n\nBernays brugte Freuds indsigter om underbevidstheden til at kontrollere massernes adfærd. Hans teknikker bruges stadig — nu via sociale medier, Netflix og Spotify-algoritmer.',
              src: 'Edward Bernays: "Propaganda" (1928)'
            },
          ].map(s => (
            <div key={s.title} className="hw-card">
              <div className="hw-card-icon">{s.icon}</div>
              <h3 className="hw-card-title">{s.title}</h3>
              <p className="hw-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="hw-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'rituals' && (
        <div className="hw-section">
          <div className="hw-alert">
            <p>"Underholdningsindustrien er ikke underholdning. Det er et rituelt system med milliarder af uvidende deltagere."</p>
          </div>

          {[
            {
              icon: '🕯',
              title: 'Baal-Dyrkelse og Molok',
              text: 'Baal (eller Ba\'al) er en semitisk guddom der er forbundet med ofring — særligt børneofring ifølge antikke tekster.\n\nMolok er en anden Kanaanitisk guddom — afbildet som en kolossal statue med åben mund til offerild.\n\nBohemian Grove (California): En privat klub for verdens mest magtfulde mænd (presidents, CEOs, royals) mødes hvert år. Ritualet "Cremation of Care" udføres foran en 12 meter høj ugletavle ved en sø — lig en Molok-statue.\n\nRichard Nixon kaldte det "det mest forbandede homoseksuelle sted du nogensinde har set" — og Nixon deltog alligevel hvert år.',
              src: 'Alex Jones Bohemian Grove footage 2000; Nixon White House tapes 1971'
            },
            {
              icon: '🎵',
              title: 'Grammy Awards — Åbent Ritual',
              text: '2014 Grammy Awards: Katy Perry optrådte i heksekostume med åbne referencer til hekseri og mørk magi. Live på CBS foran 28 millioner seere.\n\n2023 Grammy Awards: Sam Smith og Kim Petras optrådte med djævelske kostumer og flammeeffekter i en åbenlys satanisk ceremoni.\n\nDisse er ikke "kunstneriske valg". De er bevidste ritualer udført for et massepublikum der er i alfa/hypnotisk tilstand — "harvesting energy" fra uvidende deltagere ifølge okkultisters eget verdensyn.\n\nBeyoncé, Jay-Z, Lady Gaga, Madonna — alle har åbent refereret til Illuminati og okkulte symboler.',
            },
            {
              icon: '📸',
              title: 'The Eye of Horus — Overalt',
              text: 'Tegn på bevidst okkulttilknytning i popkultur:\n\n• Det ene øje dækket (Eye of Horus/pineal)\n• Pyramid/trekant foran øje\n• 666-tegnet (tre fingre om øjet)\n• Sort og hvid schachbræt-mønster\n• Sommerfuglesymboler (MKUltra-relateret)\n• Ugle (Bohemian Grove, Minerva/Athena)\n\nDisse symboler genbruges KONSTANT på albumcovers, musikvideoer, modeblade, filmposters. Det er ikke tilfældigt.\n\nNår alle verdens topstjerner bruger de samme okkulte symboler — hvem har givet dem instruksen?',
            },
            {
              icon: '💊',
              title: 'MKUltra og Underholdningsindustrien',
              text: 'CIA\'s Project MKUltra (1953-1973) eksperimenterede med sindskontrol via hypnose, LSD, elektrochok og psykologisk tortur.\n\nMange forskere (bl.a. Mark Phillips, Fritz Springmeier) dokumenterer at underholdningsindustrien rekrutterer traumatiserede individer og bruger "alter-personligheder" — kunstige personligheder skabt af gentaget traume.\n\nBritney Spears\' sammenbrud (2007), Kanye West, Amanda Bynes, Lindsay Lohan — alle beskriver oplevelser der passer med dissociativ identitetsforstyrrelse og MKUltra-beskrivelser.\n\nMarilyn Monroe sagde kort inden sin død: "Jeg er involveret med magtige folk. De vil dræbe mig."',
              src: 'Fritz Springmeier: "Bloodlines of the Illuminati"; Mark Phillips: "Trance Formation of America"'
            },
          ].map(s => (
            <div key={s.title} className="hw-card">
              <div className="hw-card-icon">{s.icon}</div>
              <h3 className="hw-card-title">{s.title}</h3>
              <p className="hw-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="hw-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'bluebeam' && (
        <div className="hw-section">
          <div className="hw-alert">
            <p>Operation Blue Beam: En iscenessat global begivenhed der skulle samle menneskeheden under én global regering — ved hjælp af teknologi der lader som om det er guddommelig eller udenomsjordisk kontakt.</p>
          </div>

          {[
            {
              icon: '🛸',
              title: 'Hvad er Operation Blue Beam?',
              text: 'Serge Monast — canadisk journalist — afslørede i 1994 et påstået NASA/NWO-program kaldet "Project Blue Beam".\n\nDe fire trin:\n1. FALSKE ARKÆOLOGISKE FUND: Kunstige "opdagelser" der underminerer alle eksisterende religioners fundamenter\n2. RUMLIG LYSSHOW: Holografisk projektion på himlen over hele verden — Jesus, Allah, Buddha og andre religiøse figurer — der alle smelter sammen til én skikkelse\n3. TELEPATI: Elektronisk signaler sendes direkte til menneskehjernen der simulerer en "guds stemme"\n4. FALSK INVASION: Enten en iscenessat alien-invasion ELLER en falsk Antikrist-ankomst der kræver global militær respons\n\nMål: Befolkningen overgiver frivilligt national suverænitet til en global regering for at bekæmpe den fælles trussel.',
              src: 'Serge Monast: "Project Blue Beam" (1994) — Monast døde af "hjerteanfald" i 1996'
            },
            {
              icon: '💡',
              title: 'Teknologien Eksisterer',
              text: 'Dette er ikke science fiction. Teknologien er reel og dokumenteret:\n\n• HAARP (High-frequency Active Auroral Research Program): Kan manipulere ionosfæren og potentielt skabe atmosfæriske fænomener og EM-bølger\n• Holografisk projektion: Tupac Shakur-hologrammet (Coachella 2012) viste at store 3D hologrammer kan projiceres — og det var 2012-teknologi\n• Neurological Weapons: US Patent #3951134 — "Apparatus and method for remotely monitoring and altering brain waves"\n• Voice-to-Skull (V2K): US Army dokumenterede teknologi til at sende lyd direkte til hjernens auditoriske cortex\n\nDen teknologiske kapabilitet eksisterer. Spørgsmålet er om viljen og scenarien er til stede.',
              src: 'US Patent Office: Patent 3951134; HAARP official documentation; US Army V2K research'
            },
            {
              icon: '🎬',
              title: 'Hollywood Programmerede os til at Acceptere det',
              text: 'Tænk på alle alien-invasionsfilm de sidste 30 år:\n\n• Independence Day (1996): Menneskeheden forenet mod alien-trussel\n• War of the Worlds (2005): Panisk befolkning\n• Arrival (2016): Aliens kommunikerer — menneskeheden må "forstå" dem\n• Don\'t Look Up (2021): Folk ignorerer den åbenlyse trussel fra himlen\n• UFO-shows: Ancient Aliens, Unsolved Mysteries, UAP dokumentarer\n\nDisse film og serier normaliserer og forbereder befolkningens psykologiske reaktion.\n\nNår begivenheden sker — hvis den sker — vil de fleste tænke:\n"Jeg har set dette scenarie. Jeg ved hvad jeg skal gøre." — De er allerede programmerede til at reagere som ønsket.',
            },
            {
              icon: '📡',
              title: 'UAP Disclosure — Forberedelse?',
              text: 'Se timingen:\n\n2017: New York Times afslører UAP-program\n2020: Pentagon frigiver officielle UAP-videoer\n2021: UAP Task Force oprettet\n2023: Whistleblower David Grusch hævder non-human intelligence bekræftet\n2024: Kongreshøringer om UAP\n\nEfter 70 år af officiel benægtelse — PLUDSELIG er alt legit?\n\nHvorfor nu? Hvad ændrede sig?\n\nEn mulighed: Befolkningen er psykologisk klar efter årtiers alien-film.\nEn anden mulighed: Den planlagte begivenhed nærmer sig og befolkningen skal psykologisk forberede sig.\n\nDette er ikke et argument for at UAP\'er ikke eksisterer — de gør sandsynligvis. Det er et argument for at DISCLOSURE kan bruges som et redskab.',
            },
          ].map(s => (
            <div key={s.title} className="hw-card">
              <div className="hw-card-icon">{s.icon}</div>
              <h3 className="hw-card-title">{s.title}</h3>
              <p className="hw-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="hw-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'aliens' && (
        <div className="hw-section">
          <div className="hw-alert">
            <p>"Vi er den eneste generation i historien der er vokset op med hundredvis af alien-film og serier. Det er ikke tilfældigt."</p>
          </div>

          {[
            {
              icon: '🛸',
              title: 'Den Systematiske Alien-Programmering',
              text: '1977-2024: Hollywood har produceret 500+ større alien-relaterede film og serier.\n\nDet er ikke marked efterspørgsel. Det er markedsskabelse.\n\nHvad de programmerede ind:\n• Aliens KOMMER — som fjender eller venner\n• Menneskeheden behøver ENHED for at møde dem\n• Nationale grænser er IRRELEVANTE overfor en kosmisk trussel\n• En global regering ville HÅNDTERE det bedre\n• Militæret er vores BESKYTTELSE (ikke vores overvågere)\n\nDet er præcis det mentale setup der er nødvendigt for at befolkningen accepterer en global autoritær regering uden modstand.',
            },
            {
              icon: '📺',
              title: 'Fra Fiction til "Virkelighed"',
              text: 'Sekvensen:\n1950erne-60erne: Flyvende tallerkener — "det er bare folkelore"\n1970erne-80erne: "Close Encounters", ET — aliens er venlige\n1990erne-2000erne: Independence Day, X-Files — aliens kan være fjender\n2010erne: Ancient Aliens (History Channel) — aliens er legitim forskning\n2020erne: Officielle UAP afsløringer, Kongreshøringer\n\nGradvis normalisering over 70 år.\n\nI dag er det MAINSTREAM at tro på UAP\'er. Det var det ikke for 20 år siden.\n\nHvem styrede denne narrativ transformation? Hvem gav grønt lys til History Channel-serier? Hvem godkendte Pentagon UAP-videoernes frigivelse?',
            },
            {
              icon: '🔭',
              title: 'Det vi faktisk ved om UAP\'er',
              text: 'Separér bevidsthed fra manipulation:\n\nSandsynligvis sandt:\n• Uidentificerede fænomener eksisterer og er observeret\n• Teknologien overstiger vores kendte fysik\n• Militæret har bevidst holdt information skjult\n\nUsikkert:\n• Hvem/hvad kontrollerer UAP\'erne\n• Om det er ekstraterrestrial, inter-dimensional, eller menneskeskabt\n• Om en "disclosure" vil være ægte eller iscenesættes\n\nFra Stargate-perspektivet:\nGnostikerne kendte til ikke-menneskelige intelligenser — Archonerne. De er ikke venner. De er kontrollerende entiteter. Om de er "aliens" eller dimensionelle væsener er et terminologispørgsmål.',
            },
          ].map(s => (
            <div key={s.title} className="hw-card">
              <div className="hw-card-icon">{s.icon}</div>
              <h3 className="hw-card-title">{s.title}</h3>
              <p className="hw-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'symbols' && (
        <div className="hw-section">
          <p className="hw-intro">Symboler er ikke dekorative. De er energetiske og intentionelle. Når du ser dem — og accepterer dem — giver du energetisk samtykke.</p>

          {[
            ['🔺', 'Pyramiden', 'Hierarki — Illuminati med det altseende øje. Dollar-sedlen. CBS logo. Pepsi. Adidas. Eiffeltårnet set fra luften.'],
            ['👁', 'Det Ene Øje', 'Eye of Horus. Pineal kirtel. Bevidsthedskontrol. Bruges konstant i musikvideoer, mode, social media af elitens underholdere.'],
            ['🦉', 'Uglen', 'Minerva/Athena — visdommens gudinde i skjul. Bohemian Grove. Bruges på dollar-sedlens bagside (mikroskopisk). "Wise" = ser i mørke.'],
            ['🐍', 'Slangen', 'Dobbelt-slange = Caduceus (lægevidenskab). Kunkdalini eller Archon-kontrol. Slangen i Eden = videnskab/teknologi der fjerner os fra naturen.'],
            ['🌈', 'Regnbuen', 'Historisk okkult symbol for transformation/overgang. Bruges masivt i moderne agenda-drevet underholdning som signal til indviede.'],
            ['🦋', 'Sommerfuglen', 'MKUltra Monarch Programming. Metamorfose = ny personlighed. Bruges konstant af musikstjerner i forbindelse med mental breakdown-narrativer.'],
            ['✊', '666', 'Tre fingre der danner et O om øjet. Bruges af musikere, skuespillere, politikere globalt i fotografier. Ser du det nu?'],
          ].map(([icon, name, desc]) => (
            <div key={name} className="hw-symbol-card">
              <div className="hw-symbol-icon">{icon}</div>
              <div>
                <div className="hw-symbol-name">{name}</div>
                <div className="hw-symbol-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'awake' && (
        <div className="hw-section">
          <div className="hw-green-box">
            <h2>✦ Hvad gør man med denne viden?</h2>
            <p>At vide dette er ikke at leve i frygt. Det er at leve i klarhed. Du kan ikke kontrollere hvad de sender — men du kan kontrollere hvad du modtager.</p>
          </div>

          {[
            {
              icon: '📴',
              title: 'Reducer TV-tid drastisk',
              text: 'TV er ikke neutral underholdning. Det er en transmission-enhed der sender ind i din hjerne mens du er i alfa/hypnotisk tilstand.\n\nDet er ikke et argument for total isolation — men for bevidsthed om hvad du udsætter dit sind for.\n\nNår du ser noget: Spørg altid "Hvad normaliserer dette?" og "Hvem profiterer på at jeg tror dette?"',
            },
            {
              icon: '🎯',
              title: 'Lær at se symbolerne',
              text: 'Når du begynder at se symbolerne — kan du ikke holde op. De er OVERALT.\n\nDette er bevidst "hidden in plain sight". Okkultisters filosofi: "Vi skjuler sandheden åbent. De der ser, ser. De der ikke ser, er vores ressource."\n\nAt se symbolerne er ikke paranoia. Det er pattern recognition — den evne systemet aktivt søger at undertrykke via "conspiracy theory"-stempling.',
            },
            {
              icon: '✦',
              title: 'Det 5D Perspektiv',
              text: 'Fra Stargate-perspektivet opererer Hollywood og medie-maskinen på 3D frekvens:\n• Frygt, splittelse, begær, identifikation med det materielle\n\n5D bevidsthedsudvikling kræver det modsatte:\n• Kærlighed, enhed, frihed fra begær, identifikation med det åndelige\n\nEt enkelt praktisk skridt: Erstat én time TV om dagen med meditation, naturgang eller ægte menneskelig forbindelse.\n\nDin hjerne vil ændre sig. Din frekvens vil hæve sig. Det er det de ikke vil have dig til at gøre.',
            },
          ].map(s => (
            <div key={s.title} className="hw-card">
              <div className="hw-card-icon">{s.icon}</div>
              <h3 className="hw-card-title">{s.title}</h3>
              <p className="hw-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
