import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Manifestation.css'

const TABS = [
  { id: 'foundation', label: '✦ Fundamentet' },
  { id: 'science',    label: '🔬 Videnskaben' },
  { id: 'masters',    label: '👁 Mestrene' },
  { id: 'methods',    label: '🛠 Metoder' },
  { id: 'practice',   label: '🌟 Din Praksis' },
]

export default function Manifestation() {
  const [tab, setTab] = useState('foundation')
  const [intention, setIntention] = useState('')
  const [saved, setSaved] = useState(false)
  const nav = useNavigate()

  function saveIntention() {
    if (!intention.trim()) return
    const key = 'sg_manifestations'
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    existing.unshift({ text: intention, date: new Date().toLocaleDateString('da-DK'), done: false })
    localStorage.setItem(key, JSON.stringify(existing.slice(0, 20)))
    setSaved(true)
    setTimeout(() => { setSaved(false); setIntention('') }, 1500)
  }

  const myIntentions = JSON.parse(localStorage.getItem('sg_manifestations') || '[]')

  return (
    <div className="mf-page">
      <div className="mf-hero">
        <div className="mf-icon">✦</div>
        <h1 className="mf-title">Manifestation</h1>
        <p className="mf-sub">As Within, So Without · Bevidsthed skaber virkelighed · Ancient & Modern</p>
        <div className="mf-principle">"What you think, you become. What you feel, you attract. What you imagine, you create."</div>
      </div>

      <div className="mf-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`mf-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {/* FUNDAMENTET */}
      {tab === 'foundation' && (
        <div className="mf-section">
          <div className="mf-hero-quote">
            <p>"As within, so without. As above, so below. As in heaven, so on earth."</p>
            <cite>— Hermes Trismegistus · Smaragdtavlerne</cite>
          </div>

          <p className="mf-intro">Dette er ikke new-age nonsens. Det er den ældste sandhed i universet — bekræftet af kvantemekanik, neurovidenskab og årtusinders visdom.</p>

          {[
            {
              icon: '🌀',
              title: 'Det Hermetiske Princip',
              text: 'Smaragdtavlerne (Thoth/Hermes) beskriver syv universelle love. Den vigtigste: Mentalitetens lov — "Alt er sind. Universet er mentalt." Din indre verden ER din ydre verden — ikke metaforisk, men bogstaveligt. Det du holder konstant i bevidstheden manifesterer sig i den fysiske realitet fordi sindet og materie er samme energi i forskellig frekvens.',
            },
            {
              icon: '⚛',
              title: 'Kvantemekanik bekræfter det',
              text: 'Dobbeltspalteeksperimentet: Elektroner opfører sig som bølger (ubegrænset potentiale) indtil de observeres — da kollapser de til partikler (specifik virkelighed). Din observation skaber virkelighed. Observer-effect er ikke kun kvantfysik — det er manifestationens mekanik. Du er en bevidst observer der kollapser kvantepotentiale til din specifikke oplevelse.',
            },
            {
              icon: '🧠',
              title: 'Neurovidenskaben',
              text: 'Dr. Joe Dispenza: Hjernen kan ikke skelne mellem en levende oplevelse og en intenst forestillet oplevelse. Når du visualiserer med fuld følelsesmæssig intensitet aktiverer du de samme neurale netværk som i virkeligheden. Neurons der fyrer sammen, tråder sammen. Du bygger bogstaveligt talt en ny neural struktur — en ny identitet — der tiltrækker den virkelighed du visualiserer.',
            },
            {
              icon: '❤️',
              title: 'Hjertefeltet som manifestationsværktøj',
              text: 'HeartMath Institute: Hjertet genererer et elektromagnetisk felt 100× stærkere end hjernen — målbart 3-4 meter fra kroppen. Når hjerte og hjerne er i kohærens (alignment) er du i din kraftigste manifestationstilstand. Billy Carson: "Du manifesterer fra hjertet, ikke hjernen. Tanker initierer — følelser manifesterer."',
            },
          ].map(s => (
            <div key={s.title} className="mf-card">
              <div className="mf-card-header">
                <span className="mf-card-icon">{s.icon}</span>
                <h3 className="mf-card-title">{s.title}</h3>
              </div>
              <p className="mf-card-text">{s.text}</p>
            </div>
          ))}

          <div className="mf-eye-box">
            <span className="mf-eye-icon">👁</span>
            <div>
              <div className="mf-eye-title">Det vigtigste tegn: Du kan SE det med lukkede øjne</div>
              <p className="mf-eye-text">Når du lukker øjnene og tydeligt KAN SE din manifestation — scenariet, stederne, personerne — med samme klarhed som en levende erindring, da er du i manifestationstilstand. Det er ikke fantasi på dette tidspunkt. Det er en kvanteoplevelse der allerede eksisterer i en parallel realitet. Dit job er at tunje ind på den frekvens og holde den. Neville Goddard: "Se det indeni, og universet vil skabe det udenom."</p>
            </div>
          </div>

          <button className="mf-cta" onClick={() => nav('/billy')}>
            Billy Carson om Manifestation →
          </button>
        </div>
      )}

      {/* VIDENSKABEN */}
      {tab === 'science' && (
        <div className="mf-section">
          <p className="mf-intro">Manifestation er ikke magi — det er videnskab vi endnu ikke fuldt ud forstår. Her er hvad forskningen siger.</p>

          {[
            {
              name: 'Neuroplasticitet',
              icon: '🧬',
              researcher: 'Dr. Joe Dispenza / Dr. Michael Merzenich',
              text: 'Hjernen ændrer sin fysiske struktur baseret på tanker og oplevelser. Du kan bogstaveligt talt omskabe din hjerne ved at tænke og føle anderledes konsekvent. Det tager gennemsnitligt 66 dage at danne en ny neural vane. Dispenza: "Tænk fremtiden nu — og din biologi vil følge efter."',
            },
            {
              name: 'Observer Effect',
              icon: '👁',
              researcher: 'Niels Bohr / Werner Heisenberg / John Wheeler',
              text: 'John Wheeler (Princeton): "Vi lever i et participatory universe." Observation kollapser kvantebølger til partikler. Du er ikke en passiv observatør af virkelighed — du er en aktiv skaber. Wheeler: "No phenomenon is a real phenomenon until it is an observed phenomenon." Du manifesterer ved at observere med intention.',
            },
            {
              name: 'Morfogenetiske Felter',
              icon: '🌊',
              researcher: 'Dr. Rupert Sheldrake',
              text: 'Sheldrake\'s kontroversielle men veldokumenterede teori: Der eksisterer usynlige felter der organiserer biologiske og sociale systemer. Når nok mennesker tror på eller manifesterer noget, ændres det morfogenetiske felt — og det bliver nemmere for alle andre. Collective consciousness er real og kvantificerbar.',
            },
            {
              name: 'HeartMath Kohærens',
              icon: '❤️',
              researcher: 'HeartMath Institute · Stanford',
              text: 'Hjertefeltets elektromagnetiske signal påvirker kroppens celler og andre menneskers hjerter i nærheden. I kohærent tilstand (kærlighed, taknemmelighed, glæde) synkroniseres hjerne og hjerte og hele kroppen resonerer på en frekvens der tiltrækker tilsvarende oplevelser. Dette er manifestationens fysiologi.',
            },
            {
              name: 'Reticular Activating System',
              icon: '🎯',
              researcher: 'Neurovidenskab',
              text: 'RAS er hjernens "filtreringssystem" — det vælger hvad du bevidst bemærker ud af de 2 millioner bits information du modtager hvert sekund. Når du sætter en klar intention programmerer du dit RAS til at se muligheder du ellers ville ignorere. Du ser hvad du leder efter — og finder det.',
            },
          ].map(s => (
            <div key={s.name} className="mf-science-card">
              <div className="mf-science-header">
                <span className="mf-sci-icon">{s.icon}</span>
                <div>
                  <div className="mf-sci-name">{s.name}</div>
                  <div className="mf-sci-researcher">{s.researcher}</div>
                </div>
              </div>
              <p className="mf-sci-text">{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* MESTRENE */}
      {tab === 'masters' && (
        <div className="mf-section">
          <p className="mf-intro">Disse mestrene har kortlagt manifestationens love — fra ancient wisdom til moderne neurovidenskab.</p>

          {[
            {
              name: 'Neville Goddard',
              years: '1905–1972',
              icon: '📖',
              core: '"Feeling is the Secret"',
              teaching: 'Antagelsens lov: Antag at du ALLEREDE har det du ønsker. Gå i seng i den følelsesmæssige tilstand af den opfyldte ønske. Det underbevidste sind — som manifesterer — kommunikerer via følelser og billeder, ikke ord. REVISION: Genopskriv fortiden i din fantasi som du ville have ønsket den.',
              quote: '"The world is yourself pushed out. Ask yourself what you want and then give it to yourself."',
            },
            {
              name: 'Billy Carson',
              years: '4biddenknowledge',
              icon: '👁',
              core: '"Anunnaki Bevidsthed & Manifestation"',
              teaching: 'Billy Carson kobler manifestation til Anunnaki-viden og ancient Egyptian teknologi. Hjertet er det primære manifestationsorgan — ikke hjernen. Egypterne kendte dette: "Ab" (hjertet) er sædet for sjælen og kreationskraften. Fibonacci-sekvensen i DNA = matematikken bag manifestation. Du er et multidimensionelt væsen med adgang til 5D skabelses-kraft.',
              quote: '"You have to get into the feeling of already having it. The universe responds to your vibration, not your words."',
            },
            {
              name: 'Joe Dispenza',
              years: 'Dr. Joe Dispenza',
              icon: '🧠',
              core: '"Breaking the Habit of Being Yourself"',
              teaching: 'Din personlighed skaber din personlige realitet. At manifestere kræver: 1) Klar vision (hvad) 2) Følelsesmæssig tilstand (energien for fremtiden) 3) Ændring af identitet (hvem du er). De fleste manifesterer fortiden om og om igen fordi de tænker de samme tanker og føler de samme følelser. Brud på vanen = brud på realiteten.',
              quote: '"Your personality creates your personal reality. Change your personality, change your reality."',
            },
            {
              name: 'Hermes Trismegistus',
              years: 'Ancient — Smaragdtavlerne',
              icon: '✦',
              core: '"The Kybalion — 7 Hermetic Principles"',
              teaching: 'Mentalitetens Lov: Alt er sind. Korrespondensloven: As within, so without. Vibrationsloven: Alt vibrerer — ingenting er stille. Polaritetsloven: Alt er dobbelt. Rytmeloven: Svingninger frem og tilbage. Årsags-virkningsloven: Ingen tilfældigheder. Kønnets lov: Alt har maskuline og feminine principper. Disse er manifestationens fundamentale love.',
              quote: '"The Universe is Mental. To change the outer, change the inner."',
            },
            {
              name: 'Nikola Tesla',
              years: '369-metoden',
              icon: '⚡',
              core: '"Think 3, 6, 9 — The Key to the Universe"',
              teaching: 'Tesla\'s 369-metode: Skriv din intention 3 gange om morgenen, 6 gange om eftermiddagen, 9 gange om aftenen i 33-45 dage. 3 = begyndelsen (tanke), 6 = midtpunktet (følelse), 9 = fuldendelsen (manifestation). Tesla: "3, 6 og 9 er nøglerne til universet" — og til manifestation.',
              quote: '"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration."',
            },
          ].map(m => (
            <div key={m.name} className="mf-master-card">
              <div className="mf-master-header">
                <span className="mf-master-icon">{m.icon}</span>
                <div>
                  <div className="mf-master-name">{m.name}</div>
                  <div className="mf-master-years">{m.years}</div>
                  <div className="mf-master-core">{m.core}</div>
                </div>
              </div>
              <p className="mf-master-teaching">{m.teaching}</p>
              <div className="mf-master-quote">"{m.quote}"</div>
            </div>
          ))}
        </div>
      )}

      {/* METODER */}
      {tab === 'methods' && (
        <div className="mf-section">
          <p className="mf-intro">Konkrete teknikker du kan bruge i dag. Vælg den der resonerer med dig og kør den i 33 dage.</p>

          {[
            {
              name: '369 Metoden (Tesla)',
              time: '10 min dagligt',
              icon: '3️⃣',
              steps: [
                'Formulér din intention i nutid som om det allerede er sket',
                'Skriv den 3× om morgenen — fokus på HVAD du ønsker',
                'Skriv den 6× om eftermiddagen — fokus på HVORFOR du er taknemmelig',
                'Skriv den 9× om aftenen — fokus på FØLELSEN af at have det',
                'Kør i 33-45 dage uden at stoppe',
              ],
              example: '"Jeg er dybt taknemmelig og lykkelig for at mit arbejde giver mig fuld frihed og overflod"',
            },
            {
              name: 'Scripting (Neville Goddard)',
              time: '15-20 min dagligt',
              icon: '✍️',
              steps: [
                'Skriv i din journal som om du er i FREMTIDEN',
                'Beskriv din dag som om ønskerne allerede er manifesteret',
                'Brug sanser: hvad ser du, hører du, føler du, lugter du',
                'Skriv med maksimal følelsesmæssig intensitet',
                'Læs det op højt og FØLE det som sandt',
              ],
              example: '"Det er 1. januar 2027. I dag vågnede jeg op i mit drømmehjem. Solskinnet ramte gennem vinduet..."',
            },
            {
              name: 'Visualisering i Theta (Joe Dispenza)',
              time: '20-45 min morgen',
              icon: '🧘',
              steps: [
                'Mediter til theta-tilstand (4-7 Hz hjernebølger) — dyb afslapning',
                'Forestil dig din ønskede fremtid som en film i 1. person',
                'Aktiver ALLE sanser i visualiseringen',
                'FIND følelsen i kroppen — denne følelse er nøglen',
                'Hold følelsen så længe som muligt — DETTE er manifestationen',
              ],
              example: 'Dispenza: "Vær ikke personen der ønsker oplevelsen — vær personen DER HAR den oplevelse."',
            },
            {
              name: 'Hjerte-Kohærens Manifestation',
              time: '5-10 min',
              icon: '❤️',
              steps: [
                'Fokus på hjerteregionen — læg hånden på hjertet',
                '5-5-5 åndedræt: 5 sekunder ind, 5 hold, 5 ud',
                'Genopkald en oplevelse der gav dig DYBT taknemmelighed',
                'Hold den følelse i 2-3 minutter — hjertefeltet er nu kohærent',
                'Fra denne tilstand: visualiser og FEEL din manifestation',
              ],
              example: 'HeartMath: Manifestation fra kohærent hjertefield er 100× kraftigere end fra neutral tilstand.',
            },
            {
              name: 'SATS (Neville Goddard)',
              time: '10-15 min ved sengetid',
              icon: '😴',
              steps: [
                'State Akin To Sleep — den hypnagoge tilstand lige inden søvn',
                'I denne tilstand er det underbevidste sind åbent og modtageligt',
                'Forestil den ENE scene der antyder at dit ønske er opfyldt',
                'En kort scene — en handshake, en klem, et syn fra vinduet',
                'Repeat den scene og glid ind i søvn med den',
              ],
              example: 'Neville: "Denne tilstand er guld. Det underbevidste modtager direkte hvad du giver det her."',
            },
          ].map(m => (
            <div key={m.name} className="mf-method-card">
              <div className="mf-method-header">
                <span className="mf-method-icon">{m.icon}</span>
                <div>
                  <div className="mf-method-name">{m.name}</div>
                  <div className="mf-method-time">⏱ {m.time}</div>
                </div>
              </div>
              <div className="mf-steps">
                {m.steps.map((s,i) => (
                  <div key={i} className="mf-step">
                    <span className="mf-step-n">{i+1}</span>
                    <span className="mf-step-text">{s}</span>
                  </div>
                ))}
              </div>
              <div className="mf-method-example">{m.example}</div>
            </div>
          ))}
        </div>
      )}

      {/* DIN PRAKSIS */}
      {tab === 'practice' && (
        <div className="mf-section">
          <p className="mf-intro">Skriv dine manifestationer ned. At skrive er at programmere det underbevidste.</p>

          <div className="mf-input-box">
            <label className="mf-input-label">✦ Formulér din intention (nutid, allerede manifesteret)</label>
            <textarea
              className="mf-textarea"
              placeholder="Jeg er dybt taknemmelig for at..."
              value={intention}
              onChange={e => setIntention(e.target.value)}
              rows={4}
            />
            <button className="mf-save-btn" onClick={saveIntention}>
              {saved ? '✓ Gemt!' : '✦ Gem manifestation'}
            </button>
          </div>

          {myIntentions.length > 0 && (
            <div className="mf-saved-list">
              <h3 className="mf-saved-title">Dine manifestationer:</h3>
              {myIntentions.map((m, i) => (
                <div key={i} className="mf-saved-item">
                  <span className="mf-saved-date">{m.date}</span>
                  <span className="mf-saved-text">{m.text}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mf-reminder-box">
            <h3>📅 Daglig rutine (10 min)</h3>
            {[
              ['🌅 Morgen', 'Skriv din intention 3× · 5 min hjerte-kohærens · Visualiser'],
              ['☀️ Middag', 'Skriv din intention 6× · Taknemmelighed for hvad DU HAR'],
              ['🌙 Aften', 'Skriv din intention 9× · SATS — glid ind i søvn med scenen'],
            ].map(([time, desc]) => (
              <div key={time} className="mf-routine-item">
                <span className="mf-routine-time">{time}</span>
                <span className="mf-routine-desc">{desc}</span>
              </div>
            ))}
          </div>

          <div className="mf-connect">
            <button className="mf-connect-btn" onClick={() => nav('/higherself')}>
              ◈ Tal med dit Højere Selv om manifestation →
            </button>
            <button className="mf-connect-btn" onClick={() => nav('/billy')}>
              👁 Billy Carson's manifestations-viden →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
