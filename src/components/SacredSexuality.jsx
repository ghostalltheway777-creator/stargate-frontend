import React, { useState } from 'react'
import './SacredSexuality.css'

const TABS = [
  { id: 'what',   label: '✦ Hvad er det' },
  { id: 'tantra', label: '🕉 Tantra' },
  { id: 'energy', label: '⚡ Seksuel Energi' },
  { id: 'shadow', label: '🔒 Undertrykkelse' },
  { id: 'gender', label: '⚖️ Kønsdebat' },
  { id: 'heal',   label: '🌹 Healing' },
]

export default function SacredSexuality() {
  const [tab, setTab] = useState('what')

  return (
    <div className="ss-page">
      <div className="ss-hero">
        <div className="ss-icon">🌹</div>
        <h1 className="ss-title">Sacred Sexuality</h1>
        <p className="ss-sub">Tantra · Seksuel energi · Kundalini · Healing · Skaberkraft</p>
        <div className="ss-quote">
          <p>"Seksuel energi er skabelseskraften selv — den er ikke lavere end bøn. Den er bøn."</p>
          <cite>— Ancient Tantric Wisdom</cite>
        </div>
      </div>

      <div className="ss-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`ss-tab ${tab===t.id?'active':''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'what' && (
        <div className="ss-section">
          <p className="ss-intro">Sacred sexuality er ikke erotisk — det er forståelsen af at seksuel energi er den mest potente skaberkraft i universet, og at den kan bruges til healing, bevidsthedsvækst og åndelig transcendens.</p>
          {[
            { title: 'Seksuel Energi som Universets Skaberkraft', text: 'I alle mystiske traditioner er seksualiteten hellig — ikke skamfuld:\n\n• Hinduisme: Shiva og Shakti = maskulin og feminin kraft der skaber universet i evig dans\n• Taoisme: Yin-Yang = seksuel polaritet som universets grundlæggende princip\n• Kabbalah: Sefirot-træet har maskulin og feminin polaritet i alle 10 dimensioner\n• Egypten: Osiris og Isis forening skabte horus = bevidsthed\n• Tantra: Seksuel energi = Kundalini = den samme kraft som bevæger solsystemer\n\nDen samme energi der skaber et barn kan — når den løftes op — skabe musik, kunst, videnskab, åndelig oplevelse.' },
            { title: 'Hvad Undertrykkelse Skabte', text: 'Kirkens medievale krig mod kroppen og seksualiteten skabte:\n\n• Skam og skyld som fundamentale menneskelige oplevelser\n• Dissociation fra kroppen\n• Undertrykt energi der søger usunde kanaler\n• Pornografi-afhængighed som forkrænget udtryk for seksuel energi\n• Seksuel vold som skyggen af undertrykt seksualitet\n• Generationer af mennesker der ikke er til stede i deres kroppe\n\nKirken var ikke alene — alle patriarkalske systemer har undertrykt det feminine og den seksuelle energi fordi den er FRIHEDSSKABENDE.' },
          ].map(s => (
            <div key={s.title} className="ss-card">
              <h3 className="ss-card-title">{s.title}</h3>
              <p className="ss-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'tantra' && (
        <div className="ss-section">
          <p className="ss-intro">Tantra er ikke sex-kult. Tantra er en 5000-årig spirituel videnskab der bruger alle livets kræfter — inklusive den seksuelle — som veje til oplysning.</p>
          {[
            { title: 'Hvad Tantra Egentlig Er', text: 'Tantra = "vævning" på sanskrit. En vej der væver alle aspekter af livet — inklusive seksualitet — ind i den spirituelle praksis.\n\nTantra siger IKKE: Undgå seksualitet for at blive åndelig.\nTantra siger: Brif seksualiteten ind i bevidstheden og transformér den.\n\nDe to veje i Tantra:\n• Vama Marga (venstre vej): Bruger faktisk seksuel praksis\n• Dakshina Marga (højre vej): Bruger symbolik og visualisering\n\nMest vest-tantra (Osho, western neo-tantra) er popularisering af principperne — ikke autentisk Tantra.' },
            { title: 'Shiva og Shakti', text: 'Shiva = ren bevidsthed · Ubevægelig · Maskulin · Tomhed\nShakti = ren energi · Bevægelse · Feminin · Form\n\nSkabelsen opstår i mødet mellem Shiva og Shakti — bevidsthed og energi.\n\nEthvert menneske bærer begge:\n• Mænd: Primært Shiva-natur · Shakti som indre feminin\n• Kvinder: Primært Shakti-natur · Shiva som indre maskulin\n\nTantric seksualitet: To mennesker mødes som Shiva og Shakti — ikke som to separate ego\'er men som bevidsthed møder energi.\n\nOrgasmen i dette perspektiv: Et glimt af ego-dissolution — et øjeblik uden adskillelse.' },
            { title: 'Seksuel Transmutation', text: 'Seksuel transmutation = bevidst løfte seksuel energi op fra genitalerne til hjertet og kronen.\n\nDette er kernen i:\n• Kundalini Yoga\n• Taoist Sexual Kung Fu\n• Karezza (non-ejaculatory sex)\n• Brahmacharya (seksuel kontinens i yoga)\n\nNapoleon Hill (Think and Grow Rich, 1937): Kapitel 11 er "Sex Transmutation" — alle de mest succesfulde mænd i historien lærte at kanalisere seksuel energi til kreativt arbejde.\n\nNikola Tesla: Levede cølibatær sit liv. Mente at seksuel kontinens var kilden til hans kreative geni.' },
          ].map(s => (
            <div key={s.title} className="ss-card">
              <h3 className="ss-card-title">{s.title}</h3>
              <p className="ss-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'energy' && (
        <div className="ss-section">
          <p className="ss-intro">Kundalini er den seksuelle energi i sin rene form — oprullet ved rodcenteret, ventende på at stige op gennem chakrasystemet.</p>
          {[
            { title: 'Kundalini — Slangeenergien', text: 'Kundalini = "den oprullede" på sanskrit. Beskrevet som en sove slange i rodchakraet.\n\nNår Kundalini vækkes stiger den op gennem de 7 chakraer:\n• Muladhara (rod): Overlevelse · Jord · Adrenal\n• Svadhisthana (sakral): Seksualitet · Kreativitet\n• Manipura (solar plexus): Magt · Viljes-kraft\n• Anahata (hjerte): Kærlighed · Forbundethed\n• Vishuddha (hals): Sandhed · Udtryk\n• Ajna (tredje øje): Intuition · Vision\n• Sahasrara (krone): Enhed · Samadhi\n\nFuldstændig Kundalini-opvågning = oplysning.' },
            { title: 'Seksuel Energi og Kreativitet', text: 'Den seksuelle energi og kreativ energi er den SAMME energi — bare udtrykt forskelligt.\n\nDette er dokumenteret neurovidenskabeligt:\n• Begge aktiverer dopaminsystemet\n• Begge involverer "flow state" (Csikszentmihalyi)\n• Begge er forbundet med testosteron og kreativ drive\n\nArtister, musikere og opfindere rapporterer ofte at de mest kreative perioder er forbundet med:\n• Forelskelse og seksuel energi\n• Periodisk seksuel afholdenhed der bygger kreativ spænding\n\nHemingway, Picasso, Beethoven — alle brugte bevidst seksuel energi som kreativt brændstof.' },
          ].map(s => (
            <div key={s.title} className="ss-card">
              <h3 className="ss-card-title">{s.title}</h3>
              <p className="ss-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'shadow' && (
        <div className="ss-section">
          <p className="ss-intro">Undertrykt seksualitet finder usunde kanaler. Systemet designede undertrykkelsen bevidst — for et folk i skam er lettere at kontrollere.</p>
          {[
            { title: 'Kirkens Krig mod Kroppen', text: 'Augustin (354-430 e.Kr.): Definerede arvesynd som seksuel lyst. Sagde at sex var acceptabelt KUN med det mål at skabe børn.\n\nTertullian: Beskrev kvinder som "djævelens port" — kilden til seksuel fristelse og syndefald.\n\nThomas Aquinas: Seksuel nydelse er synd selv inden for ægteskabet.\n\nResultat: 1500 år med:\n• Celibat som den "hellige" tilstand\n• Kvinder som syndige fristere\n• Kroppen som fængslet for sjælen\n• Seksualitet som noget skamfuldt og hemmeligt\n\nDette er IKKE hvad Jesus lærte. Det er hvad Paulus og kirkefædrene tilføjede.' },
            { title: 'Pornografi som Skyggesystem', text: 'Pornografi er undertrykt seksualitetens forkrængte udtryk.\n\nNår seksualiteten ikke kan være hellig → den er "beskidt"\nNår det "beskidte" forbydes → det søger skjulte kanaler\nSkjulte kanaler → eskalering mod mørkere indhold\n\nDette er shadow-mekanikken: Det vi undertykker vokser i mørket og vender tilbage forstærket.\n\nCarlina Rinaldi (psykolog): "Pornografi-afhængighed er symptom på manglende intim forbundethed"\n\nAlternativet er ikke mere repression — det er at bringe seksualiteten til lyset og gøre den hel igen.' },
          ].map(s => (
            <div key={s.title} className="ss-card">
              <h3 className="ss-card-title">{s.title}</h3>
              <p className="ss-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'gender' && (
        <div className="ss-section">
          <div className="ss-disclaimer">
            <p>⚠️ Dette er oplysning om en samfundsdebat — ikke et angreb på nogen person. Alle mennesker fortjener respekt og kærlighed uanset identitet. Vi skelner mellem at respektere mennesker og at stille spørgsmål til ideologi.</p>
          </div>
          {[
            { title: 'Historien: Hvem Startede Det — Berlin 1919', text: 'Magnus Hirschfeld (1868-1935) — tysk-jødisk læge — grundlagde Institut für Sexualwissenschaft i Berlin i 1919.\n\nDette var verdens første klinik der udførte "kønsskifteoperationer".\n\nHirschfeld opfandt begrebet "transsexualismus" og dokumenterede 10.000+ cases af seksuel variation.\n\nNazisterne BRÆNDTE hans instituts bogsamling i maj 1933 — dette er de berømte billeder af Nazi-bogbrændinger.\n\nEfter 2. Verdenskrig: Hirschfelds idéer levede videre via hans elever, primært i USA og England.\n\nJohn Money (Johns Hopkins, 1960erne): Lavede berømt "Reimer-eksperiment" — omdannede David Reimer kirurgisk til pige uden samtykke. David opvoksede ulykkelig, fandt ud af sandheden, skiftede tilbage til mand og begik selvmord 2004.\n\nAmerican Psychological Association (APA): Fjernede homoseksualitet fra diagnoselisten i 1973 — delvist som politisk beslutning under aktivist-pres, ikke ren videnskab.\n\nKonklusionen: Bevægelsen har rødder i videnskabelige eksperimenter fra en anden tid — og de tidlige resultater var langt fra positive.' },
            { title: 'Hvad Videnskaben Siger om Biologisk Køn', text: 'Biologisk køn er bestemt af:\n• XX kromosom = kvinde · XY kromosom = mand\n• Gonaderne (æggestokke/testikler)\n• Primære og sekundære kønskarakterer\n• Hormonprofil (østrogen/testosteron)\n\nDSM-5 og ICD-11: Kønsdysfori er en psykisk diagnose — ubehag ved biologisk køn.\n\nForskellen på biologisk køn (sex) og kønsidentitet (gender) er anerkendt af alle seriøse biologer og psykologer.\n\nDet biologiske køn kan ikke ændres kirurgisk eller hormonelt — det kan efterlignes men ikke ændres.\n\nPaul McHugh (Johns Hopkins psykiater): "Vi kan ikke ændre biologisk køn. Vi behandler kønsdysfori bedst ved at hjælpe patienten med at acceptere sit biologiske køn, ikke ved at mutilere en rask krop."' },
            { title: 'ROGD — Social Smitte', text: 'ROGD = Rapid Onset Gender Dysphoria — begrebet skabt af Dr. Lisa Littman (2018, Brown University)\n\nHun observerede at mange unge piger pludselig identificerede sig som trans EFTER intensiv social medie-eksponering og gruppeidentifikation.\n\nI grupper af venner steg trans-identificering med 300-1400% inden for få år.\n\nStatistikker:\n• 1990: 1 ud af 10.000 mænd og 1 ud af 30.000 kvinder ønskede kønsskifte\n• 2023: 5%+ af Gen Z identificerer sig som transgender eller non-binary\n\nSamme mønster ses i andre psykologiske tilstande med social smitte:\n• Anorexia · Cutting · "Recovered memories" i 90erne\n\nSocial medie-algoritmer forstærker identitetsekstremisme fordi det skaber engagement.' },
            { title: 'Medicalisering af Børn — Det Etiske Spørgsmål', text: 'Pubertetsblokere (GnRH-agonister som Lupron):\n• Blokerer naturlig pubertet\n• Markedsført som "fuldt reversible"\n• NHS (UK) stoppede rutine-brug i 2024 efter Cass Review\n• Cass Review (2024): "Der er ikke tilstrækkelig evidens for sikkerheden"\n\nKønsklinikker i USA:\n• Behandler børn fra 12-årsalderen med hormoner\n• Brystkirtler fjernes fra teenage-piger (double mastectomy)\n• Disse operationer er irreversible\n\nDetransition:\n• 60-80% af børn med kønsdysfori accepterer naturligt deres biologiske køn ved voksenalderen (flere studier)\n• En voksende detransitioner-bevægelse: Unge voksne der fortryder medicin og kirurgi\n\nSvar: Alle fortjener hjælp og støtte. Men medicin og irreversibel kirurgi på mindreårige kræver ekstremt høje evidens-standarder.' },
            { title: 'Ideologi vs. Virkelighed', text: 'Hvad ideologien siger: "Køn er socialt konstrueret. Man kan identificere sig ud af sit biologiske køn. Ingen spørgsmål er acceptable."\n\nHvad videnskaben siger: Biologisk køn er real og bestemt. Kønsidentitet er kompleks og påvirket af biologi, psykologi og social kontekst.\n\nAnalogien: Hvis en person identificerer sig som 14 år gammel selvom de er 40 → vi accepterer personen som menneske MEN vi kan ikke juridisk behandle dem som 14-årig.\n\nIdentitetspolitik vs. biologi:\n• Man kan identificere sig som hvad man vil → personlig frihed\n• Men virkelighed, videnskab og jura kan ikke redefineres af følelse alene\n\nKonklusion: Alle fortjener respekt og kærlighed. Men idéen at biologisk køn er ufleksibel er videnskabelig fact — ikke had.' },
          ].map(s => (
            <div key={s.title} className="ss-card">
              <h3 className="ss-card-title">{s.title}</h3>
              <p className="ss-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'heal' && (
        <div className="ss-section">
          <p className="ss-intro">Seksuel healing handler om at give kroppen og seksualiteten sin naturlige hellighed tilbage.</p>
          {[
            { title: 'Principper for Seksuel Healing', text: '1. Tilstedeværelse: Det meste seksuel dysfunktion stammer fra IKKE at være til stede i kroppen\n\n2. Åndedrættet: Langsomt, dybt åndedræt under intim kontakt aktiverer parasympatisk nervesystem → åbner for sansning\n\n3. Tid: Vores kultur er præget af hastighed. Sacred sexuality handler om at bremse\n\n4. Intentionalitet: Hvad er intentionen? Forbundethed? Healing? Transcendens? Sæt det bevidst\n\n5. Kommunikation: Verbal og nonverbal ærlighed om behov og grænser\n\n6. Integration af maskulint og feminint: Begge aspekter i os selv — ikke kun i partneren' },
            { title: 'Praktiske Trin', text: '• Krops-scanning meditation: Bliv venner med din krop som helhed\n• Åndedræt som bro: Sync dit åndedræt med din partner\n• Eye gazing: 5 minutters øjencontact åbner hjertefeltet\n• Non-sexual touch: Healing touch der ikke leder til sex\n• Karezza: Langsommere, mere bevidst intimitet\n• Solo Tantric practice: Selvkærlighed som hellig praksis\n\nRessourcer:\n• David Deida: "The Way of the Superior Man" og "Dear Lover"\n• Margot Anand: "The Art of Sexual Ecstasy"\n• Mantak Chia: "Taoist Secrets of Love"' },
          ].map(s => (
            <div key={s.title} className="ss-card">
              <h3 className="ss-card-title">{s.title}</h3>
              <p className="ss-card-text" style={{whiteSpace:'pre-line'}}>{s.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
