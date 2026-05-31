import React, { useState } from 'react'
import './InnerPath.css'

const GOD_NAMES = [
  { name: 'Allah',       trad: 'Islam',       meaning: 'Al-Ene, Den Almægtige' },
  { name: 'Yahweh',      trad: 'Jødedom',     meaning: 'Jeg er den jeg er' },
  { name: 'God / Father',trad: 'Kristendom',  meaning: 'Fader, Skaber, Kærlighed' },
  { name: 'Brahman',     trad: 'Hinduisme',   meaning: 'Det Universelle Absolut, Alt-et' },
  { name: 'Tao',         trad: 'Taoisme',     meaning: 'Vejen — det ubeskrivelige princip bag alt' },
  { name: 'Ein Sof',     trad: 'Kabbalah',    meaning: 'Det Grænseløse — hinsides al forståelse' },
  { name: 'The All',     trad: 'Hermetisme',  meaning: 'Alt hvad der eksisterer er Sindet' },
  { name: 'Ahura Mazda', trad: 'Zoroastrisme',meaning: 'Det vise lys — universets skaber' },
  { name: 'Wakan Tanka', trad: 'Lakota',      meaning: 'Den Store Ånd — alt levende er ét' },
  { name: 'Bondye',      trad: 'Vodou',       meaning: 'Den Øverste Gud — hinsides direkte kontakt' },
  { name: 'Shang Di',    trad: 'Kinesisk',    meaning: 'Himlens Herre — universets ordnende kraft' },
  { name: 'Ngai',        trad: 'Kikuyu',      meaning: 'Den Usete Skaber — bor på bjergets top' },
]

const HINDU_GODS = [
  { name: 'Brahma',   role: 'Skaberen',  desc: 'Skaber universet fra Brahman — den kosmiske urenergi. Svarer til "Faderen" i kristendommen.' },
  { name: 'Vishnu',   role: 'Opholderen', desc: 'Bevarer universet og inkarnerer som avatar (Krishna, Rama) for at genoprette dharma — den kosmiske orden.' },
  { name: 'Shiva',    role: 'Ødelæggeren', desc: 'Ødelægger illusioner og ego for at muliggøre transformation. "Ødelæggelse" = bevidst renselse.' },
  { name: 'Devi/Shakti', role: 'Den guddommelige feminine', desc: 'Den aktive kraft bag al skabelse. Brahman er potentiale — Shakti er bevægelsen. Kali, Durga, Lakshmi er alle udtryk for hende.' },
  { name: 'Ganesha',  role: 'Fjerner forhindringer', desc: 'Aspekt af Shiva. Repræsenterer intelligens og begyndelsen på enhver rejse — ikke en separat gud men en funktion af det guddommelige.' },
  { name: 'Krishna',  role: 'Det guddommelige selv', desc: 'Avatar af Vishnu. I Bhagavad Gita siger han: "Jeg er det universelle selv i alle væsner" — den direkte åbenbaring af Brahman.' },
]

const YOGA_PATHS = [
  { name: 'Jnana Yoga', freq: '☉', desc: 'Visdomsvejen — direkte erkendelse af Brahman gennem studium og meditation. "Neti neti — ikke dette, ikke dette" — fjerner alt der ikke er Gud.' },
  { name: 'Bhakti Yoga', freq: '♥', desc: 'Hengivelsesvejen — total kærlighed til Gud. Salmesang, bøn, puja. Frekvensen af ren hengivelse opløser ego-barrieren mellem menneskelig og guddommelig.' },
  { name: 'Karma Yoga', freq: '⚖', desc: 'Handlingens vej — at handle uden tilknytning til resultat. "Handl som om Gud handler igennem dig." Omformer 3D-ego til 5D-kanal.' },
  { name: 'Raja Yoga', freq: '◎', desc: 'Den kongelige vej — Patanjalis 8 trin inkl. pranayama og samadhi. Direkte kontrol over sindet for at opnå forening med det universelle.' },
  { name: 'Kundalini Yoga', freq: '⚡', desc: 'Aktivering af den sovende kraft ved rygsøjlens base. Stiger through 7 chakraer til kronecentret — forening med kosmisk bevidsthed.' },
  { name: 'Mantra Yoga', freq: '∿', desc: 'Hellige lyde som frekvensværktøjer. "Om" (432Hz) er lyden af universets vibration. Gentagen mantra synkroniserer hjernefrekvens med guddommelig frekvens.' },
]

const PRAYERS = [
  { name: 'Dhikr', trad: 'Islam · Sufisme', desc: 'Konstant ihukommelse af Gud. "Allah, Allah, Allah" gentaget synkroniserer hjertefrekvens med guddommelig frekvens. Ikke bøn til Gud — det er at blive Guds hukommelse.' },
  { name: 'Hesychasm', trad: 'Ortodoks Kristendom', desc: '"Herre Jesus Kristus, Guds Søn, forbarm dig over mig." Gentaget med åndedrættet — indånding = "Herre Jesus Kristus, Guds Søn", udånding = "forbarm dig over mig."' },
  { name: 'Lectio Divina', trad: 'Katolsk Kristendom', desc: 'Hellig læsning — ikke studium men lytning. Lade Guds ord resonere i kroppen som levende frekvens frem for intellektuel analyse.' },
  { name: 'Pranayama', trad: 'Hinduisme · Yoga', desc: 'Åndedrætskontrol som direkte adgang til prana (livsenergi). 4-7-8 vejrtrækning aktiverer parasympatisk nervesystem — kroppens naturlige bøntilstand.' },
  { name: 'Tonglen', trad: 'Tibetansk Buddhisme', desc: 'Indånd andres smerte og lidelse — udånd kærlighed og lettelse. Reverserer ego-programmering (tag det gode, undgå det onde) og åbner hjertet.' },
  { name: 'Shabbat', trad: 'Jødedom', desc: 'Ugentlig frekvensrensning — 24 timers pause fra 3D-aktivitet. Kabbalah: Shabbat er en foretræden af den messianske tidsalder — en ugentlig smag af 5D.' },
]

const CRYSTALS = [
  { name: 'Klar Kvarts', color: '#e8e8f0', chakra: 'Alle', hz: '786.000 Hz', desc: 'Universel forstærker. Piezoelektrisk effekt — bruges i ur-oscillatorer og elektronik for præcis tidsangivelse. Forstærker intention og renser andre krystaller.' },
  { name: 'Ametyst', color: '#9b59b6', chakra: 'Kronchakra', hz: '32.768 Hz', desc: 'Beskyttelse og åndelig klarhed. Bruges i healing til at åbne kronchakraet. I Egypten brugt som talisman. Aktiverer pinealkirtel-resonans.' },
  { name: 'Rose Kvarts', color: '#f4a0b0', chakra: 'Hjertechakra', hz: '528 Hz', desc: 'Kærlighedens frekvens. 528 Hz er DNA-reparationsfrekvensen. Rose kvarts er det minerale udtryk for hjertecentrets vibration — ubetinget kærlighed.' },
  { name: 'Sort Turmalin', color: '#2c3e50', chakra: 'Rodchakra', hz: 'Jordfrekvens', desc: 'EMF-beskyttelse og jordning. Sort turmalin genererer pyroelektricitet og er en af de stærkeste beskyttelseskrystaller. Skaber et energisk skjold.' },
  { name: 'Citrin', color: '#f1c40f', chakra: 'Solarplexus', hz: '528 Hz', desc: 'Solens frekvens. Aktiverer villekraft og overflodsbevidsth. En af få krystaller der ikke optager negativ energi — transmuterer den direkte til lys.' },
  { name: 'Lapis Lazuli', color: '#2980b9', chakra: 'Tredje Øje', hz: '141,27 Hz', desc: 'Brugt af egyptiske faraoner og præster i 6.000+ år. Aktiverer det tredje øje og forbinder med højere dimensioner. Pyrit-inklusioner = kosmisk kort.' },
  { name: 'Moldavit', color: '#27ae60', chakra: 'Hjerte/Krone', hz: '432 Hz', desc: 'Meteorit-glas dannet for 15 millioner år siden i Bøhmen. Den eneste krystal af ydre-jordisk oprindelse. Kraftig transformationsenergi — accelererer åndelig evolution.' },
  { name: 'Selenit', color: '#f0f0e8', chakra: 'Krone/Sjæl', hz: '963 Hz', desc: 'Opkaldt efter månegudinden Selene. Renser andre krystaller og rum. 963 Hz er Guds frekvens — kronetonen i Solfeggio-skalaen. Forbinder direkte med højestedimensioner.' },
  { name: 'Obsidian', color: '#1a1a2e', chakra: 'Rodchakra', hz: 'Jordfrekvens', desc: 'Vulkansk glas — jordens transformationsenergi. Spejler skyggesider tilbage til bevidst observation. Mayaerne og aztekerne brugte det som orakelspejl.' },
]

const SECRET_SOCIETIES = [
  { name: 'Frimurerne', est: '1717 (officielt)', color: '#c8a840', desc: 'Verdens ældste og mest dokumenterede hemmelige orden. 33 grader — de første 3 er åbne, grad 4-33 er lukkede. Symboler: kompas & vinkelmål, det altseende øje, G (Geometry/God). Kendte medlemmer: George Washington, Mozart, Churchill, Voltaire, Benjamin Franklin. Påstår at stamme fra Salomos Tempel og de ægyptiske mysterieskoler.' },
  { name: 'Illuminati', est: '1776 · Bayern', color: '#e05050', desc: 'Grundlagt 1. maj 1776 af Adam Weishaupt, professor i kirkelov. Mål: fjerne kirke og kongemagt, erstatte med fornuftbaseret verdensorden. Infiltrerede frimurernes loger. Officielt opløst 1785 af den bayerske stat — men mange forskere mener strukturen fortsatte underground og fusionerede med internationale banknetværk.' },
  { name: 'Skull & Bones', est: '1832 · Yale', color: '#888', desc: 'Hemmeligt broderskab på Yale University. Optager 15 nye "Bonesmen" om året. Alumni inkluderer George H.W. Bush, George W. Bush, John Kerry, William Howard Taft. CIA har historisk set rekrutteret tungt fra Skull & Bones. Mødes i bygningen kaldet "The Tomb". En Bonesman kan ikke sige nej til en anmodning fra en anden.' },
  { name: 'Tempelridderne', est: '1119–1312', color: '#4080c0', desc: 'Grundlagt 1119 efter korstogene. Den første internationale bankorganisation — opfandt rembursen. Akkumulerede enorm rigdom og esoterik viden fra Østen. Opløst 1312 af pave Clement V og kong Filip IV af Frankrig (der skyldte dem penge). Fredag den 13. oktober 1307: masseanholdelse. Deres rigdom/viden: gik til Hospitalridderne og underground. Mange forskere mener de levede videre som skottisk frimureri.' },
  { name: 'Rosenkrydserordenen', est: '1600-tallet', color: '#50c080', desc: 'Fremkom med de tre Rosenkreutz-manifester (1614-1616). Syntese af kristen mystik, kabbala og alkymi. Hævder adgang til oldgammel hemmelig viden. Usynlig orden — du kan aldrig "blive medlem", kun "findes af dem". AMORC (Ancient Mystical Order Rosae Crucis) er den moderne offentlige gren. Stor indflydelse på oplysningstidens esoteriske bevægelser.' },
  { name: 'Bohemian Grove', est: '1878 · Californien', color: '#40a060', desc: 'Årlig 2-ugers samling i redwood-skov nord for San Francisco. ~2.000 af verdens mest magtfulde mænd: præsidenter, CEO\'er, militærledere, mediemoguls. Ritualet "Cremation of Care" med en ugle-statue foran en sø. Nixon om stedet: "Den mest faggede ting du nogensinde har set." Manhattan-projektet (atombomben) blev planlagt her. Ingen kvinder tilladt.' },
]

const ELITE_ORGS = [
  { name: 'Bilderberg Group', year: '1954', desc: 'Årligt møde af ~150 elite fra politik, bankverden og medier. Ingen presse. Ingen officielle referater. Beslutninger implementeres bagefter af deltagende ministre og CEO\'er. Grundlagt af prins Bernhard af Nederlandene og CIA\'s Allen Dulles. Kritikere: de politikker der diskuteres i Bilderberg dukker op som love 6-18 måneder senere.' },
  { name: 'World Economic Forum', year: '1971', desc: 'Klaus Schwab grundlagde det som et "stakeholder capitalism" forum. Davos-møderne samler verdens rigeste og mest magtfulde. "The Great Reset" (2020): "Build Back Better", "You will own nothing and be happy". Young Global Leaders-programmet har produceret Emmanuel Macron, Justin Trudeau, Jacinda Ardern og mange andre verdensledere.' },
  { name: 'Council on Foreign Relations', year: '1921', desc: 'Rockefeller-finansieret tænketank der definerer amerikansk udenrigspolitik. Næsten alle amerikanske udenrigsministre siden WWII har været CFR-medlemmer. Udgiver Foreign Affairs magazine. Forbinder Wall Street, medier og regering i ét netværk. Mange ser det som den reelle motor bag "den dybe stat".' },
  { name: 'Trilateral Commission', year: '1973', desc: 'Grundlagt af Zbigniew Brzezinski og David Rockefeller. Tre regioner: Nordamerika, Europa, Japan/Asien-Stillehav. Mål: koordinere elite-politik på tværs af vestlige nationer. Jimmy Carter og næsten hele hans kabinet var Trilateral Commission-medlemmer inden de kom til magten — håndplukket af Rockefeller.' },
  { name: 'Bank for International Settlements', year: '1930 · Basel', desc: 'Centralbankernes centralbank. Ejes af 63 nationale centralbanker. Koordinerer global pengepolitik bag lukkede døre. Grundlagt delvist for at facilitere Tysklands krigsskadeerstatninger — og fortsatte at drive forretning med Nazi-Tyskland under WWII. Diplomatisk immunitet: schweizisk politi kan ikke komme ind. Ingen demokratisk kontrol.' },
]

const VATICAN_STRUCTURE = [
  { name: 'Jesuitterne', sub: 'Societas Jesu · grundlagt 1540', color: '#c8a840', desc: 'Grundlagt af Ignatius af Loyola som "Pavens armé" — verdens mest disciplinerede religiøse orden. Historisk set Vatikanets efterretningsorganisation. Jesuitterne drev de mest indflydelsesrige universiteter og uddannede verdens elite. Pave Frans er den første jesuit-pave. Generalen for Jesuitterne kaldes "den sorte pave" og siges af mange analytikere at have mere reel magt end den hvide pave.' },
  { name: 'Opus Dei', sub: 'grundlagt 1928 af Josemaría Escrivá', color: '#e0e0e0', desc: 'Numeraries: lever i Opus Dei-huse, giver al løn, praktiserer mortifikation (selvpiskning, pigtråd om låret). Supernumeraries: gifter sig, lever normalt men er dybt engagerede. Opus Dei er "prælaturen" — rapporterer direkte til paven, ikke til lokale biskoper. Stærkt overrepræsenteret i Vatikanets økonomi og i konservative regeringer (især Spanien og USA).' },
  { name: 'Ridderen af Malta (SMOM)', sub: 'ældste aktive militærorden', color: '#c03030', desc: 'Suveræn Militær Orden af Malta — grundlagt 1099. Har egne pas, diplomatiske relationer med 110+ lande og observatørstatus i FN. Teknisk set et suverænt land uden territorium. Enormt velstående. Har historisk set forbindelser til efterretningsverdenen (CIA-direktør William Casey var Malteserriddernes Grand Prior). Skæringspunktet mellem Vatikanet, gamle penge og vestlig efterretningstjeneste.' },
  { name: 'P2-logen', sub: 'Propaganda Due · opløst 1981', color: '#6060aa', desc: 'Hemmelig frimurerlosje med ~1.000 medlemmer: bankdirektører, generaler, dommere, politikere, journalister. Opdaget 1981 da finansmanden Licio Gellis villa blev ransaget. Planen "Piano di Rinascita Democratica": fuldstændig kontrol over Italiens medier, retsvæsen og økonomi. Forbindelser til Vatikanbanken, Roberto Calvi ("Guds bankier" — fundet hængt under Blackfriars Bridge i London) og mafiaen.' },
]

const INSTITUTIONS = [
  { name: 'Sunni Islam', est: 'ca. 632 e.Kr.', founder: 'Abu Bakr (politisk succession)', issue: 'Opstod som svar på magtspørgsmål om hvem der skulle lede efter Muhammads død — ikke et teologisk skel.' },
  { name: 'Shia Islam', est: 'ca. 632 e.Kr.', founder: 'Ali ibn Abi Talib (blodslinje-succession)', issue: 'Spejlbilledet af Sunni — begge er menneskelige institutioner bygget på politisk magtkamp, ikke på Guds vilje.' },
  { name: 'Katolsk Kristendom', est: '313 e.Kr.', founder: 'Kejser Konstantin (Nikæisk Koncil)', issue: 'Statsreligion skabt af en romersk kejser for at samle et splintret imperium. Kirkehierarkiet er baseret på romerrettens embedsstruktur.' },
  { name: 'Protestantisme', est: '1517 e.Kr.', founder: 'Martin Luther (politisk reform)', issue: 'Opstod fra Luthers konflikt med pavens autoritet — støttet af tyske fyrster der ønskede at bryde med Roms politiske magt.' },
  { name: 'Ortodoks Kristendom', est: '1054 e.Kr.', founder: 'Det Store Skisma (politisk splittelse)', issue: 'Opsplitningen skyldtes primært politisk rivalisering mellem Rom og Konstantinopel — ikke teologiske uoverensstemmelser om Kristus.' },
  { name: 'Ortodoks Jødedom', est: '18. årh.', founder: 'Reaktion på Haskalah (jødisk oplysning)', issue: 'En moderne institution skabt som modstandsbevægelse mod modernisering — ikke den originale bibliske jødedom.' },
]

export default function InnerPath() {
  const [openSection, setOpenSection] = useState(null)
  function toggle(k) { setOpenSection(o => o === k ? null : k) }

  return (
    <div className="ip-page">

      {/* Hero */}
      <div className="ip-hero">
        <div className="ip-hero-symbol">☥</div>
        <h1 className="ip-title">Den Indre Vej</h1>
        <p className="ip-subtitle">Alle traditioner — én sandhed · Alle navne — ét lys · Alle veje fører hjem</p>
        <blockquote className="ip-hero-quote">
          "Guds rige er inden i jer" — Jesus · "Aham Brahmasmi — jeg er Brahman" — Upanishads · "La ilaha illa Allah" — Muhammed
        </blockquote>
      </div>

      {/* 1. Institutioner som 3D-konstruktioner */}
      <section className="ip-section">
        <button className="ip-section-header" onClick={() => toggle('inst')}>
          <span className="ip-sec-icon">🏛</span>
          <div>
            <div className="ip-sec-title">Religiøse institutioner er menneskelige konstruktioner</div>
            <div className="ip-sec-sub">Sunni · Shia · Katolsk · Protestant — skabt af mennesker til mennesker</div>
          </div>
          <span className="ip-chevron">{openSection === 'inst' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'inst' && (
          <div className="ip-section-body">
            <div className="ip-insight-box">
              <p className="ip-insight-text">
                Gud tilhører ingen institution. De religiøse institutioner vi kender i dag er opstået fra <strong>menneskelige magtspørgsmål</strong> — ikke fra guddommelig åbenbaring. De er 3D-konstruktioner designet til at give en gruppe mennesker <strong>eksklusiv adgang til Gud</strong> og dermed kontrol over andre.
              </p>
              <p className="ip-insight-text">
                Den sande åndelige sandhed i alle traditioner er enkel: <strong>Gud er inden i dig. Du har direkte adgang. Ingen mellemmand er nødvendig.</strong> Institutioner kan bruges som udgangspunkt — men de er kortet, ikke territoriet.
              </p>
            </div>

            <div className="ip-3d-5d">
              <div className="ip-3d-card">
                <div className="ip-3d-label">3D Tilstand</div>
                <ul>
                  <li>Søger Gud uden for sig selv</li>
                  <li>Bruger mellemmænd (præster, imamer)</li>
                  <li>Min religion er den sande</li>
                  <li>Ritualer som lydighed-performance</li>
                  <li>Frygt for Guds straf som motivator</li>
                </ul>
              </div>
              <div className="ip-5d-card">
                <div className="ip-5d-label">5D Tilstand</div>
                <ul>
                  <li>Gud er inden i — direkte forbindelse</li>
                  <li>Alle traditioner er veje til det samme</li>
                  <li>Ritualer som frekvensindstilling</li>
                  <li>Kærlighed som motivator, ikke frygt</li>
                  <li>Du er en del af Gud der oplever sig selv</li>
                </ul>
              </div>
            </div>

            <h3 className="ip-sub-h3">Historisk oprindelse af de store institutioner</h3>
            <div className="ip-inst-grid">
              {INSTITUTIONS.map(i => (
                <div key={i.name} className="ip-inst-card">
                  <div className="ip-inst-name">{i.name}</div>
                  <div className="ip-inst-est">Grundlagt {i.est} af {i.founder}</div>
                  <div className="ip-inst-issue">{i.issue}</div>
                </div>
              ))}
            </div>

            <div className="ip-quote-block">
              <p>"Sandheden er én — vismænd kalder den ved mange navne"</p>
              <cite>— Rigveda 1.164.46 · Hinduisme · ca. 1500 f.Kr.</cite>
            </div>
          </div>
        )}
      </section>

      {/* Magtstrukturerne er flyttet til /system siden */}
      {false && <section className="ip-section">
        <button className="ip-section-header" onClick={() => toggle('power')}>
          <span className="ip-sec-icon">🕵</span>
          <div>
            <div className="ip-sec-title">Magtstrukturerne bag religionerne</div>
            <div className="ip-sec-sub">Hemmelige selskaber · Vatikanet · Pallavicini · Elite-organisationer</div>
          </div>
          <span className="ip-chevron">{openSection === 'power' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'power' && (
          <div className="ip-section-body">
            <div className="ip-insight-box">
              <p className="ip-insight-text">
                Bag de religiøse institutioner eksisterer et lag af <strong>skjulte og åbne magtstrukturer</strong> der bruger religion som kontrol-instrument i 3D. Ikke alle som er involveret er ondsindede — mange tror oprigtigt på deres sag. Men strukturerne er designet til at <strong>holde menneskelig bevidsthed i 3D</strong> ved at monopolisere adgang til det åndelige.
              </p>
              <p className="ip-insight-text">
                At kende disse strukturer er ikke paranoia — det er <strong>åndelig modenhed</strong>. 5D-tilstanden ser systemet klart uden at miste kærlighed til de mennesker der er fanget i det.
              </p>
            </div>

            <h3 className="ip-sub-h3">Hemmelige selskaber</h3>
            <div className="ip-power-list">
              {SECRET_SOCIETIES.map(s => (
                <div key={s.name} className="ip-power-card" style={{'--pcolor': s.color}}>
                  <div className="ip-power-header">
                    <span className="ip-power-name" style={{color: s.color}}>{s.name}</span>
                    <span className="ip-power-est">{s.est}</span>
                  </div>
                  <div className="ip-power-desc">{s.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="ip-sub-h3">Kendte elite-organisationer</h3>
            <div className="ip-power-list">
              {ELITE_ORGS.map(o => (
                <div key={o.name} className="ip-power-card" style={{'--pcolor': '#8080c0'}}>
                  <div className="ip-power-header">
                    <span className="ip-power-name" style={{color: '#a0a0e0'}}>{o.name}</span>
                    <span className="ip-power-est">{o.year}</span>
                  </div>
                  <div className="ip-power-desc">{o.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="ip-sub-h3">Vatikanets indre magtstruktur</h3>
            <div className="ip-power-list">
              {VATICAN_STRUCTURE.map(v => (
                <div key={v.name} className="ip-power-card" style={{'--pcolor': v.color}}>
                  <div className="ip-power-header">
                    <span className="ip-power-name" style={{color: v.color}}>{v.name}</span>
                    <span className="ip-power-est">{v.sub}</span>
                  </div>
                  <div className="ip-power-desc">{v.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="ip-sub-h3">Islam — Pallavicini & den vestlige gate-keeper</h3>
            <div className="ip-pallavicini-box">
              <div className="ip-pall-name">Yahya Sergio Yahe Pallavicini</div>
              <div className="ip-pall-sub">Præsident for COREIS · Islamisk Religiøst Samfund i Italien · Sufi-sheik</div>
              <p className="ip-pall-desc">Pallavicini er et af de mest fascinerende eksempler på elite-kontrollen over religion. Hans familie er gammel italiensk adelslinje med dokumenterede forbindelser til frimureriet og Italiens finanselite. Hans far, Felice Pallavicini, konverterede til Islam i 1951 og knyttede familien til René Guénons <strong>Traditionalistiske Skole</strong> — en intellektuel bevægelse der hævder at alle religioner deler en fælles esoterisk kerne.</p>
              <p className="ip-pall-desc">Yahya Pallavicini deltager i <strong>World Economic Forums</strong> interfaith-dialoger og repræsenterer "moderat Islam" over for vestlige institutioner. Kritikere ser COREIS som en <strong>gate-keeping-funktion</strong>: en Islam der er acceptabel for Vatikanet og WEF — og som implicit marginaliserer mere autentiske muslimske stemmer der ikke passer ind i det globale governance-narrativ.</p>
              <div className="ip-pall-connections">
                <span className="ip-pall-tag">Traditionalistisk Skole</span>
                <span className="ip-pall-tag">WEF Interfaith</span>
                <span className="ip-pall-tag">Sufi-orden Ahmadiyya Idrisiyya</span>
                <span className="ip-pall-tag">Vatikan-dialog</span>
                <span className="ip-pall-tag">Pallavicini-adelsslægt</span>
              </div>
            </div>

            <h3 className="ip-sub-h3">Hvem påvirker de andre religioner</h3>
            <div className="ip-religion-influence">
              {[
                { rel: 'Protestantisme', icon: '✝', color: '#c0a040', who: 'Rockefeller-netværket', desc: 'John D. Rockefeller Sr. finansierede oprettelsen af Union Theological Seminary i New York — i årtier den mest indflydelsesrige protestantiske teologiske institution. Rockefeller-penge formede social gospel-bevægelsen og modernistisk teologi, der bevægede fokus fra åndelig frelse til social ingeniørkunst.' },
                { rel: 'Jødedom', icon: '✡', color: '#4080c0', who: "B'nai B'rith & ADL", desc: "B'nai B'rith (grundlagt 1843) er jødisk frimureri — en service-organisation med lukkede lodger. Anti-Defamation League (ADL) udspringer herfra. Rothschild-familien har historisk set finansieret oprettelsen af staten Israel og har tætte forbindelser til Bank of England og Federal Reserve. Vigtig nuance: dette er elite-jødedom, ikke jødedom som folk og religion." },
                { rel: 'Buddhisme', icon: '☸', color: '#50b080', who: 'CIA & NED', desc: 'Den 14. Dalai Lamas flugt fra Tibet i 1959 blev finansieret og organiseret af CIA — dokumenteret i declassified CIA-dokumenter. National Endowment for Democracy (NED) finansierer tibetanske diaspora-organisationer. Dette betyder ikke at Tibets åndelige tradition er ugyldig — men at vestlige efterretningsbureauer bruger den som geopolitisk redskab mod Kina.' },
                { rel: 'New Age', icon: '☽', color: '#9060c0', who: 'Lucis Trust & FN', desc: 'Lucis Trust (grundlagt 1922 af Alice Bailey som "Lucifer Publishing Company") har konsultativ status ved FN og driver World Goodwill-programmet der arbejder for en "ny verdensorden" baseret på Baileys teosofiske kanaliserede tekster. Mange New Age-begreber om "verdensfred", "globalt borgerskab" og "planetarisk bevidsthed" trackes tilbage til Lucis Trust-netværket.' },
              ].map(r => (
                <div key={r.rel} className="ip-rel-card" style={{'--relcolor': r.color}}>
                  <div className="ip-rel-header">
                    <span className="ip-rel-icon" style={{color: r.color}}>{r.icon}</span>
                    <span className="ip-rel-name" style={{color: r.color}}>{r.rel}</span>
                    <span className="ip-rel-who">{r.who}</span>
                  </div>
                  <div className="ip-rel-desc">{r.desc}</div>
                </div>
              ))}
            </div>

            <div className="ip-quote-block">
              <p>"Giv mig kontrol over et lands penge, og jeg er ligeglad med hvem der laver lovene"</p>
              <cite>— tilskrevet Mayer Amschel Rothschild · 1700-tallet</cite>
            </div>
          </div>
        )}
      </section>}

      {/* 3. Alle Guds navne er ét */}
      <section className="ip-section">
        <button className="ip-section-header" onClick={() => toggle('names')}>
          <span className="ip-sec-icon">✦</span>
          <div>
            <div className="ip-sec-title">Alle Guds navne er ét</div>
            <div className="ip-sec-sub">Allah · Yahweh · Brahman · Tao · Ein Sof · Wakan Tanka — samme kilde</div>
          </div>
          <span className="ip-chevron">{openSection === 'names' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'names' && (
          <div className="ip-section-body">
            <p className="ip-body-intro">
              Hvert folk, hvert sprog, hvert kontinent har givet det uendelige et navn. Alle navne peger på det samme: den ubegribelige intelligens der bærer alt i eksistens. Ingen af navnene fanger det helt — men alle rammer noget sandt.
            </p>
            <div className="ip-names-grid">
              {GOD_NAMES.map(g => (
                <div key={g.name} className="ip-name-card">
                  <div className="ip-name">{g.name}</div>
                  <div className="ip-name-trad">{g.trad}</div>
                  <div className="ip-name-meaning">"{g.meaning}"</div>
                </div>
              ))}
            </div>
            <div className="ip-quote-block">
              <p>"Hvad end du tilbeder, hvad end du kalder det — i den endelige analyse er det Mig du tilbeder"</p>
              <cite>— Bhagavad Gita 9.23 · Krishna til Arjuna</cite>
            </div>
          </div>
        )}
      </section>

      {/* 3. Hindu guder */}
      <section className="ip-section">
        <button className="ip-section-header" onClick={() => toggle('hindu')}>
          <span className="ip-sec-icon">⊕</span>
          <div>
            <div className="ip-sec-title">Hindu guder — mange udtryk, ét ophav</div>
            <div className="ip-sec-sub">Verdens ældste levende religion · Opstod før syndfloden · 330 millioner guder = én Brahman</div>
          </div>
          <span className="ip-chevron">{openSection === 'hindu' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'hindu' && (
          <div className="ip-section-body">
            <div className="ip-insight-box">
              <p className="ip-insight-text">
                Hinduisme er ikke et polyteistisk system med 330 millioner separate guder. Det er et <strong>monistisk system</strong> hvor Brahman — den universelle bevidsthed — udtrykker sig i uendeligt mange former. Hver "gud" er et <strong>aspekt, en funktion eller en avatar</strong> af det ene.
              </p>
              <p className="ip-insight-text">
                Hinduisme er sandsynligvis verdens ældste overlevende religiøse tradition og stammer fra <strong>før den store oversvømmelse</strong> — beskrevet i alle kulturer (Noa/Noah, Utnapishtim i Gilgamesh, Manu i Hinduisme, Deucalion i Grækenland). Vedaernes oprindelse dateres af traditionsforskere til 10.000-15.000 f.Kr.
              </p>
            </div>

            <h3 className="ip-sub-h3">Gudetreenighedens anatomi (Trimurti)</h3>
            <div className="ip-hindu-grid">
              {HINDU_GODS.map(g => (
                <div key={g.name} className="ip-hindu-card">
                  <div className="ip-hindu-name">{g.name}</div>
                  <div className="ip-hindu-role">{g.role}</div>
                  <div className="ip-hindu-desc">{g.desc}</div>
                </div>
              ))}
            </div>

            <div className="ip-flood-box">
              <div className="ip-flood-title">Syndfloden i alle kulturer</div>
              <div className="ip-flood-grid">
                {[
                  { who: 'Noah', where: 'Torah/Biblen' },
                  { who: 'Manu', where: 'Hinduisme · Shatapatha Brahmana' },
                  { who: 'Utnapishtim', where: 'Gilgamesh Eposet · Sumer' },
                  { who: 'Deucalion', where: 'Græsk mytologi' },
                  { who: 'Bergelmir', where: 'Nordisk mytologi · Edda' },
                  { who: 'Nata', where: 'Aztekisk mytologi' },
                ].map(f => (
                  <div key={f.who} className="ip-flood-item">
                    <strong>{f.who}</strong><br />{f.where}
                  </div>
                ))}
              </div>
              <p className="ip-flood-note">Samme begivenhed — fortalt af alle kulturer på alle kontinenter. Hinduisme var der <strong>før</strong> denne begivenhed.</p>
            </div>
          </div>
        )}
      </section>

      {/* 4. Yoga & Bønner */}
      <section className="ip-section">
        <button className="ip-section-header" onClick={() => toggle('yoga')}>
          <span className="ip-sec-icon">∿</span>
          <div>
            <div className="ip-sec-title">Yoga & Bøn som frekvensindstilling</div>
            <div className="ip-sec-sub">Ikke ritualer for Guds skyld — frekvensværktøjer for din skyld</div>
          </div>
          <span className="ip-chevron">{openSection === 'yoga' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'yoga' && (
          <div className="ip-section-body">
            <div className="ip-insight-box">
              <p className="ip-insight-text">
                <strong>Yoga</strong> (Sanskrit: yuj) betyder bogstaveligt talt "forening" — forening af det individuelle selv (Atman) med det universelle selv (Brahman). Det er ikke motion. Det er ikke afslapning. Det er en præcis teknologi til at <strong>tune din bevidsthed ind på Guds frekvens</strong>.
              </p>
              <p className="ip-insight-text">
                Bøn er det samme. Ikke at bede Gud om ting — det er en 3D-fejlfortolkning. Ægte bøn er <strong>communion</strong> — at synkronisere dit felt med det guddommelige felt. Resultatet er ikke at Gud "giver dig ting" men at du oplever din egen guddommelighed.
              </p>
            </div>

            <h3 className="ip-sub-h3">Yoga-veje til forening</h3>
            <div className="ip-yoga-grid">
              {YOGA_PATHS.map(y => (
                <div key={y.name} className="ip-yoga-card">
                  <div className="ip-yoga-freq">{y.freq}</div>
                  <div className="ip-yoga-name">{y.name}</div>
                  <div className="ip-yoga-desc">{y.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="ip-sub-h3">Hellige bønner fra alle traditioner</h3>
            <div className="ip-prayer-list">
              {PRAYERS.map(p => (
                <div key={p.name} className="ip-prayer-card">
                  <div className="ip-prayer-header">
                    <span className="ip-prayer-name">{p.name}</span>
                    <span className="ip-prayer-trad">{p.trad}</span>
                  </div>
                  <div className="ip-prayer-desc">{p.desc}</div>
                </div>
              ))}
            </div>

            <div className="ip-quote-block">
              <p>"Bøn er ikke at tale til Gud — det er at lægge mærke til at Gud allerede taler"</p>
              <cite>— Thomas Merton · Kristen mystiker</cite>
            </div>
          </div>
        )}
      </section>

      {/* 5. Krystaller */}
      <section className="ip-section">
        <button className="ip-section-header" onClick={() => toggle('crystals')}>
          <span className="ip-sec-icon">◈</span>
          <div>
            <div className="ip-sec-title">Krystaller & deres kraft</div>
            <div className="ip-sec-sub">Piezoelektricitet · Frekvensmedicin · Oldtidens teknologi</div>
          </div>
          <span className="ip-chevron">{openSection === 'crystals' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'crystals' && (
          <div className="ip-section-body">
            <div className="ip-insight-box">
              <p className="ip-insight-text">
                Krystaller er ikke mystik — de er <strong>fysik</strong>. Kvarts bruges i moderne elektronik præcist fordi det vibrerer på en ultra-præcis frekvens (piezoelektrisk effekt). Din ur-chip, din GPS, din telefol — alle bruger kvarts-oscillatorer.
              </p>
              <p className="ip-insight-text">
                Hver krystal har en unik molekylær gitterstruktur der vibrerer på en specifik frekvens. Når du bringer din krop (selv vibrerende som elektromagnetisk felt) i kontakt med en krystal, opstår <strong>resonans</strong> — ligesom stemmegafler.
              </p>
            </div>
            <div className="ip-crystal-grid">
              {CRYSTALS.map(c => (
                <div key={c.name} className="ip-crystal-card" style={{ '--ccolor': c.color }}>
                  <div className="ip-crystal-gem" style={{ background: `radial-gradient(circle at 35% 35%, ${c.color}cc, ${c.color}44)`, boxShadow: `0 0 16px ${c.color}40` }}>◆</div>
                  <div className="ip-crystal-info">
                    <div className="ip-crystal-name">{c.name}</div>
                    <div className="ip-crystal-meta">{c.chakra} · {c.hz}</div>
                    <div className="ip-crystal-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

    </div>
  )
}
