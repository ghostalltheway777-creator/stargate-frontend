import React, { useState } from 'react'
import './HitlerHistory.css'

const TABS = [
  { id: 'disclaimer', label: '⚖️ Vigtig Note' },
  { id: 'ww1',        label: '🎖 1. Verdenskrig' },
  { id: 'germany',    label: '🏗 Tyskland 1933-39' },
  { id: 'austria',    label: '🇦🇹 Østrig & Anschluss' },
  { id: 'poland',     label: '🇵🇱 Polen & Danzig' },
  { id: 'masonry',    label: '🔺 Frimureri & 33' },
  { id: 'books',      label: '📚 Bøgerne' },
]

export default function HitlerHistory() {
  const [tab, setTab] = useState('disclaimer')

  return (
    <div className="hh-page">
      <div className="hh-hero">
        <div className="hh-icon">📖</div>
        <h1 className="hh-title">Hitler — Historien de Ikke Fortæller</h1>
        <p className="hh-sub">Fakta der udelades fra skolebøgerne · Ikke propaganda · Ikke benægtelse</p>
      </div>

      <div className="hh-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`hh-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'disclaimer' && (
        <div className="hh-section">
          <div className="hh-green-box">
            <h2>⚖️ Hvad dette handler om</h2>
            <p>Dette indhold benægter IKKE Holocaust eller Nazi-Tysklands krigsforbrydelser. Det præsenterer historiske fakta der systematisk udelades fra det officielle narrativ — fordi et tredimensionelt billede af historien er nødvendigt for at forstå hvem der egentlig styrede begivenhederne.</p>
            <p style={{marginTop:'10px'}}>At forstå hvad Hitler faktisk gjorde for det tyske folk 1933-39 er ikke det samme som at støtte nazisme. Det er at stille det uundgåelige spørgsmål: Hvem brugte Hitler som instrument — og hvem profiterede på krigen?</p>
          </div>

          {[
            {
              title: 'Vinderens Historieskrivning',
              text: 'Churchill sagde: "Historien vil være venlig over for mig, for jeg agter at skrive den."\n\nEfter 2. Verdenskrig kontrollerede de allierede magter al information om krigen. Tyske arkiver blev konfiskeret. Overlevende tyske embedsmænd blev prøvet og henrettet ved Nürnberg — en retssag uden fortilfælde i international lov.\n\nDet vi lærer om Hitler i skolen er udelukkende konstrueret af dem der vandt krigen — og som vi nu ved fra dokumenter, havde dyb interesse i at skjule deres egne roller i krigens oprindelse.',
            },
            {
              title: 'Spørgsmålene ingen stiller',
              text: '• Hvorfor finansierede Wall Street og Bush-familien Hitlers opkomst?\n• Hvem var de internationale bankierer der profiterede på begge sider?\n• Hvorfor afviste den britiske regering Hitlers 30+ fredsforslag?\n• Hvem iscenesatte Gleiwitz-hændelsen?\n• Hvad stod der i Hitlers fredsbreve til Churchill?\n• Hvad skete der med de etniske tyskere i Polen inden krigen?\n\nDisse spørgsmål er ikke antisemitiske. De er historiske.',
            },
          ].map(s => (
            <div key={s.title} className="hh-card">
              <h3 className="hh-card-title">{s.title}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'ww1' && (
        <div className="hh-section">
          <div className="hh-alert">
            <p>Adolf Hitler tjente som frivillig i den tyske hær 1914-1918. Han var ikke den fejl de fleste forestiller sig.</p>
          </div>

          {[
            {
              icon: '🎖',
              title: 'Jernkorset — To Gange',
              text: 'Hitler meldte sig frivilligt til den bayerske hær ved krigens udbrud i 1914.\n\nHan tjente som løbsgast (Meldegänger) — en af de farligste positioner i skyttegravskrigen. Budbringere løb under artilleriild og snigskytte-angreb for at levere ordrer til fronten.\n\nHan modtog:\n• Jernkorset 2. klasse (1914) — givet til soldater for tapperhed\n• Jernkorset 1. klasse (1918) — EKSTREMT sjælden for en menig soldat. Kun officerer fik normalt 1. klasse\n\nSin 1. klasse Jernkors fik han anbefalet af sin jødiske overordnede officer Hugo Gutmann — et faktum der sjældent nævnes.\n\nHan blev såret to gange: Splinter i benet (1916) og sennepsgas-angreb (1918) der midlertidigt blindede ham.',
            },
            {
              icon: '🏥',
              title: 'Krigens Slutning og Dens Effekt',
              text: 'Hitler lå på lazaret i Pasewalk og genopdagede sin syn da krigen sluttede i november 1918.\n\nDen tyske hær var stadig på fremmed jord da de kapitulerede. Militærlederne brød aldrig fysisk sammen — men den tyske regering kapitulerede bag frontlinjerne.\n\nDette skabte det der siden hed "Dolkestødslegenden" (Dolchstoßlegende): At den tyske hær var "stukket i ryggen" af politikere hjemme — herunder de revolutionære kræfter der afsatte kejseren.\n\nUanset om legenden var sand eller konstrueret: Den var afgørende for Hitlers politiske verdensanskuelse og hans later motivationer.',
            },
          ].map(s => (
            <div key={s.title} className="hh-card">
              <div className="hh-card-icon">{s.icon}</div>
              <h3 className="hh-card-title">{s.title}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'germany' && (
        <div className="hh-section">
          <div className="hh-alert">
            <p>Da Hitler kom til magten i januar 1933 havde Tyskland 6 millioner arbejdsløse (30%). Da krigen begyndte i 1939: næsten nul. Ingen vestlig økonom har nogensinde forklaret hvordan.</p>
          </div>

          {[
            {
              icon: '🏗',
              title: 'Den Tyske Økonomiske Rejsning',
              text: 'Weimar-republikken (1919-1933) var en katastrofe:\n• 1923: Hyperinflation — en brød kostede 200 milliarder mark\n• 1929: Amerikansk børskrak ramte Tyskland hårdest\n• 1933: 6 millioner arbejdsløse, massesult, politisk kaos\n\nUnder Hitler 1933-1939:\n• Arbejdsløshed faldt fra 30% til under 1%\n• BNP voksede 100%+ på 6 år\n• Inflation kontrolleret\n• Ingen tyske arbejdere sultede\n\nMetoden: MEFO-veksler (intern valuta der omgik Versailles-traktatens begrænsninger) og massiv statslig investering i infrastruktur og industri.',
            },
            {
              icon: '🚗',
              title: 'Volkswagen — Folkets Bil',
              text: 'Hitler bestilte Ferdinand Porsche til at designe en bil som den almindelige tyske arbejder kunne have råd til.\n\nKravet: Max 990 Reichsmark — under en gennemsnitlig månedslønns pris.\n\nResultat: Volkswagen Beetle — designet 1938. Millioner produceret. Stadig ikonisk.\n\n"Folkets bil" var en del af en bredere politik: Arbejderne fortjente at leve godt. Strength Through Joy (KdF) programmet gav arbejdere:\n• Betalt ferie — første gang i tysk historie\n• Ferieskibe til Norge og Middelhavet\n• Sportsanlæg og kulturarrangementer\n• Billig adgang til teater og koncerter\n\nDette var ikke propaganda — det var strukturel velfærd for arbejderklassen.',
            },
            {
              icon: '🛣',
              title: 'Autobahn — Verdens Første Motorvej',
              text: 'Hitler beordrede bygningen af det første nationale motorvejsnet i verden — Reichsautobahn.\n\n• 3.800 km planlagt, 3.000 km bygget inden krigen\n• Gav arbejde til hundredtusinder\n• Genoplivede tysk industri og ingeniørkunst\n• Skabte infrastruktur der stadig bruges i dag\n\nDet tyske motorvejsnet inspirerede Eisenhower til at bygge USA\'s Interstate Highway System efter at have set det under krigen.\n\nDet er sjovt at notere: Den vejtype der nu bruges af millioner af amerikanere og europæere dagligt — blev opfundet under det regime vi lærer er historiens ondeste.',
            },
            {
              icon: '🌿',
              title: 'Miljø og Dyrevelfærd',
              text: 'Nazi-Tyskland indførte som de første i verden:\n• Strenge dyrevelfærdslove (1933) — forbud mod vivisection\n• Miljøbeskyttelseslove\n• Organisk landbrug fremmet som statslig politik\n• Naturreservater oprettet\n• Rygning forbudt i offentlige bygninger\n\nHitler var personligt vegetar i de senere år, afholdenhed fra alkohol, og dybt optaget af naturbevarelse.\n\nDet er historiens ironi at mange "progressive" miljøpolitikker har rødder i det regime de er programmatisk imod.',
            },
          ].map(s => (
            <div key={s.title} className="hh-card">
              <div className="hh-card-icon">{s.icon}</div>
              <h3 className="hh-card-title">{s.title}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'austria' && (
        <div className="hh-section">
          {[
            {
              icon: '🇦🇹',
              title: 'Anschluss — Østrig Ville Joine',
              text: 'Den 12. marts 1938 marcherede tyske tropper ind i Østrig. Det kaldes "Anschluss" (tilslutning).\n\nHvad skolebøgerne udelader:\n\nEfter 1. Verdenskrig var Østrig et lillebitte land på 6 millioner mennesker — det resterende kerne af det enorme Habsburgske Imperium. Den østrigske nationalforsamling stemte for ØJEBLIKKELIGT at forene sig med Tyskland allerede i 1918.\n\nDe allierede FORBØD dette i Versailles-traktaten — selvom de talte om folkenes selvbestemmelsesret.\n\n1938 folkeafstemningen:\nEfter Anschluss holdt nazisterne en folkeafstemning om foreningen.\nResultat: 99,7% stemte JA.\n\nJa, det var under nazi-pres. Men: Internationale observatører og samtidige rapporter bekræftede at et flertal af østrigere genuint ønskede foreningen. Hitler SELV var østrigsk statsborger.',
            },
            {
              icon: '📣',
              title: 'Folkejublen i Wien',
              text: 'Da Hitler ankom til Wien den 15. marts 1938 talte han til 250.000 jublende østerrigere på Heldenplatz.\n\nDette er dokumenteret på film. Masserne var ikke tvunget hertil.\n\nWien var Hitlers fødeby. Han var selv afvist to gange fra Wiens Kunstakademi og tilbragte fattige år som hjemløs i Wien inden krigen.\n\nAt vende tilbage som Tysklands kansler og blive hyldet i den by der havde afvist ham — det er den historiske ironi der definerede hans personlighed.\n\nDen Historiske Sandhed:\nAnschluss var ulovlig under international lov. Men den repræsenterede hvad et flertal af østrigere ønskede — og hvad de allierede havde forbudt dem i 1919.',
            },
          ].map(s => (
            <div key={s.title} className="hh-card">
              <div className="hh-card-icon">{s.icon}</div>
              <h3 className="hh-card-title">{s.title}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'poland' && (
        <div className="hh-section">
          <div className="hh-alert">
            <p>Historien om krigens start er ikke "Hitler angreb uprovokeret". Det er en krig der krævede at nogen ville have den — og at nogen aktivt afviste freden.</p>
          </div>

          {[
            {
              icon: '🗺',
              title: 'Danzig-Korridoren — Konteksten',
              text: 'Versailles-traktaten skar Danzig (95% tysk befolkning) fra Tyskland og skabte den "polske korridor" der adskilte Østpreussen fra resten af Tyskland.\n\nDanzig — en gammel hanseatisk tysk by — blev gjort til "Fri Stad" under Folkeforbundets beskyttelse.\n\nHitlers krav inden krigen:\n• Danzig returneres til Tyskland (95% af befolkningen ville det)\n• En ekstraterritoriel motorvej og jernbane til Østpreussen\n\nDette er ikke krav om at erobre Polen. Det er krav om at rette op på en åbenbart uretfærdig bestemmelse.',
            },
            {
              icon: '✉️',
              title: 'Hitler Bad om Civile Beskyttelse',
              text: 'Inden det tyske angreb den 1. september 1939 sendte Hitler noter til den polske regering med krav om at etniske tyske civile i Polen ikke måtte skades under krigshandlingerne.\n\nDen polske regering svarede aldrig.\n\nHvorfor? Fordi briterne i marts 1939 gav Polen en "ubetinget garanti" — de ville komme Polen til undsætning hvis det blev angrebet.\n\nDenne garanti fjernede enhver polsk motivation til at forhandle. Og den sikrede krigen.\n\nSom den britiske historiker A.J.P. Taylor konkluderede i "The Origins of the Second World War" (1961):\n"Hitler ønskede ikke en krig med vestmagterne. Han ville have et arrangement med Polen. Briterne forhindrede det."',
              src: 'A.J.P. Taylor: "The Origins of the Second World War" (1961)'
            },
            {
              icon: '🎭',
              title: 'Gleiwitz — Den Iscenesatte Årsag',
              text: 'Den 31. august 1939 — dagen inden invasionen — iscenesatte SS-enheder et angreb på en tysk radiostation i Gleiwitz ved den polske grænse.\n\nTyske soldater klædt i polske uniformer angreb stationen, dræbte en tysk fange (KZ-fange i polsk uniform) og sendte en anti-tysk propaganda-besked på polsk.\n\nDette var false flag.\n\nHitler brugte det som officielt casus belli for invasionen.\n\nI ethvert krig er den første begivenhed der "tvinger" angrebet konstrueret. Det er ikke unikt for Nazi-Tyskland — det er mønsteret vi har dokumenteret fra Pearl Harbor til Tonkin-bugten til Irak\'s masseødelæggelsesvåben.',
            },
          ].map(s => (
            <div key={s.title} className="hh-card">
              <div className="hh-card-icon">{s.icon}</div>
              <h3 className="hh-card-title">{s.title}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="hh-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'masonry' && (
        <div className="hh-section">
          {[
            {
              icon: '🔺',
              title: 'Magt i 1933 — Tallet der Ikke er Tilfældigt',
              text: 'Adolf Hitler blev udnævnt til Rigskansler den 30. januar 1933.\n\nI frimurerisk symbolik er 33 det højeste grad — Master Mason af den Scottish Rite. Det er den grad der kræver fuld indvielse i ordenens inderste hemmeligheder.\n\n1933 er det år:\n• Franklin D. Roosevelt (32. grad frimuerer) blev USA\'s president\n• Hitler kom til magten i Tyskland\n• Tjenestemandsloven satte jøder og frimurere under særlige regler\n• Den tyske økonomi begyndte sin mirakuløse genoprejsning\n\nEr 1933 tilfældigt? For dem der arbejder med symboler og tal — nej.',
            },
            {
              icon: '⚔️',
              title: 'Paradokset — Nazi-Frimureri',
              text: 'Det officielle narrativ: Nazis forfulgte og forbød Frimureri.\n\nDette er SANDT. Fra 1933 blev alle tyske loger lukket. Frimurere blev arresteret, sendt til KZ-lejre, tvunget til at bære et omvendt rødt trekant-symbol.\n\nMen:\n\nDen Thule Gesellschaft (Thule Selskabet) — den okkulte organisation hvorfra NSDAP (nazistpartiet) historisk udsprang — var tæt forbundet med okkulte og mystiske ordener der ligner frimureri.\n\nDietrich Eckart — Hitlers mentor og dedikationen i Mein Kampf — var dybt involveret i okkulte ordener.\n\nHitler selv deltagede i Thule-møder i München tidligt i sin politiske karriere.\n\nTeoriens pointe: At forfølge offentlige frimurer-loger mens man selv er indviet i de hemmelige lag er præcis hvad "hidden in plain sight" handler om.',
            },
            {
              icon: '🌐',
              title: 'Hvem Satte Hitler i Magten?',
              text: 'Prescott Bush (George H.W. Bush\'s far): Hans bank (Union Banking Corporation) finansierede Fritz Thyssen — Hitlers primære industrielle finanskilde.\n\nIBM: Leverede hullekort-maskiner til nazisterne til at organisere registrering og deportation.\n\nFord Motor Company: Henry Ford modtog den højeste tyske orden til en udlænding (Grand Cross of the German Eagle, 1938). Hitler havde et billede af Ford på sit kontor.\n\nChase Bank (Rockefeller): Fortsatte med at operere i Frankrig under nazistisk besættelse og fröste jødiske konti på nazisternes anmodning.\n\nDette er dokumenteret. Det er ikke antisemitisk — det er kapitalismens logik: Profit trumfer alt.',
              src: 'Edwin Black: "IBM and the Holocaust" (2001); John Loftus: "The Secret War Against the Jews" (1994)'
            },
          ].map(s => (
            <div key={s.title} className="hh-card">
              <div className="hh-card-icon">{s.icon}</div>
              <h3 className="hh-card-title">{s.title}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="hh-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'books' && (
        <div className="hh-section">
          {[
            {
              icon: '📖',
              title: 'Mein Kampf (1925)',
              text: 'Hitlers "Min Kamp" er den mest forbudte og mindst læste bog i vestlig verden.\n\nSom et historisk dokument — ikke som et politisk manifest — er den essentiel for at forstå hvad Hitler faktisk troede på og hvad han åbent annoncerede.\n\nHan skjulte INTET i Mein Kampf. Alt hvad der skete, var annonceret her.\n\nSpørgsmålet historikere sjældent stiller: Hvis han annoncerede alle sine intentioner åbent — hvem læste det og ignorerede det? Hvem finansierede ham EFTER bogen? Hvem valgte ikke at lytte?',
            },
            {
              icon: '📗',
              title: 'Hitlers Zweites Buch (1928)',
              text: '"Hitlers Second Book" — skrevet i 1928, aldrig publiceret af Hitler selv. Fundet i arkiver og udgivet i 1961.\n\nDækker primært udenrigspolitik og Hitlers geopolitiske vision. Endnu mere eksplicit end Mein Kampf om hans planer for Europa og Rusland.\n\nDet er bemærkelsesværdigt at en bog der annoncerede kommende verdenskrig ikke blev publiceret — og at de magter der finansierede ham aldrig tog hans skriftlige planer alvorligt.',
            },
            {
              icon: '🌍',
              title: 'Hitler — Instrument eller Modstander?',
              text: 'Det store ubesvarede spørgsmål i historien om Hitler:\n\nVar han et instrument for den nye verdensorden — eller en ægte trussel imod den?\n\nArgumentet for "instrument":\n• Wall Street og tyske industrifolk finansierede hans oprustning\n• Krigen legitimerede præcis de institutioner der nu styrer verden: FN (1945), IMF (1944), Verdensbanken (1944), NATO (1949), Staten Israel (1948)\n• Alt dette skete inden for 5 år efter krigen — infrastrukturen var klar. Man ventede på begivenheden.\n\nArgumentet imod:\n• Hitler afviste den globalistiske agenda eksplicit\n• Han angreb Sovjet-Unionen — Rothschild-bankernes bolsjevikiske projekt\n• Han forsøgte at skabe et tysk valutasystem UDEN rente til private banker\n\nMåske er svaret: Han startede som et instrument — og endte som en trussel der ikke kunne kontrolleres.\n\nDet er den slags spørgsmål der gør at arkiverne stadig er forseglet.',
            },
            {
              icon: '⚡',
              title: 'Hitlers Fredsbreve til Churchill',
              text: 'Hitler sendte 30+ fredsforslag til de allierede magter. Churchill afviste dem alle.\n\nMaj 1940: Dunkerque. Hitler stoppede den tyske offensiv og lod 338.000 britiske og franske soldater evakuere. Mange historikere mener dette var et bevidst signal om at han ønskede fred med England.\n\nChurchill: "Vi kæmper aldrig."\n\nRudolf Hess flyvede til Skotland i maj 1941 i et privatflyvning — angiveligt som Hitlers personlige gesandt for at forhandle fred med England. Han blev fængslet resten af sit liv og henrettet i Spandau-fængslet 93 år gammel i 1987 — muligvis for at forhindre ham i at tale.\n\nHvad vidste Hess? Det er et ubesvaret spørgsmål.',
            },
          ].map(s => (
            <div key={s.title} className="hh-card">
              <div className="hh-card-icon">{s.icon}</div>
              <h3 className="hh-card-title">{s.title}</h3>
              <p className="hh-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="hh-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
