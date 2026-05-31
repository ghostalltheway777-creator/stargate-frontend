import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Propaganda.css'

const WARS = [
  {
    name: 'Irak 2003', oil: 'Næststørste oliereserver i verden', lie: '"Weapons of Mass Destruction" — aldrig fundet',
    who: 'Halliburton (Dick Cheneys firma) fik $39.5 milliard i kontrakter · Oliefirmaer fik adgang til irakisk olie · Blackwater/mercenaries tjente milliarder',
    dead: '600.000-1.2 millioner civile irakere dræbt',
    real: 'Saddam Hussein begyndte at sælge olie i euro i stedet for dollar (2000). Dette truede petrodollaren — fundamentet for USA\'s globale finansielle dominans. Han måtte fjernes.',
  },
  {
    name: 'Afghanistan 2001-2021', oil: 'TAPI pipeline (Turkmenistan-Afghanistan-Pakistan-Indien) + verdens største opiumproduktion', lie: '"War on Terror" · Finde Osama bin Laden',
    who: 'Opiumproduktion steg fra 185 ton (2001) til 9.000 ton (2017) under NATO-besættelse · CIA-forbindelser til narkohandel dokumenteret · Lockheed Martin, Raytheon, Boeing tjente billioner',
    dead: '241.000 direkte krigsofre',
    real: 'Bin Laden blev "fundet" og dræbt i 2011 — krigen fortsatte i 10 år mere. Taliban forbød opium i 2000 — USA invaderede 2001 — opium eksploderede. Tilfælde?',
  },
  {
    name: 'Libyen 2011', oil: 'Afrikas største olieproduktion · Gaddafis guld-dinar plan', lie: '"Humanitær intervention" · Beskytte civile',
    who: 'NATO-lande fik adgang til libysk olie · Rothschild centralbank oprettet UNDER krigen · Franske oliefirmaer fik kontrakter',
    dead: '30.000+ libyere dræbt · Libyen er nu failed state med slavemarked',
    real: 'Gaddafi planlagde guld-backed pan-afrikansk valuta (Gold Dinar) der ville erstatte CFA-franc og frigøre Afrika fra vestlig finanskontrol. Hillary Clintons emails bekræfter dette var hovedmotivet.',
  },
  {
    name: 'Syria 2011-nu', oil: 'Qatar-Tyrkiet-Europa gas pipeline · Strategisk position', lie: '"Støtte til demokratiske oprørere" · Assad må gå',
    who: 'USA trænede og finansierede ISIS-forgangere · Qatar og Saudi Arabia finansierede oprørere · Olie-pipeline-interesser',
    dead: '500.000+ syrere dræbt · 13 millioner på flugt',
    real: 'Assad nægtede Qatar\'s pipeline der ville gå gennem Syrien. Iran tilbød en alternativ pipeline der styrker Rusland. Det er en pipeline-krig — intet andet.',
  },
  {
    name: 'Iran — Igangværende', oil: '4. største olieproduktion + naturgas · Hormuzbstrædet (20% af verdens olie)', lie: '"Atomtrussel" · Terrorstat',
    who: 'Israel og Saudi Arabia presser USA · Vestlige olieselskaber vil have adgang · AIPAC-lobby finansierer USA\'s Iran-politik',
    dead: 'Sanktioner dræber civile via mangel på medicin og mad · Ingen direkte krig endnu',
    real: 'Iran har ingen atomvåben (bekræftet af IAEA). Iran sælger olie uden om dollaren via Kina og Rusland. Iran er den eneste store aktør der ikke har en Rothschild-ejet centralbank.',
  },
  {
    name: 'Venezuela 2019-nu', oil: 'Verdens største olieproduktion (453 milliarder tønder)', lie: '"Demokrati" · Maduro er diktator',
    who: 'USA støttede kuppet mod Hugo Chavez 2002 · Exxon Mobil, Chevron venter på adgang · USA anerkendte Guaido som "præsident" uden valg',
    dead: 'Sanktioner ødelagde økonomien · Humanitær krise skabt kunstigt',
    real: 'Chavez nationaliserede olien og brugte pengene på gratis uddannelse og sundhed. Det måtte stoppes. Maduro fortsatte samme politik. John Bolton (National Security Advisor): "Det handler om olien."',
  },
  {
    name: '9/11 — Forspillet til det hele', oil: 'Justification for 20+ år krig · Patriot Act · Mass surveillance', lie: '"19 arabiske terrorister med Stanley knive"',
    who: 'PNAC (Project for New American Century) kaldte i 2000 for en "New Pearl Harbor" begivenhed for at retfærdiggøre militær ekspansion · Dick Cheney, Donald Rumsfeld, Paul Wolfowitz alle PNAC-signatarer',
    dead: '2.977 dræbt på dagen · Millioner i de efterfølgende krige',
    real: 'Building 7 kollapsede kl. 17:20 — ikke ramt af fly. Free-fall hastighed. BBC rapporterede om det 20 minutter FØR det kollapsede. Insider trading i flyaktier dagene før. $2.3 trillion "manglende" fra Pentagon rapporteret 10. september 2001.',
  },
]

const TABS = [
  { id: 'prs',        label: '⚙️ Problem-Løsning' },
  { id: 'wars',       label: '💰 Bankernes Krige' },
  { id: 'covid',      label: '🦠 COVID Scam' },
  { id: 'spot',       label: '👁 Spot Det' },
  { id: 'masters',    label: '🎭 Propagandister' },
  { id: 'mockingbird',label: '🐦 Mockingbird' },
  { id: 'examples',   label: '📺 Eksempler' },
  { id: 'freedom',    label: '🔓 Frigør Dig' },
]

const PRS_EXAMPLES = [
  {
    problem: 'Terrorisme (9/11)',
    reaction: 'Frygt, vrede, krav om sikkerhed',
    solution: 'Patriot Act · Masseovervågning · Krige i Mellemøsten · TSA · DHS',
    who: 'Neokonservative, Military-Industrial Complex, Dick Cheney, Paul Wolfowitz',
    result: 'USA brugte $8 trillion på "War on Terror". Lockheed Martin, Raytheon, Boeing fik kontrakter for billioner.',
  },
  {
    problem: 'COVID-19 pandemi',
    reaction: 'Panik, isolation, krav om løsning',
    solution: 'mRNA vacciner (aldrig godkendt tidligere) · Vaccine pas · Digital ID · WEF Great Reset',
    who: 'WHO (Bill Gates finansieret) · CDC · Pfizer, Moderna · Klaus Schwab · Fauci',
    result: 'Pfizer tjente $100 milliarder. Milliardærers formue fordoblede sig under lockdowns. WEF: "You will own nothing."',
  },
  {
    problem: 'Klimakrise',
    reaction: 'Skyld, frygt, krav om handling',
    solution: 'Kulstofskat · Carbon credits · Elbiler (Tesla, Elon) · Insektprotein · 15-minuttersbyer',
    who: 'WEF · Al Gore · Bill Gates (køber farmland) · BlackRock · ESG investering',
    result: 'Carbon credit marked = $2 trillion. Farmland kontrol. Kontrollen over energi og mad = kontrol over befolkning.',
  },
  {
    problem: 'Opioid krise (USA)',
    reaction: 'Afhængighed, dødsfald, krav om behandling',
    solution: 'Mere medicin (metadon, suboxone) · Behandlingsprogrammer ejet af Big Pharma',
    who: 'Sackler-familien (Purdue Pharma) · FDA (godkendte OxyContin trods advarsler) · Læger betalt af Pharma',
    result: '500.000+ dødsfald. Sackler-familien betalte $6 milliarder i forlig og beholdt $10+ milliarder.',
  },
]

const SPOT_TECHNIQUES = [
  {
    technique: 'Repetition som sandhed',
    icon: '🔁',
    desc: 'Goebbels: "Gentag en løgn ofte nok og den bliver til sandhed." Alle store medier bruger identiske vendinger samme dag. "Conspiracy theorist", "misinformation", "safe and effective" — disse fraser dukker op simultant overalt. Det er ikke tilfældig journalistik — det er koordineret messaging.',
    spotIt: 'Læg mærke til hvornår alle medier bruger PRÆCIS de samme ord. Det er en talkingpoint distribueret fra en central kilde.',
  },
  {
    technique: 'Appel til autoritet',
    icon: '👨‍⚕️',
    desc: '"Eksperterne siger...", "Videnskaben er enig...", "WHO anbefaler..." Disse autoriteter er ofte finansieret af de samme interesser der profiterer på narrativet. Rockefeller Foundation finansierede de "eksperter" der erklærede naturmedicin for uvidenskabelig.',
    spotIt: 'Spørg altid: Hvem finansierer denne ekspert? Hvad tjener de på denne konklusion?',
  },
  {
    technique: 'Falsk dikotomi',
    icon: '⚖️',
    desc: '"Du er enten med os eller mod os." "Enten vacciner eller du hader de svage." "Enten klimahandling eller du ødelægger planeten." Dette eliminerer nuance og tvinger folk til at vælge side — begge styret af systemet.',
    spotIt: 'Når du ser to valg: find det tredje. Den rigtige sandhed er næsten altid mere kompleks end den binære præsentation.',
  },
  {
    technique: 'Dehumanisering af modstand',
    icon: '🎯',
    desc: '"Antivaxxer", "flat-earther", "conspiracy theorist", "Putin-puppet", "science denier" — disse labels er designet til at diskreditere uden at debattere. Når systemet ikke kan vinde argumentet, angriber det personen.',
    spotIt: 'Når nogen bruger en label frem for et argument er det en advarsel om at de ikke har et godt argument.',
  },
  {
    technique: 'Manufactured outrage',
    icon: '😡',
    desc: 'Medier vælger historier der skaber maksimal emotionel reaktion. Vrede og frygt deaktiverer den prefrontale cortex (kritisk tænkning) og aktiverer amygdala (fight-or-flight). Et folk i konstant outrage kan ikke tænke klart.',
    spotIt: 'Når du føler stærk vrede fra en nyhed: STOP. Tag en pause. Spørg: hvem gavner det at jeg er vred på dette?',
  },
  {
    technique: 'Censur og shadow-banning',
    icon: '🚫',
    desc: 'Hvad der censureres fortæller dig hvad der er farligt for systemet. COVID-behandlinger, valg-tvivl, Epstein, Hunter Biden laptop, naturlige immunitet — alt dette blev censureret. Censur er en vejviser til sandheden.',
    spotIt: 'Kig efter hvad der fjernes og af hvem. Hvad er det systemet ikke vil have dig til at diskutere?',
  },
]

const PROPAGANDISTS = [
  {
    name: 'Edward Bernays',
    title: 'Propagandaens fader · Freuds nevø',
    icon: '🎩',
    color: '#cc8844',
    quote: '"The conscious and intelligent manipulation of the organized habits and opinions of the masses is an important element in democratic society."',
    text: 'Bernays opfandt moderne PR og propaganda. Han brugte sin onkels (Sigmund Freuds) psykologiske indsigter til at manipulere masse-adfærd. Solgte kvinder cigaretter ved at kalde dem "Torches of Freedom" (kvindefrigørelse). Overbeviste amerikanere om at spise bacon til morgenmad (betalt af kødindustrien). Hjalp United Fruit Company med at koordinere et CIA-kup i Guatemala 1954.',
  },
  {
    name: 'John D. Rockefeller',
    title: 'Standard Oil · Medicinens arkitekt',
    icon: '🛢',
    color: '#cc4444',
    quote: '"I can hire one half of the working class to kill the other half."',
    quoteContext: 'Rockefeller demonstrerede med denne sætning at han forstod den fundamentale mekanik i propaganda: splitsystemet. Sæt to grupper op mod hinanden — og styr begge. Klasse mod klasse. Race mod race. Vaccineret mod uvaccineret.',
    text: 'Rockefeller finansierede Flexner Report (1910) der ødelagde naturmedicin. Finansierede medier og universiteter med betingelse: ingen kritik af Standard Oil eller Rockefeller-interesser. Brugte propaganda til at overbevise offentligheden om at petroleum-baseret medicin var "videnskabelig". Hans formel: kontroller uddannelsen → kontroller læger → kontroller medicin → kontroller sundhed.',
  },
  {
    name: 'Klaus Schwab',
    title: 'WEF grundlægger · Great Reset arkitekt',
    icon: '🌐',
    color: '#4466cc',
    quote: '"You will own nothing, and you will be happy."',
    quoteContext: 'WEF\'s vision for 2030: Ingen privat ejendom. Lejesamfund. Digital valuta. Universal Basic Income som kontrol. "Happy" er ikke et løfte — det er en advarsel.',
    text: 'WEF\'s Young Global Leaders program har produceret: Emmanuel Macron, Justin Trudeau, Jacinda Ardern, Mark Zuckerberg, Jeff Bezos, Bill Gates og hundredevis af andre verdensledere. De er ikke valgt demokratisk ind i WEF — de er håndplukket og trænet. Schwab: "We penetrate the cabinets." The Great Reset bruger COVID som "narrow window of opportunity" til global omstrukturering.',
  },
  {
    name: 'Bill Gates',
    title: 'Microsoft · WHO · Vacciner · Farmland',
    icon: '💊',
    color: '#2277cc',
    quote: '"If we do a really good job on vaccines, we could lower [population] by perhaps 10 or 15 percent."',
    quoteContext: 'Sagt ved TED Talk 2010. Konteksten var CO2 = People × Services × Energy × CO2/Energy. Gates argumenterede for at reducere "People" faktoren.',
    text: 'Gates finansierer WHO med $750 millioner om året — mere end de fleste lande. WHO\'s agenda afspejler Gates\' interesser. Gates ejer 269.000 acres farmland i USA — den største private farmlandejer. Køber farmland mens han promoverer kunstig mad og insektprotein for resten. Finansierede mRNA vaccine forskning i årevis inden COVID. Forudsagde en pandemi offentligt i 2015.',
  },
  {
    name: 'Mainstream Media Ejere',
    title: '6 selskaber · 90% af vestlig media',
    icon: '📺',
    color: '#886644',
    quote: '"The media\'s the most powerful entity on earth. They have the power to make the innocent guilty and to make the guilty innocent."',
    quoteContext: '— Malcolm X',
    text: 'Comcast (NBC, MSNBC, Universal) · Disney (ABC, ESPN, Pixar, Marvel) · News Corp (Fox, Wall Street Journal) · Warner Bros Discovery (CNN, HBO) · Paramount (CBS, BET, MTV) · Sony. Alle disse ejes delvist af BlackRock og Vanguard — de samme investeringsfonde der ejer Pfizer, Moderna, Raytheon, og resten af de selskaber der profiterer på de narrativer medierne skaber.',
  },
  {
    name: 'Joseph Goebbels',
    title: 'Nazi Propagandaminister',
    icon: '📢',
    color: '#666666',
    quote: '"If you tell a lie big enough and keep repeating it, people will eventually come to believe it."',
    quoteContext: 'Goebbels er ikke kun historisk kuriositet — hans teknikker bruges aktivt i dag. Repetition, emotional manipulation, dehumanisering af modstand, kontrol af alle kommunikationskanaler.',
    text: 'Goebbels kontrollerede alle tyske medier, film, musik og kunst. Ingen alternativ stemme eksisterede. I dag er det anderledes i form men identisk i funktion: mainstream media ejes af 6 selskaber, sociale medier censurerer, søgealgoritmer skjuler alternativ information. Goebbels ville genkende systemet.',
  },
]

const FREEDOM_TOOLS = [
  { icon: '🔍', title: 'Spørg: Cui Bono?', text: 'Latinsk for "Hvem gavner det?" Hver gang du ser en nyhed, et lovforslag eller en "krise": hvem tjener på dette narrativ? Penge og magt efterlader altid spor.' },
  { icon: '📡', title: 'Diversificér dine kilder', text: 'Læs fra begge "sider" og derefter fra uafhængige kilder uden for mainstream. RT, Al Jazeera, Independent, Substack-journalister, FOIA-dokumenter. Sandheden er sjældent præcis der hvor én side placerer den.' },
  { icon: '⏸', title: 'Pauser din emotionelle reaktion', text: 'Propaganda virker via følelser. Når du føler stærk vrede, frygt eller empati fra en nyhed: STOP. Vent 24 timer. Søg efter hvad der mangler i historien.' },
  { icon: '📚', title: 'Studer primærkilder', text: 'Læs selve FOIA dokumenterne, selve studierne, selve lovene — ikke journalisternes fortolkning af dem. De fleste aldrig læser det de mener de kender.' },
  { icon: '🌐', title: 'Forstå interessekonflikter', text: 'WHO er finansieret af Gates Foundation. CDC ejer patenter på vacciner. FDA er 75% finansieret af industrien den regulerer. Kend finansieringskilderne.' },
  { icon: '🧘', title: 'Kultiver indre stilhed', text: 'Propaganda kræver et støjfyldt sind. Meditation, naturgang, digitale detox-perioder — disse er ikke luxury, de er modstandskamp. Et stille sind ser klart.' },
  { icon: '💬', title: 'Tal med andre', text: 'Isolation er propagandaens bedste ven. Del hvad du finder med andre — ikke for at overbevise, men for at tænke højt. Sandheden overlever diskussion.' },
  { icon: '✦', title: 'Hæv din frekvens', text: 'Den ultimative modstand: lev i kærlighed, glæde og bevidsthed. Propaganda fodres af frygt og splittelse. Et menneske i 5D-bevidsthed er immune overfor 3D manipulationsstrukturer.' },
]

export default function Propaganda() {
  const [tab, setTab] = useState('prs')
  const [openEx, setOpenEx] = useState(null)
  const nav = useNavigate()

  return (
    <div className="pr-page">
      <div className="pr-hero">
        <div className="pr-icon">📺</div>
        <h1 className="pr-title">Se Gennem Systemet</h1>
        <p className="pr-sub">Propaganda · Problem-Løsning · Narrativ Kontrol · Frigør Dit Sind</p>
        <div className="pr-rockefeller">
          <p>"I can hire one half of the working class to kill the other half."</p>
          <cite>— John D. Rockefeller</cite>
        </div>
      </div>

      <div className="pr-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`pr-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'prs' && (
        <div className="pr-section">
          <p className="pr-intro">Den mest magtfulde kontrolteknik i historien: Skab problemet selv. Vent på befolkningens reaktion. Sælg din forudbestemte løsning. Hegel kaldte det dialektik. Eliten kalder det styring.</p>

          <div className="pr-formula">
            <div className="pr-formula-step problem">PROBLEM</div>
            <div className="pr-formula-arrow">→</div>
            <div className="pr-formula-step reaction">REAKTION</div>
            <div className="pr-formula-arrow">→</div>
            <div className="pr-formula-step solution">LØSNING</div>
          </div>

          <p className="pr-formula-note">Nøglen: Løsningen var klar FØR problemet. Problemet blev skabt for at retfærdiggøre løsningen.</p>

          {PRS_EXAMPLES.map((e, i) => (
            <div key={e.problem} className="pr-prs-card">
              <button className="pr-prs-header" onClick={() => setOpenEx(openEx === i ? null : i)}>
                <span className="pr-prs-problem">{e.problem}</span>
                <span className="pr-prs-arrow">{openEx === i ? '▲' : '▼'}</span>
              </button>
              {openEx === i && (
                <div className="pr-prs-body">
                  <div className="pr-prs-row"><span className="pr-prs-label problem">PROBLEM</span><span>{e.problem}</span></div>
                  <div className="pr-prs-row"><span className="pr-prs-label reaction">REAKTION</span><span>{e.reaction}</span></div>
                  <div className="pr-prs-row"><span className="pr-prs-label solution">LØSNING</span><span>{e.solution}</span></div>
                  <div className="pr-prs-row"><span className="pr-prs-label who">HVEM</span><span>{e.who}</span></div>
                  <div className="pr-prs-result">{e.result}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'wars' && (
        <div className="pr-section">
          <div className="pr-war-butler">
            <p>"War is a racket. It always has been. A few profit — the many pay, the many suffer and the many die."</p>
            <cite>— Smedley Butler, USMC Major General · Most decorated Marine in history · 1935</cite>
          </div>
          <p className="pr-intro">Alle moderne krige følger det samme mønster: En løgn som begrundelse, profiterende banker og våbenindustri bag kulisserne, og millioner af civile som betalte prisen.</p>
          {WARS.map(w => (
            <div key={w.name} className="pr-war-card">
              <h3 className="pr-war-name">{w.name}</h3>
              <div className="pr-war-grid">
                <div className="pr-war-item lie">
                  <span className="pr-war-label">🎭 LØGNEN</span>
                  <p>{w.lie}</p>
                </div>
                <div className="pr-war-item oil">
                  <span className="pr-war-label">💰 RESSOURCEN</span>
                  <p>{w.oil}</p>
                </div>
                <div className="pr-war-item who">
                  <span className="pr-war-label">🏦 HVEM TJENTE</span>
                  <p>{w.who}</p>
                </div>
                <div className="pr-war-item dead">
                  <span className="pr-war-label">☠ PRISEN</span>
                  <p>{w.dead}</p>
                </div>
              </div>
              <div className="pr-war-real">
                <span className="pr-war-label">🔍 DEN VIRKELIGE ÅRSAG</span>
                <p>{w.real}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'covid' && (
        <div className="pr-section">
          <p className="pr-intro">COVID-19 er det største og mest dokumenterede eksempel på Problem-Reaktion-Løsning i historien. Her er beviserne — ikke teorier, men retsdokumenter, FOIA-frigivelser og videnskabelige studier.</p>

          <div className="pr-covid-hero">
            <p>"We need to prepare for the next pandemic. COVID was a dress rehearsal."</p>
            <cite>— Bill Gates, 2022</cite>
          </div>

          {[
            {
              title: '🔬 Laboratoriet — Wuhan Institute of Virology',
              text: 'The Lancet COVID Commission (2022): "Lab leak hypothesis cannot be ruled out." FBI, Department of Energy og CIA konkluderede alle at COVID mest sandsynligt stammede fra laboratoriet i Wuhan.\n\nEcoHealth Alliance (Peter Daszak) finansierede "gain of function" forskning i Wuhan med penge fra NIH/Fauci — forskning der gør naturlige virus mere smitsomme og dødelige. Fauci vidnede under ed at han ikke finansierede gain-of-function. Emails frigivet via FOIA viste det modsatte.',
            },
            {
              title: '📋 Event 201 — Pandemien øvet på forhånd',
              text: 'Oktober 2019 — 6 uger før COVID officielt startede — afholdt Bill Gates Foundation, World Economic Forum og Johns Hopkins University "Event 201": en simulering af præcis en coronavirus pandemi der starter i Kina.\n\nSimuleringen inkluderede: Lockdowns. Vaccine-distribution. Censur af "misinformation." Globalt koordineret respons. Det er samme playbook der blev eksekveret måneder senere.',
            },
            {
              title: '⚖️ Retssagen mod Bill Gates — India',
              text: 'Indien (2021): Retssag anlagt mod Bill og Melinda Gates Foundation og Adar Poonawalla (Serum Institute of India) for vaccine-skader og dødsfald efter AstraZeneca vaccine.\n\nSupreme Court of India undersøgte påstande om at Gates-finansierede vaccineforsøg på børn i Indien 2009-2010 dræbte 7 piger. Indian Parliamentary Committee: Forsøgene var "unethical." Sagen er fortsat aktiv.\n\nSamtidig: WHO\'s immunitetsprogram GAVI (grundlagt og finansieret af Gates) har diplomatisk immunitet — kan ikke sagsøges.',
            },
            {
              title: '📊 Den Amerikanske Rapport (2024)',
              text: 'US Senate Minority Report (2024) — "Federal Government\'s Role in the COVID-19 Pandemic":\n\n• NIH finansierede gain-of-function i Wuhan via EcoHealth Alliance\n• CDC\'s VAERS data blev aktivt underrapporteret\n• Vacciner blev godkendt på unormalt kort tid uden standard langtidsstudier\n• FDA vidste om alvorlige bivirkninger og holdt data hemmelige (frigivet under retssag)\n• Social media censur var koordineret med regeringen\n\nPfizer\'s egne data (frigivet under retssag mod FDA): 1291 bivirkningskategorier de første 90 dage. Inkl. myocarditis, blodpropper, neurologiske skader.',
            },
            {
              title: '🦠 Hantavirus — Samme Playbook?',
              text: 'Hantavirus optræder pludseligt i nyhederne som "næste pandemi trussel." Mønsteret er identisk med COVID-optakten:\n\n• Mediedækning øges dramatisk\n• WHO advarsler\n• "Vi skal forberede os"\n• Gates Foundation har allerede finansieret Hantavirus forskning\n• mRNA vaccine platform (Moderna, BioNTech) er klar til hurtig implementering\n\nHantavirus er faktisk ikke nyt — det har eksisteret i årtier. Det der er nyt er den koordinerede medieopmærksomhed. Spørg dig selv: hvem tjener på frygten?',
            },
            {
              title: '🤔 Hvad virker det til?',
              text: 'COVID opnåede på 2 år:\n\n✓ Verdensomspændende vaccine-pas infrastruktur (digital ID)\n✓ Kontantløst samfund accelereret (track alle transaktioner)\n✓ Fjernarbejde normaliseret (svækker fællesskab og kollektiv magt)\n✓ Lockdowns viste at befolkninger accepterer ekstrem begrænsning af bevægelsesfrihed\n✓ Milliardærers formue fordoblet mens middelklassen kollapsede\n✓ mRNA teknologi injiceret i 5+ milliarder — den første globale medicinsk teknologitest\n✓ "Emergency powers" normaliseret\n\nKlaus Schwab: "COVID is a narrow window of opportunity for The Great Reset."',
            },
          ].map(s => (
            <div key={s.title} className="pr-covid-card">
              <h3 className="pr-covid-title">{s.title}</h3>
              <p className="pr-covid-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'spot' && (
        <div className="pr-section">
          <p className="pr-intro">Propaganda er designet til at omgå din kritiske tænkning. Når du kender teknikkerne kan de ikke bruges på dig.</p>
          {SPOT_TECHNIQUES.map(t => (
            <div key={t.technique} className="pr-spot-card">
              <div className="pr-spot-header">
                <span className="pr-spot-icon">{t.icon}</span>
                <h3 className="pr-spot-name">{t.technique}</h3>
              </div>
              <p className="pr-spot-desc">{t.desc}</p>
              <div className="pr-spot-tip">
                <span className="pr-spot-tip-label">👁 SPOT DET</span>
                <p>{t.spotIt}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'masters' && (
        <div className="pr-section">
          <p className="pr-intro">Disse er de dokumenterede arkitekter bag moderne propaganda. Ikke teorier — historiske facts.</p>
          {PROPAGANDISTS.map(p => (
            <div key={p.name} className="pr-master-card" style={{'--pc': p.color}}>
              <div className="pr-master-header">
                <span className="pr-master-icon">{p.icon}</span>
                <div>
                  <div className="pr-master-name">{p.name}</div>
                  <div className="pr-master-title">{p.title}</div>
                </div>
              </div>
              <div className="pr-master-quote">"{p.quote}"</div>
              {p.quoteContext && <p className="pr-master-context">{p.quoteContext}</p>}
              <p className="pr-master-text">{p.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'mockingbird' && (
        <div className="pr-section">
          <p className="pr-intro">Operation Mockingbird er ikke en teori. Det er dokumenteret af Church Committee i 1975 og CIA's egne FOIA-frigivne dokumenter.</p>

          <div className="pr-mock-card">
            <h3>Hvad er Operation Mockingbird?</h3>
            <p>CIA's program fra 1950erne til at infiltrere og kontrollere amerikanske (og internationale) medier. CIA betalte journalister, redaktører og medieejere for at publicere historier der tjente CIA's agenda og undertrykke historier der var skadelige.</p>
            <p style={{marginTop:'10px'}}>Church Committee (US Senat, 1975) bekræftede at over 400 journalister arbejdede for CIA. Frank Church: "Vi har mødt fjenden og det er os selv."</p>
          </div>

          <div className="pr-mock-card">
            <h3>Carl Bernstein's afsløring (Rolling Stone, 1977)</h3>
            <p>Bernstein (der afslørede Watergate) dokumenterede at CIA havde relationer med The New York Times, CBS, Time Magazine, Newsweek og mange andre. Disse relationer eksisterede ikke som "infiltration" — ejerne samarbejdede frivilligt.</p>
            <p style={{marginTop:'10px'}}>William Colby (CIA direktør): "The Central Intelligence Agency owns everyone of any significance in the major media."</p>
          </div>

          <div className="pr-mock-card">
            <h3>I dag — Digital Mockingbird</h3>
            {[
              'Twitter/X modererede indhold baseret på FBI anmodninger (afsløret i Twitter Files 2022)',
              'Facebook koordinerede censur med DHS og FBI (afsløret i Missouri v. Biden 2023)',
              'Google justerer søgeresultater baseret på "quality raters" med politiske instruktioner',
              'TikTok-algoritmen kontrolleres af ByteDance — kinesisk stats-tilknyttet selskab',
              'NewsGuard og "fact-checkers" finansieres af samme interesser de checker',
            ].map(f => (
              <div key={f} className="pr-mock-fact">✦ {f}</div>
            ))}
          </div>

          <div className="pr-mock-card">
            <h3>Vedette Kendisser som propagandaværktøj</h3>
            <p>Celebrities med massive følgere bruges til at normalisere eller fremme politiske agendaer. Dokumenterede eksempler:</p>
            {[
              'Kylie Jenner, Jennifer Lopez og 50+ kendisser betalte for at promovere COVID vaccines på Instagram (afsløret af intern briefing)',
              'Hollywood koordinerede med Pentagon: films der viser militær positivt får adgang til militær udstyr og locations',
              'Musikindustrien: Radiohead begrænser spiller afhænger af politisk indhold i videoen',
              'Sportsstjerner brugt til "get vaxxed" kampagner mod betaling — ikke oplyst til fans',
            ].map(f => (
              <div key={f} className="pr-mock-fact">✦ {f}</div>
            ))}
          </div>
        </div>
      )}

      {tab === 'examples' && (
        <div className="pr-section">
          <p className="pr-intro">Konkrete dokumenterede eksempler på propaganda der har formet millioners virkelighed.</p>
          {[
            {
              title: 'Babies thrown from incubators (1990)',
              color: '#cc4444',
              text: 'En 15-årig pige vidnede i Kongressen om at irakiske soldater kastede kuwaitiske babyer ud af inkubatorer. Det udløste støtten til Golfkrigen. Det var løgn — pigen var den kuwaitiske ambassadørs datter og vidnede aldrig om noget hun selv så. PR-firmaet Hill & Knowlton arrangerede det hele, betalt af kuwaiti-regeringen. Afsløret EFTER krigen.',
            },
            {
              title: 'Weapons of Mass Destruction (2003)',
              color: '#cc6633',
              text: 'Colin Powell fremlagde "beviser" for FN om irakiske masseødelæggelsesvåben. Alle vigtige medier reproducerede det ukritisk. Ingen WMD eksisterede. 100.000+ civile irakere dræbt. Powell erkendte det som "a blot on my record" før sin død. The Chilcot Report (UK) bekræftede at beviser var fabrikeret.',
            },
            {
              title: 'Russiagate (2016-2019)',
              color: '#4466cc',
              text: '3+ år med daglig nyhedsdækning af "Trump-Rusland sammensværgelse." Mueller Report: ingen sammensværgelse fundet. Steele Dossier (grundlaget): betalt af Hillary Clintons kampagne. Christopher Steele indrømmede han ikke verificerede kilden. Durham Report: FBI vidste dossier var falsk og fortsatte efterforskningen alligevel.',
            },
            {
              title: 'Hunter Biden Laptop (2020)',
              color: '#886644',
              text: '51 tidligere efterretningsfolk signerede et brev der erklærede laptop-historien som "Russian disinformation." Twitter og Facebook censurerede den. Joe Biden brugte det i debat. 2022: FBI bekræftede laptopen er ægte. 2023: Biden Department of Justice rejste tiltale baseret på laptoppens indhold.',
            },
            {
              title: 'Ritzau og det vestlige nyhedsbureau system',
              color: '#886633',
              text: 'I Danmark kommer størstedelen af alle nyheder fra Ritzau — et enkelt nyhedsbureau. Det samme gælder i hele Vesten: AP, Reuters, AFP leverer grundstoffet til alle medier. Disse bureauer ejes og finansieres af de samme institutioner og har dyb forbindelse til vestlige efterretningstjenester.\n\nResultat: Selv "konkurrerende" medier bringer identiske historier fordi de alle henter fra den samme kilde. Det ser ud som pluralisme — men er reelt en enkelt stemme distribueret til tusinder af kanaler. Når Reuters skriver noget, skriver alle det.',
            },
            {
              title: 'Safe and Effective (2021)',
              color: '#2277cc',
              text: 'Sætningen "safe and effective" var i samtlige mainstream medier globalt samme dag. CDC, WHO, EMA, regeringer — alle brugte identiske vendinger. Pfizer indrømmede i EU-parlamentet at de ALDRIG testede om vaccinen forhindrede smitte. FDA\'s egne data (frigivet under retssag) viste 1291 bivirkningskategorier i de første 90 dage.',
            },
          ].map(e => (
            <div key={e.title} className="pr-example-card" style={{'--ec': e.color}}>
              <div className="pr-example-title" style={{color: e.color}}>{e.title}</div>
              <p className="pr-example-text">{e.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'freedom' && (
        <div className="pr-section">
          <div className="pr-freedom-quote">
            <p>"The most dangerous man to any government is the man who is able to think things out for himself."</p>
            <cite>— H.L. Mencken</cite>
          </div>
          <p className="pr-intro">At se propaganda er ikke nok — du skal aktivt frigøre dit sind. Her er konkrete redskaber.</p>
          {FREEDOM_TOOLS.map(f => (
            <div key={f.title} className="pr-freedom-card">
              <span className="pr-freedom-icon">{f.icon}</span>
              <div>
                <h4 className="pr-freedom-title">{f.title}</h4>
                <p className="pr-freedom-text">{f.text}</p>
              </div>
            </div>
          ))}
          <div className="pr-archon-box">
            <span className="pr-archon-label">⬛ ARCHON FORBINDELSEN</span>
            <p>Nag Hammadi teksterne beskriver Archons der opretholder deres kontrol via "uvidenhed og glemsel." Propaganda er det moderne udtryk for dette: hold menneskeheden i en medieret virkelighed der tjener Archon-systemets interesser. Gnosis — sand viden — er den eneste frihed. Det er præcis hvad Stargate er bygget til.</p>
          </div>
          <div className="pr-connect">
            <button className="pr-connect-btn" onClick={() => nav('/epstein')}>🕸 Deep State Netværket →</button>
            <button className="pr-connect-btn" onClick={() => nav('/hidden-history')}>🏰 Skjult Historie →</button>
            <button className="pr-connect-btn" onClick={() => nav('/system')}>⬛ 3D Magten →</button>
          </div>
        </div>
      )}
    </div>
  )
}
