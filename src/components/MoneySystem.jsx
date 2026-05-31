import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MoneySystem.css'

const TABS = [
  { id: 'fiat',      label: '💵 Fiat Valuta' },
  { id: 'fed',       label: '🏦 Federal Reserve' },
  { id: 'blackrock', label: '⬛ BlackRock' },
  { id: 'owners',    label: '👁 Rothschild' },
  { id: 'reset',     label: '🔄 Great Reset' },
  { id: 'crypto',    label: '₿ Alternativet' },
  { id: 'cbdc',      label: '💳 CBDC Faren' },
]

const BLACKROCK_CONTENT = [
  { title: 'BlackRock, Vanguard og State Street — De Tre Konger', text: 'Tre investeringsfonde ejer verden:\n\n• BlackRock: $10+ trillioner under forvaltning\n• Vanguard: $8+ trillioner\n• State Street: $4+ trillioner\n\nTilsammen er de de STØRSTE aktionærer i:\n• Apple · Microsoft · Amazon · Google · Tesla\n• JPMorgan Chase · Bank of America · Wells Fargo\n• Pfizer · Johnson & Johnson · Moderna\n• ExxonMobil · Chevron · Shell\n• The New York Times · Disney · CNN\n• Walmart · McDonald\'s · Nike\n\nDe ejer alt. Og Vanguard er den største aktionær i BlackRock. Hvem ejer Vanguard? Det er UKENDT — Vanguard er ejet af sine egne fonde som ejer hinanden.' },
  { title: 'ESG — Den Globale Social Credit Score for Virksomheder', text: 'ESG (Environmental, Social, Governance) ratings bestemmer om virksomheder kan få kapital fra BlackRock, Vanguard og State Street.\n\nHvis din virksomhed ikke opfylder BlackRocks ESG-krav:\n• Du kan ikke få kapital\n• Din aktiekurs falder\n• Du kan ikke overleve\n\nBlackRocks CEO Larry Fink til alle virksomhedsledere (2022 brev): "Du skal vise at din virksomhed støtter ESG-dagsordenen — ellers trækker vi os"\n\nESG tvang virksomheder til at støtte: Kønsneutrale toiletter · BLM · Klimaagenda · Vaccine-mandater\n\nDeSantis (Florida): Trak $2 milliard i statslige pensionspenge ud af BlackRock: "ESG er en kinesisk-lignende social credit score"' },
  { title: 'Det Store Money Reset', text: 'Klaus Schwab (WEF): "The Great Reset" inkluderer et nyt globalt monetært system.\n\nIMF\'s SDR (Special Drawing Rights): Allerede eksisterende global "valuta" brugt mellem centralbanker.\n\nPLANEN:\n1. Kollaps fiat-systemet (inflation, gæld-krise)\n2. Tilbyd "redningen" = ny digital global valuta styret af IMF/BIS\n3. Alle lande opgiver national monetær suverænitet\n4. "Du vil eje intet og være lykkelig"\n\nHistorisk mønster: Finanskrise → "redning" der giver bankerne mere magt:\n• 1913: Fed Reserve oprettet efter 1907-krise\n• 1944: IMF/World Bank oprettet efter WWII\n• 2008: Bankerne reddede — ikke borgerne\n• NEXT: Global CBDC efter næste store krise' },
]

export default function MoneySystem() {
  const [tab, setTab] = useState('fiat')
  const nav = useNavigate()

  return (
    <div className="ms-page">
      <div className="ms-hero">
        <div className="ms-icon">💰</div>
        <h1 className="ms-title">Penge Systemet</h1>
        <p className="ms-sub">Fiat valuta · Federal Reserve · Hvem ejer centralbankerne · CBDC</p>
        <div className="ms-quote">
          <p>"Giv mig kontrol over et lands pengesystem og jeg er ligeglad med hvem der laver lovene."</p>
          <cite>— Mayer Amschel Rothschild</cite>
        </div>
      </div>

      <div className="ms-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`ms-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'fiat' && (
        <div className="ms-section">
          <p className="ms-intro">Fiat valuta er penge der ikke er backed af noget som helst — kun regeringers løfte. Det er det system vi alle lever i.</p>
          {[
            { title: 'Hvad er Fiat Valuta?', text: 'Fiat = "Det sker således" på latin. Fiat valuta er penge der er gyldige fordi regeringen siger de er det — ikke fordi de har nogen underliggende værdi.\n\nFør 1971: Dollars var backed af guld (Bretton Woods system). Du kunne veksle dollars til fysisk guld.\n\n15. august 1971: Nixon "lukker guldvinduet" — dollar kobles fra guld. Fra det øjeblik er dollars kun papir og tal i en computer.\n\nAlle verdens valutaer flyder nu frit — og kan devalueres til nul af centralbankerne.' },
            { title: 'Inflation = Skjult Skat', text: 'Når centralbanker printer penge ("kvantitative lempelser") = de stjæler fra alle der holder valutaen.\n\n2020-2022: Federal Reserve printede $8+ trillioner på 2 år — mere end i alle foregående år tilsammen.\n\nResultat: 40-årig højeste inflation · Købekraften af dollar faldt 40%+ på 3 år.\n\nDen der sidder tættest på nye penge (banker, finansielle institutioner) vinder. Den der sidder med kontanter og lønninger taber.\n\nDette er Cantillon Effekten — systematisk omfordeling fra fattige til rige via pengeprinting.' },
            { title: 'Gæld som Kontrol', text: 'Alle moderne penge skabes som GÆLD.\n\nNår en bank udsteder et lån = de skaber nye penge ud af ingenting — ikke fra eksisterende indskud.\n\nAmerika har $34+ trillioner i national gæld. Denne gæld KAN aldrig betales tilbage under nuværende system.\n\nDet er bevidst design: Et folk i gæld er et folk der er afhængige af systemet. Du kan ikke råbe op mod banken der ejer dit hjem.' },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'fed' && (
        <div className="ms-section">
          <p className="ms-intro">Federal Reserve er ikke federal og har ingen reserver. Det er en privat bank der kontrollerer verdens reservevaluta.</p>
          {[
            { title: 'Federal Reserve er PRIVAT', text: 'Federal Reserve Bank er IKKE en statslig institution. Den er ejet af private banker som aktionærer.\n\nOprettet i 1913 via Federal Reserve Act — vedtaget natten til 23. december mens de fleste senatorer var rejst hjem til jul.\n\nJekyll Island 1910: 7 bankmænd mødtes hemmeligt på en privat ø og designede Federal Reserve. De repræsenterede 25% af verdens samlede rigdom.\n\nCongress kan ikke auditere Fed\'s guld-reserver. Ingen uafhængig revision siden 1953.\n\nRon Paul: "End the Fed" — hans bog dokumenterer at Federal Reserve er grundlæggende anti-konstitutionel.' },
            { title: 'Historien der Forklarer Alt', text: '1694: Bank of England oprettes — første private centralbank\n1913: Federal Reserve oprettes i USA\n1944: Bretton Woods — dollar bliver verdens reservevaluta\n1971: Nixon-shock — dollar kobles fra guld\n1974: Petrodollar-aftale med Saudi Arabien: Olie handles KUN i dollars\n2000: Saddam Hussein vil sælge irakisk olie i euro → USA invaderer 2003\n2007-08: Finanskrise → Federal Reserve redder bankerne med trillioner (ikke borgerne)\n2020-22: COVID → $8 trillioner printet → 40-år inflation' },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'blackrock' && (
        <div className="ms-section">
          <p className="ms-intro">BlackRock, Vanguard og State Street ejer tilsammen andele i næsten alle store virksomheder i verden. Det er den mest koncentrerede magt i historien.</p>
          {BLACKROCK_CONTENT.map(s => (
            <div key={s.title} className="ms-card">
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'reset' && (
        <div className="ms-section">
          <p className="ms-intro">The Great Reset er ikke en teori. Det er WEF's officielle plan — Klaus Schwab har skrevet bøger om det og taler åbent om det.</p>
          {BLACKROCK_CONTENT.filter(s => s.title.includes('Reset')).map(s => (
            <div key={s.title} className="ms-card">
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
          <div className="ms-card">
            <h3 className="ms-card-title">Hvad du kan gøre</h3>
            <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>• Køb fysisk guld og sølv (overlever alle valutakollapser)\n• Hold noget i Bitcoin (censur-resistent)\n• Brug kontanter aktivt\n• Støt lokale virksomheder frem for globale kæder\n• Lær at dyrke mad\n• Byg lokale netværk og fællesskaber\n• Reducér gæld\n\n"The best hedge against the system is to build skills and relationships outside the system."</p>
          </div>
        </div>
      )}

      {tab === 'owners' && (
        <div className="ms-section">
          <p className="ms-intro">Hvem ejer centralbankerne? Det spørgsmål ingen må stille — men svaret er dokumenteret.</p>
          {[
            { title: 'Bank for International Settlements (BIS)', text: 'BIS i Basel, Schweiz = Centralbankernes centralbank. Koordinerer global pengepolitik.\n\nEjet af 63 nationale centralbanker. Har diplomatisk immunitet — kan ikke sagsøges, schweizisk politi kan ikke gå ind.\n\nOprettet 1930 for at håndtere Tysklands WWI krigsgæld. Fortsatte med at drive forretning med Nazi-Tyskland under WWII.\n\nIngen demokratisk kontrol. Ingen åbenhed. Absolut magt over globalt pengesystem.' },
            { title: 'Rothschild-Familien', text: 'Mayer Amschel Rothschild (1744-1812) grundlagde det finansielle dynasti i Frankfurt.\n\nHans 5 sønner etablerede banker i: Frankfurt · London · Paris · Wien · Napoli.\n\nNathan Rothschild finansierede Englands krig mod Napoleon — og kendte resultatet af Waterloo 1 dag før markedet. Han shortede obligationer → priserne kollapsede → han købte alt → prisen eksploderede. Den maneuver gav familien kontrol over Bank of England.\n\nRothschild-banken N.M. Rothschild & Sons eksisterer stadig. Har finansieret krige og revolution i 200+ år.' },
            { title: 'Landet uden Rothschild-Bank (2000 → nu)', text: '2000: 7 lande uden Rothschild-ejet centralbank: Afghanistan · Irak · Sudan · Libyen · Cuba · Iran · Nordkorea\n\n2023: Kun Cuba, Iran og Nordkorea er tilbage.\n\nIrak invaderet 2003 (WMD løgnen) → Centralbank oprettet 2004\nAfghanistan invaderet 2001 → Centralbank oprettet under NATO\nLibyen ødelagt 2011 (Gaddafis Gold Dinar) → Centralbank oprettet UNDER krigen\n\nEr det tilfælde?' },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'crypto' && (
        <div className="ms-section">
          <p className="ms-intro">Bitcoin og krypto blev skabt som svar på det korrupte banksystem. Men ikke alle kryptovalutaer er ens.</p>
          {[
            { title: 'Bitcoin — Satoshis Vision', text: 'Bitcoin Whitepaper (2008): Udgivet under pseudonymet "Satoshi Nakamoto" — identiteten ukendt.\n\nDato: 31. oktober 2008 — midt under finanskrisen. Første bitcoin-blok (Genesis Block) indeholdt overskriften: "Chancellor on brink of second bailout for banks"\n\nBitcoin er:\n✓ Decentraliseret — ingen ejer det\n✓ Censur-resistent — ingen kan blokere transaktioner\n✓ Fast forsyning — max 21 millioner bitcoins nogensinde\n✓ Transparent — alle transaktioner offentlige\n\nBitcoin er digitalt guld — ikke et betalingssystem.' },
            { title: 'Hvad Krypto IKKE er', text: 'De fleste altcoins: Centraliserede projekter der pretenderer at være decentraliserede\n\nXRP (Ripple): Ejet af Ripple Labs · Bankverdenes foretrukne valuta · Er DET modsatte af Bitcoin\n\nCBDC (Central Bank Digital Currency): Digitale centralbankpenge = IKKE krypto = TOTAL KONTROL\n\nKryptobørser (Coinbase, Binance): Centraliserede og kan lukke din konto · Hold dine egne nøgler\n\n"Not your keys, not your coins" — hvis du ikke kontrollerer dine private nøgler ejer du intet' },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'cbdc' && (
        <div className="ms-section">
          <p className="ms-intro">CBDC = Central Bank Digital Currency. Det lyder som krypto. Det er det modsatte af krypto. Det er det ultimative kontrol-instrument.</p>
          {[
            { title: 'Hvad CBDC Er', text: 'CBDC er digitale penge udstedt DIREKTE af centralbanken — ikke via kommercielle banker.\n\nDette eliminerer kontanter og eliminerer privathed om dine transaktioner.\n\nCentralbanken kan programmere dine penge til at:\n• Udløbe (tving forbrug inden dato)\n• Kun bruges i bestemte butikker\n• Kun bruges i din by (15-minuttersbyer)\n• Afvises hvis du har for højt "carbon footprint"\n• Blokeres hvis du ytrer politisk modstand\n• Reduceres som "skat" automatisk' },
            { title: 'Det Globale Udrulning', text: '117 lande undersøger eller implementerer CBDC (IMF 2024)\n\nChina\'s e-CNY: Allerede 260 millioner brugere · Integreret med social credit system\nEU\'s Digital Euro: Planlagt 2026-2028 · Erstatter gradvist kontanter\nNigeria\'s eNaira: Første store CBDC i Afrika · Massivt mislykket — folk nægter det\n\nBIS (centralbankernes bank) koordinerer global CBDC-implementering\n\nMarkus Brunnermeier (Princeton): "CBDC giver staten mere kontrol over borgernes adfærd end nogensinde tidligere i historien"' },
            { title: 'Modstand og Alternativ', text: '✓ Brug kontanter — det er din ret og din frihed\n✓ Bitcoin — censur-resistent, ingen kan blokere\n✓ Guld og sølv — det eneste der har overlevet alle valuta-kollapser i historien\n✓ Lokale bytteøkonomier — direkte handel\n✓ Krav om retten til kontanter — det er ved at blive fjernet gradvist\n\nDa Nigeria tvang eNaira på folk og fjernede kontanter: Protester, bankbrande og til sidst indrømmelse af fejl\n\nEU sikrede i 2023 retten til at betale med kontanter — pres fra borgere virker' },
          ].map(s => (
            <div key={s.title} className="ms-card">
              <h3 className="ms-card-title">{s.title}</h3>
              <p className="ms-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
          <button className="ms-cta" onClick={() => nav('/agenda2030')}>
            Se Agenda 2030 — CBDC som del af den store plan →
          </button>
        </div>
      )}
    </div>
  )
}
