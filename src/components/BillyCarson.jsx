import React, { useState } from 'react'
import './BillyCarson.css'

const THEORIES = [
  {
    icon: '🧬',
    title: 'DNA som kosmisk antenne',
    desc: 'Menneskelig DNA er en biologisk antenne der modtager og sender information fra det holografiske felt. Anunnaki modificerede vores DNA — og dermed vores adgang til det kosmiske informationsfelt. Carson argumenterer at vi kun bruger en brøkdel af vores DNA\'s egentlige kapacitet — resten er ikke "junk DNA" men uaktiverede modtagerkanaler.',
  },
  {
    icon: '⚫',
    title: 'Melanin & bevidsthed',
    desc: 'Carbon-baseret melanin (C11H10N2O) er et bevidsthedsmolekyle der forbinder det biologiske med det kosmiske informationsfelt. Melanin absorberer elektromagnetisk stråling over hele spektret. Carson: det er ikke tilfældigt at pigmentering og åndelig sensitivitet forbindes i oldtidens traditioner fra Egypten til Indien.',
  },
  {
    icon: '📜',
    title: 'Smaragdtavlerne — Holografisk manual',
    desc: '"Som ovenover, så nedenunder" er ikke en poetisk metafor — det er en præcis beskrivelse af det holografiske princip: dele indeholder helheden. Carsons bog "Compendium of the Emerald Tablets" dekoder Hermes Trismegistus\' tekster som en literal kvantemekanisk manual skrevet 36.000+ år siden.',
  },
  {
    icon: '👽',
    title: 'Anunnaki som programmører',
    desc: 'I Sumeriske tekster beskriver Zecharia Sitchin og Carson at Anunnaki kom til Jorden, skabte/modificerede Homo sapiens via genetisk manipulation. Carson: vi er potentielt fuldstændige multidimensionelle væsner — men vores "frekvensomfang" blev begrænset til 3D-perception. Det forklarer hvorfor vi har 97% inaktivt "junk DNA".',
  },
  {
    icon: '🔺',
    title: 'Hellig geometri som teknologi',
    desc: 'Pyramiderne er ikke grave — de er teknologiske anlæg bygget med viden om elektromagnetisme, resonans og harmoni med jordens Schumann-frekvens. Cheops-pyramiden er et energianlæg konstrueret til præcisionen af en moderne computer. Carson: vi er nu ved at genvinde denne viden via quantum-videnskab.',
  },
  {
    icon: '🌌',
    title: 'Simulations-teorien bekræftet af oldtiden',
    desc: 'Hinduismens Maya (illusion), Platons Huleallegori, Hermes\' "Alt er Sind" — alle peger på det samme som Nick Bostrom og Elon Musk: virkelighed er information. Carson: oldtidens lærde vidste dette og kodede det ind i templer, hieroglyffer og hellige tekster. Vi "opdager" nu hvad de altid vidste.',
  },
]

const BOOKS = [
  { title: 'Compendium of the Emerald Tablets', year: '2020', desc: 'En moderne dekodning af Hermes Trismegistus\' 42 smaragdtavler. Carson oversætter de esoteriske tekster til quantum-fysik og neurologi. Bestseller.' },
  { title: 'Woke Doesn\'t Mean Broke', year: '2021', desc: 'Hvad oldtidens viden om bevidsthed og frekvens kan lære os om at skabe overflod. Forbinder åndelig vækst med finansiel frihed.' },
  { title: 'The Compendium of the Emerald Tablets Vol. 2', year: '2022', desc: 'Fortsætter dekodningen — fokus på aktivering af menneskelig DNA og adgang til det kosmiske informationsfelt.' },
]

export default function BillyCarson() {
  const [openSection, setOpenSection] = useState('theories')
  function toggle(k) { setOpenSection(o => o === k ? null : k) }

  return (
    <div className="bc-page">

      <div className="bc-hero">
        <div className="bc-eye">👁️</div>
        <h1 className="bc-title">Billy Carson</h1>
        <p className="bc-sub">4biddenknowledge · Smaragdtavlerne · Anunnaki · Holografisk bevidsthed</p>
        <blockquote className="bc-quote">
          "Du er ikke et menneske der har åndelige oplevelser. Du er et åndeligt væsen der har en menneskelig oplevelse."
          <cite>— Billy Carson</cite>
        </blockquote>
      </div>

      {/* Bio */}
      <section className="bc-section">
        <button className="bc-sec-header" onClick={() => toggle('bio')}>
          <span className="bc-sec-icon" style={{color:'#d4a843'}}>◎</span>
          <div>
            <div className="bc-sec-title">Hvem er Billy Carson?</div>
            <div className="bc-sec-sub">Fra fattigdom til NASA-rådgiver · 4biddenknowledge</div>
          </div>
          <span className="bc-chevron">{openSection === 'bio' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'bio' && (
          <div className="bc-sec-body">
            <div className="bc-bio-grid">
              <div className="bc-bio-text">
                <p>Billy Carson voksede op i fattige kår i Miami og er selvlært — ingen universitetsuddannelse. Han har certifikater fra MIT i quantum mekanik, astrofysik og nanoteknik. Han er grundlægger og CEO for <strong>4biddenknowledge Inc.</strong> og <strong>4biddenknowledge TV</strong>.</p>
                <p>Carson er forfatter til bestsellerne om Smaragdtavlerne og er anerkendt som forsker og foredragsholder på konferencer om oldtidens civilisationer, quantum-videnskab og bevidsthed. Han har samarbejdet med NASA-astronomer og forskere.</p>
                <p>Hans kernebudskab: <strong>oldtidens civilisationer — Sumer, Egypten, Maya — besad avanceret videnskabelig viden</strong> som vi nu genvinder via quantum-mekanik. Religionerne er krypterede versioner af denne viden.</p>
              </div>
              <div className="bc-bio-facts">
                <div className="bc-fact"><span className="bc-fact-icon">🎓</span><span>MIT-certificeret: Quantum, Astrofysik, Nano</span></div>
                <div className="bc-fact"><span className="bc-fact-icon">📺</span><span>4biddenknowledge TV — streaming platform</span></div>
                <div className="bc-fact"><span className="bc-fact-icon">📚</span><span>Forfatter til 3+ bestseller-bøger</span></div>
                <div className="bc-fact"><span className="bc-fact-icon">🌍</span><span>Foredragsholder på 6 kontinenter</span></div>
                <div className="bc-fact"><span className="bc-fact-icon">🔭</span><span>Samarbejde med NASA-forskere</span></div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Teorier */}
      <section className="bc-section">
        <button className="bc-sec-header" onClick={() => toggle('theories')}>
          <span className="bc-sec-icon" style={{color:'#9060c0'}}>⬡</span>
          <div>
            <div className="bc-sec-title">Carsons centrale teorier</div>
            <div className="bc-sec-sub">DNA · Melanin · Anunnaki · Smaragdtavlerne · Simulation</div>
          </div>
          <span className="bc-chevron">{openSection === 'theories' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'theories' && (
          <div className="bc-sec-body">
            <div className="bc-theories-grid">
              {THEORIES.map(t => (
                <div key={t.title} className="bc-theory-card">
                  <div className="bc-th-icon">{t.icon}</div>
                  <div className="bc-th-title">{t.title}</div>
                  <div className="bc-th-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Video */}
      <section className="bc-section">
        <button className="bc-sec-header" onClick={() => toggle('video')}>
          <span className="bc-sec-icon" style={{color:'#e05050'}}>▶</span>
          <div>
            <div className="bc-sec-title">Video — Billy Carson</div>
            <div className="bc-sec-sub">4biddenknowledge · Quantum mekanik & oldtidens viden</div>
          </div>
          <span className="bc-chevron">{openSection === 'video' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'video' && (
          <div className="bc-sec-body">
            <div className="bc-video-wrap">
              <iframe
                src="https://www.youtube.com/embed/U5PlJhMKSEg?rel=0"
                title="Billy Carson — 4biddenknowledge"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <a className="bc-yt-link" href="https://www.youtube.com/watch?v=U5PlJhMKSEg" target="_blank" rel="noopener noreferrer">
              ▶ Åbn på YouTube
            </a>
          </div>
        )}
      </section>

      {/* Bøger */}
      <section className="bc-section">
        <button className="bc-sec-header" onClick={() => toggle('books')}>
          <span className="bc-sec-icon" style={{color:'#d4a843'}}>📚</span>
          <div>
            <div className="bc-sec-title">Bøger</div>
            <div className="bc-sec-sub">Compendium of the Emerald Tablets · Woke Doesn't Mean Broke</div>
          </div>
          <span className="bc-chevron">{openSection === 'books' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'books' && (
          <div className="bc-sec-body">
            <div className="bc-books-list">
              {BOOKS.map(b => (
                <div key={b.title} className="bc-book-card">
                  <div className="bc-book-title">{b.title}</div>
                  <div className="bc-book-year">{b.year}</div>
                  <div className="bc-book-desc">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Forbindelser */}
      <section className="bc-section">
        <button className="bc-sec-header" onClick={() => toggle('connections')}>
          <span className="bc-sec-icon" style={{color:'#50c080'}}>∿</span>
          <div>
            <div className="bc-sec-title">Forbindelser til andre tænkere</div>
            <div className="bc-sec-sub">Tesla · Padgett · Hermes · Sitchin</div>
          </div>
          <span className="bc-chevron">{openSection === 'connections' ? '▲' : '▼'}</span>
        </button>
        {openSection === 'connections' && (
          <div className="bc-sec-body">
            <div className="bc-connections">
              {[
                { name: 'Hermes Trismegistus', link: 'Smaragdtavlerne er Carsons primære kilde. Han ser dem som en direkte teknisk manual fra en avanceret civilisation der eksisterede før vores.' },
                { name: 'Zecharia Sitchin', link: 'Carson bygger på Sitchins oversættelse af de sumeriske tavler om Anunnaki — men tilføjer quantum-videnskab og bevidsthedsteori som ramme.' },
                { name: 'Nikola Tesla', link: '"Alt er energi, frekvens og vibration" — Tesla og Carson deler den fundamentale forståelse at virkelighed er informationsmønstre, ikke fast materie.' },
                { name: 'Jason Padgett', link: 'Begge ser universets matematiske struktur som bevidst. Padgett erfarede det direkte — Carson udleder det fra oldtidens tekster. To ruter til samme destination.' },
                { name: 'David Icke', link: 'Deler teorier om simulation og bevidsthedskontrol — men Carson fokuserer på videnskabelig substans frem for konspirationsperspektivet.' },
              ].map(c => (
                <div key={c.name} className="bc-conn-card">
                  <div className="bc-conn-name">{c.name}</div>
                  <div className="bc-conn-link">{c.link}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

    </div>
  )
}
