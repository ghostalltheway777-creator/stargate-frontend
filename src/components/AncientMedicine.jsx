import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './AncientMedicine.css'

// ── BODY & MIND ──────────────────────────────────────────────────────────────
const SUPPLEMENTS = [
  // SVAMPE
  { name:'Chaga',           icon:'🍄', cat:'Svamp', desc:'Kraftigste antioxidant i naturen · Anti-tumor · Immunmodulator · 2000+ år Sibirien', dosage:'1-2g pulver i te (max 70°C)' },
  { name:"Lion's Mane",     icon:'🧠', cat:'Svamp', desc:'Stimulerer NGF — gendanner hjerneceller · Dokumenteret mod Alzheimer · Fokus og hukommelse', dosage:'500mg-1g ekstrakt morgen' },
  { name:'Reishi',          icon:'🍄', cat:'Svamp', desc:'Immunitet · Anti-kræft · Søvn og anti-stress · "Udødelighedens svamp" i kinesisk medicin', dosage:'1-2g ekstrakt morgen eller aften' },
  { name:'Turkey Tail',     icon:'🍄', cat:'Svamp', desc:'PSK og PSP — kraftigste immune-boosters fra svampeverdenen · Bruges i kræftbehandling i Japan', dosage:'1-3g ekstrakt dagligt' },
  { name:'Cordyceps',       icon:'⚡', cat:'Svamp', desc:'Øger VO2 max · ATP produktion · Seksuel energi · Brugt af kinesiske olympiske atleter 1993', dosage:'1-3g ekstrakt 30 min før træning' },
  { name:'Amanita Muscaria',icon:'🎪', cat:'Svamp', desc:'Rød og hvid svamp · IKKE giftig i lav dosis · Muscimol virker på GABA · Dybere søvn og lucid drøm · Shamansk tradition fra Sibirien', dosage:'0.5-2g tørret hætte — microdose, START LAVT' },
  // ADAPTOGENER
  { name:'Shilajit',        icon:'🪨', cat:'Harpiks', desc:'80+ mineraler · Testosteron booster · Fulvic acid · Anti-aging · 5000+ år Ayurveda', dosage:'Ærtestor rå Shilajit i varmt vand morgen' },
  { name:'Ashwagandha',     icon:'🌱', cat:'Adaptogen', desc:'Reducerer cortisol 27% · Øger testosteron · Forbedrer søvn · 3000 år Ayurveda', dosage:'300-600mg KSM-66 aften' },
  { name:'Tongkat Ali',     icon:'💪', cat:'Adaptogen', desc:'Øger fri testosteron 37% · Reducerer cortisol · Forbedrer fertilitet · 1000+ år Malaysia', dosage:'200-400mg 1:200 ekstrakt — 5 på, 2 pause' },
  { name:'Rhodiola Rosea',  icon:'🌸', cat:'Adaptogen', desc:'Reducer udmattelse og burnout · Forbedrer kognitiv funktion · Brugt af russiske special forces', dosage:'200-400mg ekstrakt morgen — ej ved sengetid' },
  { name:'Holy Basil/Tulsi',icon:'🌿', cat:'Adaptogen', desc:'Anti-angst og anti-depression · Balancerer kortisol · Hinduernes helligste plante · Adaptogen', dosage:'300-600mg ekstrakt eller frisk te dagligt' },
  { name:'Maca',            icon:'🌰', cat:'Adaptogen', desc:'Hormonal balance mænd og kvinder · Øger libido og fertilitet · Andernes super-mad i 3000 år', dosage:'1.5-3g pulver i smoothie — sort maca stærkest' },
  // ALGER OG TANG
  { name:'Spirulina',       icon:'🌿', cat:'Alge', desc:'Mest næringstæt mad per gram · Komplet protein · Fjerner tungmetaller · NASA astronautmad', dosage:'3-5g pulver dagligt' },
  { name:'Chlorella',       icon:'🟢', cat:'Alge', desc:'Tungmetal detox (binder kviksølv/bly) · Klorofyl renser blodet · Booste immun og energi', dosage:'2-4g dagligt — start lavt og øg gradvist' },
  { name:'Sea Moss',        icon:'🌊', cat:'Tang', desc:'92 af 102 mineraler · Thyroid støtte · Fjerner tungmetaller · Dr. Sebi\'s fundament', dosage:'2 spsk gel dagligt' },
  { name:'Moringa',         icon:'🌳', cat:'Urt', desc:'Mest næringsrige plante på Jorden · 92 næringsstoffer · Anti-inflammatorisk · Sænker blodsukker', dosage:'1-2 tsk pulver dagligt i vand eller smoothie' },
  // LONGEVITY
  { name:'NAD+ / NMN',      icon:'⚡', cat:'Longevity', desc:'Cellulær energi · Aktiverer levetidsgener (sirtuiner) · Reparerer DNA · Falder 50% ved 50 år', dosage:'250-500mg NMN + Resveratrol dagligt' },
  { name:'Resveratrol',     icon:'🍇', cat:'Longevity', desc:'Aktiverer SIRT1 (levetidsgenet) · Anti-kræft · Anti-aging · Synergistisk med NMN', dosage:'500mg trans-resveratrol med fedtholdigt måltid' },
  { name:'Berberine',       icon:'💛', cat:'Longevity', desc:'Sænker blodsukker som Metformin (uden bivirkninger) · Tarm-flora optimizer · Anti-aging', dosage:'500mg 2-3× dagligt med mad — cyclus 8 uger' },
  { name:'CoQ10 / Ubiquinol',icon:'❤️', cat:'Longevity', desc:'Hjerte-energi · Modvirker statiner · Anti-aging · Falder med alder', dosage:'200-400mg Ubiquinol med fedtholdigt måltid' },
  { name:'Spermidine',      icon:'🧬', cat:'Longevity', desc:'Aktiverer autophagy (cellulær oprydning) · Fundet i sæd, hvede kim og fermenteret mad · Anti-aging', dosage:'1mg dagligt — eller spis hvede kim og ost' },
  // HJERNE
  { name:'Gotu Kola',       icon:'🧘', cat:'Hjerne', desc:'Aktiverer BDNF · Anti-angst · Healer nervesystem · Munke brugte det til meditation', dosage:'400-800mg ekstrakt dagligt' },
  { name:'Bacopa Monnieri', icon:'💜', cat:'Hjerne', desc:'Forbedrer hukommelse og indlæring · Reducerer angst · 3000 år Ayurveda hjerne-urt', dosage:'300-600mg dagligt med mad — virker efter 4-6 uger' },
  { name:'Black Seed Oil',  icon:'⚫', cat:'Hjerne', desc:'Profeten Muhammad: "Helbredelse for alt undtagen døden" · Anti-inflammatorisk · Boost immun', dosage:'1 tsk (5ml) morgen og aften — kold-presset' },
  { name:'Methylene Blue',  icon:'💙', cat:'Terapi', desc:'Direkte mitokondrie boost · Dræber parasitter · Krydser blod-hjerne barrieren · Første medicin 1876', dosage:'0.5-2mg/kg i vand — pharmaceutical grade kun' },
  // MINERALER
  { name:'Magnesium',       icon:'🔷', cat:'Mineral', desc:'Over 300 enzymatiske processer · Manko ved 70%+ af befolkning · Søvn, muskelkramper, angst', dosage:'300-400mg Magnesium Glycinate eller Threonate aften' },
  { name:'Kobber (Copper)',  icon:'🟤', cat:'Mineral', desc:'Vi er elektromagnetiske væsener — kobber er universets bedste elektriske leder · Kobberkar, kobbervand, pillser · Egypterne drak fra kobberkar dagligt · Antibakteriellt, anti-aging, kollagen, energiproduktion', dosage:'2-4mg dagligt ELLER drik vand opbevaret i kobberkar natten over' },
  { name:'Zinc + Copper',   icon:'🔶', cat:'Mineral', desc:'Immunitet, hormoner, smag og lugt · Kobber-balance kritisk · Egypterne kendte det', dosage:'15-25mg Zinc + 2mg Copper (ratio 10:1)' },
  { name:'Iodine (Lugols)',  icon:'🟣', cat:'Mineral', desc:'Kritisk for thyroid · Fortrænger fluorid fra pineal · De fleste mangel · Anti-kræft', dosage:'Start med 1 dråbe 5% Lugols iodine i vand dagligt' },
  // RENSNING
  { name:'Alge/Fiskeolie',  icon:'🐟', cat:'Omega-3', desc:'DHA/EPA fundamentalt for hjerne · Anti-inflammatorisk · Reducerer hjerterisiko', dosage:'2-3g EPA+DHA dagligt' },
  { name:'Fluorid Detox',   icon:'🦷', cat:'Rensning', desc:'Borax, Tamarind, rå kakao og Iodine fjerner fluorid fra pineal kirtlen', dosage:'1/8 tsk Borax i 1L vand ugentligt' },
  { name:'Parasit Clense',  icon:'🧹', cat:'Rensning', desc:'Black Walnut Hull · Wormwood · Cloves · 70%+ har parasitter · Sukker cravings, dårlig søvn', dosage:'Clark protokol: Black Walnut + Wormwood + Cloves 3 uger' },
  { name:'Activated Charcoal',icon:'⚫', cat:'Rensning', desc:'Binder toksiner og tungmetaller i tarmen · Bruges ved forgiftning · Tager på tom mave', dosage:'1-2g 2 timer fra andre supplements — ikke dagligt' },
  { name:'Kokosolie', icon:'🥥', cat:'Skønhed', desc:'Erstatning for Vaseline og petroleum-produkter · Anti-bakteriell · Anti-svamp · Nærer huden (ikke bare barriere) · MCT fedtsyrer · Oil pulling mod bakterier i munden', dosage:'Påfør direkte på hud/hår · Oil pulling: 1 spsk i 20 min morgen' },
  { name:'Batan/Argan Olie', icon:'💧', cat:'Skønhed', desc:'Verdens bedste hårolie · 5000+ år berbisk tradition · Vitamin E · Omega-6/9 · Anti-aging · Hår, hud og negle', dosage:'2-3 dråber kold-presset Argan olie på fugtigt hår · Eller på hud morgen/aften' },
  { name:'Himalaya Salt', icon:'🧂', cat:'Mineral', desc:'84 mineraler · ESSENTIELT — ikke farligt · Ambulancer giver det som første behandling · Natrium-kalium pumpen i ALLE celler kræver det · Hvid bordsal er giftig (aluminium)', dosage:'1-2 tsk Himalaya eller Celtic grey salt dagligt · Mere ved varme og motion' },
  { name:'Nikotin (terapeutisk)', icon:'🩹', cat:'Terapi', desc:'IKKE cigaretter — ren nikotin patches. Anti-inflammatorisk · Blokerer COVID ACE2-receptorer · Smertelindring lokalt · Alzheimer/Parkinson forskning · Franske COVID-studie: 80% lavere indlæggelsesrate hos nikotinbrugere', dosage:'Klip 1-2mg stykker af patch · Læg på smertefuld eller betændt område · Systemisk: 1-2mg patch på arm' },
  { name:'Parasit Clense', icon:'🧹', cat:'Rensning', desc:'Black Walnut Hull · Wormwood · Cloves · Videnskaben estimerer 70%+ af befolkningen har parasitter · Symptomer: sukker cravings, dårlig søvn, humørsvingninger', dosage:'Black Walnut + Wormwood + Cloves protokol 3 uger' },
]

const PARASITE_CURES = [
  { condition:'Kræft (tidligt stadie)', remedy:'Graviola (Soursop), Apricot seeds (B17/Amygdalin), High-dose vitamin C IV, Budwig protokol, Gerson terapi' },
  { condition:'Parasitter', remedy:'Black Walnut Hull + Wormwood + Cloves (Clark protokol) · Diatomaceous Earth · Food grade H2O2' },
  { condition:'Candida overvækst', remedy:'Oil of Oregano, Kokosolie (caprylic acid), Pau d\'arco te, Eliminér sukker/gluten' },
  { condition:'Tung metal toksicitet', remedy:'Chlorella + Spirulina (binder tungmetaller) · Cilantro juice · DMSA chelation · Zeolith' },
  { condition:'Lyme sygdom', remedy:'Cat\'s Claw (Uncaria tomentosa) · Japanese Knotweed (Resveratrol) · Andrographis · Samento' },
  { condition:'Inflammation (kronisk)', remedy:'Turmerisk + Peberkorn (Curcumin) · Boswellia · Omega-3 · Intermittent fasting' },
  { condition:'Depression/Angst', remedy:'Lion\'s Mane · Ashwagandha · St. John\'s Wort · Magnesium · 5-HTP · Gut healing (80% serotonin produceres i tarmen)' },
]

// ── MICRODOSE & FULD DOSIS TABEL ─────────────────────────────────────────────
const MICRO_TABLE = [
  { sub:'Psilocybin',     micro:'0.1-0.3g',    full:'2-5g',       freq:'Hver 3. dag',   effect:'Kreativitet, empati, fokus',     deepExp:'Ego dissolution, entiteter, kosmisk enhed' },
  { sub:'DMT/Changa',     micro:'5-15mg røg',  full:'40-60mg',    freq:'Sjældent',      effect:'Meditation, klarhed',            deepExp:'Realitets-dissolution, Machine Elves' },
  { sub:'LSD',            micro:'5-15 μg',     full:'100-250 μg', freq:'Max 1×/måned',  effect:'Produktivitet, kreativitet',     deepExp:'Synæstesi, tidløshed, mystisk enhed' },
  { sub:'Mescaline',      micro:'50-75mg',     full:'300-500mg',  freq:'1-4×/år',       effect:'Naturkontakt, empati',           deepExp:'Dybe visioner, ancestral kontakt' },
  { sub:'5-MeO-DMT',      micro:'Anbefales ej',full:'5-20mg',     freq:'Meget sjældent',effect:'—',                             deepExp:'Komplet selv-opløsning, "hvid lys"' },
  { sub:'Ibogaine',       micro:'Anbefales ej',full:'10-25mg/kg', freq:'1-2×/liv',      effect:'—',                             deepExp:'18 timers livsgennemgang, total reset' },
  { sub:'Amanita Muscaria',micro:'0.5-2g',     full:'5-15g',      freq:'Sjældent',      effect:'Drømmende, afslappet',          deepExp:'Shamansk: møde med naturånderne' },
  { sub:'Salvia',         micro:'Lav dosis te',full:'0.5-1g røg', freq:'Sjældent',      effect:'Anti-depression',               deepExp:'Entitet-møde, holografisk realitet' },
]

// ── EXPANDING CONSCIOUSNESS ──────────────────────────────────────────────────
const PSYCHEDELICS = [
  {
    name:'Psilocybin', icon:'🍄', natural:true,
    origin:'Magic mushrooms — Aztekerne kaldte dem "Teonanácatl" (Guds kød) · 10.000+ år shamansk brug',
    microdose:'0.1-0.3g hver 3. dag · Forbedrer kreativitet, empati og fokus · Paul Stamets: "Det er som at genstarte din hjerne"',
    full:'3-5g oplevelse: Ego dissolution, forening med kosmos, møde med entiteter, forståelse af universets natur · 80% remission af PTSD og depression efter ÉN behandling (Johns Hopkins)',
    connection:'Psilocybin → Psilocin i kroppen = strukturelt identisk med DMT · "Åbner samme dør som DMT" · Pineal kirtlen producer endogent DMT ved fødsel, drøm og nær-døds',
  },
  {
    name:'DMT', icon:'🌌', natural:true,
    origin:'Produceres naturligt af din krop · Findes i 100+ planter og dyr · Ayahuasca brugt i Amazonas i 5000+ år',
    microdose:'Changa (røgbar blend) i lav dosis til meditation · Kræver erfaring og respekt',
    full:'"Breakthrough": Fuldstændig dissolution af ego og fysisk realitet · Møde med hyperintelligente entiteter (Machine Elves, Jester, Gudindekræfter) · Tilstand udenfor rum og tid · Terence McKenna: "DMT er verdens mest potente hemmelighed"',
    connection:'Rick Strassman (DMT: The Spirit Molecule): DMT frigives ved fødsel, drøm og DØDEN · Det er den interdimensionelle portal · Archonerne fra Nag Hammadi = de entiteter der mødes i DMT rummet? · Joe Rogan, Graham Hancock og 100.000+ bekræfter mødet med intelligente ikke-menneskelige væsener',
  },
  {
    name:'Ayahuasca', icon:'🌀', natural:true,
    origin:'DMT vine + Chacruna blade · Amazonas shamaner · 5000+ år · Brugt som kirkesakrament i Brasilien (legalt)',
    microdose:'Lav dosis Caapi vine te som dagligt adaptogen · Anti-depressiv og neuroplastisk',
    full:'4-8 timers interdimensionel rejse · "Moder Medicin" viser dig præcis hvad du behøver at se · Renser traumer, healer barndomssår, viser livsmønstre · Brugt i klinikker mod PTSD, afhængighed og terminal diagnose',
    connection:'Graham Hancock: "Ayahuasca er menneskelighedens helligste ritual — nu kriminaliseret" · DMT giver adgang til en realitet der er mere virkelig end hverdagsvirkelighed · Forbindelsen til 5D bevidsthed er direkte',
  },
  {
    name:'Salvia', icon:'🌿', natural:true,
    origin:'Mazatec-indianernes hellige plante · Mexico · Salvinorin A = mest potent naturlige psykedelikum gram for gram',
    microdose:'Lav dosis te mod depression og smerter · Traditionel brug',
    full:'5-15 min men ekstremt intens · Møde med Salvia-entiteten (kvindelig kraft) · Viser at virkelighed er holografisk · Graham Hancock: "Salvia demonstrerer virkelighedens illusoriske natur"',
    connection:'Salvinorin A aktiverer kappa-opioid receptorer — IKKE serotonin som psilocybin/DMT · En anden "dør" til samme ikke-lokale bevidsthed · Legal i Danmark (per 2024)',
  },
  {
    name:'LSD', icon:'🔬', natural:false,
    origin:'Semi-syntetisk fra ergot svamp (rugbrand) · Albert Hofmann syntetiserede 1938 · CIA eksperimenterede i MK Ultra',
    microdose:'5-15 mikrogram · Silicon Valley protokol · Øger produktivitet, problemløsning og kreativitet · Steve Jobs: "LSD var en af de vigtigste oplevelser i mit liv"',
    full:'100-250 mikrogram · 8-12 timers oplevelse · Synæstesi, ego dissolution, mystisk enhed · Cary Grant (skuespiller) tog LSD 100+ gange og beskrev det som det mest transformative i hans liv',
    connection:'CIA studerede LSD som mind control — endte med at frigive bevidstheden i stedet · Timothy Leary og 60\'ernes modkultur var en direkte reaktion · "Turn on, tune in, drop out" = afkobling fra 3D Matrix',
  },
]

const FREQUENCY_HEALING = [
  { name:'Rodin Spoler', icon:'🌀', text:'Baseret på Marko Rodin\'s vortex matematik — spoler der genererer et toroidalt magnetfelt identisk med universets grundenergi. Brugt til vand-strukturering, plantevækst acceleration og potentiel cellulær healing. Tesla\'s spoler var Rodin-principper 50 år før Rodin.' },
  { name:'Solfeggio Frekvenser', icon:'∿', text:'528 Hz = DNA reparation ("Miracle Tone") · 396 Hz = befrielse fra skyld og frygt · 963 Hz = pineal aktivering · 432 Hz = naturlig stemning (A=432 vs. standard A=440). Opdaget i gregorianske salmer — undertrykt efter 1050 e.Kr.' },
  { name:'PEMF Terapi', icon:'⚡', text:'Pulsed Electromagnetic Field. NASA bruger det til astronauter mod knogletab. FDA godkendt mod smerte og inflammation. Rodin spoler er en naturlig PEMF generator. Fungerer ved at genstarte cellernes elektromagnetiske signatur.' },
  { name:'Pineal Aktivering', icon:'👁', text:'Pineal kirtlen producerer DMT, Melatonin og Serotonin. Fluorid kalcificerer den over tid. Dekalcificering: Borax, Tamarind, rå kakao, Iodine. 936 Hz frekvens resonerer direkte med pineal kirtlen. Åbner adgang til drømme, intuition og higher self.' },
  { name:'Vortex Vand', icon:'💧', text:'Viktor Schauberger opdagede at vand mister sin naturlige struktur i rette rør. Vortex-behandlet vand har højere energi og bedre biotilgængelighed. Øger plantvækst 30-40%. Kildevand er naturligt vortex-struktureret — moderne vandforsyning ødelægger dette.' },
  { name:'Ancient Healing', icon:'🏛', text:'Egypternes "Sound Temples" — kamrene i pyramiderne er akustisk perfekte resonatorer. Sumerisk medicin brugte frekvens og vibration. Tibetanske singing bowls aktiverer theta-hjernebølger (4-7 Hz) — identisk med dyb meditation og REM søvn.' },
]

// Ekstra natur-psykedelics
const EXTRA_PSYCHEDELICS = [
  { name:'5-MeO-DMT (Bufo)', icon:'🐸', natural:true,
    origin:'Bufo Alvarius padde · Sonoran ørken · Mexico · Også i Yopo-frø og Acacia',
    microdose:'Anbefales IKKE til microdosing — ingen effekt ved lav dosis',
    full:'Den kraftigste psykedeliske oplevelse mulig · 15-30 min · Fuldstændig opløsning af identitet og univers · "Den hvide lys" · 80% oplever "at dø" og "genfødes" · Mystikere beskriver det som mødet med Gud/Kilde',
    connection:'5-MeO-DMT = den rene form af hvad pineal kirtlen producerer ved faktisk død. Beskrevet identisk på tværs af nær-døds-oplevelser. NDE-overlever Howard Storm: præcis hvad Strassman beskriver som "mødet med Kilde".',
  },
  { name:'Ibogaine', icon:'🌳', natural:true,
    origin:'Tabernanthe iboga rod · Vest-Afrika · Bwiti shamansk tradition',
    microdose:'Anbefales IKKE — Ibogaine skal kun tages under medicinsk supervision',
    full:'18 timers oplevelse · Komplet livsgennemgang · Ser ALLE sine traumer og mønstre · Bruges i klinikker mod afhængighed (90%+ success rate mod heroin og alkohol) · Nulstiller opioid-receptorer · Neuroplastisk reset af hjernen',
    connection:'Ibogaine er den ultimative "soul retrieval" — shamaner bruger det til at genopdage sjæle-fragmenter tabt til traume. Psykologisk svarer det til 10 år terapi på én nat.',
  },
  { name:'Mescaline / Peyote', icon:'🌵', natural:true,
    origin:'Lophophora williamsii kaktus · Nordamerikanske indianere · 5000+ år brug',
    microdose:'50-75mg mescalin HCl · Subtil empati og farveintensivering',
    full:'300-500mg · 12-16 timers oplevelse · Dyb naturkontakt · Ancestral kommunikation · Meget mere "kærlig" end psilocybin — sjældent svær · Huxley beskrev det i "The Doors of Perception" (1954)',
    connection:'Native American Church bruger Peyote som sakrament — lovligt i USA for NAC-medlemmer. Mescalin er strukturelt identisk med neurotransmitteren dopamin og adrenalin.',
  },
  { name:'Yopo / Vilca', icon:'🌱', natural:true,
    origin:'Anadenanthera peregrina frø · Sydamerika · Arawak folk · 4000+ år',
    microdose:'Bruges traditionelt som snust i ceremoni — ikke til microdosing',
    full:'Indeholder bufotenin og 5-MeO-DMT · Indsnus via næse · Intenst og kortvarigt (15-30 min) · Visions-state · Shamanerne brugte det til healing og spådomme',
    connection:'Yopo er en af de ældste dokumenterede naturmedicin — fund i Arkansas data viser brug for 4000 år siden. Beviser at mennesket altid har søgt bevidsthedsuddvidelse.',
  },
  { name:'Kambo (Sapo)', icon:'🐸', natural:false,
    origin:'Phyllomedusa bicolor frø · Amazonas · Matses folk · Ikke bevidsthedsudvidende — rensende',
    microdose:'Kambo er rensende naturmedicin og doses ikke som sådant',
    full:'Froskesekretet brændes ind i huden · Kraftig fysisk rensning (opkastning) · Immune boost · Peptider (phyllocaerulein, phyllomedusin) med dokumenteret antimikrobiel effekt · Indgår i Ayahuasca-diæt forberedelse',
    connection:'Kambo beskrives som "Åben hjertets dør" i amazone tradition — det renser den fysiske krop så den åndelige oplevelse (som Ayahuasca) kan gå dybere.',
  },
  { name:'Kanna (Sceletium)', icon:'🌻', natural:true,
    origin:'Sydafrikansk sukkulente · San-folkets brug i 1000+ år · Legalt',
    microdose:'25-50mg · Empati og social åbenhed — "naturlig MDMA"',
    full:'200-400mg · Svag bevidsthedsudvidende effekt · Dyb velvære og forbundethed · Serotonin reuptake hæmmer (som SSRI men naturlig og kortvarig)',
    connection:'Kanna er legal i de fleste lande og tilgængelig. Et godt introsuktionspunkt til udvidede bevidsthedsrammer for folk der ikke er klar til psilocybin.',
  },
]

const DOCTOR_GREETING = `Hej! Jeg er din AI Natur Doctor. 🌿

Jeg er her for at hjælpe dig med naturmedicin, meditation, bevægelse og fasting — baseret på tusinders af års ancient visdom kombineret med moderne forskning.

Fortæl mig hvad du oplever. Hvad er dit største problem eller ønske lige nu? Det kan være energi, søvn, stress, hormoner, fordøjelse, smerter, mentalt velvære — eller noget helt andet.

Hvad kan jeg hjælpe dig med?`

export default function AncientMedicine() {
  const [tab, setTab] = useState('body')
  const [selected, setSelected] = useState(null)
  const [psySelected, setPsySelected] = useState(null)
  const [showTable, setShowTable] = useState(false)
  const [suppHistory, setSuppHistory] = useState({})
  const [suppLoading, setSuppLoading] = useState(false)
  const [doctorTab, setDoctorTab] = useState('chat')
  const [labInput, setLabInput] = useState('')
  const [labResult, setLabResult] = useState(null)
  const [labLoading, setLabLoading] = useState(false)
  const [healthLog, setHealthLog] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nd_health_log') || '[]') } catch { return [] }
  })
  const [logForm, setLogForm] = useState({ symptom:'', remedy:'', result:'' })
  const [logSaved, setLogSaved] = useState(false)
  const { uuid } = (typeof window !== 'undefined' && window.__userContext) ? window.__userContext : { uuid: localStorage.getItem('sg_uuid') || '' }

  async function analyzeImage(e) {
    const file = e.target.files[0]
    if (!file) return
    // Placeholder — vision kræver separat model
    alert('Billedanalyse kræver vision model — kommer snart!')
  }

  async function analyzeLabs() {
    if (!labInput.trim()) return
    setLabLoading(true)
    try {
      const r = await fetch('/api/ancient-medicine/analyze-labs', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: labInput, profile }),
      })
      const d = await r.json()
      setLabResult(d.analysis)
    } catch { setLabResult('Fejl — prøv igen') }
    setLabLoading(false)
  }

  const [imageResult, setImageResult] = useState(null)
  const [imageLoading, setImageLoading] = useState(false)
  const [imageBodyPart, setImageBodyPart] = useState('hud')
  const imageInputRef = useRef()

  async function analyzeImage(e) {
    const file = e.target.files[0]
    if (!file) return
    setImageLoading(true)
    setImageResult(null)
    try {
      const reader = new FileReader()
      reader.onload = async (ev) => {
        const b64 = ev.target.result.split(',')[1]
        const r = await fetch('/api/ancient-medicine/analyze-image', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image_base64: b64, body_part: imageBodyPart, profile }),
        })
        const d = await r.json()
        setImageResult(d.analysis)
        setImageLoading(false)
      }
      reader.readAsDataURL(file)
    } catch { setImageResult('Fejl ved analyse'); setImageLoading(false) }
  }

  async function saveLog() {
    if (!logForm.symptom || !logForm.remedy) return
    const entry = { ...logForm, date: new Date().toLocaleDateString('da-DK') }
    const updated = [entry, ...healthLog].slice(0, 30)
    setHealthLog(updated)
    localStorage.setItem('nd_health_log', JSON.stringify(updated))
    setLogForm({ symptom:'', remedy:'', result:'' })
    setLogSaved(true)
    setTimeout(() => setLogSaved(false), 1500)
    // Gem til backend
    try {
      await fetch('/api/ancient-medicine/health-log', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid: localStorage.getItem('sg_uuid') || 'anon', ...entry }),
      })
    } catch {}
  }

  async function loadSuppHistory(name) {
    if (suppHistory[name]) return
    setSuppLoading(true)
    try {
      const r = await fetch('/api/ancient-medicine/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
      const d = await r.json()
      setSuppHistory(prev => ({...prev, [name]: d.history}))
    } catch {}
    setSuppLoading(false)
  }

  const [chatMessages, setChatMessages] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nd_chat') || '[]') } catch { return [] }
  })
  const [chatInput, setChatInput] = useState('')
  const [chatLoading, setChatLoading] = useState(false)
  const [profile, setProfile] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nd_profile') || '{"age":"","height":"","weight":"","gender":"mand"}') } catch { return { age:'', height:'', weight:'', gender:'mand' } }
  })
  const chatEndRef = React.useRef(null)
  const nav = useNavigate()

  async function sendMessage() {
    if (!chatInput.trim() || chatLoading) return
    const profileContext = profile.age ? `[Bruger: ${profile.age} år, ${profile.gender}, ${profile.height}cm, ${profile.weight}kg] ` : ''
    const userMsg = { role: 'user', content: profileContext + chatInput }
    const newMessages = [...chatMessages, userMsg]
    setChatMessages(newMessages)
    localStorage.setItem('nd_chat', JSON.stringify(newMessages))
    setChatInput('')
    setChatLoading(true)
    try {
      const r = await fetch('/api/ancient-medicine/doctor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, profile }),
      })
      const d = await r.json()
      const updated = [...newMessages, { role: 'assistant', content: d.response }]
      setChatMessages(updated)
      localStorage.setItem('nd_chat', JSON.stringify(updated))
    } catch {
      setChatMessages(prev => [...prev, { role: 'assistant', content: 'Beklager — prøv igen.' }])
    }
    setChatLoading(false)
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const sel = selected ? SUPPLEMENTS.find(s => s.name === selected) : null
  const psy = psySelected ? ([...PSYCHEDELICS, ...EXTRA_PSYCHEDELICS].find(p => p.name === psySelected)) : null

  return (
    <div className="am-page">
      <div className="am-hero">
        <div className="am-icon">🌿</div>
        <h1 className="am-title">Worlds Best Natur Doctor on Ancient Medicine & Healing</h1>
        <p className="am-sub">Worlds Best Natur Doctor on Ancient Medicine & Healing · Undertrykt viden · Bevidsthed</p>
      </div>

      <div className="am-main-tabs">
        <button className={`am-main-tab ${tab==='body'?'active':''}`} onClick={() => setTab('body')}>
          🌿 Body & Mind
        </button>
        <button className={`am-main-tab ${tab==='stack'?'active':''}`} onClick={() => setTab('stack')}>
          🌿 Natur Doctor
        </button>
        <button className={`am-main-tab ${tab==='expand'?'active':''}`} onClick={() => setTab('expand')}>
          🌌 Expanding Consciousness
        </button>
      </div>

      {/* ── BODY & MIND ── */}
      {tab === 'body' && (
        <div className="am-section">
          {sel ? (
            <div className="am-detail">
              <button className="am-back" onClick={() => setSelected(null)}>← Tilbage</button>
              <div className="am-detail-header">
                <span className="am-d-icon">{sel.icon}</span>
                <div>
                  <h2 className="am-d-name">{sel.name}</h2>
                  <span className="am-d-cat">{sel.cat}</span>
                </div>
              </div>
              <p className="am-d-desc">{sel.desc}</p>
              <div className="am-dosage-box">
                <span className="am-box-label">💊 DOSERING</span>
                <p>{sel.dosage}</p>
              </div>

              {/* Ancient historik — loades ved første klik */}
              {!suppHistory[sel.name] && !suppLoading && (
                <button className="am-cta" onClick={() => loadSuppHistory(sel.name)}>
                  🏛 Vis ancient historik & videnskab →
                </button>
              )}
              {suppLoading && <p style={{color:'rgba(255,255,255,0.4)',fontSize:'12px',textAlign:'center',padding:'12px'}}>🌿 Henter historik...</p>}
              {suppHistory[sel.name] && (
                <div className="am-history-box">
                  <span className="am-box-label">🏛 ANCIENT HISTORIK & VIDENSKAB</span>
                  <pre className="am-history-text">{suppHistory[sel.name]}</pre>
                </div>
              )}
            </div>
          ) : (
            <>
              <p className="am-intro">Naturmedicin undertrykt af Rockefeller siden 1910. Alt dette vidste vores forfædre. Klik for at lære mere.</p>
              <div className="am-grid">
                {SUPPLEMENTS.map(s => (
                  <button key={s.name} className="am-card" onClick={() => setSelected(s.name)}>
                    <span className="am-card-icon">{s.icon}</span>
                    <span className="am-card-name">{s.name}</span>
                    <span className="am-card-cat">{s.cat}</span>
                  </button>
                ))}
              </div>

              <h3 className="am-section-title">🧹 Naturlige Kure</h3>
              {PARASITE_CURES.map(c => (
                <div key={c.condition} className="am-cure-card">
                  <div className="am-cure-condition">{c.condition}</div>
                  <div className="am-cure-remedy">{c.remedy}</div>
                </div>
              ))}

              <h3 className="am-section-title">🏭 Rockefeller og den Medicinske Kuppe</h3>
              <div className="am-rock-card">
                <p>John D. Rockefeller kontrollerede i 1900 90% af al amerikansk olie og så en mulighed: petrokemisk medicin — medicin lavet af oliederivater.</p>
                <div className="am-rock-timeline">
                  {[
                    ['1910','Flexner Report','Rockefeller betalte Abraham Flexner for at konkludere at kun farmakologisk medicin er "videnskabelig". 95% af naturmedicin-skoler lukkede.'],
                    ['1913','Foundation oprettes','$100 millioner til universiteter der underviser i petrokemisk medicin. Betingelse: ingen naturmedicin.'],
                    ['1920','AMA overtaget','American Medical Association frakender licenser til enhver læge der anbefaler naturmedicin.'],
                    ['1939','Rife ødelagt','Royal Raymond Rife\'s frekvens-kræft-kur (100% success) ødelagt. Lab brændt. Resultater fortiet.'],
                    ['1960','CIA kure skjult','FOIA-frigivne CIA dokumenter: Agenturet kendte til 3 naturbaserede kræft-kure i 1960erne. Holdt hemmeligt.'],
                    ['2016','Dr. Sebi dræbt','Helbredte angiveligt AIDS og kræft med alkalisk naturmedicin. Arresteret i Honduras. Død i varetægt.'],
                  ].map(([y,e,t]) => (
                    <div key={y} className="am-rock-tl-item">
                      <div className="am-rock-tl-year">{y}</div>
                      <div>
                        <div className="am-rock-tl-event">{e}</div>
                        <div className="am-rock-tl-text">{t}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── NATUR DOCTOR ── */}
      {tab === 'stack' && (
        <div className="am-section">
          <div className="am-doctor-hero">
            <span className="am-doctor-avatar">🌿</span>
            <div>
              <div className="am-doctor-name">AI Natur Doctor</div>
              <div className="am-doctor-sub">Dr. Sebi · Aaron Reed · RAG · Lab-analyse · Sundhedslog</div>
            </div>
          </div>

          {/* Doctor sub-tabs */}
          <div className="am-doctor-tabs">
            {[
              {id:'chat',  label:'💬 Konsultation'},
              {id:'image', label:'📷 Billede Analyse'},
              {id:'labs',  label:'🔬 Laboratorieværdier'},
              {id:'log',   label:'📋 Sundhedslog'},
            ].map(t => (
              <button key={t.id} className={`am-doctor-tab ${doctorTab===t.id?'active':''}`} onClick={() => setDoctorTab(t.id)}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="am-profile-row">
            {[
              {placeholder:'Alder', key:'age', type:'number'},
              {placeholder:'Højde cm', key:'height', type:'number'},
              {placeholder:'Vægt kg', key:'weight', type:'number'},
            ].map(f => (
              <input key={f.key} type={f.type} placeholder={f.placeholder}
                value={profile[f.key]}
                onChange={e => { const p = {...profile, [f.key]: e.target.value}; setProfile(p); localStorage.setItem('nd_profile', JSON.stringify(p)) }}
                style={{background:'#0a0f1e', color:'#fff', border:'1px solid rgba(80,180,80,0.25)', borderRadius:'8px', padding:'8px 6px', fontSize:'11px', textAlign:'center', outline:'none', width:'100%'}}
              />
            ))}
            <select value={profile.gender} onChange={e => { const p = {...profile, gender: e.target.value}; setProfile(p); localStorage.setItem('nd_profile', JSON.stringify(p)) }}
              style={{background:'#0a0f1e', color:'#fff', border:'1px solid rgba(80,180,80,0.25)', borderRadius:'8px', padding:'8px 4px', fontSize:'11px', outline:'none', width:'100%'}}>
              <option value="mand">Mand</option>
              <option value="kvinde">Kvinde</option>
            </select>
          </div>

          {doctorTab === 'image' && (
            <div className="am-labs-section">
              <p className="am-intro">Upload foto af hud, tunge eller øjne. AI Natur Doctoren analyserer farve og tegn via TCM og Dr. Sebi metode.</p>
              <div className="am-image-select">
                {['hud','tunge','øjne','negle','urin'].map(bp => (
                  <button key={bp} className={`am-body-btn ${imageBodyPart===bp?'active':''}`} onClick={() => setImageBodyPart(bp)}>
                    {bp === 'hud' ? '🫁' : bp === 'tunge' ? '👅' : bp === 'øjne' ? '👁' : bp === 'negle' ? '💅' : '💧'} {bp}
                  </button>
                ))}
              </div>
              <div className="am-image-upload" onClick={() => imageInputRef.current?.click()}>
                <input ref={imageInputRef} type="file" accept="image/*" style={{display:'none'}} onChange={analyzeImage} />
                <span style={{fontSize:'32px'}}>📷</span>
                <p>Tryk for at uploade foto af {imageBodyPart}</p>
                <p style={{fontSize:'11px', color:'rgba(255,255,255,0.4)'}}>JPG eller PNG — taget i godt lys</p>
              </div>
              {imageLoading && <p style={{textAlign:'center', color:'rgba(80,180,80,0.7)', fontSize:'12px', padding:'12px'}}>🌿 Analyserer farver og tegn...</p>}
              {imageResult && (
                <div className="am-stack-result" style={{marginTop:'14px'}}>
                  <div className="am-box-label">🔬 TCM FARVE-DIAGNOSE + NATURMEDICINSK ANALYSE</div>
                  <pre className="am-stack-text">{imageResult}</pre>
                </div>
              )}
              <div style={{marginTop:'12px', background:'rgba(255,200,30,0.06)', border:'1px solid rgba(255,200,30,0.15)', borderRadius:'8px', padding:'10px'}}>
                <p style={{fontSize:'11px', color:'rgba(255,200,80,0.7)', margin:0}}>⚠️ Analyse baseret på farve-mønstre og TCM tradition. Ikke en medicinsk diagnose.</p>
              </div>
            </div>
          )}

          {doctorTab === 'labs' && (
            <div className="am-labs-section">
              <p className="am-intro">Skriv dine laboratorieværdier — Natur Doctoren fortolker dem naturmedicinsk uden Big Pharma-spin.</p>
              <textarea
                className="am-labs-input"
                placeholder="fx: TSH: 3.2, T4: 12, Vitamin D: 28, Ferritin: 18, Hæmoglobin: 11.2, Kolesterol: 6.1..."
                value={labInput}
                onChange={e => setLabInput(e.target.value)}
                rows={5}
                style={{background:'#0a0f1e', color:'#fff', border:'1px solid rgba(80,180,80,0.25)', borderRadius:'10px', padding:'12px', fontSize:'12px', resize:'none', outline:'none', width:'100%', boxSizing:'border-box'}}
              />
              <button className="am-stack-btn" onClick={analyzeLabs} disabled={labLoading || !labInput.trim()} style={{marginTop:'10px'}}>
                {labLoading ? '🔬 Analyserer...' : '🔬 Analysér med naturmedicin →'}
              </button>
              {labResult && (
                <div className="am-stack-result" style={{marginTop:'14px'}}>
                  <pre className="am-stack-text">{labResult}</pre>
                </div>
              )}
            </div>
          )}

          {doctorTab === 'log' && (
            <div className="am-log-section">
              <p className="am-intro">Registrer hvad du har prøvet og hvad der virkede — bygger din personlige healing historik.</p>
              <div className="am-log-form">
                {[
                  {key:'symptom', placeholder:'Symptom/problem (fx: migræne, træthed, led-smerter)'},
                  {key:'remedy',  placeholder:'Hvad du prøvede (fx: Magnesium 400mg + Ashwagandha)'},
                  {key:'result',  placeholder:'Resultat (fx: migræne væk efter 3 dage)'},
                ].map(f => (
                  <input key={f.key} placeholder={f.placeholder} value={logForm[f.key]}
                    onChange={e => setLogForm({...logForm, [f.key]: e.target.value})}
                    style={{background:'#0a0f1e', color:'#fff', border:'1px solid rgba(80,180,80,0.2)', borderRadius:'8px', padding:'10px', fontSize:'12px', outline:'none', width:'100%', boxSizing:'border-box', marginBottom:'8px'}}
                  />
                ))}
                <button className="am-stack-btn" onClick={saveLog}>
                  {logSaved ? '✓ Gemt!' : '💾 Gem i sundhedslog'}
                </button>
              </div>
              {healthLog.length > 0 && (
                <div className="am-log-list">
                  <h3 style={{fontSize:'13px', color:'#fff', margin:'16px 0 10px'}}>Din healing historik:</h3>
                  {healthLog.map((e,i) => (
                    <div key={i} className="am-log-entry">
                      <div className="am-log-date">{e.date}</div>
                      <div className="am-log-symptom">🩺 {e.symptom}</div>
                      <div className="am-log-remedy">🌿 {e.remedy}</div>
                      {e.result && <div className="am-log-result">✦ {e.result}</div>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {doctorTab === 'chat' && <>
            <div className="am-chat-messages">
              <div className="am-chat-msg doctor">
                <pre className="am-chat-response">{DOCTOR_GREETING}</pre>
              </div>
              {chatMessages.map((m, i) => (
                <div key={i} className={`am-chat-msg ${m.role === 'user' ? 'user' : 'doctor'}`}>
                  <pre className="am-chat-response">{m.content}</pre>
                </div>
              ))}
              {chatLoading && (
                <div className="am-chat-msg doctor loading">🌿 Natur Doctor analyserer...</div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="am-chat-input-row">
              <textarea
                className="am-chat-input"
                placeholder="Skriv dit spørgsmål... (Enter = send)"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                rows={3}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
                style={{background:'#0a0f1e', color:'#fff', border:'1px solid rgba(80,180,80,0.25)', borderRadius:'10px', padding:'10px 12px', fontSize:'13px', resize:'none', outline:'none', lineHeight:'1.5', flex:1}}
              />
              <button className="am-chat-send" onClick={sendMessage} disabled={chatLoading || !chatInput.trim()}>
                {chatLoading ? '⏳' : '→'}
              </button>
            </div>
            {chatMessages.length > 0 && (
              <button className="am-chat-reset" onClick={() => { setChatMessages([]); localStorage.removeItem('nd_chat') }}>
                Start ny samtale
              </button>
            )}
          </>}
        </div>
      )}

      {/* ── EXPANDING CONSCIOUSNESS ── */}
      {tab === 'expand' && (
        <div className="am-section">
          {psy ? (
            <div className="am-detail">
              <button className="am-back" onClick={() => setPsySelected(null)}>← Tilbage</button>
              <div className="am-detail-header">
                <span className="am-d-icon">{psy.icon}</span>
                <div>
                  <h2 className="am-d-name">{psy.name}</h2>
                  <span className="am-d-cat">{psy.natural ? '🌿 Naturlig' : '⚗️ Semi-syntetisk'}</span>
                </div>
              </div>
              <div className="am-dosage-box">
                <span className="am-box-label">📜 OPRINDELSE</span>
                <p>{psy.origin}</p>
              </div>
              <div className="am-dosage-box">
                <span className="am-box-label">💊 MICRODOSING</span>
                <p>{psy.microdose}</p>
              </div>
              <div className="am-psy-full-box">
                <span className="am-box-label">🌌 FULD OPLEVELSE</span>
                <p>{psy.full}</p>
              </div>
              <div className="am-psy-conn-box">
                <span className="am-box-label">⬛ ARCHON / DMT FORBINDELSEN</span>
                <p>{psy.connection}</p>
              </div>
            </div>
          ) : (
            <>
              <p className="am-intro">Naturens portaler til udvidede bevidsthedsrammer. Brugt af shamaner i årtusinder. Klik for at udforske.</p>
              <div className="am-psy-grid">
                {[...PSYCHEDELICS, ...EXTRA_PSYCHEDELICS].map(p => (
                  <button key={p.name} className="am-psy-card" onClick={() => setPsySelected(p.name)}>
                    <span className="am-psy-card-icon">{p.icon}</span>
                    <span className="am-psy-card-name">{p.name}</span>
                    <span className="am-psy-card-nat">{p.natural ? '🌿 Naturlig' : '⚗️ Rensende'}</span>
                  </button>
                ))}
              </div>

              {/* Microdose tabel */}
              <h3 className="am-section-title">📊 Microdose vs. Fuld Oplevelse</h3>
              <button className="am-table-toggle" onClick={() => setShowTable(!showTable)}>
                {showTable ? '▲ Skjul tabel' : '▼ Vis doserings-tabel'}
              </button>
              {showTable && (
                <div className="am-dose-table">
                  <div className="am-dose-header">
                    <span>Natur Medicin</span><span>Microdose</span><span>Fuld dosis</span><span>Mikrodose effekt</span><span>Dyb oplevelse</span>
                  </div>
                  {MICRO_TABLE.map(r => (
                    <div key={r.sub} className="am-dose-row">
                      <span className="am-dose-sub">{r.sub}</span>
                      <span className="am-dose-micro">{r.micro}</span>
                      <span className="am-dose-full">{r.full}</span>
                      <span className="am-dose-effect">{r.effect}</span>
                      <span className="am-dose-deep">{r.deepExp}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Ekstra psykedelics */}
              <h3 className="am-section-title">🌿 Alle Natur Psykedelics</h3>
              <button className="am-table-toggle" onClick={() => setShowExtra(!showExtra)}>
                {showExtra ? '▲ Skjul' : '▼ Vis ekstra: Bufo · Ibogaine · Mescaline · Kambo · Kanna'}
              </button>
              {showExtra && (
                <div className="am-psy-grid" style={{marginTop:'10px'}}>
                  {EXTRA_PSYCHEDELICS.map(p => (
                    <button key={p.name} className="am-psy-card" onClick={() => {
                      setShowExtra(false)
                      setPsySelected(p.name)
                    }}>
                      <span className="am-psy-card-icon">{p.icon}</span>
                      <span className="am-psy-card-name">{p.name}</span>
                      <span className="am-psy-card-nat">{p.natural ? '🌿 Naturlig' : '⚗️ Ikke-plant'}</span>
                    </button>
                  ))}
                </div>
              )}

              <h3 className="am-section-title">🌀 Rodin Coils & Frekvens Healing</h3>
              {FREQUENCY_HEALING.map(f => (
                <div key={f.name} className="am-freq-card">
                  <div className="am-freq-header">
                    <span className="am-freq-icon">{f.icon}</span>
                    <h4 className="am-freq-name">{f.name}</h4>
                  </div>
                  <p className="am-freq-text">{f.text}</p>
                </div>
              ))}
              <button className="am-cta" onClick={() => nav('/vortex')}>
                Vortex Matematik & Rodin Coils →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
