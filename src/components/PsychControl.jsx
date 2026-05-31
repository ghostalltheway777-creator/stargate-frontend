import React, { useState } from 'react'
import './PsychControl.css'

const TABS = [
  { id: 'pharma',  label: '💊 Big Pharma' },
  { id: 'freud',   label: '🧠 Freud & Kontrol' },
  { id: 'adhd',    label: '⚡ ADHD Myten' },
  { id: 'porn',    label: '🔒 Pornografi' },
  { id: 'media',   label: '📺 Social Medie Hjerne' },
]

export default function PsychControl() {
  const [tab, setTab] = useState('pharma')

  return (
    <div className="pc-page">
      <div className="pc-hero">
        <div className="pc-icon">🧠</div>
        <h1 className="pc-title">Psykologi som Kontrolsystem</h1>
        <p className="pc-sub">Farmaceutisk sindsygdom · Freud · ADHD · Pornografi · Social medie afhængighed</p>
      </div>

      <div className="pc-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`pc-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'pharma' && (
        <div className="pc-section">
          <p className="pc-intro">Big Pharma tjener ikke på raske mennesker. De tjener på folk der er syge og afhængige af medicin. Det er en forretningsmodel — ikke en helbredelsesmodel.</p>
          {[
            { title: 'Depression-Industrien', text: '1 ud af 5 voksne danskere tager antidepressiva.\n\nSSRI-teorien (serotonin-mangel-teorien): Publiceret 2022 metastudie i Molecular Psychiatry: Der er INGEN evidens for at depression skyldes lav serotonin. Teorien er forkert — men bruges stadig til at sælge milliarder i piller.\n\nFluoxetin (Prozac): Indeholder FLUOR + petroleum-komponenter · Kronisk brug reducerer følelsesrespons · Seksuelle bivirkninger hos 70%+ · Afhængighed der kan tage år at nedtrappe\n\nNaturlige alternativer der VIRKER:\n• St. John\'s Wort: Dokumenteret lige så effektiv som SSRI i milde/moderate tilfælde\n• Magnesium: Manko hos 70%+ af deprimerede\n• Vitamin D: Solforsøg viser 50% reduktion i depression\n• Gut healing: 80% af serotonin produceres i tarmen' },
            { title: 'DSM — Diagnosebibelen', text: 'DSM (Diagnostic and Statistical Manual) = Big Pharma\'s ordreskabelon.\n\nDSM-I (1952): 106 diagnoser\nDSM-III (1980): 265 diagnoser\nDSM-5 (2013): 541 diagnoser\n\nHver ny udgave tilføjer diagnoser = nye markeder for medicin.\n\nAlan Frances (chefredaktør for DSM-IV): "Vi skabte diagnoser der ikke eksisterede og medicaliserede normal menneskelig adfærd"\n\nHomoseksualitet var en DSM-diagnose indtil 1973.\nSorg efter dødsfald er nu en DSM-diagnose ("Prolonged Grief Disorder") efter 1 år.' },
          ].map(s => (
            <div key={s.title} className="pc-card">
              <h3 className="pc-card-title">{s.title}</h3>
              <p className="pc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'freud' && (
        <div className="pc-section">
          <p className="pc-intro">Sigmund Freud's nevø Edward Bernays brugte psykologien til at manipulere masserne. PR og reklame er direkte afkom af Freuds teorier — brugt som kontrolværktøj.</p>
          {[
            { title: 'Freud → Bernays → Massekontrol', text: 'Edward Bernays (Freuds nevø): Opfandt moderne PR og propaganda.\n\nBernays Bog "Propaganda" (1928): "Den bevidste og intelligente manipulation af organiserede vaner og meninger i masserne er et vigtigt element i demokratisk samfund."\n\nHan brugte Freuds teorier til:\n• Sælge kvinder cigaretter ved at kalde dem "Torches of Freedom"\n• Overbevise USA om at spise bacon til morgenmad (betalt af kødindustrien)\n• Organisere Guatemalas kup 1954 for United Fruit Company\n\nHitler brugte Bernays\' bog "Crystallizing Public Opinion" som håndbok — ifølge Bernays\' egen biografi.' },
            { title: 'Psykologi som Statsinstrument', text: 'MK Ultra (CIA 1953-1973): Eksperimenterede med LSD, hypnose, elektrochok og tortur på intetanende borgere for at opnå "mind control"\n\nOperation Mockingbird: CIA infiltrerede medier og brugte psykologiske principper til at forme offentlig mening\n\nTAVISTOCK Institute (London): Britisk think-tank der har studeret massemanipulation siden WWII · Influerede reklameindustri, uddannelse og politisk kommunikation\n\nNudging: Cass Sunstein (Obama\'s regulatory czar): Brug af psykologiske "skubs" til at styre befolkningens adfærd uden lovgivning · Nu officiel government-politik i UK, Danmark og USA' },
          ].map(s => (
            <div key={s.title} className="pc-card">
              <h3 className="pc-card-title">{s.title}</h3>
              <p className="pc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'adhd' && (
        <div className="pc-section">
          <p className="pc-intro">ADHD er verdens mest medicinerede "lidelse" hos børn. Er det en epidemi — eller er det normal børneadfærd medicaliseret for profit?</p>
          {[
            { title: 'ADHD Tallene', text: '1990: 1% af børn diagnosticeret med ADHD\n2023: 11% af alle børn i USA diagnosticeret\n\nSamme biologiske hjerne. Samme genetik. 11× stigning på 33 år.\n\nADHD-medicin (Ritalin, Concerta, Adderall) = amfetamin-derivater.\nLegalitet: Identiske kemiske virkninger som kokain og crack — men i lavere dosis.\n\nDet globale ADHD-medicinmarked: $20+ milliarder om året.' },
            { title: 'Hvad er det Egentlig?', text: 'Leon Eisenberg — "faderen til ADHD": Sagde i det sidste interview inden sin død (2009): "ADHD er en fabrikeret sygdom. Det er et primært sociologisk fænomen."\n\nMulige ÅRSAGER til ADHD-lignende adfærd:\n• Skærme og sociale medier (dopamin-dysregulation)\n• Dårlig søvn\n• Sukkerholdige og forarbejdede fødevarer\n• For lidt udetid og bevægelse\n• Skolestrukturer der ikke passer drenge\n• Fluorid og pesticider der påvirker neuroudvikling\n• Omega-3 mangel\n\nJapan og Frankrig har markant lavere ADHD-diagnoser — samme børn, andre diagnosekulturer og kostmønstre.' },
            { title: 'Naturlige Alternativer', text: 'Forskning viser disse hjælper:\n• Omega-3 (EPA/DHA): 10+ studier viser forbedring i fokus og adfærd\n• Eliminer kunstige farvestoffer og tilsætningsstoffer\n• Fysisk aktivitet 60 min dagligt = samme effekt som lav dosis Ritalin\n• Mindfulness og meditation\n• Skærmtid under kontrol\n• Protein til morgenmad\n• Magnesium + Zink (manko forbundet med ADHD)\n• Ginkgo Biloba + Bacopa Monnieri\n\nFøre medicin: Prøv 90 dage kost + motion + søvn + naturmedicin.' },
          ].map(s => (
            <div key={s.title} className="pc-card">
              <h3 className="pc-card-title">{s.title}</h3>
              <p className="pc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'porn' && (
        <div className="pc-section">
          <p className="pc-intro">Pornografi er ikke bare underholdning. Det er et neurovidenskabeligt eksperiment på dig uden dit samtykke — og det omformer din hjerne.</p>
          {[
            { title: 'Hvad Pornografi Gør ved Hjernen', text: 'Pornografi aktiverer det samme dopaminsystem som kokain.\n\nVed gentagen eksponering:\n• Dopaminreceptorer nedreguleres → du har brug for stærkere stimuli\n• Præfrontal cortex (impulskontrol) svækkes\n• Amygdala (frygt/belønning) overtager\n\nNofap-bevægelsen: 100.000+ mænd rapporterer: Mere energi · Bedre fokus · Mere selvtillid · Stærkere libido med rigtige partnere · Reduceret angst\n\nTestosteron: 7 dages afholdenhed øger testosteron med 45% (kinesisk studie, 2003)' },
            { title: 'Pornografi som Kontrol', text: 'Pornografi er bevidst designet til afhængighed — ikke til tilfredsstillelse.\n\n"The most efficient mind control device ever created" — konspirationsteoretikere OG neuroscientister er enige om den neurovidenskabelige effekt.\n\nBIG PORN: Pornhub ejet af MindGeek → solgt til Ethical Capital Partners. Men modellen: Gratis = reklamefinansieret = algoritme designet til eskalering.\n\nGoldman Sachs rapport: Pornografi er en $97 milliard global industri.\n\nNormer: Studier viser at unge mænd der ser meget porn forventer ting af rigtige relationer der er urealistiske og skader intime forbindelser.' },
          ].map(s => (
            <div key={s.title} className="pc-card">
              <h3 className="pc-card-title">{s.title}</h3>
              <p className="pc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'media' && (
        <div className="pc-section">
          <p className="pc-intro">Sociale medier er designet af adfærdspsykologer og neuroscientister for at maksimere afhængighed og manipulere dine følelser.</p>
          {[
            { title: 'Designet til Afhængighed', text: 'Sean Parker (Facebooks første præsident): "We consciously designed this to be addictive. God only knows what it\'s doing to our children\'s brains."\n\nTristram Harris (ex-Google): Kaldte sig selv "Human Downgrading" forsker. Forklarede at Silicon Valley bruger de samme teknikker som Las Vegas-kasinoer:\n• Variable belønning (like-notifikationer = slotmaskine)\n• Social validering loops\n• Uendelig scroll (fjerner naturlige stop-signaler)\n• FOMO (fear of missing out)' },
            { title: 'Følelsesmanipulation i Real-Time', text: 'Facebook Emotional Contagion Study (2014): Skjult eksperiment på 689.003 brugere. Manipulerede hvad de så i newsfeed for at se om det påvirkede deres følelser.\n\nResultat: Det virkede. Folk der så negative opslag blev mere negative.\n\nFacebook vidste at teenagepiger der brugte Instagram blev mere deprimerede (interne rapporter 2021) — og skjulte det.\n\nMeta betaler nu milliarder i søgsmål fra forældre der mener platformene er skyld i deres børns selvskade og selvmord.' },
            { title: 'Frihed fra Algoritmen', text: 'Hvad virker:\n• Slet alle sociale medie-apps fra telefonen — brug browser-version (ingen notifikationer)\n• Gråskala skærm: Farver øger app-brug 30%\n• Ingen telefon i soveværelset\n• Digital faste: 1 dag om ugen uden skærm\n• Erstat scroll med: Bog · Walk i natur · Samtale · Kreativ aktivitet\n\nJordan Peterson: "Ryd dit rum" — men start med at rydde dit digitale rum\n\nDu er ikke "på" sociale medier. Sociale medier er "på" dig.' },
          ].map(s => (
            <div key={s.title} className="pc-card">
              <h3 className="pc-card-title">{s.title}</h3>
              <p className="pc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
