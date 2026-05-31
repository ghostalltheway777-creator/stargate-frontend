import React, { useState } from 'react'
import './ModernSlavery.css'

const TABS = [
  { id: 'design',    label: '⛓ Systemets Design' },
  { id: 'rockefeller', label: '🛢 Rockefellers Plan' },
  { id: 'time',      label: '⏰ Din Tid Stjæles' },
  { id: 'disconnect', label: '✂️ Frakobling fra Gud' },
  { id: 'jesus',     label: '✝️ Hvad Jesus Faktisk Lærte' },
  { id: 'reconnect', label: '✦ Genopkobling' },
]

export default function ModernSlavery() {
  const [tab, setTab] = useState('design')

  return (
    <div className="ms-page">
      <div className="ms-hero">
        <div className="ms-icon">⛓</div>
        <h1 className="ms-title">Det Moderne Slavesystem</h1>
        <p className="ms-sub">Designet til at holde dig fattig, optaget og frakoblet</p>
      </div>

      <div className="ms-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`ms-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'design' && (
        <div className="ms-section">
          <div className="ms-alert">
            <p>"De bedste slaver er dem der tror de er frie."<br/>
            <cite>— Goethe</cite></p>
          </div>

          {[
            {
              icon: '🔗',
              title: 'Slaveri 1.0 vs 2.0',
              text: 'Gammelt slaveri (1.0):\n• Fysiske lænker\n• Åbent ejerforhold\n• Slaven vidste han var slave\n• Ekstremt synligt — vakte modstand og revolution\n\nModerne slaveri (2.0):\n• Gæld som lænker\n• Skjult ejerforhold via løn og skatter\n• Slaven tror han er fri\n• Fuldstændig usynligt — vækker ingen modstand\n\nRockefeller sagde det direkte:\n"Jeg ønsker ikke en nation af tænkere. Jeg ønsker en nation af arbejdere."\n\nSystemet er ikke kapitalisme der gik galt. Det er slaveri der lykkedes.',
            },
            {
              icon: '📐',
              title: 'De Tre Lænker',
              text: 'LÆNKE 1 — GÆLD:\nBil-lån, boliglån, studiegæld, kreditkort. Gennemsnitsdanskeren er 50+ år om at betale sin bolig og betaler den dobbelte pris i renter. Du arbejder de første 15-20 år af dit voksenliv for banken.\n\nLÆNKE 2 — SKAT:\nI Danmark betaler gennemsnitsborgeren 50-60% i direkte og indirekte skat. Du arbejder januar-Juli for staten. Først august begynder du at arbejde for dig selv.\n\nLÆNKE 3 — FORBRUG:\nReklame-industrien bruger milliarder på at gøre dig utilfreds med hvad du har. Du køber for at fylde det tomrum som systemet skabt. Du arbejder mere for at købe mere. Cirklen er lukket.',
            },
            {
              icon: '🏭',
              title: 'Designet fra Bunden',
              text: 'Det moderne arbejdsmarked er ikke opstået naturligt. Det er bevidst designet:\n\n• 8-timers arbejdsdag (Ford): Ikke for at give frihed — for at standardisere produktionen\n• Weekenden (Roosevelt): Givet af frygt for socialistisk revolution — ikke af godhed\n• Pension (Bismarck 1889): Sat til 70 år da gennemsnitslevealderen var 45 år — ingen forventedes at nå den\n• Indkomstskat (USA 1913): Samme år som Fed Reserve oprettedes — ikke tilfældigt\n• Forbrugerkreditten (1950erne): Skabt til at gøre folk gældsslaver via "køb nu, betal senere"\n\nHvert element er et led i en kæde. Kæden holder dig på plads.',
              src: 'Thorstein Veblen: "The Theory of the Leisure Class" (1899)'
            },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <div className="ms-card-icon">{s.icon}</div>
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="ms-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'rockefeller' && (
        <div className="ms-section">
          <div className="ms-alert">
            <p>"Jeg ønsker ikke en nation af tænkere. Jeg ønsker en nation af arbejdere."<br/>
            <cite>— John D. Rockefeller, General Education Board, 1906</cite></p>
          </div>

          {[
            {
              icon: '🛢',
              title: 'Rockefeller — Manden der Designede Dit Liv',
              text: 'John D. Rockefeller (1839-1937) var USA\'s første milliardær via Standard Oil. Da monopollovene truede hans imperium skiftede han strategi:\n\nI stedet for at kontrollere olie — ville han kontrollere MENNESKERNE der drev økonomien.\n\nHan grundlagde General Education Board (1903) og investerede enorme summer i at omforme uddannelsessystemet.\n\nHans rådgiver Frederick Taylor Gatt dokumenterede planen:\n\n"Vi vil forme og forme og forme børnene og vi vil prøve at fuldstændiggøre dem ikke for hvad forældrene ønsker men for hvad staten ønsker."',
              src: 'General Education Board: "Occasional Papers No. 1" (1906)'
            },
            {
              icon: '🏫',
              title: 'Uddannelsessystemets Egentlige Formål',
              text: 'Rockefellers uddannelsesreform indførte:\n\n• Standardiseret curriculum — alle lærer det samme, tænker det samme\n• Klokke-systemet — lærer lydighed til arbejdstider\n• Karakterer — lærer at stræbe efter ekstern validering ikke indre viden\n• Fravær af praktisk selvforsyning — ingen landbrug, ingen håndværk, ingen selvstændighed\n• Fokus på fakta-memorering frem for kritisk tænkning\n\nJohn Taylor Gatto — New York State Teacher of the Year 1991 — sagde det brutalt:\n\n"Skoler underviser præcis hvad de er designet til at undervise i: afhængighed, passivitet, konformitet og forbrug. Det er ikke en fejl. Det er designet."\n\nBørn der ikke kan tænke selv, kan ikke stille spørgsmål til systemet.',
              src: 'John Taylor Gatto: "Dumbing Us Down" (1992); "Weapons of Mass Instruction" (2009)'
            },
            {
              icon: '💊',
              title: 'Rockefeller og Den Moderne Medicin',
              text: 'I 1910 finansierede Rockefeller Foundation Flexner Report — en gennemgang af alle amerikanske medicinstudier.\n\nResultat: Alle skoler der underviste i naturmedicin, homøopati og holistisk healing miste akkrediteringen.\n\nKun farmaceutisk medicin baseret på petrochemikalier (olieprodukter — Rockefellers industri) blev godkendt.\n\nRockefeller kontrollerede:\n• Uddannelsessystemet (hvem du er)\n• Sundhedssystemet (din krop)\n• Energisystemet (din varme og transport)\n• Banksystemet (dine penge)\n\nDette er ikke en mand der built et imperium. Det er en mand der byggede et system der fanger alle.',
              src: 'Abraham Flexner: "Medical Education in the United States and Canada" (1910); E. Richard Brown: "Rockefeller Medicine Men" (1979)'
            },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <div className="ms-card-icon">{s.icon}</div>
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="ms-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'time' && (
        <div className="ms-section">
          <div className="ms-alert">
            <p>Din tid er dit eneste ikke-fornybare aktiv. Systemet er designet til at stjæle så meget af det som muligt.</p>
          </div>

          <div className="ms-time-calc">
            <div className="ms-time-title">En gennemsnitsdanskers tid</div>
            {[
              ['Arbejde', '8 timer/dag', '33%'],
              ['Søvn', '8 timer/dag', '33%'],
              ['Pendling', '1-2 timer/dag', '6%'],
              ['Madlavning & indkøb', '1-2 timer/dag', '6%'],
              ['Husarbejde', '1 time/dag', '4%'],
              ['TV & social media', '3-4 timer/dag', '13%'],
              ['Tid til dig selv', '30-60 min/dag', '3%'],
            ].map(([act, time, pct]) => (
              <div key={act} className="ms-time-row">
                <span className="ms-time-act">{act}</span>
                <span className="ms-time-hrs">{time}</span>
                <div className="ms-time-bar-wrap">
                  <div className="ms-time-bar" style={{width: pct, background: act === 'Tid til dig selv' ? '#50cc70' : act === 'Arbejde' ? '#ff8080' : 'rgba(255,255,255,0.2)'}} />
                </div>
              </div>
            ))}
            <p className="ms-time-note">3% af din vågnende tid er din egne. Resten tilhører systemet — direkte eller indirekte.</p>
          </div>

          {[
            {
              icon: '📱',
              title: 'Social Media — Det Stjålne Sind',
              text: 'Den gennemsnitlige smartphonebruger tjekker telefonen 96 gange dagligt.\n\nDette er ikke tilfældigt. Det er algoritmisk designet addiction:\n\nSean Parker (Facebooks første præsident) sagde i 2017:\n"Vi udnyttede en sårbarhed i menneskets psykologi. Vi gav dig et lille hit af dopamin. Det er præcis den feedback-loop som sociale medier er bygget på."\n\nDu er ikke brugeren af produktet. Du ER produktet.\n\nDin opmærksomhed sælges til annoncører. Din adfærd kortlægges og manipuleres. Og mens du scroller — tænker du ikke.',
              src: 'Sean Parker interview, Axios, November 2017'
            },
            {
              icon: '💰',
              title: 'Gæld som Tidstyv',
              text: 'En gennemsnitlig dansk boligejer:\n• Køber bolig til 3 millioner\n• Betaler 6 millioner over 30 år (renter inkluderet)\n• Arbejder de første 15 år for at betale bankens renter\n\nDen første halvdel af dit arbejdsliv tilhører banken.\n\nDette er ikke et lån. Det er tidsslaveri med juridisk kontrakt.\n\nBanken skabte pengene ud af ingenting da du underskrev lånet (fractional reserve banking). De lånte dig noget de ikke havde — og du arbejder dit halve liv for at tilbagebetale det.',
            },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <div className="ms-card-icon">{s.icon}</div>
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="ms-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'disconnect' && (
        <div className="ms-section">
          <div className="ms-alert">
            <p>Alle systemets agendaer har ét fælles mål: At holde dig frakoblet fra den guddommelige energi der er din sande natur.</p>
          </div>

          {[
            {
              icon: '✂️',
              title: 'Frakobling er Designet — Ikke Tilfældig',
              text: 'Se mønsteret:\n\n• 440 Hz musik → underminer naturlig frekvens-harmoni\n• Fluorid i vand → kalcificerer pineal kirtlen (dit åndelige center)\n• Ultraproceseret mad → sænker din vibration og energi\n• Kronisk stress (gæld, arbejde) → aktiverer kamp-flugt, lukker ned for højere bevidsthed\n• Søvnmangel → fjerner adgang til drømme og ubevidst visdom\n• Skærmafhængighed → erstatter indre stilhed med ekstern støj\n• Farmaceutika (SSRI, ADHD-medicin) → dæmper spidser i bevidsthed\n\nHvert enkelt element kan forklares med profit. MEN det faktum at ALLE disse elementer konsekvent reducerer spirituel bevidsthed — det kan ikke forklares med tilfælde.',
            },
            {
              icon: '🧠',
              title: 'Videnskaben om Spirituel Kobling',
              text: 'Moderne neurovidenskab bekræfter:\n\n• Meditation øger grå masse i præfrontal cortex (empati, visdom)\n• Naturforbindelse reducerer cortisol og aktiverer parasympatisk nervesystem\n• Bøn og taknemmelighed øger serotonin og oxytocin\n• Musik ved 432 Hz synkroniserer hjernerytmer\n• Dyb søvn (delta-bølger) gennemfører cellulær reparation og spirituel integration\n\nAlt dette er gratis. Det kan ikke patenteres. Det kan ikke sælges.\n\nDet er præcis DERFOR systemet aktivt undertrykker det — og erstatter det med betalte alternativer der ikke virker.',
            },
            {
              icon: '🌍',
              title: 'Den Åndelige Frakobling er Politisk',
              text: 'En befolkning der er spirituelt forbundet:\n• Har indre ro — er ikke let at skræmme\n• Har indre visdom — er ikke let at manipulere\n• Har fællesskabsfølelse — er ikke let at splitte\n• Har mening — er ikke let at kontrollere med tomme løfter\n\nEn befolkning der er spirituelt frakoblet:\n• Søger ro i shopping, TV og alkohol\n• Søger visdom i autoriteter og eksperter\n• Søger fællesskab i identitetspolitik og tribalism\n• Søger mening i karriere og forbrug\n\nSystemet BEHØVER din frakobling for at fungere. En forbundet befolkning er ikke styrbar.',
            },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <div className="ms-card-icon">{s.icon}</div>
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'jesus' && (
        <div className="ms-section">
          <div className="ms-alert">
            <p>"Guds rige er indeni jer."<br/>
            <cite>— Jesus, Lukasevangeliet 17:21</cite></p>
          </div>

          {[
            {
              icon: '✝️',
              title: 'Hvad Jesus Faktisk Lærte',
              text: 'Jesus underviste IKKE i religion. Han underviste i direkte forbindelse med Gud.\n\nHans kernebudskab:\n• "Guds rige er indeni jer" — ikke i en kirke, ikke i et ritual\n• "Kend jer selv" — gnosis, direkte åndelig viden\n• "Som I sår, skal I høste" — universel lov om kausalitet\n• "Elsk din næste som dig selv" — fordi din næste ER dig selv\n• "Sandheden skal gøre jer fri" — sandhed som bevidsthedsfrigørelse\n\nJesus sagde direkte: "I er guder" (Johannes 10:34, citerer Salme 82:6)\n\nDenne lære er revolutionær: Du behøver ikke mellemmand. Du er direkte forbundet med den universelle energi/Gud.',
            },
            {
              icon: '⛪',
              title: 'Kirken der Stjal Jesu Budskab',
              text: 'Jesu originale lære var radikal og frigørende:\n→ Du har direkte adgang til Gud\n→ Kærlighed er den eneste lov\n→ Materiel rigdom hindrer åndelig vækst\n\nKonstantin den Store gjorde kristendommen til statsreligion i 313 e.Kr. og transformerede den:\n→ Du BEHØVER kirken som mellemmand\n→ Lydighed er den vigtigste dyd\n→ Autoriteten er paven, ikke din indre stemme\n\nNicæakoncilet (325 e.Kr.) valgte hvilke tekster der tilhørte Biblen og smed resten ud. De gnostiske evangelier (der underviste i direkte gudsforhold) blev erklæret kætteri.\n\nDen kirke der siger den repræsenterer Jesus — forbudt præcis det Jesus lærte.',
              src: 'Elaine Pagels: "The Gnostic Gospels" (1979)'
            },
            {
              icon: '🌟',
              title: 'Jesus som Bevidstheds-Underviser',
              text: 'Fra Stargate-perspektivet var Jesus en mesterlærer i bevidsthedsudvikling:\n\nHans mirakel at gå på vand = bevidsthed over materiens love\nHans helbredelser = frekvens-healing (528 Hz kærlighedsfrekvens)\nHans opstandelse = bevidsthedens fortsættelse efter kroppens død\nHans "Fadervor" = en meditationsøvelse, ikke en bøn til en ekstern gud\n\nJesus sagde: "De ting jeg gør, kan I også gøre — og større ting" (Johannes 14:12)\n\nHan sagde ikke: "Tilbed mig." Han sagde: "Følg min vej." — Vejen er bevidsthedsudvikling.\n\nDette er også Buddhas lære. Det er Sufismens lære. Det er Vedantaens lære.\n\nAlle store traditioner peger mod det samme: Du er guddommelig. Forbindelsen er indeni dig.',
            },
            {
              icon: '📜',
              title: 'De Skjulte Evangelier',
              text: 'Nag Hammadi-teksterne (fundet 1945 i Egypten) — gnostiske kristne evangelier:\n\nEvangelier efter Thomas (logion 3):\n"Hvis jeres ledere siger til jer: Se, Guds rige er i himlen, så vil himlens fugle komme før jer. Nej — Guds rige er inden i jer og udenfor jer."\n\nEvangelier efter Filippus:\n"Folk der siger de vil dø først og derefter opstå er forkert. Hvis de ikke modtager opstandelsen imens de lever, vil de ikke modtage noget når de dør."\n\nDisse tekster underviste i: Direkte gudserfaring, indre transformation, bevidsthedsopvågning.\n\nKirken forbød dem. Nu kan du læse dem. Hvad skjuler de for dig?',
              src: 'Nag Hammadi Library, James Robinson ed.; Elaine Pagels: "Beyond Belief" (2003)'
            },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <div className="ms-card-icon">{s.icon}</div>
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="ms-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'reconnect' && (
        <div className="ms-section">
          <div className="ms-green-box">
            <h2>✦ Genopkoblingen — det koster ingenting</h2>
            <p>Alt det systemet vil have dig til at købe — ro, mening, forbindelse, velvære — eksisterer allerede gratis inden i dig. Det har altid gjort det.</p>
          </div>

          {[
            {
              icon: '🌅',
              title: 'Praktisk Genopkobling — 7 Nøgler',
              text: '1. STILHED — 10 minutter dagligt uden telefon, TV eller støj. Bare sid. Det er der alt starter.\n\n2. NATUR — Jording (bare fødder på jord) reducerer inflammation, sænker cortisol, synkroniserer dit elektromagnetiske felt med Jordens.\n\n3. 432 HZ MUSIK — Skift din musikafspiller til 432 Hz. Det koster intet og ændrer din krops frekvens.\n\n4. BEVIDST VEJRTRÆKNING — 5 sek ind, 5 sek hold, 5 sek ud. Aktiverer parasympatisk nervesystem. Åbner adgang til højere bevidsthedstilstande.\n\n5. TAKNEMMELIGHED — 3 ting dagligt du er taknemmelig for. Øger serotonin, oxytocin og deaktiverer amygdala (frygtcentret).\n\n6. BEGRÆNS NYHEDER — Én gang om dagen max. Algoritmer er designet til at holde dig i frygt-mode.\n\n7. KÆRLIGHED SOM PRAKSIS — Ikke som følelse men som valg. Jesus, Buddha, Rumi, alle store lærere: Kærlighed er den højeste frekvens. Det er genopkoblingens vej.',
            },
            {
              icon: '💡',
              title: 'Hvad Systemet Frygter Mest',
              text: 'En person der:\n• Ikke er i gæld\n• Ikke er afhængig af statens godkendelse\n• Kender sin egen værdi indefra\n• Er forbundet med en større mening end forbrug\n• Kan sidde i stilhed uden at underholdes\n• Ikke lader sig skræmme af mediernes frygtbilleder\n\n...er systemets største mareridt.\n\nDu behøver ikke revolution. Du behøver ikke demonstrationer. Du behøver ikke engang at overbevise nogen.\n\nDu skal bare vælge frihed — en tanke, et åndedrag, en dag ad gangen.\n\nDette er Jesu budskab. Buddhas budskab. Sufismens budskab.\n\nDet er ALDRIG ændret. Systemet har bare brugt 2000 år på at skjule det for dig.',
            },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <div className="ms-card-icon">{s.icon}</div>
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
