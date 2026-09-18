import type { Location, OkresInfo } from "./types";

export const okresInfosC: OkresInfo[] = [
  {
    id: "pribram",
    name: "okres Příbram",
    otherTowns: [
      "Dobříš",
      "Sedlčany",
      "Rožmitál pod Třemšínem",
      "Březnice",
      "Sedlec-Prčice",
      "Nový Knín",
      "Krásná Hora nad Vltavou"
    ]
  },
  {
    id: "benesov",
    name: "okres Benešov",
    otherTowns: [
      "Týnec nad Sázavou",
      "Votice",
      "Bystřice",
      "Sázava",
      "Neveklov",
      "Pyšely",
      "Trhový Štěpánov",
      "Miličín"
    ]
  },
  {
    id: "praha-vychod",
    name: "okres Praha-východ",
    otherTowns: ["Odolena Voda", "Kostelec nad Černými lesy"]
  },
  {
    id: "praha-zapad",
    name: "okres Praha-západ",
    otherTowns: ["Libčice nad Vltavou"]
  }
];

export const locationsC: Location[] = [
  {
    slug: "pribram",
    name: "Příbram",
    locative: "v Příbrami",
    region: "pribram",
    geo: [49.6900, 14.0105],
    parts: ["Příbram", "Březové Hory", "Zdaboř", "Brod", "Bytíz", "Jesenice", "Kozičín", "Lazec", "Orlov", "Zavržice", "Žežice"],
    headline: "Svatá Hora, Březové Hory a brána do Brd",
    intro: [
      "Poutníci, výletníci mířící do Brd i místní na nákupech – v Příbrami se parkuje prakticky pořád. Na placeném parkovišti pod Svatou Horou se klíč snadno zaklapne v kufru ve chvíli, kdy se chystáte vystoupat po krytém schodišti k bazilice. Na náměstí T. G. Masaryka nebo na náměstí 17. listopadu zase stačí chvilka nepozornosti a ovladač zůstane ležet na sedadle zamčeného auta.",
      "Otevíráme vozy také u Oblastní nemocnice v ulici Gen. Tesaříka, na Březových Horách u Hornického muzea nebo v obchodní zóně na Zdaboři v Brodské ulici. Poradíme si s vybitou baterií klíče, zamrzlým zámkem po mrazivé noci na sídlišti i s poruchou centrálního zamykání u aut s bezklíčovým přístupem. Jezdíme nonstop po celé Příbrami včetně místních částí Brod, Bytíz a Orlov, auto otevřeme bez poškození a cenu řekneme předem."
    ],
    hotspots: [
      "Parkoviště pod Svatou Horou",
      "Náměstí T. G. Masaryka",
      "Náměstí 17. listopadu",
      "Oblastní nemocnice Příbram",
      "STOP SHOP Příbram na Zdaboři",
      "Hornické muzeum na Březových Horách"
    ],
    tip: "Přímo do areálu Svaté Hory se autem nevjede – parkuje se na placeném parkovišti v Balbínově ulici asi 200 metrů od poutního místa. Než vyrazíte k bazilice, zkontrolujte, že klíč nezůstal v kufru mezi taškami.",
    faq: {
      question: "Otevřete auto i na Březových Horách nebo na Zdaboři, mimo centrum Příbrami?",
      answer: "Ano. Vyjíždíme do celé Příbrami – od Březových Hor se Ševčinským dolem přes obchodní zónu na Zdaboři až po Bytíz, Brod nebo Žežice. Při volání řekněte ulici nebo nejbližší orientační bod, třeba STOP SHOP v Brodské ulici, a technik zamíří rovnou k vašemu vozu."
    }
  },
  {
    slug: "benesov",
    name: "Benešov",
    locative: "v Benešově",
    region: "benesov",
    geo: [49.7817, 14.6870],
    parts: ["Benešov", "Konopiště", "Úročnice", "Mariánovice", "Okrouhlice", "Chvojen", "Bedrč", "Boušice", "Buková Lhota", "Radíkovice", "Pomněnice", "Vidlákova Lhota"],
    headline: "zámek Konopiště, nádraží a Masarykovo náměstí",
    intro: [
      "Kdo dojíždí z Benešova vlakem do Prahy, nechává auto často v parkovacím domě u nádraží Benešov u Prahy, hned vedle autobusového terminálu. Ranní spěch, telefon v jedné ruce, taška v druhé – a klíč zůstane za zabouchnutými dveřmi. Stejně rychle se to stane na Masarykově náměstí při krátkém zastavení u polikliniky. Auto otevřeme nonstop a bez poškození zámku, těsnění i elektroniky, ať jde o starší vůz, nebo model s bezklíčovým přístupem.",
      "Druhou tváří Benešova jsou výletníci. Rodiny nechávají auta na placených parkovištích pod zámkem Konopiště a vyrážejí do parku nebo do Růžové zahrady – klíč se přitom snadno zaklapne v kufru spolu s kočárkem. Vyjíždíme také k Nemocnici Rudolfa a Stefanie a do místních částí Úročnice, Mariánovice nebo Okrouhlice. Poradíme si s vybitou baterií ovladače, zamrzlým zámkem, poruchou centrálního zamykání i s dodávkou, cenu znáte předem."
    ],
    hotspots: [
      "Parkovací dům u nádraží",
      "Autobusový terminál Benešov",
      "Masarykovo náměstí",
      "Parkoviště pod zámkem Konopiště",
      "Nemocnice Rudolfa a Stefanie"
    ],
    tip: "Na Masarykově a Malém náměstí čtou kamery SPZ už při vjezdu a parkovné se platí v terminálu před odjezdem, prvních 30 minut je zdarma. Když se kvůli zabouchnutým klíčům zdržíte déle, nezapomeňte po otevření auta zaplatit – nezaplacené stání systém předává městské policii.",
    faq: {
      question: "Zabouchl jsem klíče v autě na parkovišti u Konopiště. Jak vás navedu?",
      answer: "U zámku jsou dvě placená parkoviště – větší centrální asi 600 metrů od zámku a menší pod hrází rybníka asi 300 metrů od zámku. Řekněte nám, na kterém stojíte, a přidejte barvu a značku vozu, ať ho technik v sezoně najde i mezi desítkami dalších aut."
    }
  },
  {
    slug: "vlasim",
    name: "Vlašim",
    locative: "ve Vlašimi",
    region: "benesov",
    geo: [49.7064, 14.8989],
    parts: ["Vlašim", "Bolina", "Domašín", "Hrazená Lhota", "Nesperská Lhota", "Polánka", "Znosim"],
    headline: "zámecký park, Žižkovo náměstí a údolí Blanice",
    intro: [
      "Do Vlašimi se jezdí hlavně kvůli zámeckému parku podél Blanice a Muzeu Podblanicka. Auto zůstane na malém parkovišti před branou parku, bunda s klíči poputuje na poslední chvíli do kufru a dveře se zamknou. Takový výlet nemusí skončit čekáním na náhradní klíč z domova – stačí zavolat. Vůz otevřeme bez poškození a vy se můžete vrátit na procházku k čínskému pavilonu nebo pokračovat v cestě.",
      "Ve všední dny ve Vlašimi řešíme spíš dojíždění za prací a běžné pochůzky. Auta stojí na Žižkově a Husově náměstí, u polikliniky nebo u areálu Sellier & Bellot a v zimě umí potrápit zamrzlý zámek či vybitá baterie klíče. Pomůžeme i v místních částech Domašín, Znosim, Bolina nebo Polánka, ať jde o osobní auto, dodávku, nebo vůz s bezklíčovým přístupem. Jezdíme nonstop a cenu sdělíme předem."
    ],
    hotspots: [
      "Žižkovo náměstí",
      "Husovo náměstí",
      "Parkoviště u zámeckého parku",
      "Nádraží Vlašim",
      "Poliklinika Vlašim",
      "Areál Sellier & Bellot"
    ],
    tip: "Placené stání na Žižkově a Husově náměstí a v Komenského ulici tvoří jeden celek, zaplacený čas tedy platí i po přeparkování. Máte-li telefon u sebe, prodlužte si stání přes aplikaci ClickPark nebo DoKapsy, než auto otevřeme.",
    faq: {
      question: "Zamkl jsem klíče v autě během procházky zámeckým parkem ve Vlašimi. Kam vás mám navést?",
      answer: "Z vnější strany parku je před branou malé parkoviště. Řekněte nám, jestli stojíte tam, nebo u jiného vstupu do parku, a přidejte barvu a značku vozu. Technik auto otevře bez poškození a vy se můžete vrátit do parku."
    }
  },
  {
    slug: "celakovice",
    name: "Čelákovice",
    locative: "v Čelákovicích",
    region: "praha-vychod",
    geo: [50.1605, 14.7501],
    parts: ["Čelákovice", "Císařská Kuchyně", "Sedlčánky", "Záluží"],
    headline: "dojíždění vlakem, Labská stezka a tvrz",
    intro: [
      "Čelákovice jsou městem dojíždějících – ráno se parkuje v parkovacím domě u nádraží nebo v ulicích pod ním a dál se pokračuje vlakem do Prahy. Když klíč zůstane v zapalování a souprava už přijíždí k nástupišti, zavolejte nám. Auto otevřeme v parkovacím domě i v zóně placeného stání pod nádražím, a to bez poškození dveří, těsnění a elektroniky, u osobních vozů i dodávek.",
      "Mimo nádraží vyjíždíme k obchodům v Toušeňské ulici, na náměstí 5. května, k Městskému stadionu nebo k tvrzi s Městským muzeem. Oblíbená je i Labská stezka kolem zdymadla, kam se vyráží na kole – klíč od auta přitom snadno zůstane v kufru vedle pumpičky. Pomůžeme také v Záluží, Sedlčánkách a Císařské Kuchyni, s vybitou baterií klíče, zamrzlým zámkem i s vozy s bezklíčovým startováním. Nonstop a s cenou předem."
    ],
    hotspots: [
      "Parkovací dům u nádraží",
      "Nádraží Čelákovice",
      "Náměstí 5. května",
      "Obchody v Toušeňské ulici",
      "Městský stadion",
      "Zdymadlo Čelákovice"
    ],
    tip: "V zóně placeného stání pod nádražím se krátkodobé parkování platí ve všední dny od 9 do 16 hodin a v sobotu od 9 do 12, nejsnáz přes aplikaci MPLA. Pokud máte telefon u sebe, zaplaťte si stání hned, ještě než k autu dorazíme.",
    faq: {
      question: "Otevřete auto v parkovacím domě u nádraží v Čelákovicích i uprostřed noci?",
      answer: "Ano. Parkovací dům u nádraží je otevřený nonstop a my vyjíždíme také nonstop, takže přijedeme i po posledním večerním vlaku z Prahy. Nahlaste nám podlaží, barvu a značku vozu. Auto otevřeme bez poškození a vy pak jen zaplatíte parkovné v automatu a vyjedete."
    }
  }
];
