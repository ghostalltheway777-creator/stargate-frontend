import React, { useState } from 'react'
import './SystemPower.css'

const SECRET_SOCIETIES = [
  { name: 'Frimurerne', est: '1717 (officielt)', color: '#c8a840', desc: 'Verdens ældste og mest dokumenterede hemmelige orden. 33 grader — de første 3 er åbne, grad 4-33 er lukkede. Symboler: kompas & vinkelmål, det altseende øje, G (Geometry/God). Kendte medlemmer: George Washington, Mozart, Churchill, Voltaire, Benjamin Franklin. Påstår at stamme fra Salomos Tempel og de ægyptiske mysterieskoler.' },
  { name: 'Illuminati', est: '1776 · Bayern', color: '#e05050', desc: 'Grundlagt 1. maj 1776 af Adam Weishaupt, professor i kirkelov. Mål: fjerne kirke og kongemagt, erstatte med fornuftbaseret verdensorden. Infiltrerede frimurernes loger. Officielt opløst 1785 af den bayerske stat — men strukturen fortsatte underground og fusionerede med internationale banknetværk.' },
  { name: 'Skull & Bones', est: '1832 · Yale', color: '#aaaaaa', desc: 'Hemmeligt broderskab på Yale University. Optager 15 nye "Bonesmen" om året. Alumni: George H.W. Bush, George W. Bush, John Kerry, William Howard Taft. CIA rekrutterer tungt fra Skull & Bones. Mødes i bygningen kaldet "The Tomb". En Bonesman kan ikke sige nej til en anmodning fra en anden.' },
  { name: 'Tempelridderne', est: '1119–1312', color: '#4080c0', desc: 'Grundlagt 1119. Den første internationale bankorganisation — opfandt rembursen. Akkumulerede enorm rigdom og esoterisk viden fra Østen. Opløst 1312 af pave Clement V og kong Filip IV der skyldte dem penge. Fredag den 13. oktober 1307: masseanholdelse. Deres rigdom og viden gik til Hospitalridderne og underground. Mange mener de levede videre som skottisk frimureri.' },
  { name: 'Rosenkrydserordenen', est: '1600-tallet', color: '#50c080', desc: 'Fremkom med de tre Rosenkreutz-manifester 1614-1616. Syntese af kristen mystik, kabbala og alkymi. Hævder adgang til oldgammel hemmelig viden. Usynlig orden — du kan aldrig "blive medlem", kun "findes af dem". AMORC er den moderne offentlige gren. Stor indflydelse på oplysningstidens esoteriske bevægelser.' },
  { name: 'Bohemian Grove', est: '1878 · Californien', color: '#40a060', desc: 'Årlig 2-ugers samling i redwood-skov nord for San Francisco. ~2.000 af verdens mest magtfulde mænd: præsidenter, CEO\'er, militærledere, mediemoguls. Ritualet "Cremation of Care" med en kæmpe ugle-statue. Nixon: "Den mest faggede ting du nogensinde har set." Manhattan-projektet (atombomben) blev planlagt her. Ingen kvinder tilladt.' },
]

const ELITE_ORGS = [
  { name: 'Bilderberg Group', year: '1954', color: '#8080c0', desc: 'Årligt møde af ~150 elite fra politik, bankverden og medier. Ingen presse. Ingen officielle referater. Grundlagt af prins Bernhard af Nederlandene og CIA\'s Allen Dulles. De politikker der diskuteres i Bilderberg dukker op som love 6-18 måneder senere.' },
  { name: 'World Economic Forum', year: '1971 · Davos', color: '#6090e0', desc: 'Klaus Schwab grundlagde det som et "stakeholder capitalism" forum. "The Great Reset" (2020): "Build Back Better" og "You will own nothing and be happy". Young Global Leaders-programmet har produceret Emmanuel Macron, Justin Trudeau, Jacinda Ardern og mange andre verdensledere — håndplukket af Schwab.' },
  { name: 'Council on Foreign Relations', year: '1921 · Rockefeller', color: '#a06080', desc: 'Rockefeller-finansieret tænketank der definerer amerikansk udenrigspolitik. Næsten alle amerikanske udenrigsministre siden WWII har været CFR-medlemmer. Forbinder Wall Street, medier og regering i ét netværk — den reelle motor bag "den dybe stat".' },
  { name: 'Trilateral Commission', year: '1973', color: '#8060a0', desc: 'Grundlagt af Zbigniew Brzezinski og David Rockefeller. Tre regioner: Nordamerika, Europa, Japan/Asien. Jimmy Carter og næsten hele hans kabinet var Trilateral Commission-medlemmer inden de kom til magten — håndplukket af Rockefeller.' },
  { name: 'Bank for International Settlements', year: '1930 · Basel', color: '#607090', desc: 'Centralbankernes centralbank. Ejes af 63 nationale centralbanker. Koordinerer global pengepolitik bag lukkede døre. Diplomatisk immunitet: schweizisk politi kan ikke komme ind. Ingen demokratisk kontrol. Fortsatte med at drive forretning med Nazi-Tyskland under WWII.' },
]

const VATICAN_STRUCTURE = [
  { name: 'Jesuitterne', sub: 'Societas Jesu · 1540', color: '#c8a840', desc: 'Grundlagt af Ignatius af Loyola som "Pavens armé" — verdens mest disciplinerede religiøse orden. Historisk Vatikanets efterretningsorganisation. Jesuitterne drev de mest indflydelsesrige universiteter og uddannede verdens elite i århundreder. Pave Frans er den første jesuit-pave. Generalen for Jesuitterne kaldes "den sorte pave" — og siges at have mere reel magt end den hvide pave.' },
  { name: 'Opus Dei', sub: '1928 · Josemaría Escrivá', color: '#e0e0e0', desc: 'Numeraries lever i Opus Dei-huse, giver al løn og praktiserer mortifikation (selvpiskning, pigtråd om låret). Supernumeraries lever normalt men er dybt engagerede. Opus Dei rapporterer direkte til paven — ikke til lokale biskoper. Stærkt overrepræsenteret i Vatikanets økonomi og i konservative regeringer.' },
  { name: 'Ridderen af Malta (SMOM)', sub: 'Suveræn Militær Orden · 1099', color: '#c03030', desc: 'Har egne pas, diplomatiske relationer med 110+ lande og observatørstatus i FN. Teknisk set et suverænt land uden territorium. CIA-direktør William Casey var Malteserriddernes Grand Prior. Skæringspunktet mellem Vatikanet, gamle penge og vestlig efterretningstjeneste.' },
  { name: 'P2-logen', sub: 'Propaganda Due · opløst 1981', color: '#7070cc', desc: 'Hemmelig frimurerlosje med ~1.000 medlemmer: bankdirektører, generaler, dommere, politikere, journalister. Opdaget 1981. Planen "Piano di Rinascita Democratica": total kontrol over Italiens medier, retsvæsen og økonomi. Forbindelser til Vatikanbanken og Roberto Calvi — "Guds bankier" — fundet hængt under Blackfriars Bridge i London.' },
]

const RELIGION_INFLUENCE = [
  { rel: 'Protestantisme', icon: '✝', color: '#c0a040', who: 'Rockefeller-netværket', desc: 'John D. Rockefeller Sr. finansierede Union Theological Seminary i New York — i årtier den mest indflydelsesrige protestantiske teologiske institution. Rockefeller-penge formede social gospel-bevægelsen og modernistisk teologi, der bevægede fokus fra åndelig frelse til social ingeniørkunst.' },
  { rel: 'Jødedom', icon: '✡', color: '#4080c0', who: "B'nai B'rith & ADL", desc: "B'nai B'rith (grundlagt 1843) er jødisk frimureri — en service-organisation med lukkede loger. Anti-Defamation League (ADL) udspringer herfra. Vigtigt: dette er elite-jødedom, ikke jødedom som folk og religion. Rothschild-familien finansierede oprettelsen af staten Israel og har tætte forbindelser til Bank of England og Federal Reserve." },
  { rel: 'Buddhisme', icon: '☸', color: '#50b080', who: 'CIA & NED', desc: 'Den 14. Dalai Lamas flugt fra Tibet i 1959 blev finansieret og organiseret af CIA — dokumenteret i declassified CIA-dokumenter. National Endowment for Democracy (NED) finansierer tibetanske diaspora-organisationer. Tibets åndelige tradition er ægte — men vestlige efterretningsbureauer bruger den som geopolitisk redskab mod Kina.' },
  { rel: 'New Age', icon: '☽', color: '#9060c0', who: 'Lucis Trust & FN', desc: 'Lucis Trust (grundlagt 1922 af Alice Bailey som "Lucifer Publishing Company") har konsultativ status ved FN og driver World Goodwill-programmet. Mange New Age-begreber om "verdensfred", "globalt borgerskab" og "planetarisk bevidsthed" trackes tilbage til Lucis Trust-netværket og Baileys teosofiske tekster.' },
]

export default function SystemPower() {
  const [openSection, setOpenSection] = useState(null)
  function toggle(k) { setOpenSection(o => o === k ? null : k) }

  return (
    <div className="sp-page">

      <div className="sp-hero">
        <div className="sp-symbol">⬛</div>
        <h1 className="sp-title">3D Magten i Systemet</h1>
        <p className="sp-sub">Hemmelige selskaber · Vatikanet · Pallavicini · Elite-organisationer · Hvem styrer religionerne</p>
        <blockquote className="sp-hero-quote">
          "De farligste fjender er dem der kontrollerer hvad du tror du frit har valgt at tro"
          <cite>— ukendt</cite>
        </blockquote>
      </div>

      <div className="sp-intro-box">
        <p>Bag de religiøse institutioner og politiske systemer eksisterer et lag af <strong>skjulte og åbne magtstrukturer</strong> der bruger religion, økonomi og medier som kontrolinstrumenter. At kende disse strukturer er ikke paranoia — det er <strong>åndelig modenhed</strong>. 5D-tilstanden ser systemet klart uden at miste kærlighed til de mennesker der er fanget i det.</p>
      </div>

      {/* Hemmelige selskaber */}
      <section className="sp-section">
        <button className="sp-sec-header" onClick={() => toggle('secret')}>
          <span className="sp-sec-icon">🕵</span>
          <div>
            <div className="sp-sec-title">Hemmelige selskaber</div>
            <div className="sp-sec-sub">Frimurerne · Illuminati · Skull & Bones · Tempelridderne · Bohemian Grove</div>
          </div>
          <span className="sp-chevron">{openSection === 'secret' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'secret' && (
          <div className="sp-sec-body">
            <div className="sp-card-list">
              {SECRET_SOCIETIES.map(s => (
                <div key={s.name} className="sp-card" style={{'--c': s.color}}>
                  <div className="sp-card-header">
                    <span className="sp-card-name" style={{color: s.color}}>{s.name}</span>
                    <span className="sp-card-est">{s.est}</span>
                  </div>
                  <div className="sp-card-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Elite-organisationer */}
      <section className="sp-section">
        <button className="sp-sec-header" onClick={() => toggle('elite')}>
          <span className="sp-sec-icon">🏦</span>
          <div>
            <div className="sp-sec-title">Kendte elite-organisationer</div>
            <div className="sp-sec-sub">Bilderberg · WEF · CFR · Trilateral · BIS</div>
          </div>
          <span className="sp-chevron">{openSection === 'elite' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'elite' && (
          <div className="sp-sec-body">
            <div className="sp-card-list">
              {ELITE_ORGS.map(o => (
                <div key={o.name} className="sp-card" style={{'--c': o.color}}>
                  <div className="sp-card-header">
                    <span className="sp-card-name" style={{color: o.color}}>{o.name}</span>
                    <span className="sp-card-est">{o.year}</span>
                  </div>
                  <div className="sp-card-desc">{o.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Vatikanet */}
      <section className="sp-section">
        <button className="sp-sec-header" onClick={() => toggle('vatican')}>
          <span className="sp-sec-icon">⛪</span>
          <div>
            <div className="sp-sec-title">Vatikanets indre magtstruktur</div>
            <div className="sp-sec-sub">Jesuitterne · Opus Dei · Ridderen af Malta · P2-logen</div>
          </div>
          <span className="sp-chevron">{openSection === 'vatican' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'vatican' && (
          <div className="sp-sec-body">
            <div className="sp-card-list">
              {VATICAN_STRUCTURE.map(v => (
                <div key={v.name} className="sp-card" style={{'--c': v.color}}>
                  <div className="sp-card-header">
                    <span className="sp-card-name" style={{color: v.color}}>{v.name}</span>
                    <span className="sp-card-est">{v.sub}</span>
                  </div>
                  <div className="sp-card-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Pallavicini */}
      <section className="sp-section">
        <button className="sp-sec-header" onClick={() => toggle('pallavicini')}>
          <span className="sp-sec-icon">☪</span>
          <div>
            <div className="sp-sec-title">Islam — Pallavicini & den vestlige gate-keeper</div>
            <div className="sp-sec-sub">COREIS · WEF Interfaith · Traditionalistisk Skole · Adelsslægt</div>
          </div>
          <span className="sp-chevron">{openSection === 'pallavicini' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'pallavicini' && (
          <div className="sp-sec-body">
            <div className="sp-pall-box">
              <div className="sp-pall-name">Yahya Sergio Yahe Pallavicini</div>
              <div className="sp-pall-sub">Præsident for COREIS · Islamisk Religiøst Samfund i Italien · Sufi-sheik</div>
              <p className="sp-pall-text">Pallavicini er et af de mest fascinerende eksempler på elite-kontrollen over religion. Hans familie er en gammel italiensk adelslinje med dokumenterede forbindelser til frimureriet og Italiens finanselite. Hans far, Felice Pallavicini, konverterede til Islam i 1951 og knyttede familien til René Guénons <strong>Traditionalistiske Skole</strong> — en intellektuel bevægelse der hævder at alle religioner deler en fælles esoterisk kerne.</p>
              <p className="sp-pall-text">Yahya Pallavicini deltager i <strong>World Economic Forums</strong> interfaith-dialoger og repræsenterer "moderat Islam" over for vestlige institutioner. Kritikere ser COREIS som en <strong>gate-keeping-funktion</strong>: en Islam der er acceptabel for Vatikanet og WEF — og som implicit marginaliserer mere autentiske muslimske stemmer der ikke passer ind i det globale governance-narrativ.</p>
              <div className="sp-pall-tags">
                <span className="sp-tag">Traditionalistisk Skole · René Guénon</span>
                <span className="sp-tag">WEF Interfaith-forum</span>
                <span className="sp-tag">Sufi-orden Ahmadiyya Idrisiyya</span>
                <span className="sp-tag">Vatikan-dialog</span>
                <span className="sp-tag">Pallavicini adelsfamilie</span>
              </div>
            </div>

            <div className="sp-guenon-box">
              <div className="sp-guenon-title">René Guénon — grundlæggeren bag</div>
              <p className="sp-guenon-text">René Guénon (1886–1951) er nøglen til at forstå Pallavicini-netværket. Den franske filosof og mystiker konverterede til Islam og udviklede <strong>Perennial Philosophy</strong> — teorien om at alle store religioner deler en fælles esoterisk sandhed. Han tiltrak en elite-kreds af intellektuelle der konverterede til Islam men bevarede forbindelserne til vestlig elite-kultur. Guénons arv er forbindelsespunktet mellem traditionalistisk Islam, Vatikanet og det globale governance-system.</p>
            </div>
          </div>
        )}
      </section>

      {/* Religioner */}
      <section className="sp-section">
        <button className="sp-sec-header" onClick={() => toggle('religions')}>
          <span className="sp-sec-icon">✦</span>
          <div>
            <div className="sp-sec-title">Hvem styrer de andre religioner</div>
            <div className="sp-sec-sub">Protestantisme · Jødedom · Buddhisme · New Age</div>
          </div>
          <span className="sp-chevron">{openSection === 'religions' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'religions' && (
          <div className="sp-sec-body">
            <div className="sp-rel-list">
              {RELIGION_INFLUENCE.map(r => (
                <div key={r.rel} className="sp-rel-card" style={{'--rc': r.color}}>
                  <div className="sp-rel-header">
                    <span className="sp-rel-icon" style={{color: r.color}}>{r.icon}</span>
                    <span className="sp-rel-name" style={{color: r.color}}>{r.rel}</span>
                    <span className="sp-rel-who">{r.who}</span>
                  </div>
                  <div className="sp-rel-desc">{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Baal tilbedelse */}
      <section className="sp-section">
        <button className="sp-sec-header" onClick={() => toggle('baal')}>
          <span className="sp-sec-icon">🦉</span>
          <div>
            <div className="sp-sec-title">Eliten tilbeder stadig Baal — den dag i dag</div>
            <div className="sp-sec-sub">Molok · Cremation of Care · Spirit Cooking · Uglen · Øjet</div>
          </div>
          <span className="sp-chevron">{openSection === 'baal' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'baal' && (
          <div className="sp-sec-body">
            <div className="sp-baal-intro">
              <p>Det lyder som konspirationsteori — men det er dokumenteret. Den globale elite praktiserer ritualer der direkte stammer fra den fønikiske og kanaanæiske tilbedelse af <strong>Baal og Molok</strong>. Ikke som metafor. Som levende praksis. Og symbolerne er overalt — når du ved hvad du kigger efter.</p>
            </div>

            <div className="sp-baal-origin">
              <div className="sp-baal-title">Hvem er Baal og Molok?</div>
              <p className="sp-baal-text"><strong>Baal</strong> (ba'al = "herre") var Fønikiens og Kanaanæernes øverste gud — solens og stormen kraft. Tilbedelse involverede seksuelle ritualer, offergaver og ild. Det var præcist <em>Baal-tilbedelsen</em> som Det Gamle Testamente advarer imod gang på gang: israelitterne faldt konstant tilbage til Baal selvom det var forbudt.</p>
              <p className="sp-baal-text"><strong>Molok</strong> (også Molech, Milcom) var en variant — en gudom hvis statue havde armene udstrakt over en ildovn. I Karthago og Fønikien: børneofre. Biblen forbyder det eksplicit tre gange. Arkæologisk bekræftet i Tophet-udgravninger i Karthago: tusindvis af brændte børneknogler.</p>
              <p className="sp-baal-text">Begge guddomme er associeret med <strong>uglen</strong> som helligt symbol — uglen ser i mørket, jagter om natten, holder hemmeligheder. Minerva/Athena (visdomsgudinden) er også en ugle. I frimureriet er uglen Minervas fugl.</p>
            </div>

            <div className="sp-baal-cards">
              {[
                {
                  title: 'Bohemian Grove — Cremation of Care',
                  color: '#40a060',
                  text: 'Hvert år i juli samles verdens mægtigste mænd i Bohemian Grove og afbrænder symbolsk en menneskefigur kaldet "Dull Care" (ligegyldighed) foran en 12 meter høj betonugle ved en sø ved midnat. Ritualet hedder officielt "Cremation of Care". Det er filmet og offentliggjort af Alex Jones i 2000. Deltagere inkluderer George H.W. Bush, Dick Cheney, Henry Kissinger, Ronald Reagan, Richard Nixon. Uglen er Moloks symbol. Afbrændingen er en direkte parallel til fønikisk offerritual.'
                },
                {
                  title: 'Uglen på dollarsedlen',
                  color: '#c8a840',
                  text: 'Zoom ind på et 1-dollar-seddel øverst til højre på den øverste side af Great Seal-pyramiden. Der sidder en lille ugle. Den er ikke tilfældig — frimurerarkitekter designede den amerikanske valuta med bevidst symbolik. Uglen = Molok/Minerva = den skjulte orden der overvåger systemet fra sin hemmelige position. Det altseende øje over pyramiden er Horus-øjet — et andet Baal-relateret symbol.'
                },
                {
                  title: 'Washington D.C. — Pentagram og ugle',
                  color: '#e05050',
                  text: 'Gadenettet i Washington D.C. danner et omvendt pentagram med Det Hvide Hus i spidsen — designet af frimurerarkitekten Pierre Charles L\'Enfant. Fra oven kan man også se en ugles form i gadestrukturen nord for Det Hvide Hus. Byen er bogstaveligt talt bygget som et okkultet diagram. Kapitolbygningen ("Capitol") stammer fra det latinske Caput = hoved, og "Capitoline Hill" i Rom var dedikeret til Jupiter — den romerske Baal.'
                },
                {
                  title: 'Spirit Cooking — Marina Abramović',
                  color: '#9060c0',
                  text: 'I 2016 afslørede WikiLeaks emails fra John Podesta (Hillary Clintons kampagnechef) hvori han og hans bror Tony inviteredes til en "Spirit Cooking dinner" hos kunstneren Marina Abramović. Spirit Cooking er et ritual baseret på Aleister Crowleys Thelema-magi — blod, sæd og mælk bruges til at skrive sætninger på vægge. Abramović har offentligt forklaret at det er "white magic" i kunstnerisk kontekst — men konteksten i emailen var privat, ikke kunstnerisk.'
                },
                {
                  title: 'Aleister Crowley — bindeleddet',
                  color: '#c03030',
                  text: 'Aleister Crowley (1875–1947) kaldte sig selv "Det store Bæst 666". Hans Thelema-religion er den moderne version af Baal-tilbedelse: "Do what thou wilt shall be the whole of the Law." Han var medlem af Golden Dawn, OTO (Ordo Templi Orientis) og skabte et komplet ritualsystem baseret på seksuel magi og kommunikation med dæmoner. Jimmy Page (Led Zeppelin), Jay-Z og mange andre kendte kunstnere har åbent erklæret sig som Crowley-tilhængere. Hans symbolik dominerer mainstream musikvideoer og underholdningsindustrien.'
                },
                {
                  title: 'Symboler overalt i underholdning',
                  color: '#5080c0',
                  text: 'Det ene øje dækket til = Horus-øjet. Pyramide-håndsymbolet = Great Seal. 666-fingersymbolet. Butterfly-symbolik (MK Ultra-program). Disse symboler er ikke tilfældige kunstneriske valg — de er bevidste signaler til dem der forstår dem. Rihanna, Beyoncé, Jay-Z, Katy Perry, Lady Gaga — alle har brugt dem eksplicit i musikvideoer og ved prisshows. Det er en form for offentlig tilkendegivelse af tilhørsforhold.'
                },
              ].map(c => (
                <div key={c.title} className="sp-baal-card" style={{'--bc': c.color}}>
                  <div className="sp-baal-card-title" style={{color: c.color}}>{c.title}</div>
                  <div className="sp-baal-card-text">{c.text}</div>
                </div>
              ))}
            </div>

            <div className="sp-baal-conclusion">
              <div className="sp-baal-title">Hvad betyder det for dig?</div>
              <p className="sp-baal-text">At vide dette er ikke at leve i frygt — det er at se systemet klart. <strong>5D-perspektivet</strong>: Baal og Molok er lavfrekvente entiteter der eksisterer i et bevidsthedsfelt vi kalder "det mørke" — de fodres af frygt, ofre og ubevidsthed. Den bedste modstand er ikke kamp, men <strong>frekvensløft</strong>. Et menneske i kærlighed og bevidsthed er usynlig for disse kræfter. Du hæver dig simpelthen over det felt de opererer i.</p>
              <p className="sp-baal-text">Tesla og Padgett bekræfter det: virkelighed er frekvens. Baal-tilbedelse er en teknologi til at sænke kollektiv frekvens og holde menneskeheden i 3D. Modsvaret er det Stargate er bygget til — at løfte frekvensen.</p>
            </div>
          </div>
        )}
      </section>

      {/* Moderne Slaveri */}
      <section className="sp-section">
        <button className="sp-sec-header" onClick={() => toggle('slavery')}>
          <span className="sp-sec-icon">⛓</span>
          <span className="sp-sec-label">Det Moderne Slavesystem</span>
          <span className="sp-sec-arrow">{openSection === 'slavery' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'slavery' && (
          <div className="sp-sec-content">
            <div className="sp-slavery-intro">
              <p>"I want a nation of workers, not a nation of thinkers."</p>
              <cite>— John D. Rockefeller</cite>
            </div>
            {[
              {
                title: '37-timers arbejdsugen — designet med præcision',
                color: '#cc4444',
                text: 'Henry Ford introducerede 40-timers arbejdsugen i 1926 — ikke af menneskelige hensyn men fordi forskning viste at arbejdere producerede MERE på 40 timer end 60 timer. Den optimale slavetid: præcis lang nok til at du er træt when du kommer hjem, men kort nok til du stadig kan forbruge i weekenden.\n\nResultat: Du er for træt til at tænke kritisk, gøre oprør eller forfølge dine drømme. Men du tjener nok til at du tror du er fri. Den gyldne bur. Rockefeller var eksplicit: "Vi vil ikke have tænkere — vi vil have arbejdere til vores fabrikker."'
              },
              {
                title: 'Tre måltider om dagen — skabt af marketingfolk',
                color: '#cc7733',
                text: 'Morgenmad er den vigtigste måltid? Det er en reklame-kampagne.\n\nJohn Harvey Kellogg opfandt cornflakes i 1894 for at bekæmpe seksuel nydelse (han mente blandkost sænkede libido). Hans bror W.K. Kellogg så en forretning og markedsførte det som "the most important meal of the day".\n\nEdward Bernays (Freuds nevø og PR-opfinder) blev hyret af baconindustrien i 1920erne til at promovere tung morgenmad. Han betalte læger for at anbefale "a hearty breakfast".\n\nHvordan spiste menneskene i 99% af vores evolutionære historik? 1-2 måltider om dagen, primært om aftenen. Intermittent fasting er det naturlige. Tre måltider er en industri-konstruktion.'
              },
              {
                title: 'Uddannelsessystemet — designet til lydighed',
                color: '#4466cc',
                text: 'Det moderne uddannelsessystem er designet af Prusserstat (Friedrich Wilhelm III, 1800) som et masseproduktionssystem til at skabe lydige soldater og fabriksarbejdere.\n\nRockefeller Foundation og Carnegie Corporation overtog og finansierede amerikansk uddannelse fra 1902. Deres eksplicitte mål: Uddanne arbejdere der følger ordrer, ikke tænkere der stiller spørgsmål.\n\nJohn Taylor Gatto (lærer i 30 år, New York Teacher of the Year): "Schools were designed by Horace Mann and others to be instruments of the scientific management of a mass population." Skolen lærer dig at sidde stille, følge regler, adlyde autoritet og klare tests — ikke at tænke frit.'
              },
              {
                title: 'TV og sociale medier — den digitale lobotomi',
                color: '#6644aa',
                text: 'Gennemsnitsdanmærker ser 3-4 timer TV om dagen + 2-3 timer sociale medier = 5-7 timer daglig passiv absorption.\n\nHjernen i TV-tilstand: Alpha-bølger (svag kritisk tænkning) dominerer. Det er præcist den same hjernebølger som hypnose. Du absorberer information ukritisk.\n\nFacebook, TikTok og Instagram er designet af teams af adfærdspsykologer for at maksimere afhængighed via dopamin-loops. Sean Parker (Facebooks første præsident): "We consciously designed this to be addictive. God only knows what it\'s doing to our children\'s brains."\n\nResultat: En population der er informeret men ikke oplyst. Der VED meget men FORSTÅR lidt.'
              },
              {
                title: 'Vejen ud — 5D perspektivet',
                color: '#50aa50',
                text: 'At se systemet er det første skridt til frihed. Du kan ikke transcendere hvad du ikke kan se.\n\nPraktisk modstand:\n• Intermittent fasting (spis 1-2 måltider) — naturlig menneskelig rytme\n• Begræns TV/sociale medier til 30 min dagligt\n• Skab noget — musik, kunst, kod, have — i stedet for at forbruge\n• Lær dine børn at stille spørgsmål, ikke at memorere svar\n• Investér i din frihed: multiple indkomskilder, skills, netværk\n\nRockefeller ville have arbejdere. Du kan vælge at være noget andet.'
              },
            ].map(c => (
              <div key={c.title} className="sp-slavery-card" style={{'--sc': c.color}}>
                <div className="sp-slavery-title" style={{color: c.color}}>{c.title}</div>
                <div className="sp-slavery-text" style={{whiteSpace:'pre-line'}}>{c.text}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="sp-footer-quote">
        <p>"Giv mig kontrol over et lands penge, og jeg er ligeglad med hvem der laver lovene"</p>
        <cite>— tilskrevet Mayer Amschel Rothschild · 1700-tallet</cite>
      </div>

    </div>
  )
}
