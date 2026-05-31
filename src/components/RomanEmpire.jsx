import React, { useState } from 'react'
import './RomanEmpire.css'

const TABS = [
  { id: 'collapse',   label: '🏛 Kollapset der Ikke Skete' },
  { id: 'parallels',  label: '⚖️ Paralleller' },
  { id: 'military',   label: '⚔️ Militær Imperiet' },
  { id: 'currency',   label: '💰 Valuta & Kontrol' },
  { id: 'bread',      label: '🎪 Brød & Cirkus' },
  { id: 'transfer',   label: '🔄 Imperiets Linje' },
  { id: 'greater',    label: '🗺 Greater America' },
  { id: 'fall',       label: '🌅 Hvad Kommer Nu?' },
]

export default function RomanEmpire() {
  const [tab, setTab] = useState('collapse')

  return (
    <div className="re-page">
      <div className="re-hero">
        <div className="re-icon">🦅</div>
        <h1 className="re-title">USA — Det Moderne Romerrige</h1>
        <p className="re-sub">Romerriget kollapsede ikke. Det skiftede form.</p>
        <p className="re-note">Dette er ikke et angreb på det amerikanske folk — som med alle imperier er det folket der betaler prisen for magtens spil.</p>
      </div>

      <div className="re-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`re-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'collapse' && (
        <div className="re-section">
          <div className="re-alert">
            <p>"Historien gentager sig ikke — men den rimer." — Mark Twain</p>
          </div>

          {[
            {
              icon: '🏛',
              title: 'Hvad Skete der Egentlig i 476 e.Kr.?',
              text: 'Den traditionelle fortælling: Vestrom "faldt" i 476 e.Kr. da Odoaker afsatte den sidste vestlige kejser Romulus Augustulus.\n\nMen hvad skete der FAKTISK?\n\n• Østrom (Byzans) fortsatte ubrudt i 1000 år til 1453\n• Den romerske kirke (Vatikanet) overtog Roms administrative struktur\n• Romersk lov blev grundlaget for al europæisk lovgivning\n• Latin forblev det lærdes og kirkens sprog i 1000+ år\n• De germanske konger der "erstattede" Rom kopierede romerskadministration\n\nRom kollapsede ikke. Det muterede.\n\nDen byzantinske civilisation — Roms direkte fortsættelse — levede frem til 1453. Dens arv overlevede via Det Osmanniske Rige og Rusland (der kaldte sig "det tredje Rom").',
            },
            {
              icon: '⛪',
              title: 'Vatikanet — Romerigets Administrative Efterfølger',
              text: 'Den Romerske Katolske Kirke arvede direkte:\n\n• Territorial organisation: Roms DIOECESIS blev kirkelige DIOCESER\n• Titel: "Pontifex Maximus" var kejserens titel — nu Pavens\n• Sprog: Latin som administrationssprog\n• Retssystem: Kanonisk ret bygget på romerretten\n• Hierarki: Biskopper, præster, diakoner = general, centurion, soldat\n• Symboler: Roms ørn (aquila) optræder i Vatikanets heraldik\n\nDa kejser Konstantin i 313 gjorde kristendommen legal — og derefter stats-religion — fusionerede han Romerriget med kirken.\n\nKirken overlevede imperiet. Den ER imperiet i en ny form.',
              src: 'Edward Gibbon: "The History of the Decline and Fall of the Roman Empire" (1776-1789)'
            },
            {
              icon: '🦅',
              title: 'USA — Rom i Nyt Klædebon',
              text: 'USA\'s grundlæggere var bevidst om den romerske parallel:\n\n• Senatet: Roms Senatus — direkte navngivning\n• Kongres: Latin "Congressus" — sammenkomst\n• Republik: Latin "Res Publica" — det offentlige anliggende\n• Kapitol: Roms Capitoline Hill — USAs Congress building\n• Eagle (ørn): Roms aquila — USAs nationalsymbol\n• Fasces (bundtet stave): Roms symbol på statsautoritet — på Lincoln Memorial og i Kongressen\n• Magtdeling: Montesquieus fortolkning af den romerske model\n\nDisse var ikke tilfællige valg. Grundlæggerne studerede Rom aktivt og designede bevidst det nye imperiums institutioner efter det romerske mønster.',
            },
          ].map(s => (
            <div key={s.title} className="re-card">
              <div className="re-card-icon">{s.icon}</div>
              <h3 className="re-card-title">{s.title}</h3>
              <p className="re-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="re-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'parallels' && (
        <div className="re-section">
          <p className="re-intro">Parallellerne mellem det klassiske Rom og det moderne USA er for præcise til at være tilfældige.</p>

          {[
            ['Republikkens Grundlæggelse', 'Rom 509 f.Kr.: Patrikerne vælter kongen og opretter Senatet', 'USA 1776: Kolonister vælter kongen og opretter Kongressen'],
            ['Ekspansion via "Befrielse"', 'Rom: "Vi befrier jer fra tyranner" — og installerer romersk administration', 'USA: "Vi befrier jer fra diktatorer" — og installerer pro-amerikanske regeringer'],
            ['Professionalisering af Militæret', 'Rom: Marius-reformerne 107 f.Kr. — professionel hær der er loyal mod generalen, ikke staten', 'USA: Pentagon og Militær-Industriel Kompleks — hær der er loyal mod institutionen'],
            ['Debasering af Valutaen', 'Rom: Sølvindholdet i denaren faldt fra 85% til 5% fra 100-300 e.Kr.', 'USA: Dollar er faldet 97% i købekraft siden Fed Reserve oprettelse i 1913'],
            ['Import af Arbejdskraft', 'Rom: Millioner af slaver og frie ikke-borgere udgjorde Roman economy', 'USA: Millioner af illegale immigranter udgør en underbetalt arbejdsstyrke'],
            ['Underholdning som Kontrol', 'Rom: "Panem et Circenses" — brød og cirkus for at holde pøblen glad', 'USA: Netflix, NFL, social media og fast food — den moderne cirkus'],
            ['Forfald af Moralske Normer', 'Rom: Caligula, Nero, Commodus — dekadence som norm i overklassen', 'USA: Hollywood, reality TV, offentlige skandaler normaliseret i eliten'],
            ['Finansiering via Krig', 'Rom: Krig var profitabel — plyndring, slaver, skatter fra besejrede', 'USA: Forsvarsindustrien er den mest profitable sektor — krig er forretning'],
          ].map(([topic, rome, usa]) => (
            <div key={topic} className="re-parallel-card">
              <div className="re-parallel-topic">{topic}</div>
              <div className="re-parallel-row">
                <span className="re-label rome">ROM</span>
                <span className="re-parallel-text">{rome}</span>
              </div>
              <div className="re-parallel-row">
                <span className="re-label usa">USA</span>
                <span className="re-parallel-text">{usa}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'military' && (
        <div className="re-section">
          <div className="re-alert">
            <p>USA har 750+ militærbaser i 80+ lande. Romerriget på sit højdepunkt: 80-100 fæstninger i 30 provinser. Samme model. Større skala.</p>
          </div>

          {[
            {
              icon: '⚔️',
              title: 'Det Militær-Industrielle Kompleks',
              text: 'President Eisenhower advarede i sin afskedstale (1961):\n\n"I råd fra regeringen skal vi vogte os mod erhvervelsen af uberettiget indflydelse — tilsigtet eller utilsigtet — af det militær-industrielle kompleks."\n\nEisenhower advarede selv. Ingen lyttede.\n\n2024: USA bruger $886 milliarder på forsvar — mere end de næste 10 lande tilsammen.\n\nLokkheed Martin, Raytheon, Boeing, Northrop Grumman — de fire store forsvarsentreprenører har aktionærer, bestyrelser og lobbyister der er identiske med dem der sidder i Pentagon og Kongressen.\n\nDette er det Rom kaldte "imperium" — ikke et rige, men et system af magtudøvelse.',
              src: 'Eisenhower farewell address, January 17, 1961; SIPRI Military Expenditure Database 2024'
            },
            {
              icon: '🌍',
              title: '750 Baser — Roms Legioner i Moderne Form',
              text: 'Romerrigets ekspansion skete via:\n1. Militær annektering\n2. Klientstater (formelt uafhængige, reelt lydige)\n3. Kulturel absorption (romanisering)\n\nUSAs ekspansion sker via:\n1. Direkte militær intervention (Irak, Afghanistan, Libya, Syria)\n2. Klientstater (Saudi Arabien, Israel, Japan, Sydkorea, Polen)\n3. Kulturel eksport (Hollywood, McDonalds, Blue Jeans)\n\nUSA har 750+ militærbaser i 80+ lande.\nIngen anden nation i historien har haft dette — ikke engang Rom.\n\nFormålet er ikke beskyttelse. Det er kontrol af handelsveje, ressourcer og regionale magter.',
              src: 'David Vine: "Base Nation" (2015); US Dept of Defense Base Structure Report 2024'
            },
            {
              icon: '📜',
              title: 'Status of Forces Agreements — Roms Foedus',
              text: 'Rom indgik "foedus" (forbundstraktater) med klientstater:\n• Formelt suveræne\n• Men forpligtet til at stille tropper til Rom\n• Og give Rom skattemæssige privilegier\n\nUSA\'s Status of Forces Agreements (SOFA) med 100+ lande:\n• Formelt suveræne\n• Men forpligtet til at huse amerikanske baser\n• Og undtage amerikanske soldater fra lokal jurisdiktion\n\nEn dansk borger begår en forbrydelse i USA og straffes under dansk lov — utænkeligt.\nEn amerikansk soldat begår en forbrydelse i Danmark — og straffes under SOFA-aftalen, ikke dansk lov.\n\nDette er definitionen på imperieforhold.',
            },
          ].map(s => (
            <div key={s.title} className="re-card">
              <div className="re-card-icon">{s.icon}</div>
              <h3 className="re-card-title">{s.title}</h3>
              <p className="re-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="re-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'currency' && (
        <div className="re-section">
          <div className="re-alert">
            <p>Han der kontrollerer valutaen kontrollerer imperiet. Rome brugte sølv og guld. USA bruger petrodollaren. Mekanismen er identisk.</p>
          </div>

          {[
            {
              icon: '💰',
              title: 'Petrodollaren — Roms Tribute i Moderne Form',
              text: 'Roms provinser betalte skatter og tribut til Rom i sølv/guld.\n\nEfter Bretton Woods 1944: Alle valutaer peget på dollar.\nEfter Nixon 1971 (afskaffelse af guldstandarden): Dollar kun bakket op af amerikansk magt.\n\n1973: Nixon/Kissinger aftale med Saudi Arabien — al olie sælges KUN i dollars (petrodollar).\n\nResultat: Hele verden skal bruge dollars for at købe olie. Verden skal derfor holde dollars. USA kan printe ubegrænsede mængder — og resten af verden betaler for inflationen.\n\nSaddam Hussein (Irak) annoncerede i 2000: Irak vil sælge olie i euro.\nInvasion: 2003.\n\nGaddafi (Libyen) planlagde pan-afrikansk guldvaluta.\nInvasion: 2011.\n\nIran sælger olie til Kina i yuan.\nSanktioner: Løbende.',
              src: 'William Clark: "Petrodollar Warfare" (2005); Congressional Research Service reports'
            },
            {
              icon: '🏦',
              title: 'Federal Reserve — Roms Offentlige Kasse',
              text: 'Roms Aerarium (statskassen) finansierede legionerne og imperiet.\n\nDen Amerikanske Federal Reserve (oprettet 1913) er:\n• Ikke federal (ikke statslig)\n• Har ingen reserve (printer penge)\n• Er en privat centralbank ejet af private banker\n\n12 regionale Federal Reserve Banks er privatejet.\nAktionærerne: JP Morgan Chase, Citibank, Goldman Sachs m.fl.\n\nDen private bank printer verdens reservevaluta. Skatteyderne betaler renten.\n\nRom debaserede mønternes sølvindhold for at finansiere krige og underskud.\nUSA printer papirpenge for at finansiere krige og underskud.\n\nResultat er det samme: Inflation der rammer de fattige og midterste klasser hårdest.',
              src: 'G. Edward Griffin: "The Creature from Jekyll Island" (1994); Federal Reserve Act 1913'
            },
          ].map(s => (
            <div key={s.title} className="re-card">
              <div className="re-card-icon">{s.icon}</div>
              <h3 className="re-card-title">{s.title}</h3>
              <p className="re-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="re-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'bread' && (
        <div className="re-section">
          <div className="re-alert">
            <p>"Panem et Circenses" — Brød og Cirkus. Juvenal, ca. 100 e.Kr.<br/>Giv pøblen mad og underholdning, og de vil ikke bekymre sig om at miste friheden.</p>
          </div>

          {[
            {
              icon: '🍕',
              title: 'Brød — Welfare State og Food Stamps',
              text: 'Rom distribuerede gratis korn (annona) til hundredtusinder af romerske borgere.\n\nUSA har 42 millioner amerikanere på SNAP (food stamps).\nUSDA distribuerer gratis mad via WIC-programmet.\n\nDette er ikke kritik af at hjælpe fattige — det er observation af strukturen:\n\nNår 13% af befolkningen er afhængig af statslig madforsyning — er de et magtfuldt revolte-hindrende element. En sulten befolkning revolutionerer. En velernæret befolkning med Netflix og football ser ikke ud til at revolutionere.\n\nAnna Karenina (Tolstoj): "Alle lykkelige familier ligner hinanden. Alle ulykkelige familier er ulykkelige på deres egen måde." — Det er nemmere at kontrollere "lykkelige" end "ulykkelige".',
            },
            {
              icon: '🏟',
              title: 'Cirkus — NFL, Netflix og Social Media',
              text: 'Roms Colosseum: Op til 80.000 tilskuere. Gladiatorkampe, dyrekampe, henrettelser. Den mest effektive befolkningskontrol Rom kendte.\n\nUSA\'s moderne arenaer:\n• NFL Super Bowl: 100+ millioner seere — ét show\n• Netflix: 260 millioner abonnenter — konstant distraherende indhold\n• Social media: Gennemsnitlig amerikaner bruger 7+ timer på skærm dagligt\n• Vegas: "Hvad sker i Vegas, forbliver i Vegas" — moralsk frisone\n\nDen gennemsnitlige amerikaner kender NFL-statistikker udenad, men ved ikke hvad der er i 1. tillæg til forfatningen.\n\nDenne uvidenhed er ikke naturlig. Den er designet og vedligeholdt.',
            },
            {
              icon: '🎓',
              title: 'Uddannelsessystemet som Normalisering',
              text: 'Roms skoler underviste ikke i at tænke kritisk om Rom. De underviste i romerretten, latinsk grammatik og romerhistorie — set fra Roms perspektiv.\n\nUSAs uddannelsessystem:\n• Standardiseret curriculum (Common Core)\n• Historieundervisning fra det amerikanske perspektiv\n• "American Exceptionalism" som udokumenteret præmis\n• Minimal undervisning i USA\'s imperialistiske historie\n\n"De der kontrollerer fortiden, kontrollerer fremtiden. De der kontrollerer nutiden, kontrollerer fortiden." — George Orwell\n\nJohn Taylor Gatto (New York State Teacher of the Year 1991) oplyste at det offentlige skolesystem var designet i 1900 af Rockefeller og Carnegies General Education Board med eksplicit formål: At producere fabriksarbejdere og forbrugere, ikke tænkere.',
              src: 'John Taylor Gatto: "Dumbing Us Down" (1992)'
            },
          ].map(s => (
            <div key={s.title} className="re-card">
              <div className="re-card-icon">{s.icon}</div>
              <h3 className="re-card-title">{s.title}</h3>
              <p className="re-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="re-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'transfer' && (
        <div className="re-section">
          <div className="re-alert">
            <p>Magten skifter ikke hænder tilfældigt. Den flyttes bevidst — via krige, valutakollaps og dynastiske alliancer — fra ét imperialt center til det næste.</p>
          </div>

          {[
            {
              empire: 'ROM (27 f.Kr.–476 e.Kr.)',
              color: '#cc8844',
              text: 'Kontrollerede Middelhavet via militær, romerretten og monetær union.\nFaldt via: Gældsspiral, valutadebasering, militær overudstrækning, politisk korruption.\nMagten overtoges af: Kirken (administrativt) og Byzans (politisk)',
            },
            {
              empire: 'BYZANS / KONSTANTINOPEL (330–1453)',
              color: '#cc6666',
              text: 'Roms direkte fortsættelse i øst. Ortodoks kristendom. Romerretten levende.\nFaldt via: Osmannernes erobring 1453.\nMagten spredte sig til: Osmannerriget + Rusland (= "Det Tredje Rom")',
            },
            {
              empire: 'OSMANNERRIGET (1299–1922)',
              color: '#66aa66',
              text: 'Kontrollerede handelsruterne til Asien. Multietnisk, multireligiøs.\nFaldt via: 1. Verdenskrig. Britisk intelligence (T.E. Lawrence "of Arabia") og arabisk nationalisme.\nMagten overtoges af: Det Britiske Imperium',
            },
            {
              empire: 'DET BRITISKE IMPERIUM (1600–1945)',
              color: '#6688cc',
              text: '"The Empire on which the sun never sets" — 25% af verdens landmasse.\nKontrollerede via: Royal Navy, Bank of England, East India Company.\nFaldt via: 2. Verdenskrig udtømte Storbritanniens ressourcer.\nMagten overtoges af: USA (via Bretton Woods 1944)',
            },
            {
              empire: 'USA (1945–nu)',
              color: '#5588aa',
              text: 'Petrodollaren, 750+ baser, militær overlegenhed.\nSvækkes via: Gæld, BRICS, petrodollar-erosion, intern polarisering.\nNæste: En transformeret "Greater American Empire" — eller multipolær verden?',
            },
          ].map(s => (
            <div key={s.empire} className="re-empire-card" style={{'--ec': s.color}}>
              <div className="re-empire-name" style={{color: s.color}}>{s.empire}</div>
              <p className="re-empire-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}

          <div className="re-card">
            <h3 className="re-card-title">Den Skjulte Kontinuitet</h3>
            <p className="re-card-text">Bag hvert imperieskifte er der én konstant: Det finansielle netværk der finansierer alle sider. Bankdynastierne der udlånte til alle krigsmagere. Familierne der overlevede alle regimeskift.\n\nRothschild-banken finansierede Napoleon OG hans fjender.\nFed Reserve og Wall Street finansierede begge sider under WW1 og WW2.\n\nImperiet skifter flag. Bankvæsenet fortsætter.</p>
          </div>
        </div>
      )}

      {tab === 'greater' && (
        <div className="re-section">
          <div className="re-alert">
            <p>Det amerikanske flag har 50 stjerner — én per stat. Et flag på Trump Tower er fotograferet med 56 stjerner. De kan godt tælle. Det er ikke en fejl.</p>
          </div>

          <div className="re-card" style={{borderColor:'rgba(255,200,50,0.3)', background:'rgba(255,200,50,0.04)'}}>
            <div className="re-card-icon">🇺🇸</div>
            <h3 className="re-card-title" style={{color:'#ffd050'}}>56 Stjerner — Hvad Betyder det?</h3>
            <p className="re-card-text" style={{whiteSpace:'pre-line'}}>{'USA har i dag 50 stater = 50 stjerner på flaget.\n\nEt flag med 56 stjerner peger mod 6 nye territorier.\n\nTrumps offentlige ambitioner:\n• Grønland — "vi SKAL have Grønland"\n• Canada — "Canada bør blive USA\'s 51. stat"\n• Panama-kanalen — "vi tager den tilbage"\n• Mexico — indirekte kontrol via grænse/narkokrig\n• Puerto Rico (stat)? U.S. Virgin Islands?\n\nUanset den præcise beregning: Et flag med 56 stjerner på en presidents bygning er ikke tilfældigt.'}</p>
          </div>

          {[
            {
              icon: '🗺',
              title: '"Greater America" — Det Erklærede Mål',
              text: 'Trump i januar 2025:\n"Jeg tager ikke militær aktion mod Canada og Mexico fra bordet."\n"Grønland er national sikkerhed og vi skal have det."\n\nDette er ikke en "crazy Trump-idé". Det er et imperialt ekspansionsprojekt der følger et veldokumenteret mønster:\n\nBegrundelse: National sikkerhed\nMidler: Diplomatisk pres, toldkrige, militær trussel\nMål: Kontrol uden formel annektering (klientstat) ELLER formel annektering (ny stat)\n\nRomernes tilsvarende udtryk: "Civilisationsopdraget" (mission civilisatrice).',
            },
            {
              icon: '🤖',
              title: 'Teknokratiet — Errol Musk og det Næste System',
              text: 'Errol Musk — Elon Musks far — boede i Sydafrika under apartheid og har udtalt sympatier for et teknokratisk styringssystem.\n\nTeknokrati = Styre af tekniske eksperter frem for demokratisk valgte repræsentanter.\n\nElon Musks Department of Government Efficiency (DOGE) er et perfekt eksempel:\n• Ikke demokratisk valgt\n• Ikke folkevalgt mandat\n• Administrerer via teknologisk effektivitet\n• Kan afskedige statsansatte uden demokratisk kontrol\n\nForbind det med:\n• Neuralink (hjerne-computer interface)\n• Starlink (global internet-infrastruktur)\n• SpaceX (rumkontrol)\n• xAI (AI-kontrol)\n\nDen person der kontrollerer internettet, hjernerne og rummet — behøver ikke vinde valg.',
            },
            {
              icon: '🔗',
              title: 'WEF, Schwab og "You Will Own Nothing"',
              text: 'World Economic Forum (Davos) — Klaus Schwab:\nDen 4. industrielle revolution vil fore til en fusion af vores fysiske, digitale og biologiske identiteter.\n\nKlaus Schwabs bog "The Great Reset" (2020) beskriver abent:\n• At COVID-19 er en mulighed til global nytankning\n• At ejendomsretten bor transformeres\n• At international styring skal styrkes\n\nSchwabs beromte citat: "Om 10 ar vil du eje ingenting og du vil vaere lykkelig."\n\nDette er ikke skjult. De siger det abent.\n\nForbindelsen til imperiet: Det Romerske Colosseum tilhorte staten. Gladiatorerne ejede ingenting.',
              src: 'Klaus Schwab & Thierry Malleret: "COVID-19: The Great Reset" (2020)'
            },
          ].map(s => (
            <div key={s.title} className="re-card">
              <div className="re-card-icon">{s.icon}</div>
              <h3 className="re-card-title">{s.title}</h3>
              <p className="re-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="re-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'fall' && (
        <div className="re-section">
          <div className="re-alert">
            <p>Rom "faldt" ikke på én dag. Det faldt over 300 år via inflation, militær overudstrækning, politisk korruption og borgernes mistede tillid til institutionerne. Lyder det bekendt?</p>
          </div>

          {[
            {
              icon: '📉',
              title: 'Roms Kollaps-Tegn — og USA\'s Nuværende Tilstand',
              text: 'Roms tegn på forfald 200-400 e.Kr.:\n✗ Statslig gæld der ikke kan tilbagebetales\n✗ Debasering af valutaen\n✗ Militær der koster mere end det producerer\n✗ Politisk paralysering og korruption\n✗ Tab af grænse-kontrol\n✗ Befolkningens mistede tro på institutionerne\n✗ Moral forfald i overklassen\n\nUSA 2024:\n• $34 BILLIONER i national gæld — vokser med $1 trillion hvert 100 dage\n• Dollar: -97% købekraft siden 1913\n• Forsvar: $886 mia/år — tredoblet siden 2001\n• Kongressen: 11% tillid hos befolkningen\n• Sydgrænsen: 2-3 millioner illegale krydser/år\n• Tillid til institutioner: Historisk lavt punkt',
            },
            {
              icon: '🌏',
              title: 'BRICS og Det Multipolare Alternativ',
              text: 'Da Rom svækkedes — hvad skete der?\nDe perifere magter begyndte at handle indbyrdes uden Rom som mellemled.\n\nDa USA svækkes:\nBRICS-landene (Brasilien, Rusland, Indien, Kina, Sydafrika + 30+) opretter alternative:\n• Betalingssystemer uden SWIFT\n• Oliehandel uden dollar\n• Udviklingsbank som alternativ til IMF\n• Diplomatiske relationer der bypasser Washington\n\nDa China og Rusland handler i yuan og rubler.\nDa Saudi Arabien sælger olie til Kina i yuan.\nDa 40+ lande ansøger om BRICS-medlemskab.\n\nPetrodollar-systemet svækkes. USA\'s imperiale superstruktur mister sin fundament.',
              src: 'IMF World Economic Outlook 2024; BRICS Summit declarations'
            },
            {
              icon: '✦',
              title: 'Det er Ikke Enden — Det er En Overgang',
              text: 'Rom "faldt" — og verden gik ikke under. Den ændrede sig.\n\nByzans levede videre. Det Islamiske Imperium blomstrede. Europa udviklede ny civilisation på Roms ruiner.\n\nFra Stargate-perspektivet:\nDet vi ser er ikke apokalypse — det er transformation.\n\n3D-civilisationen (baseret på frygt, kontrol, ressource-knaphed, hierarki) er ved at nå sin naturlige grænse.\n\n5D-potentialet (baseret på samarbejde, bevidsthed, teknologisk overflod, individuel suverænitet) venter på den anden side.\n\nHistorien viser: Imperier falder. Bevidstheden udvikler sig.\n\nDu er ikke et offer for dette system. Du er et vidne til en historisk transformation. Det er et privilegium — ikke en straf.',
            },
          ].map(s => (
            <div key={s.title} className="re-card">
              <div className="re-card-icon">{s.icon}</div>
              <h3 className="re-card-title">{s.title}</h3>
              <p className="re-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="re-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
