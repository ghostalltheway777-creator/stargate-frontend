import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AncientConnections.css'

const CONNECTIONS = [
  {
    id: 'flood',
    title: 'Syndfloden',
    icon: '🌊',
    original: 'Ziusudra — Sumerisk (ca. 2600 f.Kr.)',
    thesis: 'Den globale syndflod er den samme begivenhed fortalt af 20+ civilisationer. Den sumeriske version er 1000+ år ÆLDRE end Moses og Biblen.',
    versions: [
      { trad: 'Sumerisk', figure: 'Ziusudra', source: 'Eridu Genesis (ca. 2600 f.Kr.)', detail: 'Ziusudra advares af guden Enki om syndfloden. Bygger et kæmpe skib. Redder alt liv. Får evigt liv efterfølgende.' },
      { trad: 'Babylonisk', figure: 'Utnapishtim', source: 'Epic of Gilgamesh (ca. 2100 f.Kr.)', detail: 'Gilgamesh finder Utnapishtim — den eneste udødelige. Han fortæller om syndfloden: skib, 7 dage regn, duen der sendes ud, bjerg der dukker op.' },
      { trad: 'Hebraisk', figure: 'Noah (נֹחַ)', source: 'Genesis 6-9 (ca. 800 f.Kr.)', detail: 'Noah advares af YHWH. Bygger arken. 40 dage regn. Sender due ud. Landet på Ararat. Regnen er 1800 år EFTER den sumeriske version.' },
      { trad: 'Hinduistisk', figure: 'Manu', source: 'Shatapatha Brahmana (ca. 800 f.Kr.)', detail: 'Manu advares af en fisk (Matsya = Vishnu). Bygger båd. Redder alt liv. Lander på bjerg i Himalaya. Identisk struktur.' },
      { trad: 'Græsk', figure: 'Deucalion', source: 'Hesiod (ca. 700 f.Kr.)', detail: 'Deucalion advares af Zeus og Prometheus. Bygger kiste. Lander på Mount Parnassus. Zeus sender syndflod som straf for menneskehedens ondskab.' },
    ],
    billy: 'Billy Carson: "Noah er Ziusudra — det er den samme person, den samme begivenhed. De hebraiske forfattere kopierede de sumeriske tekster direkte. Syndflodens sande årsag var ikke menneskelig ondskab men Anunnaki\'s beslutning om at eliminere menneskeheden — kun Enki nægtede og advarede Ziusudra."',
  },
  {
    id: 'jesus',
    title: 'Jesus / Den Guddommelige Søn',
    icon: '✦',
    original: 'Horus — Egyptisk (ca. 3000 f.Kr.)',
    thesis: 'Jesus-fortællingens centrale elementer — jomfrufødsel, 12 disciple, dåb, opstandelse, 3 dages død — er alle 3000+ år ældre end Kristus og identiske med egyptiske, persiske og babyloniske guddomme.',
    versions: [
      { trad: 'Egyptisk', figure: 'Horus', source: 'Egyptiske tekster (ca. 3000 f.Kr.)', detail: 'Født af jomfruen Isis. Faderen Osiris (dræbt). Stjerne i øst ved fødsel. Tilbedt af 3 konger. Døbt af Anup ved en flod. Helbredte syge. Opstod efter 3 dage. 12 disciple.' },
      { trad: 'Persisk', figure: 'Mithra', source: 'Persisk religion (ca. 1400 f.Kr.)', detail: 'Født 25. december. Af en jomfru. I en hule med hyrder. 12 disciple. Udførte mirakler. Døde og opstod. Eukaristien (brød og vin) praktiseret.' },
      { trad: 'Babylonisk', figure: 'Tammuz', source: 'Babylonisk (ca. 2000 f.Kr.)', detail: 'Gud der dør og opstår. Grådt over i 3 dage. Opstår og frelser. Identisk narrativ med Kristus-opstandelsen. Nævnt i Biblen: Ezekiel 8:14.' },
      { trad: 'Græsk', figure: 'Dionysus', source: 'Græsk (ca. 1200 f.Kr.)', detail: 'Gudesøn af en gudinde og en dødelig mand. Forvandlede vand til vin. Spiste hans kød og drak hans blod (eukaristi). Gik på vandet. Opstod fra de døde.' },
      { trad: 'Kristen', figure: 'Jesus Kristus', source: 'NT (ca. 70-100 e.Kr.)', detail: 'Jomfrufødsel. Stjerne i øst. 3 vise mænd. 12 apostle. Dåb. Mirakler. Korsfæstelse. 3 dages død. Opstandelse. Alle elementer er 1000-3000 år ældre i andre traditioner.' },
    ],
    billy: 'Billy Carson: "Jesus er ikke historisk unik — han er den seneste version af en arketypisk fortælling om en gudelig søn der ofres og opstår. Det ændrer ikke spiritualiteten — det bekræfter den. Men det betyder at ingen religion ejer sandheden om denne figur."',
  },
  {
    id: 'moses',
    title: 'Moses / Lovgiveren',
    icon: '📜',
    original: 'Sargon af Akkad — Sumerisk (ca. 2334 f.Kr.)',
    thesis: 'Moses\' fødelseshistorie er identisk med Sargon af Akkad\'s — 1000 år ÆLDRE. De Ti Bud er næsten ord-for-ord fra Hammurabi\'s Lovkodeks (1754 f.Kr.).',
    versions: [
      { trad: 'Akkadisk', figure: 'Sargon af Akkad', source: 'Sargon\'s Biography (ca. 2334 f.Kr.)', detail: '"Min mor var en tempelpræstinde. Hun undfangede mig i hemmelighed. Hun lagde mig i en kurv af siv, forseglede den med tjære og satte mig på floden." Identisk med Moses\' fødelseshistorie.' },
      { trad: 'Babylonisk', figure: 'Hammurabi', source: 'Code of Hammurabi (1754 f.Kr.)', detail: 'Hammurabi modtager lovene fra guden Shamash på en bjerg. Lovene inkluderer: "Øje for øje", forbud mod drab, tyveri, ægteskabsregler. 300+ år FØR Moses.' },
      { trad: 'Egyptisk', figure: 'Akhenaten (Amenhotep IV)', source: 'Egyptisk (ca. 1350 f.Kr.)', detail: 'Akhenaten indførte monoteisme (ét at, Aten = solen). Forbudt at tilbede andre guder. Mange forskere mener Moses var en ægyptisk præst eller endda Akhenaten selv.' },
      { trad: 'Hebraisk', figure: 'Moses (מֹשֶׁה)', source: 'Exodus (ca. 800 f.Kr.)', detail: 'Lagt i kurv ved Nilen. Fundet af prinsessen. Modtog loven fra Gud på Sinaj. De Ti Bud. Led israelitterne ud af Egypten. Ingen egyptiske historiske optegnelser bekræfter dette.' },
    ],
    billy: 'Sigmund Freud i "Moses and Monotheism" (1939): Moses var sandsynligvis en egyptisk præst fra Akhenaten\'s monoteistiske bevægelse. Da Akhenaten\'s religion blev slukket, flygtede hans tilhængere — og skabte det israelitiske folk.',
  },
  {
    id: 'eden',
    title: 'Paradiset / Edens Have',
    icon: '🌳',
    original: 'E.DIN — Sumerisk (ca. 2600 f.Kr.)',
    thesis: 'E.DIN er det sumeriske ord for en "frugtbar slette" i Mesopotamien. Adam og Eva = Adapa og Titi i sumeriske tekster. Slangens gave af viden = Enkis gave til menneskeheden.',
    versions: [
      { trad: 'Sumerisk', figure: 'Adapa og Titi', source: 'Adapa Myte (ca. 2600 f.Kr.)', detail: 'Adapa er den første perfekte menneske skabt af Enki. Lever i E.DIN (frugtbar slette). Nægtes evigt liv af Anu (gudenes øverste). Enki er deres beskytter mod gudernes vrede.' },
      { trad: 'Sumerisk', figure: 'Enki / Slangen', source: 'Enuma Elish + Adapa', detail: 'Enki er "Herren af Jord og Viden". Symboliseret som en slange. Giver menneskeheden viden mod Enlils (YHWH\'s) vilje. "Slangen" der giver viden i Genesis = Enki.' },
      { trad: 'Gnostisk', figure: 'Naas (Slangen)', source: 'Nag Hammadi · Hypostasis', detail: 'Den gnostiske tradition: Slangen i haven er IKKE djævelen men en guide der giver Adam og Eva sand viden (Gnosis). Demiurgen (YHWH/Enlil) vil ikke have mennesker at vide sandheden.' },
      { trad: 'Hebraisk', figure: 'Adam og Eva', source: 'Genesis (ca. 800 f.Kr.)', detail: 'Adam og Eva i Edens Have. Slangen (Djævelen) frister dem til at spise af Kundskabens træ. Udvist af Gud. Sumerisk original: det er Enlil der udviser dem, Enki der hjælper dem.' },
    ],
    billy: 'Billy Carson: "E.DIN er ikke et mytisk sted — det er et geografisk sted i det sydlige Mesopotamien (nu Irak). Adam og Eva er Adapa og Titi. YHWH er Enlil — den strenge anunnaki-leder. Slangen er Enki — menneskenes venligtsindede skaber der ønskede at give dem viden."',
  },
  {
    id: 'angels',
    title: 'Engle / Guddommelige Sendebud',
    icon: '✦',
    original: 'Anunnaki — Sumerisk ("De der kom ned fra himlen")',
    thesis: 'Engle i alle religioner er den samme entitet beskrevet forskelligt: bevingede guddomme der rejser fra himlen til Jorden og kommunikerer med mennesker.',
    versions: [
      { trad: 'Sumerisk', figure: 'Anunnaki', source: 'Alle sumeriske tekster', detail: 'Anunnaki = "An-unna-ki" = "De der er princerne af himlen". 7 store guder styrer kosmologien. Igigi = lavere guder der arbejdede for Anunnaki. De kom bogstaveligt talt ned fra himlen i "sky-både".' },
      { trad: 'Egyptisk', figure: 'Neteru (guder)', source: 'Egyptiske tekster', detail: 'Egyptiske guder beskrives med vingeagtige attributter. Horus (den bevingede sol). Osiris hersker over underverden. Ra rejser i sin solbåd over himlen. Samme narrativ som Anunnaki.' },
      { trad: 'Hebraisk', figure: 'Malakim (מַלְאָכִים)', source: 'Torah og Profetbøger', detail: 'Malak = "budbringer/engel". Cheruber og Serafer er bevingede guddommelige væsener. Enoks Bog beskriver "Vogtere" (Watchers) der kom ned fra himlen og parrede sig med menneskelige kvinder = Anunnaki Igigi.' },
      { trad: 'Kristen/Islam', figure: 'Engle / Jinn', source: 'NT og Quran', detail: 'Kristendom: Engle er Guds tjenere med vinger. Islam: Jinn er skabt af ild — ikke-menneskelige intelligenser. Quran: Engle bøjede sig for Adam. Alle disse peger på den samme ancient entitet.' },
    ],
    billy: `Billy Carson: "Anunnaki er ikke guder i den religiøse forstand — de er avancerede intelligenser fra en anden verden eller dimension. 'An' = himmel, 'unna' = princerne, 'ki' = Jord. De kom BOGSTAVELIGT ned. Alle religioners engle og guder er minder om dette møde."`,
  },
  {
    id: 'lucifer',
    title: 'Lucifer / Satan / Djævelen',
    icon: '🔥',
    original: 'Enki / Prometheus — Sumerisk og Græsk',
    thesis: 'Lucifer betyder "lysbringer" på latin. Satan betyder "modstander" på hebraisk. Begge er OMSKRIVNINGER af Enki — den gud der gav menneskeheden viden MOD Enlils vilje. Den "onde" i Biblen er menneskenes beskytter i de sumeriske originaler.',
    versions: [
      { trad: 'Sumerisk', figure: 'Enki (som slange)', source: 'Adapa myte + Genesis parallel', detail: 'Enki er den dobbeltslange-symboliserede visdomsgud. Han giver Adapa (Adam) viden. Han advarer Atrahasis (Noah). Han skaber menneskeheden. Enlil (den strenge) vil ødelægge menneskeheden — Enki beskytter dem.' },
      { trad: 'Græsk', figure: 'Prometheus', source: 'Hesiod Theogony (ca. 700 f.Kr.)', detail: 'Prometheus stjaler ilden (viden/teknologi) fra Zeus og giver den til menneskeheden. Zeus straffer ham: bundet til en klippe, en ørn spiser hans lever dagligt. Identisk med Enki-narrativet: gudernes vrede over at menneskeheden fik viden.' },
      { trad: 'Gnostisk', figure: 'Sophia / Yaldabaoth', source: 'Nag Hammadi', detail: 'I Nag Hammadi er Yaldabaoth (den blinde skaber = Enlil/YHWH) "Satan". Sophia og Kristus er menneskenes hjælpere. Det er OMVENDT fra den mainstream kristne fortolkning. Den "gode" Gud i Biblen er Archon-kongen.' },
      { trad: 'Hebraisk', figure: 'Satan (השָּׂטָן)', source: 'Job + Isaiah 14', detail: 'I Job er Satan blot "anklageren" i Guds råd — ikke en ond entitet. Isaiah 14:12 "Helel ben Shachar" (Morgenstjernen/Venus) er den der "falder fra himlen". Dette er astronomisk — Venus er morgenstjernen. Kirken oversatte det til "Lucifer" og skabte djævelens figur.' },
      { trad: 'Egyptisk', figure: 'Set', source: 'Egyptisk mytologi', detail: 'Set er Osiris\'s bror der dræber og stykker ham i stykker. Set = kaos, ørken og storm. Men Set er IKKE ond i egyptisk tradition — han beskytter Ra\'s solbåd mod Apep (det virkelige kaos). Han er dualistisk — som alle naturkræfter.' },
    ],
    billy: 'Billy Carson: "Lucifer er ikke djævelen — det er Venus, morgenstjernen. Enki er ikke ond — han er menneskenes skaber og beskytter. Enlil er den strenge kontrollerende kraft. Kirken vendte bevidst om på heltene og skurkene i de sumeriske originaler for at skabe frygt-baseret kontrol."',
  },
  {
    id: 'paradise',
    title: 'Paradiset / Edens Have',
    icon: '🌳',
    original: 'E.DIN + Dilmun — Sumerisk (ca. 2600 f.Kr.)',
    thesis: 'E.DIN er et geografisk sted i Mesopotamien (nu Irak/Kuwait). Dilmun er havnen af paradis. Adam = Adapa. Eva = Titi. Slangen = Enki. Forbuddet mod viden = Enlils undertrykkelse af menneskeheden.',
    versions: [
      { trad: 'Sumerisk', figure: 'E.DIN + Adapa og Titi', source: 'Adapa myte + Enki og Ninhursag', detail: 'E.DIN = "frugtbar slette" i Mesopotamien. Adapa er den foerste perfekte menneske skabt af Enki. Titi er hans kvindelige partner. De lever i E.DIN med adgang til alt. Enlil forbyder dem at spise af udodelighed. Enki (slangen) fortaeller dem sandheden om deres situation.' },
      { trad: 'Sumerisk', figure: 'Dilmun', source: 'Enki og Ninhursag myte', detail: 'Dilmun er "det rene, lyse og levende sted" — gudernes paradis. Ingen sygdom, ingen doeden, ingen aldring. Ninhursag planter 8 planter. Enki spiser dem. Ninhursag forbander ham. Enki bliver syg i 8 dele af kroppen — en for hver plante. Forbindelsen til Adam/Eva og forbudt frugt.' },
      { trad: 'Hebraisk', figure: 'Edens Have', source: 'Genesis 2-3', detail: 'Eden = E.DIN. Adam = Adapa (from the earth). Eva = Titi (life). Slangen = Enki (visdomsguden symboliseret som slange). Livets trae = immortalitet som guderne naegter. Kundskabens trae = den viden Enki vil give menneskeheden. Udvisningen = Enlils beslutning.' },
      { trad: 'Gnostisk', figure: 'Archon-faengsel', source: 'Hypostasis of the Archons', detail: 'I Nag Hammadi er Edens Have et FAENGSEL skabt af Yaldabaoth (Enlil) for at holde menneskeheden i uvidenhed. Slangen (Enki/Kristus-kraft) er helten der bringer gnosis. "Gud" der forbyder viden er den blinde skaber-Archon — ikke den sande Gud.' },
    ],
    billy: 'Billy Carson: "Eden er ikke et mytisk sted — det er et faktisk geografisk område ved Eufrat og Tigris. Arkaologer har fundet de fire floder naevnt i Genesis. Adam og Eva er Adapa og Titi. Hele narrativet er en historisk erindring om Anunnaki\'s genetiske laboratorium i Mesopotamien."',
  },
]

export default function AncientConnections() {
  const [selected, setSelected] = useState(null)
  const nav = useNavigate()

  const item = CONNECTIONS.find(c => c.id === selected)

  if (item) {
    return (
      <div className="ac-page">
        <div className="ac-detail-hero">
          <button className="ac-back" onClick={() => setSelected(null)}>← Alle forbindelser</button>
          <span className="ac-detail-icon">{item.icon}</span>
          <h1 className="ac-detail-title">{item.title}</h1>
          <div className="ac-original-badge">Ældste kilde: {item.original}</div>
          <p className="ac-thesis">{item.thesis}</p>
        </div>

        <div className="ac-content">
          <h3 className="ac-versions-title">Samme fortælling — forskellige civilisationer:</h3>
          {item.versions.map(v => (
            <div key={v.trad} className="ac-version-card">
              <div className="ac-version-header">
                <span className="ac-version-trad">{v.trad}</span>
                <span className="ac-version-figure">{v.figure}</span>
                <span className="ac-version-source">{v.source}</span>
              </div>
              <p className="ac-version-detail">{v.detail}</p>
            </div>
          ))}

          <div className="ac-billy-box">
            <span className="ac-billy-label">👁 BILLY CARSON / ANCIENT PERSPEKTIV</span>
            <p>{item.billy}</p>
          </div>

          <button className="ac-search-btn" onClick={() => nav('/search')}>
            Søg i de originale tekster →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="ac-page">
      <div className="ac-hero">
        <div className="ac-hero-icon">🏛</div>
        <h1 className="ac-title">Ancient Connections</h1>
        <p className="ac-sub">Alle religioner stammer fra samme kilde · Sumeriske grundtekster · Billy Carson</p>
      </div>

      <div className="ac-intro-box">
        <p>"Alle store religioners kernefortællinger — syndfloden, paradiset, den guddommelige søn, lovgiveren, englene — er sumeriske fortællinger genfortalt med lokale navne. Biblen, Koranen, Vedaerne: alle er børnebøger baseret på de sumeriske originaler."</p>
        <cite>— Billy Carson · 4biddenknowledge</cite>
      </div>

      <div className="ac-timeline">
        <div className="ac-tl-label">KRONOLOGI — hvem kom først:</div>
        {[
          { year:'3200 f.Kr.', text:'Sumerisk skrift opfindes · Første nedskrevne gudefortællinger' },
          { year:'2600 f.Kr.', text:'Eridu Genesis · Syndflod · Ziusudra · Adapa (Adam)' },
          { year:'2334 f.Kr.', text:'Sargon af Akkad · Moses\' fødelseshistorie' },
          { year:'2100 f.Kr.', text:'Epic of Gilgamesh · Utnapishtim (Noah) · Syndflod' },
          { year:'1754 f.Kr.', text:'Hammurabi\'s Lovkodeks · De Ti Bud\'s original' },
          { year:'1350 f.Kr.', text:'Akhenaten · Første monoteisme · Moses-forbindelsen' },
          { year:'800 f.Kr.',  text:'Genesis skrives · Noah, Adam, Moses fra sumeriske kilder' },
          { year:'50 e.Kr.',   text:'Jesus-fortællingen · Horus/Osiris/Mithra genfortalt' },
          { year:'610 e.Kr.', text:'Koranen · Abraham, Moses, Jesus fra samme ancient kilde' },
        ].map(t => (
          <div key={t.year} className="ac-tl-item">
            <span className="ac-tl-year">{t.year}</span>
            <span className="ac-tl-text">{t.text}</span>
          </div>
        ))}
      </div>

      <div className="ac-section">
        <h2 className="ac-section-title">Klik for at se forbindelserne:</h2>
        {CONNECTIONS.map(c => (
          <button key={c.id} className="ac-card" onClick={() => setSelected(c.id)}>
            <span className="ac-card-icon">{c.icon}</span>
            <div>
              <div className="ac-card-title">{c.title}</div>
              <div className="ac-card-original">Original: {c.original}</div>
              <div className="ac-card-thesis">{c.thesis.slice(0,80)}...</div>
            </div>
          </button>
        ))}
      </div>

      <div className="ac-footer">
        <button className="ac-footer-btn" onClick={() => nav('/search')}>
          Søg i sumeriske og ancient tekster →
        </button>
        <button className="ac-footer-btn" onClick={() => nav('/billy')}>
          👁 Billy Carson om Anunnaki →
        </button>
      </div>
    </div>
  )
}
