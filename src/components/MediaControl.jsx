import React, { useState } from 'react'
import './MediaControl.css'

const TABS = [
  { id: 'overview',  label: '📡 Overblik' },
  { id: 'denmark',   label: '🇩🇰 Danmark & Ritzau' },
  { id: 'ownership', label: '🏢 Hvem Ejer Hvad' },
  { id: 'mockingbird', label: '🐦 Operation Mockingbird' },
  { id: 'history',   label: '📜 Historisk Propaganda' },
  { id: 'eu',        label: '🇪🇺 EU & Propagandaunionen' },
  { id: 'voices',    label: '🎙 Uafhængige Stemmer' },
  { id: 'spot',      label: '🎯 Spot det & Beskyt dig' },
]

export default function MediaControl() {
  const [tab, setTab] = useState('overview')

  return (
    <div className="mc-page">
      <div className="mc-hero">
        <div className="mc-icon">📡</div>
        <h1 className="mc-title">Verdens Medier</h1>
        <p className="mc-sub">Samme ejere · Samme narrativ · Samme agenda — fra Ritzau til Rockefeller</p>
      </div>

      <div className="mc-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`mc-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="mc-section">
          <div className="mc-alert">
            <p>"Giv mig kontrol over en nations medie og jeg bekymrer mig ikke om hvem der laver dens love."<br/>
            <cite>— tilskrevet Rothschild; parafraseret af Bernays</cite></p>
          </div>

          {[
            {
              icon: '🏢',
              title: '6 Selskaber — 90% af Verdens Medier',
              text: 'I 1983 ejede 50 selskaber 90% af alle amerikanske medier.\nI 2012: 6 selskaber.\nI 2024: Effektivt 4-5 konglomerater.\n\n• Comcast/NBCUniversal: NBC, MSNBC, Sky, Universal Pictures\n• Disney/ABC: ABC, ESPN, FX, National Geographic\n• Warner Bros Discovery: CNN, HBO, Warner Bros\n• News Corp/Fox: Fox News, Wall Street Journal, New York Post, SKY\n• Bertelsmann: RTL Group, Penguin Random House\n\nDisse selskaber deler bestyrelsesmedlemmer, ejes af de samme institutionelle investorer (BlackRock, Vanguard, State Street) og koordinerer narrativer.',
              src: 'Media consolidation data: Business Insider 2012; Free Press research 2024'
            },
            {
              icon: '🔄',
              title: 'Det Samme Nyhedsbudskab Overalt',
              text: 'I 2018 sendte Deadspin et viralt klip: 196 Sinclair Broadcasting lokale TV-stationer sendte IDENTISK script SIMULTANT:\n\n"Dette er bekymrende for vores demokrati..."\n\nOrdret identisk. Hundredvis af "lokale" nyhedsværter. Ét script.\n\nDette er ikke tilfældig koordinering. Det er centralt produceret narrativ distribueret til "uafhængige" lokale medier der giver illusion af mangfoldighed.\n\nDette sker i alle vestlige lande — med variationer, men med den samme kernemekanisme.',
              src: 'Sinclair Broadcasting scripts viral video, April 2018; Columbia Journalism Review analysis'
            },
            {
              icon: '💰',
              title: 'BlackRock & Vanguard — De Usynlige Ejere',
              text: 'BlackRock og Vanguard er verdens to største kapitalforvaltere med over $20 BILLIONER under forvaltning.\n\nDe er de største aktionærer i:\n• Alle store medieselskaber\n• Alle store tech-selskaber (Google, Meta, Twitter)\n• Alle store farmaceutiske selskaber\n• Alle store banker\n\nDen samme ejer. Forskellig etiket.\n\nNår BlackRock ejer 10% af Disney OG 10% af News Corp OG 10% af NBCUniversal — er det "konkurrerende medier"?\n\nEller er det én ejer med mange stemmer?',
              src: 'Bloomberg: BlackRock/Vanguard ownership analysis 2022; SEC filing data'
            },
          ].map(s => (
            <div key={s.title} className="mc-card">
              <div className="mc-card-icon">{s.icon}</div>
              <h3 className="mc-card-title">{s.title}</h3>
              <p className="mc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="mc-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'denmark' && (
        <div className="mc-section">
          <div className="mc-alert">
            <p>Danmark har titusinder af journalister, hundredvis af medier — og ÉN nyhedsudbyder. Næste gang du læser en nyhed: Kig i bunden. Der står det.</p>
          </div>

          <div className="mc-big-card">
            <h2 className="mc-big-title">Ritzau — Den Usynlige Filter</h2>
            <p className="mc-big-text">Ritzau er Danmarks eneste nyhedsbureau. Grundlagt 1866. Ejet af danske medier i fællesskab (cirkulært ejerskab — medierne ejer nyhedsbureauet der forsyner dem).</p>
            <p className="mc-big-text" style={{marginTop:'10px'}}>Åbn en hvilken som helst dansk nyhedsartikel om en større begivenhed. Scroll til bunden. I 90%+ af tilfælde vil du se:</p>
            <div className="mc-ritzau-box">
              <span className="mc-ritzau-badge">Ritzau/AFP</span>
              <p>Denne artikel er baseret på en Ritzau-telegrammer</p>
            </div>
            <p className="mc-big-text" style={{marginTop:'10px'}}>DR, TV2, Berlingske, Politiken, BT, Ekstra Bladet, Jyllands-Posten — alle modtager det samme Ritzau-telegram og publicerer det med minimal ændring.</p>
            <p className="mc-big-text" style={{marginTop:'10px'}}>Det ser ud som 10 uafhængige medier der dækker en nyhed. I virkeligheden er det ét telegram distribueret til 10 redaktioner.</p>
          </div>

          {[
            {
              title: 'Hvad det betyder i praksis',
              text: 'Scenario: Rusland angriber et ukrainsk mål.\n\nRitzau modtager Reuters/AFP telegram (internationale nyhedsbureauer)\nRitzau oversætter og distribuerer\nDR publicerer: "Ritzau: Rusland angriber..."\nTV2 publicerer: "Ifølge Ritzau: Rusland angriber..."\nBerlingske publicerer: "Rusland angriber... (Ritzau)"\n\nDu læser "mange medier bekræfter historien." I virkeligheden: Ét telegram. Mange logoer.\n\nKilden til kilden: Reuters er ejet af Thomson Reuters Corp. Kontrolleret af Thomson-familien og — institutionelle investorer som BlackRock og Vanguard.',
            },
            {
              title: 'Danmarks Mediestøtte — Staten Betaler',
              text: 'Den danske stat betaler hundredvis af millioner i mediestøtte hvert år.\n\nFordelen ved statsstøtte til medier:\n• Medier der kritiserer staten risikerer at miste støtte\n• Staten har indirekte kontrol over hvad der er "støtteberettiget"\n• Medier er i praksis afhængige af politisk goodwill\n\nDR er statsfinansieret direkte via licensafgift/finanslov.\n\nTV2 modtager statsstøtte.\n\nDe private aviser modtager indirekte støtte via momsfritagelse og direkte tilskudsordninger.\n\nI 2023 gav den danske stat 400+ millioner i mediestøtte. Hvem bestemmer hvilke medier der støttes?',
              src: 'Medienævnets årsrapport 2023; Kulturministeriets mediestøtteordning'
            },
            {
              title: 'Eksemplet der viser alt',
              text: 'Under COVID-pandemien:\n\nAlle danske medier brugte konsekvent ét kildeunivers:\n• Statens Serum Institut (SSI)\n• Sundhedsstyrelsen\n• Regeringens pressekonferencer\n• WHO (finansieret af Gates Foundation)\n\nEn dansk journalist der ønskede at interviewe en af de 1000+ international videnskabsfolk der kritiserede lockdowns — måtte selv finde dem. Ritzau-telegrammer kom aldrig fra dem.\n\nGreat Barrington Declaration (Harvard/Stanford/Oxford epidemiologer): Aldrig i Ritzau. Aldrig i DR. Aldrig i TV2.\n\nDet er ikke censur via forbud. Det er censur via fravalg.',
            },
          ].map(s => (
            <div key={s.title} className="mc-card">
              <h3 className="mc-card-title">{s.title}</h3>
              <p className="mc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="mc-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'ownership' && (
        <div className="mc-section">
          <p className="mc-intro">Bag "konkurrerende medier" gemmer sig overraskende ofte de samme ejere, de samme bestyrelsesmedlemmer og de samme institutionelle investorer.</p>

          {[
            {
              land: '🇩🇰 Danmark',
              medier: 'Berlingske Media (Berlingske, BT, Business.dk) — ejet af brittisk private equity\nJP/Politikens Hus (Politiken, Jyllands-Posten, Ekstra Bladet) — ejet af fonde\nDR & TV2 — statsfinansierede\nAlle: Afhænger af Ritzau for breaking news',
            },
            {
              land: '🇺🇸 USA',
              medier: 'Comcast → NBC, MSNBC, Universal\nDisney → ABC, ESPN, FX\nNews Corp → Fox, WSJ, NY Post\nWarner → CNN, HBO\nTOP aktionær i ALT: BlackRock + Vanguard\nFælles bestyrelsesmedlemmer på tværs af "konkurrenter"',
            },
            {
              land: '🇬🇧 UK',
              medier: 'Rupert Murdoch → The Sun, The Times, Sky News\nRothmere Family → Daily Mail, Metro\nBBC — statsfinansieret\nThe Guardian — ejet af Scott Trust Limited\nFælles kilde: Reuters + PA Media (UK\'s Ritzau)',
            },
            {
              land: '🌍 Globalt',
              medier: 'Associated Press (AP): Deles af alle vestlige medier\nReuters: Thomson-familien + institutionelle investorer\nAFP: Finansieret af den franske stat\n\nDisse tre bureauer producerer fundamentalt set den globale nyhedsfortælling.\nAlt andet er genpublicering med lokalt spin.',
            },
          ].map(s => (
            <div key={s.land} className="mc-country-card">
              <div className="mc-country-name">{s.land}</div>
              <p className="mc-country-medier" style={{whiteSpace:'pre-line'}}>{s.medier}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'mockingbird' && (
        <div className="mc-section">
          <div className="mc-alert">
            <p>"Vi vil vide at vores desinformations-program er komplet når alt hvad den amerikanske offentlighed tror er falsk."<br/>
            <cite>— tilskrevet CIA-direktør William Casey, 1981</cite></p>
          </div>

          {[
            {
              icon: '🐦',
              title: 'Operation Mockingbird — Dokumenteret CIA-Mediakontrol',
              text: 'Operation Mockingbird var CIA\'s program til at infiltrere og kontrollere vestlige medier. Bekræftet under Church Committee-høringerne i Kongressen i 1975.\n\nCIA rekrutterede journalister, redaktører og mediechefer til at:\n• Publicere CIA-producerede historier som "journalistik"\n• Undertrykke historier der skadede CIA\n• Promovere anti-kommunistisk narrativ under Den Kolde Krig\n\nCIA bekræftede at have aktive agenter i over 400 amerikanske medieorganisationer i 1970erne.',
              src: 'Church Committee Report, Book I, 1976; Carl Bernstein: "The CIA and the Media", Rolling Stone 1977'
            },
            {
              icon: '📰',
              title: 'Navnene der Bekræftes',
              text: 'Carl Bernstein (Watergate-reporter, Washington Post) offentliggjorde i 1977 navne på medier der samarbejdede med CIA:\n\n• New York Times\n• CBS News\n• Time Magazine\n• Newsweek\n• Associated Press\n• UPI (United Press International)\n• Reuters (delvist)\n\nBernstein estimerede over 400 journalister som CIA-"assets" i perioden 1950-1976.\n\nDirector Colby (CIA) indrømmede: "The Central Intelligence Agency has indeed used the American press for various purposes."',
              src: 'Carl Bernstein: "The CIA and the Media", Rolling Stone, October 20, 1977'
            },
            {
              icon: '🔄',
              title: 'Er det Stoppet?',
              text: 'Church Committee anbefalede i 1976 at CIA stopper brugen af medier som assets.\n\nCIA svarede: De stopper med "at bruge journalister som clandestine assets" — men forbeholdt sig retten til at "briefe" journalister.\n\nChristiansen og Rampton dokumenterede i "Toxic Sludge is Good for You" (1995) at praksis fortsatte under andre navne.\n\nWikileaks\' frigivne dokumenter viser aktiv koordinering mellem efterretningstjenester og medie-narrativer frem til 2016.\n\nModern version: Ikke CIA-agenter i redaktioner, men "national security correspondents" der er afhængige af officielle kilders goodwill for adgang.',
              src: 'Wikileaks Syria Files, Podesta Emails; Bernstein 1977'
            },
          ].map(s => (
            <div key={s.title} className="mc-card">
              <div className="mc-card-icon">{s.icon}</div>
              <h3 className="mc-card-title">{s.title}</h3>
              <p className="mc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="mc-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'history' && (
        <div className="mc-section">
          <div className="mc-alert">
            <p>Propaganda er ikke et moderne fænomen. Det er et af menneskelighedens ældste magtredskaber — fra Romerriget til TikTok.</p>
          </div>

          {[
            {
              year: 'Romerriget',
              title: 'Augustus og den Første Statspropaganda',
              text: 'Augustus Caesar (27 f.Kr.–14 e.Kr.) var historiens første store mediekontrollant.\n\nHan bestilte Virgil til at skrive Æneiden — Roms nationalpos — der legitimerede Augustusslægtens guddommelige ret til at regere. Han finansierede Horats og Livius til at producere litteratur der glorificerede den augustæiske orden.\n\nMonuments, mønter, skulptur — alt var nøje kontrolleret statsnarrativer. Praetorian Guard kontrollerede hvad der blev sagt offentligt i Rom.\n\nDet er den samme model. Anden teknologi.',
            },
            {
              year: '1. Verdenskrig 1914–1918',
              title: 'Den Industrielle Propaganda Fødsel',
              text: 'USA\'s Committee on Public Information (Creel Commission, 1917) under Woodrow Wilson:\n\n• Producerede 75 millioner propagandabøger\n• Uddannede 75.000 "Four Minute Men" — talere der holdt pro-krigstalere ved offentlige arrangementer\n• Udsendte daglige pressemeddelelser til alle aviser\n• Censurerede al post fra soldater\n\nBritisk Bureau of Information: Fabrikerede historier om tyske grusomheder (soldater der bajonetterede belgiske babyer — viste sig at være fuldstændig opdigtet).\n\nEdward Bernays — Freud\'s nevø — arbejdede for Creel Commission og lærte her at masserne kan manipuleres via frygt og fjendebilleder.',
              src: 'George Creel: "How We Advertised America" (1920); Phillip Knightley: "The First Casualty" (1975)'
            },
            {
              year: '2. Verdenskrig 1939–1945',
              title: 'Goebbels, BBC og Allieret Propaganda',
              text: 'Joseph Goebbels (Nazityskland): Reichsministerium für Volksaufklärung und Propaganda kontrollerede alle tyske medier totalt.\n\nMEN — de allierede var ikke uskyldige:\n\nBBC\'s German Service sendte bevidst falske historier om intern nazistisk konflikt for at skabe splittelse. British Special Operations Executive producerede falske tyske aviser.\n\nUSA\'s Office of War Information: Censurerede soldater-dødstals rapporter, kontrollerede Hollywood-produktion, producerede "dokumentar"-film der var rendyrket propaganda (Frank Capra\'s "Why We Fight").\n\nSandhed er altid krigens første offer — på begge sider.',
              src: 'Nicholas John Cull: "The Cold War and the United States Information Agency" (2008)'
            },
            {
              year: 'Den Kolde Krig 1947–1991',
              title: 'CIA, Radio Free Europe og Kulturpropaganda',
              text: 'CIA finansierede hemmeligt:\n• Radio Free Europe og Radio Liberty (udsendte til Østeuropa)\n• Congress for Cultural Freedom — promoverede vestlig kunst og musik\n• Literære tidsskrifter i Europa\n• Oversættelse og distribution af specifikke bøger\n\nGeorge Orwell\'s "Animal Farm" og "1984" — CIA finansierede oversættelserne til 20+ sprog og distribuerede dem gratis bag jerntæppet.\n\nAbstrakt ekspressionisme (Jackson Pollock m.fl.) — CIA promoverede aktivt som "frihedens kunst" mod soviettisk realisme. MoMA (Museum of Modern Art) arbejdede bevidst med CIA.',
              src: 'Frances Stonor Saunders: "Who Paid the Piper? The CIA and the Cultural Cold War" (1999)'
            },
          ].map(s => (
            <div key={s.year} className="mc-card">
              <div className="mc-year">{s.year}</div>
              <h3 className="mc-card-title">{s.title}</h3>
              <p className="mc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="mc-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'eu' && (
        <div className="mc-section">
          <div className="mc-alert">
            <p>EU finansierer medier der støtter EU-projektet. Medier der modtager EU-penge kritiserer sjældent EU. Det er ikke teori — det er budgetposter.</p>
          </div>

          {[
            {
              icon: '🇪🇺',
              title: 'EU\'s Mediefinansiering',
              text: 'EU bruger hundredvis af millioner euro på "medie og kommunikation" hvert år.\n\nEuropaparlamentet har sin egen TV-kanal (EuroparlTV). EU betaler for "EU Reporter" — et medie der udelukkende dækker EU positivt.\n\nEU\'s Creative Europe-program giver tilskud til medie- og kulturprojekter — med krav om at "fremme europæiske værdier".\n\n"Europæiske værdier" er ikke neutralt — det er EU-projektets politiske agenda.\n\nReporters Without Borders modtager EU-funding. De er den organisation der laver pressefrihedsindekser.',
              src: 'EU Commission Communication budget; Corporate Europe Observatory reports'
            },
            {
              icon: '📋',
              title: 'Digital Services Act — EU\'s Censurlov',
              text: 'EU\'s Digital Services Act (2023) kræver at store platforme (Facebook, X, YouTube, TikTok):\n\n• Fjerner "misinformation" (defineret af EU-godkendte "fact-checkers")\n• Underretter myndighederne om brugere der spreder "farligt" indhold\n• Samarbejder med "trusted flaggers" — EU-godkendte organisationer\n\nHvem er "trusted flaggers"? NGO\'er finansieret af — EU og Open Society (Soros).\n\nX (Twitter) under Musk er den eneste store platform der har udfordret DSA åbent.\n\nEU truede med at forbyde X i Europa. Det er ikke pressefrihed. Det er pressekontrol med juridisk mandat.',
              src: 'EU Digital Services Act 2023; EU Commission enforcement actions'
            },
            {
              icon: '🏛',
              title: 'Romerriget Lever — EU som Magtprojekt',
              text: 'De Europæiske Fædre — Jean Monnet, Robert Schuman — var åbne om at EU-projektet var designet til at OVERSKRIDE national suverænitet gradvist.\n\nJean Monnet\'s hemmelige notat (1952): "Europas nationer bør ledes mod en superstat uden at befolkningerne forstår hvad der sker."\n\nFra Romtraktaten (1957) til Lissabontraktaten (2007) er hvert trin en transfer af magt fra nationale parlamenter til EU-bureaukratiet i Bruxelles.\n\nEU er ikke et demokrati. EU-Kommissionen (den udøvende magt) er ikke valgt. Europaparlamentet kan ikke fremsætte lovgivning — det kan kun godkende hvad Kommissionen fremsætter.\n\nDette er Romerrigets administrative struktur med demokratisk facade.',
              src: 'Jean Monnet: "Memoirs" (1978); EU Treaties comparative analysis'
            },
          ].map(s => (
            <div key={s.title} className="mc-card">
              <div className="mc-card-icon">{s.icon}</div>
              <h3 className="mc-card-title">{s.title}</h3>
              <p className="mc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="mc-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}
      {tab === 'voices' && (
        <div className="mc-section">
          <div className="mc-alert">
            <p>Disse er ikke perfekte mennesker — ingen er det. Men de har alle betalt en pris for at sige det mainstream ikke vil sige. Det giver dem troværdighed.</p>
          </div>

          {[
            {
              name: 'Tucker Carlson',
              platform: 'Tucker Carlson Network / X',
              why: 'Fyret fra Fox News i april 2023 — den højest-ratede vært i kabeltv-historien. Fyret EFTER at have interviewet en Svindel-whistleblower om Ukraines korruption og EFTER at have stillet spørgsmål ved COVID-narrativet.',
              topics: ['Ukraine-krigen', 'Big Pharma', 'Deep State', 'Censur', 'Globalistisk agenda'],
              warning: 'Kan have egne politiske bias. Verificer altid primærkilder.',
            },
            {
              name: 'Alex Jones',
              platform: 'Infowars.com / X',
              why: 'Censureret fra alle platforme i 2018 — første store "deplatforming". Hans "konspirationsteorier" fra 00erne (government surveillance, false flags, globalist agenda) er siden bekræftet af Edward Snowden og frigivne dokumenter.',
              topics: ['New World Order', 'False flag operationer', 'Globalistagenda', 'Censur', 'Transhumanisme'],
              warning: 'Overdrevet tone, kommercielle interesser (kosttilskud). Skil budskabet fra leveringen.',
            },
            {
              name: 'Glenn Greenwald',
              platform: 'Substack / Rumble',
              why: 'Pulitzer-prisvindende journalist. Brød Edward Snowdens NSA-afsløringer (2013). Forlod The Intercept han selv grundlagde da de censurerede hans artikel om Hunter Biden. Nu fuldstændig uafhængig.',
              topics: ['Overvågningsstaten', 'Censur', 'Mediekorruption', 'Civil liberties'],
              warning: 'Liberal/libertarian baggrund. Meget pålidelig på fakta og dokumentation.',
            },
            {
              name: 'Matt Taibbi',
              platform: 'Substack',
              why: 'Tidligere Rolling Stone-journalist. Publicerede "Twitter Files" 2022 — dokumenterede koordineret statscensur af sociale medier. Forlod mainstream efter årtiers kritisk journalistik.',
              topics: ['Twitter Files', 'Mediekorruption', 'Wall Street', 'Politisk propaganda'],
              warning: 'En af de mest dokumenterede og pålidelige kritiske journalister.',
            },
            {
              name: 'Russell Brand',
              platform: 'Rumble / Stay Free podcast',
              why: 'Britisk komiker turned bevidsthedsaktivist. Dækker spiritualitet, politik og systemmagt fra et holistisk perspektiv. Deplatformed fra YouTube efter beskyldninger der aldrig førte til retssag.',
              topics: ['Spiritualitet & politik', 'Big Pharma', 'Mediemagt', '3D→5D bevidsthed'],
              warning: 'Meget populær — men stadig troværdig på de emner han dykker ned i med dokumentation.',
            },
            {
              name: 'Jimmy Dore',
              platform: 'YouTube / Substack',
              why: 'Progressiv komiker der kritiserer BEGGE partier. Særligt kendt for at afsløre det demokratiske partis hykleri og mainstream-mediernes løgne om Ukraine og COVID.',
              topics: ['Medicare for All', 'Ukraine', 'Mediekorruption', 'Politisk hykleri'],
              warning: 'Venstrefløjet perspektiv. God til at eksponere mainstream demokratisk hykleri.',
            },
            {
              name: 'Dan Bongino',
              platform: 'Rumble / Dan Bongino Show',
              why: 'Tidligere Secret Service agent. Dækker deep state, FBI/CIA korruption og medieskævhed fra et insider-perspektiv med dokumentation.',
              topics: ['Deep State', 'FBI/CIA korruption', 'Mediebias', 'Censur'],
              warning: 'Stærkt konservativt perspektiv. God primærkilder på government corruption.',
            },
            {
              name: 'Whitney Webb',
              platform: 'Unlimited Hangout (unlimitedhangout.com)',
              why: 'Undersøgende journalist med exceptionel dokumentation. Hendes bøger om Jeffrey Epstein og finansielle netværk er de bedst dokumenterede analyser tilgængelige.',
              topics: ['Epstein-netværket', 'Intelligence agencies', 'Big Tech', 'Techno-fascisme'],
              warning: 'Ekstremt veldokumenteret. En af de mest pålidelige på disse emner.',
            },
            {
              name: 'Dan Bilzerian',
              platform: 'Instagram / X',
              why: 'Armensk-amerikansk pokerspiller og iværksætter der taler åbent om det politiske system, globalistagendaen og behovet for ægte frihed. Bruger sin platform til at stille spørgsmål mainstream ikke stiller — uden filter.',
              topics: ['Politisk frihed', 'Globalistagenda', 'Israel/geopolitik', 'Systemkritik'],
              warning: 'Taler meget direkte om Israel-Palæstina konflikten — kritiserer Israels REGERING og politik, ikke jøder som folk. Skelnet er vigtigt.',
            },
            {
              name: 'Ethan Levins',
              platform: 'Instagram (@ethanlevins)',
              why: 'Uafhængig journalist på sociale medier. Dækker internationale nyheder og geopolitik med en ærlighed og dybde der sjældent ses i mainstream. En af de stemmer der faktisk viser dig hvad der sker i verden.',
              topics: ['International geopolitik', 'Ægte nyheder', 'Systemkritik', 'Ufiltreret journalistik'],
              warning: 'Søg ham på Instagram. Ingen betalt agenda — finansieret af sine følgere.',
            },
          ].map(s => (
            <div key={s.name} className="mc-card">
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'8px'}}>
                <div className="mc-card-title" style={{margin:0}}>{s.name}</div>
                <span style={{fontSize:'10px', color:'rgba(80,160,200,0.7)', background:'rgba(80,160,200,0.1)', padding:'2px 8px', borderRadius:'20px'}}>{s.platform}</span>
              </div>
              <p className="mc-card-text" style={{marginBottom:'8px'}}>{s.why}</p>
              <div style={{display:'flex', flexWrap:'wrap', gap:'4px', marginBottom:'8px'}}>
                {s.topics.map(t => <span key={t} style={{fontSize:'10px', color:'rgba(212,168,67,0.7)', background:'rgba(212,168,67,0.08)', padding:'2px 6px', borderRadius:'20px'}}>{t}</span>)}
              </div>
              <p style={{fontSize:'10px', color:'rgba(255,200,100,0.6)', fontStyle:'italic', margin:0}}>⚠ {s.warning}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'spot' && (
        <div className="mc-section">
          <div className="mc-alert">
            <p>Du behøver ikke stoppe med at læse nyheder. Du skal bare læse dem anderledes.</p>
          </div>

          <div className="mc-card">
            <h3 className="mc-card-title">🎯 10 Spørgsmål til Enhver Nyhed</h3>
            <div>
              {[
                ['1', 'Hvem er kilden?', 'Er det et officielt udmelding, en enkelt anonym kilde, eller et dokument? Kildernes troværdighed varierer enormt.'],
                ['2', 'Hvem EJER dette medie?', 'Find ud af hvem der ejer avisen/TV-stationen. Er det statsstøttet? Privat kapital? Hvem er topaktionærerne?'],
                ['3', 'Er det et Ritzau-telegram?', 'Kig i bunden af artiklen. Ser du "Ritzau", "AFP", "Reuters", "AP"? Så er det et bureau-telegram, ikke original journalistik.'],
                ['4', 'Hvad fortæller de IKKE?', 'Den vigtigste information er ofte hvad der udelades. Hvad ville ændre historien hvis det var med?'],
                ['5', 'Hvem profiterer?', 'Cui bono — hvem tjener på at du tror dette? Hvilke interesser gavner narrativet?'],
                ['6', 'Er det aktiv følelse?', 'Frygt, vrede, moralsk harme = lavt kritisk tænkning. Vores hjerne slukker for tvivl under stærke følelser.'],
                ['7', 'Hvor er modstemmen?', 'Citeres eksperter der er uenige? Hvis ikke — er det journalistik eller PR?'],
                ['8', 'Hvornår kom det?', 'Timing er vigtig. Hvad sker der ellers i nyhederne? Distraherer denne nyhed fra noget andet?'],
                ['9', 'Primær kilde?', 'Find den originale rapport, studie, eller dokument. Medierne fejlciterer og forvrænger videnskabelige studier konstant.'],
                ['10', 'Hvad siger alternativerne?', 'Søg samme emne på medier med ANDEN ejerskabsprofil. Hvad udelader de vestlige medier? Hvad inkluderer de?'],
              ].map(([num, title, desc]) => (
                <div key={num} className="mc-spot-item">
                  <div className="mc-spot-num">{num}</div>
                  <div>
                    <div className="mc-spot-title">{title}</div>
                    <div className="mc-spot-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mc-card">
            <h3 className="mc-card-title">🛡 Alternative Informationskilder</h3>
            <p className="mc-card-text">Disse er ikke perfekte — ingen er det — men de repræsenterer en ANDEN ejerskabsstruktur og narrativ:</p>
            {[
              ['Al Jazeera', 'Qatarisk finansieret — dækker Mellemøsten anderledes end vestlige medier'],
              ['CGTN', 'Kinesisk statsmedie — nyttigt for at se hvad vestlige medier udelader om Kina'],
              ['RT (Russia Today)', 'Russisk statsmedie — suspenderet i EU. Hvad siger det om "pressefrihed"?'],
              ['The Grayzone', 'Uafhængigt — dækker kritisk geopolitik. Finansieres af læserbidrag'],
              ['Consortium News', 'Grundlagt af Robert Parry (AP, Newsweek). Veteran-journalistik'],
              ['Substack-journalister', 'Matt Taibbi, Glenn Greenwald, Bari Weiss — forlod mainstream for uafhængighed'],
              ['FOIA-databaser', 'Muckrock.com — originale dokumenter fra myndighederne. Primærkilder'],
            ].map(([src, desc]) => (
              <div key={src} style={{padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
                <div style={{fontSize:'12px', fontWeight:'700', color:'#50a0c8', marginBottom:'3px'}}>{src}</div>
                <div style={{fontSize:'11px', color:'rgba(255,255,255,0.55)'}}>{desc}</div>
              </div>
            ))}
          </div>

          <div className="mc-card">
            <h3 className="mc-card-title">✦ Det 5D Perspektiv på Medier</h3>
            <p className="mc-card-text">3D-medierne opererer på frygt og splittelse — det er deres forretningsmodel og kontrolmekanisme.</p>
            <p className="mc-card-text" style={{marginTop:'8px'}}>5D-bevidsthed betyder ikke at ignorere verden — det betyder at observere den uden at lade den definere din indre tilstand.</p>
            <p className="mc-card-text" style={{marginTop:'8px'}}>Praktisk: Begræns nyhedsforbrug til 20-30 min/dag. Vælg bevidst dine kilder. Lad ikke algoritmer vælge for dig. Prioritér primærkilder over fortolkning.</p>
            <p className="mc-card-text" style={{marginTop:'8px', color:'rgba(212,168,67,0.8)'}}>Den bedst informerede er ikke den der ser mest TV. Det er den der har lært at stille de rigtige spørgsmål.</p>
          </div>
        </div>
      )}

    </div>
  )
}
