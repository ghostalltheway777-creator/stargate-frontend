import React, { useState, useRef, useEffect, useCallback } from 'react'
import './FrequencyPlayer.css'

const FREQUENCIES = [
  { hz: 7.83,   name: 'Schumann',      desc: 'Jordens hjerteslag · alfa-hjernebølger',     color: '#40b080', chakra: 'Rod' },
  { hz: 40,     name: 'Gamma',         desc: 'Dyb meditation · tibetanske munke',           color: '#60a0e0', chakra: 'Alle' },
  { hz: 111,    name: 'Celle-harmoni', desc: 'Beta-endorfin · kronisk smerte relief',       color: '#e0a040', chakra: 'Sakral' },
  { hz: 136.1,  name: 'Om-tonen',      desc: 'Jordens år-frekvens · Hinduismens hellige lyd', color: '#c87840', chakra: 'Hjerte' },
  { hz: 174,    name: 'Solfeggio 1',   desc: 'Smertelindring · tryghed · fundament',       color: '#e05050', chakra: 'Rod' },
  { hz: 285,    name: 'Solfeggio 2',   desc: 'Vævsreparation · cellulær regenerering',     color: '#e08040', chakra: 'Sakral' },
  { hz: 396,    name: 'Solfeggio 3',   desc: 'Frigørelse fra frygt og skyld',              color: '#d4a843', chakra: 'Solar' },
  { hz: 432,    name: 'Naturens tone', desc: 'Pythagoræisk harmoni · vandkrystaller',      color: '#50c090', chakra: 'Hjerte' },
  { hz: 528,    name: 'DNA-reparation',desc: 'Kærlighedsfrekvens · mirakeltonen',          color: '#50d060', chakra: 'Hjerte' },
  { hz: 639,    name: 'Solfeggio 5',   desc: 'Forbindelser · relationer · harmoni',        color: '#40b0c0', chakra: 'Hals' },
  { hz: 741,    name: 'Solfeggio 6',   desc: 'Intuition · tredje øje · bevidsthed',        color: '#6060d0', chakra: 'Tredje øje' },
  { hz: 852,    name: 'Solfeggio 7',   desc: 'Åndelig orden · højere bevidsthed',          color: '#8050c0', chakra: 'Krone' },
  { hz: 963,    name: 'Guds frekvens', desc: 'Pinealkirtel · kosmisk forbindelse',         color: '#c060e0', chakra: 'Krone' },
]

export default function FrequencyPlayer() {
  const [active, setActive] = useState(null)
  const [volume, setVolume] = useState(0.3)
  const [playing, setPlaying] = useState(false)
  const [timer, setTimer] = useState(0)
  const [duration, setDuration] = useState(300)

  const ctxRef = useRef(null)
  const oscRef = useRef(null)
  const gainRef = useRef(null)
  const intervalRef = useRef(null)
  const timerRef = useRef(null)

  const stop = useCallback(() => {
    if (oscRef.current) {
      try {
        gainRef.current.gain.setTargetAtTime(0, ctxRef.current.currentTime, 0.3)
        setTimeout(() => { try { oscRef.current.stop() } catch(e){} }, 400)
      } catch(e) {}
      oscRef.current = null
    }
    clearInterval(intervalRef.current)
    clearInterval(timerRef.current)
    setPlaying(false)
    setTimer(0)
  }, [])

  const play = useCallback((freq) => {
    stop()
    setActive(freq)

    setTimeout(() => {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)()
        ctxRef.current = ctx

        const gain = ctx.createGain()
        gain.gain.setValueAtTime(0, ctx.currentTime)
        gain.gain.setTargetAtTime(volume, ctx.currentTime, 0.5)
        gain.connect(ctx.destination)
        gainRef.current = gain

        const osc = ctx.createOscillator()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq.hz, ctx.currentTime)
        osc.connect(gain)
        osc.start()
        oscRef.current = osc

        setPlaying(true)
        setTimer(0)
        timerRef.current = setInterval(() => {
          setTimer(t => {
            if (t >= duration) { stop(); return 0 }
            return t + 1
          })
        }, 1000)
      } catch(e) {
        console.error('Audio error:', e)
      }
    }, 100)
  }, [volume, duration, stop])

  useEffect(() => {
    if (gainRef.current && ctxRef.current) {
      gainRef.current.gain.setTargetAtTime(volume, ctxRef.current.currentTime, 0.1)
    }
  }, [volume])

  useEffect(() => () => stop(), [stop])

  const fmt = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`

  return (
    <div className="fp-page">

      <div className="fp-hero">
        <div className="fp-symbol">∿</div>
        <h1 className="fp-title">Frekvenser & Bønner</h1>
        <p className="fp-sub">Solfeggio · Schumann · 432 Hz · Bønner fra alle traditioner</p>
        <blockquote className="fp-quote">
          "Hvis du vil finde universets hemmeligheder, tænk i begreber om energi, frekvens og vibration"
          <cite>— Nikola Tesla</cite>
        </blockquote>
      </div>

      <div className="fp-science-box">
        <div className="fp-science-title">🔬 Videnskaben bekræfter det</div>
        <p className="fp-science-text">Alle store religiøse bønner — islamisk Dhikr, kristent Fadervor, buddhistisk mantra, hinduistisk Gayatri — producerer <strong>målbare theta-hjernebølger (4-7 Hz)</strong> og <strong>hjertekohærens</strong> hos dem der beder dem.</p>
        <p className="fp-science-text">Det er IKKE tilfældigt. Det er universets helingsfrekvenser aktiveret via stemme og intention. Alle traditioner rammer den samme sandhed via forskelligt sprog. <strong>Bøn er frekvens. Frekvens er bøn.</strong></p>
        <div className="fp-science-cats">
          {[
            ['Islam','Dhikr · Al-Fatiha','528 Hz'],
            ['Kristendom','Fadervor · Gregoriansk','432 Hz'],
            ['Buddhisme','Om Mani Padme Hum','963 Hz'],
            ['Hinduisme','Gayatri · Om','136 Hz'],
            ['Jødedom','Shema · Kaddish','396 Hz'],
            ['Sikhisme','Waheguru · Japji','741 Hz'],
          ].map(([t,b,f]) => (
            <div key={t} className="fp-sci-cat">
              <span className="fp-sci-trad">{t}</span>
              <span className="fp-sci-bøn">{b}</span>
              <span className="fp-sci-hz">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Afspiller */}
      {active && (
        <div className="fp-now-playing" style={{'--fcolor': active.color}}>
          <div className="fp-np-waves">
            {playing && [1,2,3,4,5].map(i => (
              <div key={i} className="fp-wave" style={{animationDelay: `${i*0.12}s`, background: active.color}} />
            ))}
            {!playing && <div className="fp-np-paused">⏸</div>}
          </div>
          <div className="fp-np-info">
            <div className="fp-np-hz" style={{color: active.color}}>{active.hz} Hz</div>
            <div className="fp-np-name">{active.name}</div>
            <div className="fp-np-desc">{active.desc}</div>
          </div>
          <div className="fp-np-controls">
            <div className="fp-timer">{fmt(timer)} / {fmt(duration)}</div>
            <button className="fp-stop-btn" onClick={stop}>■ Stop</button>
          </div>
        </div>
      )}

      {/* Indstillinger */}
      <div className="fp-settings">
        <div className="fp-setting">
          <label className="fp-label">Lydstyrke</label>
          <div className="fp-range-wrap">
            <span className="fp-range-icon">🔈</span>
            <input type="range" className="fp-range" min="0" max="1" step="0.05"
              value={volume} onChange={e => setVolume(parseFloat(e.target.value))} />
            <span className="fp-range-icon">🔊</span>
          </div>
        </div>
        <div className="fp-setting">
          <label className="fp-label">Varighed</label>
          <div className="fp-duration-btns">
            {[60,300,600,1200,3600].map(d => (
              <button key={d} className={`fp-dur-btn ${duration===d?'active':''}`}
                onClick={() => setDuration(d)}>
                {d<60?`${d}s`:d<3600?`${d/60}m`:'1t'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Frekvenser */}
      <div className="fp-grid">
        {FREQUENCIES.map(f => (
          <button key={f.hz}
            className={`fp-card ${active?.hz === f.hz && playing ? 'fp-active' : ''}`}
            style={{'--fcolor': f.color}}
            onClick={() => active?.hz === f.hz && playing ? stop() : play(f)}>
            <div className="fp-card-hz" style={{color: f.color}}>{f.hz} Hz</div>
            <div className="fp-card-name">{f.name}</div>
            <div className="fp-card-chakra">{f.chakra}</div>
            <div className="fp-card-desc">{f.desc}</div>
            <div className="fp-card-btn" style={{background: f.color}}>
              {active?.hz === f.hz && playing ? '■' : '▶'}
            </div>
          </button>
        ))}
      </div>

      <div className="fp-info-box">
        <p>Frekvenserne spilles som rene sinusbølger direkte i din browser. For bedste effekt: brug høretelefoner, luk øjnene og lad frekvensen resonere i 5-20 minutter. Kombiner med vejrtrækningsøvelser for dybere effekt.</p>
      </div>

      {/* BØNNER FRA ALLE TRADITIONER */}
      <div className="fp-prayers-section">
        <h2 className="fp-prayers-title">🙏 Bønner fra Alle Traditioner</h2>
        <p className="fp-prayers-sub">Samme sandhed — forskelligt sprog. Læs, reciter eller mediterer over disse bønner mens du lytter til den anbefalede frekvens.</p>

        {[
          {
            trad: 'Islam', color: '#40a060', icon: '☪',
            hz: '528 Hz (kærlighed & healing)',
            prayers: [
              { name: 'Al-Fatiha (Åbningssurah)', lang: 'Arabisk + Dansk',
                text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nI Allahs navn, den Nådige, den Barmhjertige.\nAl-hamdu lillahi rabb il-alamin\nAl lovprisning tilhører Allah, Verdenernes Herre.\nAr-rahmani r-rahim\nDen Nådige, den Barmhjertige.\nMaliki yawmi d-din\nHersker over Dommens Dag.\nIyyaka nabudu wa-iyyaka nastain\nDig alene dyrker vi og Dig alene søger vi hjælp.\nIhdinas-sirat al-mustaqim\nVis os den rette vej.',
                note: 'Reciteres 17 gange dagligt af praktiserende muslimer. Theta-hjernebølger aktiveres ved 3. repitition.' },
              { name: 'Dhikr — Guds navne', lang: 'Arabisk',
                text: 'سُبْحَانَ اللَّه · SubhanAllah (Pris være Allah) × 33\nالْحَمْدُ لِلَّه · Alhamdulillah (Al lovprisning) × 33\nاللَّهُ أَكْبَر · Allahu Akbar (Allah er størst) × 33\nلَا إِلَٰهَ إِلَّا اللَّه · La ilaha illa Allah (Der er ingen gud undtagen Allah)',
                note: 'Rytmisk repetition aktiverer det parasympatiske nervesystem. Videnskabeligt identisk med mantra-meditation.' },
            ]
          },
          {
            trad: 'Kristendom', color: '#4488cc', icon: '✝',
            hz: '432 Hz (naturlig harmoni)',
            prayers: [
              { name: 'Fadervor', lang: 'Dansk',
                text: 'Fader vor, du som er i himlene!\nHelliget vorde dit navn,\nKomme dit rige,\nSke din vilje som i himlen således også på jorden;\ngiv os i dag vort daglige brød,\nog forlad os vor skyld,\nsom også vi forlader vore skyldnere,\nog led os ikke ind i fristelse,\nmen fri os fra det onde.\nThi dit er riget og magten og æren i evighed!',
                note: 'Jesus\' bøn fra Matthæus 6:9-13. Gregoriansk sang af Fadervor producerer 7.83 Hz — Schumann Resonansens frekvens.' },
              { name: 'Kyrie Eleison', lang: 'Græsk',
                text: 'Κύριε, ἐλέησον\nKyrie eleison — Herre, forbarm dig\nChriste eleison — Kristus, forbarm dig\nKyrie eleison — Herre, forbarm dig',
                note: 'Tidligste kristne liturgiske sang. Tre-leds struktur svarer til 3-6-9 frekvensstrukturen.' },
            ]
          },
          {
            trad: 'Buddhisme', color: '#cc8844', icon: '☸',
            hz: '963 Hz (pineal & krone)',
            prayers: [
              { name: 'Om Mani Padme Hum', lang: 'Sanskrit/Tibetansk',
                text: 'ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ\nOm Mani Padme Hum\n\nOm = universets lyd, det absolutte\nMani = juvelen, compassion\nPadme = lotusblomsten, visdom\nHum = forening af compassion og visdom\n\n"Juvel i lotusens hjerte"',
                note: 'Det mest reciterede mantra i verden. 108 repetitioner = en mala. Tibetanske munke der reciterer dette viser målbar gamma-hjernebølge-aktivitet (40 Hz).' },
              { name: 'Heart Sutra', lang: 'Sanskrit',
                text: 'Gate gate pāragate\npārasaṃgate\nbodhi svāhā\n\n"Gåen, gåen, gåen hinsides\ngåen fuldstændigt hinsides\nOplysning! Svāhā!"',
                note: 'Kernen i Mahayana buddhismen. Korteste og mest potente sutra — fuldstændig dissolution af ego i 14 linjer.' },
            ]
          },
          {
            trad: 'Hinduisme', color: '#cc4444', icon: '🕉',
            hz: '136 Hz (Om-tonen · Jordens frekvens)',
            prayers: [
              { name: 'Gayatri Mantra', lang: 'Sanskrit',
                text: 'ॐ भूर्भुवः स्वः\nOm Bhur Bhuvaḥ Swaḥ\nतत्सवितुर्वरेण्यं\nTat-savitur-vareṇyaṃ\nभर्गो देवस्यः धीमहि\nBhargo devasya dhīmahi\nधियो यो नः प्रचोदयात्\nDhiyo yo naḥ prachodayāt\n\n"Vi mediterer over den guddommelige lys fra Solen. Måtte det oplyse vores sind."',
                note: 'Den ældste bøn i menneskelighedens historie — Rigveda 3.62.10 (ca. 1500 f.Kr.). Gayatri Mantra reciteret ved 136.1 Hz (Om-tonen) producerer den kraftigste hjernekoherens målt i videnskabelige studier.' },
              { name: 'Om Shanti', lang: 'Sanskrit',
                text: 'ॐ शान्तिः शान्तिः शान्तिः\nOm Shanti Shanti Shanti\n\nFred i kroppen\nFred i sindet\nFred i ånden',
                note: 'Tre gentagelser adresserer de tre sources af lidelse: adhi-daivik (kosmisk), adhi-bhautik (fysisk), adhyatmik (åndelig).' },
            ]
          },
          {
            trad: 'Jødedom', color: '#4466cc', icon: '✡',
            hz: '396 Hz (befrielse)',
            prayers: [
              { name: 'Shema Yisrael', lang: 'Hebraisk',
                text: 'שְׁמַע יִשְׂרָאֵל\nShema Yisrael\nאֲדֹנָי אֱלֹהֵינוּ\nAdonai Eloheinu\nאֲדֹנָי אֶחָד\nAdonai Echad\n\n"Hør Israel, Herren er vores Gud, Herren er Én"',
                note: 'Grundlæggelsen af jødisk tro — Deuteronomium 6:4. Reciteret morgen og aften, og som de sidste ord ved døden. Echad (Én) — monoteismens kraftigste affirmation.' },
              { name: 'Oseh Shalom', lang: 'Hebraisk',
                text: 'עֹשֶׂה שָׁלוֹם בִּמְרוֹמָיו\nOseh shalom bimromav\nהוּא יַעֲשֶׂה שָׁלוֹם עָלֵינוּ\nHu yaaseh shalom aleinu\nוְעַל כָּל יִשְׂרָאֵל\nVeal kol Yisrael\nוְאִמְרוּ אָמֵן\nVimru: Amen\n\n"Han som skaber fred i sit himmelske hjem, han skaber fred for os og for hele Israel"',
                note: 'Fredsbøn der afslutter mange centrale jødiske bønner. Melodien varierer men er altid rytmisk og repetitiv.' },
            ]
          },
          {
            trad: 'Sikhisme', color: '#cc8800', icon: '☬',
            hz: '741 Hz (intuition & sandhed)',
            prayers: [
              { name: 'Waheguru Mantra', lang: 'Punjabi/Gurmukhi',
                text: 'ਵਾਹਿਗੁਰੂ\nWaheguru · Waheguru · Waheguru\n\nWahe = Den vidunderlige\nGuru = Læreren/Oplyseren\n\n"Vidunderlig er den guddommelige lærer der bringer os fra mørke til lys"',
                note: 'Sikhs primære navn for Gud. Reciteret i Simran (meditation) — rytmisk repetition bringer sindet til en-pointed fokus.' },
              { name: 'Mool Mantar', lang: 'Punjabi',
                text: 'ੴ ਸਤਿ ਨਾਮੁ\nIk Onkar Sat Nam\nਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ\nKarta Purakh Nirbhau\nਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ\nNirvair Akal Murat\n\n"Én Skaber, Sandhedens Navn, Skaberens Kraft, Uden Frygt, Uden Had, Tidløs Form"',
                note: 'Guru Nanak\'s grundlæggerbøn — begyndelsen af Guru Granth Sahib. Ik Onkar = Ét Univers, én bevidsthed.' },
            ]
          },
        ].map(trad => (
          <div key={trad.trad} className="fp-trad-section" style={{'--tc': trad.color}}>
            <div className="fp-trad-header">
              <span className="fp-trad-icon">{trad.icon}</span>
              <div>
                <div className="fp-trad-name">{trad.trad}</div>
                <div className="fp-trad-hz">Anbefalet frekvens: {trad.hz}</div>
              </div>
            </div>
            {trad.prayers.map(p => (
              <div key={p.name} className="fp-prayer-card">
                <div className="fp-prayer-name">{p.name}</div>
                <div className="fp-prayer-lang">{p.lang}</div>
                <pre className="fp-prayer-text">{p.text}</pre>
                <div className="fp-prayer-note">🔬 {p.note}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  )
}
