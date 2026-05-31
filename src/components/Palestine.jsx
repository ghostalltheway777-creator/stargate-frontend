import React, { useState } from 'react'
import './Palestine.css'

const TABS = [
  { id: 'disclaimer', label: '⚖️ Vigtig Note' },
  { id: 'history',    label: '📖 1948–Nu' },
  { id: 'hamas',      label: '🔍 Hamas & Hizbollah' },
  { id: 'icc',        label: '⚖️ ICC & FN' },
  { id: 'witnesses',  label: '🏥 Vidner' },
  { id: 'lebanon',    label: '🇱🇧 Lebanon' },
  { id: 'iran',       label: '🇮🇷 Iran' },
  { id: 'nuclear',    label: '☢️ Atomvåben' },
  { id: 'jfk',        label: '🎯 JFK' },
  { id: 'aipac',      label: '🏛 AIPAC' },
  { id: 'archons',    label: '⬛ Archon Forbindelsen' },
]

export default function Palestine() {
  const [tab, setTab] = useState('disclaimer')

  return (
    <div className="pal-page">
      <div className="pal-hero">
        <div className="pal-icon">🕊</div>
        <h1 className="pal-title">Gaza · Lebanon · Iran</h1>
        <p className="pal-sub">Fakta fra internationale domstole, FN og øjenvidner — ikke propaganda</p>
      </div>

      <div className="pal-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`pal-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'disclaimer' && (
        <div className="pal-section">
          <div className="pal-green-box">
            <h2 className="pal-green-title">✦ Hvad dette IKKE handler om</h2>
            <p>Dette indhold handler IKKE om jøder som folk, religion eller kultur. Jødedom er en rig og ærværdig tradition med årtusinders visdom.</p>
            <p style={{marginTop:'10px'}}>Dette handler om <strong>Israels regerings militære handlinger</strong> — dokumenteret af internationale domstole, FN-organisationer og humanitære organisationer.</p>
            <p style={{marginTop:'10px'}}>At kritisere en stats militære operationer er ikke antisemitisme — ligesom at kritisere USA's invasion af Irak ikke er anti-amerikansk.</p>
          </div>

          <div className="pal-card">
            <h3 className="pal-card-title">Jødiske stemmer mod Israels politik</h3>
            <p className="pal-card-text">Nogle af de stærkeste kritikere af Israels regering er jødiske intellektuelle og aktivister:</p>
            {[
              ['Noam Chomsky', 'Verdensberømt lingvist og politisk analytiker — livslang kritiker af israelsk besættelsespolitik'],
              ['Norman Finkelstein', 'Jødisk akademiker hvis forældre overlevede Holocaust — dokumenterede Israels folkeretsbrud i årtier'],
              ['Ilan Pappé', 'Israelsk historiker og professor — dokumenterede "Den etniske Udrensning af Palæstina" (1948)'],
              ['Jewish Voice for Peace', 'Amerikansk jødisk organisation med 500.000+ medlemmer der aktivt modsætter sig Israels besættelsespolitik'],
              ['Neturei Karta', 'Ortodoks jødisk gruppe der teologisk modsætter sig den zionistiske stat som stridende mod jødisk lov'],
            ].map(([name, desc]) => (
              <div key={name} className="pal-voice">
                <div className="pal-voice-name">{name}</div>
                <div className="pal-voice-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'history' && (
        <div className="pal-section">
          <div className="pal-alert">
            <p>For at forstå Gaza 2023-2025 skal man forstå 1948. Man kan ikke forstå virkningen uden at forstå årsagen.</p>
          </div>

          {[
            {
              year: '1948',
              title: 'Al-Nakba — Katastrofen',
              text: '750.000 palæstinensere blev fordrevet fra deres hjem.\n530+ palæstinensiske landsbyer blev udslettet.\nPlan Dalet — Israels militære plan for territorial ekspansion — blev udført.\n\nIsraelske historikere (Benny Morris, Ilan Pappé) har dokumenteret massakrer på civile, herunder Deir Yassin (april 1948) hvor 107-120 civile blev dræbt af Irgun (Menachem Begins organisation).\n\nBegin blev Israels 6. premierminister. Han fik Nobels fredspris.',
              src: 'Benny Morris: "1948: A History of the First Arab-Israeli War" (2008)'
            },
            {
              year: '1967',
              title: 'Seksdageskrigen — Den Permanente Besættelse',
              text: 'Israel besatte Vestbredden, Gaza, Sinai og Golanhøjderne. FN\'s Sikkerhedsråd vedtog Resolution 242 der krævede Israels tilbagetrækning.\n\nIsrael har aldrig overholdt Resolution 242.\n\nSiden 1967 har Israel bygget over 700.000 bosættere på Vestbredden — et brud på Genèvekonventionens Artikel 49 der forbyder en besættelsesmagt at flytte sin civilbefolkning ind i besat territorium.',
              src: 'UN Security Council Resolution 242, 1967; Geneva Convention IV'
            },
            {
              year: '1948–2024',
              title: 'Bosættelser — Langsom Etnisk Udrensning',
              text: 'Vestbredden 1967: 0 israelske bosættere.\nVestbredden 2024: 700.000+ israelske bosættere i 150+ bosættelser.\n\nHver bosættelse er ulovlig under international lov. Alle verdensdomstole er enige om dette — inklusive ICJ.\n\nFN\'s Højkommissariat for Menneskerettigheder har dokumenteret at bosætterne bruger vold mod palæstinensiske bønder med straffrihed.',
              src: "UN Special Rapporteur on Palestinian Territories, annual reports"
            },
            {
              year: '2007–2024',
              title: 'Gaza-blokaden — Verdens Største Åbne Fængsel',
              text: 'Siden 2007 har Israel (med egyptisk samarbejde) blokeret Gaza:\n• Kontrol over alle ind- og udgange\n• Begrænsning af mad, medicin, byggematerialer\n• Kontrol over fiskerizone (3-6 sømil af en aftalt 20)\n• Ingen havnefaciliteter\n• Ingen lufthavn\n\nDa en journalist spurgte Dov Weisglass (Sharons rådgiver) om blokaden:\n\n"The idea is to put the Palestinians on a diet, but not to make them die of hunger." — Dov Weisglass, 2006',
              src: 'Haaretz, "Dov Weisglass on the Gaza diet", 2006'
            },
          ].map(s => (
            <div key={s.year} className="pal-card">
              <div className="pal-year">{s.year}</div>
              <h3 className="pal-card-title">{s.title}</h3>
              <p className="pal-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              <p className="pal-card-src">📄 {s.src}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'hamas' && (
        <div className="pal-section">
          <div className="pal-alert">
            <p>"Hamas er Israels skabning" — det er ikke en konspirationsteori. Det er dokumenteret af israelske efterretningsfolk og journalister.</p>
          </div>

          {[
            {
              title: 'Israel Faciliterede Hamas\' Oprettelse',
              text: 'I 1970erne og 80erne faciliterede Israelske myndigheder (særligt Shin Bet) væksten af islamistiske grupper på Vestbredden og Gaza som modvægt til den sekulære PLO under Yasser Arafat.\n\nAhmed Yassin — Hamas\' grundlægger — fik i 1973 tilladelse af israelske myndigheder til at registrere "Al-Mujama al-Islamiya" som velgørende organisation.\n\nRobert Dreyfuss, forfatter til "Devil\'s Game" (2005), dokumenterede den amerikanske og israelske støtte til islamistiske grupper som modvægt til arabisk nationalisme og kommunisme.',
              src: 'Wall Street Journal: "How Israel Helped to Spawn Hamas", 2009; Robert Dreyfuss: Devil\'s Game (2005)'
            },
            {
              title: 'Hamas Grundlagt 1987',
              text: 'Hamas (Harakat al-Muqawama al-Islamiyya — Islamisk Modstandsbevægelse) opstod formelt under den første intifada (1987-1991).\n\nKontekst: To generationer af palæstinensere var vokset op under israelsk militærbesættelse. Alle fredelige forhandlingsforsøg havde resulteret i yderligere landkonfiskation og bosætterudvidelse.\n\nSpørgsmålet er ikke om Hamas\' metoder er acceptable (de er ikke) — men hvad der skabte de betingelser der avlede dem.',
            },
            {
              title: 'Hizbollah — Skabt af Israels Libanon-Invasion',
              text: 'Hizbollah (Guds Parti) opstod som direkte svar på Israels invasion af Libanon i 1982.\n\nInden Israels invasion eksisterede Hizbollah ikke. Den shiitiske befolkning i Sydlibanon var ikke primært modstandere af Israel.\n\nIsraels 18-årige besættelse af Sydlibanon (1982-2000) radikaliserede en generation og skabte grobund for Hizbollah.\n\nDette er den samme dynamik som med Hamas — besættelsespolitik avler modstand.',
              src: 'Naim Qassem: "Hizbullah: The Story from Within" (2005)'
            },
          ].map(s => (
            <div key={s.title} className="pal-card">
              <h3 className="pal-card-title">{s.title}</h3>
              <p className="pal-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="pal-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'icc' && (
        <div className="pal-section">
          <div className="pal-stat-row">
            {[
              ['Arrest Warrant', 'ICC udstedte arrestordre mod Netanyahu og Gallant — November 2024'],
              ['Genocide Case', 'ICJ: Sydafrikas folkedrabssag accepteret — Januar 2024'],
              ['45.000+', 'Dræbte i Gaza (oktober 2023 – december 2024). Majoritet civile og børn'],
            ].map(([num, label]) => (
              <div key={num} className="pal-stat">
                <div className="pal-stat-num">{num}</div>
                <div className="pal-stat-label">{label}</div>
              </div>
            ))}
          </div>

          {[
            {
              org: 'ICC — International Straffedomstol',
              title: 'Arrestordrer mod Netanyahu og Gallant',
              text: 'Den 21. november 2024 udstedte ICC arrestordrer mod:\n• Benjamin Netanyahu (Israels premierminister)\n• Yoav Gallant (Israels forsvarsminister)\n\nAnklagepunkter:\n• Krigsforbrydelser\n• Forbrydelser mod menneskeheden\n• Brug af sult som krigsvåben\n• Angreb på civile\n\n124 ICC-medlemslande er forpligtet til at arrestere dem ved indrejse.',
              src: 'ICC Press Release: Case: The Situation in the State of Palestine, 21 November 2024'
            },
            {
              org: 'ICJ — International Domstol',
              title: 'Sydafrikas Folkedrabssag',
              text: 'Den 26. januar 2024 afgjorde ICJ at Sydafrikas sag om folkemord plausibelt er sand og at Israel skal:\n• Tage alle mulige foranstaltninger for at forhindre folkedrab\n• Sikre adgang for humanitær hjælp\n• Bevare beviser\n\nIsrael overholdt ikke afgørelsen. Rafah-offensiven fortsatte.',
              src: 'ICJ: Application of the Convention on the Prevention and Punishment of the Crime of Genocide, 26 January 2024'
            },
            {
              org: 'UNRWA / FN',
              title: 'FN\'s Rapporter',
              text: 'FN\'s Nødhjælpskoordinator Martin Griffiths:\n"Det vi ser i Gaza er ikke krig. Det er udryddelse."\n\nFN\'s Særlige Rapportør Francesca Albanese:\n"Der er rimelig grund til at tro at tærsklen for folkemord er krydset."\n\nUSA har nedlagt veto i FN\'s Sikkerhedsråd 40+ gange for at beskytte Israel mod bindende resolutioner.',
              src: 'UN OCHA Reports, UN Special Rapporteur statements 2024'
            },
          ].map(s => (
            <div key={s.title} className="pal-card">
              <div className="pal-org">{s.org}</div>
              <h3 className="pal-card-title">{s.title}</h3>
              <p className="pal-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              <p className="pal-card-src">📄 {s.src}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'witnesses' && (
        <div className="pal-section">
          {[
            {
              icon: '🏥',
              who: 'Dr. Mark Perlmutter — Amerikansk Ortopædkirurg',
              text: '"Jeg opererede på Gaza. Det jeg så kan ikke beskrives. Børn uden lemmer. Familier decimerede. Hospitaler bombet. Jeg er jøde. Og det her er folkemord."',
              src: 'CNN interview, April 2024'
            },
            {
              icon: '🩺',
              who: 'MSF (Læger Uden Grænser)',
              text: '"Vores hold i Gaza dokumenterer angreb på hospitaler, ambulancer og sundhedspersonale. Det er krigsforbrydelser. Vi har aldrig set noget lignende i 50 års humanitært arbejde."',
              src: 'MSF statement, December 2023'
            },
            {
              icon: '👨‍⚕️',
              who: 'Dr. Ghassan Abu Sittah — Libanesisk-Britisk Plastikkirurg',
              text: '"Jeg opererede i Al-Shifa hospitalet under bombardementet. Israel beskød hospitalet mens vi opererede. Patienter og læger døde på operationsbordet. Jeg er øjenvidne. Dette er krigsforbrydelser."',
              src: 'Testimony to European Parliament, 2024'
            },
            {
              icon: '📱',
              who: 'UNRWA — 200+ UNRWA-ansatte dræbt',
              text: 'Over 200 UNRWA-ansatte er dræbt i Gaza — den højeste tab af FN-ansatte i en enkelt konflikt i FN\'s historie.\n\nIsrael anklagede 12 UNRWA-ansatte for Hamas-forbindelser (ud af 30.000). Brugte dette til at stoppe UNRWA-finansiering. UNRWA er den primære leverandør af mad, vand og sundhed i Gaza.',
              src: 'UNRWA Commissioner-General Philippe Lazzarini, 2024'
            },
            {
              icon: '👶',
              who: 'UNICEF — Børnedødelighed',
              text: '"Gaza er det farligste sted i verden at være barn. Mere end 15.000 børn er dræbt. Tusinder er amputeret. Titusinder er forældreløse. Vi ser systematisk ødelæggelse af al infrastruktur børn har brug for for at overleve."',
              src: 'UNICEF statement, Catherine Russell, 2024'
            },
          ].map(s => (
            <div key={s.who} className="pal-card">
              <div className="pal-card-icon">{s.icon}</div>
              <div className="pal-witness-who">{s.who}</div>
              <p className="pal-card-text" style={{fontStyle:'italic', marginBottom:'8px'}}>"{s.text}"</p>
              <p className="pal-card-src">📄 {s.src}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'lebanon' && (
        <div className="pal-section">
          <div className="pal-alert">
            <p>Israel brød 2006-våbenhvilen med Libanon <strong>over 5.000 gange</strong> ifølge FN's UNIFIL-overvågning — uden internationale konsekvenser.</p>
          </div>

          {[
            {
              title: '2006-Våbenhvilen og dens Brud',
              text: 'Efter krigen i 2006 vedtog FN\'s Sikkerhedsråd Resolution 1701 der krævede Israels tilbagetrækning fra Libanon og ophør af fjendtligheder.\n\nFN\'s UNIFIL-styrker (United Nations Interim Force in Lebanon) dokumenterede over 5.000 israelske krænkelser af libanesisk luftrum og territorium fra 2006 til 2024.\n\nIngen sanktioner. Ingen konsekvenser. Verdenssamfundet sov.',
              src: 'UNIFIL Monitoring Reports, 2006-2024'
            },
            {
              title: '2024 Offensiven — 1 Million Fordrevet',
              text: 'Fra september 2024 lancerede Israel en masiv offensiv mod Libanon:\n\n• Over 1.000.000 libanesere fordrevet\n• Hele byer i Sydlibanon jævnet med jorden\n• Hizbollah-leder Hassan Nasrallah dræbt\n• Hundredvis af civile dræbt\n\nISAELS begrundelse: Hizbollah-truslen.\nRealiteten: Hizbollah affyrede raketter i solidaritet med Gaza efter 7. oktober 2023.',
              src: 'UNHCR Lebanon Emergency Response, 2024'
            },
            {
              title: 'Pager-Bomberne — Statslig Terrorisme?',
              text: 'I september 2024 eksploderede tusinder af pagere (kommunikationsenheder) simultant i Libanon. Hizbollah-medlemmer og civile blev dræbt og lemlæstet — inklusiv en 8-årig pige.\n\nIsrael tog ikke ansvar. Men international konsensus: Det var en israelsk Mossad-operation.\n\nDette var en koordineret angreb på kommunikationsinfrastruktur i et suverænt land. Under enhver definition er dette en terrorhandling — uanset hvem der udfører den.',
              src: 'Reuters, New York Times, Washington Post reporting September 2024'
            },
          ].map(s => (
            <div key={s.title} className="pal-card">
              <h3 className="pal-card-title">{s.title}</h3>
              <p className="pal-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              <p className="pal-card-src">📄 {s.src}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'iran' && (
        <div className="pal-section">
          <div className="pal-alert">
            <p>Israel har anklaget Iran for næsten alt. Hvornår var der sidst dokumenteret beviser? Mønsteret er velkendt fra Irak 2003.</p>
          </div>

          {[
            {
              title: 'Propagandaen om "Frihed til Kvinder"',
              text: 'Vestlige medier fokuserer intenst på iranske kvinders rettigheder — en reel og vigtig problematik.\n\nMen: Saudi Arabien er langt mere undertrykkende overfor kvinder, har halshuggelse på torvet, tillader ingen politisk opposition — og er en vestlig allieret.\n\nBahrain, UAE, Qatar — alle har begrænsede kvinderettigheder. Alle er vestlige allierede.\n\nKonklusionen: Kvinderettigheder bruges selektivt som propaganda-redskab, ikke som konsistent princip. Iran bruges som propaganda fordi Iran nægter Rothschild/BIS bankstruktur og støtter palæstinenserne.',
            },
            {
              title: 'Israels Anklager mod Iran — Bevis?',
              text: '"Iran har biologiske våben" — 2003. Ingen bevis.\n"Iran er 3 måneder fra en atombombe" — 2012. Stadig ingen bombe.\n"Iran angriber snart" — 2015, 2017, 2019, 2020, 2021, 2022...\n\nDette er præcis samme mønster som Colin Powells præsentation til FN i 2003 om Iraks masseødelæggelsesvåben — der ikke eksisterede.\n\nDen israelske efterretningschef der var med til at konstruere det intelligence sagde år senere at det var fabrikeret.',
            },
            {
              title: 'Hvad Iran Faktisk Siger',
              text: 'Iran: "Vi har ikke atomvåben og ønsker dem ikke."\nIAEA (Det Internationale Atomenergiagentur): Iran har samarbejdet med inspektioner. Der er ingen dokumentation for et nukleart våbenprogram.\n\nIran har underskrevet NPT (Non-Proliferation Treaty — atomvåbenspredningsaftalen).\nIsrael har ikke underskrevet NPT.\nIsrael har ikke tilstedt IAEA-inspektioner.\nIsrael HAR atomvåben (se næste fane).\n\nHvem er den egentlige trussel mod atomspredning i Mellemøsten?',
              src: 'IAEA Iran reports, NPT signatory status'
            },
          ].map(s => (
            <div key={s.title} className="pal-card">
              <h3 className="pal-card-title">{s.title}</h3>
              <p className="pal-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="pal-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'nuclear' && (
        <div className="pal-section">
          <div className="pal-alert">
            <p>Israel har et hemmeligt atomvåbenprogram. Nægter al inspektion. Er ikke part i NPT. Og er den eneste stat i Mellemøsten med atomvåben. Men verden diskuterer Iran.</p>
          </div>

          {[
            {
              icon: '☢️',
              title: 'Israels Atomvåben — Den Åbne Hemmelighed',
              text: 'Israel har estimeret 90 nuklear sprenghoveder (Stockholm International Peace Research Institute, 2024).\n\nIsrael bekræfter hverken eller benægter at have atomvåben — en politik kaldet "nuklear tvetydighed".\n\nIsrael er IKKE part i NPT (Non-Proliferation Treaty).\nIsrael tillader IKKE IAEA-inspektioner.\n\nIran: Er part i NPT. Tillader IAEA-inspektioner. Har ingen dokumenterede atomvåben.\n\nVerden sanktionerer Iran. Israel modtager $3,8 milliarder i årlig amerikansk militærhjælp.',
              src: 'SIPRI Yearbook 2024; IAEA membership records'
            },
            {
              icon: '🔍',
              title: 'Mordechai Vanunu — Manden Der Afslørede Det',
              text: 'I 1986 afslørede den israelske atomteknikker Mordechai Vanunu Israels hemmelige atomvåbenprogram til den britiske avis Sunday Times.\n\nHan blev lokket til Rom af en Mossad-agent, bedøvet, kidnappet og smuglet til Israel.\n\nDom: 18 års fængsel — 11 år i isolationsfængsel.\nEfter løsladelse: Ingen frihed til at forlade Israel, ingen kontakt med udlændinge.\n\nHan sagde det eneste der var sandt. Han betalte med sin frihed.',
              src: 'Sunday Times, 1986; Amnesty International on Vanunu'
            },
            {
              icon: '⚖️',
              title: 'Den Hykleriske Standard',
              text: 'Iran (ingen atomvåben, NPT-signatar): Sanktioner, trusler om militær aktion, regimeskifteforsøg.\n\nIsrael (90 atomvåben, ikke NPT, ingen IAEA): $3,8 mia/år i militærhjælp, diplomatisk beskyttelse i FN, F-35 leverancer.\n\nNordkorea (atomvåben, ikke NPT): "Skurkestaten"\n\nPakistan (atomvåben, ikke NPT): Allieret — får milliarder i støtte.\n\nReglerne gælder kun dem der ikke adlyder systemet. Det er ikke atomvåben der bekymrer Washington — det er lydighed.',
            },
          ].map(s => (
            <div key={s.title} className="pal-card">
              <div className="pal-card-icon">{s.icon}</div>
              <h3 className="pal-card-title">{s.title}</h3>
              <p className="pal-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="pal-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}
      {tab === 'jfk' && (
        <div className="pal-section">
          <div className="pal-alert">
            <p>"Israel har faktisk lavet atombomben og det ved alle og ingen siger noget om det, for de er bange for at blive kaldt antisemitter."<br/><cite>— JFK, ifølge tidligere CIA-direktør James Angleton</cite></p>
          </div>

          {[
            {
              icon: '🎯',
              title: 'JFK og Israels Atomprogram',
              text: 'John F. Kennedy var den eneste amerikanske præsident der aktivt konfronterede Israel om dets hemmelige atomvåbenprogram ved Dimona-reaktoren i Negev-ørkenen.\n\nI 1963 sendte Kennedy gentagne og ufravigelige krav til Ben-Gurion om adgang for IAEA-inspektorer til Dimona.\n\nBen-Gurion trak sig som premierminister i juni 1963 frem for at give adgang.\n\nJFK blev myrdet den 22. november 1963.\n\nDen første handling hans efterfølger Lyndon B. Johnson tog: Han trak Kennedys krav om Dimona-inspektion tilbage.',
              src: 'Seymour Hersh: "The Samson Option" (1991); Avner Cohen: "Israel and the Bomb" (1998)'
            },
            {
              icon: '📋',
              title: 'JFK\'s Brev til Ben-Gurion',
              text: 'Den 18. maj 1963 skrev Kennedy til Ben-Gurion:\n\n"Jeg er begyndt at bekymre mig for at manglen på mere konkrete fremskridt mod det formål... kan medføre alvorlige problemer med USA\'s engagement i det israelske folks sikkerhed og overlevelse."\n\nDette var diplomatisk sprog for: Uden Dimona-inspektion stoppes den amerikanske støtte.\n\nBen-Gurion svarede aldrig formelt. Han afleverede sin afskedsbegæring til Knesset 16 dage efter.',
              src: 'US National Archives, Declassified Kennedy-Ben-Gurion correspondence'
            },
            {
              icon: '🔍',
              title: 'LBJ og Israels Atomvåben',
              text: 'Lyndon B. Johnson var dybt forbundet med det zionistiske netværk i Texas og Washington.\n\nEfter Kennedys død:\n• Dimona-inspektionskravene stoppede\n• USA begyndte at sende Hawk missiler og Patton kampvogne til Israel\n• USA\'s uofficielle "særlige forhold" med Israel begyndte\n\nIsraels atomprogram var hemmeligt operationelt inden 1967-krigen.\n\nHadde Kennedy levet: Mellemøstens historie havde set fundamentalt anderledes ud.',
              src: 'John Walsh: LBJ and Israel; Congressional Research Service on US-Israel relations'
            },
            {
              icon: '🕊',
              title: 'JFK om Palæstinenserne',
              text: 'I 1948 — som ung kongresmedlem — besøgte Kennedy Palæstina og skrev i sin dagbog:\n\n"Arabernes sag er stærk. Der sker uretfærdighed mod dem... Jøderne er i en meget stærk position og USA støtter dem blindt."\n\nKennedy advarede aktivt mod USA\'s blinde støtte til Israel og opfordrede til en afbalanceret tilgang der respekterede palæstinensernes rettigheder.\n\nHan var i opposition til den lobbypolitik der allerede dengang formede USA\'s Mellemøst-politik.',
              src: 'JFK Library: Kennedy\'s 1948 travel diary; Robert Dallek: "An Unfinished Life"'
            },
            {
              icon: '💬',
              title: 'Charlie Chaplin — Og Hvad Det Kostede Ham',
              text: 'Charlie Chaplin — ikke Charlie Kirk — er den historiske figur der betaler prisen for at tale ud.\n\nChaplin (1889-1977) var den mest berømte mand i verden i 1940erne. Hans film "The Great Dictator" (1940) parodierede Hitler og antisemitismen direkte.\n\nMen Chaplin nægtede at lade sig instrumentalisere politisk. Han talte om palæstinensernes rettigheder. Han kritiserede Zionismens politiske projekt.\n\nFBI under Hoover overvågede ham i årevis. I 1952 — mens han var på vej til London til premieren på "Limelight" — fratog USA ham retten til at vende tilbage.\n\nHan vendte aldrig permanent tilbage til Amerika.',
              src: 'FBI FOIA files on Charles Chaplin; David Robinson: "Chaplin: His Life and Art"'
            },
          ].map(s => (
            <div key={s.title} className="pal-card">
              <div className="pal-card-icon">{s.icon}</div>
              <h3 className="pal-card-title">{s.title}</h3>
              <p className="pal-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="pal-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'aipac' && (
        <div className="pal-section">
          <div className="pal-alert">
            <p>"AIPAC er det mest magtfulde lobbyistnetværk i Washington. Politikere der krydser det finder sig uden finansiering ved næste valg."<br/><cite>— Former US Senator William Fulbright, CBS Face the Nation, 1973</cite></p>
          </div>

          {[
            {
              icon: '🏛',
              title: 'AIPAC — The Most Powerful Lobby in Washington',
              text: 'American Israel Public Affairs Committee (AIPAC) er en af de mest indflydelsesrige lobbyorganisationer i USA\'s historie.\n\nHvert år holder AIPAC sin konference i Washington DC. Næsten alle kongressmedlemmer deltager. Talerne konkurrerer om at vise mest støtte til Israel.\n\n2022: AIPAC brugte $25+ millioner i primærvalgene — primært mod progressive demokrater der kritiserede Israels Gaza-politik.\n\nResultat: De fleste AIPAC-finansierede kandidater vandt. De kritiske tabte.',
              src: 'OpenSecrets.org AIPAC spending data, 2022'
            },
            {
              icon: '📊',
              title: 'Den Politiske Pris for Kritik',
              text: 'Disse politikere kritiserede Israels politik og betalte prisen:\n\n• Rep. Cynthia McKinney: Mistet finansiering efter AIPAC-modstand, tabte sæde\n• Sen. Charles Percy: Besejret efter AIPAC-kampagne mod ham\n• Rep. Pete McCloskey: AIPAC-finansieret modkandidat\n• Rep. Paul Findley (25 år i Kongressen): Tabte efter åbent at kritisere Israel\n\nFindley sagde bagefter: "AIPAC er årsagen til at jeg tabte. Og det er årsagen til at ingen i Washington taler frit om Israel."',
              src: 'Paul Findley: "They Dare to Speak Out" (1985)'
            },
            {
              icon: '💰',
              title: 'Den Finansielle Forbindelse',
              text: 'USA sender $3,8 milliarder i militærhjælp til Israel hvert år — uanset regering, uanset hvad Israel gør.\n\nDette er ikke velgørenhed. Det er en transaktion.\n\nTil sammenligning:\n• USA\'s samlede udenlandske bistand til hele Afrika: $8 mia/år (fordelt på 54 lande)\n• Israel alene: $3,8 mia/år\n• Gaza-offensivens amerikanske ammunition: $14+ mia i 2023-2024 alene\n\nDen israelske lobbys bidrag til amerikanske valgkampagner: $33+ millioner i 2022 alene.',
              src: 'USAID foreign assistance data; OpenSecrets.org pro-Israel PAC spending'
            },
            {
              icon: '🗣',
              title: 'Hvad Ingen Siger Højt i Washington',
              text: 'George Washington advarede i sin afskedstale (1796) mod "passionate attachments" til fremmede nationer — at en nations interesser aldrig bør underordnes en anden nations.\n\nAIPAC opererer legalt — som registreret lobbyorganisation.\n\nMen effekten er at USA\'s Mellemøst-politik i årtier primært har tjent Israels strategiske interesser fremfor Amerika\'s egne.\n\nDet er ikke antisemitisme at sige det. Det er den konklusion som tidligere CIA-chefer, senatorer og udenrigspolitiske eksperter er nået til.',
              src: 'Walt & Mearsheimer: "The Israel Lobby and U.S. Foreign Policy" (2006/2007)'
            },
          ].map(s => (
            <div key={s.title} className="pal-card">
              <div className="pal-card-icon">{s.icon}</div>
              <h3 className="pal-card-title">{s.title}</h3>
              <p className="pal-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="pal-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'archons' && (
        <div className="pal-section">
          <div className="pal-alert">
            <p>"Archonerne kontrollerer via frygt, splittelse og falsk identitet. De skjuler sig bag institutioner og ideologier. De har altid gjort det." — Nag Hammadi Tekster</p>
          </div>

          <div className="pal-card">
            <div className="pal-card-icon">⬛</div>
            <h3 className="pal-card-title">Vigtig Distinktion</h3>
            <p className="pal-card-text">Det følgende handler IKKE om jøder. Det handler om en specifik politisk-religiøs ideologi der bruger jødisk identitet som skjold — præcis som Archon-energier bruger religiøse institutioner som dækning i Nag Hammadi-teksterne.</p>
            <p className="pal-card-text" style={{marginTop:'8px'}}>Mange jødiske tænkere selv — Hannah Arendt, Norman Finkelstein, Ilan Pappé — har identificeret det samme mønster.</p>
          </div>

          {[
            {
              title: 'Archon-Principperne i Geopolitik',
              text: 'Gnostiske tekster beskriver Archonerne som:\n• Skabere af falske identiteter der adskiller mennesker\n• Controllere via frygt og ekstern trussel\n• Mestere af "blind" magt — de ser ikke den højere sandhed\n• Bruger religion og lov som kontrol-mekanismer, ikke frigørelse\n\nFra et Stargate-perspektiv: Enhver institution — stat, religion, ideologi — der bruger identitet til at retfærdiggøre skade på andre, opererer på Archon-frekvens.\n\nDette gælder Hamas. Det gælder Israels Likud-regering. Det gælder neokonservative i Washington. Det gælder enhver der bruger "Gud er på vores side" til at legitimere vold.',
            },
            {
              title: 'Zionisme som Politisk Ideologi ≠ Jødedom',
              text: 'Zionisme er en politisk bevægelse grundlagt i 1890erne af Theodor Herzl — en sekulær journalist der ikke var specielt religiøs.\n\nMange religiøse jøder — særligt ultraortodokse som Neturei Karta — betragter zionisme som en teologisk forbrydelse: At oprette en jødisk stat gennem menneskelig magt fremfor guddommelig frelsning er ifølge dem et brud mod Toraen.\n\nArchon-energien misbruger her en rig, åndelig tradition til politisk magt — præcis som Apocryphon of John beskriver Demiurgen der "stjæler lyset" og bruger det til kontrol.',
              src: 'Neturei Karta: "The Torah Position on the State of Israel"'
            },
            {
              title: 'Bibelsk Profeti og "Greater Israel"',
              text: 'Visse israelske politikere og religiøse bevægelser taler om "Eretz Yisrael HaShlema" — Det Fulde Land Israel — der ifølge bibelske tekster strækker sig fra Nilen til Eufrat.\n\nDette ville inkludere: Gaza, Vestbredden, dele af Jordan, Libanon, Syrien, Irak og Egypten.\n\nFra et Stargate-perspektiv er dette Archon-energi i sin reneste form: Brug af hellig tekst til at legitimere territorial ekspansion og menneskelig lidelse.\n\nDen sande åndelige tradition — jødisk, kristen, islamisk — peger konsekvent på retfærdighed, barmhjertighed og beskyttelse af de svage. Ikke på etnisk udrensning.',
            },
            {
              title: 'Den 5D Vinkel — Hvad Bevidsthed Ser',
              text: 'Fra et højere bevidsthedsplan — 5D perspektivet — er det palæstinensiske folks lidelse ikke kun en politisk tragedie.\n\nDet er et spejl for hele menneskelighedens evne til at se forbi stamme, religion og nationalitet og anerkende det guddommelige i alle.\n\nHver palæstinensisk child dræbt er Guds barn. Hver israelsk soldat der udfører ordrer er et mistet sjæl. Hvert AIPAC-bestukket politikere er en der solgte sin sjæl.\n\nBevidsthedsevolutionen fra 3D til 5D kræver at vi ser ALLE menneskelige væsener som del af det samme guddommelige felt — uanset nationalitet, religion eller politisk ideologi.\n\nDet er den sandhed systemet frygter mest.',
            },
          ].map(s => (
            <div key={s.title} className="pal-card">
              <h3 className="pal-card-title">{s.title}</h3>
              <p className="pal-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="pal-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
