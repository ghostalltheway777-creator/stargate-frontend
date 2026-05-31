import React, { useState } from 'react'
import './CovidScam.css'

const TABS = [
  { id: 'overview',     label: '🦠 Overblik' },
  { id: 'shakespeare',  label: '🎭 Shakespeare' },
  { id: 'vaccines',     label: '💉 Vaccineskader' },
  { id: 'gates',        label: '⚖️ Gates Retssag' },
  { id: 'hanta',        label: '🧬 Hanta Virus' },
  { id: 'distraction',  label: '🎪 Aflede Opmærksomhed' },
  { id: 'frequency',    label: '∿ Frekvens & Sundhed' },
]

export default function CovidScam() {
  const [tab, setTab] = useState('overview')

  return (
    <div className="cs-page">
      <div className="cs-hero">
        <div className="cs-icon">🦠</div>
        <h1 className="cs-title">COVID-19</h1>
        <p className="cs-sub">Det Største Bedrageri i Menneskelighedens Historie</p>
        <div className="cs-disclaimer">Alt indhold er baseret på offentligt tilgængelige dokumenter, retssager og forskning</div>
      </div>

      <div className="cs-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`cs-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="cs-section">
          <div className="cs-alert">
            <p>"Den der kontrollerer sundhedskrisen kontrollerer befolkningen. Den der kontrollerer vaccinen kontrollerer fremtiden."</p>
          </div>

          {[
            {
              icon: '📊',
              title: 'De tal de ikke ville vise dig',
              text: 'IFR (Infection Fatality Rate) for COVID-19 uden komorbiditeter under 70 år: 0.05%\n→ Identisk med en normal influenzasæson.\n\nGennemsnitsalder for COVID-dødsfald: 82 år — over den gennemsnitlige levealder.\n\n75% af alle "COVID-dødsfald" i USA havde 4+ komorbiditeter ifølge CDC\'s egne data.\n\nHospitaler modtog $13.000 for hvert "COVID-indlagt" patient og $39.000 for hvert "COVID-dødsfald" på respirator. Incitamentet til at manipulere tallene var enormt.',
              src: 'CDC WONDER Database, CMS COVID-19 Hospitalization Payments'
            },
            {
              icon: '🎭',
              title: 'PCR-testen — designet til at fejle',
              text: 'Kary Mullis — opfinderen af PCR-testen — sagde direkte inden sin død (august 2019, måneder inden COVID): "PCR testen er IKKE designet til at diagnosticere infektionssygdomme. Den er et laboratorieredskab, ikke en diagnostisk test."\n\nVed 35+ amplifikationscyklusser (Ct-værdier) finder PCR-testen fragmenter af gammelt viralt materiale, støv og tilfældig RNA. De fleste laboratorier kørte på 40-45 cyklusser.\n\nWHO ændrede stille og roligt PCR-protokollen dagen efter Bidens indsættelse i januar 2021 — pludselig faldt "positive" test dramatisk.',
              src: 'WHO PCR memo, January 20, 2021 — Kary Mullis interviews 1993'
            },
            {
              icon: '🏥',
              title: 'Remdesivir — det dræbte patienterne',
              text: 'Remdesivir (Fauci\'s foretrukne COVID-behandling) dræbte 54% af Ebola-patienter i et 2018-studie og blev afbrudt. Det brugte WHO alligevel som primær COVID-behandling.\n\nBivirkning #1: Akut nyreskade → akkumulering af væske i lungerne → "COVID pneumonia".\n\nPatienter dræbtes af behandlingen, ikke af COVID. Protokollen forhindrede aktiv behandling med Ivermectin og HCQ — begge billige, generiske lægemidler med dokumenteret effekt.',
              src: 'NEJM Remdesivir trial 2018, WHO Solidarity Trial results'
            },
            {
              icon: '🔇',
              title: 'Censurens anatomi',
              text: 'The Great Barrington Declaration (oktober 2020): Tre af verdens mest citerede epidemiologer (Harvard, Stanford, Oxford) erklærede lockdowns som videnskabeligt fejlagtige og katastrofale.\n\n→ Censureret af Google inden for timer\n→ Facebook og YouTube slettede alle opslag\n→ NIH\'s Francis Collins emailede Fauci: "Lav et hurtigt take-down af disse rogue epidemiologists"\n\nDen email eksisterer. Den blev frigivet via FOIA.',
              src: 'FOIA Collins/Fauci emails, November 2021'
            },
          ].map(s => (
            <div key={s.title} className="cs-card">
              <div className="cs-card-icon">{s.icon}</div>
              <h3 className="cs-card-title">{s.title}</h3>
              <p className="cs-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              <p className="cs-card-src">📄 {s.src}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'shakespeare' && (
        <div className="cs-section">
          <div className="cs-alert">
            <p>"The whole world is a stage" — William Shakespeare, As You Like It, 1599</p>
          </div>

          <div className="cs-big-card">
            <h2 className="cs-big-title">Den første vaccinerede i verden hed William Shakespeare</h2>
            <p className="cs-big-text">Den 8. december 2020 — den allerførste dag COVID-19 vaccinen blev givet til offentligheden i UK — var den første modtager en 81-årig mand ved navn <strong>William Shakespeare</strong>.</p>
            <p className="cs-big-text">Ikke et pseudonym. Ikke et tilfælde ifølge mange analytikere. Hans fulde navn — identisk med verdens mest berømte dramatiker, der gav verden sætningen: <em>"All the world's a stage, and all the men and women merely players."</em></p>
          </div>

          {[
            {
              title: 'Den frimureriske kode',
              text: 'I frimureri er "The World is a Stage" et fundamentalt princip — verden er et teater, og de indviede er instruktørerne. Mange frimurere tror de bogstaveligt talt sætter scenen for menneskelighedens drama.\n\nAt vælge en mand ved navn "William Shakespeare" som verdens første vaccinerede person sendte en skjult besked til dem med øjne at se: Dette er et stykke. Vi sætter scenen. I er skuespillerne.',
            },
            {
              title: 'Skuespilleren på Hanta-skibet',
              text: 'Under Diamond Princess cruise-skibets COVID-udbrud i februar 2020 — der blev brugt til at begrunde verdens første lockdowns — optrådte en australsk skuespiller som "ekspert" og udtalte sig om virussens farlighed.\n\nDen samme skuespiller dukkede op i COVID-vaccinereklamer måneder senere. Samme ansigt. Nyt "ekspert"-rolle.\n\nEr det bevist? Nej. Er det dokumenteret og undersøgt af hundredtusinder online? Ja.',
            },
            {
              title: 'Hvad giver det mening til',
              text: 'Frimurere tror på "hidden in plain sight" — det sande budskab skjules i det åbenlyse. De der ser, ser. De der ikke ser, er stadig på scenen som skuespillere.\n\nWilliam Shakespeare som verdens første vaccinerede er enten det mest extraordinære tilfælde i verdenshistorien — eller en bevidst kode sendt til dem der har øjne at se.',
            },
          ].map(s => (
            <div key={s.title} className="cs-card">
              <h3 className="cs-card-title">{s.title}</h3>
              <p className="cs-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'vaccines' && (
        <div className="cs-section">
          <div className="cs-stat-row">
            {[
              ['1.6M+', 'Alvorlige bivirkninger rapporteret til VAERS (USA)'],
              ['36.000+', 'Dødsfald efter vaccination rapporteret til VAERS'],
              ['40%', 'Stigning i overdødelighed 18-64 år (2021, forsikringsdata)'],
            ].map(([num, label]) => (
              <div key={num} className="cs-stat">
                <div className="cs-stat-num">{num}</div>
                <div className="cs-stat-label">{label}</div>
              </div>
            ))}
          </div>

          {[
            {
              title: 'mRNA — aldrig testet på mennesker før',
              text: 'COVID-19 vaccinen var den første mRNA-vaccine nogensinde godkendt til mennesker. Teknologien havde fejlet i alle tidligere dyreforsøg — mus og fritter udviklede autoimmune sygdomme.\n\nNormalt tager vaccine-udvikling 10-15 år. COVID-vaccinen tog 9 måneder med "Emergency Use Authorization" — en tilladelse der kræver at der INGEN alternativer eksisterer. Ivermectin og HCQ fungerede — men blev aktivt bekæmpet for at bevare EUA-statusen.',
              src: 'FDA EUA requirements, Pfizer trial data'
            },
            {
              title: 'Myocarditis — hjertemuskelinflamation',
              text: 'Særligt hos unge mænd (16-24 år) viste sig en dramatisk stigning i myocarditis — hjertemuskelinflamation — efter COVID-vaccination.\n\nStanford-studie 2022: Risikoen for myocarditis fra vaccinen hos unge mænd var 4-28x højere end risikoen for COVID-hospitalisering.\n\nMyocarditis-ar er permanente. Hvert ar øger risikoen for pludselig hjertedød.',
              src: 'Stanford/Kaiser study on myocarditis, JAMA 2022'
            },
            {
              title: 'Turbo-cancer — akkelereret kræft',
              text: 'Onkologer verden over rapporterer om en hidtil uset stigning i aggressive, hurtigt voksende kræftformer hos vaccinerede patienter — kaldet "turbo-cancer".\n\nHypotesen: mRNA-sekvensen kan indsætte fragmenter i cellernes DNA via reverse transkription. Spike-proteinet alene er påvist at undertrykke p53 — kroppens primære kræftundertrykkende mekanisme.\n\nLægemiddelvirksomhederne har immunitet mod retssager. Bivirkningsofre har ingen adgang til kompensation.',
              src: 'Dr. Ryan Cole, Dr. Peter McCullough testimony — US Senate'
            },
            {
              title: 'Excess Deaths — overdødelighed',
              text: 'Edward Dowd, tidligere BlackRock analytiker og Wall Street ekspert:\n\n"Forsikringsdata lyver ikke. Vi ser i 2021-2022 en 40% stigning i overdødelighed hos arbejdsdygtige amerikanere (18-64 år). Det er en 5-sigma afvigelse. Det er en katastrofe."\n\nIngen pandemi, ingen krig, ingen naturkatastrofe kan forklare disse tal. Det eneste der ændrede sig i 2021 for den aldersgruppe: vaccinemandater.',
              src: 'Edward Dowd: Cause Unknown (2022), Society of Actuaries report'
            },
          ].map(s => (
            <div key={s.title} className="cs-card">
              <h3 className="cs-card-title">{s.title}</h3>
              <p className="cs-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="cs-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'gates' && (
        <div className="cs-section">
          <div className="cs-alert" style={{borderColor:'rgba(255,80,80,0.3)'}}>
            <p>⚖️ Der kører aktive retssager mod Bill Gates og WHO i flere lande. Ingen mainstream medier dækker det.</p>
          </div>

          {[
            {
              title: 'International Criminal Court — Rom Statuttens Artikel 7',
              text: 'I 2021 indgav Dr. Reiner Füllmich og hans team af 1000+ advokater og videnskabsfolk fra 40+ lande en anmeldelse til ICC (International Criminal Court) for forbrydelser mod menneskeheden.\n\nAnklagen: Bevidst spredning af falsk information (PCR-krise), eksperimenter på mennesker uden samtykke, og organiseret suppression af effektiv behandling for at fremme vaccineprogrammet.',
              src: 'Füllmich ICC filing, 2021'
            },
            {
              title: 'Gates Foundation & WHO — Finansiel Kontrol',
              text: 'Bill & Melinda Gates Foundation er WHO\'s 2. største finansielle bidragyder — større end de fleste landes nationale bidrag.\n\nGates har offentligt sagt at investering i vacciner er den bedste ROI (return on investment) han har lavet: "For hvert dollar investeret i vacciner, får vi $20 tilbage."\n\n$20 tilbage. Han beskriver folkesundhed som en investering med afkast. GAVI — Gates Alliance for Vaccines — kontrollerer vaccineprogrammer i 57 lande.',
              src: 'Gates TED talk 2011, WHO financial reports'
            },
            {
              title: 'India — Supreme Court og Gates Foundation',
              text: 'Indiens Højesteret undersøger Bill Gates\' rolle i et polio-vaccineprogram i Indien (2000-2017) der resulterede i 491.000 tilfælde af paralytisk polio hos børn — en sygdom der var næsten elimineret.\n\nThe Indian Medical Association anklagede formelt Gates Foundation for medicinsk negligence.\n\nIngen mainstream medier dækkede det. Google censurerede søgeresultater om sagen i Indien.',
              src: 'Indian Supreme Court, Indian Medical Association statement 2017'
            },
            {
              title: 'Event 201 — Øvelses-pandemien',
              text: 'Den 18. oktober 2019 — måneder inden COVID — afholdt Bill Gates Foundation, Johns Hopkins og World Economic Forum en øvelse kaldet "Event 201".\n\nScenario: En coronavirus pandemi starter i Kina, spredes globalt. Øvelsen simulerede præcist hvad der skete måneder senere — herunder social media censur, mandatorisk vaccination og global economic disruption.\n\n"Det er bare en øvelse" — men hvem øver sig på præcis den katastrofe der sker 3 måneder later?',
              src: 'Johns Hopkins Event 201 documentation, October 18, 2019'
            },
          ].map(s => (
            <div key={s.title} className="cs-card">
              <h3 className="cs-card-title">{s.title}</h3>
              <p className="cs-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              <p className="cs-card-src">📄 {s.src}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'hanta' && (
        <div className="cs-section">
          {[
            {
              icon: '🧬',
              title: 'Hanta Virus — Vaccinen var klar et år i forvejen',
              text: 'Hanta virus (hantavirus) dukker op i nyhederne med jævne mellemrum som "næste potentielle pandemi".\n\nI 2019 — et år inden COVID — annoncerede Inovio Pharmaceuticals at de havde en hantavirus-vaccine "klar til klinisk test".\n\nEt år. Vaccinen var klar et år inden nogen talte om en pandemi. Den eneste måde det er muligt: man vidste hvad der kom, eller man planlagde hvad der skulle komme.',
              src: 'Inovio Pharmaceuticals press release, 2019'
            },
            {
              icon: '📖',
              title: '"Hanta" — Betydning på Hebraisk',
              text: 'På hebraisk er "הנאה" (hanah/hana\'ah) direkte oversat: glæde, profit, fordel — brugt i konteksten af uberettiget gevinst, svig, bedrag.\n\nSom COVID (hebr. "כה" = her, nu + "וד" = bekendtgørelse → "bekendtgørelse nu/her") er navngivningen interessant for dem der kender sproget.\n\nEr det bevidst? Er det tilfælde? Mønsteret gentager sig.',
            },
            {
              icon: '📋',
              title: 'Skuespilleren på Hanta-skibet',
              text: 'Diamond Princess cruiseskibet (februar 2020) var den første store "super-spreader event" og blev brugt til at begrunde verdens første lockdowns.\n\nEn australsk mand der identificerede sig som passager gav interviews til internationale medier og beskrev den kaotiske situation om bord.\n\nDen samme mand dukkede op i australske TV-reklamer for COVID-vaccinen måneder senere som "almindelig australianer der anbefaler vaccinen".\n\nSame ansigt. Ny rolle. Det er hvad skuespillere gør.',
            },
          ].map(s => (
            <div key={s.title} className="cs-card">
              <div className="cs-card-icon">{s.icon}</div>
              <h3 className="cs-card-title">{s.title}</h3>
              <p className="cs-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="cs-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'distraction' && (
        <div className="cs-section">
          <div className="cs-alert">
            <p>"Når de vil begrave en skandale — starter de en krig. Når de vil begrave en krig — starter de en pandemi. Når de vil begrave en pandemi — frigiver de UAP dokumenter." — Mønsteret er forudsigeligt.</p>
          </div>

          {[
            {
              icon: '📁',
              title: 'Epstein Filerne — Hvad de ikke vil du ser',
              text: 'Jeffrey Epstein\'s klientliste indeholder navne fra den absolutte globale elite — politikere, kongelige, tech-milliardærer, mediepersonligheder.\n\nFilerne blev forseglet i årevis. Da de endelig begyndte at blive frigivet i 2024 — hvad skete der samme uge?\n\n→ Ukraine krise eskalerede til nye højder\n→ Mystisk ny virus-variant annonceret\n→ "UFO/UAP hearings" fik massiv medieopmærksomhed\n→ AI-regulering krise dominerede nyhederne\n\nEliten kontrollerer nyhedscyklussen. Epstein-listen begræves i støj.',
              src: 'PACER court documents, Maxwell trial exhibits 2021-2024'
            },
            {
              icon: '👽',
              title: 'UFO/UAP Disclosure — Timing er alt',
              text: 'I 2023 — midt i de første Epstein-filernes frigivelse — holdt David Grusch sin historiske UAP whistleblower-hearing i Kongressen.\n\nEr UAP\'er reelle? Sandsynligvis ja. Men TIMINGEN af den massive mainstream media-dækning?\n\nDavid Grusch selv sagde: "Non-human intelligence er real." Men han sagde OGSÅ: "Jeg er bekymret for at visse afsløringer bruges til at aflede fra jordiske magtstrukturer."\n\nDen mand der afslørede UAP\'erne advarede selv om at det bruges som distraktion.',
              src: 'Grusch Congressional testimony, July 26, 2023'
            },
            {
              icon: '🦠',
              title: 'Næste Pandemi — Altid klar i kulissen',
              text: 'Disease X — WHO\'s kodeord for "den næste ukendte pandemi" — blev massivt mediepromoveret i januar 2024 ved World Economic Forum i Davos.\n\nSamme uge: Epstein-dokumenter frigivet.\n\nMpox (Monkeypox) "nødssituation" annonceret: August 2024.\nSamme uge: Yderligere Epstein-navne skulle offentliggøres.\n\nDette er ikke teori. Det er dokumenterbar timing du kan verificere selv via nyhedsarkiver.',
            },
            {
              icon: '💡',
              title: 'Verden Sover Ikke Længere',
              text: 'Eliten ved det. Det er derfor de er desperate.\n\nI 2009 kontrollerede 6 medieselskaber 90% af alle amerikanske medier.\nI 2024 er alternativ-medierne større end mainstream på mange platforme.\n\nRFK Jr. fik 15% ved primærvalget som independant — usynlig i mainstream.\nElon Musk frigivede "Twitter Files" — bevist censur-koordination.\nFOIA-anmodninger afslørede Fauci/Collins emails om Great Barrington.\n\nDe kan stadig styre narrativet. Men de kan ikke længere slette sandheden. Den spreader sig hurtigere end de kan censurere.\n\n✦ Du er ikke alene. Millioner vågner op.',
            },
          ].map(s => (
            <div key={s.title} className="cs-card">
              <div className="cs-card-icon">{s.icon}</div>
              <h3 className="cs-card-title">{s.title}</h3>
              <p className="cs-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="cs-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'frequency' && (
        <div className="cs-section">
          <div className="cs-alert" style={{borderColor:'rgba(80,200,150,0.3)', background:'rgba(80,200,150,0.06)'}}>
            <p style={{color:'rgba(255,255,255,0.8)'}}>Medicinen ved det. 440 Hz underminer dit immunsystem. 432 Hz styrker det. Systemet tjener på din sygdom.</p>
          </div>

          {[
            {
              title: 'Immunsystemet kører på frekvens',
              text: 'Dr. Royal Raymond Rife (1930erne): Opdagede at specifikke elektromagnetiske frekvenser dræber specifikke patogener — inkl. kræftceller — uden at skade sundt væv.\n\nHan helbredte 16 af 16 terminal kræftpatienter i et 1934-studie observeret af American Medical Association.\n\nI 1939 blev hans laboratorium brændt ned. Hans forskning forsøgte at blive slettet. I dag er "Rife-frekvens terapi" stadig officielt afvist.',
              src: 'Rife Research Group, AMA correspondence 1934'
            },
            {
              title: '440 Hz og stresshormoner',
              text: 'Nyere forskning fra dr. Leonard Horowitz og dr. Len Horowitz: 440 Hz aktiverer amygdala (frygtcentret) og adrenalproduktionen i højere grad end 432 Hz.\n\nEn befolkning der lytter til musik tunet til 440 Hz 8+ timer dagligt er en befolkning i kronisk subliminal stress.\n\nKronisk stress = svækket immunsystem = mere sygdom = mere medicin.\n\nRockefeller finansierede 440 Hz standarden i 1953. Rockefeller finansierede den moderne farmaceutiske industri.',
              src: 'Horowitz, Lorenzen: Musical cult control (2011)'
            },
            {
              title: 'Hvad du kan gøre',
              text: '• Konverter din musik til 432 Hz (brug vores 432 Hz Konverter)\n• Brug 528 Hz til meditation (DNA-reparation frekvens)\n• Undgå kronisk baggrundsstøj — dit nervesystem behandler det konstant\n• Synge og nynne: din stemme producerer helende frekvenser direkte i din krop\n• Naturlyde: vand, fugle, vind — alle resonerer naturligt nær 432 Hz\n\nDin sundhed starter med din frekvens. Systemet ved det. Spørgsmålet er om du gør.',
            },
          ].map(s => (
            <div key={s.title} className="cs-card">
              <h3 className="cs-card-title">{s.title}</h3>
              <p className="cs-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="cs-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
