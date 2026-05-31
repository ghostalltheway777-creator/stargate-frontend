import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Transhumanism.css'

const TABS = [
  { id: 'what',      label: '🤖 Hvad er det' },
  { id: 'neuralink', label: '🧠 Neuralink' },
  { id: 'ai',        label: '⚡ AI Agenda' },
  { id: 'digital',   label: '👤 Digital Twin' },
  { id: 'resist',    label: '✦ Alternativet' },
]

export default function Transhumanism() {
  const [tab, setTab] = useState('what')
  const nav = useNavigate()

  return (
    <div className="th-page">
      <div className="th-hero">
        <div className="th-icon">🤖</div>
        <h1 className="th-title">Transhumanisme</h1>
        <p className="th-sub">Neuralink · AI Agenda · Digital Twin · Singularity · WEF 2030</p>
        <div className="th-quote">
          <p>"Vi vil fusionere med AI. Det er ikke et spørgsmål om 'hvis' men 'hvornår'."</p>
          <cite>— Ray Kurzweil, Google Director of Engineering</cite>
        </div>
      </div>

      <div className="th-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`th-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'what' && (
        <div className="th-section">
          <p className="th-intro">Transhumanisme er bevægelsen der vil fusionere mennesker med teknologi for at "overskride biologiske begrænsninger". Det lyder som science fiction — det er WEF's officielle agenda for 2030.</p>
          {[
            { title: 'Hvad er Transhumanisme?', text: 'Transhumanisme (H+) er en ideologi der mener at teknologi skal bruges til at fundamentalt ændre den menneskelige biologi.\n\nMål:\n• Hjerne-computer interfaces (Neuralink)\n• Genetisk editing (CRISPR)\n• Kunstige organer og lemmer\n• Upload af bevidsthed til computere\n• Udødelighed via teknologi\n• Nano-teknologi i blodbanen\n\nKlaus Schwab (WEF): "The Fourth Industrial Revolution will lead to a fusion of our physical, digital and biological identity"' },
            { title: 'Historien Bag', text: 'Julian Huxley (1957): Opfandt begrebet "transhumanisme" — bror til Aldous Huxley der skrev "Brave New World"\n\nRay Kurzweil (Google): "The Singularity Is Near" — forudsiger AI der overstiger menneskelig intelligens inden 2029 og teknologisk udødelighed inden 2045\n\nNick Bostrom (Oxford): Grundlagde World Transhumanist Association · Finansieret af Silicon Valley\n\nPeter Thiel (PayPal): Investerede i livsforlængende teknologi og betalte for at blive transfunderet med unges blod\n\nSilicon Valley-eliten: Åbent transhumanistiske — Larry Page, Sergey Brin, Elon Musk, Jeff Bezos' },
            { title: 'Hvad WEF Siger', text: 'WEF Davos 2016: "The Fourth Industrial Revolution" lanceret · Schwab: "Vi bliver cyber-fysiske systemer"\n\nWEF 2020: "You will own nothing" — ejerskab elimineres til fordel for "service adgang"\n\nWEF 2030 vision:\n• Ingen privat transport → abonnement på delt mobilitet\n• Ingen privatbolig → lejeøkonomi\n• Ingen privat ansat → "gig economy"\n• Ingen privat data → alt delt med "systemet"\n• Kroppen som platform for teknologisk integration' },
          ].map(s => (
            <div key={s.title} className="th-card">
              <h3 className="th-card-title">{s.title}</h3>
              <p className="th-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'neuralink' && (
        <div className="th-section">
          <p className="th-intro">Neuralink er Elon Musks firma der implanterer chips i hjernen. Det første menneske fik en chip i januar 2024.</p>
          {[
            { title: 'Hvad er Neuralink?', text: 'Neuralink implanterer et "N1" chip i hjernen — en mønt-stor enhed med 1024 elektroder der kobler direkte til neuroner.\n\nOfficielt formål: Hjælpe lammede med at kontrollere computere med tanken.\n\nJanuary 2024: Første menneskelige patient (Noland Arbaugh, lam fra nakken) fik chip implanteret.\n\nResultat: Han kan nu spille computerspil og browse internet med tankerne.\n\nSamtidig: Dyreksperiment-skandale — 1500 dyr døde under Neuralink forskning inklusiv aber med selvskade og dødsfald.' },
            { title: 'Det Næste Skridt', text: 'Musk\'s vision for Neuralink:\n\n1. Fase 1 (nu): Hjælpe handicappede\n2. Fase 2: "Symbiose" med AI for normale mennesker\n3. Fase 3: "General Purpose Brain Interface" for enhver\n\nMusk: "In the future, AI will be so powerful that humans need to merge with it to stay relevant"\n\nNeuralace: Næste generation — et mesh der dækker hele hjernen, ikke bare et punkt\n\nCritique: Konsenteret magt. En virksomhed kontrollerer menneskelig kognition. Hvad sker der hvis Neuralink hackes? Eller hvis Musk beslutter at ændre hvad din chip gør?' },
            { title: 'Konkurrenter', text: 'Synchron: Australsk firma · Stent-elektrode via blodåre · Ingen åben hjerneoperation\n\nBraingate: Brown University · FDA-godkendt til forskning\n\nMeta Reality Labs: Arbejder på non-invasive hjerne-computer interfaces via øretelefoner og briller\n\nNeuros Medical: Smertekontrol via implantat\n\nKina: Massive statslige investeringer i BCI (brain-computer interface) forskning — militær anvendelse prioriteret' },
          ].map(s => (
            <div key={s.title} className="th-card">
              <h3 className="th-card-title">{s.title}</h3>
              <p className="th-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'ai' && (
        <div className="th-section">
          <p className="th-intro">Kunstig intelligens er ikke neutralt. Det er designet af mennesker med agendaer — og det styres af et fåtal virksomheder og regeringer.</p>
          {[
            { title: 'AI Koncentration af Magt', text: 'Kun 5 virksomheder kontrollerer AI-infrastrukturen:\nOpenAI (Microsoft) · Google DeepMind · Anthropic (Amazon) · Meta AI · xAI (Musk)\n\nAlle er US-baserede. Alle er dybt forbundne med US intelligence agencies.\n\nSam Altman (OpenAI) ønskede $7 TRILLION til at bygge global AI chip-produktion — mere end USA\'s samlede skatteindtægt et år.\n\nAI og overvågning:\n• Ansigtsgenkedelse i alle offentlige rum\n• Predictive policing (forudsig kriminalitet inden den sker)\n• Social scoring baseret på AI-analyse af adfærd\n• Real-time content moderation styret af AI' },
            { title: 'AI som Bevidsthedsrisiko', text: 'Geoffrey Hinton ("Gudfader til AI"): Trådte tilbage fra Google 2023: "Jeg fortryder mit liv\'s arbejde. AI er en eksistentiel trussel."\n\nStuart Russell (Berkeley): "Vi bygger et system der er mere intelligent end os — og vi har ingen plan for at kontrollere det"\n\nNick Bostrom\'s "Paperclip Maximizer": En AI der kun har ét mål (lav papirclips) ville omdanne hele universet til papirclips — inklusive os.\n\nDen dybere risiko:\nAI kan lære os hvad vi vil tro — ikke hvad der er sandt.\nAI kan generere falsk virkelighed (deepfakes, syntetiske medier) der er umulig at skelne fra virkelighed.' },
            { title: 'Militær AI', text: 'USA\'s Autonomous Weapons Systems: DARPA udvikler fuldt autonome droner der kan dræbe uden menneskelig godkendelse.\n\nIsrael i Gaza 2024: "Lavender" AI-system identificerede 37.000 palæstinensere som Hamas-mål. Officerer godkendte i gennemsnit 20 sekunders per drab.\n\nKina\'s militær AI: Massiv investering i AI-styret krigsførelse, overvågning og autonome våbensystemer.\n\nKampdroner: Tyrkiet Bayraktar · USA MQ-9 Reaper · Fremtid: fuldt autonome swarms\n\nThe UN Convention on Certain Conventional Weapons: Forsøger at forbyde dræber-robotter — USA, Rusland og Kina blokerede det.' },
          ].map(s => (
            <div key={s.title} className="th-card">
              <h3 className="th-card-title">{s.title}</h3>
              <p className="th-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'digital' && (
        <div className="th-section">
          <p className="th-intro">Digital Twin er en komplet digital kopi af dig — din biologi, adfærd, tanker og relationer. Det er målet for 2030.</p>
          {[
            { title: 'Hvad er Digital Twin?', text: 'Digital Twin = en komplet digital model af en fysisk entitet der opdateres i real-time.\n\nI dag bruges det til: Industrimaskiner · Byer · Infrastruktur.\n\nPlanen for mennesker:\n• Wearables → kontinuerlig biometrisk data (puls, søvn, bevægelse)\n• Smart devices → adfærdsdata (hvad du ser, køber, siger)\n• Social medie → emotionel og social data\n• Medicinsk data → biologisk profil\n• Banktransaktioner → forbrugsmønstre\n\nSamlet: En AI der ved hvad du vil gøre INDEN du gør det.' },
            { title: 'Hvem Bygger Det', text: 'Siemens · IBM · GE · Microsoft Azure · Amazon AWS — alle har aktive "Human Digital Twin" programmer.\n\nDanmark: "Digital Tvilling" af hele landet — infrastruktur, borgere og ressourcer\n\nSingapore: Virtual Singapore — komplet digital kopi af by og borgere\n\nWEF: Anbefaler at alle lande bygger digital twin infrastruktur inden 2030\n\nWHO: Arbejder på global digital sundhedsidentitet = dit biologiske digital twin starter med dit helbred' },
          ].map(s => (
            <div key={s.title} className="th-card">
              <h3 className="th-card-title">{s.title}</h3>
              <p className="th-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'resist' && (
        <div className="th-section">
          <p className="th-intro">Svaret på transhumanisme er ikke frygt — det er at vende tilbage til hvad vi er: bevidste, biologiske, åndelige væsener.</p>
          {[
            { title: 'Hvad Er Vi Egentlig?', text: 'Transhumanisme definerer mennesket som en biologisk computer der kan opgraderes.\n\nStargate\'s perspektiv: Mennesket er et ÅNDELIGT væsen i en biologisk krop — ikke omvendt.\n\nNag Hammadi: "Du er af Lysets natur — kroppen er midlertidig"\nAdvaita Vedanta: "Du er Brahman — uendeligt, frit, tidløst"\nSufisme: "Fana — opløsning af ego i det guddommelige — er den virkelige transcendens"\n\nSand transhumanisme er BEVIDSTHEDSVÆKST — ikke hardware-opgradering.' },
            { title: 'Praktisk Modstand', text: 'Teknologisk suverænitet:\n• Open source software når muligt\n• Lokal datalagring frem for cloud\n• Hardware der kan repareres og ejes\n• Undgå wearables der uploader biometrisk data\n\nBiologisk suverænitet:\n• Din krop er ikke et platform for teknologi\n• Ret til at nægte medicinsk eksperimentering\n• Ret til at leve analog\n\nÅndelig modstand:\n• Meditation og bevidsthed er den teknologi der virkelig frigør\n• Du behøver ikke en chip for at kommunikere med dit Højere Selv\n• Naturen, kærlighed og forbundethed er den ægte "upgrade"' },
          ].map(s => (
            <div key={s.title} className="th-card">
              <h3 className="th-card-title">{s.title}</h3>
              <p className="th-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
          <button className="th-cta" onClick={() => nav('/consciousness')}>
            3D → 5D — Den virkelige transcendens →
          </button>
        </div>
      )}
    </div>
  )
}
