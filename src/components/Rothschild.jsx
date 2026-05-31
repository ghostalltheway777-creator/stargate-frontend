import React, { useState } from 'react'
import './Rothschild.css'

const TABS = [
  { id: 'overview',    label: '🏦 Dynastiet' },
  { id: 'banking',     label: '💰 Bankimperiet' },
  { id: 'wars',        label: '⚔️ Krige & Profit' },
  { id: 'zionism',     label: '🌍 Balfour & Israel' },
  { id: 'rockefeller', label: '🛢 Rockefellers' },
  { id: 'today',       label: '👁 I Dag' },
]

export default function Rothschild() {
  const [tab, setTab] = useState('overview')

  return (
    <div className="rth-page">
      <div className="rth-hero">
        <div className="rth-icon">🏦</div>
        <h1 className="rth-title">Rothschild & Rockefeller</h1>
        <p className="rth-sub">Dynastierne der finansierede verdenshistorien · Fra begge sider</p>
      </div>

      <div className="rth-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`rth-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="rth-section">
          {[
            {
              icon: '👑',
              title: 'Mayer Amschel Rothschild — Grundlæggeren',
              text: 'Mayer Amschel Rothschild (1744-1812) startede som møntehandler i Frankfurt-gettoen. Han opdagede en fundamental sandhed:\n\n"Giv mig kontrollen over et lands penge, og jeg er ligeglad med hvem der laver lovene."\n— Tilskrevet Mayer Amschel Rothschild\n\nHan sendte sine 5 sønner til de 5 vigtigste europæiske finanscentre:\n• Amschel (Frankfurt)\n• Salomon (Wien)\n• Nathan (London) — den vigtigste\n• Calmann/Carl (Napoli)\n• Jakob/James (Paris)\n\nDette var den første multi-nationale finanskorporation i historien. Brødrene kommunikerede via krypterede budbringere hurtigere end offentlig information spredte sig.',
            },
            {
              icon: '📡',
              title: 'Nathan i London — Informationsforspringet',
              text: 'Nathan Mayer Rothschild i London er legendarisk for sin handel efter Waterloo-slaget (1815).\n\nRothschild-kurere nåede London med nyheden om Napoleons nederlag BEFORE den officielle britiske regering vidste det.\n\nNathan solgte britiske statsobligationer synligt på børsen. Alle troede Napoleon havde vundet. Markedet styrtdykkede i panik.\n\nSå — i det stille — opkøbte han alt til bundpris via mellemmænd.\n\nDa den officielle nyhed kom: Markedet eksploderede. Rothschild tjente et beløb svarende til milliarder i moderne valuta på én dag.\n\nDen morale: Den der kontrollerer informationsstrømmen kontrollerer markedet.',
              src: 'Niall Ferguson: "The House of Rothschild" (1998)'
            },
          ].map(s => (
            <div key={s.title} className="rth-card">
              <div className="rth-card-icon">{s.icon}</div>
              <h3 className="rth-card-title">{s.title}</h3>
              <p className="rth-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="rth-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'banking' && (
        <div className="rth-section">
          {[
            {
              icon: '🏛',
              title: 'Centralbanker — Rothschilds Projekt',
              text: 'Kernen i Rothschild-magt er centralbanksystemet.\n\nTidligere eksisterede statsbanker der udstedte penge direkte til befolkningen. Rothschild-systemet erstatter dette med PRIVATE banker der udlåner penge til staten — med rente.\n\nBetydningen: Alle penge i omløb er skabt som gæld til en privat bank.\n\nBank of England — oprettet 1694 — var den første centrale privatbank. Rothschilds overtog kontrol over den under Napoleonskrigene.\n\nFederal Reserve (USA, 1913): Privatbank. Dens aktionærer er aldrig fuldt offentliggjort. Woodrow Wilson der underskrev loven sagde senere:\n\n"Jeg er en ulykkeligste mand. Jeg har ubevidst ødelagt mit land. En stor industriel nation kontrolleres af sit kreditsystem. Vort kreditsystem er koncentreret. Væksten af nationen er derfor i hænderne på få mænd."',
              src: 'Eustace Mullins: "Secrets of the Federal Reserve" (1952)'
            },
            {
              icon: '💴',
              title: 'Alle Centralbanker',
              text: 'Der er i dag kun 3 lande i verden UDEN en Rothschild-forbundet centralbank:\n• Nordkorea\n• Iran\n• Cuba\n\nLige før 9/11 var der 7 lande uden: Afghanistan, Irak, Libyen, Syrien, Sudan, Cuba og Nordkorea.\n\nEfter "krigen mod terror":\n• Afghanistan invaderet 2001 → centralbank oprettet\n• Irak invaderet 2003 → centralbank oprettet\n• Libyen invaderet 2011 → Muammar Gaddafi dræbt → centralbank oprettet\n\nGaddafi havde planer om at skabe en pan-afrikansk guldvaluta der ville erstatte dollaren i Afrika. Det ville have frigjort 54 afrikanske nationer fra IMF-gæld.\n\nDette er årsagen til hans drab — ikke hans menneskeret. Det siger Hillary Clintons egne emails.',
            },
          ].map(s => (
            <div key={s.title} className="rth-card">
              <div className="rth-card-icon">{s.icon}</div>
              <h3 className="rth-card-title">{s.title}</h3>
              <p className="rth-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="rth-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'wars' && (
        <div className="rth-section">
          <div className="rth-alert">
            <p>Den der finansierer begge sider af en krig kan ikke tabe. Det er Rothschild-modellen.</p>
          </div>
          {[
            {
              icon: '⚔️',
              title: 'Napoleonskrigene — Begge Sider',
              text: 'Under Napoleonskrigene (1803-1815) finansierede Rothschild-banken:\n• England (via Nathan i London)\n• Frankrig (via James i Paris)\n\nDet er dokumenteret at krigslån til begge parter flød gennem Rothschild-netværket.\n\nResultat: Nathan Rothschild blev den rigeste mand i England. Krigens sejrherre var ligegyldig — banken vandt uanset.',
            },
            {
              icon: '🇺🇸',
              title: 'Den Amerikanske Borgerkrig',
              text: 'Otto von Bismarck sagde i 1876:\n\n"Delingen af USA i to føderationer af lignende størrelse og styrke var besluttet af de høje finansfolk i Europa. Disse bankirer frygtede den amerikanske republiks fremgang til verdens generelle velfærd. Det var dem der arbejdede for at se det gjort."\n\nLincoln opfandt "Greenbacks" — statsskabte penge UDEN rente til private banker. Det var hans "kriminalitet" i bankernes øjne.\n\nHan blev myrdet i 1865 af John Wilkes Booth — hvis forbindelser til internationale bankierer er undersøgt men aldrig offentliggjort fuldt ud.',
              src: 'Otto von Bismarck (1876), citeret i diverse historiske analyser'
            },
            {
              icon: '🌍',
              title: '1. og 2. Verdenskrig',
              text: 'J.P. Morgan (Rothschild-agent i USA) finansierede Allied Powers under WW1.\n\nDe samme banker — via komplekse kæder — finansierede Hitlers oprustning under WW2.\n\nPrescott Bush (Union Banking Corporation) + Thyssen (Hitlers industrielle finanskilde) er dokumenteret.\n\nResultat af begge krige:\n• Rothschild-forbundne banker dominerede global økonomi\n• Fed Reserve cementeret som verdens reservevalutaens udsteder\n• BIS (Bank for International Settlements) oprettet 1930 — "bankernes bank" i Basel\n• IMF og Verdensbanken oprettet 1944 (Bretton Woods)\n\nAlt dette er Rothschild-arkitektur.',
            },
          ].map(s => (
            <div key={s.title} className="rth-card">
              <div className="rth-card-icon">{s.icon}</div>
              <h3 className="rth-card-title">{s.title}</h3>
              <p className="rth-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="rth-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'zionism' && (
        <div className="rth-section">
          <div className="rth-green-box">
            <h2>⚖️ Vigtig Distinktion</h2>
            <p>Dette handler om politisk zionisme og statspolitik — ikke om det jødiske folk som helhed. Rothschild-familien brugte zionisme som et politisk projekt. Det er ikke repræsentativt for jødiske mennesker generelt.</p>
          </div>
          {[
            {
              icon: '📜',
              title: 'Balfour-erklæringen 1917',
              text: 'Den 2. november 1917 sendte den britiske udenrigsminister Arthur Balfour et brev til Lord Walter Rothschild.\n\nBrevet lovede at oprettelsen af et "nationalt hjem for det jødiske folk" i Palæstina ville blive støttet af den britiske regering.\n\nDette er bemærkelsesværdigt fordi:\n1. Det er et PRIVAT brev fra en regering til en privat bankier\n2. Palæstina var IKKE britisk territorium på det tidspunkt (det var osmanisk)\n3. Det arabiske folk der boede der blev ikke konsulteret\n\nSpørgsmålet: Hvad fik briterne til gengæld?\n\nTeoriens svar: USA\'s indgang i WW1 på de allieredes side. Rothschild-indflydelse i USA var afgørende for at presse Wilson til at indgå i krigen.',
              src: 'Balfour-erklæringen, 2. november 1917 (offentligt dokument)'
            },
            {
              icon: '🇮🇱',
              title: 'Staten Israel — Rothschilds Projekt',
              text: 'Edmond de Rothschild (1845-1934) finansierede de første jødiske bosættelser i Palæstina fra 1880erne.\n\nHan kaldte sig selv "Palæstinas Far".\n\nHan brugte millioner på at:\n• Opkøbe jord i Palæstina\n• Finansiere bønder og kolonier\n• Opbygge infrastruktur for det fremtidige Israel\n\nKnesset (det israelske parlament) i Jerusalem er bygget på doneret Rothschild-jord.\n\nSupreme Court of Israel i Jerusalem er designet og finansieret af Dorothy de Rothschild. Den indeholder bevidst frimurerisk symbolik inkl. en obelisk, pyramid og Illuminati-sti.',
            },
          ].map(s => (
            <div key={s.title} className="rth-card">
              <div className="rth-card-icon">{s.icon}</div>
              <h3 className="rth-card-title">{s.title}</h3>
              <p className="rth-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="rth-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'rockefeller' && (
        <div className="rth-section">
          {[
            {
              icon: '🛢',
              title: 'John D. Rockefeller — Standard Oil',
              text: 'John D. Rockefeller (1839-1937) grundlagde Standard Oil og blev verdens første milliardær.\n\nPå sit højeste kontrollerede Standard Oil 90% af al olieraffinering i USA.\n\nI 1911 tvang den amerikanske Højesteret Standard Oil til at splittes op i 34 selskaber.\n\nResultat: Rockefeller ejede nu aktier i ALLE 34 selskaber. Hans formue voksede.\n\nDe 34 selskaber er i dag bl.a. ExxonMobil, Chevron, BP America — de største olieselskaber i verden.\n\nRockefeller finansierede:\n• Medicinuddannelse (Flexner-rapporten 1910 — dræbte naturmedicin)\n• Rockefeller University\n• Folkesundhed i USA\n• Council on Foreign Relations (CFR) — grundlagt 1921',
            },
            {
              icon: '👔',
              title: 'David Rockefeller — Den Globale Arkitekt',
              text: 'David Rockefeller (1915-2017) var barnebarn af John D. og den mest indflydelsesrige Rockefeller i det 20. århundrede.\n\nHan levede til han var 101 år — og modtog angiveligt seks hjertetransplantationer (en detalje der i sig selv rejser spørgsmål).\n\nHan var:\n• Formand for Chase Manhattan Bank 1969-1981\n• Grundlægger af Trilateral Commission (1973)\n• Aktiv i Council on Foreign Relations (CFR)\n• Bilderberg-deltager i årtier\n• Tæt forbundet med Henry Kissinger\n\nHans bogcitat er det mest citerede "åbne tilståelse" af globalistisk agenda i historien.',
            },
            {
              icon: '📖',
              title: 'David Rockefellers Erindringer (2002) — Det Citat',
              quote: true,
              text: '"Nogle tror endda at vi er en del af en hemmelig kabale der arbejder imod USA\'s bedste interesser, og karakteriserer min familie og mig som \'internationalister\' og sammensværger med andre rundt om i verden for at bygge en mere integreret global politisk og økonomisk struktur — én verden, om man vil. Hvis det er anklagen, erklærer jeg mig skyldig, og er stolt af det."',
              src: 'David Rockefeller: "Memoirs" (2002), side 405'
            },
            {
              icon: '🌐',
              title: 'Trilateral Commission — Den Globale Regering',
              text: 'David Rockefeller grundlagde Trilateral Commission i 1973 med Zbigniew Brzezinski.\n\nMedlemmer: Topchefer fra USA, Europa og Japan (nu udvidet). Centralbankpræsidenter, stats- og udenrigsministre, CEO\'er for de største selskaber.\n\nDet er en PRIVAT organisation. Dens møder er ikke offentlige. Dens beslutninger er ikke genstand for demokratisk kontrol.\n\nBrzezinski beskrev målet åbent:\n"Nationen er for lille til at løse verdens problemer og for stor til at løse lokale problemer."\n\nOversættelse: Nationalstaten skal opløses til fordel for globale institutioner — styret af hvem? Af de mænd der sidder i Trilateral Commission.',
              src: 'Zbigniew Brzezinski: "Between Two Ages" (1970)'
            },
          ].map(s => (
            <div key={s.title} className={`rth-card ${s.quote ? 'rth-quote' : ''}`}>
              <div className="rth-card-icon">{s.icon}</div>
              <h3 className="rth-card-title">{s.title}</h3>
              {s.quote
                ? <blockquote className="rth-blockquote">{s.text}</blockquote>
                : <p className="rth-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              }
              {s.src && <p className="rth-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'today' && (
        <div className="rth-section">
          {[
            {
              icon: '🏠',
              title: 'Rothschild i Dag',
              text: 'Rothschild & Co er i dag en global finansiel rådgivningsvirksomhed med kontorer i 40 lande.\n\nDe rådgiver om:\n• Fusioner og opkøb\n• Statsfinansiering\n• Restruktureringer\n\nDe er ikke synlige. De er ikke i aviserne. Det er præcis pointen.\n\nEvelyn de Rothschild (1931-2022): Rådgiver for den britiske dronning. Ridder. Nær ven med Henry Kissinger.\n\nJacob Rothschild (1936-2024): Bestyrelsesformand i RIT Capital Partners. Ejer af Waddesdon Manor. Nær ven med George Soros, Bill Gates og Klaus Schwab.\n\nHan døde i 2024. Hvem overtager? Det fortæller de os ikke.',
            },
            {
              icon: '🌐',
              title: 'WEF — Klaus Schwab og Den 4. Industrirevolution',
              text: 'Klaus Schwab grundlagde World Economic Forum i 1971. Hans mentor var Henry Kissinger (Rockefeller-mand).\n\nSchwabs "Young Global Leaders" program har uddannet:\n• Emmanuel Macron (Frankrig)\n• Justin Trudeau (Canada)\n• Jacinda Ardern (New Zealand)\n• Mark Zuckerberg\n• Bill Gates\n\nSchwabs bog "The Great Reset" (2020) beskriver åbent:\n• Privat ejendomsret afskaffes\n• "Du ejer intet og er lykkelig"\n• Fusion af menneskekroppen med teknologi\n• Global vaccination som adgangskontrol\n\nDette er ikke konspirationsteori. Det er Schwabs egne ord.',
              src: 'Klaus Schwab & Thierry Malleret: "COVID-19: The Great Reset" (2020)'
            },
            {
              icon: '💉',
              title: 'Bill Gates — Den Nye Rockefeller',
              text: 'John D. Rockefeller redesignede vestlig medicin via Flexner-rapporten (1910) og eliminerede naturmedicin som accepteret behandling.\n\nBill Gates gør det samme med global sundhedspolitik via:\n• Bill & Melinda Gates Foundation — verdens største private sundhedsdonor\n• WHO: Gates er den næststørste bidragsyder (efter USA)\n• GAVI: Vaccinationsalliance. Gates er grundlægger\n• CEPI: Covid-vaccineudvikling. Gates er medfinansiør\n\nEn privat mand der ikke er valgt af nogen kontrollerer global sundhedspolitik for 8 milliarder mennesker.\n\nDet er nøjagtig den samme model som Rockefeller brugte — bare med vacciner i stedet for olie.',
            },
          ].map(s => (
            <div key={s.title} className="rth-card">
              <div className="rth-card-icon">{s.icon}</div>
              <h3 className="rth-card-title">{s.title}</h3>
              <p className="rth-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="rth-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
