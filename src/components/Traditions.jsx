import React, { useState } from 'react'
import {
  Ankh, StarOfIshtar, Valknut, MayaSun, Faravahar,
  IslamicStar, VesicaPiscis, StarOfDavid, OmSymbol, DharmaWheel,
  YinYang, Khanda, AllSeeingEye, TreeOfLife, Ouroboros, GnosticCross,
  MetatronCube, FlowerOfLife,
} from './SacredGeometry'
import './Traditions.css'

function MetatronCubeSymbol({ size, color }) {
  return <MetatronCube size={size} color={color} opacity={0.85} />
}
function FlowerSymbol({ size, color }) {
  return <FlowerOfLife size={size} color={color} opacity={0.85} />
}

const TRADITIONS = [
  // ── ANCIENT ────────────────────────────────────────────────────────────────
  {
    cat: 'Ancient', name: 'Egyptisk', color: '#ffcc44', Symbol: Ankh,
    d3: 'Rituelle gravkamre, magiske formler, faraonens guddommelighed som ydre magt',
    d5: '"Jeg er det der er, det der var og altid vil være" — bevidstheden er evig, kroppen er midlertidig',
  },
  {
    cat: 'Ancient', name: 'Sumerisk', color: '#ffe066', Symbol: StarOfIshtar,
    d3: 'Guderne Anunna som kosmiske herskere, menneskene som tjenere skabt til arbejde',
    d5: 'Enkis viden — sumeriske myter er kosmologiske kort over bevidsthedens lag og skabelsens mysterier',
  },
  {
    cat: 'Ancient', name: 'Nordisk', color: '#aaddff', Symbol: Valknut,
    d3: 'Ragnarok som endedoms-dom, Valhalla som belønning for kamp, guder som skæbnemagere',
    d5: 'Odin ofrer sig selv til sig selv — hænger 9 dage i Yggdrasil for at finde Runer (visdom bag dualitet)',
  },
  {
    cat: 'Ancient', name: 'Maya', color: '#ff8833', Symbol: MayaSun,
    d3: 'Tidscyklusser, gudernes krav, menneskeofringer for at opretholde kosmos',
    d5: 'Tid som illusion — det evige nu bag kalenderens spiral, bevidsthed som selve skaberkraften',
  },
  {
    cat: 'Ancient', name: 'Zoroastrisk', color: '#ffaa55', Symbol: Faravahar,
    d3: 'Kamp mellem Ahura Mazda og Ahriman, ydre renhed, bøn og ritual for at styrke lyset',
    d5: 'Spenta Mainyu — det hellige sind der frit vælger lyset. Gud er ikke adskilt, men potentialet inden i dig',
  },

  // ── VERDENSRELIGIONER ──────────────────────────────────────────────────────
  {
    cat: 'Verdensreligioner', name: 'Islam', color: '#55aaff', Symbol: IslamicStar,
    d3: 'Sharia, de fem søjler, ydre regler, god muslim udadtil for samfundets skyld',
    d5: 'Sufisme — find Gud inden i dig. "Jeg er tættere på dig end din halspulsåre" (Quran 50:16)',
  },
  {
    cat: 'Verdensreligioner', name: 'Kristendom', color: '#ff9944', Symbol: VesicaPiscis,
    d3: 'Kirke, sakramenter, frelse gennem institution og tro på Jesus som mellemmand',
    d5: 'Gnosis — "Guds rige er inden i jer" (Lukas 17:21). Kristus-bevidsthed som dit indre potentiale',
  },
  {
    cat: 'Verdensreligioner', name: 'Jødedom', color: '#d4a843', Symbol: StarOfDavid,
    d3: 'De 613 bud, Torah bogstaveligt, loven som Guds direkte vilje til folket Israel',
    d5: 'Kabbalah — Torah er en kode til bevidstheden. Livets træ som bevidsthedskort fra Ain Soph til Malkuth',
  },
  {
    cat: 'Verdensreligioner', name: 'Hinduisme', color: '#ff6688', Symbol: OmSymbol,
    d3: 'Ritual, kastesystem, puja og ceremonier som ydre vej til gudernes gunst',
    d5: 'Advaita Vedanta — du ER Brahman, ikke adskilt fra Gud. "Tat tvam asi" — det er du',
  },
  {
    cat: 'Verdensreligioner', name: 'Buddhisme', color: '#44ddbb', Symbol: DharmaWheel,
    d3: 'Vinaya med 500+ regler, ydre disciplin, munkevæsen og ritualer som vej til nirvana',
    d5: 'Zen/Dzogchen — du er allerede oplyst. Selve den der søger er det der søges. Erkend det nu',
  },
  {
    cat: 'Verdensreligioner', name: 'Taoisme', color: '#88ffdd', Symbol: YinYang,
    d3: 'Forfædredyrkelse, ritualer for harmoni med naturen, Tao som ydre universel orden',
    d5: 'Wu Wei — at handle ved ikke at handle. Tao kan ikke beskrives — det der er navngivet er ikke Tao',
  },
  {
    cat: 'Verdensreligioner', name: 'Sikhisme', color: '#ffaa33', Symbol: Khanda,
    d3: 'De 5 Ks, Gurdwara-besøg, ydre disciplin og tilhørsforhold til det sikhiske fællesskab',
    d5: 'Ik Onkar — ét bevidsthedsfelt bag alle former. Naam-meditation som direkte vej til forening med det Ene',
  },

  // ── MYSTISK / ESOTERISK ────────────────────────────────────────────────────
  {
    cat: 'Mystisk', name: 'Hermetisme', color: '#aa77ff', Symbol: AllSeeingEye,
    d3: 'Alkymi som fysisk kemi, symboler bogstaveligt forstået, hemmeligheder gemt for de få',
    d5: '"Som det er oppe, er det nede." Alkymi er bevidsthedstransformation. Du er selv den vises sten',
  },
  {
    cat: 'Mystisk', name: 'Kabbalah', color: '#d4a843', Symbol: TreeOfLife,
    d3: 'Kun for lærde jøder, bogstavelig fortolkning af Zohar som religiøs tekst',
    d5: 'Livets træ som bevidsthedskort. Sephirot som bevidsthedens dimensioner fra Kether til Malkuth',
  },
  {
    cat: 'Mystisk', name: 'Gnostisk', color: '#cc77ff', Symbol: GnosticCross,
    d3: 'Demiurgen som falsk skaber-gud, materie som fængsel for sjælen, verden som illusion at flygte fra',
    d5: 'Gnosis — direkte bevidsthedsgennembrud. Du er en gnist af det Sande Lys fanget i et system du kan vågne fra',
  },
  {
    cat: 'Mystisk', name: 'Ouroboros', color: '#cc88ff', Symbol: Ouroboros,
    d3: 'Slangen som ondskab, cirklen som endeløs fælde, materien som det modsatte af ånden',
    d5: 'Ouroboros — slangen der bider sin hale. Altet er ét kredsløb. Begyndelse og slutning er det samme punkt',
  },

  // ── UDVIDET ──────────────────────────────────────────────────────────────
  {
    cat: 'Udvidet', name: 'Numerologi', color: '#88ffcc', Symbol: TreeOfLife,
    d3: 'Tal som abstrakt matematik. 7 som heldig, 13 uheldig — overtro uden videnskabeligt grundlag',
    d5: 'Tal er bevidsthedens frekvenser. Pythagoras: "Tal er alle tings grund." Gematria = Torah som talkode. 11:11 = opvågningssignal. Livet er frekvens = tal',
  },
  {
    cat: 'Udvidet', name: 'Astrologi', color: '#ffdd88', Symbol: StarOfIshtar,
    d3: 'Planeterne styrer din skæbne udefra. Horoskop som underholdning. Videnskaben har afvist det',
    d5: 'Som det er oppe er det nede — planeternes cyklusser spejler bevidsthedens rytmer. Du er ikke din sol-tegn, du er stjernestøv der observerer sig selv. Hermes vidste det',
  },
  {
    cat: 'Kritisk analyse', name: 'Talmudisme', color: '#ff8888', Symbol: StarOfDavid,
    d3: 'Rabbinsk lov ligestillet med Guds ord. Talmud som hellig tekst. Konceptet om jøder som racemæssigt udvalgt folk over alle andre',
    d5: 'Vigtig distinktion: Torah = åbenbaring (Moses). Talmud = menneskelig rabbinsk fortolkning skrevet 200-500 e.Kr. Karaitter afviser Talmud. Menneskenes ord ≠ Guds ord',
  },
  {
    cat: 'Videnskab & Mystik', name: 'Kvantum & Tesla', color: '#aaddff', Symbol: MetatronCubeSymbol,
    d3: 'Quantum fysik som abstrakt videnskab for specialister. Tesla som excentrisk opfinder. Æther som afvist teori',
    d5: 'Observer-effekten = bevidstheden skaber virkelighed. Entanglement = alle er forbundne. Teslas æther = Prana/Chi/Ruah. 432Hz = kosmisk resonans der bekræfter hvad mystikerne altid vidste',
  },
  {
    cat: 'Videnskab & Mystik', name: 'Interdimensionel', color: '#dd99ff', Symbol: AllSeeingEye,
    d3: 'Engle = mennesker med vinger. UFO\'er = science fiction. Anunnaki = mytologi. Alt der ikke passer i boksen er nonsens',
    d5: 'Engle = interdimensionelle intelligenser (alle religioner bruger dette begreb om det samme). Anunnaki/Nephilim = ikke-jordiske entiteter i Genesis 6, Enok-bogen, Sumerisk. Moderne UAP-afsløringer bekræfter de gamle tekster',
  },
]

const CATS = ['Ancient', 'Verdensreligioner', 'Mystisk', 'Udvidet', 'Kritisk analyse', 'Videnskab & Mystik']
const CAT_META = {
  Ancient:             { label: 'Ancient',              glyph: '☥', desc: 'Sten-tavler & de ældste traditioner' },
  Verdensreligioner:   { label: 'Verdensreligioner',    glyph: '◎', desc: 'De store levende traditioner' },
  Mystisk:             { label: 'Mystisk & Esoterisk',  glyph: '△', desc: 'De skjulte og mystiske veje' },
  Udvidet:             { label: 'Numerologi & Astrologi', glyph: '★', desc: 'Tal og stjerner som bevidsthedskort' },
  'Kritisk analyse':   { label: 'Kritisk analyse',      glyph: '⚖', desc: 'Åbenbaring vs menneskelig manipulation' },
  'Videnskab & Mystik':{ label: 'Videnskab & Mystik',   glyph: '⚛', desc: 'Quantum, Tesla og interdimensionel visdom' },
}

export default function Traditions() {
  const [selected, setSelected] = useState(null)
  const [openCat, setOpenCat] = useState('Verdensreligioner')

  return (
    <div className="traditions-page">
      <div className="trad-header">
        <h2 className="trad-title">Den fælles tråd</h2>
        <p className="trad-sub">"De siger alle det samme — på forskelligt sprog"</p>
      </div>

      {CATS.map(cat => {
        const meta = CAT_META[cat]
        const items = TRADITIONS.filter(t => t.cat === cat)
        const isOpen = openCat === cat
        return (
          <div key={cat} className="trad-category">
            <button className={`cat-header ${isOpen ? 'open' : ''}`}
              onClick={() => setOpenCat(isOpen ? null : cat)}>
              <span className="cat-glyph">{meta.glyph}</span>
              <div className="cat-info">
                <span className="cat-label">{meta.label}</span>
                <span className="cat-desc">{meta.desc}</span>
              </div>
              <span className="cat-chevron">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className="trad-list">
                {items.map(t => {
                  const isExp = selected === t.name
                  const { Symbol } = t
                  return (
                    <button key={t.name}
                      className={`trad-card ${isExp ? 'expanded' : ''}`}
                      style={{ '--tc': t.color }}
                      onClick={() => setSelected(isExp ? null : t.name)}>
                      <div className="trad-top">
                        <div className="trad-symbol">
                          <Symbol size={44} color={t.color} />
                        </div>
                        <span className="trad-name">{t.name}</span>
                        <span className="trad-chevron">{isExp ? '▲' : '▼'}</span>
                      </div>
                      {isExp && (
                        <div className="trad-detail">
                          <div className="trad-row">
                            <span className="trad-badge d3">3D</span>
                            <p>{t.d3}</p>
                          </div>
                          <div className="trad-divider" />
                          <div className="trad-row">
                            <span className="trad-badge d5">5D</span>
                            <p>{t.d5}</p>
                          </div>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}

      <blockquote className="trad-footer-quote">
        <p>"Sandheden er én — de vise kalder den ved mange navne."</p>
        <cite>— Rigveda 1.164.46</cite>
      </blockquote>
    </div>
  )
}
