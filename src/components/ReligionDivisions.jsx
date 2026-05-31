import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ReligionDivisions.css'

const HELL_CONTENT = {
  title: 'Helvede — Opfundet som Magtmiddel',
  thesis: 'Helvede eksisterer ikke i Jødedommen — den ældste abrahamitiske tro. Det er en kristen opfindelse fra 300-400 e.Kr. designet til at skabe frygt og kontrol. Jesu jødiske samtid kendte det ikke.',
  sections: [
    {
      title: '📜 Jødedommen: Intet helvede',
      text: 'Sheol i det gamle testamente = "de dødes sted" — et neutralt, stille sted. IKKE et pinested. Alle gik til Sheol — gode og onde. Ingen evig straf. Ingen ild.\n\nGehinnom i Talmud: En dal udenfor Jerusalem (Ge-Hinnom) hvor affald brændte. Bruges metaforisk som renselsessted i MAX 12 måneder — ikke evig pine.\n\nDen ortodokse jødiske tradition i dag: Ingen evig helvede. Sjælen renses og vender tilbage til Gud.',
    },
    {
      title: '✝ Kristendommen: Helvede opfindes',
      text: 'Jesus brugte "Gehenna" (den brændende affaldsdal) metaforisk. Hans tilhørere vidste hvad det betød — ingen troede han mente bogstavelig ild.\n\nFøre Nicæa-koncilet 325 e.Kr.: Mange kristne troede på apokatastasis — universel frelse for alle til sidst.\n\nEfter Konstantins overtagelse: Kirkefædrene Augustin og Tertullian indførte evig, bogstavelig helvede. Tertullian nød tanken om at se syndere pine.\n\nFormålet: Et folk der frygter evig pine er lettere at kontrollere og opkræve tiende fra.',
    },
    {
      title: '📖 Hvad tekster siger',
      text: 'Ezekiel 18:4 (Jødisk): "Den sjæl der synder, den skal dø" — død, ikke evig pine.\n\nRomerbrevet 6:23 (Tidlig kristen): "Syndens løn er død" — igen: død.\n\nJohannes 3:16: "Fortabes" = apollymi på græsk = ødelæggelse/tilintetgørelse — ikke evig pine.\n\nAnnihilationisme: Mange bibelforskere konkluderer at "evig ild" = total udslettelse — ikke evig bevidst lidelse.',
    },
    {
      title: '⬛ Archon-forbindelsen',
      text: 'Nag Hammadi — Hypostasis of the Archons: Yaldabaoth (den blinde skaber) opretholder sin magt ved trusler og frygt. Han siger: "Tilbed mig ellers straffes du."\n\nDette er præcis helvede-doktrinen. Det er Archon-kontrol oversat til kristen teologi.\n\nDen sande Gud i mystisk tradition (Sufisme, Kabbalah, Gnosticisme, Vedanta) er KÆRLIGHED — ikke en tyrann der brænder sine børn for evigt.\n\nHelvede som koncept er den mest effektive kontrolmekanisme i menneskenes historie: Frygt for evig pine er stærkere end enhver verdslig lov.',
    },
  ],
}

const SATURN_CONTENT = {
  title: 'Saturn Tilbedelse & Davidsstjernen',
  thesis: 'Davidsstjernen (hexagrammet) har intet med Kong David at gøre. Det er Saturns symbol — og Saturn er den kosmiske kraft elite-kulterne tilbeder. Det er også et kraftfuldt geometrisk frekvenssystem.',
  sections: [
    {
      title: '⬛ Den Sorte Kube = Saturn',
      text: 'Saturn er den ringgede planet — "den gamle Gud" i alle antikke kulturer. Hans symbol er KUBEN og HEXAGRAMMET.\n\nDen Sorte Kube vises OVERALT i elite-symbolik:\n• Kaaba i Mekka = sort kube (muslimer cirkulerer om den)\n• Tefillin = sort læderkasse jøder bærer på panden\n• Black monolith i Kubrick\'s "2001: A Space Odyssey"\n• Goldman Sachs logo = sort kube\n• Apple Store = glas kube i New York\n• WWE, NFL, og andre major sport-organisationer bruger sorte kuber',
    },
    {
      title: '⬡ Saturn\'s Nordpol = Hexagon',
      text: 'NASA bekræftede: Saturn\'s nordpol har et perfekt sekskants (hexagonalt) stormfelt — 25.000 km bredt.\n\nDette ER ikke tilfældig natur. Hexagonet vibrerer ved Saturns resonansfrekvens. Det er som om planeten selv vibrerer i dette mønster.\n\nHexagrammet (Davidsstjernen) = 2D projektion af den tredimensionelle form der skaber Saturns hexagon.\n\nEliten tilbeder ikke Satan som sådan — de tilbeder SATURN (latin: Saturnus). "Satan" er korruption af "Saturn".',
    },
    {
      title: '✡ Davidsstjernen som Frekvens-System',
      text: 'Hexagrammet er IKKE et jødisk symbol historisk. Det optræder i:\n• Hinduisme (Shatkona = Shiva+Shakti forening)\n• Sumeriske segl (Ishtar/Venus symbol)\n• Egyptisk magi\n• Salomons Segl (okkulte traditioner)\n\nHexagrammet som geometrisk form:\n• 6 ydre punkter × 6 trekanter × 6-kantet centrum = 6-6-6\n• Det indeholder alle 5 platoniske solider i sin projektion\n• Det er en 3D Star Tetrahedron (Merkaba) set fra siden\n• Merkaba = "Light-Spirit-Body" = bevidsthedsfarkost i Kabbalah\n\nDet er et KRAFTFULDT frekvens-redskab — men det er Saturn\'s symbol, ikke David\'s.',
    },
    {
      title: '🗓 Saturnalia → Jul → Saturn',
      text: 'Saturnalia = romersk festival for Saturn fra 17-25. december.\n\nKirkemødet i Nicæa 325 e.Kr. placerede Jesu fødsel på 25. december — præcis på Saturns festdag.\n\nSanta Claus = Saturnus (klokke ringe, gaver, rød dragt = Saturns rød-og-sort farver).\n\nLørdag = Saturn\'s dag (Saturday = Saturn\'s day på engelsk).\n\nEliten fejrer stadig Saturns cyklus — skjult i populærkulturens ritualer.',
    },
  ],
}

const IDOL_EXAMPLES = [
  {
    religion: 'Islam',
    icon: '☪',
    idol: 'Kaaba og den Sorte Sten',
    what: 'Muslimer verdensplan beder mod Kaaba i Mekka 5 gange dagligt. Pilgrimme kysser den Sorte Sten (Hajar al-Aswad). Kaaba er et kubisk stenhus.',
    truth: 'Profeten Muhammad ødelagde alle idols i Mekka da han sejrede (630 e.Kr.) — 360 afgudsbilleder. Men Kaaba-stenen var allerede der fra præ-islamisk arabisk polyteisme.\n\nOmar ibn al-Khattab (2. kalif) sagde direkte om den Sorte Sten: "Jeg ved at du er en sten der hverken gavner eller skader. Hvis jeg ikke havde set Profeten kysse dig, ville jeg ikke have kysset dig."\n\nKoranens budskab: "Han er Allah — der er ingen gud undtagen Ham. Han er alvidende om det skjulte og det åbenbare." (59:22). Allah er ikke lokaliseret i Mekka.',
    quran: '"Og din Herres er Østen og Vesten, hvorsomhelst du vender dig, er Allahs ansigt." (2:115) — Gud er OVERALT, ikke i Mekka.',
  },
  {
    religion: 'Kristendom',
    icon: '✝',
    idol: 'Korset og Helgenstatuer',
    what: 'Kirker er fyldt med kors, statuer af Jesus, Maria og helgener. Katolikker ber rosenkrans til Maria. Orthodox-kristne kysser ikoner. Protestanter bærer kors som smykker.',
    truth: 'Korset er et romersk henrettelsesredskab — identisk med at bære en lille gylden galge. Tidlige kristne brugte IKKE korset som symbol — det er fra 300-tallet e.Kr. da Konstantin adopterede kristendommen politisk.\n\nJesus selv sagde: "Gud er ånd, og de der tilbeder ham, skal tilbede i ånd og sandhed." (Johannes 4:24) — ikke i bygninger, ikke ved statuer.\n\nMoses 2. bud: "Du må ikke lave dig nogen gudebillede i skikkelse af noget som helst." Alligevel er katolske kirker fyldt med statuer.',
    quran: 'Jesus sagde: "Herren vor Gud er én Herre." (Markus 12:29) — Monoteisme uden billeder eller statuer.',
  },
  {
    religion: 'Hinduisme',
    icon: '🕉',
    idol: 'Murti (gudestatuer)',
    what: 'Hinduer tilbeder bogstaveligt talt statuer af Ganesha, Shiva, Krishna, Kali. Statuer bades, klædes på, fodres og bæres i processioner.',
    truth: 'Advaita Vedanta — hinduismens dybeste filosofi — siger at Brahman (den absolutte virkelighed) er formløs, navnløs og overalt. Statuer er hjælpemidler til concentration for begyndere — ikke Gud selv.\n\nAdi Shankara: "Brahman er hverken mand, kvinde eller dyr. Det er hverken kvalitet, handling, genus eller art. Det er hverken begreb, billede eller form."\n\nDe Upanishadiske mestre lærte direkte kundskab om Atman (selvet som identisk med Brahman) — ingen statuer nødvendige.',
    quran: 'Rigveda: "Ekam sat vipra bahudha vadanti" — "Sandheden er én, vismænd kalder den ved mange navne." Ét formløst bevidsthedsfelt — alle statuer er fingre der peger.',
  },
  {
    religion: 'Sikhisme',
    icon: '☬',
    idol: 'Guru Granth Sahib — Bogen som Guru',
    what: 'Guru Granth Sahib er Sikhernes hellige skrift. Den behandles bogstaveligt som et levende menneske: den bades, klædes på, soves til (placeres i sin egen seng om natten), vækkes hver morgen, bæres i processioner i en guldprydet chaise.',
    truth: 'Guru Nanak (Sikhismens grundlægger) lærte direkte guddommelig oplevelse — Naam Simran (meditation på Guds navn). Han rejste til Hindu-templer og moskeer og sagde: "Der er ingen hindu. Der er ingen muslim. Der er kun Gud."\n\nMen hans skrifter er nu selv blevet det idol han advarer imod. Guru Granth Sahib siger: "Wahe Guru er inde i dit hjerte — søg Ham der." Ikke i en bog på en trone.\n\nGuru Nanak: "Mand er skabt i Guds billede — men han tilbeder sten og bøger i stedet for at finde Gud inden i sig selv."',
    quran: 'Guru Granth Sahib 1:1: "Ik Onkar" — Der er kun ÉN Gud. Ikke i bøger. Ikke i templer. Ikke i ritualer. Kun i bevidsthedens dybeste kerne.',
  },
  {
    religion: 'Alle Traditioner',
    icon: '✦',
    idol: 'Den Dybere Sandhed',
    what: 'Alle store religioner har fysiske symboler der kan blive til idols: Kors, Kaaba, murti, Torah-ruller, Buddha-statuer, Sikh-skriftet Guru Granth Sahib tilbedt fysisk.',
    truth: 'ALLE profeter og mystikere sagde det samme:\n\n• Moses: "Lav ikke gudebilleder"\n• Jesus: "Tilbed i ånd og sandhed"\n• Muhammad: "Allah er nærmere dig end din jugularvene" (50:16)\n• Buddha: "Vær din egen lygte — søg ingen ydre ly"\n• Krishna: "Jeg er i alle hjerter" (Bhagavad Gita 15:15)\n\nGud er INDEN I DIG. Ingen bygning, sten, statue eller bog ER Gud.',
    quran: 'Nag Hammadi — Jesus i Thomas Evangeliet: "Kongedømmet er inden i jer og det er uden for jer. Når I kender jer selv, vil I blive kendte og I vil forstå at I er børn af den levende Fader."',
  },
]

const RELIGIONS = [
  {
    id: 'islam',
    name: 'Islam',
    icon: '☪',
    color: '#40aa60',
    true_name: 'Sufisme',
    true_icon: '🌹',
    false_name: 'Sunni / Shia (Politisk)',
    false_icon: '⚔',
    intro: 'Islam er ikke én ting. Der er den indre, mystiske vej — Sufismen — og de ydre, juridisk-politiske former. De deler det arabiske ord "islam" men peger i fundamentalt forskellige retninger.',
    true_spirit: {
      title: 'Sufisme — Den Mystiske Kerne',
      desc: 'Sufismen er islams hjerte. Det er vejen til direkte erfaring af Gud — ikke via regler og lovgivning, men via kærlighed, meditation og indre renselse. Sufier søger fana — opløsning af selvet i Gud.',
      figures: ['Rumi (1207-1273) — "Din opgave er ikke at søge kærlighed, men at finde alle de barrierer du har bygget mod den"', 'Ibn Arabi (1165-1240) — Wahdat al-Wujud: "Al eksistens er Én — Gud er alt og alt er Gud"', 'Al-Hallaj (858-922) — "Ana\'l-Haqq" (Jeg er Sandheden/Gud) — korsfæstet af ortodokse for dette', 'Hafiz — "Selv efter alle disse år sørger solen aldrig for blomsten"', 'Rabia al-Adawiyya — første store kvindelige mystiker, lærte betingelsesløs guddommelig kærlighed'],
      practices: ['Dhikr — rytmisk repetition af Guds navne til theta-tilstand', 'Sama — spirituel musik og dans (whirling dervishes)', 'Muraqaba — meditation og kontemplation', 'Sohbet — spirituel samtale med sheikh', 'Fana — total opløsning af ego i det guddommelige'],
      connection: 'Sufi lære er identisk med Nag Hammadis Gnosis, hinduismens Advaita Vedanta og buddhistisk Dzogchen. Alle peger mod den samme direkte erfaring af ét bevidsthedsfelt.',
    },
    political: {
      title: 'Sunni & Shia — Den Politiske Opdeling',
      desc: 'Sunni-Shia splittelsen er ikke teologisk — den er politisk. Den opstod ved spørgsmålet om hvem der skulle efterfølge Profeten Muhammad som leder af det muslimske samfund. En magtkonflikt fra 632 e.Kr. der stadig dræber mennesker.',
      key_diff: 'Sunni (85%): Abu Bakr som legitim efterfølger — konsensus og juridisk tradition\nShia (15%): Ali (Profetens fætter) som eneste legitime efterfølger — imamteologi\nWahhabisme/Salafisme: Saudi-finansieret ultra-ortodoks bevægelse fra 1700-tallet — bag ISIS-ideologi',
      archon: 'Sunni-Shia konflikten finansieres aktivt af Saudi Arabien (Sunni) og Iran (Shia) — begge regimer bruger religiøs splittelse til at opretholde politisk magt. Archon-princippet: splitsystemet — hold folk i konflikt med dem der ligner dem mest.',
    },
  },
  {
    id: 'christianity',
    name: 'Kristendom',
    icon: '✝',
    color: '#4488cc',
    true_name: 'Gnosticisme / Kristen Mystik',
    true_icon: '✦',
    false_name: 'Vatikansk Kirke / Protestantisme',
    false_icon: '🏛',
    intro: 'Jesus lærte direkte guddommelig erfaring. Kirken institutionaliserede og politiserede hans lære. Det er fundamentalt forskellige projekter.',
    true_spirit: {
      title: 'Kristen Mystik & Gnosticisme',
      desc: 'Den tidlige kristendom var mangfoldig. Gnostikerne — hvis tekster blev begravet ved Nag Hammadi — lærte at Gud er inden i dig, at Kristus er en bevidsthedstilstand og at frelse handler om gnosis (viden) ikke tro.',
      figures: ['Meister Eckhart (1260-1328) — "Guds rige er inden i dig" — næsten brændt som kætter', 'Origenes (184-253) — lærte sjælevandring og universel frelse — fordømt 300 år efter sin død', 'Johannes af Korset — "Den mørke nat" — mystisk union med Gud', 'Hildegard von Bingen — visioner, musik og healing — katolsk men dybt mystisk', 'Thomas Evangeliet — "Kongedømmet er inden i jer og det er uden for jer"'],
      practices: ['Kontemplativ bøn — Hesychasm i ortodoks tradition', 'Lectio Divina — meditativ bibellæsning', 'Centering Prayer — kristen meditation', 'Ørkenfedrenes praksis — tidlig kristen meditation fra Egypten', 'Apofatisk teologi — Gud er hinsides alle begreber'],
      connection: 'Jesus lærte præcis det Nag Hammadi beskriver: Guds rige er INDEN I DIG. "Jeg og Faderen er ét." Det er Advaita Vedanta på aramæisk. Det er Sufismens fana. Det er Zens satori.',
    },
    political: {
      title: 'Institutionel Kirke — Magtens Redskab',
      desc: 'Konstantin den Store gjorde kristendommen til statsreligion i 313 e.Kr. Fra det øjeblik var Kirken et politisk redskab. Nikæa-koncilet i 325 e.Kr. standardiserede hvilke tekster der var "kanoniske" og brændte resten.',
      key_diff: 'Katolicisme: Pavestolen, hierarki, sakramenter som magtkontrol, indulgenser, Inkvisitionen\nProtestantisme: Reformationen brød med Rom men bevarede institutionel kontrol og politisk alliance\nEvangelikalisme: USA-baseret politisk religion der blander patriotisme med kristendom\nVaticanum: P2-logen, Vatikanbanken, pædofili-skandaler, Jesuit-hær',
      archon: 'Kirken har systematisk ødelagt gnostiske tekster, mystikerens lære og naturmedicin (hekseprocesser). Den installerede en mellemmand (præsten) mellem menneskeheden og Gud — præcis som Archonerne der forhindrer menneskeheden i at nå Kilde.',
    },
  },
  {
    id: 'judaism',
    name: 'Jødedom',
    icon: '✡',
    color: '#4466cc',
    true_name: 'Torah / Kabbalah',
    true_icon: '📜',
    false_name: 'Talmudisme / Zionisme',
    false_icon: '🏛',
    intro: 'Torah er Guds åbenbaring til Moses. Talmud er rabbinernes kommentarer og fortolkninger — skabt af mennesker. Det er fundamentalt anderledes. Og Zionisme er en politisk bevægelse fra 1800-tallet.',
    true_spirit: {
      title: 'Torah & Kabbalah — Den Mystiske Kerne',
      desc: 'Torah i sin rene form handler om forholdet mellem mennesket og det guddommelige. Kabbalah — jødedommens mystiske tradition — handler om universets struktur, sjælens rejse og foreningen med En Sof (det grænseløse).',
      figures: ['Moses Maimonides — "Guds kærlighed er proportenal med viden om Gud"', 'Baal Shem Tov (1698-1760) — grundlagde Hasidisme: Gud er i alt og alt er i Gud', 'Moshe Chaim Luzzatto — Kabbalist, "Derech HaShem" (Guds vej)', 'Rabbi Akiva — mystiker som kendte de fire dimensioner af Torah-fortolkning', 'Abraham Abulafia — profetisk Kabbalah, brugte åndedræt og vokalmelodier til mystisk oplevelse'],
      practices: ['Ein Sof — kontemplation af det grænseløse guddommelige', 'Gematria — hebraisk numerologi', 'Hitbonenut — meditativ kontemplation', 'Tikkun Olam — reparation af verden via bevidste handlinger', 'Sefirot — arbdet livets ti dimensioner'],
      connection: 'Kabbalah\'s Ain Sof = Hinduismens Brahman = Sufismens Allah = Buddhismens Sunyata. Alle mystiske traditioner beskriver det samme grænseløse bevidsthedsfelt der er kilden til alt.',
    },
    political: {
      title: 'Talmudisme & Zionisme — Den Politiske Version',
      desc: 'Talmud er 63 bind rabbinsk diskussion skrevet 200-500 e.Kr. — menneskeskabt kommentar, ikke Guds ord. Zionisme er en politisk nationalisme-bevægelse grundlagt af Theodor Herzl i 1897 — ikke en religiøs bevægelse.',
      key_diff: 'Torah: Guds åbenbaring, universel etik — "Elsk din næste som dig selv" (Leviticus 19:18)\nTalmud: Rabbinernes menneskelige fortolkninger (200-500 e.Kr.) — ikke Guds ord\nZionisme: Politisk nationalisme fra 1800-tallet — støttet af Rothschild og Balfour-erklæringen 1917\nNeturei Karta: Ortodokse jøder der afviser Zionisme som kætteri mod Torah',
      torah_vs_talmud: [
        {
          torah_ref: 'Torah — Leviticus 19:18',
          torah_text: '"Elsk din næste som dig selv — Jeg er Herren." (Ve\'ahavta lere\'acha kamocha)\n\nDette er Torah\'s gyldne regel — universel kærlighed til alle mennesker.',
          talmud_ref: 'Talmud — Sanhedrin 57a',
          talmud_text: 'Passagen beskriver forskellige juridiske regler for jøder og ikke-jøder (goyim) i straffesager.\n\nKontekst: Skrevet under romersk forfølgelse 200-500 e.Kr. — en traumatiseret befolknings juridiske tekst, ikke Guds ord.',
        },
        {
          torah_ref: 'Torah — Genesis 1:27',
          torah_text: '"Gud skabte mennesket i sit billede — han skabte dem i Guds billede, mand og kvinde skabte han dem."\n\nALLE mennesker er skabt i Guds billede — ingen undtagelse.',
          talmud_ref: 'Talmud — Yevamot 61a',
          talmud_text: 'En passage der diskuterer om ikke-jøder er inkluderet i visse juridiske kategorier.\n\nKontekst: Rabbinsk juridisk diskussion — direkte i modstrid med Torah\'s klare budskab om alle menneskers gudsbilledlighed.',
        },
        {
          torah_ref: 'Torah — Exodus 22:21',
          torah_text: '"Du må ikke undertrykke en fremmed eller mishandle ham — for du var selv fremmed i Egypten."\n\nTorah befaler eksplicit at behandle fremmede med respekt og medfølelse.',
          talmud_ref: 'Talmud — Bava Kamma 113b',
          talmud_text: 'Diskuterer ejendomsretlige regler i transaktioner mellem jøder og ikke-jøder.\n\nKontekst: Juridisk diskussion om handelspraksis — ikke en moralsk eller åndelig vejledning.',
        },
      ],
      clarification: '⚠️ VIGTIGT: Dette er IKKE hvad Torah lærer. Torah\'s kernebudskab er kærlighed til Gud og næsten — identisk med alle mystiske traditioner. Talmud er menneskeskabte fortolkninger fra en historisk tid med forfølgelse. Det er MENNESKENE der fordrejer — ikke Gud.\n\nJødiske stemmer der kritiserer disse systemer: Noam Chomsky, Norman Finkelstein, Neturei Karta, Israel Shamir.',
      archon: 'At kritisere Talmudisme som et juridisk-politisk system eller Zionisme som en politisk bevægelse er IKKE antisemitisme — ligesom at kritisere Vatikaner ikke er anti-kristen, og at kritisere Wahhabisme ikke er anti-muslimsk. Guddommelig sandhed og menneskelig institution er to fundamentalt forskellige ting.',
    },
  },
  {
    id: 'hinduism',
    name: 'Hinduisme',
    icon: '🕉',
    color: '#cc4444',
    true_name: 'Advaita Vedanta / Yoga',
    true_icon: '☀️',
    false_name: 'Brahminisme / Kastesystem',
    false_icon: '📊',
    intro: 'Hinduisme er ikke én religion — det er tusinders af traditioner. Den mystiske kerne (Advaita Vedanta) lærer at alt er Brahman. Men Brahminismen brugte religion til at opretholde et kastesystem der holdt milliarder i trældom.',
    true_spirit: {
      title: 'Advaita Vedanta — Non-Dualisme',
      desc: 'Advaita Vedanta er verdens mest sofistikerede non-duale filosofi. Grundlæggeren Adi Shankara (788-820) lærte: Brahman (ét bevidsthedsfelt) er den eneste realitet. Alt andet er maya (illusion). Dit sande selv er identisk med Brahman.',
      figures: ['Adi Shankara — "Tat Tvam Asi: Det er dig" — du er Brahman', 'Ramana Maharshi (1879-1950) — "Hvem er jeg?" — vej til selvrealisation via selvundersøgelse', 'Nisargadatta Maharaj — "I Am That" — direkte pointering på Bevidstheden', 'Swami Vivekananda — bragte Vedanta til Vesten, Parliament of Religions 1893', 'Sri Aurobindo — integral yoga, evolution af bevidsthed'],
      practices: ['Jnana Yoga — visdomsvejen: "Neti Neti" (ikke dette, ikke dette)', 'Bhakti Yoga — kærlighedsvejen: hengivelse til det guddommelige', 'Raja Yoga — meditationsvejen: Patanjalis Ashtanga', 'Karma Yoga — handlingsvejen: uselvisK handling', 'Kundalini — energiets opstigning gennem chakrasystemet'],
      connection: 'Advaita Vedanta er identisk med Sufismens Wahdat al-Wujud, Zens "Intet sind", Kristendommens "Jeg og Faderen er ét" og Nag Hammadis Gnosis. Ét bevidsthedsfelt — utallige sprog.',
    },
    political: {
      title: 'Brahminisme & Kastesystemet',
      desc: 'Kastesystemet (Varna) er ikke i de ældste Vediske tekster som et hierarki — det er en senere Brahmin-konstruktion der cementerede social kontrol. Brahminer (præster) øverst, Shudraer (tjenere) nederst, Dalits ("urørlige") under systemet.',
      key_diff: 'Advaita: Alle er Brahman — absolut lighed i åndens natur\nBrahminisme: Fødsel bestemmer din spirituelle og sociale status — Brahminer nærmest Gud\nKastediskrimination: Dalits (180 millioner) diskrimineres stadig i Indien i dag\nHindu-nationalisme (Hindutva): Politisk bevægelse der bruger religion til at forfølge muslimer og kristne',
      archon: 'Kastesystemet er Archon-princippet i sin reneste form: Kontroller menneskeheden ved at overbevise dem om at deres fødsel bestemmer deres værd. Dr. Ambedkar (Dalit-leder): "Hinduismens kaste-system er ikke en opdeling af arbejde — det er en opdeling af arbejdere."',
    },
  },
  {
    id: 'buddhism',
    name: 'Buddhisme',
    icon: '☸',
    color: '#cc8844',
    true_name: 'Zen / Dzogchen / Theravada',
    true_icon: '🧘',
    false_name: 'Institutionel Religion',
    false_icon: '🏯',
    intro: 'Buddha lærte at al lidelse stammer fra ubevidsthed og begær. Han lærte en metode til befrielse. Det er et radikalt, personligt projekt. Institutionel buddhisme har i mange tilfælde gjort det til endnu en religion med dogmer og hierarki.',
    true_spirit: {
      title: 'Zen, Dzogchen & Vipassana',
      desc: 'Disse former for buddhisme er direkte og kompromisløse. De peger direkte på bevidsthedens natur uden mellemmænd, ritualer eller dogmer. Zen: "Hvad er dit sande ansigt før dine forældre blev født?" Dzogchen: Rigpa — den nøgne bevidsthed.',
      figures: ['Bodhidharma (5. årh.) — "Buddhism er at se dit eget sind"', 'Huang Po — "Kun en tanke bort fra oplysning"', 'Longchenpa — største Dzogchen-mester: "Al eksistens er allerede fuldkommen"', 'Ajahn Chah — theravada mester: "Frihed er her og nu"', 'Thich Nhat Hanh — Engaged Buddhism, interbeing: alt er forbundet'],
      practices: ['Zazen — bare at sidde, ingenting at opnå', 'Koan-praksis — uløselige paradokser der bryder det analytiske sind', 'Vipassana — indsigtsmeditation, observation af sindets natur', 'Dzogchen — direkte introduktion til ren bevidsthed', 'Loving-kindness (Metta) — ubetinget kærlighed til alle væsener'],
      connection: 'Buddhas "Sunyata" (tomhed) er det samme som Hinduismens Brahman og Sufismens Allah — et bevidsthedsfelt uden grænser, ikke-personligt, altgennemtrængende. "Form er tomhed, tomhed er form" = "Alt er Brahman".',
    },
    political: {
      title: 'Institutionel Buddhisme',
      desc: 'Institutionel buddhisme har i Japan legitimeret militarisme (Zen i krig), i Burma skabt buddhistisk nationalisme der forfølger Rohingya-muslimer, og i Tibet bygget et feudalt hierarki med Dalai Lama i toppen.',
      key_diff: 'Theravada-nationalisme (Burma/Sri Lanka): Munk-ledet vold mod muslimske og hinduistiske mindretal\nJapansk Zen og krigen: Zen-munke støttede japansk militarisme under WWII\nTibetansk feudalisme: Dalai Lama-institutionen ejede store dele af Tibet\'s jord\nBuddhistisk antisemitisme: Eksisterer i dele af Sydøstasien',
      archon: 'Selv den mest fredelige traditions institutionelle form kan blive et kontrolredskab. Det er Archon-princippet: tag en sandhed og institutionaliser den — så mister den sin kraft og bliver i stedet et magtmiddel.',
    },
  },
]

const CORE_MESSAGE = `Alle mystiske traditioner peger mod den SAMME sandhed:

✦ Sufismens "Fana" = Vedantaens "Moksha" = Zens "Satori" = Gnosis = 5D bevidsthed

De bruger forskelligt sprog — men de beskriver den samme oplevelse: opløsningen af det separate selv i ét altomfattende bevidsthedsfelt.

Det er Stargate's kernebudskab: "The True Spirit of Religion."

Splittelsen kommer ikke fra den mystiske kerne — den kommer fra de institutionelle og politiske lag der er vokset hen over sandheden.`

export default function ReligionDivisions() {
  const [selected, setSelected] = useState(null)
  const [side, setSide] = useState('true')
  const [showHell, setShowHell] = useState(false)
  const [showSaturn, setShowSaturn] = useState(false)
  const nav = useNavigate()

  const rel = RELIGIONS.find(r => r.id === selected)

  if (rel) {
    const content = side === 'true' ? rel.true_spirit : rel.political
    return (
      <div className="rd-page">
        <div className="rd-detail-hero" style={{'--rc': rel.color}}>
          <button className="rd-back" onClick={() => setSelected(null)}>← Tilbage</button>
          <span className="rd-detail-icon">{rel.icon}</span>
          <h1 className="rd-detail-name">{rel.name}</h1>
          <p className="rd-detail-intro">{rel.intro}</p>
          <div className="rd-side-tabs">
            <button className={`rd-side-tab true ${side==='true'?'active':''}`} onClick={() => setSide('true')}>
              {rel.true_icon} {rel.true_name}
            </button>
            <button className={`rd-side-tab false ${side==='false'?'active':''}`} onClick={() => setSide('false')}>
              {rel.false_icon} {rel.false_name}
            </button>
          </div>
        </div>

        <div className="rd-content">
          <h2 className="rd-content-title" style={{color: side==='true' ? rel.color : '#ff8080'}}>{content.title}</h2>
          <p className="rd-content-desc">{content.desc}</p>

          {side === 'true' && (
            <>
              <div className="rd-figures">
                <h3>✦ Centrale Mestre</h3>
                {rel.true_spirit.figures.map((f,i) => (
                  <div key={i} className="rd-figure">{f}</div>
                ))}
              </div>
              <div className="rd-practices">
                <h3>🧘 Praksisser</h3>
                {rel.true_spirit.practices.map((p,i) => (
                  <div key={i} className="rd-practice">• {p}</div>
                ))}
              </div>
              <div className="rd-connection-box">
                <span className="rd-conn-label">⬡ UNIVERSAL FORBINDELSEN</span>
                <p>{rel.true_spirit.connection}</p>
              </div>
            </>
          )}

          {side === 'false' && (
            <>
              <div className="rd-keydiff">
                <h3>⚖ Forskelle</h3>
                <pre className="rd-keydiff-text">{content.key_diff}</pre>
              </div>

              {content.torah_vs_talmud && (
                <div className="rd-comparison">
                  <h3>📜 Torah vs. Talmud — Direkte sammenligning</h3>
                  <p className="rd-comparison-note">Torah = Guds ord · Talmud = Menneskenes fortolkninger. Se forskellen:</p>
                  {content.torah_vs_talmud.map((v,i) => (
                    <div key={i} className="rd-versus-card">
                      <div className="rd-versus-torah">
                        <span className="rd-versus-label torah">✦ TORAH</span>
                        <div className="rd-versus-ref">{v.torah_ref}</div>
                        <pre className="rd-versus-text torah-text">{v.torah_text}</pre>
                      </div>
                      <div className="rd-versus-vs">VS</div>
                      <div className="rd-versus-talmud">
                        <span className="rd-versus-label talmud">⚠ TALMUD</span>
                        <div className="rd-versus-ref">{v.talmud_ref}</div>
                        <pre className="rd-versus-text talmud-text">{v.talmud_text}</pre>
                      </div>
                    </div>
                  ))}
                  {content.clarification && (
                    <div className="rd-clarification">
                      <pre className="rd-keydiff-text">{content.clarification}</pre>
                    </div>
                  )}
                </div>
              )}

              {rel.id === 'judaism' && (
                <div className="rd-neturei-box">
                  <h3>✊ Neturei Karta — Ortodokse Jøder mod Zionisme</h3>
                  <p>Neturei Karta er en bevægelse af ultra-ortodokse jøder der aktivt demonstrerer MOD Zionisme og den israelske stat. De holder demonstrationer i New York, London og ved FN med skilte:</p>
                  <div className="rd-neturei-signs">
                    {['"Judaism YES — Zionism NO"','"Anti-Zionism is NOT Antisemitism"','"The Torah forbids the Zionist state"','"A Jew is not a Zionist"','"Stop the Zionist Genocide"'].map(s => (
                      <div key={s} className="rd-sign">{s}</div>
                    ))}
                  </div>
                  <p className="rd-neturei-note">Rabbi Yisroel Dovid Weiss (Neturei Karta): <em>"Zionismen er en afvisning af Torah. Staten Israel er ikke det jødiske folks stat — det er en politisk bevægelse der kidnappper det jødiske navn."</em></p>
                  <p className="rd-neturei-note">Dette er det stærkeste bevis på at kritik af Zionisme ikke er antisemitisme — det er jøder selv der fører an i kritikken.</p>
                </div>
              )}

              <div className="rd-archon-box">
                <span className="rd-archon-label">⬛ ARCHON FORBINDELSEN</span>
                <p>{content.archon}</p>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="rd-page">
      <div className="rd-hero">
        <div className="rd-hero-icon">✦</div>
        <h1 className="rd-title">Religion & Divisioner</h1>
        <p className="rd-sub">Den mystiske kerne vs. den institutionelle skal</p>
      </div>

      <div className="rd-core-message">
        <pre className="rd-core-text">{CORE_MESSAGE}</pre>
      </div>

      <div className="rd-section">
        <p className="rd-intro">Klik på en religion for at se forskellen mellem den mystiske kerne og den institutionelle/politiske version.</p>
        {RELIGIONS.map(r => (
          <button key={r.id} className="rd-religion-card" onClick={() => { setSelected(r.id); setSide('true') }}
            style={{'--rc': r.color}}>
            <div className="rd-card-header">
              <span className="rd-card-icon">{r.icon}</span>
              <div>
                <div className="rd-card-name">{r.name}</div>
                <div className="rd-card-tags">
                  <span className="rd-tag true">{r.true_icon} {r.true_name}</span>
                  <span className="rd-tag vs">vs.</span>
                  <span className="rd-tag false">{r.false_icon} {r.false_name}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="rd-section">
        <h2 className="rd-idol-title">🗿 Idol Tilbedelse — Beder du til Gud eller en sten?</h2>
        <div className="rd-idol-intro">
          <p>Alle store profeter forbød idol-tilbedelse. Alligevel er alle store religioner i dag fyldt med fysiske objekter folk tilbeder. Det er ikke Guds vilje — det er menneskenes tilføjelse.</p>
          <p style={{marginTop:'8px'}}>"Gud er ånd. De der tilbeder ham skal tilbede i ånd og sandhed." — Jesus (Johannes 4:24)</p>
        </div>
        {IDOL_EXAMPLES.map(ex => (
          <div key={ex.religion} className="rd-idol-card">
            <div className="rd-idol-header">
              <span className="rd-idol-icon">{ex.icon}</span>
              <div>
                <div className="rd-idol-religion">{ex.religion}</div>
                <div className="rd-idol-name">{ex.idol}</div>
              </div>
            </div>
            <div className="rd-idol-what">
              <span className="rd-idol-label">🗿 HVAD FOLK GØR</span>
              <p>{ex.what}</p>
            </div>
            <div className="rd-idol-truth">
              <span className="rd-idol-label">✦ SANDHEDEN</span>
              <pre className="rd-idol-text">{ex.truth}</pre>
            </div>
            <div className="rd-idol-quote">
              <span className="rd-idol-label">📜 SKRIFTERNES SVAR</span>
              <p>{ex.quran}</p>
            </div>
          </div>
        ))}
      </div>

      {/* HELVEDE SOM MAGTMIDDEL */}
      <div className="rd-section">
        <button className="rd-expand-btn" onClick={() => setShowHell(!showHell)}>
          🔥 {HELL_CONTENT.title} {showHell ? '▲' : '▼'}
        </button>
        {showHell && (
          <div className="rd-expand-content">
            <p className="rd-expand-thesis">{HELL_CONTENT.thesis}</p>
            {HELL_CONTENT.sections.map(s => (
              <div key={s.title} className="rd-expand-card">
                <h3 className="rd-expand-card-title">{s.title}</h3>
                <pre className="rd-keydiff-text">{s.text}</pre>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SATURN TILBEDELSE */}
      <div className="rd-section">
        <button className="rd-expand-btn saturn" onClick={() => setShowSaturn(!showSaturn)}>
          ⬛ {SATURN_CONTENT.title} {showSaturn ? '▲' : '▼'}
        </button>
        {showSaturn && (
          <div className="rd-expand-content">
            <p className="rd-expand-thesis">{SATURN_CONTENT.thesis}</p>
            {SATURN_CONTENT.sections.map(s => (
              <div key={s.title} className="rd-expand-card">
                <h3 className="rd-expand-card-title">{s.title}</h3>
                <pre className="rd-keydiff-text">{s.text}</pre>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rd-footer">
        <button className="rd-footer-btn" onClick={() => nav('/search')}>
          Søg i hellige tekster fra alle traditioner →
        </button>
      </div>
    </div>
  )
}
