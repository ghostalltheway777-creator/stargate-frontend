import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PinealThirdEye.css'

const TABS = [
  { id: 'science',   label: '🔬 Videnskab' },
  { id: 'ancient',   label: '👁 Ancient' },
  { id: 'dmt',       label: '🌌 DMT' },
  { id: 'garjajev',  label: '🧬 DNA Antenne' },
  { id: 'heart',     label: '❤️ Hjertet' },
  { id: 'fluoride',  label: '⚠️ Fluorid' },
  { id: 'activate',  label: '✦ Aktivering' },
]

export default function PinealThirdEye() {
  const [tab, setTab] = useState('science')
  const nav = useNavigate()

  return (
    <div className="pt-page">
      <div className="pt-hero">
        <div className="pt-eye">👁</div>
        <h1 className="pt-title">Pineal Kirtlen</h1>
        <p className="pt-sub">Third Eye · Sjelens Sæde · DMT Fabrik · Undertrykt Viden</p>
      </div>

      <div className="pt-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`pt-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'science' && (
        <div className="pt-section">
          <p className="pt-intro">Pineal kirtlen er en ært-stor kirtel midt i hjernen. Moderne videnskab forstår kun en brøkdel af dens funktion.</p>

          {[
            { title: 'Hvad er pineal kirtlen?', text: 'En lille endokrin kirtel (7-10mm) placeret præcist i hjernens centrum — ikke i venstre eller højre halvdel, men nøjagtigt i midten. Den eneste del af hjernen der ikke er parret. Descartes (1640) kaldte den "Sjelens Sæde" og mente den var forbindelsen mellem krop og sjæl.' },
            { title: 'Moderne kendte funktioner', text: 'Producerer Melatonin (søvnhormon) som respons på mørke.\nProducerer Serotonin i lys.\nRegulerer cirkadisk rytme (kroppens ur).\nSensitiv overfor lys via øjnene — selv hos blinde.\nIndeholder photoreceptorer identiske med øjets nethinde — pineal kirtlen "ser" lys direkte.' },
            { title: 'Det videnskaben ikke vil sige', text: 'Pineal kirtlen indeholder krystaller af calcite og hydroxyapatit — piezoelektriske krystaller der reagerer på elektromagnetiske felter og producerer elektrisk strøm under tryk.\nDisse krystaller er identiske med dem i det indre øre.\nNASA har dokumenteret at astronauter ser lys i fuldstændigt mørke — pineal kirtlen opfanger galaktisk stråling.\nKirtlen er aktivt beskyttet af blod-hjerne barrieren — men modtager uforholdsmæssigt meget blod.' },
            { title: 'René Descartes havde ret', text: '"Sjelen er forbundet til hele kroppen, men der er en bestemt del af kroppen som sjelen udøver sine funktioner mere specifikt end i alle andre dele. Det er pineal kirtlen." — Descartes, 1641.\n\nModerne neuovidenskab afviser dette. Men Rick Strassman\'s DMT forskning (1990erne) bekræftede det indirekte: pineal kirtlen er den eneste kendte kilde til endogent DMT i menneskekroppen.' },
          ].map(s => (
            <div key={s.title} className="pt-card">
              <h3 className="pt-card-title">{s.title}</h3>
              <p className="pt-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'ancient' && (
        <div className="pt-section">
          <p className="pt-intro">Alle store antikke civilisationer kendte pineal kirtlen og beskrev den som menneskets åndelige centrum.</p>

          {[
            { civ: 'Hinduisme', symbol: '🕉', name: 'Ajna Chakra — Third Eye', text: 'Det sjette chakra placeret præcist hvor pineal kirtlen sidder. "Ajna" betyder "kommando" eller "perception ud over det ordinære". Åbning af Ajna giver adgang til højere bevidsthed, klar syn (clairvoyance) og forbindelsen til det guddommelige. Shiva beskrives med et tredje øje i panden — der brænder alt uvirkeligt op.' },
            { civ: 'Egypten', symbol: '𓂀', name: 'Eye of Horus / Wadjet', text: 'Eye of Horus er anatomisk identisk med et tværsnit af hjernen der viser pineal kirtlen, thalamus og hypothalamus. Egyptiske præster kaldte det "Ib" — hjertets/sjelens øje. Egyptiske indvigede kendte pineal kirtlens funktion 5000 år før moderne videnskab beskrev den.' },
            { civ: 'Kristendom', symbol: '✝', name: 'Pinecone Symbolik', text: 'Pineal kirtel = "pinecone kirtel" (latin: pinus = fyr). Paven har en 4 meter høj fyrkoglefontæne i Vatikanets "Court of the Pinecone". Staven (thyrsus) som Dionysus holder ender i en fyrklogle. De egyptiske guder Osiris og Isis holder begge stave med fyrklogle på toppen. Kirken kendte hemmeligheden og skjulte den i symbolik.' },
            { civ: 'Buddhisme', symbol: '☸', name: 'Urna — The Third Eye Mark', text: 'Buddha afbildes altid med et punkt i panden — Urna. Repræsenterer det åbne tredje øje og opnåelse af Bodhi (oplysning). Tibetanske buddhister bruger specifikt Tummo meditation til at aktivere det de kalder "det indre varme" centrum i hjernen.' },
            { civ: 'Frimureri', symbol: '⬡', name: 'All-Seeing Eye', text: 'Det altseende øje på den amerikanske dollar og i frimurerisk symbolik er pineal kirtlen — ikke Gud. "He who controls the pineal gland controls the masses" — Henry Kissinger (tilskrevet). Frimurernes 33 grader = 33 hvirvler i rygraden som Kundalini energi stiger igennem til pineal kirtlen.' },
            { civ: 'Sumerien', symbol: '⭐', name: 'Anunnaki og Third Eye', text: 'Sumeriske relieffer viser Anunnaki guder der holder fyrklogler — identisk med pineal symbolik. De beskrives som at "åbne sindets øje" hos menneskene de skabte. Zecharia Sitchin: Anunnaki genetisk modificerede menneskelig pineal kirtel til at producere endogent DMT — for at muliggøre kommunikation med dem.' },
          ].map(a => (
            <div key={a.civ} className="pt-ancient-card">
              <div className="pt-ancient-header">
                <span className="pt-ancient-symbol">{a.symbol}</span>
                <div>
                  <div className="pt-ancient-civ">{a.civ}</div>
                  <div className="pt-ancient-name">{a.name}</div>
                </div>
              </div>
              <p className="pt-ancient-text">{a.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'dmt' && (
        <div className="pt-section">
          <p className="pt-intro">Rick Strassman's banebrydende forskning ved University of New Mexico 1990-1995 dokumenterede det vores forfædre vidste: pineal kirtlen er en DMT fabrik.</p>

          <div className="pt-dmt-card">
            <h3>Rick Strassman — "DMT: The Spirit Molecule"</h3>
            <p>Strassman administrerede syntetisk DMT til 60 frivillige i klinisk setting. 99% rapporterede møde med intelligente entiteter. Oplevelserne var konsistente på tværs af kultur og baggrund. Strassman konkluderede at pineal kirtlen producerer DMT ved:</p>
            <div className="pt-dmt-list">
              {['Fødsel (den første og kraftigste DMT-frigivelse)', 'Dyb REM søvn (drømme)', 'Nær-døds oplevelser', 'Ekstrem meditation og åndedrætsøvelser', 'Spontan mystisk oplevelse', 'Øjeblikket af faktisk død'].map(t => (
                <div key={t} className="pt-dmt-item">✦ {t}</div>
              ))}
            </div>
          </div>

          <div className="pt-dmt-card">
            <h3>Den kosmiske forbindelse</h3>
            <p>DMT er allestedsnærværende i naturen — det er i de fleste planter og dyr. Det er som om universet har kodet dette molekyle ind overalt. Graham Hancock: "DMT er virkelighedens interface — det protokol som bevidsthed bruger til at kommunikere med andre dimensioner."</p>
            <p style={{marginTop:'10px'}}>Archonerne fra Nag Hammadi = de entiteter der mødes under DMT? Mange DMT-brugere beskriver præcist de samme væsener som gnostiske tekster beskriver — blinde skabere, trickster figurer, mekaniske insekter, høje lysende væsener.</p>
          </div>

          <div className="pt-dmt-card">
            <h3>Pineal som interdimensionel antenne</h3>
            <p>Pineal kirtlens piezoelektriske krystaller reagerer på elektromagnetiske felter og ultralyd. De fungerer som en biologisk antenne. Visse Solfeggio frekvenser (936 Hz) resonerer specifikt med pineal krystallerne og kan stimulere DMT-produktion.</p>
            <p style={{marginTop:'10px'}}>Schumann Resonansen (7.83 Hz) — Jordens elektromagnetiske pulsering — svarer til theta-hjernebølger, som er pineal kirtlens aktive tilstand under dyb meditation.</p>
          </div>

          <button className="pt-cta" onClick={() => nav('/ancient-medicine')}>
            DMT & Psychedelics i Ancient Medicine →
          </button>
        </div>
      )}

      {tab === 'fluoride' && (
        <div className="pt-section">
          <p className="pt-intro">Fluorid kalcificerer pineal kirtlen. Det er ikke en teori — det er dokumenteret videnskab. Spørgsmålet er: er det bevidst?</p>

          <div className="pt-warn-card">
            <h3>🔬 Den videnskabelige dokumentation</h3>
            <p>Jennifer Luke (University of Surrey, 1997): Første forsker der dokumenterede fluorid-kalcificering af pineal kirtlen. Fandt at pineal kirtlen akkumulerer MERE fluorid end noget andet blødt væv i kroppen — mere end knogler og tænder.</p>
            <p style={{marginTop:'10px'}}>Resultat: Hos voksne med fluorid i drikkevand har 40% af pineal kirtler en signifikant kalcificering. Kalcificerede pineal kirtler producerer markant mindre Melatonin — og potentielt mindre DMT.</p>
          </div>

          <div className="pt-warn-card">
            <h3>🏭 Fluorids historie</h3>
            <p>Fluorid er industrielt affald fra aluminium og gødskning produktion. Dyrt at bortskaffe. I 1940erne betalte Alcoa (aluminium) for studier der "beviste" fluorid er godt for tænder. FDA godkendte fluorid i drikkevand 1945.</p>
            <p style={{marginTop:'10px'}}>Alle andre industrilande i verden har siden fjernet fluorid fra drikkevand. USA, Danmark og nogle få andre lande fortsætter.</p>
            <p style={{marginTop:'10px'}}>Hvem profiterer på en befolkning med kalcificerede pineal kirtler og reduceret melatonin/DMT produktion? En befolkning der sover dårligt, er mere deprimeret og har svagere adgang til intuitiv og åndelig viden.</p>
          </div>

          <div className="pt-warn-card">
            <h3>🌿 Dekalcificering — naturlig protokol</h3>
            {[
              ['Borax', '1/8 tsk i 1L vand ugentligt — fjerner fluorid fra knogler og blødt væv'],
              ['Tamarind', 'Frugt der aktivt udskiller fluorid via urinen'],
              ['Rå kakao', 'Theobromin stimulerer pineal og modvirker kalcificering'],
              ['Iodine (Lugols)', 'Konkurrerer med fluorid om receptorer — fortrænger det'],
              ['Oregano olie', 'Anti-inflammatorisk og antimikrobiel effekt på pineal'],
              ['Mørkeretræte', '48-72 timer i fuldstændigt mørke tvinger pineal til maksimal aktivitet'],
            ].map(([name, desc]) => (
              <div key={name} className="pt-detox-item">
                <span className="pt-detox-name">{name}</span>
                <span className="pt-detox-desc">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'garjajev' && (
        <div className="pt-section">
          <p className="pt-intro">Dr. Pjotr Garjajev og hans team opdagede at DNA ikke blot er en kemisk kode — det er en kvantum-antenne der sender og modtager information fra universet via lys og lyd.</p>

          <div className="pt-dmt-card" style={{borderColor:'rgba(80,180,255,0.3)', background:'rgba(80,180,255,0.04)'}}>
            <h3 style={{color:'#50b4ff'}}>🧬 Pjotr Garjajev — Bølge-Genetik</h3>
            <p>Dr. Pjotr Garjajev (1942–2020) var russisk molekylærbiolog og fysiker. Leder af Institut for Kvantumgenetik i Moskva. Hans forskning fra 1990erne revolutionerede forståelsen af DNA — men blev undertrykt af vestlig videnskab og hans team forsvandt gradvist fra offentligheden.</p>
            <p style={{marginTop:'10px'}}><strong style={{color:'#50b4ff'}}>Kerneopdagelse:</strong> 97% af menneskelig DNA er ikke "junk DNA" som mainstream videnskab påstår. Det er et kvantum-holografisk kommunikationssystem — et biologisk internet der kommunikerer med rummet, andre levende systemer og potentielt andre dimensioner.</p>
          </div>

          <div className="pt-dmt-card" style={{borderColor:'rgba(80,180,255,0.3)', background:'rgba(80,180,255,0.04)'}}>
            <h3 style={{color:'#50b4ff'}}>📡 DNA som Kvantum-Antenne</h3>
            {[
              { t: 'DNA udsender og absorberer fotoner (lys)', d: 'Garjajev dokumenterede at DNA\'s dobbelt-helix struktur fungerer som en biologisk laser — den producerer og modtager koherent lys (biophotoner). Hele kroppens DNA-netværk kommunikerer via disse biophotoner hurtigere end lys.' },
              { t: 'DNA reagerer på menneskelig tale og tanke', d: 'Garjavejs team bestrålet DNA med laser-lys og "optog" DNA\'s holografiske mønster. De konverterede dette til radiofrekvenser og sendte det til beskadiget DNA fra en anden organisme — det beskadigede DNA reparerede sig selv til 90% perfekthed ved at følge "information-skabelonen".' },
              { t: 'Sprogets frekvens omprogrammerer DNA', d: 'Eksperiment: Russiske forskere brugte radiofrekvenser moduleret med menneskelig stemme og hensigt for at påvirke DNA direkte. DNA reagerede på levende menneskelig tale på sitt eget modersmål — men ikke på tilfældig støj eller fremmedsprog. DNA "lytter" til sprog.' },
              { t: 'Den Fantom DNA-effekten', d: 'Vladimir Poponin (Garjavejs kollega) opdagede at DNA efterlader et elektromagnetisk "fantom" i det rum det befandt sig i — selv efter DNA\'et var fjernet. Rommet "husker" DNA\'ets tilstedeværelse i op til 30 dage. Dette er direkte bevis for at DNA påvirker og kommunikerer med det kvantum-vakuum der omgiver os.' },
            ].map(s => (
              <div key={s.t} className="pt-card" style={{marginTop:'12px'}}>
                <h3 className="pt-card-title" style={{color:'#80ccff'}}>{s.t}</h3>
                <p className="pt-card-text">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="pt-dmt-card" style={{borderColor:'rgba(212,168,67,0.3)', background:'rgba(212,168,67,0.04)'}}>
            <h3 style={{color:'#d4a843'}}>⚠️ Undertrykkelse og Forsvinden</h3>
            <p>Garjavejs forskning truede fundamentet i vestlig biologi og farmaceutisk industri. Hvis DNA kan omprogrammeres af frekvens, intention og sprog — er medicin, kemoterapi og genmanipulation unødvendige.</p>
            <p style={{marginTop:'10px'}}>Hans team fik afslag på alle vestlige publiceringstidsskrifter. Finansiering blev trukket. Samarbejdspartnere forsvandt fra forskningsscenen. Garjajev selv fortsatte i relativ obscuritet indtil sin død i 2020.</p>
            <p style={{marginTop:'10px'}}><strong style={{color:'#d4a843'}}>Vladimir Poponin</strong> emigrerede til USA — men hans Fantom DNA-forskning er aldrig blevet replikeret officiellt. Hans akademiske karriere sluttede kort efter publicering.</p>
          </div>

          <div className="pt-dmt-card" style={{borderColor:'rgba(80,200,120,0.3)', background:'rgba(80,200,120,0.04)'}}>
            <h3 style={{color:'#50c878'}}>✦ Implikationer for Pineal Kirtlen</h3>
            <p>Hvis DNA er en kvantum-antenne — er pineal kirtlen dens modtager-enhed i hjernen. Pineal kirtlens piezoelektriske krystaller og DMT-produktion kan være det biologiske interface mellem:</p>
            <div className="pt-dmt-list" style={{marginTop:'10px'}}>
              {[
                'Kroppens DNA-netværk og den kosmiske information-felt',
                'Individuel bevidsthed og det kollektive bevidsthedsfelt',
                'Tredimensionel realitet og kvantum-vakuumet',
                'Menneskelig DNA og Garjavejs "Biologiske Internet"',
              ].map(t => <div key={t} className="pt-dmt-item">✦ {t}</div>)}
            </div>
            <p style={{marginTop:'12px', color:'rgba(255,255,255,0.6)', fontSize:'12px'}}>Garjajev: <em>"DNA er ikke en statisk molekyle — det er en dynamisk kvantum-processor der konstant kommunikerer med universets informationsfelt. Vi kalder det 'junk DNA' fordi vi ikke forstår sproget det taler."</em></p>
          </div>
        </div>
      )}

      {tab === 'heart' && (
        <div className="pt-section">
          <p className="pt-intro">Hjertet er ikke bare en pumpe — det er kroppens kraftigste elektromagnet og kommunikerer direkte med pineal kirtlen og omverdenen.</p>
          {[
            { icon:'❤️', name:'Hjertet som elektromagnet', text:'HeartMath Institute (Stanford): Hjertet genererer et elektromagnetisk felt 100× stærkere end hjernen — målbart 3-4 meter fra kroppen. Det er kroppens primære elektromagnetiske generator, ikke hjernen. Hjertefeltet kommunikerer med alle andre cellers elektromagnetiske felt.' },
            { icon:'🌊', name:'Hjertekohærens', text:'Når du er i en tilstand af kærlighed, taknemmelighed eller fred — bliver hjertets elektromagnetiske felt kohærent (ordnet). Kohærent hjertefield:\n• Synkroniserer hjernebølger med hjerterytme\n• Forbedrer immunfunktion\n• Aktiverer pineal kirtlens melatonin-produktion\n• Kan synkronisere med andre menneskers hjertefelter' },
            { icon:'🧠', name:'Hjerte-hjerne kommunikation', text:'80% af signalerne går FRA hjertet TIL hjernen — ikke omvendt. Hjertet sender signaler til amygdala (følelsescentret), thalamus og cortex. "Din mave-fornemmelse" er faktisk din hjertes fornemmelse — hjertet har sit eget nervesystem med 40.000 neuroner.' },
            { icon:'📖', name:'The Book of Wisdom — Harry B. Josef', text:'Harry B. Josef\'s arbejde forbinder hjertets elektromagnetiske felt med ancient healingpraksis. Det egyptiske begreb "Ib" (hjerte) = sjelen. Egypterne vejede hjertet mod Ma\'at\'s fjer efter døden — de vidste at hjertet var sædet for bevidsthed og sjæl, ikke hjernen. Josef\'s forskning viser forbindelsen mellem koherent hjertefelt og pineal aktivering.' },
            { icon:'💞', name:'Hjertekohærens og pineal', text:'Når hjertets felt er kohærent:\n• Pineal kirtlens DMT-produktion øges\n• Melatonin-produktion forbedres\n• Intuition og "hjerte-viden" (ikke hjerneviden) aktiveres\n• Forbindelsen til det kollektive felt styrkes\n\nPraktik: 5-5-5 åndedrættet (5 sek ind, 5 sek hold, 5 sek ud) kombineret med fokus på hjerteregionen og følelsen af kærlighed.' },
          ].map(a => (
            <div key={a.name} className="pt-activate-card">
              <span className="pt-activate-icon">{a.icon}</span>
              <div>
                <h4 className="pt-activate-name">{a.name}</h4>
                <p className="pt-activate-text" style={{whiteSpace:'pre-line'}}>{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'activate' && (
        <div className="pt-section">
          <p className="pt-intro">Aktivering af pineal kirtlen er ikke esoterisk nonsens — det er neurovidenskab kombineret med årtusinders visdom.</p>

          {[
            { icon: '∿', name: '936 Hz Frekvens', text: 'Denne specifikke Solfeggio frekvens resonerer direkte med pineal krystallerne via piezoelektrisk effekt. Lyt i 20-30 min dagligt i mørke. Mange rapporterer øget drømmevividhed og intuitiv indsigt efter 2-3 uger.' },
            { icon: '🧘', name: 'Tredje Øje Meditation', text: 'Fokuser opmærksomheden på punktet midt i panden 2cm bag overfladen. Forestil dig et indigo/lilla lys. Navnets mantra: "AUM" eller "OM" vibrationens frekvens resonerer med pineal. 20 min dagligt i 40 dage = klassisk aktiverings-protokol.' },
            { icon: '🌑', name: 'Mørkeretræte', text: '24-72 timer i fuldstændigt mørke. Efter 24 timer begynder pineal at producere usædvanlige mængder melatonin og potentielt DMT. Mange rapporterer spontane visioner og dybe indsigter. Brugt i Toltec og tibetansk tradition i årtusinder.' },
            { icon: '🌬', name: 'Pranayama og Holotropisk Åndedrættet', text: 'Kapalabhati (hurtig pusteøvelse) øger CO2 og stimulerer pineal. Holotropisk åndedræt (Stanislav Grof) kan producere ikke-ordinære bevidsthedsrammer identiske med lavdosis psykedelika — via pineal DMT aktivering.' },
            { icon: '💎', name: 'Krystaller og EMF', text: 'Amethyst resonerer på 32.768 Hz — identisk med kvartskreystaller i ure. Placeret ved panden under meditation kan det forstærke pineal krystallernes piezoelektriske aktivitet. Ligeledes: undgå WiFi og mobiltelefon EMF ved sengetid — det forstyrrer pineal melatonin-produktion.' },
            { icon: '🌿', name: 'Kost og Pineal', text: 'Rå kakao = theobromin aktiverer pineal.\nChaga = beta-glucaner beskytter mod oxidativt stress.\nOrganisk mad = færre pesticider der belaster pineal.\nIntermittent fasting = øger autophagy og renser kalcificering.\nUndgå: fluorid vand, aluminium cookware, proceseret mad med MSG.' },
          ].map(a => (
            <div key={a.name} className="pt-activate-card">
              <span className="pt-activate-icon">{a.icon}</span>
              <div>
                <h4 className="pt-activate-name">{a.name}</h4>
                <p className="pt-activate-text" style={{whiteSpace:'pre-line'}}>{a.text}</p>
              </div>
            </div>
          ))}

          <div className="pt-connect-box">
            <span className="pt-connect-label">🔗 FORBINDELSER I STARGATE</span>
            <div className="pt-connect-links">
              <button onClick={() => nav('/vortex')} className="pt-connect-btn">∞ 936 Hz i Vortex Matematik</button>
              <button onClick={() => nav('/ancient-medicine')} className="pt-connect-btn">🌿 DMT & Fluorid Detox</button>
              <button onClick={() => nav('/consciousness')} className="pt-connect-btn">◈ 3D → 5D Bevidsthed</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
