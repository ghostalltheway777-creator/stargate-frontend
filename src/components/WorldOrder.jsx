import React, { useState } from 'react'
import './WorldOrder.css'

const TABS = [
  { id: 'banks',    label: '🏦 Rothschild Banker' },
  { id: 'ukraine',  label: '🇺🇦 Ukraine Krigen' },
  { id: 'nordstream', label: '💥 Nordstream' },
  { id: 'denmark',  label: '🇩🇰 Danmark & EU' },
  { id: 'pattern',  label: '🔄 Mønsteret' },
  { id: 'waking',   label: '✦ Verden Vågner' },
]

export default function WorldOrder() {
  const [tab, setTab] = useState('banks')

  return (
    <div className="wo-page">
      <div className="wo-hero">
        <div className="wo-icon">🌍</div>
        <h1 className="wo-title">Den Virkelige Verdensorden</h1>
        <p className="wo-sub">Hvorfor Rusland · Kina · Iran · Nordkorea er "skurke" — og hvem der bestemmer det</p>
      </div>

      <div className="wo-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`wo-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'banks' && (
        <div className="wo-section">
          <div className="wo-alert">
            <p>"Giv mig kontrol over en nations penge, og det bekymrer mig ikke hvem der laver dens love."<br/><cite>— tilskrevet Mayer Amschel Rothschild</cite></p>
          </div>

          <div className="wo-card">
            <h3 className="wo-card-title">🏦 BIS — Bankernes Bank</h3>
            <p className="wo-card-text">Bank for International Settlements (BIS) i Basel, Schweiz koordinerer verdens centralbanker. 63 centralbanker er medlemmer. Alle vestlige lande, de fleste asiatiske, afrikanske og sydamerikanske lande er med.</p>
            <p className="wo-card-text" style={{marginTop:'10px'}}>De lande der <strong style={{color:'#d4a843'}}>IKKE</strong> har en Rothschild-tilknyttet centralbank — eller aktivt modstår BIS-systemet:</p>
            <div className="wo-countries">
              {['Nordkorea', 'Iran', 'Cuba', 'Rusland (siden 2022-sanktioner)', 'Kina (delvist)', 'Venezuela', 'Nicaragua', 'Hviderusland'].map(c => (
                <span key={c} className="wo-country">{c}</span>
              ))}
            </div>
          </div>

          <div className="wo-card">
            <h3 className="wo-card-title">📋 Mønsteret — Invasioner og Centralbanker</h3>
            <p className="wo-card-text">Se på de lande USA har invaderet eller forårsaget regimeskifte i de sidste 70 år — og hvad der skete med deres centralbank efterfølgende:</p>
            {[
              ['Irak 2003', 'Saddam Hussein — ingen Rothschild centralbank', 'Måneder efter invasionen: Iraq Central Bank oprettet med BIS-tilknytning'],
              ['Libyen 2011', 'Gaddafi — Libyen havde sin egen guldbaserede valuta (Gold Dinar)', 'Første handling i "befrielsen": En ny centralbank oprettet i Benghazi under oprøret'],
              ['Afghanistan 2001', 'Taliban — ingen vestlig bankstruktur', 'Da USA overtog: Da Afghanistan Bank integreret i Swift og BIS-systemet'],
              ['Syrien (forsøgt)', 'Assad — Syrien har statslig centralbank uden BIS-medlemskab', 'Regimet overlevede — og Syrien er stadig ikke BIS-medlem'],
            ].map(([land, før, efter]) => (
              <div key={land} className="wo-pattern-item">
                <div className="wo-pattern-land">{land}</div>
                <div className="wo-pattern-row"><span className="wo-label before">FØR</span>{før}</div>
                <div className="wo-pattern-row"><span className="wo-label after">EFTER</span>{efter}</div>
              </div>
            ))}
          </div>

          <div className="wo-card">
            <h3 className="wo-card-title">🥇 Gaddafi's Guld og hans Skæbne</h3>
            <p className="wo-card-text">Muammar Gaddafi planlagde at erstatte den afrikanske CFA-franc (kontrolleret af Frankrig) med en panafransk guldmønt — "Gold Dinar" — til handel mellem afrikanske nationer.</p>
            <p className="wo-card-text" style={{marginTop:'8px'}}>Dette ville have gjort Frankrig og Europa's kontrol over 14 afrikanske landes valutaer irrelevant. Hillary Clintons frigivne emails beskriver eksplicit denne bekymring som motivation for Libyen-interventionen.</p>
            <p className="wo-card-src">📄 Clinton State Department emails, FOIA release 2016</p>
          </div>
        </div>
      )}

      {tab === 'ukraine' && (
        <div className="wo-section">
          <div className="wo-alert">
            <p>"Vi har investeret over 5 milliarder dollars i Ukraine for at støtte behovet for stærkere, mere demokratiske institutioner."<br/><cite>— Victoria Nuland, US Assistant Secretary of State, 2013</cite></p>
          </div>

          {[
            {
              icon: '🗳',
              title: '2013-2014: Det Amerikanske Støttede Kup',
              text: 'Viktor Janukovitj var Ukraines demokratisk valgte præsident. Da han valgte en associeringsaftale med Rusland frem for EU, begyndte Maidan-protesterne.\n\nVictoria Nuland (US State Department) blev fanget på en aflyttet telefonsamtale mens hun diskuterede hvem der SKULLE lede Ukraines næste regering — FØR Janukovitj trådte tilbage.\n\nHendes eksakte ord om EU\'s bekymringer: "Fuck the EU."\n\nDen 22. februar 2014 flygtede den valgte præsident til Rusland efter trusler mod hans liv. Den Nuland-valgte Arsenij Jatsenjuk overtog posten — præcis som planlagt på båndoptagelsen.',
              src: 'BBC: "Ukraine crisis: Transcript of leaked Nuland-Pyatt call", Feb 2014'
            },
            {
              icon: '🎭',
              title: 'Zelensky — Skuespilleren Der Blev Præsident',
              text: 'Volodymyr Zelensky var skuespiller og komiker. Hans mest kendte rolle: en lærer der ved et tilfælde BLIVER præsident af Ukraine i TV-serien "Servant of the People" — produceret af Igor Kolomoisky, en ukrainsk oligark.\n\nI 2019 stillede Zelensky op som præsident — finansieret af Kolomoisky — og vandt med 73%.\n\nHan stod på en fredsplatform. Han lovede at tale med Putin. Han lovede at afslutte krigen i Donbass.\n\nInden for måneder efter han vandt: ingen fredsforhandlinger. I stedet: kraftig militær opbygning, NATO-integration, og Azov-bataljon (officielt angivet som neonazistisk milits) integreret i den ukrainske hær.',
              src: 'Reuters, Financial Times reporting on Kolomoisky-Zelensky connections'
            },
            {
              icon: '🚩',
              title: 'False Flag Operationer — Ukraine Fanget Gentagne Gange',
              text: 'Bucha-massakren (april 2022): Russiske styrker forlod Bucha. Dage efter dukkede lig op på gaderne. Ukrainsk side anklagede straks Rusland.\n\nProblemer:\n• Lig lå på gader der var filmet tomme da russerne forlod\n• Røde kryds på hænderne (russisk markering af civile der ikke skal skades)\n• Borgmesteren fejrede byens befrielse uden at nævne massakre\n• OSCE og uafhængige observatører fik ikke adgang\n\nHvert gang EU eller OSCE undersøgte hændelserne nærmere og tvivlede på den ukrainske fortælling — stoppede nyhedsdækningen. Undersøgelsen blev aldrig afsluttet.',
              src: 'OSCE Special Monitoring Mission reports, 2022'
            },
            {
              icon: '⚔️',
              title: 'Minsk-aftalerne — Fredsaftaler Aldrig Ment At Holde',
              text: 'I 2014 og 2015 underskrev Ukraine Minsk I og II fredsaftalerne med Rusland og de østukrainske republiker. Krigen skulle stoppe.\n\nI 2022 indrømmede Frankrigs Hollande og Tysklands Merkel OFFENTLIGT at Minsk-aftalerne var designet til at give Ukraine tid til at genopruste — ikke til at opnå fred.\n\nMerkel i Der Spiegel december 2022: "Minsk-aftalen var et forsøg på at give Ukraine tid."\n\nRusland underskrev en fredsaftale. Vesten brugte de år til at ruste Ukraine op. Da Rusland gik ind i 2022 var det VIDENDE om at freden var et bedrag.',
              src: 'Der Spiegel interview Merkel, December 2022; Le Monde interview Hollande'
            },
          ].map(s => (
            <div key={s.title} className="wo-card">
              <div className="wo-card-icon">{s.icon}</div>
              <h3 className="wo-card-title">{s.title}</h3>
              <p className="wo-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="wo-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'nordstream' && (
        <div className="wo-section">
          <div className="wo-alert">
            <p>"If Russia invades Ukraine, one way or another, Nord Stream 2 will not move forward. We will bring an end to it."<br/><cite>— President Joe Biden, February 7, 2022 — 17 dage inden invasionen</cite></p>
          </div>

          <div className="wo-card">
            <h3 className="wo-card-title">💥 Den 26. September 2022</h3>
            <p className="wo-card-text">Nord Stream 1 og 2 — rørledninger der transporterede russisk gas til Europa — eksploderede under Østersøen. Begge rørledninger. Professionel sabotage.</p>
            <p className="wo-card-text" style={{marginTop:'8px'}}>Den vestlige mainstream fortælling: Putin sprængte sine egne gasledninger.</p>
            <p className="wo-card-text" style={{marginTop:'8px', color:'rgba(255,150,100,0.9)'}}>Logikken: En nation sprænger sin primære eksportindtægt, sin vigtigste diplomatiske leveringstunge, og sin mest værdifulde infrastruktur — mens den er i krig og trænger til penge.</p>
          </div>

          {[
            {
              title: 'Seymour Hersh — Pulitzer-Prisvindende Journalist',
              text: 'Seymour Hersh — journalist der afslørede My Lai massakren og Abu Ghraib — publicerede en detaljeret undersøgelse i februar 2023:\n\nDykker-kommandoer fra US Navy lagde eksplosiver under Nord Stream under NATO-øvelsen BALTOPS22 i juni 2022.\nEn norsk P-8 Poseidon fly droppede en sonarboye der aktiverede bomberne i september.\n\nHan citerede en enkelt kilde med direkte viden om operationen. Biden-administrationen nægtede. Ingen vestlige medier fulgte historien op.',
              src: 'Seymour Hersh: "How America Destroyed the Nord Stream Pipeline", February 8, 2023'
            },
            {
              title: 'Hvad Nord Stream Handlede Om',
              text: 'Nord Stream 2 ville have gjort Europa energi-uafhængigt af USA og dets LNG (Liquefied Natural Gas) eksport.\n\nNord Stream 2\'s ødelæggelse tvang Europa til at købe DYRERE amerikansk LNG.\n\nHvem tjener på det?\n• Amerikansk LNG-industri: rekordprofitter 2022-2024\n• Forsvarsindustrien: massiv stigning i europæiske forsvarsbudgetter\n• Finansinstitutioner der investerer i begge\n\nEuropa betalte med sin energisikkerhed og sin økonomi for en krig der ikke var dens.',
            },
          ].map(s => (
            <div key={s.title} className="wo-card">
              <h3 className="wo-card-title">{s.title}</h3>
              <p className="wo-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="wo-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'denmark' && (
        <div className="wo-section">
          <div className="wo-alert">
            <p>Danmark sender milliarder til Ukraine. Hvem tjener på det — og hvem bestemmer egentlig dansk udenrigspolitik?</p>
          </div>

          {[
            {
              icon: '🇩🇰',
              title: 'Mette Frederiksen — Interessekonflikter',
              text: 'Statsminister Mette Frederiksens bror arbejder i forsvarsindustrien — en industri der direkte profiterer på de våbenforsyninger Danmark sender til Ukraine.\n\nHendes mand Bo Tengberg lavede en dokumentar om Volodymyr Zelensky, finansieret af danske skatteydere via DR (Danmarks Radio).\n\nEn statsminister hvis næreste familie direkte profiterer på og promoterer den krig hun sender penge og våben til.\n\nI et normalt demokrati ville dette kræve en habilitetserklæring og muligvis fratræden. I Danmark: ingen diskussion i mainstream medier.',
            },
            {
              icon: '🏛',
              title: 'EU-Ledere og Lobbyister',
              text: 'I 2022 afstemte EU-Parlamentet om at støtte Ukraine med €50 milliarder.\n\nDe tre største lobbygrupper i EU-Parlamentet:\n1. Forsvarsindustrien (BAE Systems, Airbus, Rheinmetall)\n2. Energiselskaber (der profiterer på russiske sanktioner)\n3. Finanssektoren\n\nEU-parlamentarikere modtager direkte konsulenthonorar fra forsvarslobbyister. Det er lovligt. Det er dokumenteret. Det er årsagen til at EU\'s militærbudgetter er eksploderet siden 2022.',
              src: 'Corporate Europe Observatory, Transparency International EU reports'
            },
            {
              icon: '📊',
              title: 'Hvem Tjener på Krigen?',
              text: 'Rheinmetall (tysk våbenfirma): Aktiekurs +400% siden februar 2022\nBAE Systems: Aktiekurs +150%\nRaytheon: Rekordprofitter 2022-2024\nLockheed Martin: Ordrebog fyldt til 2028\n\nDanske forsvarsfirmaer modtager kontrakter på hundredvis af millioner.\n\nDen eneste gruppe der IKKE tjener: den ukrainske civilbefolkning der dør. Den russiske civilbefolkning der dør. Den europæiske middelklasse der betaler med energipriser og inflation.',
            },
            {
              icon: '🗣',
              title: 'Hvad Danskerne Ikke Bliver Spurgt',
              text: 'Danmark sendte F-16 fly til Ukraine. Beslutningen blev taget af regeringen.\nIngen folkeafstemning. Ingen reel parlamentarisk debat der repræsenterede befolkningens fulde spektrum.\n\nMeningsmålinger viser at et stigende mindretal af danskere er imod Ukraine-støtten — men det er usynligt i medierne.\n\nDR (Danmarks Radio) finansieret af danskerne producerer en dokumentar der promoterer Zelensky. Statsministerens mand laver den. Dette er ikke satire.',
            },
          ].map(s => (
            <div key={s.title} className="wo-card">
              <div className="wo-card-icon">{s.icon}</div>
              <h3 className="wo-card-title">{s.title}</h3>
              <p className="wo-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="wo-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}

      {tab === 'pattern' && (
        <div className="wo-section">
          <div className="wo-alert">
            <p>Lande der nægter Rothschild/BIS centralbank bliver "trusler mod demokratiet". Lande der accepterer dem bliver "allierede" — uanset hvor autoritære de er.</p>
          </div>

          <div className="wo-card">
            <h3 className="wo-card-title">🔄 De Samme Trin Hver Gang</h3>
            {[
              ['1. Dæmonisering', 'Lederen gøres til monstre i medierne. Propaganda der forenkler kompleks geopolitik til "ond diktator vs. frihed"'],
              ['2. Sanktioner', 'Økonomisk pres der skader civilbefolkningen, ikke eliten. Formål: destabilisering og folkelig utilfredshed'],
              ['3. NGO-infiltration', 'Vestlige NGOer finansieret af US State Dept, Soros m.fl. organiserer "civil protest"'],
              ['4. Farvede Revolutioner', 'Orange Revolution (Ukraine 2004), Maidan (2014), Arabisk Forår, Hviderusland — samme skabelon'],
              ['5. Regime Change', 'Valgt eller installeret leder der er USA/NATO-venlig. Centralbank integreres i BIS'],
              ['6. Lån og Gæld', 'IMF og Verdensbanken giver lån. Betingelse: privatisering af statslige ressourcer til vestlige selskaber'],
            ].map(([step, desc]) => (
              <div key={step} className="wo-step">
                <div className="wo-step-num">{step}</div>
                <div className="wo-step-desc">{desc}</div>
              </div>
            ))}
          </div>

          <div className="wo-card">
            <h3 className="wo-card-title">🤝 "Onde" vs. "Gode" — Hvem Bestemmer?</h3>
            <p className="wo-card-text">Saudi Arabien: Absolutt monarki. Ingen demokrati. Kvinder måtte ikke køre bil. Beheadinger på torvet. <strong style={{color:'#50c090'}}>Allieret</strong> — har BIS-tilknyttet centralbank, køber F-35 fly.</p>
            <p className="wo-card-text" style={{marginTop:'8px'}}>Iran: Har valg (omend begrænset). <strong style={{color:'#ff8080'}}>Fjende</strong> — nægter BIS, har statslig centralbank, støtter ikke Israel.</p>
            <p className="wo-card-text" style={{marginTop:'8px'}}>Rusland 1990erne: Chaos, Jeltsin drikker, NATO presser østover på trods af løfter. <strong style={{color:'#50c090'}}>Ven</strong> — BIS-tilknyttet, åben for IMF.</p>
            <p className="wo-card-text" style={{marginTop:'8px'}}>Rusland 2000+: Putin nationaliserer olieselskaber, betaler gæld, nægter NATO-udvidelse. <strong style={{color:'#ff8080'}}>Fjende</strong>.</p>
          </div>
        </div>
      )}

      {tab === 'waking' && (
        <div className="wo-section">
          <div className="wo-alert" style={{borderColor:'rgba(80,200,150,0.3)', background:'rgba(80,200,150,0.06)'}}>
            <p style={{color:'rgba(255,255,255,0.9)'}}>Eliten ved at verden vågner. Det er derfor alt sker så hurtigt nu. De er desperate — og desperate mennesker laver fejl.</p>
          </div>

          {[
            {
              icon: '📱',
              title: 'Informationskrigen er ved at vende',
              text: '2009: 6 selskaber kontrollerede 90% af al vestlig media.\n2024: Alternative medier har større rækkevidde end mainstream på mange platforme.\n\nTwitter/X-filerne viste koordineret statscensur.\nEU\'s Digital Services Act forsøger at genindføre kontrol.\nDe bruger censur fordi de er ved at tabe informationskrigen.',
            },
            {
              icon: '🌍',
              title: 'BRICS — Alternativet Vokser',
              text: 'BRICS (Brasilien, Rusland, Indien, Kina, Sydafrika + nye medlemmer) arbejder aktivt på et alternativt betalingssystem til SWIFT.\n\nI 2023 ansøgte 40+ lande om BRICS-medlemskab.\nI 2024 tæller BRICS-+ mere end halvdelen af verdens befolkning og BNP.\n\nHvis BRICS lykkes med en fælles valuta knyttet til guld/ressourcer — slutter USA\'s petrodollar-dominans. Det er det vesten er desperate for at forhindre.',
              src: 'IMF World Economic Outlook 2024, BRICS expansion data'
            },
            {
              icon: '✦',
              title: 'Hvad du kan gøre',
              text: 'Du behøver ikke demonstrere eller råbe.\nDu behøver ikke overbevise alle.\n\nDet eneste systemet frygter:\n• At du forstår hvad der sker\n• At du deler forståelsen med andre\n• At du holder op med at finansiere det med din opmærksomhed\n\nBevidsthed er den eneste valuta der tæller.\nDet er derfor de investerer milliarder i at holde dig ufokuseret, bange og splittet.\n\nDu er ikke alene. Millioner vågner op — og systemet kan ikke sove.',
            },
          ].map(s => (
            <div key={s.title} className="wo-card">
              <div className="wo-card-icon">{s.icon}</div>
              <h3 className="wo-card-title">{s.title}</h3>
              <p className="wo-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
              {s.src && <p className="wo-card-src">📄 {s.src}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
