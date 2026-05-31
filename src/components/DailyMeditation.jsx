import React, { useState, useEffect, useRef } from 'react'
import './DailyMeditation.css'
import { useUser } from '../UserContext'

const TRADITION_MEDITATIONS = {
  'Islam': [
    { id: 1, title: 'Fajr Dhikr', duration: 7, freq: 432, desc: 'Morgendhikr — start dagen med Allahs navne', steps: ['Gør wudu · Sid i bederetning mod Mekka', 'SubhanAllah × 33 — Pris være Allah', 'Alhamdulillah × 33 — Al lovprisning tilhører Allah', 'Allahu Akbar × 33 — Allah er størst', 'La ilaha illa Allah × 10 — Der er ingen gud undtagen Allah', 'Sid i tawaadu og mærk Allahs nærhed'] },
    { id: 2, title: 'Muraqaba (Sufi)', duration: 10, freq: 528, desc: 'Sufistisk hjertemeditation — fen nafs fi Allah', steps: ['Sid i ro · Luk øjnene · Hænderne på knæene', 'Forestil dig Allahs lys i dit hjerte', 'Hvert åndedrag: ind = "Al" · ud = "lah"', 'Lad ego og bekymringer opløses i Allahs nærhed', 'Du er ingenting · Allah er alt · Fana fi Allah', 'Bliv i stilheden · La ilaha illa Allah'] },
    { id: 3, title: 'Isha Tazkiyah', duration: 8, freq: 396, desc: 'Aftenrenselse af sjælen — Tazkiyat al-nafs', steps: ['Efter Isha-bøn · Sid i ro', 'Gå dagens handlinger igennem med Allahs øjne', 'Istighfar: Astaghfirullah × 70 — tilgivelse', 'Tilgiv alle der har gjort dig ondt i dag', 'Dua: Bed Allah om styrke og vejledning', 'Sov med wudu og Ayat al-Kursi'] },
  ],
  'Sufisme': [
    { id: 1, title: 'Dhikr Halkah', duration: 10, freq: 432, desc: 'Dhikr-cirkel — rytmisk repetition til theta-tilstand', steps: ['Sid komfortabelt · Luk øjnene', 'Begynd: "Allah" rytmisk til hvert åndedræt', 'Øg tempo gradvist · Lad kroppen svaje let', 'Hu — Hu — Hu (Guds eksistens · Det åndedrag Allah giver)', 'La ilaha illa Allah — hel linje rytmisk', 'Synk ind i stilheden bagved lyden · Fana'] },
    { id: 2, title: 'Sama (Hjertelytning)', duration: 12, freq: 963, desc: 'Rumi\'s vej — lyt med hjertet til det guddommelige', steps: ['Forestil dig Rumi\'s ney-fløjte klager om adskillelse', '"Lyt til ney\'en · Se hvordan den fortæller om adskillelse"', 'Lad smerten ved adskillelse fra kilden mærkes', 'Kærlighed til Allah er branden · Lad den brænde ego\'et', 'Whirl indad · Hvert sted du er er Kaaba', 'Du er ikke adskilt · Du har aldrig været det'] },
  ],
  'Kristendom': [
    { id: 1, title: 'Lectio Divina', duration: 10, freq: 432, desc: 'Hellig læsning og kontemplation', steps: ['Læs: "Guds rige er inden i jer" (Luk 17:21) langsomt', 'Læs igen · Hvad kalder til dig i ordene?', 'Mediterer over det ene ord eller sætning', 'Bed spontant · Hvad vil du sige til Gud nu?', 'Hvil i Guds tilstedeværelse · Kontemplation', '"Vær stille og vid at jeg er Gud" (Salme 46:10)'] },
    { id: 2, title: 'Hesychasm', duration: 12, freq: 528, desc: 'Ortodoks stilhedsmeditation — hjertebøn', steps: ['Sid oprejst · Fokus på hjerteregionen', 'Synkroniser bøn med åndedræt', 'Ind: "Herre Jesus Kristus · Guds Søn"', 'Ud: "Forbarm dig over mig · en synder"', 'Gentag i 12 minutter · Lad det blive automatisk', 'Synk ind i Guds kærlighed · "I AM" er inden i dig'] },
    { id: 3, title: 'Gnostisk Gnosis', duration: 8, freq: 963, desc: 'Direkte erfaring af Kristus-bevidstheden inden i', steps: ['Thomas Evangeliet: "Kongedømmet er inden i jer"', 'Find det stille rum bag tankerne', 'Kristus er ikke kun historisk · Han er en bevidsthedstilstand', '"Jeg og Faderen er ét" · Det er dig der siger dette', 'Lad denne sandhed synke ind · Du er en Guds søn/datter', 'Oplev Gnosis — direkte viden om det guddommelige'] },
  ],
  'Hinduisme': [
    { id: 1, title: 'Gayatri Pranayama', duration: 10, freq: 136, desc: 'Gayatri Mantra med vejrtrækningskontrol', steps: ['Sid i lotus eller sukhasana · Ryggen ret', 'Nadi Shodhana: Venstre næsebor ind 4 · Hold 16 · Højre ud 8', 'Gayatri Mantra stille: "Om Bhur Bhuvaḥ Swaḥ..."', 'Visualiser solen i hjertet · Tat-savitur-vareṇyaṃ', 'Mærk det guddommelige lys oplyse din bevidsthed', '"Dhiyo yo naḥ prachodayāt" · Måtte det oplyse vores sind'] },
    { id: 2, title: 'Jnana Neti Neti', duration: 12, freq: 963, desc: 'Advaita visdomsvej — hvem er jeg?', steps: ['Spørg: "Hvem er jeg?" · Ikke et intellektuelt spørgsmål', 'Jeg er ikke min krop · Neti neti (ikke dette)', 'Jeg er ikke mine tanker · De opstår og forsvinder', 'Jeg er ikke mine følelser · Neti neti', 'Hvad er tilbage? · Det der observerer alt dette', '"Aham Brahmasmi" — Jeg er Brahman · Jeg er kilden'] },
  ],
  'Buddhisme': [
    { id: 1, title: 'Vipassana', duration: 10, freq: 432, desc: 'Indsigtsmeditation — observer sindets natur', steps: ['Sid med ret ryg · Hænderne i lap', 'Observer åndedræt ved næsetippen · Bare observation', 'Tanke opstår? Mærk det · "Tænkning, tænkning"', 'Følelse opstår? Mærk det · "Følelse, følelse"', 'Intet er permanent · Alt opstår og forsvinder', '"Form er tomhed · Tomhed er form" · Du er bevidstheden'] },
    { id: 2, title: 'Metta Loving-Kindness', duration: 8, freq: 528, desc: 'Udsend ubetinget kærlighed til alle væsener', steps: ['Start med dig selv: "Må jeg være lykkelig · sund · i fred"', 'Dine nærmeste: "Må de være lykkelige · sunde · i fred"', 'Neutrale: naboer · fremmede · Udsend kærlighed', 'Svære relationer: dem der har gjort dig ondt', 'Alle væsener i verden · Alle dyr · Alle levende', '"Sabbe sattā bhavantu sukhitattā" · Alle væsener må trives'] },
  ],
  'Jødedom': [
    { id: 1, title: 'Hitbonenut', duration: 10, freq: 432, desc: 'Kabbalistisk kontemplation — forklar Guds natur', steps: ['Sid i ro · Forestil dig Ein Sof — det grænseløse lys', 'Kontemplér: Gud er uendelig · Omnipræsent · Ukendt', '"Shema Yisrael — Adonai Eloheinu — Adonai Echad"', 'Mærk ordene vibrere i din krop · Echad — Én', 'Alt er Gud · Intet er adskilt fra Gud · Yichud', 'Bliv i Guds enhed · Hitahadut — forening'] },
  ],
  'Sikhisme': [
    { id: 1, title: 'Naam Simran', duration: 10, freq: 432, desc: 'Meditation på Guds navn — Waheguru', steps: ['Sid i Sukhasana · Hænderne på knæene', 'Waheguru · Waheguru · Waheguru (rytmisk, stille)', 'Hvert åndedræt: "Wahe" ind · "Guru" ud', 'Lad Guds navn fylde hele bevidstheden', 'Ik Onkar — Der er kun ÉN Skaber', 'Du er ikke adskilt fra Gud · Bliv i denne sandhed'] },
  ],
  'Gnosticisme': [
    { id: 1, title: 'Gnosis Kontemplation', duration: 12, freq: 963, desc: 'Direkte erfaring af det guddommelige — uden mellemmænd', steps: ['Thomas Evangeliet: "Kongedømmet er inden i jer"', 'Luk øjnene · Find det stille rum bag alle tanker', 'Du er ikke din krop · Du er ikke dine tanker', 'Hvad er det der observerer alt dette? · Det er Gnosis', 'Apocryphon of John: Du er af Lysets natur', '"Den der kender sig selv kender universet"'] },
    { id: 2, title: 'Sophia Meditation', duration: 10, freq: 528, desc: 'Forbind med Sophia — den guddommelige visdom', steps: ['Forestil dig et rosenrødt lys i hjertecentret', 'Sophia = guddommelig visdom der søger sit sande hjem', 'Du er et lysglimt der er faldet ind i materie', 'Din opgave er at huske din oprindelse', 'Visualiser at stigte opad gennem de 7 sfærer/Archon-lag', '"Kend din oprindelse og du er fri"'] },
  ],
  'Kabbalah': [
    { id: 1, title: 'Ein Sof Kontemplation', duration: 12, freq: 963, desc: 'Mediterer over det grænseløse guddommelige lys', steps: ['Forestil dig uendeligt hvidt lys · Ein Sof Or', 'Det trækker sig tilbage · Tzimtzum — skaber rum', '10 Sefirot manifesterer sig som lysets refleksioner', 'Keter (krone) · Chokhmah · Binah · ned til Malkuth', 'Du er på Malkuth (Jord) — men forbundet til Keter', 'Mantra: "Ein Sof · Ein Sof · Ein Sof"'] },
    { id: 2, title: 'Tree of Life Meditation', duration: 10, freq: 432, desc: 'Rejse op ad livets træ til den guddommelige kilde', steps: ['Visualiser Livets Træ foran dig · 10 Sefirot', 'Start i Malkuth (rod) · Mærk Jordens energi', 'Stig til Yesod (måne) · Underbevidstheden åbner sig', 'Til Tiferet (hjerte/solen) · Det sande selv', 'Mod Keter (kronen) · Forening med Ein Sof', 'Du er forbundet fra rod til krone'] },
  ],
  'Hermetisme': [
    { id: 1, title: 'As Within So Without', duration: 10, freq: 432, desc: 'Hermetic kontemplation — de 7 love', steps: ['Mentalitetens lov: Alt er sind · Universet er mentalt', 'Korrespondensloven: As above, so below', 'Vibrationsloven: Alt vibrerer · Intet er stille', 'Polaritetsloven: Alt er dobbelt · Modsætninger er identiske', 'Din indre verden ER din ydre verden', 'Smaragdtavlerne: "Det sande er det, der er Ét"'] },
    { id: 2, title: 'Kybalion Meditation', duration: 8, freq: 963, desc: 'De 7 hermetiske principper som levende erfaring', steps: ['Sid stille · Du er sind · Alt er sind', 'Forestil dig din intention som en tanke i Guds sind', 'Rytmeloven: Alt svinger · Vær centreret i svingningen', 'Kausalitetsloven: Du er årsagen til dit liv', 'Kønsloven: Maskulin intention + feminin kreativitet', '"Det Hele er Sind; Universet er Mentalt"'] },
  ],
  'Spiritualitet': [
    { id: 1, title: 'Morgen Grounding', duration: 5, freq: 432, desc: 'Start dagen forankret i din krop og i nuet', steps: ['Find en behagelig siddestilling · Luk øjnene', 'Tag 3 dybe vejrtrækninger · Mærk fødderne mod gulvet', 'Forestil dig et gyldent lys der strømmer ned fra kronen', 'Mærk lyset fylde hele din krop · Du er til stede', 'Sæt din intention for dagen · Hvad vil du skabe?'] },
    { id: 2, title: '5D Bevidsthed', duration: 10, freq: 963, desc: 'Udvid din bevidsthed ud over 3D realiteten', steps: ['Luk øjnene · Observer dine tanker uden at dømme dem', 'Forestil dig at du ser dig selv udefra · Som en observatør', 'Udvid din bevidsthed til rummet · Til byen · Til Jorden', 'Ud i solsystemet · Galaksen · Universet · Det Uendelige', 'Mærk at du er alt dette · Og alt dette er dig', 'Bliv i dette rum'] },
    { id: 3, title: 'Hjertekohærens', duration: 7, freq: 528, desc: 'Aktiver hjertets elektromagnetiske felt', steps: ['Læg hånden på dit hjerte · Mærk det slå', '5-5-5 åndedræt: ind 5 · hold 5 · ud 5', 'Genopkald en oplevelse der fyldte dig med kærlighed', 'Hold den følelse · Lad den sprede sig fra hjertet', 'Dit hjerterfelt udvider sig 3 meter rundt om dig', 'Du manifesterer fra dette felt'] },
    { id: 4, title: 'Pineal Aktivering', duration: 8, freq: 936, desc: 'Aktivér det tredje øje og pineal kirtlen', steps: ['Fokus på punktet midt i panden · 2cm bag overfladen', 'Forestil dig et indigo/lilla lys der vokser der', 'Bliv ved med at fokusere · Lad lyset blive stærkere', 'Du er en lysbærer · Dit tredje øje er åbent', 'Modtag hvilken information der kommer', 'Mantra: AUM'] },
    { id: 5, title: 'Aften Integrering', duration: 6, freq: 396, desc: 'Integrer dagens oplevelser og frigiv det negative', steps: ['Gennemgå dagen i dit sind · Uden at dømme', 'Hvad lærte du? · Hvad er du taknemmelig for?', 'Frigiv alt der ikke tjener dig · Send det med udånding', 'Tilgiv dig selv og andre · Slip det', 'Sæt din intention for en helende søvn', 'Du vokser · Du er nok · Alt er godt'] },
  ],
}
// Default for alle andre traditioner
const DEFAULT_MEDITATIONS = TRADITION_MEDITATIONS['Spiritualitet']

function useAudioTone(freq) {
  const ctx = useRef(null)
  const osc = useRef(null)
  const gain = useRef(null)

  function start() {
    ctx.current = new (window.AudioContext || window.webkitAudioContext)()
    osc.current = ctx.current.createOscillator()
    gain.current = ctx.current.createGain()
    gain.current.gain.setValueAtTime(0, ctx.current.currentTime)
    gain.current.gain.linearRampToValueAtTime(0.06, ctx.current.currentTime + 1)
    osc.current.frequency.setValueAtTime(freq, ctx.current.currentTime)
    osc.current.connect(gain.current)
    gain.current.connect(ctx.current.destination)
    osc.current.start()
  }

  function stop() {
    if (gain.current && ctx.current) {
      gain.current.gain.linearRampToValueAtTime(0, ctx.current.currentTime + 1)
      setTimeout(() => { try { osc.current?.stop(); ctx.current?.close() } catch {} }, 1100)
    }
  }

  return { start, stop }
}

export default function DailyMeditation() {
  const { profile } = useUser()
  const tradition = profile?.tradition || 'Spiritualitet'
  const MEDITATIONS = TRADITION_MEDITATIONS[tradition] || DEFAULT_MEDITATIONS

  const [selected, setSelected] = useState(null)
  const [running, setRunning] = useState(false)
  const [step, setStep] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [done, setDone] = useState(false)
  const med = MEDITATIONS.find(m => m.id === selected)
  const tone = useAudioTone(med?.freq || 432)
  const timerRef = useRef(null)

  function startMeditation() {
    setRunning(true)
    setStep(0)
    setSeconds(0)
    setDone(false)
    tone.start()
    const total = (med.duration * 60)
    const stepTime = Math.floor(total / med.steps.length)
    let s = 0
    timerRef.current = setInterval(() => {
      s++
      setSeconds(s)
      setStep(Math.min(Math.floor(s / stepTime), med.steps.length - 1))
      if (s >= total) {
        clearInterval(timerRef.current)
        tone.stop()
        setRunning(false)
        setDone(true)
      }
    }, 1000)
  }

  function stopMeditation() {
    clearInterval(timerRef.current)
    tone.stop()
    setRunning(false)
    setStep(0)
    setSeconds(0)
  }

  useEffect(() => () => { clearInterval(timerRef.current); tone.stop() }, [selected])

  const progress = med ? Math.min((seconds / (med.duration * 60)) * 100, 100) : 0
  const timeLeft = med ? Math.max(med.duration * 60 - seconds, 0) : 0
  const fmt = s => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`

  if (selected && med) {
    return (
      <div className="dm-page">
        <div className="dm-detail-hero">
          <button className="dm-back" onClick={() => { stopMeditation(); setSelected(null) }}>← Tilbage</button>
          <h2 className="dm-detail-title">{med.title}</h2>
          <div className="dm-freq-badge">{med.freq} Hz</div>
          <p className="dm-detail-desc">{med.desc}</p>
        </div>

        <div className="dm-content">
          {/* Progress */}
          <div className="dm-progress-ring">
            <svg viewBox="0 0 120 120" className="dm-ring-svg">
              <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8"/>
              <circle cx="60" cy="60" r="54" fill="none" stroke="#d4a843" strokeWidth="8"
                strokeLinecap="round" strokeDasharray={`${339.3 * progress / 100} 339.3`}
                transform="rotate(-90 60 60)" style={{transition:'stroke-dasharray 1s linear'}}/>
            </svg>
            <div className="dm-ring-center">
              <div className="dm-ring-time">{fmt(timeLeft)}</div>
              <div className="dm-ring-label">{running ? 'tilbage' : 'total'}</div>
            </div>
          </div>

          {/* Nuværende trin */}
          <div className="dm-step-box">
            <div className="dm-step-num">Trin {step + 1} af {med.steps.length}</div>
            <p className="dm-step-text">{med.steps[step]}</p>
          </div>

          {/* Alle trin */}
          <div className="dm-steps-list">
            {med.steps.map((s, i) => (
              <div key={i} className={`dm-step-item ${i === step && running ? 'active' : ''} ${i < step ? 'done' : ''}`}>
                <span className="dm-step-dot">{i < step ? '✓' : i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>

          {done && (
            <div className="dm-done-box">
              <div className="dm-done-icon">✦</div>
              <p>Meditation afsluttet. Bliv siddende et øjeblik og mærk freden.</p>
            </div>
          )}

          {!running && !done && (
            <button className="dm-start-btn" onClick={startMeditation}>
              ▶ Start meditation ({med.duration} min)
            </button>
          )}
          {running && (
            <button className="dm-stop-btn" onClick={stopMeditation}>
              ⏸ Stop
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="dm-page">
      <div className="dm-hero">
        <div className="dm-icon">🧘</div>
        <h1 className="dm-title">Daglig Meditation</h1>
        <p className="dm-sub">Guidede meditationer med Solfeggio frekvenser</p>
      </div>

      <div className="dm-section">
        <div className="dm-tradition-badge">
          {tradition === 'Islam' ? '☪' : tradition === 'Kristendom' ? '✝' : tradition === 'Hinduisme' ? '🕉' : tradition === 'Buddhisme' ? '☸' : tradition === 'Jødedom' ? '✡' : tradition === 'Sufisme' ? '🌹' : tradition === 'Sikhisme' ? '☬' : '✦'} Meditationer for {tradition}
        </div>
        <p className="dm-intro">Vælg en meditation. Sæt høretelefoner i. Luk øjnene.</p>
        {MEDITATIONS.map(m => (
          <button key={m.id} className="dm-card" onClick={() => { setSelected(m.id); setDone(false) }}>
            <div className="dm-card-header">
              <div>
                <div className="dm-card-title">{m.title}</div>
                <div className="dm-card-desc">{m.desc}</div>
              </div>
              <div className="dm-card-right">
                <div className="dm-card-duration">{m.duration} min</div>
                <div className="dm-card-freq">{m.freq} Hz</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
