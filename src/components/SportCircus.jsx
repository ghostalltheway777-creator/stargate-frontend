import React, { useState } from 'react'
import './SportCircus.css'

const TABS = [
  { id: 'circus',   label: '🎪 Sport som Cirkus' },
  { id: 'money',    label: '💰 Pengene bag' },
  { id: 'ritual',   label: '🔺 Ritualerne' },
  { id: 'reality',  label: '📺 Reality TV' },
  { id: 'time',     label: '⏰ Din Tid' },
  { id: 'awake',    label: '✦ Se Det' },
]

export default function SportCircus() {
  const [tab, setTab] = useState('circus')

  return (
    <div className="sc-page">
      <div className="sc-hero">
        <div className="sc-icon">🏟</div>
        <h1 className="sc-title">Sport · Reality · Entertainment</h1>
        <p className="sc-sub">Panem et Circenses — Brød og Cirkus. 2000 år gammelt. Stadig virker.</p>
      </div>

      <div className="sc-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`sc-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'circus' && (
        <div className="sc-section">
          <div className="sc-alert">
            <p>"Giv folk brød og cirkus, og du kan gøre hvad du vil med dem."<br/>
            <cite>— Juvenal, romersk satiriker, ca. 100 e.Kr.</cite></p>
          </div>

          {[
            {
              icon: '🏟',
              title: 'Colosseum → NFL → Champions League',
              text: 'Roms Colosseum rummede 50-80.000 tilskuere. Gladiatorkampe, dyrekampe, henrettelser. Gratis adgang for det brede folk — finansieret af staten.\n\nFormålet var aldrig underholdning. Det var KONTROL.\n\nEn befolkning der råber og hepper kan ikke tænke kritisk. En befolkning der er følelsesmæssigt investeret i et holds sejr har ikke mental kapacitet til at bekymre sig om skattelovgivning, krig eller korruption.\n\nI dag:\n• Super Bowl: 100+ millioner seere — ét show\n• Champions League finale: 400+ millioner seere\n• World Cup: Over 1 milliard seere\n\nDette er planeten største synkroniserede distraktions-begivenhed. Det er ikke tilfældigt at den sker netop når politiske beslutninger tages.',
            },
            {
              icon: '🧠',
              title: 'Tribal Instinkt som Kontrolmekanisme',
              text: 'Menneskehjernen er evolutionært programmeret til stamme-identifikation. Vi er sociale dyr der har brug for at tilhøre en gruppe.\n\nSystemet kaprer denne instinkt:\n• Dit hold = din stamme\n• Modstanderens hold = fjenden\n• Sejr = din stammes dominans\n• Nederlaget = eksistentiel trussel\n\nResultat: Fuldvoksne mænd græder over et boldspark. Familier splittes efter en kamp. Vold opstår på stadioner.\n\nDenne tribale energi der kunne bruges til at forandre samfundet — bruges på at skabe kunstige konflikter mellem grupper der har præcis de samme interesser.\n\nFC Barcelona-fan vs. Real Madrid-fan: Begge betaler den samme skatteprocent. Begge rammes af den samme inflation. Men de hader hinanden.',
            },
            {
              icon: '⏰',
              title: 'Hvad det Koster dig',
              text: 'En gennemsnitlig fodbold-fan:\n• 2-3 kampe/uge á 2 timer = 4-6 timer/uge\n• Highlights og analyser: 1-2 timer/uge\n• Diskussioner med venner/kollegaer: 2-3 timer/uge\n• I alt: 8-12 timer PER UGE\n\nDet er 400-600 timer om året.\n\nI 400 timer kan du:\n• Lære et nyt sprog (begynderniveau)\n• Starte en virksomhed\n• Skrive en bog\n• Opnå meditationsekspertise\n• Studere geopolitik, filosofi eller økonomi til et niveau der overstiger de fleste journalister\n\nDu bruger potentialet til at huske andres statistikker.',
            },
          ].map(s => (
            <div key={s.title} className="sc-card">
              <div className="sc-card-icon">{s.icon}</div>
              <h3 className="sc-card-title">{s.title}</h3>
              <p className="sc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'money' && (
        <div className="sc-section">
          <div className="sc-alert">
            <p>Sportsindustrien er ikke underholdning. Det er et finansielt imperium der bruger menneskelige følelser som råvare.</p>
          </div>

          {[
            {
              icon: '💰',
              title: 'Tallene der fortæller historien',
              text: 'Global sportsindustri 2024: $600+ milliarder om året.\n\nNFL (American Football):\n• 32 hold ejet af milliardærer\n• Medieopbud: $113 milliarder over 11 år\n• Spillerløn gennemsnit: $3.3 millioner/år\n• Stadioner bygget med skatteyderpenge i 30+ byer\n\nPremier League (engelsk fodbold):\n• Saudi Arabia, Abu Dhabi, USA-kapital ejer topklubberne\n• Manchester City ejet af Abu Dhabi-statsejede ADUG\n• Chelsea solgt til Roman Abramovich → Todd Boehly konsortium for £4.25 milliarder\n\nSpørgsmålet: Hvorfor ejer mellemøstlige statsfondes og hedgefonds sportsklubberne?\n\nSvar: Soft power. Sportsvask. Befolknings-kontrol via underholdning.',
            },
            {
              icon: '🎰',
              title: 'Sportsbetting — Den Perfekte Fælde',
              text: 'Sportsbetting er nu legaliseret i 35+ amerikanske stater. Globalt er det en $200+ milliard industri.\n\nDesignet til afhængighed:\n• Hurtige belønninger (dopamin-spike)\n• Live-betting holder dig konstant engageret\n• "Næsten-sejre" er designet til at motivere til næste indsats\n• Apps sender push-notifikationer der triggerafhængig adfærd\n\nDen gennemsnitlige sportsbetor taber. Husene vinder altid.\n\nMen — og dette er nøglen — en taber der er konstant engageret i betting er fuldstændig optaget. Han har ikke tid, energi eller mental kapacitet til andet.',
            },
            {
              icon: '👕',
              title: 'Merchandise — Betalt Reklame',
              text: 'Fans BETALER for at bære et holds logo.\n\nDu er en gående reklamesøjle. Du betaler for retten til at reklamere for en milliardærs virksomhed.\n\nEn Nike-trøje koster 15 kr at producere i Bangladesh. Sælges for 800 kr med klublogo. Du betaler 800 kr. Nike tjener 600 kr. Arbejderen i Bangladesh tjener 0,5 kr.\n\nOg du er stolt af at bære den.\n\nDet er ikke din skyld. Du er blevet programmeret til at identificere din identitet med et produkt. Det er Bernays propaganda i sin reneste form.',
            },
          ].map(s => (
            <div key={s.title} className="sc-card">
              <div className="sc-card-icon">{s.icon}</div>
              <h3 className="sc-card-title">{s.title}</h3>
              <p className="sc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'ritual' && (
        <div className="sc-section">
          <div className="sc-alert">
            <p>Super Bowl halftime shows er ikke koncerter. De er okkulte ritualer udført foran 100 millioner hypnotiserede seere.</p>
          </div>

          {[
            {
              icon: '🔺',
              title: 'Super Bowl Halvtidsshowet',
              text: 'Hvem har optrådt ved Super Bowl halvtid:\nMadonna, Beyoncé, Katy Perry, Lady Gaga, Shakira, The Weeknd, Rihanna\n\nHvad de alle har til fælles: Åbne okkulte symboler i deres optrædener.\n\nMadonna 2012: Ægyptiske gudinder, horn-symbolik, sort/hvid schakbræt, offerscener.\nKaty Perry 2015: Heksekostume, okkulte symboler, ridder på stor kat.\nBeyoncé 2013 og 2016: Illuminati-referencer, et øje-symbolik.\n\nDisse er ikke kunstneriske valg. De er koordinerede ritualer der transmitterer okkulte symboler og energier til 100 millioner mennesker i alfa/hypnotisk tilstand.\n\nMasser af okkulter tror ritualer er kraftfulde fordi de mobiliserer fælles bevidsthed og intention. En Super Bowl er det mest magtfulde ritual på planeten.',
            },
            {
              icon: '🏆',
              title: 'Olympiske Lege — Fra Zeus til Globalisme',
              text: 'De originale olympiske lege (776 f.Kr. – 393 e.Kr.) var religiøse ritualer til ære for Zeus. Krige stoppede. Nationer samledes. Vinderen var halvgud.\n\nDe moderne olympiske lege (1896-nu) genopretter strukturen:\n• En global flammefest der starter med antikke ritualer i Grækenland\n• En verden der samles under ét symbol (Olympiske ringe)\n• "Universelle værdier" der trumfer national identitet\n• Massivt globalt TV-publikum synkroniseret i ét fælles rituel\n\nPierre de Coubertin der grundlagde moderne OL var frimurer og explicit inspireret af mystisk-religiøse idéer om sportslig transcendens.\n\nOL er ikke sport. Det er en global religiøs ceremoni med sport som kulisse.',
            },
          ].map(s => (
            <div key={s.title} className="sc-card">
              <div className="sc-card-icon">{s.icon}</div>
              <h3 className="sc-card-title">{s.title}</h3>
              <p className="sc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'reality' && (
        <div className="sc-section">
          {[
            {
              icon: '📺',
              title: 'Reality TV — Normalisering i Realtid',
              text: 'Reality TV er ikke "virkelighed". Det er scriptede narrativer der normaliserer:\n\n• Stemmesnak og sladder som socialt lim\n• Udseende som primær værdi\n• Kortvarige romantiske forbindelser (ingen dybde)\n• Konflikt og drama som underholdning\n• Rigdom og forbrug som livsmål\n• Berømmelse som ultimativt mål uden talent\n\nDe mest sete reality-shows globalt:\n• Big Brother — konstant overvågning normaliseret\n• Survivor — Darwinistisk "de stærkeste overlever" normaliseret\n• The Bachelor/ette — romantik som konkurrence normaliseret\n• Love Island — udseende som primær kvalitet normaliseret\n\nEfter 20 år med reality TV er disse værdier internaliseret hos en hel generation.',
            },
            {
              icon: '👶',
              title: 'Børne-Reality og Target-Rekruttering',
              text: 'X Factor, American Idol, Got Talent:\nBørn præsenteret som underholdning. Drømmene brugt som entertainment.\n\nNår et barn synger og dommerne siger nej — er det underholdning?\nNår en voksen griner — hvad normaliserer det?\n\nDisse shows rekrutterer aktivt:\n• Potentielle MK-Ultra-kandidater (traumatiserede børn med talent)\n• Kommende "stars" der passes ind i systemet\n\nDe fleste vindere forsvinder. Et mindretal kontrolleres.\n\nNickelodeon-skandalerne, Dan Schneider: Viser hvad der sker bag kameraet med børneunderholdning.',
            },
            {
              icon: '🎮',
              title: 'Gaming og Esport — Den Digitale Arena',
              text: 'Esport er den nye Colosseum for unge mænd.\n\nFortnite, League of Legends, Call of Duty — designet til maximum afhængighed:\n• Variable reward schedules (slot-machine logik)\n• Social pressure via multiplayer\n• FOMO (Fear of Missing Out) via sæson-indhold\n• Microtransaktioner der normaliserer betaling for virtuelle genstande\n\nDen gennemsnitlige gamer bruger 7+ timer/uge.\nEn topgamer: 40-60 timer/uge.\n\nCall of Duty er militærets rekrutteringsværktøj — designet med støtte fra Pentagon, normaliserer krig og skydning.\n\nDenne generation er de første der er vokset op med fuld digital cirkus fra fødsel.',
            },
          ].map(s => (
            <div key={s.title} className="sc-card">
              <div className="sc-card-icon">{s.icon}</div>
              <h3 className="sc-card-title">{s.title}</h3>
              <p className="sc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'time' && (
        <div className="sc-section">
          <div className="sc-alert">
            <p>En gennemsnitlig dansker bruger 4-5 timer dagligt på underholdning. Det er 1500-1800 timer om året. Det er din frihed de køber med din egen tid.</p>
          </div>

          <div className="sc-time-box">
            <div className="sc-time-title">Hvad 1500 timer om året kan give dig</div>
            {[
              ['Flydende spansk', '~600 timer'],
              ['Færdig selvudviklet app', '~400 timer'],
              ['Komplet bog skrevet', '~300 timer'],
              ['Musikinstrument (mellemniveau)', '~500 timer'],
              ['Investeringsviden der slår markedet', '~200 timer'],
              ['Dyb meditationspraksis', '~365 timer'],
            ].map(([skill, time]) => (
              <div key={skill} className="sc-skill-row">
                <span className="sc-skill">{skill}</span>
                <span className="sc-time">{time}</span>
              </div>
            ))}
            <p className="sc-time-note">Du har timeterne. Systemet har overtalt dig til at give dem til underholdningsindustrien.</p>
          </div>
        </div>
      )}

      {tab === 'awake' && (
        <div className="sc-section">
          <div className="sc-green-box">
            <h2>✦ Det handler ikke om at stoppe med at nyde livet</h2>
            <p>Du kan sagtens se en kamp. Du kan sagtens spille et spil. Bevidsthed handler ikke om asketisme. Det handler om at vælge bevidst frem for at blive styret af algoritmer og social pres.</p>
          </div>

          {[
            {
              icon: '🎯',
              title: 'Det Bevidste Valg',
              text: '3D tilgang: Se sport fordi du altid har gjort det. Fordi alle andre gør det. Fordi det fylder tiden.\n\n5D tilgang: Vælg bevidst hvad du bruger din opmærksomhed på. Opmærksomhed er din mest værdifulde ressource.\n\nSpørgsmål at stille dig selv:\n• Valgte jeg dette bevidst, eller faldt det bare på?\n• Hvad mister jeg ved at bruge disse timer her?\n• Er dette noget jeg virkelig nyder, eller er det en vane?\n• Hvem tjener på min opmærksomhed her?\n\nDu behøver ikke blive munk. Du skal bare blive bevidst.',
            },
            {
              icon: '⚡',
              title: 'Erstat Passivt med Aktivt',
              text: 'I stedet for at SE sport — DYR sport:\n• Løb, svøm, cyklisme, kampsport — kroppen aktiveres, sindet renses\n• Gruppeaktiviteter der skaber ÆGTE fællesskab frem for kunstig stamme-identifikation\n\nI stedet for reality TV:\n• Dokumentarer der udvider din verdensforståelse\n• Bøger der bygger din viden\n• Samtaler med mennesker der udfordrer dig\n\nI stedet for gaming:\n• Kreative projekter (musik, kunst, skrivning)\n• Lær en færdighed der giver reel-world value\n• Meditationspraksis der giver hvad gaming forsøger at erstatte: Strøm, kompetence, fællesskab',
            },
          ].map(s => (
            <div key={s.title} className="sc-card">
              <div className="sc-card-icon">{s.icon}</div>
              <h3 className="sc-card-title">{s.title}</h3>
              <p className="sc-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
