import type { Location, OkresInfo } from "./types";

export const okresInfosB: OkresInfo[] = [
  {
    id: "mlada-boleslav",
    name: "okres Mladá Boleslav",
    otherTowns: [
      "Mnichovo Hradiště",
      "Benátky nad Jizerou",
      "Kosmonosy",
      "Bakov nad Jizerou",
      "Bělá pod Bezdězem",
      "Dobrovice",
      "Dolní Bousov"
    ]
  },
  {
    id: "nymburk",
    name: "okres Nymburk",
    otherTowns: ["Sadská", "Městec Králové", "Rožďalovice"]
  },
  {
    id: "kolin",
    name: "okres Kolín",
    otherTowns: ["Český Brod", "Pečky", "Zásmuky", "Týnec nad Labem", "Kouřim"]
  },
  {
    id: "kutna-hora",
    name: "okres Kutná Hora",
    otherTowns: ["Zruč nad Sázavou", "Uhlířské Janovice"]
  }
];

export const locationsB: Location[] = [
  {
    slug: "mlada-boleslav",
    name: "Mladá Boleslav",
    locative: "v Mladé Boleslavi",
    region: "mlada-boleslav",
    geo: [50.4125, 14.9064],
    parts: [
      "Mladá Boleslav",
      "Bezděčín",
      "Čejetice",
      "Čejetičky",
      "Debř",
      "Chrást",
      "Jemníky",
      "Michalovice",
      "Podchlumí",
      "Podlázky"
    ],
    headline: "město Škodovky, dálnice D10 a velká nákupní centra",
    intro: [
      "Mladá Boleslav žije automobilkou, stejně jako tisíce lidí, kteří sem denně dojíždějí na směny do Škody Auto nebo na vysokou školu. Mnoho z nich jezdí novými vozy s bezklíčovým přístupem, a když v ovladači dojde baterie nebo zazlobí centrální zamykání, zůstane auto zamčené na parkovišti u závodu, u Škoda Muzea na třídě Václava Klementa nebo kousek od sjezdu z dálnice D10.",
      "Mimo areál automobilky vyjíždíme do garáží OC Bondy i na velké parkoviště OC Olympia v Jičínské ulici, kde se klíč snadno zaklapne v kufru spolu s nákupem. Otevíráme auta také v parkovacím domě u Klaudiánovy nemocnice, na P+R U Stadionu i na okraji města – v Debři, na Podlázkách nebo v Bezděčíně. Přijedeme kdykoli a o ceně víte ještě před zásahem."
    ],
    hotspots: [
      "Škoda Muzeum",
      "OC Bondy",
      "OC Olympia",
      "P+R U Stadionu",
      "Parkovací dům Klaudiánovy nemocnice",
      "Exit 44 Mladá Boleslav na D10"
    ],
    tip: "Parkovací dům u Klaudiánovy nemocnice má sedm podlaží a vjezd u křižovatky Laurinovy a Palackého ulice. Když v něm zůstanou klíče v autě, zapamatujte si patro a nejbližší výtah – technik vás pak najde bez zbytečného hledání.",
    faq: {
      question: "Otevřete i novou Škodu s bezklíčovým systémem KESSY?",
      answer: "Ano. V ovladači KESSY bývá ukrytý nouzový mechanický klíč, kterým lze odemknout dveře řidiče – zkuste ho nejdřív. Pokud ho nemáte nebo ovladač zůstal uvnitř vozu, zavolejte nám. Auto otevřeme bez poškození zámku i elektroniky, u Škody stejně jako u ostatních značek."
    }
  },
  {
    slug: "nymburk",
    name: "Nymburk",
    locative: "v Nymburce",
    region: "nymburk",
    geo: [50.1861, 15.0417],
    parts: ["Nymburk", "Drahelice"],
    headline: "železniční město, hradby a Hrabalův pivovar",
    intro: [
      "Nymburk vyrostl na železnici a hlavní nádraží je dodnes místem, kde se ráno potkávají vlaky, regionální autobusy i řidiči, kteří tu odstaví auto. Ve spěchu na spoj se snadno stane, že klíč zůstane ležet na sedadle nebo baterie ovladače vypoví službu v nejhorší chvíli. Zamčené vozy otevíráme u nádraží, v ulicích bývalé železniční kolonie i na sídlištích Jankovice a Drahelice.",
      "V historickém centru Nymburka mezi Labem a ulicí Velké Valy se za stání platí a část míst je vyhrazená, takže každá minuta s klíči zamčenými v autě se počítá – na náměstí Přemyslovců stejně jako u kostela svatého Jiljí nebo u městských hradeb. Vyjíždíme také k Nemocnici Nymburk na Boleslavské třídě a ke Sportovnímu centru během basketbalových zápasů. Osobní auta i dodávky otevíráme ve dne i v noci a bez poškození."
    ],
    hotspots: [
      "Nymburk hlavní nádraží",
      "Náměstí Přemyslovců",
      "Nemocnice Nymburk",
      "Sportovní centrum Nymburk",
      "Zimní stadion Nymburk",
      "Kaufland v Kolínské ulici"
    ],
    tip: "V historickém centru Nymburka se smí stát jen na vyznačených místech a parkovné se platí ve všední dny od 6 do 18 hodin a v sobotu do poledne. Pokud čekáte u zamčeného auta, pohlídejte si, aby vám mezitím nevypršel zaplacený čas.",
    faq: {
      question: "Zabouchl jsem klíče v autě u nymburského hlavního nádraží. Kde vás mám čekat?",
      answer: "Zůstaňte u vozu a při volání řekněte, zda stojíte u autobusového terminálu u nádraží, nebo v některé z okolních ulic. Technik pak zamíří rovnou k autu a cenu vám řekneme ještě předtím, než vyjedeme."
    }
  },
  {
    slug: "podebrady",
    name: "Poděbrady",
    locative: "v Poděbradech",
    region: "nymburk",
    geo: [50.1425, 15.1189],
    parts: [
      "Poděbrady",
      "Nymburské Předměstí",
      "Žižkovo Předměstí",
      "Malé Zboží",
      "Koutecká Čtvrť",
      "Kluk",
      "Polabec",
      "Přední Lhota",
      "Velké Zboží"
    ],
    headline: "lázně, kolonáda a tři sjezdy z D11",
    intro: [
      "Do Poděbrad se jezdí za lázeňskou péčí, na procházku kolem Libenského kolonády a květinových hodin i na výlet k Labi. Hosté lázní často nechávají auto na Centrálním parkovišti v Lázeňské ulici a teprve u vozu zjistí, že klíč zůstal v zavazadlovém prostoru. Auto otevřeme bez poškození, ať stojí u lázeňského parku, u zámku, nebo na Jiřího náměstí nedaleko pomníku Jiřího z Poděbrad.",
      "Poděbrady mají tři sjezdy z dálnice D11 – západ, jih a východ – a řada řidičů sem odbočí jen na krátkou zastávku cestou do Hradce Králové nebo zpátky do Prahy. Pomáháme u funkcionalistického nádraží z roku 1932, v ulicích Žižkova i Nymburského Předměstí a také v místních částech, jako jsou Kluk, Polabec, Přední Lhota nebo Velké Zboží. Poradíme si s bezklíčovými vozy, s dodávkami i s autem, kterému došla autobaterie."
    ],
    hotspots: [
      "Jiřího náměstí",
      "Libenského kolonáda",
      "Centrální parkoviště v Lázeňské ulici",
      "Nádraží Poděbrady",
      "Zámek Poděbrady",
      "Exit 35 Poděbrady-západ na D11"
    ],
    tip: "Pokud voláte z dálnice nebo těsně po sjezdu, řekněte nám číslo exitu – 35, 39, nebo 42. Všechny tři vedou do Poděbrad, každý ale z jiné strany města, takže technik hned zvolí nejkratší cestu.",
    faq: {
      question: "Jsem v Poděbradech na lázeňském pobytu a klíče zůstaly zamčené v autě na Centrálním parkovišti. Pomůžete?",
      answer: "Ano. Centrální parkoviště v Lázeňské ulici je otevřené nonstop, takže se k autu dostaneme kdykoli – třeba i večer po procedurách. Stačí říct, kde přibližně vůz stojí, a cenu vám sdělíme předem."
    }
  },
  {
    slug: "milovice",
    name: "Milovice",
    locative: "v Milovicích",
    region: "nymburk",
    geo: [50.2260, 14.8887],
    parts: ["Milovice", "Benátecká Vrutice", "Boží Dar", "Mladá"],
    headline: "nové čtvrti, Mirakulum a divocí koně",
    intro: [
      "Milovice za posledních třicet let několikanásobně vyrostly. Z bývalého vojenského prostoru, který sovětská armáda opustila v roce 1991, se staly čtvrti plné mladých rodin, které ráno vezou děti do školy a pak spěchají na vlak linky S22 do Prahy. Pokud se v tom shonu zabouchnou klíče v autě u nádraží Milovice nebo před domem v Mladé, vůz otevřeme šetrně a bez poškození.",
      "O víkendech se Milovice plní výletníky. Rodiny parkují u zábavního parku Mirakulum, v Ostravské ulici u rezervace divokých koní, zubrů a praturů nebo u bývalého letiště během festivalu Votvírák. Klíč zapomenutý v kufru vedle kočárku, ovladač ztracený při procházce kolem pastvin nebo vybitá baterie po celém dni venku – s tím vším pomůžeme kdykoli, v Milovicích i v Benátecké Vrutici a Božím Daru."
    ],
    hotspots: [
      "Zábavní park Mirakulum",
      "Nádraží Milovice",
      "Přírodní rezervace Milovice",
      "Náměstí 30. června",
      "Tankodrom Milovice"
    ],
    tip: "K rezervaci velkých kopytníků se parkuje podél Ostravské ulice, asi 150 metrů od pastvin. Klíč si před procházkou po okružní stezce uložte do zapínací kapsy – ztracený klíč se ve vysoké trávě hledá jen těžko.",
    faq: {
      question: "Zabouchli jsme klíče v autě na parkovišti u Mirakula a uvnitř máme věci pro děti. Co teď?",
      answer: "Zavolejte nám – jezdíme nonstop, tedy i o víkendech a svátcích, kdy je u parku nejrušněji. Řekněte, ve které části parkoviště auto stojí, nebo pošlete polohu z telefonu. Vůz otevřeme, věci si vyndáte a můžete se vrátit do parku. Cenu znáte předem."
    }
  },
  {
    slug: "lysa-nad-labem",
    name: "Lysá nad Labem",
    locative: "v Lysé nad Labem",
    region: "nymburk",
    geo: [50.2015, 14.8329],
    parts: ["Lysá nad Labem", "Litol", "Byšičky", "Dvorce"],
    headline: "výstaviště, železniční křižovatka a zámecký park",
    intro: [
      "Během velkých výstav na výstavišti v Lysé nad Labem se zaplní parkoviště v areálu i náhradní plochy u jižního vstupu v Čapkově ulici a auta stojí v dlouhých řadách jedno vedle druhého. V takovém provozu se klíč snadno zaklapne v kufru spolu s nákupem z veletrhu nebo se vybije baterie ovladače. Vůz otevřeme přímo na místě, bez poškození a bez nutnosti odtahu.",
      "Lysá je také železniční křižovatkou, kde se sbíhají tratě od Prahy, Kolína i Milovic, a mnoho lidí tu ráno nechává auto na P+R u nádraží. Pomáháme rovněž na Husově náměstí, u zámku se zámeckým parkem, u dostihového závodiště v ulici Ke Karlovu i v Litoli, Byšičkách a ve Dvorcích. Otevíráme osobní auta, dodávky i vozy s bezklíčovým přístupem, a to i o víkendu nebo v noci."
    ],
    hotspots: [
      "Výstaviště Lysá nad Labem",
      "P+R u nádraží Lysá nad Labem",
      "Husovo náměstí",
      "Zámek a zámecký park",
      "Závodiště Lysá nad Labem"
    ],
    tip: "Při velkých výstavách si po zaparkování vyfoťte okolí auta nebo si uložte polohu do telefonu. Parkovací plochy u výstaviště se liší podle akce a s přesným místem vás technik najde i v zaplněném areálu.",
    faq: {
      question: "Zabouchl jsem klíče v autě na parkovišti výstaviště během výstavy. Musím čekat na konec akce?",
      answer: "Nemusíte. Otevíráme i v plném provozu výstavy, stačí nám přístup ke dveřím vozu. Řekněte, zda stojíte přímo v areálu, u jižního vstupu v Čapkově ulici, nebo u nádraží, a pošlete polohu z telefonu. Auto otevřeme na místě a cenu sdělíme předem."
    }
  },
  {
    slug: "kolin",
    name: "Kolín",
    locative: "v Kolíně",
    region: "kolin",
    geo: [50.0282, 15.2006],
    parts: [
      "Kolín",
      "Pražské Předměstí",
      "Kouřimské Předměstí",
      "Kutnohorské Předměstí",
      "Zálabí",
      "Štítarské Předměstí",
      "Šťáralka",
      "Sendražice",
      "Štítary",
      "Zibohlavy"
    ],
    headline: "Toyota, železniční uzel a Karlovo náměstí",
    intro: [
      "Kolín je průmyslovým centrem středního Polabí. V zóně Kolín-Ovčáry na severním okraji města se v automobilce Toyota pracuje na směny, kolínským nádražím projíždějí dálkové vlaky do Ostravy i příměstské vlaky do Prahy a hned vedle je autobusové nádraží. Pokud po noční směně nebo po návratu z vlaku nejde auto odemknout, přijedeme za vámi a otevřeme ho bez poškození.",
      "V centru se parkuje hlavně kolem Karlova náměstí s radnicí a kašnou, v krytých garážích OC Futurum a u Oblastní nemocnice Kolín v Žižkově ulici. Za Labem pomáháme na Zálabí a v Sendražicích, na jihozápadě města zase ve Štítarech a Zibohlavech. V létě vyjíždíme i ke Kmochovu ostrovu, kde se konají koncerty a festivaly. Poradíme si s vozy všech značek, s dodávkami i s auty s bezklíčovým startováním."
    ],
    hotspots: [
      "Karlovo náměstí",
      "Nádraží Kolín",
      "OC Futurum",
      "Oblastní nemocnice Kolín",
      "Kmochův ostrov",
      "Průmyslová zóna Kolín-Ovčáry"
    ],
    tip: "Kryté parkoviště OC Futurum je otevřené denně od 7 do 22 hodin. Pokud v něm večer zjistíte zabouchnuté klíče, volejte hned, ať se k autu dostaneme ještě před zavřením garáží.",
    faq: {
      question: "Po noční směně v zóně Kolín-Ovčáry nejde odemknout auto. Přijedete i tam?",
      answer: "Ano, jezdíme nonstop, takže i ve tři ráno po skončení směny. Pokud auto stojí na oploceném firemním parkovišti, domluvte s ostrahou vjezd nebo vstup pro technika. Cenu vám sdělíme předem."
    }
  },
  {
    slug: "kutna-hora",
    name: "Kutná Hora",
    locative: "v Kutné Hoře",
    region: "kutna-hora",
    geo: [49.9484, 15.2682],
    parts: [
      "Kutná Hora",
      "Sedlec",
      "Malín",
      "Kaňk",
      "Hlouška",
      "Karlov",
      "Šipší",
      "Vrchlice",
      "Žižkov",
      "Neškaredice",
      "Perštejnec",
      "Poličany"
    ],
    headline: "památky UNESCO, sedlecká kostnice a turistická parkoviště",
    intro: [
      "Do Kutné Hory míří za chrámem svaté Barbory, Vlašským dvorem a sedleckou kostnicí návštěvníci z celého světa. Auta stojí na parkovišti Kouřimská na okraji centra, v uličkách kolem Palackého náměstí i v Sedlci, kde se v sezóně plní ulice Vítězná, Zámecká a Starosedlecká. Klíče zamčené v autě uprostřed prohlídky dokážou zkazit celý výlet. Proto přijedeme a vůz otevřeme přímo tam, kde stojí – šetrně a bez poškození.",
      "Kutná Hora ale nežije jen turisty. Od hlavního nádraží v Sedlci se jezdí vlakem do práce, v areálu bývalého kláštera stojí tabáková továrna a ve Vojtěšské ulici sídlí Nemocnice Kutná Hora. Pomáháme i na Kaňku, v Malíně, na Karlově, na Žižkově nebo v Poličanech, ať jde o osobní auto, dodávku, nebo vůz s bezklíčovým přístupem, klidně i v noci."
    ],
    hotspots: [
      "Chrám svaté Barbory",
      "Kostnice Sedlec",
      "Parkoviště Kouřimská",
      "Palackého náměstí",
      "Kutná Hora hlavní nádraží",
      "Nemocnice Kutná Hora"
    ],
    tip: "Od chrámu svaté Barbory do Sedlce je to vzdušnou čarou přes dva kilometry. Při volání proto vždy uveďte, u které památky nebo ve které ulici auto stojí, ať technik nemíří do nesprávné části města.",
    faq: {
      question: "Klíče nám zůstaly v autě u sedlecké kostnice. Stačí vám vědět jen název památky?",
      answer: "Pro začátek ano, ale kolem kostnice a katedrály Nanebevzetí Panny Marie se parkuje v několika ulicích. Pošlete nám proto polohu z telefonu nebo název ulice. Technik pak zamíří rovnou k vozu a cenu vám řekneme předem."
    }
  },
  {
    slug: "caslav",
    name: "Čáslav",
    locative: "v Čáslavi",
    region: "kutna-hora",
    geo: [49.9110, 15.3898],
    parts: ["Čáslav-Staré Město", "Čáslav-Nové Město", "Filipov"],
    headline: "rozlehlé náměstí a křižovatka silnic I/38 a I/17",
    intro: [
      "Náměstí Jana Žižky z Trocnova v Čáslavi patří k největším v Česku a mnoho řidičů parkuje právě tady – u barokní radnice, v okolních ulicích nebo nedaleko Dusíkova divadla. Na tak velké ploše snadno odběhnete od auta na úřad či do obchodu a klíč přitom zůstane na sedadle. Zamčený vůz otevřeme přímo na místě, bez poškození dveří i zámku.",
      "Čáslaví prochází silnice I/38 mezi Kolínem a Havlíčkovým Brodem a začíná tu silnice I/17 na Chrudim, takže tu řada lidí zastaví jen cestou jinam. Pomáháme u nádraží, u Městské nemocnice v Jeníkovské ulici, v létě u koupaliště Vodranty i u Národního zemědělského muzea se sbírkou traktorů. Osobní auta i dodávky otevíráme ve dne i v noci, ve Starém i Novém Městě a také ve Filipově."
    ],
    hotspots: [
      "Náměstí Jana Žižky z Trocnova",
      "Nádraží Čáslav",
      "Městská nemocnice Čáslav",
      "Dusíkovo divadlo",
      "Koupaliště Vodranty",
      "Národní zemědělské muzeum Čáslav"
    ],
    tip: "Náměstí Jana Žižky z Trocnova má rozlohu kolem dvou hektarů, takže samotný název náměstí k nalezení auta nestačí. Řekněte nám, na které straně stojíte nebo co máte nejblíž, například radnici, a technik zamíří přímo k vozu.",
    faq: {
      question: "Jedu přes Čáslav po silnici I/38 a při zastávce se mi zabouchly klíče. Přijedete i mimo centrum?",
      answer: "Ano. Otevíráme auta na náměstí i na okrajích Čáslavi podél silnic I/38 a I/17, na parkovištích obchodů nebo u čerpacích stanic. Pošlete nám polohu z telefonu a technik přijede přímo k vozu. Cenu vám řekneme předem."
    }
  }
];
