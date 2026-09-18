import type { BrandPage } from "./types";

export const brandPagesA: BrandPage[] = [
  {
    slug: "skoda",
    name: "Škoda",
    models: ["Octavia", "Fabia", "Superb", "Rapid", "Kodiaq", "Karoq", "Felicia", "Yeti", "Kamiq", "Scala", "Roomster", "Enyaq"],
    headline: "Octavia, Fabia, Superb i systém KESSY",
    intro: [
      "Škoda je na českých silnicích zdaleka nejrozšířenější značkou, takže není divu, že se zabouchnuté klíče často týkají právě Octavie, Fabie nebo Superbu. Stačí klíč na chvíli odložený v kufru, vybitá baterie v ovladači nebo nepozornost při tankování. Otevíráme nonstop a bez poškození novou Škodu Octavia z Mladé Boleslavi stejně jako starší Rapid, Yeti nebo Felicii, které po Praze a okolí jezdí dodnes. Cenu vám sdělíme předem.",
      "U novějších modelů Škoda, jako jsou Kodiaq, Karoq, Kamiq nebo elektrický Enyaq, bývá často ve výbavě bezklíčový systém KESSY. Pohodlí má ale i stinnou stránku: klíč nosíte v kapse, a tak snadno zapomenete, kam jste ho při nakládání odložili. Vůz otevřeme tak, aby zámky, elektronika i lak zůstaly v původním stavu. Pokud jste klíč ztratili úplně, nový vám vyrobí autorizovaný servis Škoda.",
    ],
    lockTech: [
      {
        title: "KESSY a virtuální pedál",
        text: "KESSY (Keyless Entry, Start and exit SYstem) pozná klíč v kapse a odemkne vůz po uchopení kliky. Navazuje na něj virtuální pedál, který u Octavie, Superbu, Karoqu nebo Kamiqu otevře kufr pohybem nohy pod nárazníkem – ale jen tehdy, když je klíč v dosahu.",
      },
      {
        title: "Klíč s vyklápěcí i vysouvací planžetou",
        text: "Většina klíčů Škoda má planžetu, která se vyklopí stiskem tlačítka. U Superbu a Kodiaqu s KESSY se ale setkáte i s ovladačem bez vyklápění – nouzová planžeta je v něm zasunutá a po uvolnění pojistky ji vytáhnete.",
      },
      {
        title: "Skrytá vložka zámku",
        text: "Na dveřích řidiče novějších modelů klasický zámek na první pohled nevidíte. Vložka je schovaná pod plastovou krytkou na konci kliky, která má ve spodní části otvor pro planžetu klíče. Starší Fabie, Octavie nebo Felicie mají zámek na klice viditelný.",
      },
    ],
    emergencyTip: "Vyjměte z klíče nouzovou planžetu a na klice dveří řidiče najděte krytku zámku – ve spodní části má otvor, do kterého planžetu zasunete a krytku opatrně vypáčíte směrem nahoru. Pod ní je klasická vložka, kterou vůz odemknete. Pokud klíč nereaguje, vyměňte baterii v ovladači, případně zkuste náhradní klíč z domova.",
    situations: [
      "Klíč zůstal v kufru Octavie Combi po zavření víka",
      "Vybitá baterie v klíči KESSY, Kodiaq nereaguje na kliku",
      "Klíče zabouchnuté ve starší Fabii, Felicii nebo Rapidu",
      "Ztracený klíč od Superbu, náhradní zůstal doma",
    ],
    faq: [
      {
        question: "Otevřete Octavii s KESSY, když je klíč zamčený uvnitř?",
        answer: "Ano. Octavii i další modely Škoda s bezklíčovým systémem KESSY otevíráme nonstop a bez poškození zámků, těsnění či elektroniky. Klíč si pak jen vyzvednete z kabiny nebo z kufru a můžete pokračovat v cestě. Cenu vám sdělíme předem.",
      },
      {
        question: "Proč u zamčené Škody nefungují ani vnitřní kliky?",
        answer: "Jde o systém SAFE: po zamknutí vyřadí vnitřní kliky, takže zloději nepomůže ani rozbité okno – a vám by jen přidalo škodu. Sklo proto nerozbíjejte. Pokud je uvnitř dítě nebo zvíře a hrozí nebezpečí, volejte ihned 112, jinak vůz otevřeme bez poškození.",
      },
    ],
  },
  {
    slug: "volkswagen",
    name: "Volkswagen",
    aliases: ["VW"],
    models: ["Golf", "Passat", "Polo", "Tiguan", "Touran", "Caddy", "Sharan", "T-Roc", "Touareg", "Transporter", "up!", "ID.4"],
    headline: "od Golfu po Tiguan s Keyless Access",
    intro: [
      "Volkswagen patří v Česku k nejčastějším značkám – mezi novými auty i mezi ojetinami dovezenými ze zahraničí. Není proto divu, že se zabouchnuté klíče často týkají i majitelů Golfu, Passatu, Pola nebo Tiguanu. Otevíráme starší Passaty s vyklápěcím klíčem stejně jako nejnovější Passat, který se vyrábí v Bratislavě spolu se Škodou Superb – a u všech vozů VW bez poškození.",
      "Moderní Volkswageny s Keyless Access odemknete pouhým uchopením kliky, klíč přitom zůstává v kapse. Právě tohle pohodlí ale vede k typickým situacím: klíč odložený v kufru, ovladač s vybitou baterií nebo spěch, při kterém klíč zůstane na sedadle Touranu. Volkswagen otevřeme bez poškození zámků i laku, nonstop a za cenu, kterou znáte předem.",
    ],
    lockTech: [
      {
        title: "Keyless Access",
        text: "Systém Keyless Access odemyká po uchopení kliky a zamyká dotykem senzoru na klice. Pokud do několika sekund po odemčení neotevřete dveře ani víko kufru, vůz se sám znovu zamkne. Bezklíčové startování pak funguje jen s klíčem uvnitř vozu.",
      },
      {
        title: "Kufr se zamkne i s klíčem",
        text: "Podle návodu k obsluze se u vozů s Keyless Access víko zavazadlového prostoru po zavření automaticky zamkne – i když v kufru nebo na krytu zavazadel leží platný klíč. Proto se klíč v kufru Golfu nebo Passatu zamkne snadněji, než by člověk čekal.",
      },
      {
        title: "Safelock a krytka zámku",
        text: "Pojistka Safelock po zamknutí vyřadí vnitřní kliky, takže uvnitř nesmí nikdo zůstat. Vložka zámku dveří řidiče je u novějších modelů schovaná pod krytkou na klice, kterou lze sejmout planžetou klíče zasunutou zespodu do otvoru.",
      },
    ],
    emergencyTip: "Vyklopte planžetu z klíče, zasuňte ji zespodu do otvoru krytky na klice dveří řidiče a krytku nadzvedněte – pod ní je vložka zámku. Po mechanickém odemčení se při otevření dveří může rozeznít alarm, který ztichne, jakmile zapnete zapalování. Nefunguje-li ani to, zkuste náhradní klíč nebo novou baterii v ovladači.",
    situations: [
      "Klíč zůstal v kufru Golfu a víko se samo zamklo",
      "Vybitý ovladač Keyless Access, Tiguan nereaguje na kliku",
      "Zabouchnuté klíče ve starším Passatu nebo Touranu",
      "Klíč zamčený v Caddy nebo Sharanu při nakládání",
    ],
    faq: [
      {
        question: "Může se klíč zamknout v kufru Volkswagenu s Keyless Access?",
        answer: "Ano. Podle návodu k obsluze se víko zavazadlového prostoru po zavření automaticky zamkne, i když v kufru leží platný klíč. Nenechávejte proto klíč na krytu zavazadel. Pokud se to už stalo a náhradní klíč nemáte po ruce, otevřeme Volkswagen nonstop a bez poškození.",
      },
      {
        question: "Poškodí otevření Golfu nebo Passatu pojistku Safelock či alarm?",
        answer: "Ne. Otevíráme bez poškození zámků, klik, těsnění i elektroniky, takže pojistka Safelock, alarm i Keyless Access fungují dál stejně jako předtím. Cenu vám sdělíme ještě předtím, než se do otevírání pustíme.",
      },
    ],
  },
  {
    slug: "audi",
    name: "Audi",
    models: ["A4", "A6", "A3", "Q5", "Q7", "A5", "Q3", "A8", "A1", "Q2", "Q8", "Q4 e-tron"],
    headline: "od A4 Avant po Q7 s komfortním klíčem",
    intro: [
      "Audi A6 a A4 Avant jsou oblíbenými společníky lidí, kteří najezdí hodně kilometrů po dálnicích i po městě. Klíč zabouchnutý v kombi na dálničním odpočívadle nebo před kanceláří ale umí zkomplikovat den komukoli. Vozy Audi otevíráme nonstop a bez poškození, ať jde o starší A4 a A3, nebo o současné Q5 či Q7.",
      "Novější Audi mají často komfortní klíč, díky kterému stačí vzít za kliku a vůz se odemkne, u vybraných modelů lze jako klíč použít i telefon. Elektronika ale nepomůže, když se vybije baterie v ovladači nebo když klíč zůstane v zamčeném kufru Q5. Takový vůz otevřeme bez stop na laku a skle, klíč si vezmete a Audi funguje dál jako dřív. Cenu znáte předem.",
    ],
    lockTech: [
      {
        title: "Komfortní klíč (Advanced key)",
        text: "Komfortní klíč odemyká vůz po uchopení kliky a zamyká ho zvenku přímo na klice, bez vytahování klíče z kapsy. Ve spojení se senzorem pod zadním nárazníkem otevře víko kufru i pohybem nohy – ale jen tehdy, když systém klíč rozpozná.",
      },
      {
        title: "Audi connect key v telefonu",
        text: "U vybraných modelů, například u elektrických e-tronů, může jako klíč sloužit telefon. Přiložíte ho ke klice dveří řidiče s anténou NFC a pro nastartování ho položíte do přihrádky Audi phone box. Vybitý telefon ale znamená i nedostupný klíč.",
      },
      {
        title: "Mechanický klíč v ovladači",
        text: "V každém ovladači je ukrytý mechanický klíč, který se uvolní stiskem malého tlačítka. U většiny současných modelů je vložka zámku dveří řidiče schovaná pod krytkou na klice, u starších modelů bývá na klice přímo viditelná.",
      },
    ],
    emergencyTip: "Stiskněte uvolňovací tlačítko na ovladači a vytáhněte mechanický klíč. Na klice dveří řidiče hledejte vložku zámku – u novějších modelů je pod krytkou, kterou opatrně sejmete. Pokud používáte Audi connect key, nejdřív telefon dobijte, a když nepomůže nic z toho, zkuste náhradní klíč z domova.",
    situations: [
      "Klíč zůstal v kufru A6 Avant při nakládání zavazadel",
      "Vybitá baterie komfortního klíče, Q5 nereaguje na kliku",
      "Vybitý telefon s Audi connect key u e-tronu",
      "Zabouchnuté klíče ve starší A4 nebo A3",
    ],
    faq: [
      {
        question: "Otevřete Audi s komfortním klíčem, když klíč zůstal uvnitř?",
        answer: "Ano, a to bez poškození – elektronika, zámky ani senzory v klikách tím nijak netrpí. Po otevření si klíč jednoduše vezmete a komfortní klíč i všechny další funkce fungují jako dřív. Jezdíme nonstop každý den a cenu vám sdělíme předem.",
      },
      {
        question: "Co dělat, když se vybije telefon s Audi connect key?",
        answer: "Audi connect key komunikuje přes NFC, takže s úplně vybitým telefonem se vůz obvykle odemknout nedá. Zkuste telefon dobít nebo použít klasický ovladač, který k vozu patří. Pokud je ovladač doma nebo zamčený uvnitř, přijedeme a Audi otevřeme bez poškození, nonstop a za cenu sdělenou předem.",
      },
    ],
  },
  {
    slug: "seat",
    name: "Seat",
    aliases: ["Cupra"],
    models: ["Leon", "Ibiza", "Ateca", "Arona", "Toledo", "Alhambra", "Altea", "Tarraco", "Cupra Formentor", "Cupra Born"],
    headline: "Leon, Ibiza, Ateca i vozy Cupra",
    intro: [
      "Seat je technicky blízký Škodě a Volkswagenu, a tak Leon, Ibiza nebo Ateca používají podobné klíče a zámky jako jejich koncernoví sourozenci. Zajímavost na okraj: čtvrtá generace Seatu Toledo se v letech 2012–2019 vyráběla v Mladé Boleslavi spolu se Škodou Rapid. Ať máte zabouchnuté klíče v Toledu, Ibize nebo rodinné Alhambře, otevřeme vůz nonstop a bez poškození.",
      "Od roku 2018 je Cupra samostatnou značkou, přesto má s modely Seat mnoho společného. Formentor, elektrický Born nebo nový Leon mívají bezklíčový přístup, starší vozy klasický vyklápěcí klíč. Pro otevření na tom nezáleží – vůz otevřeme bez poškození zámků i laku, ať už je klíč zamčený v kabině, nebo v kufru. Kolik to bude stát, víte ještě před příjezdem technika.",
    ],
    lockTech: [
      {
        title: "Kessy – bezklíčový přístup",
        text: "Systém Kessy odemkne i zamkne vůz, aniž byste klíč vytahovali z kapsy, a motor nastartujete tlačítkem. U modelů Leon, Ateca nebo Formentor bývá součástí výbavy – a právě proto se klíč snadno zapomene v kabině nebo v kufru.",
      },
      {
        title: "Pojistka „Safe“",
        text: "Dvojité zamykání Safe po zamknutí vyřadí vnitřní kliky, takže dveře nejdou otevřít zevnitř. Pokud vůz zamknete dvakrát během dvou sekund, pojistka se nezapne a dveře lze zevnitř otevřít. Ve voze s aktivní pojistkou Safe nesmí nikdo zůstat.",
      },
      {
        title: "Nouzové startování u sloupku řízení",
        text: "Když se baterie v klíči Kessy vybije, vůz lze obvykle přesto nastartovat: klíč se přiloží k označenému místu na sloupku řízení a stiskne se tlačítko startu. Přesné místo ukazuje návod k obsluze vašeho modelu.",
      },
    ],
    emergencyTip: "Vyklopte nebo vysuňte z ovladače planžetu, zasuňte ji do drážky ve spodní hraně krytky na klice dveří řidiče a krytku opatrně vypáčte nahoru – pod ní je zámek, kterým vůz odemknete. Pokud klíč Kessy nereaguje kvůli vybité baterii, vyměňte ji, případně zkuste náhradní klíč z domova.",
    situations: [
      "Klíč Kessy zůstal v kufru Leonu ST po nákupu",
      "Zabouchnuté klíče v Ibize nebo starším Toledu",
      "Vybitá baterie v klíči, Cupra Formentor nereaguje",
      "Klíče zamčené v Alhambře při nakládání dětských věcí",
    ],
    faq: [
      {
        question: "Otevřete i vůz značky Cupra, třeba Formentor nebo Born?",
        answer: "Ano. Cupra je od roku 2018 samostatná značka, ale s vozy Seat má mnoho společného. Formentor, Born i Leon otevíráme nonstop a bez poškození, stejně jako starší modely Seat. Cenu vám sdělíme předem, ještě než se do otevírání pustíme.",
      },
      {
        question: "Mám Seat Toledo z Mladé Boleslavi – poradíte si s ním?",
        answer: "Samozřejmě. Toledo čtvrté generace (2012–2019) se vyrábělo v Mladé Boleslavi vedle Škody Rapid a technicky je jí velmi blízké. Otevřeme ho bez poškození stejně jako starší generace Toleda nebo další modely Seat. Cenu znáte ještě předtím, než začneme.",
      },
    ],
  },
  {
    slug: "bmw",
    name: "BMW",
    models: ["řada 3", "řada 5", "X5", "X3", "řada 1", "X1", "řada 7", "X6", "řada 2", "X4", "řada 4"],
    headline: "trojky, pětky, X5 i Komfortní přístup",
    intro: [
      "BMW patří u nás k nejčastěji dováženým značkám ojetých aut a řadu 3, řadu 5 nebo X5 potkáte v Praze na každém kroku. Zabouchnutý klíč v trojce umí zkomplikovat den stejně jako u kteréhokoli jiného vozu, jen nikdo nechce riskovat škrábanec na drahém laku. BMW proto otevíráme bez poškození, nonstop a u starších generací E90 a F30 stejně jako u současných modelů.",
      "Novější modely BMW nabízejí Komfortní přístup, díky kterému se vůz odemkne už při uchopení kliky, a také BMW Digital Key, který z telefonu nebo karty udělá klíč. Čím víc způsobů odemčení, tím víc situací, kdy se něco pokazí: vybitý ovladač, telefon bez baterie nebo klíč zapomenutý v kufru X3. Pomůžeme i majitelům X1 nebo řady 1 a cenu jim sdělíme předem.",
    ],
    lockTech: [
      {
        title: "Komfortní přístup",
        text: "S Komfortním přístupem stačí mít klíč u sebe – vůz se odemkne uchopením kliky a zamkne dotykem na klice. Systém ale klíč rozpozná jen v blízkosti vozu, a když se v ovladači vybije baterie, přestane ho vidět a vůz se neodemkne.",
      },
      {
        title: "BMW Digital Key a Key Card",
        text: "U novějších modelů může klíč nahradit telefon s BMW Digital Key nebo karta Key Card, které se přikládají ke klice dveří řidiče. Verze Digital Key Plus s technologií UWB odemyká u modelů s iDrive 8 i bez vytažení telefonu z kapsy.",
      },
      {
        title: "Integrovaný klíč a skrytý zámek",
        text: "V ovladači je schovaný integrovaný klíč, který se uvolní tlačítkem a vytáhne. Vložka zámku dveří řidiče je u novějších modelů pod krytkou na klice – u řady 3 G20 stačí kliku přitáhnout a krytku zezadu vytlačit prstem.",
      },
    ],
    emergencyTip: "Stiskněte tlačítko na ovladači a vytáhněte integrovaný klíč, pak přitáhněte kliku dveří řidiče, sejměte krytku vložky a odemkněte – po otevření dveří se může rozeznít alarm. Když vůz kvůli vybité baterii v klíči nechce nastartovat, přiložte ovladač k místu, které návod označuje pro nouzové rozpoznání klíče (u řady modelů je na sloupku řízení).",
    situations: [
      "Klíč s Komfortním přístupem zůstal v kufru X5",
      "Vybitý ovladač, řada 3 nereaguje na uchopení kliky",
      "Telefon s BMW Digital Key se vybil",
      "Klíče zabouchnuté ve starší pětce E60 nebo F10",
    ],
    faq: [
      {
        question: "Otevřete BMW s Komfortním přístupem bez poškození?",
        answer: "Ano. BMW s Komfortním přístupem i starší modely s klasickým ovladačem otevíráme tak, aby zámky, kliky se senzory, těsnění i lak zůstaly nepoškozené. Po otevření si klíč jen vezmete a všechno funguje jako dřív. Pracujeme nonstop a cenu vám sdělíme předem.",
      },
      {
        question: "Vybil se mi telefon s BMW Digital Key. Co mám dělat?",
        answer: "Pokud máte kartu Key Card, přiložte ji ke klice dveří řidiče – funguje nezávisle na telefonu. Pomoci může i klasický ovladač nebo náhradní klíč z domova. Když nic z toho není po ruce, přijedeme nonstop a BMW otevřeme bez poškození.",
      },
    ],
  },
  {
    slug: "mercedes-benz",
    name: "Mercedes-Benz",
    models: ["třída C", "třída E", "GLC", "třída A", "třída B", "GLE", "ML", "třída S", "CLA", "GLA", "Sprinter", "třída V"],
    headline: "třída C, E, GLC i KEYLESS-GO",
    intro: [
      "Mercedes-Benz patří u nás k pětici nejčastěji dovážených značek ojetých aut a typickými zástupci na silnicích jsou třída C, třída E a SUV GLC. Nechybí ani menší třída A či B nebo starší ML. Když klíč zůstane v zamčeném Mercedesu, otevřeme ho nonstop a bez poškození – bez rozbitého skla i škrábanců – a cenu vám sdělíme předem.",
      "Řada novějších Mercedesů má systém KEYLESS-GO a nejnovější modely umí používat i digitální klíč v telefonu. Díky tomu se ale klíč snadno zapomene v tašce v kufru a vybitá baterie v ovladači dokáže zablokovat přístup k vozu. Mercedes otevřeme tak, aby zámky, kliky i lak zůstaly netknuté, ať máte starší třídu C, nebo novou třídu E s výsuvnými klikami.",
    ],
    lockTech: [
      {
        title: "Systém KEYLESS-GO",
        text: "KEYLESS-GO odemkne vůz uchopením kliky a nastartuje tlačítkem, aniž byste klíč vytahovali. Funkci lze na klíči vypnout dvojím rychlým stiskem tlačítka zamknutí – vůz pak na kliku nereaguje, dokud znovu nestisknete tlačítko na ovladači.",
      },
      {
        title: "Nouzový klíč a krytka zámku",
        text: "V každém klíči je zasunutý nouzový klíč – vytáhnete ho, když posunete pojistku a klíč současně vysunete. Vložka zámku dveří řidiče je schovaná pod krytkou, kterou u modelů jako GLC sejmete při přitažené klice.",
      },
      {
        title: "Výsuvné kliky novějších modelů",
        text: "Nová třída E a další novější modely mají kliky zapuštěné do dveří, které se vysunou až po odemčení. Pro nouzové odemčení mají v návodu k obsluze vlastní postup, proto se vyplatí ho znát dřív, než se baterie v klíči vybije.",
      },
    ],
    emergencyTip: "Posuňte pojistku na klíči a vytáhněte nouzový klíč. Zasuňte ho do otvoru v krytce zámku na klice dveří řidiče, přitáhněte kliku a krytku stáhněte – pod ní je vložka zámku. Pokud KEYLESS-GO nereaguje, zkuste nejdřív stisknout tlačítko na ovladači nebo vyměnit baterii, případně použijte náhradní klíč.",
    situations: [
      "Klíč s KEYLESS-GO zůstal v kufru třídy E kombi",
      "Vybitá baterie v klíči, třída C nereaguje na kliku",
      "Výsuvné kliky se nevysunou a klíč nefunguje",
      "Klíče zabouchnuté ve starší třídě A nebo B",
    ],
    faq: [
      {
        question: "Proč Mercedes s KEYLESS-GO nereaguje na uchopení kliky?",
        answer: "Často jde o vybitou baterii v klíči, nebo o vypnutou funkci KEYLESS-GO – ta se vypne dvojím rychlým stiskem tlačítka zamknutí. Zkuste stisknout tlačítko odemknutí na ovladači nebo použít nouzový klíč. Pokud nepomůže nic, Mercedes otevřeme nonstop a bez poškození.",
      },
      {
        question: "Kde seženu nový klíč k Mercedesu, když ten původní ztratím?",
        answer: "U novějších Mercedesů se náhradní klíč objednává přes autorizovaný servis Mercedes-Benz na základě VIN a dokladů k vozu. My klíče nevyrábíme – pokud se ale potřebujete dostat do zamčeného auta třeba pro doklady nebo náhradní klíč, otevřeme ho bez poškození.",
      },
    ],
  },
  {
    slug: "opel",
    name: "Opel",
    models: ["Astra", "Corsa", "Insignia", "Zafira", "Vectra", "Meriva", "Mokka", "Grandland", "Crossland", "Combo", "Signum"],
    headline: "Astra, Corsa, Insignia i Keyless Open & Start",
    intro: [
      "Opel Astra patřila dlouhá léta k nejrozšířenějším autům v Česku a spolu s Corsou, Insignií nebo Zafirou ji potkáte na každém kroku. Majitelé starších Opelů znají typický klíč s výklopnou čepelí, novější modely mají elektronický klíč pro bezklíčový přístup. Ať se vám klíče zabouchly v deset let staré Astře, nebo v novém Grandlandu, otevřeme vůz nonstop a bez poškození.",
      "Od roku 2017 patří Opel do skupiny PSA, dnes Stellantis, a nové Astry a Corsy sdílejí techniku s Peugeoty. Bezklíčový systém Keyless Open & Start pozná klíč v kapse a některé modely se po odchodu umí samy zamknout – dokonce i tehdy, když uvnitř zůstal druhý klíč. Opel otevřeme bez škod na zámcích, laku i elektronice a cenu vám řekneme předem.",
    ],
    lockTech: [
      {
        title: "Keyless Open & Start",
        text: "Elektronický klíč stačí mít u sebe v okruhu zhruba jednoho metru od dveří. U Insignie se vůz odemyká i zamyká tlačítkem na vnější klice a zadní výklopné dveře otevřete tlačítkem pod znakem značky.",
      },
      {
        title: "Pasivní zamykání",
        text: "Pokud je funkce zapnutá, vůz se po zavření dveří za pár sekund sám zamkne. Když ve voze byly dva klíče, zamkne se, i když odnesete jen jeden. Návod proto doporučuje funkci vypnout při tankování nebo když uvnitř zůstávají cestující.",
      },
      {
        title: "Čepel klíče a krytka vložky",
        text: "Čepel se z elektronického klíče vytáhne po stisku tlačítka na jeho zadní straně. Válcová vložka zámku ve dveřích řidiče je zakrytá krytkou – čepel se zasune do prohlubně v její spodní části a krytka se natočením sejme.",
      },
    ],
    emergencyTip: "Stiskněte tlačítko na zadní straně elektronického klíče a vytáhněte čepel, zasuňte ji do prohlubně ve spodní části krytky na klice dveří řidiče, krytku sejměte a vůz odemkněte ve vložce zámku – ochrana proti odcizení se vypne po zapnutí zapalování. U starších Opelů stačí vyklopit čepel tlačítkem a odemknout přímo zámek na klice.",
    situations: [
      "Insignia se sama zamkla s druhým klíčem uvnitř",
      "Klíč zapomenutý v kufru Astry Sports Tourer",
      "Zabouchnuté klíče ve starší Corse nebo Zafiře",
      "Vybitý elektronický klíč, Grandland nereaguje na kliku",
    ],
    faq: [
      {
        question: "Proč se můj Opel zamkl, když byl uvnitř druhý klíč?",
        answer: "Za to může pasivní zamykání. Podle návodu k obsluze se vůz zamkne, pokud byly uvnitř dva nebo více elektronických klíčů a vy jeden odnesete – druhý pak zůstane v zamčeném autě. Funkci lze vypnout v nastavení vozidla. Pokud se to už stalo, otevřeme Opel bez poškození.",
      },
      {
        question: "Otevřete i novou Astru nebo Corsu ze skupiny Stellantis?",
        answer: "Ano. Současná Astra je technicky příbuzná s Peugeotem 308 a Corsa s Peugeotem 208. Novější i starší Opely – třeba Astry, Vectry nebo Zafiry – otevíráme nonstop, bez poškození a za cenu sdělenou předem.",
      },
    ],
  },
  {
    slug: "volvo",
    name: "Volvo",
    models: ["XC60", "XC90", "V60", "V90", "V70", "V40", "XC40", "S60", "S80", "XC70", "V50", "EX30"],
    headline: "od kombi V70 po SUV XC90",
    intro: [
      "Volvo si v Česku oblíbili hlavně řidiči, kteří chtějí prostorné a bezpečné kombi nebo SUV. Typicky jde o XC60, XC90 a kombi V60 či V90, po silnicích ale stále jezdí i spousta starších V70, S80 nebo V40. Když se klíč zamkne ve Volvu, otevřeme vůz nonstop, bez poškození a za cenu, kterou znáte předem.",
      "Novější modely Volvo mají zamykání a odemykání bez klíče Passive Entry, odnímatelnou čepel v dálkovém klíči a k některým se dodává i malý voděodolný Key Tag bez tlačítek. Systém je chytrý, ale má svá úskalí – například zámek dveří řidiče u současných SUV Volvo na první pohled vůbec nenajdete. Takové situace vyřešíme bez škrábanců a bez rozbitého skla.",
    ],
    lockTech: [
      {
        title: "Passive Entry a opětovné zamknutí",
        text: "S Passive Entry se vůz odemkne uchopením kliky a zamkne dotykem na klice, klíč stačí mít v kapse. Pokud vůz odemknete a do dvou minut neotevřete žádné dveře, automaticky se znovu zamkne, aby nezůstal omylem otevřený.",
      },
      {
        title: "Zámek ukrytý za klikou",
        text: "U XC90 nebo XC60 současné generace není vložka zámku na první pohled vidět. Objeví se až po vytažení kliky dveří řidiče do krajní polohy – teprve pak do ní zasunete odnímatelnou čepel z dálkového klíče.",
      },
      {
        title: "Key Tag bez tlačítek",
        text: "K vozům s Passive Entry se dodává i menší voděodolný Key Tag. Nemá tlačítka ani odnímatelnou čepel, takže s ním zámek dveří mechanicky neodemknete, a baterii v něm nelze vyměnit – po jejím vybití je potřeba nový klíč od autorizovaného prodejce.",
      },
    ],
    emergencyTip: "Vyjměte z dálkového klíče odnímatelnou čepel, vytáhněte kliku dveří řidiče do krajní polohy a odemkněte odkrytý zámek. U současných modelů pak položte dálkový klíč do záložní čtečky v tunelové konzoli – alarm se vypne a vůz nastartujete. Pomůže i výměna baterie v klíči nebo náhradní klíč z domova.",
    situations: [
      "Volvo zamčené s otevřeným kufrem, klíč zůstal v zavazadlech",
      "Key Tag zapomenutý v kabině XC60 po zamčení",
      "Vybitá baterie v klíči, V60 nereaguje na kliku",
      "Klíče zabouchnuté ve starším V70 nebo S80",
    ],
    faq: [
      {
        question: "Proč se Volvo zamklo i s klíčem v kufru?",
        answer: "Pokud vůz zamknete ve chvíli, kdy jsou dveře zavazadlového prostoru otevřené, zamknou se po zavření také. Když při tom klíč zůstane uvnitř, je celé Volvo zamčené – na to upozorňuje i návod k obsluze. Pokud nemáte náhradní klíč, otevřeme vůz nonstop a bez poškození.",
      },
      {
        question: "Zamkl jsem Volvo druhým klíčem a Key Tag zůstal uvnitř. Vadí to?",
        answer: "Podle Volva se klíč nebo Key Tag ponechaný ve voze po zamčení druhým klíčem a zapnutí alarmu deaktivuje, takže auto zůstane zabezpečené. K vozu se pak dostanete jen klíčem, který máte u sebe. Pokud ho nemáte, otevřeme Volvo bez poškození.",
      },
    ],
  },
  {
    slug: "peugeot",
    name: "Peugeot",
    models: ["308", "208", "3008", "206", "207", "307", "2008", "5008", "508", "Partner", "107", "108"],
    headline: "od 107 z Kolína po 3008",
    intro: [
      "Peugeot má k Česku blízko: malé modely 107 a 108 se vyráběly v Kolíně a dodnes jsou běžnými městskými auty. Na silnicích ale potkáte i spoustu Peugeotů 308, 208, 206 nebo SUV 3008. Když se vám klíč zabouchne v kterémkoli z nich, otevřeme auto nonstop a bez poškození, ať máte klasický ovladač, nebo elektronický klíč.",
      "Novější modely Peugeot nabízejí systém Přístup a startování bez klíče: vůz se odemkne, když vsunete ruku za kliku, a nastartuje se tlačítkem. Méně známé je, že po 21 dnech bez použití přejde bezklíčová funkce do úsporného režimu, takže vůz po dovolené najednou nereaguje. Peugeot otevřeme bez poškození zámků i laku, ať jde o starší 206, nebo nejnovější 2008, a cenu vám sdělíme předem.",
    ],
    lockTech: [
      {
        title: "Přístup a startování bez klíče",
        text: "Stačí mít elektronický klíč u sebe: vůz se odemkne, když vsunete ruku za kliku předních dveří, a zamkne se stiskem kliky v označeném místě. Pokud ve voze zůstane některý z elektronických klíčů, systém vůz nezamkne.",
      },
      {
        title: "Úsporný režim po 21 dnech",
        text: "Aby šetřil baterii klíče i vozu, přejde bezklíčový přístup po 21 dnech bez použití do hibernace. Funkci obnovíte stiskem libovolného tlačítka na dálkovém ovladači nebo nastartováním s klíčem přiloženým ke čtečce.",
      },
      {
        title: "Dvojité a automatické zamknutí",
        text: "Druhým zamknutím do pěti sekund se aktivuje dvojité zamykání, které vyřadí vnitřní kliky i tlačítko centrálního zamykání. Když vůz odemknete a zhruba do 30 sekund neotevřete dveře ani kufr, sám se znovu zamkne.",
      },
    ],
    emergencyTip: "Klasický klíč je schovaný v dálkovém ovladači – u verzí bez bezklíčového přístupu se vyklopí tlačítkem, z elektronického klíče ho vysunete zatažením a přidržením tlačítka. Odemkněte jím zámek dveří řidiče. Při vybité baterii v klíči ho u 3008 přiložte k záložní čtečce na sloupku řízení a nastartujte tlačítkem START/STOP.",
    situations: [
      "Bezklíčový přístup po dovolené nereaguje a 3008 zůstal zamčený",
      "Klíč zapomenutý v kufru 308 SW",
      "Zabouchnuté klíče v městském Peugeotu 107 nebo 108",
      "Vybitý ovladač u starší 206 nebo 207",
    ],
    faq: [
      {
        question: "Proč Peugeot po delším stání nereaguje na bezklíčové odemykání?",
        answer: "Po 21 dnech bez použití přejdou funkce hands-free do úsporného režimu. Obnovíte je stiskem libovolného tlačítka na dálkovém ovladači. Pokud nepomůže ani to, zkuste integrovaný klíč nebo výměnu baterie. Když se do vozu nedostanete, otevřeme Peugeot nonstop a bez poškození.",
      },
      {
        question: "Otevřete i Peugeot 107 nebo 108 z kolínské továrny?",
        answer: "Ano. Malé Peugeoty 107 a 108 se vyráběly v Kolíně spolu s Citroënem C1 a Toyotou Aygo. Otevřeme je bez poškození stejně jako větší modely 308 nebo 3008, nonstop a za cenu, kterou vám sdělíme předem.",
      },
    ],
  },
  {
    slug: "citroen",
    name: "Citroën",
    models: ["C4", "C3", "Berlingo", "C5", "Xsara Picasso", "C4 Picasso", "C1", "C5 Aircross", "C3 Aircross", "C4 Cactus", "C8", "Xsara"],
    headline: "Berlingo, C4 Picasso i superzamykání",
    intro: [
      "Citroën je známý důrazem na pohodlí a praktičnost a jeho nejznámějšími modely u nás jsou rodinná auta: Berlingo, C4 Picasso, Xsara Picasso nebo C5 Aircross. Právě v nich se klíče snadno zamknou při nakládání kočárku, nákupu nebo sportovní výbavy. Když se vám to stane, otevřeme Citroën nonstop a bez poškození, ať je klíč v kabině, nebo v kufru.",
      "Mezi menšími vozy je běžný C3 a také Citroën C1, který se dlouhá léta vyráběl v Kolíně. Novější Citroëny mohou mít systém Odemykání a startování bez klíče, ostatní verze vyklápěcí klíč a starší modely superzamykání, které po dvojím zamknutí vyřadí vnitřní kliky. Ať máte kterýkoli z nich, cenu vám řekneme předem a vůz otevřeme bez škrábanců.",
    ],
    lockTech: [
      {
        title: "Odemykání a startování bez klíče",
        text: "S elektronickým klíčem v kapse se vůz odemkne rukou za klikou předních dveří nebo tlačítkem u zadních výklopných dveří. Klíč je zároveň dálkovým ovladačem a mechanickou čepel v něm vysunete posunutím a přidržením tlačítka.",
      },
      {
        title: "Superzamykání u starších modelů",
        text: "U starších modelů, jako jsou C4, C5 nebo C8, se druhým stiskem zamykacího tlačítka aktivuje superzamykání, novější vozy znají totéž jako dvojité zamykání. Vnitřní kliky pak nefungují, proto ve voze nesmí nikdo zůstat.",
      },
      {
        title: "Berlingo a zadní dveře",
        text: "Když současné Berlingo zamknete i odemknete mechanicky klíčem, odemknou se jen přední a boční posuvné dveře. Křídlové nebo výklopné zadní dveře zůstanou zamčené, dokud nezapnete zapalování.",
      },
    ],
    emergencyTip: "Vyklopte čepel klíče tlačítkem, u elektronického klíče ji vysuňte posunutím a přidržením tlačítka, a odemkněte zámek dveří řidiče. Pokud má vůz alarm, po otevření dveří se rozezní siréna – vypnete ji zapnutím zapalování. Když se do auta nedostanete ani tak, zkuste náhradní klíč nebo novou baterii v ovladači.",
    situations: [
      "Klíč zamčený v kufru Berlinga při nakládání kočárku",
      "Zabouchnuté klíče v Xsaře Picasso nebo C4 Picasso",
      "Vybitý elektronický klíč, C5 Aircross nereaguje na kliku",
      "Klíče zapomenuté v malém C1 nebo C3",
    ],
    faq: [
      {
        question: "Co je superzamykání u Citroënu a proč nejdou dveře otevřít zevnitř?",
        answer: "Superzamykání, u novějších modelů nazývané dvojité zamykání, se zapne druhým stiskem tlačítka zamknutí. Vyřadí vnitřní kliky i tlačítko centrálního zamykání, aby vůz nešel otevřít ani přes rozbité okno. Odemknete ho ovladačem nebo klíčem; pokud nemáte ani jedno, otevřeme Citroën bez poškození.",
      },
      {
        question: "Otevřete Berlingo, když jsou klíče zamčené v zavazadlovém prostoru?",
        answer: "Ano. Berlingo otevřeme bez poškození, ať máte verzi s výklopnými, nebo s křídlovými zadními dveřmi. Klíč si pak vyndáte a vůz funguje jako dřív. Pracujeme nonstop a cenu otevření vám sdělíme předem.",
      },
    ],
  },
];
