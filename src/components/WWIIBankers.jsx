import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './WWIIBankers.css'

const TABS = [
  { id: 'funded',    label: '🏦 Hvem Financierede' },
  { id: 'allwars',   label: '💰 Alle USA Krige' },
  { id: 'paperclip', label: '📎 Paperclip' },
  { id: 'cia',       label: '🕵 CIA Docs' },
  { id: 'masonry',   label: '🔺 Frimureri' },
  { id: 'history',   label: '✍ Vinderne' },
]

const ALL_WARS = [
  { year:'1950-53', name:'Korea-krigen', profit:'$336 milliarder (2023-værdier)', lie:'Forsvar mod kommunistisk aggression', real:'Første test af Military-Industrial Complex · Containment-doktrinen · 36.000 amerikanske dræbt · Ingen sejr · Grænsen uændret', who:'General Douglas MacArthur: "Krig er der for at tjene den industrielle kompleks"' },
  { year:'1955-75', name:'Vietnam-krigen', profit:'$840 milliarder', lie:'Gulf of Tonkin hændelsen (BEVISLIGT OPFUNDET)', real:'McNamara indrømmede i 1995 at Gulf of Tonkin aldrig skete. 58.000 amerikanere dræbt. 3+ millioner vietnamesere dræbt. Lockheed, Dow Chemical (napalm), Monsanto (Agent Orange) tjente milliarder.', who:'Eisenhowers farewell: "Vogt jer for den militær-industrielle kompleks" — han advarede om præcis det der skete' },
  { year:'1961', name:'Cuba-invasionen (Svinebugten)', profit:'United Fruit Company interesser', lie:'Demokratisk frihed', real:'CIA-organiseret invasion for at genoprette Batistas regime der beskyttede US corporate interesser. Komplet fiasko.', who:'Allen Dulles (CIA) · Guatemala-kupets arkitekt forsøgte det samme i Cuba' },
  { year:'1965-73', name:'Cambodja og Laos', profit:'Hemmelig krig — ingen officiel profit', lie:'Officielt: USA var ikke der', real:'USA bombede Cambodja og Laos mere end alle bomber i WWII tilsammen. Skabt Khmer Rouge. 2+ millioner dræbt.', who:'Nixon og Kissinger — begge krigsforbrydere ifølge Christopher Hitchens' },
  { year:'1980-88', name:'Iran-Irak-krigen', profit:'Våbensalg til BEGGE sider', lie:'Neutralitet', real:'USA solgte våben til Iran (Iran-Contra) MENS de støttede Irak med satellit-intelligens og kemiske våbenprekursorer. 1 million dræbt.', who:'Donald Rumsfeld mødte Saddam Hussein i 1983 som Reagans udsending' },
  { year:'1989', name:'Panama-invasionen', profit:'Narkotika-kontrol + Panamakanalen', lie:'"Operation Just Cause" — beskytte amerikanske borgere', real:'Noriega var CIA-aktiv i årtier. Arresteret da han nægtede at følge ordrer. 3.000+ panamanske civile dræbt (US govt estimat: 516).', who:'George H.W. Bush (tidligere CIA-direktør) beordrede det' },
  { year:'1990-91', name:'Gulf War I', profit:'Olie · Halliburton · Militær-baser i Saudi', lie:'"Babies thrown from incubators" — BEVISLIGT OPFUNDET af PR-firma', real:'April Glaspie (US ambassador) sagde til Saddam: "USA har ingen position om arabiske grænse-uenigheder" — grønt lys til Kuwait-invasion som påskud til krig.', who:'Halliburton (Dick Cheney var CEO) · Baker Hughes · Bechtel' },
  { year:'2001-21', name:'Afghanistan', profit:'$2.313 MILLIARDER · Opium · TAPI-pipeline', lie:'"Find bin Laden" — Al-Qaeda', real:'Opiumproduktion: 185 ton (Taliban 2000) → 9.000 ton (2017 under NATO). Bin Laden erklæret dræbt 2011. Krig fortsatte 10 år mere. Lockheed Martin, Raytheon, Boeing fik billioner.', who:'Dick Cheney · Halliburton · KBR · Private militærfirmaer' },
  { year:'2003-11', name:'Irak-krigen', profit:'$3 BILLIONER · Olie · Petrodollar', lie:'"Weapons of Mass Destruction" — ALDRIG FUNDET', real:'Colin Powell præsenterede fabrikerede beviser for FN. Irak ville sælge olie i euro frem for dollars. 150.000-1 million civile dræbt. Saddam Husseins hænging sendt på TV.', who:'Halliburton $39.5B kontrakt · Exxon/BP/Shell fik oliekoncessioner' },
  { year:'2011', name:'Libyen', profit:'Olie · Gaddafis guld-dinar ødelagt', lie:'"Humanitær intervention" — beskytte civile', real:'Gaddafi planlagde pan-afrikansk guld-backed valuta. NATOs bombekampagne = 50.000 dræbt. Libyen nu slavemarked og failed state.', who:'Hillary Clinton: "We came, we saw, he died" (lo efter hans brutale død)' },
  { year:'2011-nu', name:'Syrien', profit:'Qatar-pipeline · Destabilisering af Iran-aksen', lie:'"Demokratisk oprør" · "Assad bruger kemiske våben"', real:'Assad nægtede Qatar-pipeline. USA trænede og finansierede oprørere inkl. ISIS-forgangere. 500.000+ dræbt.', who:'CIA · Saudi Arabia · Qatar · Tyrkiet finansierede oprørere' },
  { year:'2014-nu', name:'Yemen', profit:'Saudiarabisk våbensalg · Strategisk position', lie:'"Støtte til saudi-koalitionen mod Houthi-terrorister"', real:'Verden største humanitære katastrofe. 400.000+ dræbt. USA solgte $65 milliarder i våben til Saudi-koalitionen der bombede hospitaler, skoler og bryllupper.', who:'Boeing · Raytheon · Lockheed Martin — alle fik rekordkontrakter' },
  { year:'2022-nu', name:'Ukraine', profit:'NATO-udvidelse · Rekonstruktionskontakter · LNG', lie:'"Forsvar af demokrati og ukrainsk suverænitet"', real:'NATO-udvidelse øst for Elben lovede Gorbachev aldrig ville ske. Maidan-kuppet 2014 CIA-støttet (Victoria Nuland "Fuck the EU" optagelse). BlackRock har eksklusiv kontrakt på Ukraines genopbygning.', who:'Lockheed Martin aktie +37% siden krigens start · Raytheon +25% · Rheinmetall +700%' },
]

export default function WWIIBankers() {
  const [tab, setTab] = useState('funded')
  const nav = useNavigate()

  return (
    <div className="wb-page">
      <div className="wb-hero">
        <div className="wb-icon">⚔️</div>
        <h1 className="wb-title">Krig som Forretning</h1>
        <p className="wb-sub">Hvem financierede Hitler · Operation Paperclip · CIA dokumenter · Vinderne skriver historien</p>
        <div className="wb-quote">
          <p>"Krig er en racket. Den har altid været det."</p>
          <cite>— General Smedley Butler, USMC · 1935</cite>
        </div>
      </div>

      <div className="wb-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`wb-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'funded' && (
        <div className="wb-section">
          <p className="wb-intro">Antony Sutton (Stanford Research Fellow) dokumenterede i tre bøger at Wall Street finansierede både Hitler og den bolsjevikiske revolution. Dette er ikke teori — det er baseret på amerikanske statsarkiver.</p>
          {[
            { title: 'Wall Street og Hitlers Opgang', text: 'Antony Sutton: "Wall Street and the Rise of Hitler" (1976)\n\nDOKUMENTEREDE FORBINDELSER:\n\n• IG Farben: Det tyske kemikaliemonopol der producerede Zyklon B og krigsmateriel. Standard Oil (Rockefeller), Ford og General Motors investerede massivt i IG Farben.\n\n• Union Banking Corporation (NYC): Administrerede penge for Fritz Thyssen — Hitlers vigtigste finansielle støtte. Direktør: Prescott Bush (George H.W. Bushs far, George W. Bushs bedstefar).\n\n• Henry Ford: Modtog i 1938 Stor Ørns Kors — Nazitysklands højeste udmærkelse for udlændinge. Hitler havde et portræt af Ford på sit kontor. Fords antisemitiske bog "The International Jew" var bredt distribueret i Tyskland.\n\n• John D. Rockefeller Standard Oil: Forsynede den tyske Luftwaffe med tetraethyllead (flybrændstof-additiv) via Schweiz under HELE krigen — selv efter USA gik ind i krigen.' },
            { title: 'Wall Street og Den Bolsjevikiske Revolution', text: 'Antony Sutton: "Wall Street and the Bolshevik Revolution" (1974)\n\nLENIN OG TRODSKYJ VENDTE TILBAGE TIL RUSLAND VIA:\n• Trotskij: Ankom fra New York med $10.000 (kæmpe sum i 1917) og et britisk pas\n• Lenin: Rejste i forseglet jernbanevogn igennem Tyskland — betalt af tysk og internationalt bankkapital\n\nJacob Schiff (Kuhn, Loeb & Co., New York): Dokumenteret for at have finansieret den russiske revolution med $20 millioner\n\nHvorfor? Samme logik som med Hitler:\n• Destabilisering af eksisterende regeringer\n• Oprettelse af gæld og afhængighed af internationale bankere\n• Eliminering af Romanov-dynastiet der nægtede Rothschild en russisk centralbank' },
            { title: 'Karl Marx og Finansieringen', text: 'Karl Marx (1818-1883) — hans "Das Kapital" finansieret delvist af:\n• Friedrich Engels — fabriksejer og kapitalist — betalt Marx\' leveomkostninger i årevis\n\nFrimurerisk tilknytning:\n• Marx var medlem af "League of the Just" som blev til "Communist League"\n• The League of the Just havde tætte forbindelser til internationale frimurerloger\n• "Workers of the world, unite!" = Frimurerisk universalisme-princip\n\nDen marxistiske dialektik: Problem-reaktion-løsning i filosofisk form.\nKapitalisme skaber elend (problem) → arbejderrevolution (reaktion) → kommunisme (løsning)\nHegels dialektik = den fundamentale kontrolstrategi.' },
          ].map(s => (
            <div key={s.title} className="wb-card">
              <h3 className="wb-card-title">{s.title}</h3>
              <p className="wb-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'allwars' && (
        <div className="wb-section">
          <div className="wb-war-header">
            <p>"Ingen af disse krige var om frihed. Alle var om ressourcer, markeder og bankinteresser."</p>
            <cite>— Baseret på Antony Sutton, Smedley Butler, John Perkins</cite>
          </div>
          <p className="wb-intro">Alle USA's krige siden 1945 følger samme mønster: En løgn som begrundelse — banker og våbenindustri der profiterer — civile der betaler.</p>
          {ALL_WARS.map(w => (
            <div key={w.year} className="wb-war-card">
              <div className="wb-war-header-row">
                <span className="wb-war-year">{w.year}</span>
                <span className="wb-war-name">{w.name}</span>
                <span className="wb-war-profit">{w.profit}</span>
              </div>
              <div className="wb-war-lie"><span className="wb-war-label lie">🎭 LØGNEN</span>{w.lie}</div>
              <div className="wb-war-real"><span className="wb-war-label real">🔍 VIRKELIGHED</span>{w.real}</div>
              <div className="wb-war-who"><span className="wb-war-label who">💰 HVEM TJENTE</span>{w.who}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'paperclip' && (
        <div className="wb-section">
          <p className="wb-intro">Operation Paperclip er 100% dokumenteret og officielt anerkendt. USA rekrutterede 1.600+ Nazi-videnskabsmænd til at arbejde for det amerikanske militær og efterretningsvæsen.</p>
          {[
            { title: 'Hvad er Operation Paperclip?', text: 'Operation Paperclip (1945-1959): Det hemmelige amerikanske program til at rekruttere tidligere Nazi-videnskabsmænd.\n\n1.600+ tyske videnskabsmænd, ingeniører og teknologer bragte til USA.\n\nMange havde været medlemmer af NSDAP (Nazi-partiet) og SS.\nDeres forbrydelseshistorik blev renset af US Army og OSS (CIA\'s forgænger).\n\nDe arbejdede på:\n• Raketter og missiler (NASA-programmet)\n• Biologiske og kemiske våben\n• Psykologisk krigsførelse og mind control (MK Ultra)\n• Rumsikkerhed og spionteknologi' },
            { title: 'Wernher von Braun — NASA\'s Far', text: 'Wernher von Braun (1912-1977):\n• Nazi-partimedlem fra 1937\n• SS-Sturmbannführer (major)\n• Designerede V-2 raketten der bombede London og Antwerpen\n• Brugte slavearbejde fra KZ-lejre til at producere raketter\n\nEfter Operation Paperclip:\n• Direktør for NASA\'s Marshall Space Flight Center\n• Designerede Saturn V-raketten der sendte Apollo til månen\n• Hyldet som "Raketvidenskabens fader" i USA\n\nKongressmedlem John Rankin (1945): "Nazister kom til Amerika og vendte den fra et demokrati til et empire"' },
            { title: 'Josef Mengele — Den Onde Doktor', text: 'Josef Mengele (1911-1979) — "The Angel of Death"\n\nUdførte menneskelige eksperimenter i Auschwitz:\n• Tvillinge-eksperimenter · Øjen-farve manipulation · Højtrykseksperimenter\n\nEfter krigen:\n• Flygtede til Latinamerika via "ratlines" (Vatikan-støttede flugtruter)\n• Levede i Argentina, Paraguay, Brasilien\n• Blev ALDRIG anholdt\n\nCIA vidste om hans opholdssted:\nDOKUMENTERET i frigivne CIA-filer: Agenturet kendte Mengeles placering fra 1960erne men valgte ikke at arrestere ham.\n\nHvorfor? Mengeles forskning på tvillinger og genetik var værdifuld for CIA\'s egne programmer.' },
          ].map(s => (
            <div key={s.title} className="wb-card">
              <h3 className="wb-card-title">{s.title}</h3>
              <p className="wb-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'cia' && (
        <div className="wb-section">
          <p className="wb-intro">CIA frigivne dokumenter via FOIA og National Archives afslører hvad efterretningstjenesterne vidste — og hvad de skjulte.</p>
          {[
            { title: 'Hitler i Argentina — CIA Dokumenterne', text: 'CIA FOIA-frigivet dokument (declassified 2014):\nDokument-ID: RDP75-00149R000700570004-4\n\nCIA-informant rapporterede i 1955:\n"Adolf Hitler besøgte Colombia og er nu i Argentina"\n\nDokumentet indeholder beskrivelse af Hitler som "meget gammel" og "meget syg".\n\nFBI-direktør J. Edgar Hoover modtog rapporter om Hitler i Argentina 1945-1947.\n\nAbe Wein (historiker): Russerne fotograferede en ligblev de identificerede som Hitler i 1945 — men DNA-test i 2018 viste at kraniet i russisk varetægt tilhørte en ung kvinde.\n\nOperation Bernhard: Nazi-programmet til at forfalske britiske pund — var planlagt at bruges til at finansiere flugt.' },
            { title: 'Ratlines — Vatikanets Flugtruter', text: 'Ratlines = netværket der hjalp Nazi-krigsforbrydere med at flygte til Sydamerika.\n\nHovedaktører:\n• Alois Hudal (biskop, Rom): Hjalp bevidst Nazis med at flygte\n• Draganović (kroatisk præst): Organiserede rejsedokumenter\n• ODESSA: SS-officerers hemmelige netværk — organiserede flugt og finansiering\n\nLande der modtog Nazi-krigsforbrydere:\n• Argentina (Juan Perón åbnede eksplicit for Nazi-immigranter)\n• Paraguay · Brasil · Bolivia · Chile · Syrien\n\nEstimat: 30.000-50.000 tidligere Nazis flygtede til Sydamerika.\n\nVatikanet udstedte "Carta di Carita" (velgørenhedsbrev) der fungerede som identitetsdokumenter.' },
            { title: 'Operation Odessa og Finansieringen', text: 'Heinrich Himmler designede i 1944 planen for Nazi-overlevelse:\n\n• Milliardbeløb i guld, kunstværker og udenlandsk valuta overført til neutrale lande\n• Schweiziske banker som mellemled\n• IG Farben-aktiver skjult i datterselskaber\n• Argentinsk Banco Alemán Transatlántico modtog store overførsler\n\nHerbert John Burgman (US Treasury 1946): Estimerede at Nazis overførte $700 millioner ud af Europa inden krigens afslutning.\n\nDisse penge finansierede:\n• "Onkel" Adolf Eichmanns flugt (fanget af Mossad i 1960 i Buenos Aires)\n• Josef Mengeles liv i Sydamerika\n• Klaus Barbies (Lyons slagter) arbejde for CIA i Bolivia' },
          ].map(s => (
            <div key={s.title} className="wb-card">
              <h3 className="wb-card-title">{s.title}</h3>
              <p className="wb-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'masonry' && (
        <div className="wb-section">
          <p className="wb-intro">Frimureri og verdenskrigene — hvad forbindelserne er og hvad de ikke er.</p>
          {[
            { title: 'Frimureri og Første Verdenskrig', text: 'Attentat på Franz Ferdinand i Sarajevo 1914:\n\nGavrilo Princip og Mlada Bosna (det sorte hånd):\n• Organisationen "Ujedinjenje ili smrt" (Forening eller Død) havde frimureriske strukturer\n• Dragutin Dimitrijević ("Apis") — leder af den serbiske militæreftretning — var Frimurermedlem\n\nKaiser Wilhelm II — Prudeisk frimurer\nCzar Nicholas II — hverken frimurer men Romanover var forbundet til europæiske loger\n\nHvad frimureriet deler med krigens finansiere:\nDe universalistiske mål — en verdensorden — er frimureriens officielle målsætning.\nBankerne og logebrødrene planlagde ikke nødvendigvis krigen — men de profiterede.' },
            { title: 'Karl Marx og Frimureri', text: 'Karl Marx (1818-1883):\n\n• Tætte forbindelser til "League of the Just" og "Communist League"\n• Disse organisationer havde overlappende struktur med europæiske frimurerloger\n• Marx\' mentor Moses Hess — kabbalist og proto-zionist — var dybt forbundet med frimureriet\n\nFrancesco Margiotta (1895): "Socialismen er Frimureriet for masserne"\n\nHvad er dokumenteret vs. hvad er teori:\n✓ Marx var forbundet med revolutionære hemmelige selskaber\n✓ Hans finansier (Engels) var kapitalist og muligvis frimurer\n? Direkte frimurer-initiering af Marx er IKKE bekræftet i primærkilder' },
            { title: 'Hitlers Frimureri — Det Komplekse Billede', text: 'HVAD ER FAKTUM:\n• Hitler FORBØD frimureri i Nazi-Tyskland i 1933\n• Tusindvis af frimurermedlemmer blev sendt i koncentrationslejre\n• Nazisterne konfiskerede frimurerlogers ejendomme og arkiver\n\nHVAD ER TEORIEN:\n• Nogle historikere mener Hitler selv var initieret i lavere grader inden han kom til magten\n• Rudolf Steiner (antroposof): Advarsler om okkulte kræfter bag Nazismen\n• Dietrich Eckart (Thule-Selskabet): Hitlers tidlige mentor — dybt okkult\n\nKONKLUSION:\nHitler brugte okkulte symboler og ritualer (SS som ridderorden, Ahnenerbe).\nMen han var modstander af etableret Frimureri — sandsynligvis fordi det konkurrerede om de samme okkulte magt-strukturer.' },
          ].map(s => (
            <div key={s.title} className="wb-card">
              <h3 className="wb-card-title">{s.title}</h3>
              <p className="wb-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'history' && (
        <div className="wb-section">
          <p className="wb-intro">"Historien er en myte om hvilken menneskene er enige." — Napoleon Bonaparte. Vinderne skriver historien — dette er ikke en konspirationsteori, det er historiografi.</p>
          {[
            { title: 'Hvem Skriver Historien?', text: 'Howard Zinn (A People\'s History of the United States):\n"Historien er altid skrevet fra de sejriges perspektiv."\n\nEksempler:\n• Atombomberne over Hiroshima og Nagasaki: I USA = nødvendigt for at stoppe krigen. I Japan = masseudslettelse af civile for at intimidere Sovjet.\n\n• Vietnamkrigen: I USA = kamp for frihed. I Vietnam = imperialistisk aggression med 3 millioner vietnamesiske civile dræbt.\n\n• Den Kolde Krig: I Vesten = frihedens kamp mod kommunisme. I praksis = USA\'s globale ressource-kontrol.\n\n• Kolonihistorien: I Europa = "civilisationsmission". Faktisk = systematisk plyndring og folkemord over 500 år.' },
            { title: 'Versailles-Traktaten — Frøet til Anden Verdenskrig', text: 'John Maynard Keynes (økonom) sagde om Versailles-traktaten (1919):\n"Dette er ikke fred. Det er en våbenhvile for 20 år."\n\nHan fik ret. WWII startede 20 år og 68 dage efter Versailles.\n\nHvad Versailles FAKTISK indeholdt:\n• Tyskland skulle betale 132 milliarder guldmark i krigserstatning\n• Tyskland mistede 13% af sit territorium\n• Den tyske hær reduceret til 100.000 mand\n• Artikel 231: Tyskland erkender ENEANSVAR for krigen\n\nDette skabte:\n• Hyperinflation 1922-1923 (en brød kostede milliarder af mark)\n• 6 millioner arbejdsløse\n• Politisk kaos der gav Hitler det perfekte fundament\n\nSpørgsmålet historikere stiller:\nHvem insisterede på Versailles-betingelserne? De internationale bankierfamilier der ville have Europas gæld.' },
            { title: 'Hvad Du Kan Gøre', text: 'Historiografi = Videnskaben om HVORDAN historien skrives.\n\nKritiske spørgsmål til enhver historisk fortælling:\n• Hvem finansierede denne forskning?\n• Hvad skete der med dem der stillede spørgsmål?\n• Hvilke primærkilder eksisterer vs. sekundærkilder?\n• Hvem profiterede på begivenhederne?\n• Hvad er de tabte stemmer i historien?\n\nAnbefalede historikere:\n• Antony Sutton: Wall Street-forbindelserne\n• Carroll Quigley: "Tragedy and Hope" — insider\n• Howard Zinn: Folkets perspektiv\n• John Perkins: "Confessions of an Economic Hit Man"\n• Naomi Klein: "The Shock Doctrine"' },
          ].map(s => (
            <div key={s.title} className="wb-card">
              <h3 className="wb-card-title">{s.title}</h3>
              <p className="wb-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
          <button className="wb-cta" onClick={() => nav('/propaganda')}>
            Se Propaganda & Narrativ Kontrol →
          </button>
        </div>
      )}
    </div>
  )
}
