import type { BrandPage } from "./types";

export const brandPagesB: BrandPage[] = [
  {
    slug: "renault",
    name: "Renault",
    aliases: ["Renault Master"],
    models: ["Mégane", "Clio", "Captur", "Scénic", "Kangoo", "Laguna", "Thalia", "Kadjar", "Austral", "Arkana", "Trafic", "Master"],
    headline: "Mégane, Clio, Captur i hands-free karta",
    intro: [
      "Renault jako jedna z prvních automobilek nahradil klasický klíč kartou – poprvé ji v roce 2001 dostala Laguna II a postupně se rozšířila na Mégane, Scénic i Clio. Kartu mají i dnešní Captury, Kadjary nebo Australy. Je plochá a lehká, takže snadno zůstane v kapse bundy odložené na zadním sedadle, zapadne do kufru mezi nákup nebo se v peněžence nenápadně zlomí.",
      "U starších Renaultů, například Mégane II a III, Laguny nebo Scénicu, se karta zasouvá do štěrbiny v palubní desce. Novější Clio, Captur či Arkana se s kartou handsfree odemknou už při přiblížení. Osobní auto otevřeme stejně jako dodávku Trafic nebo Master – nonstop v Praze a okolí, bez poškození zámků, těsnění i laku a za cenu, kterou vám řekneme ještě před výjezdem."
    ],
    lockTech: [
      {
        title: "Karta Renault a režim handsfree",
        text: "Karta funguje jako dálkový ovladač, verze handsfree navíc odemyká při přiblížení a zamyká po odchodu z dosahu. Pokud vůz osm dní nikdo nepoužije, bezklíčové odemykání se vypne a vůz je potřeba odemknout tlačítkem na kartě."
      },
      {
        title: "Nouzový klíč ukrytý v kartě",
        text: "V těle karty je zasunutý malý kovový klíč, který se vysune po posunutí zadní části pouzdra. Slouží jen k odemčení a zamčení dveří řidiče ve chvíli, kdy karta nereaguje – například kvůli vybité baterii."
      },
      {
        title: "Zámek schovaný pod krytkou",
        text: "Vložka zámku na dveřích řidiče není na první pohled vidět, kryje ji plastová krytka na klice. Tu je nutné nejdřív opatrně sejmout, teprve pak lze použít nouzový klíč. Po použití se krytka jen lehce zacvakne zpět."
      }
    ],
    emergencyTip: "Vysuňte z karty nouzový klíč, sejměte krytku na klice dveří řidiče a zkuste dveře odemknout ručně. Pokud palubní deska dříve hlásila slabou baterii karty, vyměňte plochý článek CR2032 – vydrží zhruba dva roky – a zkontrolujte, zda doma nemáte druhou kartu.",
    situations: [
      "Karta zůstala v kabině a vůz zamkla druhá karta",
      "Vybitá karta handsfree a nouzový klíček chybí",
      "Zlomená nebo ztracená karta u Mégane či Scénicu",
      "Zabouchnuté klíče od dodávky Trafic nebo Master"
    ],
    faq: [
      {
        question: "Otevřete Renault, když karta handsfree zůstala zamčená uvnitř?",
        answer: "Ano, karta zamčená v kabině patří u Renaultu k typickým případům. Vůz otevřeme, kartu si pak jednoduše vezmete zevnitř a funguje dál stejně jako předtím."
      },
      {
        question: "Co dělat, když se karta Renault zlomí nebo ztratí?",
        answer: "Novou kartu musí vyrobit a spárovat s vozem autorizovaný servis nebo specializovaná firma – výrobu ani programování karet neděláme. Pokud se ale potřebujete dostat do zamčeného auta kvůli dokladům, druhé kartě nebo věcem uvnitř, otevřeme ho a vše potřebné si vyzvednete."
      }
    ]
  },
  {
    slug: "dacia",
    name: "Dacia",
    models: ["Duster", "Sandero", "Sandero Stepway", "Logan", "Logan MCV", "Jogger", "Dokker", "Lodgy", "Spring", "Bigster"],
    headline: "Duster, Sandero i Logan s klíčem nebo kartou",
    intro: [
      "Dacia se díky Dusteru a Sanderu stala v Česku velmi oblíbenou značkou – jezdí s ní rodiny, řemeslníci i firmy. Většina vozů Dacia, od Loganu přes Sandero a Dokker až po starší Duster, má klíč s dálkovým ovladačem, často vyklápěcí. Lépe vybavené verze novějšího Dusteru nebo Sandera Stepway dostávají kartu handsfree, kterou značka sdílí s Renaultem.",
      "Klasický klíč i karta mají jedno společné: když zůstanou v zamčeném autě a druhý klíč je doma, dovnitř se sami nedostanete. Stává se to při nakládání kufru, na čerpací stanici nebo když děti v kabině omylem stisknou tlačítko zamčení. Poradíme si s Joggerem, elektrickým Springem i novým Bigsterem – v Praze a okolí ve dne i v noci, beze stop na voze a za cenu, kterou znáte předem."
    ],
    lockTech: [
      {
        title: "Vyklápěcí klíč s ovladačem",
        text: "Většina vozů Sandero, Logan, Dokker i Duster jezdí s ovladačem, z něhož se po stisku tlačítka vyklopí kovový klíč. Odemyká zámek ve dveřích řidiče a slouží i k zapalování, takže bez něj vůz nenastartujete."
      },
      {
        title: "Karta handsfree jako u Renaultu",
        text: "Lépe vybavené novější modely mají kartu handsfree stejné koncepce jako Renault. Auto se odemkne při přiblížení a po odchodu z dosahu se samo zamkne. I se slabou baterií karty jde vůz podle příručky dál odemknout a nastartovat."
      },
      {
        title: "Automatické opětovné zamčení",
        text: "Když vůz odemknete dálkovým ovladačem a zhruba do jedné až dvou minut – podle modelu – neotevřete žádné dveře, centrální zamykání ho samo znovu zamkne. Chrání to před nechtěně odemčeným autem, ale majitele to občas zaskočí."
      }
    ],
    emergencyTip: "U klasického ovladače vyklopte klíč a zkuste odemknout dveře řidiče přímo v zámku. Když ovladač ani karta nereagují, bývá na vině vybitá baterie – její výměna nebo druhý klíč z domova problém často vyřeší.",
    situations: [
      "Klíče zabouchnuté v Sanderu nebo Loganu při tankování",
      "Vybitý ovladač a zamrzlý zámek dveří řidiče",
      "Karta handsfree zůstala v kabině nového Dusteru",
      "Klíče zamčené v Dokkeru při nakládání nářadí"
    ],
    faq: [
      {
        question: "Proč se můj Duster po odemčení sám zase zamkl?",
        answer: "Jde o automatické opětovné zamčení: když po odemčení dálkovým ovladačem neotevřete žádné dveře, Dacia se podle modelu zhruba po jedné až dvou minutách znovu zamkne. Pokud máte klíč u sebe, stačí odemknout znovu. Když ale zůstal uvnitř, přijedeme a vůz otevřeme."
      },
      {
        question: "Otevřete i Dacii Logan nebo Sandero první generace?",
        answer: "Ano, otevíráme Dacie všech generací – od prvních Loganů a Sanderů až po nový Duster a Bigster. Starší vozy mají klasický klíč, novější často kartu handsfree, na otevření to ale nic nemění."
      }
    ]
  },
  {
    slug: "ford",
    name: "Ford",
    aliases: ["Ford Transit"],
    models: ["Focus", "Mondeo", "Fiesta", "Kuga", "C-Max", "S-Max", "Galaxy", "Fusion", "Puma", "Transit", "Transit Custom", "Ranger"],
    headline: "Focus, Mondeo, Kuga i systém KeyFree",
    intro: [
      "Ford Focus a Mondeo patří v Česku k nejrozšířenějším ojetinám. Starší Focusy druhé a třetí generace s vyklápěcím klíčem potkáte téměř v každé ulici, stejně jako Mondea kombi nebo rodinné C-Max a Galaxy. Potíže u nich obvykle začínají klíčem zapomenutým v kufru, vybitým ovladačem nebo zámkem dveří řidiče, který po letech přestal spolehlivě fungovat.",
      "Novější Focus, Kuga, Mondeo, S-Max nebo Puma mohou mít bezklíčový systém Ford KeyFree s tlačítkem startování a nouzovým klíčem ukrytým v ovladači. U dodávek Transit a Transit Custom zase stačí chvilka nepozornosti při nakládání. K osobnímu i užitkovému vozu přijedeme po Praze a okolí nonstop, vůz otevřeme bez poškození a cenu vám řekneme předem."
    ],
    lockTech: [
      {
        title: "Ford KeyFree a tlačítko startu",
        text: "Bezklíčový systém KeyFree pozná ovladač v kapse, dveře odemkne po uchopení kliky a motor nastartujete tlačítkem. Z ovladače lze po posunutí pojistky na zadní straně vytáhnout nouzový klíč pro dveře řidiče, když systém nebo baterie selže."
      },
      {
        title: "Dvojité zamčení",
        text: "Dvojím stiskem tlačítka zamčení do tří sekund se aktivuje dvojité zamčení, při kterém nejdou dveře otevřít ani vnitřní klikou. Proto se nesmí použít, když je ve voze dítě nebo zvíře – zevnitř by se dveře neodemkly."
      },
      {
        title: "Opětovné zamčení po 45 sekundách",
        text: "Například u Focusu třetí generace se vůz sám znovu zamkne, pokud do 45 sekund po odemčení ovladačem neotevřete dveře ani víko kufru a nezapnete zapalování. Funkce chrání před nechtěně odemčeným autem na parkovišti."
      }
    ],
    emergencyTip: "U klíče KeyFree posuňte pojistku na zadní straně ovladače, vytáhněte nouzový klíč a odemkněte jím dveře řidiče – u novějších modelů bývá zámek nenápadně ukrytý v klice, přesné místo najdete v příručce. Pokud ovladač nereaguje, zkuste s ním pohnout, vyměnit baterii nebo sehnat druhý klíč z domova.",
    situations: [
      "Klíč zamčený v kufru staršího Focusu kombi",
      "Klíč KeyFree zapomenutý v kabině Kugy nebo Mondea",
      "Vybitý ovladač a nefunkční zámek dveří řidiče",
      "Klíče zabouchnuté v dodávce Transit při nakládání"
    ],
    faq: [
      {
        question: "Proč u Fordu nejdou dveře otevřít ani zevnitř?",
        answer: "Nejspíš je aktivní dvojité zamčení, které se zapne dvojím stiskem tlačítka zamčení do tří sekund a vyřadí vnitřní kliky. Zrušíte ho odemčením ovladačem. Když je ve voze dítě nebo zvíře, nikdy ho nepoužívejte. Pokud ovladač nefunguje a klíč je uvnitř, zavolejte nám."
      },
      {
        question: "Proč bezklíčový ovladač Fordu nereaguje, když delší dobu ležel?",
        answer: "Novější bezklíčové ovladače Fordu mají pohybové čidlo a zhruba po 40 sekundách bez pohybu přejdou do úsporného režimu, který chrání před zneužitím signálu. Stačí s klíčem pohnout a znovu funguje. Pokud ani potom nereaguje a do vozu se nedostanete, přijedeme a otevřeme ho."
      }
    ]
  },
  {
    slug: "tesla",
    name: "Tesla",
    models: ["Model Y", "Model 3", "Model S", "Model X", "Model 3 Highland", "Model Y Juniper"],
    headline: "když nereaguje karta ani telefon",
    intro: [
      "Tesla nemá klasický klíč ani zámkovou vložku ve dveřích. Model 3 a Model Y se odemykají telefonem, klíčovou kartou nebo volitelným ovladačem, starší Model S a Model X hlavně ovladačem ve tvaru autíčka. Dokud všechno funguje, je to pohodlné. Jakmile se ale vybije telefon, karta zůstane doma a ovladač chybí, stojíte před vozem, do kterého se nemáte jak dostat.",
      "Druhým typickým případem je vybitá nebo dosluhující nízkonapěťová baterie ve voze. Tesla pak nereaguje na kartu ani aplikaci, elektronické kliky nefungují a displej zůstane tmavý, i když hlavní trakční baterie může být klidně nabitá. Přijedeme nonstop v Praze a okolí, situaci posoudíme a pomůžeme vám dostat se do Tesly bez poškození – cenu vám vždy řekneme předem."
    ],
    lockTech: [
      {
        title: "Telefon jako hlavní klíč",
        text: "U Modelu 3 a Y slouží jako hlavní klíč spárovaný telefon s aplikací Tesla. Komunikuje přes Bluetooth, takže po spárování nepotřebuje internet, musí ale být zapnutý. Funkce zamčení při odchodu zamkne vůz, jakmile se od něj s telefonem vzdálíte."
      },
      {
        title: "Klíčová karta na sloupku dveří",
        text: "Záložní klíčová karta se přikládá na čtečku zhruba v první třetině výšky sloupku mezi předními a zadními dveřmi na straně řidiče. Karta neumí automatické odemykání ani zamykání, vždy ji musíte ke čtečce přiložit a případně chvíli podržet."
      },
      {
        title: "Bez napájení nic nefunguje",
        text: "Zámky, kliky i čtečky napájí nízkonapěťová baterie – starší vozy mají olověnou 12V, novější lithiovou. Když se vybije, vůz nereaguje na kartu ani telefon. Přední kapotu s přístupem k baterii lze bez napájení uvolnit jen externím zdrojem podle postupu v příručce."
      }
    ],
    emergencyTip: "Zapněte v telefonu Bluetooth, restartujte aplikaci Tesla a zkuste vůz odemknout na dálku z aplikace, případně přiložte klíčovou kartu ke čtečce na sloupku mezi předními a zadními dveřmi na straně řidiče. Pokud vůz nereaguje ani na kartu, příčinou bývá vybitá nízkonapěťová baterie – postup pro tuto situaci popisuje uživatelská příručka vašeho modelu.",
    situations: [
      "Vybitý telefon a klíčová karta zůstala doma",
      "Vybitá 12V baterie – Tesla nereaguje na kartu ani aplikaci",
      "Karta zapomenutá v kabině a telefonní klíč nefunguje",
      "Starší Model S s vybitým nebo ztraceným ovladačem"
    ],
    faq: [
      {
        question: "Co dělat, když Tesla s vybitou 12V baterií nejde otevřít?",
        answer: "Bez napájení nefungují kliky ani čtečka karty a Tesla nemá mechanickou vložku. Příručka popisuje uvolnění přední kapoty externím zdrojem a připojení pomocného zdroje k nízkonapěťové baterii, teprve potom vůz znovu reaguje. Pokud si postupem nejste jistí nebo zdroj nemáte, zavolejte nám a přijedeme."
      },
      {
        question: "Funguje telefonní klíč Tesly bez internetu?",
        answer: "Ano. Po spárování komunikuje telefon s vozem přes Bluetooth a mobilní data nepotřebuje – musí ale mít zapnuté Bluetooth a nesmí být vybitý. Internet je potřeba jen pro vzdálené odemčení z aplikace, a to v telefonu i ve voze. Jako záloha vždy slouží klíčová karta."
      }
    ]
  },
  {
    slug: "toyota",
    name: "Toyota",
    models: ["Yaris", "Corolla", "Auris", "RAV4", "C-HR", "Aygo", "Yaris Cross", "Avensis", "Aygo X", "Corolla Verso", "Proace", "Hilux"],
    headline: "Yaris, Corolla a systém Smart Entry & Start",
    intro: [
      "V kolínské továrně se od roku 2005 vyrábělo malé Aygo, od listopadu 2021 tam vzniká i Toyota Yaris a v roce 2022 přibylo Aygo X. Yaris je proto v Česku velmi běžným městským autem. Vedle něj jezdí hlavně Corolly, starší Aurisy a Avensisy nebo SUV RAV4, C-HR a Yaris Cross – spolehlivé vozy, ve kterých se ale klíč zabouchne stejně snadno jako v kterémkoli jiném autě.",
      "Novější Toyoty ve vyšší výbavě mají systém Smart Entry & Start: dveře odemknete dotykem kliky a motor nastartujete tlačítkem, klíč přitom zůstává v kapse. Když ho ale necháte v zavazadlovém prostoru, pojistka proti zamčení klíče uvnitř nemusí zafungovat a vůz se zamkne i s ním. Pak za vámi po Praze a okolí přijedeme kdykoli, Toyotu otevřeme bez poškození a cenu vám řekneme předem."
    ],
    lockTech: [
      {
        title: "Smart Entry & Start",
        text: "Elektronický klíč komunikuje s anténami v kabině, kufru i dveřích. Dotykem senzoru v klice se dveře odemknou nebo zamknou, a pokud je po odemčení zhruba do 60 sekund nikdo neotevře, vůz se sám znovu zamkne."
      },
      {
        title: "Mechanický klíč v ovladači",
        text: "V elektronickém klíči je schovaný mechanický klíč, který se vysune po uvolnění pojistky. Slouží k odemčení dveří řidiče, když elektronika nereaguje. Motor lze i s vybitým ovladačem nastartovat přiložením klíče k tlačítku startu."
      },
      {
        title: "Úsporný režim klíče",
        text: "Klíč Toyota lze přepnout do úsporného režimu, kdy přestane přijímat signál a bezklíčový přístup nefunguje. Aktivuje se podržením tlačítka zamčení a dvojím stiskem odemčení, zruší se stiskem libovolného tlačítka na klíči."
      }
    ],
    emergencyTip: "Nejdřív stiskněte na klíči kterékoli tlačítko – pokud byl v úsporném režimu, tím ho probudíte. Když ani pak nereaguje, vysuňte z něj mechanický klíč a odemkněte dveře řidiče, případně vyměňte baterii ovladače nebo si nechte přivézt druhý klíč.",
    situations: [
      "Klíč Smart Entry zamčený v kufru Corolly nebo RAV4",
      "Vybitý ovladač u Yarisu a nereagující dotyková klika",
      "Klíče zabouchnuté ve starším Aurisu nebo Avensisu",
      "Klíče zamčené v dodávce Proace nebo pickupu Hilux"
    ],
    faq: [
      {
        question: "Může se Toyota zamknout, když je klíč Smart Entry v kufru?",
        answer: "Ano, může. Toyota má funkci, která brání zamčení klíče uvnitř, ale podle příručky nemusí zafungovat vždy – záleží na tom, kde klíč leží, například v zavazadlovém prostoru. Pokud se vám to stane, zavolejte nám a vůz otevřeme."
      },
      {
        question: "Otevřete Toyotu s digitálním klíčem v aplikaci MyToyota?",
        answer: "Ano. Vybrané nejnovější modely, například C-HR nové generace nebo bZ4X, mohou mít digitální klíč v telefonu. Když se telefon vybije nebo aplikace selže a fyzický klíč nemáte u sebe, vůz otevřeme. Náhradní klíč vám ale musí zajistit autorizovaný servis."
      }
    ]
  },
  {
    slug: "hyundai",
    name: "Hyundai",
    models: ["i30", "Tucson", "ix35", "i20", "i10", "Kona", "ix20", "Santa Fe", "Bayon", "i40", "Getz", "Ioniq 5"],
    headline: "i30 a Tucson z Nošovic i Smart Key",
    intro: [
      "Hyundai má v Nošovicích svou jedinou továrnu v Evropské unii – od roku 2008 odtud vyjíždí i30, dříve také ix35 a ix20 a dnes hlavně Tucson. Vozy Hyundai z Nošovic jsou proto na našich silnicích mimořádně běžné a doplňují je malé i10 a i20, SUV Kona nebo větší Santa Fe. Mezi nimi najdete starší kusy s obyčejným klíčem i nejnovější modely s digitálním klíčem v telefonu.",
      "Starší vozy mají často vyklápěcí klíč s ovladačem, novější chytrý klíč Smart Key, se kterým se dveře odemykají tlačítkem na klice a motor startuje tlačítkem Start/Stop. Když ale ovladači dojde baterie nebo zůstane v kufru, dveře se neotevřou. V Praze a okolí pak přijedeme ve dne i v noci, Hyundai otevřeme bez poškození zámků i laku a cenu znáte předem."
    ],
    lockTech: [
      {
        title: "Smart Key a tlačítko na klice",
        text: "S chytrým klíčem v kapse se dveře zamykají a odemykají tlačítkem na vnější klice, motor startuje tlačítkem Start/Stop. Mechanický klíč je ukrytý přímo v ovladači a vytáhne se po stisknutí uvolňovacího tlačítka."
      },
      {
        title: "Start se slabou baterií ovladače",
        text: "Když baterie v ovladači slábne, bezklíčové odemykání přestane fungovat. Dveře řidiče pak odemknete mechanickým klíčem a motor lze podle příručky nastartovat tak, že tlačítko Start/Stop stisknete přímo ovladačem."
      },
      {
        title: "Hyundai Digital Key 2",
        text: "Vybrané nejnovější modely, například Ioniq 5 N nebo nová Kona, podporují digitální klíč v telefonu. Podle verze se vůz odemkne při přiblížení, nebo po přiložení telefonu ke klice, a klíč lze sdílet až s patnácti dalšími zařízeními."
      }
    ],
    emergencyTip: "Vytáhněte z ovladače mechanický klíč, sejměte případnou krytku na klice dveří řidiče a odemkněte je ručně. Uvnitř pak zkuste stisknout tlačítko Start/Stop přímo ovladačem – vůz ho pozná i se slabou baterií. Pomoci může i druhý klíč z domova.",
    situations: [
      "Smart Key zamčený v kufru Tucsonu nebo ix35",
      "Vybitý ovladač u i30 a nereagující tlačítko na klice",
      "Klíče zabouchnuté ve starším Getzu nebo i10",
      "Klíč zapomenutý v kabině Kony nebo Bayonu"
    ],
    faq: [
      {
        question: "Kde je zámek pro nouzový klíč u Hyundaie Tucson?",
        answer: "U současného Tucsonu a dalších novějších modelů je vložka ukrytá pod krytkou na klice dveří řidiče. Krytku podle příručky uvolníte mechanickým klíčem, který vytáhnete z ovladače, a pak odemknete dveře řidiče. Pokud to nepůjde, zavolejte nám."
      },
      {
        question: "Co dělat, když se ztratí Smart Key od Hyundaie?",
        answer: "Ztracený chytrý klíč musí nahradit a naučit na vůz servis nebo specializovaná firma – výrobu ani programování klíčů neděláme. Pokud ale máte zamčené auto a uvnitř zůstal druhý klíč nebo doklady, otevřeme vám ho."
      }
    ]
  },
  {
    slug: "kia",
    name: "Kia",
    models: ["Ceed", "Sportage", "Picanto", "Rio", "XCeed", "Stonic", "Niro", "Sorento", "Venga", "ProCeed", "EV6"],
    headline: "Ceed a Sportage ze Žiliny i digitální klíč",
    intro: [
      "Kia vyrábí Ceed, XCeed i Sportage kousek za hranicemi, ve slovenské Žilině, a proto jsou tyto modely u nás velmi rozšířené. Menší Kia Venga dokonce sjížděla z linky v nošovickém závodě Hyundai. Vedle nich jezdí po Praze a okolí malé Picanto a Rio, kompaktní Stonic a stále častěji i elektrické Niro nebo EV6.",
      "U staršího Ceedu s vyklápěcím klíčem, Sportage s chytrým klíčem Smart Key i nejnovějšího modelu s digitálním klíčem v telefonu platí totéž: jakmile klíč zůstane v zamčeném voze a druhý je daleko, dovnitř se sami nedostanete. Pak vám rádi pomůžeme – v Praze a okolí nonstop, beze škod na voze a za cenu, kterou vám řekneme předem."
    ],
    lockTech: [
      {
        title: "Mechanický klíč v chytrém klíči",
        text: "Chytrý klíč Kia v sobě ukrývá mechanický klíč. Vytáhne se po stisknutí uvolňovacího tlačítka a zpět se zasouvá, dokud necvakne. Mechanickým klíčem se odemykají a zamykají jen dveře řidiče."
      },
      {
        title: "Krytka zámku u Sportage",
        text: "U Sportage páté generace je vložka v klice řidiče schovaná pod krytkou. Uvolní se páčkou zespodu krytky pomocí klíče a krytka se pak vysune. Pokud v mrazu zamrzne, stačí na ni lehce poklepat nebo ji zahřát dlaní."
      },
      {
        title: "Kia Digital Key",
        text: "Digitální klíč v telefonu se u nejnovějších modelů Kia používá buď přiložením telefonu ke klice, nebo u verze Digital Key 2 pouhým přiblížením. Pro nastartování stačí mít telefon ve voze, případně ho položit na bezdrátovou nabíječku."
      }
    ],
    emergencyTip: "Vytáhněte z ovladače mechanický klíč, zespodu kliky řidiče uvolněte krytku a odemkněte dveře v zámku. Když je krytka v mrazu zamrzlá, lehce na ni poklepejte nebo ji zahřejte dlaní – horkou vodu nepoužívejte.",
    situations: [
      "Smart Key zapomenutý v kufru Sportage",
      "Vybitý ovladač u Ceedu a zamrzlá krytka zámku",
      "Klíče zabouchnuté v Picantu nebo Riu u obchodu",
      "Klíč od Vengy zůstal v zapalování a dveře se zamkly"
    ],
    faq: [
      {
        question: "Které vozy Kia umějí digitální klíč v telefonu?",
        answer: "V Evropě ho Kia nabízí například u EV3, EV9, modernizovaného EV6 a Sportage od modelového roku 2025 nebo modernizovaného Sorenta od modelového roku 2024. Když telefon selže, použijte fyzický klíč. Pokud ho nemáte u sebe, přijedeme a vůz otevřeme."
      },
      {
        question: "Co dělat, když na Sportage zamrzne krytka zámku?",
        answer: "Podle příručky na krytku lehce poklepejte nebo ji zahřejte dlaní, nikdy ne horkou vodou, která by v mrazu znovu zmrzla. Pak krytku uvolněte páčkou zespodu a dveře řidiče odemkněte mechanickým klíčem. Pokud se to nepovede, zavolejte nám."
      }
    ]
  },
  {
    slug: "mazda",
    name: "Mazda",
    models: ["Mazda 6", "Mazda 3", "CX-5", "CX-30", "Mazda 2", "CX-3", "CX-60", "MX-5", "Mazda 5", "CX-7"],
    headline: "Mazda 3, CX-5 i Advanced Keyless Entry",
    intro: [
      "Mazda si v Česku získala věrné majitele hlavně modely Mazda 6, Mazda 3 a CX-5, k nimž v posledních letech přibyly CX-30 a velké CX-60. Na silnicích jsou ale pořád běžné i starší Mazdy 2 a 5 nebo roadstery MX-5. Většina z nich má klíč s dálkovým ovladačem, lépe vybavené verze bezklíčový systém Advanced Keyless Entry, u kterého stačí mít ovladač v kapse.",
      "Když bezklíčovou Mazdu zamknete druhým klíčem a první zůstane v kabině, vůz vás na to zhruba deset sekund upozorňuje pípáním zvenku. V ruchu parkoviště nebo s dětmi se ale varování snadno přeslechne. Pak je řada na nás: přijedeme nonstop po Praze a okolí, Mazdu otevřeme bez poškození zámků i laku a cenu vám řekneme ještě před výjezdem."
    ],
    lockTech: [
      {
        title: "Advanced Keyless Entry",
        text: "S ovladačem v kapse se dveře odemknou tlačítkem na klice, u novějších modelů dotykem senzoru. Když po odemčení zhruba do 60 sekund neotevřete dveře ani kufr, Mazda se automaticky znovu zamkne; tuto dobu lze v nastavení změnit."
      },
      {
        title: "Pomocný klíč v ovladači",
        text: "Uvnitř ovladače je ukrytý pomocný mechanický klíč, který se vytáhne po uvolnění pojistky. Odemkne jen dveře řidiče – u Mazdy 3 a CX-30 současné generace se do zámku zasouvá při přitažené klice."
      },
      {
        title: "Úsporný režim ovladače",
        text: "Ovladač lze přepnout do úsporného režimu, v němž nefunguje bezklíčové odemykání ani startování, tlačítka dálkového ovládání ale ano. Zapíná se i vypíná sérií stisků tlačítka zamčení podle příručky."
      }
    ],
    emergencyTip: "Vytáhněte z ovladače pomocný klíč a odemkněte jím dveře řidiče – u novější Mazdy 3 a CX-30 kliku nejdřív přitáhněte, teprve pak se klíč zasune. Když bezklíčové odemykání nefunguje, ale tlačítka na ovladači ano, může být ovladač v úsporném režimu nebo mu dochází baterie.",
    situations: [
      "Klíč zapomenutý v kufru CX-5 po nákupu",
      "Vybitý ovladač u Mazdy 3 a zamčené dveře",
      "Klíče zabouchnuté ve starší Mazdě 6 kombi",
      "Klíč zůstal v kabině MX-5 se zavřenou střechou"
    ],
    faq: [
      {
        question: "Kde je zámek pro klíč u Mazdy 3 a CX-30, když ho nevidím?",
        answer: "U současné Mazdy 3 a CX-30 není vložka na první pohled vidět. Podle příručky přitáhněte kliku dveří řidiče, zasuňte do zámku pomocný klíč z ovladače a otočte ho na stranu odemčení. Odemykají se tak jen dveře řidiče. Pokud to nejde, zavolejte nám."
      },
      {
        question: "Proč Mazda nereaguje na dotyk kliky, i když tlačítka ovladače fungují?",
        answer: "Ovladač může být v úsporném režimu, který vypíná bezklíčové odemykání i startování. Zruší se stejnou sérií stisků tlačítka zamčení, jakou se zapíná – přesný postup je v příručce. Příčinou bývá i slabá baterie ovladače. Pokud se do vozu nedostanete vůbec, zavolejte nám."
      }
    ]
  },
  {
    slug: "nissan",
    name: "Nissan",
    models: ["Qashqai", "Juke", "X-Trail", "Micra", "Note", "Leaf", "Navara", "Almera", "Primera", "Pathfinder", "Ariya"],
    headline: "Qashqai, Juke a klíč Intelligent Key",
    intro: [
      "Nissan Qashqai bývá považován za auto, které odstartovalo módu kompaktních SUV, a v Česku ho potkáte ve všech třech generacích. Vedle něj jezdí Juke, X-Trail, malá Micra a Note nebo elektrický Leaf. Bezklíčový systém se u Nissanu jmenuje Intelligent Key – ovladač stačí mít v kapse, dveře se odemknou tlačítkem na klice a motor se startuje tlačítkem.",
      "Qashqai současné generace se navíc umí odemknout při vašem přiblížení a po odchodu se sám zamkne. Pozor ale na situaci se dvěma klíči: když jeden zůstane v kabině a druhý je venku, vůz se podle příručky zamknout dá. Zamčený Nissan pak otevřeme bez poškození – v Praze a okolí nonstop a za cenu, kterou vám řekneme předem."
    ],
    lockTech: [
      {
        title: "Intelligent Key a tlačítko na klice",
        text: "S klíčem v dosahu se dveře zamykají a odemykají tlačítkem na klice. Když je klíč uvnitř, tlačítko zamčení nereaguje – pokud je ale venku druhý Intelligent Key, vůz se zamknout dá. S tím počítejte, když máte u auta oba klíče."
      },
      {
        title: "Nouzový klíč uvnitř ovladače",
        text: "V ovladači Intelligent Key je schovaný mechanický nouzový klíč pro dveře řidiče. Při slabé baterii ovladače jde motor nastartovat tak, že se klíčem dotknete tlačítka zapalování a do deseti sekund po zaznění signálu ho se sešlápnutou brzdou stisknete."
      },
      {
        title: "Odemknutí přiblížením, zamčení odchodem",
        text: "Qashqai současné generace nabízí podle výbavy odemknutí při přiblížení a automatické zamčení při odchodu. S klíčem v kapse se tak o zamykání nemusíte starat, jen je dobré vědět, kde máte druhý klíč."
      }
    ],
    emergencyTip: "Vytáhněte z Intelligent Key nouzový klíč a odemkněte jím dveře řidiče. Pokud ovladač nereaguje vůbec, vyměňte baterii, která vydrží zhruba dva roky, nebo si nechte přivézt druhý klíč z domova.",
    situations: [
      "Intelligent Key zamčený v kabině Qashqaie druhým klíčem",
      "Vybitý ovladač u Juke nebo Micry a nereagující klika",
      "Klíče zabouchnuté v kufru X-Trailu na výletě",
      "Klíč od Leafu zůstal uvnitř během nabíjení"
    ],
    faq: [
      {
        question: "Jak se může Qashqai zamknout, když je klíč uvnitř?",
        answer: "Tlačítko na klice vůz s klíčem uvnitř běžně nezamkne. Podle příručky to ale jde, pokud je venku druhý Intelligent Key – třeba v kapse spolujezdce, který odešel napřed. Když se to stane, zavolejte nám a vůz otevřeme."
      },
      {
        question: "Co dělat, když Nissan nereaguje na Intelligent Key?",
        answer: "Nejprve vysuňte z ovladače nouzový klíč a odemkněte dveře řidiče. Uvnitř se pak ovladačem dotkněte tlačítka zapalování – vůz ho rozpozná i se slabou baterií. Ovladač může zlobit i kvůli silnému rušení. Pokud dveře neodemknete, přijedeme a otevřeme je my."
      }
    ]
  },
  {
    slug: "suzuki",
    name: "Suzuki",
    models: ["Vitara", "SX4", "S-Cross", "Swift", "Ignis", "Jimny", "Grand Vitara", "Splash", "Baleno", "Swace", "Across", "Alto"],
    headline: "Vitara, SX4 i bezklíčové startování",
    intro: [
      "Suzuki je v Česku oblíbené hlavně díky kompaktním SUV s pohonem všech kol – Vitara, SX4 i S-Cross pocházejí z maďarské Ostřihomi a jezdí po celé zemi, stejně jako praktický Swift, malý Ignis nebo terénní Jimny. Protože jde o vozy, které vydrží dlouho, potkáte na silnicích Suzuki s úplně obyčejným klíčem i s moderním bezklíčovým systémem.",
      "Novější Vitara nebo S-Cross mají bezklíčové startování s tlačítky na klikách dveří, starší SX4 a Grand Vitara s ním používaly místo tlačítka otočný knoflík zapalování. Nabídku doplňují Swace a Across, sesterské modely Toyoty Corolla a RAV4. Otevřeme kterékoli Suzuki – v Praze a okolí 24 hodin denně, beze škod a za cenu, kterou znáte předem."
    ],
    lockTech: [
      {
        title: "Tlačítka na klikách dveří",
        text: "S ovladačem u sebe se dveře zamykají a odemykají tlačítkem na klice řidiče, spolujezdce nebo pátých dveří. Prvním stiskem se odemknou jen dveře řidiče, druhým ostatní. Když je ovladač uvnitř, vůz se tlačítkem nezamkne a ozve se bzučák."
      },
      {
        title: "Nouzový klíč a otočný knoflík",
        text: "V ovladači je zasunutý nouzový klíč, který se po použití zatlačí zpět, dokud necvakne. Starší Grand Vitara nebo SX4 s bezklíčovým startováním mají místo tlačítka otočný knoflík zapalování, který se s ovladačem v kapse jednoduše otočí."
      },
      {
        title: "Zamčení po 30 sekundách",
        text: "Pokud po odemčení dálkovým ovladačem zhruba do 30 sekund neotevřete žádné dveře, Vitara se automaticky znovu zamkne. Dvojím stiskem zamykacího tlačítka do tří sekund se navíc zapíná dead lock, při kterém nejdou dveře otevřít ani zevnitř."
      }
    ],
    emergencyTip: "Vysuňte z ovladače nouzový klíč a odemkněte jím dveře řidiče přímo v zámku. Když ovladač nereaguje, vyměňte baterii, která vydrží zhruba dva roky. A pamatujte: režimem dead lock nikdy nezamykejte vůz, ve kterém někdo zůstal.",
    situations: [
      "Ovladač zůstal v kufru Vitary a vůz zamkl druhý klíč",
      "Klíče zabouchnuté ve starší SX4 nebo Swiftu",
      "Vybitý ovladač u S-Crossu a nereagující tlačítko na klice",
      "Klíč od Jimnyho zamčený v kabině na chatě"
    ],
    faq: [
      {
        question: "Proč Vitara pípá a nejde zamknout tlačítkem na klice?",
        answer: "Bzučák a nezamčené dveře znamenají, že systém našel ovladač uvnitř vozu – Suzuki vás tak chrání před zabouchnutím klíče. Ovladač si vezměte a zamkněte znovu. Pokud se auto přesto zamklo – třeba druhým ovladačem – a klíč zůstal uvnitř, zavolejte nám."
      },
      {
        question: "Otevřete i Suzuki Swace nebo Across?",
        answer: "Ano. Swace a Across jsou sesterské modely Toyoty Corolla Touring Sports a RAV4 plug-in hybrid, takže technicky vycházejí z Toyoty. Na otevření to nic nemění – poradíme si s nimi stejně jako s ostatními vozy Suzuki."
      }
    ]
  }
];
