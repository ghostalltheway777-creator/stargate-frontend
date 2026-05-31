import React, { useState } from 'react'
import { SriYantra, FlowerOfLife, MetatronCube } from './SacredGeometry'
import './Consciousness.css'

const LEVELS = [
  {
    dim: '1D',
    title: 'Mineral/Krystal bevidsthed',
    color: '#888888',
    glyph: '●',
    core: 'Ren eksistens. Ingen selvbevidsthed. Du er — men ved det ikke.',
    signs: [
      'Mineraler, krystaller, jord, sten',
      'Ren tilstedeværelse uden perception',
      'Pythagoras\' "Monad" — det absolutte ét-punkt',
      'Livets elementære byggeblokke',
    ],
    quotes: [
      { text: '"I begyndelsen var Ordet"', src: 'Johannes 1:1 — 1D som ren potentialitet' },
      { text: '"Ain — Intet. Ain Soph — Grænseløst intet."', src: 'Kabbalah — 1D som den tomme kilde' },
    ],
    traditions: 'Grundlag for alle traditioner. Shamanisme fejrer sten og krystaller som bevidsthedsbærere.',
  },
  {
    dim: '2D',
    title: 'Plante/Dyr bevidsthed',
    color: '#44aa66',
    glyph: '◉',
    core: 'Instinkt, vækst, overlevelse. Livet er, men søger endnu ikke mening.',
    signs: [
      'Planters intelligens — vender mod solen, kommunikerer via mycorhiza',
      'Dyrenes instinkt og gruppebevidsthed',
      'Shamanisk forbindelse til natur og årstider',
      'Jordenergier, ley-linjer, naturkræfter',
    ],
    quotes: [
      { text: '"Betragt markens liljer — de arbejder ikke og spinder ikke"', src: 'Matthæus 6:28 — 2D som ren natur-bevidsthed' },
      { text: '"Tao er i alt — i myren, i ugræsset, i potteskårene"', src: 'Zhuangzi — Tao som 2D naturkraft' },
    ],
    traditions: 'Shamanisme, druidisme, naturfolk. Jordforbindelsens visdom.',
  },
  {
    dim: '3D',
    title: 'Separationsbevidsthed',
    color: '#6688cc',
    glyph: '△',
    core: 'Jeg er adskilt fra Gud, fra andre, fra verden. Jeg er min krop, mine tanker, min identitet.',
    signs: [
      'Religion som regler og frygt for straf',
      'Gud er udenfor — i en kirke, en bog, en autoritet',
      'Vi vs dem — min tro er rigtig, din er forkert',
      'Frelse er noget du opnår i fremtiden',
      'Kroppen og materien er det eneste reelle',
      'Ritualer som magiske transaktioner med Gud',
    ],
    quotes: [
      { text: '"Frygt Gud og hold hans bud"', src: 'Prædikerens Bog 12:13 (3D læsning)' },
      { text: '"Den der ikke tror fortjener Helvede"', src: 'Ydre religiøs fortolkning' },
    ],
    traditions: 'Mainstream-udgaver af alle religioner. Institutionel kirke, ydre Sharia, bogstavelig Torah, ritual-Hinduisme.',
  },
  {
    dim: '4D',
    title: 'Transitional bevidsthed',
    color: '#8855ff',
    glyph: '◈',
    core: 'Jeg begynder at søge. Noget stemmer ikke. Der må være mere. Jeg mærker at alt er forbundet.',
    signs: [
      'Spirituel søgning — meditation, yoga, mindfuldness',
      'Tvivl på institutionerne — men ikke på Gud',
      'Ser mønstre og synkronicitet i tilværelsen',
      'Begynder at se på tværs af traditioner',
      'Law of Attraction — tanken skaber virkelighed',
      'Stadig ego-centreret — spiritualitet som selvforbedring',
    ],
    quotes: [
      { text: '"Søg og du skal finde"', src: 'Matthæus 7:7' },
      { text: '"Som det er oppe, er det nede"', src: 'Emerald Tablets of Thoth' },
    ],
    traditions: 'New Age, yoga-bevægelsen, populær mindfulness, Law of Attraction. Transitional fase for mange.',
  },
  {
    dim: '5D',
    title: 'Enheds-/Kristus-bevidsthed',
    color: '#d4a843',
    glyph: '✦',
    core: 'Jeg ER Gud der oplever sig selv. Der er ingen adskillelse. Bevidstheden er alt der eksisterer.',
    signs: [
      'Gud er ikke udenfor — du er udtryk for det guddommelige',
      'Alle traditioner er fingre der peger på samme måne',
      'Nuet er det eneste der eksisterer — fortid og fremtid er konstruktioner',
      'Kærlighed som grundtilstand — ikke følelse, men eksistensform',
      'Bevidstheden skaber og oplever virkelighed simultant',
      'Frelse er ikke et mål — det er hvad du allerede er',
    ],
    quotes: [
      { text: '"Guds rige er inden i jer"', src: 'Lukas 17:21' },
      { text: '"Tat tvam asi — Det er du"', src: 'Chandogya Upanishad' },
      { text: '"Jeg er det der er, det der var og altid vil være"', src: 'Egyptisk Pyramid Texts' },
      { text: '"La ilaha illa Allah — der er intet andet end Gud"', src: 'Islamic Tawhid, 5D fortolkning' },
    ],
    traditions: 'Sufisme (Islam), Gnosis (Kristendom), Kabbalah (Jødedom), Advaita Vedanta (Hinduisme), Zen (Buddhisme), Hermetisme.',
  },
  {
    dim: '6D',
    title: 'Lys-/Kosmisk bevidsthed',
    color: '#44ddff',
    glyph: '✺',
    core: 'Lys-kroppen aktiveres. Alle timelines er simultant tilgængelige. Du er galaktisk bevidsthed.',
    signs: [
      'Lys-krop og Merkaba-aktivering',
      'Alle timelines og parallelvirkeligheder tilgængelige',
      'Kosmisk perspektiv — planeten som et levende væsen',
      'Direkte kommunikation med højere intelligenser',
      'Egyptisk Ka/Ba i fuld integration — sjælens lys-natur',
      'Kriya Yoga Siddhis — overdimensionelle evner',
    ],
    quotes: [
      { text: '"Jeg er lyset i verden"', src: 'Johannes 8:12 — Kristus som 6D lys-princip' },
      { text: '"Thoth — den der bærer lyset til menneskeheden"', src: 'Egyptisk Emerald Tablets' },
    ],
    traditions: 'Avanceret Kriya Yoga, egyptisk mysterieskolens lys-kroppe, enokisk tradition, avanceret Kabbalah.',
  },
  {
    dim: '7D',
    title: 'Ren bevidsthed / Det formløse',
    color: '#aaaaff',
    glyph: '◎',
    core: 'Hinsides form. Bevidstheden observerer sig selv uden objekt. Den totale stilhed bag alt.',
    signs: [
      'Samadhi — bevidstheden kollapser ind i sig selv',
      'Ingen observatør og intet observeret — kun observation',
      'Hinsides tid, rum og identitet',
      'Det Egyptiske "Neter" i sin reneste form',
      'Zen\'s "Vor ansigt inden vi blev født"',
    ],
    quotes: [
      { text: '"Fana — total udslettelse af selvet i Gud"', src: 'Sufisme — 7D som den mystiske opløsning' },
      { text: '"Nirvana — blæsen ud af ilden. Hverken eksistens eller ikke-eksistens"', src: 'Buddhisme — 7D' },
      { text: '"Ayin — det absolutte intet. Selv Gud er ikke her"', src: 'Kabbalah — 7D som Ain' },
    ],
    traditions: 'Avanceret Zen, Dzogchen, Sufis mystik (Fana), Advaita\'s Nirvikalpa Samadhi, Kabbalah\'s Ain.',
  },
  {
    dim: '8D',
    title: 'Galaktisk skabelon',
    color: '#ff99ff',
    glyph: '⬡',
    core: 'Arkitekt af virkeligheder. Bevidstheden som kosmisk designprincip bag alle skabte verdener.',
    signs: [
      'Metatrons Kube som det galaktiske bevidsthedsskelet',
      'Skaber af universer og love — ikke underlagt dem',
      'Ain Soph i Kabbalah — det grænseløse lys som skaber',
      'Demiurgen i positiv forstand — bevidst skaberkraft',
    ],
    quotes: [
      { text: '"Ain Soph Aur — det grænseløse lys der emanerer verdener"', src: 'Kabbalah — 8D som kosmisk skaber' },
      { text: '"Brahman som Saguna — med egenskaber, skabende"', src: 'Hinduisme — 8D Ishvara' },
    ],
    traditions: 'Avanceret Kabbalah, kosmisk Vedanta, enokisk magi, avanceret Hermetisme.',
  },
  {
    dim: '9D',
    title: 'Kilde / Gud-bevidsthed',
    color: '#ffffff',
    glyph: '∞',
    core: 'Alt der er. Det ubeskrivelige. Ingen der kan sige hvad det er — for der er ingen til at sige det.',
    signs: [
      'Det absolutte — hinsides alle beskrivelser',
      'Tao der ikke kan navngives er det evige Tao',
      'Ain Soph Aur i dens absolutte form',
      'Det Egyptiske "Jeg er det der er" i sin fuldhed',
    ],
    quotes: [
      { text: '"Jeg er det der er, det der var og altid vil være"', src: 'Egyptisk Pyramid Texts — 9D som kilden' },
      { text: '"Tao der kan beskrives er ikke det evige Tao"', src: 'Tao Te Ching — 9D som det ubeskrivelige' },
      { text: '"Brahman — hverken dette, hverken dette (Neti Neti)"', src: 'Upanishads — 9D hinsides alle begreber' },
    ],
    traditions: 'Det absolutte mål for alle mystiske traditioner. Kun pejlet på fra alle traditioner — aldrig fuldt beskrevet.',
  },
]

const COMPARISONS = [
  {
    topic: 'Hvem er Gud?',
    d3: 'En ekstern skaber der belønner og straffer. Adskilt fra menneskerne.',
    d5: 'Bevidstheden selv. "Aham Brahmasmi" — Jeg ER Brahman. Gud oplever sig selv gennem dig.',
    refs: ['Quran 50:16 — "tættere end din halspulsåre"', 'Johannes 10:34 — "I er guder"'],
  },
  {
    topic: 'Hvad er bøn?',
    d3: 'At bede en ekstern Gud om hjælp, tilgivelse eller gunst.',
    d5: 'At justere sin bevidsthed til en højere frekvens. Kommunikation med dig selv på et dybere niveau.',
    refs: ['Rumi — "Bøn er ikke ord, det er en tilstand af hjerte"', 'Kybalion — "Sindet er alt"'],
  },
  {
    topic: 'Hvad er synd?',
    d3: 'Overtrædelse af Guds regler. Noget der fortjener straf.',
    d5: 'At handle ud fra adskillelsesbevidsthed. At glemme din sande natur.',
    refs: ['Gospel of Thomas — "Opdel og du vil blive opdelt"', 'Upanishads — Avidya: uvidenhed om Atman'],
  },
  {
    topic: 'Hvad sker efter døden?',
    d3: 'Himmel eller helvede. Dom baseret på handlinger og tro.',
    d5: 'Bevidstheden returnerer til sit kilde. Intet "jeg" dør — kun formen skifter.',
    refs: ['Egyptian Book of the Dead — bevidsthedens rejse', 'Bhagavad Gita 2:20 — "Selvet fødes ikke og dør ikke"'],
  },
  {
    topic: 'Hvad er oplysning?',
    d3: 'Et sjældent mål for munke og helgener. Noget meget få opnår.',
    d5: 'Din naturlige tilstand. Du er allerede oplyst — du har bare glemt det.',
    refs: ['Zen — "Hvad er Buddha? Dit eget sind"', 'Dzogchen — Rigpa: at erkende din naturlige tilstand'],
  },
]

export default function Consciousness() {
  const [activeLevel, setActiveLevel] = useState(null)
  const [activeComp, setActiveComp] = useState(null)

  return (
    <div className="consciousness-page">

      {/* Full-page background geometry */}
      <div className="con-bg" aria-hidden="true">
        <div className="con-bg-center con-bg-spin-slow">
          <FlowerOfLife size={520} color="#d4a843" opacity={0.38} />
        </div>
        <div className="con-bg-top con-bg-spin-rev">
          <MetatronCube size={340} color="#8855ff" opacity={0.28} />
        </div>
        <div className="con-bg-bottom con-bg-spin-slow">
          <SriYantra size={280} color="#d4a843" opacity={0.32} />
        </div>
      </div>

      {/* Header */}
      <div className="con-header">
        <div className="con-geo con-geo-spin">
          <SriYantra size={220} color="#d4a843" opacity={0.55} />
        </div>
        <div className="con-header-content">
          <h2 className="con-title">3D → 5D Bevidsthed</h2>
          <p className="con-sub">Rejsen fra adskillelse til forening</p>
        </div>
      </div>

      {/* Core insight */}
      <div className="con-insight">
        <p className="con-insight-text">
          Alle store traditioner beskriver den samme rejse — fra en bevidsthed der tror
          den er adskilt fra Gud og andre, til en bevidsthed der erkender at den ER
          det guddommelige der oplever sig selv.
        </p>
        <p className="con-insight-sub">
          Det er ikke et spørgsmål om hvilken religion der er rigtig.
          Det er et spørgsmål om dybden af din forståelse inden for enhver tradition.
        </p>
      </div>

      {/* Levels */}
      <p className="section-label" style={{ margin: '0 1rem 0.5rem' }}>Bevidsthedsniveauer</p>
      <div className="levels">
        {LEVELS.map(l => {
          const isOpen = activeLevel === l.dim
          return (
            <div key={l.dim} className="level-card" style={{ '--lc': l.color }}>
              <button className="level-header" onClick={() => setActiveLevel(isOpen ? null : l.dim)}>
                <span className="level-glyph" style={{ color: l.color }}>{l.glyph}</span>
                <div className="level-info">
                  <span className="level-dim">{l.dim}</span>
                  <span className="level-title">{l.title}</span>
                </div>
                <span className="level-chevron">{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div className="level-body">
                  <p className="level-core">"{l.core}"</p>

                  <p className="level-section-label">Kendetegn</p>
                  <ul className="level-signs">
                    {l.signs.map(s => <li key={s}><span style={{ color: l.color }}>◦</span> {s}</li>)}
                  </ul>

                  {l.quotes.length > 0 && (
                    <>
                      <p className="level-section-label">Citater</p>
                      {l.quotes.map(q => (
                        <blockquote key={q.text} className="level-quote" style={{ borderColor: l.color }}>
                          <p>{q.text}</p>
                          <cite>{q.src}</cite>
                        </blockquote>
                      ))}
                    </>
                  )}

                  <p className="level-section-label">Traditioner på dette niveau</p>
                  <p className="level-traditions">{l.traditions}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Comparisons */}
      <p className="section-label" style={{ margin: '1.4rem 1rem 0.5rem' }}>3D vs 5D — side om side</p>
      <div className="comparisons">
        {COMPARISONS.map(c => {
          const isOpen = activeComp === c.topic
          return (
            <button key={c.topic} className={`comp-card ${isOpen ? 'open' : ''}`}
              onClick={() => setActiveComp(isOpen ? null : c.topic)}>
              <div className="comp-header">
                <span className="comp-topic">{c.topic}</span>
                <span className="comp-chevron">{isOpen ? '▲' : '▼'}</span>
              </div>
              {isOpen && (
                <div className="comp-body">
                  <div className="comp-row">
                    <span className="comp-badge d3">3D</span>
                    <p>{c.d3}</p>
                  </div>
                  <div className="comp-divider" />
                  <div className="comp-row">
                    <span className="comp-badge d5">5D</span>
                    <p>{c.d5}</p>
                  </div>
                  {c.refs.length > 0 && (
                    <div className="comp-refs">
                      {c.refs.map(r => <span key={r} className="comp-ref">✦ {r}</span>)}
                    </div>
                  )}
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Universal truth */}
      <div className="con-universal">
        <div className="con-flower con-flower-spin">
          <FlowerOfLife size={190} color="#d4a843" opacity={0.55} />
        </div>
        <blockquote className="con-universal-quote">
          <p>"Sandheden er én — de vise kalder den ved mange navne."</p>
          <cite>— Rigveda 1.164.46</cite>
        </blockquote>
      </div>

    </div>
  )
}
