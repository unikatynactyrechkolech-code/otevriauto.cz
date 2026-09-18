import type { Location } from "./types";

export const pragueLocations: Location[] = [
  {
    slug: "praha-1",
    name: "Praha 1",
    locative: "v Praze 1",
    region: "praha",
    geo: [50.0865, 14.4175],
    parts: ["Staré Město", "Josefov", "Malá Strana", "Nové Město", "Hradčany", "Újezd", "Výtoň"],
    headline: "historické centrum, pěší zóny a podzemní garáže",
    intro: [
      "Zabouchnuté klíče v historickém centru jsou nepříjemné dvojnásob – auto často stojí v modré zóně, na místě pro zásobování nebo v podzemní garáži, kde každá minuta navíc znamená vyšší parkovné. Na Starém Městě, v Josefově i na Malé Straně proto vyjíždíme okamžitě a vůz otevřeme přímo tam, kde stojí.",
      "Jezdíme k Národnímu divadlu, do okolí Masarykova nádraží, do garáží u Palladia i do uliček pod Pražským hradem. Pracujeme šetrně – dveře, těsnění ani elektronika neutrpí – a po zásahu můžete hned pokračovat v cestě, ať řídíte osobní vůz, dodávku, nebo auto s bezklíčovým vstupem."
    ],
    hotspots: ["Garáže Palladium", "Garáže Národní divadlo", "Garáže pod náměstím Jana Palacha", "Masarykovo nádraží", "Václavské náměstí"],
    tip: "V Praze 1 platí téměř všude zóny placeného stání. Než dorazíme, prodlužte si parkování přes virtuální parkovací hodiny, ať kvůli zabouchnutým klíčům nedostanete pokutu.",
    faq: {
      question: "Otevřete auto i v podzemní garáži v centru Prahy 1?",
      answer: "Ano. V garážích je často slabý signál a málo místa, na zásah ale stačí přístup k dveřím řidiče. Při volání nám řekněte podlaží a sekci, ať technik míří rovnou k vozu."
    }
  },
  {
    slug: "praha-2",
    name: "Praha 2",
    locative: "v Praze 2",
    region: "praha",
    geo: [50.0667, 14.4345],
    parts: ["Vinohrady", "Nusle", "Vyšehrad"],
    headline: "vinohradské ulice, Nuselské údolí a Vyšehrad",
    intro: [
      "Vinohradské ulice jsou hustě zaparkované a volné místo poblíž domu se často hledá dlouho – o to víc naštve, když pak klíček zůstane ležet na sedadle nebo auto po noci venku přestane reagovat na dálkové ovládání. V Praze 2 otevíráme osobní vozy i dodávky bez poškození dveří a zámků, ať stojí u náměstí Míru, pod Riegrovými sady, nebo ve svahu nad Nuselským údolím.",
      "V Nuslích a pod Vyšehradem pomáháme řidičům, kteří jen na chvíli odběhli – do kanceláře, na procházku po hradbách nebo na akci v Kongresovém centru Praha. Zabouchnutý kufr, vybitou baterii v klíči i zaseknuté centrální zamykání vyřešíme přímo na místě. Volat můžete i po půlnoci a cenu znáte dřív, než začneme."
    ],
    hotspots: ["Náměstí Míru", "Riegrovy sady", "Vinohradská tržnice", "Kongresové centrum Praha", "Náměstí Bratří Synků"],
    tip: "Na Vinohradech je spousta jednosměrných ulic, takže se k autu nedá vždy dojet nejkratší cestou. Při volání uveďte kromě ulice i nejbližší křižovatku, technik pak nebude zbytečně objíždět bloky.",
    faq: {
      question: "Otevřete auto, u kterého po mrazivé noci na ulici na Vinohradech zamrzl zámek?",
      answer: "Ano. Zamrzlý zámek ani přimrzlé těsnění nepolévejte horkou vodou – rychle znovu zmrzne a může poškodit lak i gumy. Auto otevřeme šetrně a poradíme, jak zámek a těsnění ošetřit, aby se to při parkování venku neopakovalo."
    }
  },
  {
    slug: "praha-3",
    name: "Praha 3",
    locative: "v Praze 3",
    region: "praha",
    geo: [50.0872, 14.4628],
    parts: ["Žižkov"],
    headline: "strmé ulice, činžovní bloky a Vítkov",
    intro: [
      "Žižkov je čtvrť úzkých a strmých ulic, kde auta stojí nárazník na nárazníku podél činžovních domů a přes noc zůstávají venku. V zimě jim zamrzají zámky a vybitá baterie v klíči se ozve zrovna ve chvíli, kdy spěcháte do práce. Autozámečník v Praze 3 k vám přijede i v noci a dveře otevře šetrně – bez páčení a bez škrábanců na laku.",
      "Vyjíždíme k Olšanským hřbitovům, pod Žižkovský vysílač, ke stadionu Viktorie i k Vysoké škole ekonomické. Klíče zabouchnuté v kufru, porucha centrálního zamykání nebo ztracený klíček od služební dodávky – na Žižkově i na Vítkově otevřeme vůz přímo na ulici a předem vám řekneme, kolik to bude stát."
    ],
    hotspots: ["Olšanské hřbitovy", "Žižkovský vysílač", "Stadion Viktorie Žižkov", "Vysoká škola ekonomická", "Národní památník na Vítkově"],
    tip: "Klíč od auta noste u sebe, i když před domem jen vykládáte nákup. V úzkých žižkovských ulicích se za stojícím vozem rychle tvoří kolona a zabouchnuté dveře pak řešíte pod zbytečným tlakem.",
    faq: {
      question: "Dokážete otevřít auto, které stojí v úzké žižkovské ulici těsně mezi jinými vozy?",
      answer: "Ve většině případů ano. K otevření potřebujeme přístup alespoň k jedněm dveřím, ideálně řidiče. Pokud je auto sevřené z obou stran, řekněte nám to už při volání, abychom zvolili vhodný postup a nic nepoškodili."
    }
  },
  {
    slug: "praha-4",
    name: "Praha 4",
    locative: "v Praze 4",
    region: "praha",
    geo: [50.0175, 14.4462],
    parts: ["Braník", "Chodov", "Krč", "Michle", "Modřany", "Podolí", "Kunratice", "Lhotka", "Libuš", "Hodkovičky", "Kamýk", "Cholupice", "Písnice", "Točná", "Svépravice"],
    headline: "sídliště, nemocnice v Krči a Westfield Chodov",
    intro: [
      "Praha 4 se táhne od Podolí a Braníku u Vltavy přes kanceláře na Brumlovce v Michli až k sídlištím v Modřanech, na Libuši a v Písnici. Klíče zamčené v autě řešíme na parkovišti před panelákem stejně jako v podzemní garáži obchodního centra a vůz otevřeme bez poškození – starší hatchback i SUV s bezklíčovým přístupem.",
      "U krčských nemocnic – Fakultní Thomayerovy nemocnice a IKEM – se z auta vystupuje ve spěchu a klíč snadno zůstane uvnitř. Stejně nepříjemné je zabouchnout kufr na parkovišti Westfield Chodov, u plaveckého stadionu v Podolí nebo pod Kunratickým lesem. Po celé Praze 4 jezdíme ve dne i v noci a poradíme si se všemi značkami včetně dodávek."
    ],
    hotspots: ["Westfield Chodov", "Fakultní Thomayerova nemocnice", "IKEM", "Plavecký stadion Podolí", "BB Centrum Brumlovka", "Obchodní centrum Novo Plaza"],
    tip: "Parkoviště P+R Chodov je v podzemních podlažích centra Westfield Chodov. Než odejdete k metru, vyfoťte si číslo podlaží a označení sektoru – v rozlehlé garáži to technikovi výrazně usnadní hledání vozu.",
    faq: {
      question: "Jezdíte i do okrajových částí Prahy 4, jako jsou Točná nebo Cholupice?",
      answer: "Ano. Přijedeme i na okraj města, třeba ke sportovnímu letišti Točná, do Cholupic nebo do Písnice. V méně zastavěných místech nám při volání popište orientační bod, například křižovatku nebo zastávku autobusu, ať vás technik rychle najde."
    }
  },
  {
    slug: "praha-5",
    name: "Praha 5",
    locative: "v Praze 5",
    region: "praha",
    geo: [50.0484, 14.3585],
    parts: ["Smíchov", "Košíře", "Jinonice", "Motol", "Radlice", "Hlubočepy", "Slivenec", "Lochkov", "Sobín", "Holyně"],
    headline: "od Anděla po Barrandov a Pražský okruh",
    intro: [
      "Smíchov kolem Anděla patří k nejrušnějším místům na levém břehu Vltavy. Auta tu stojí v podzemních garážích obchodního centra Nový Smíchov, u kancelářských budov i v zónách placeného stání. Stačí vytáhnout tašky z kufru, zabouchnout víko a klíč zůstane uvnitř. Takové auto v Praze 5 otevřeme šetrně – zámku, těsnění ani elektronice neublížíme.",
      "Na sídlišti Barrandov, v Jinonicích nebo v Košířích se parkuje hlavně před domy, v Motole zase kolem rozlehlého areálu nemocnice. Jezdíme i do klidnějšího Slivence a Holyně, k Lochkovu u Pražského okruhu nebo až do Sobína na západním okraji Prahy. Osobní auta, dodávky i vozy s keyless systémem otevíráme 24 hodin denně a cenu znáte ještě před začátkem práce."
    ],
    hotspots: ["Nákupní centrum Nový Smíchov", "Nemocnice Motol", "Nemocnice Na Homolce", "Nádraží Praha-Smíchov", "Sídliště Barrandov", "P+R Kotlářka"],
    tip: "Auto zamčené na parkovišti u nemocnice v Motole ani kdekoli jinde se nepokoušejte otevírat drátem nebo pravítkem. Snadno poškodíte těsnění, táhla zámku nebo kabeláž ve dveřích, a oprava pak zabere víc času než samotné otevření.",
    faq: {
      question: "Zabouchl jsem klíče v kufru na parkovišti u Nového Smíchova. Otevřete i kufr?",
      answer: "Ano. U většiny vozů nejprve bez poškození otevřeme dveře a kufr pak odemknete tlačítkem uvnitř auta. U modelů, kde to nejde, zvolíme jiný šetrný postup. Při volání řekněte, zda stojíte v garáži, nebo na povrchovém parkovišti."
    }
  },
  {
    slug: "praha-6",
    name: "Praha 6",
    locative: "v Praze 6",
    region: "praha",
    geo: [50.1035, 14.3498],
    parts: ["Dejvice", "Břevnov", "Bubeneč", "Střešovice", "Veleslavín", "Vokovice", "Liboc", "Ruzyně", "Nebušice", "Přední Kopanina", "Zadní Kopanina", "Lysolaje", "Suchdol"],
    headline: "letiště v Ruzyni, Dejvice a výlety do Šárky",
    intro: [
      "Letiště Václava Havla leží v Ruzyni, a tak do Prahy 6 jezdíme i k autům, ve kterých klíč zůstal v kufru mezi zavazadly nebo baterie v ovladači vypověděla službu zrovna po návratu z dovolené. Otevíráme vozy na letištních parkovištích, u obchodního centra Šestka i na P+R Nádraží Veleslavín, odkud lidé pokračují metrem do centra.",
      "V Dejvicích, Bubenči a Střešovicích se parkuje v zónách placeného stání, v Břevnově bývá plno kolem Ústřední vojenské nemocnice a Strahovského stadionu. Vyjíždíme také za výletníky k Divoké Šárce a oboře Hvězda nebo do Suchdolu a Lysolají. Auto vám otevřeme bez poškození v kteroukoli denní i noční hodinu a cenu se dozvíte předem."
    ],
    hotspots: ["Letiště Václava Havla Praha", "Obchodní centrum Šestka", "P+R Nádraží Veleslavín", "Ústřední vojenská nemocnice", "Vítězné náměstí", "Divoká Šárka"],
    tip: "Na letištních parkovištích parkovné běží i ve chvíli, kdy čekáte na otevření auta. Zavolejte proto hned, jakmile zjistíte, že se k vozu nedostanete, a mezitím si ještě projděte příruční zavazadla, jestli klíč není v nich.",
    faq: {
      question: "Otevřete auto s bezklíčovým přístupem, když klíč zůstal v kufru se zavazadly na letišti?",
      answer: "Ano. Keyless vozy se někdy zamknou, i když je klíč uvnitř, například v kapse bundy odložené v kufru. Dveře otevřeme bez poškození elektroniky. Řekněte nám, na kterém letištním parkovišti a v jaké sekci vůz stojí."
    }
  },
  {
    slug: "praha-7",
    name: "Praha 7",
    locative: "v Praze 7",
    region: "praha",
    geo: [50.1097, 14.4296],
    parts: ["Holešovice", "Troja"],
    headline: "od Letné po Zoo Praha v Troji",
    intro: [
      "Holešovice se v posledních desetiletích proměnily z průmyslového předměstí ve čtvrť kanceláří, bytů a kulturních akcí. Auta stojí u Pražské tržnice, v okolí Výstaviště, na Letné i u nádraží Holešovice, kde řada řidičů přesedá na metro. Pokud vám klíče zůstanou zamčené ve voze, přijedeme do Prahy 7 i v noci či o víkendu a dveře ani elektroniku nepoškodíme.",
      "V Troji pomáháme výletníkům u Zoo Praha, jejíž parkoviště se táhnou podél Vltavy, i u botanické zahrady a Trojského zámku. Po celodenní procházce s dětmi se klíč snadno zamkne v kufru spolu s taškou nebo kočárkem. Poradíme si s osobním vozem, dodávkou i autem s bezklíčovým přístupem a cenu znáte ještě před zásahem."
    ],
    hotspots: ["Zoo Praha", "P+R Troja", "Výstaviště Praha", "Pražská tržnice", "P+R Nádraží Holešovice", "Stadion Sparty na Letné"],
    tip: "Jdete-li na zápas na Letnou nebo na koncert na Výstaviště, nenechávejte klíč v bundě odložené v autě. Po skončení akce bývá okolí plné lidí i aut a čekání u zamčeného vozu je zbytečně nepříjemné.",
    faq: {
      question: "Otevřete auto na parkovišti u Zoo Praha, když je uvnitř zamčený klíč i s kočárkem?",
      answer: "Ano. Parkoviště u zoo jsou rozlehlá, proto nám při volání řekněte, na kterém z nich u Vltavy stojíte, a popište barvu a značku vozu. Technik vás najde i mezi mnoha auty a otevře dveře bez poškození."
    }
  },
  {
    slug: "praha-8",
    name: "Praha 8",
    locative: "v Praze 8",
    region: "praha",
    geo: [50.1258, 14.4549],
    parts: ["Karlín", "Libeň", "Kobylisy", "Bohnice", "Čimice", "Ďáblice", "Dolní Chabry", "Střížkov"],
    headline: "od Karlína po sídliště v Bohnicích",
    intro: [
      "Karlín dnes žije kancelářemi, restauracemi a novými byty a volné místo k zaparkování se tu hledá těžko. Jakmile ho konečně najdete a klíčky pak zůstanou za zabouchnutými dveřmi, nechcete ztrácet čas ani riskovat pokutu. V Praze 8 otevíráme auta u Fora Karlín, kolem Křižíkovy ulice i u autobusového nádraží Florenc, kde řidiči často jen vyzvedávají cestující.",
      "Severněji, na sídlištích Kobylisy, Ďáblice a Bohnice, stojí auta v dlouhých řadách před domy a v zimě tu nejsou výjimkou zamrzlé zámky. Pomáháme také u Fakultní nemocnice Bulovka v Libni, u Psychiatrické nemocnice Bohnice nebo u Bauhausu v Dolních Chabrech. Jezdíme ve dne i v noci a šetrně otevřeme auto jakékoli značky."
    ],
    hotspots: ["Autobusové nádraží Florenc", "Forum Karlín", "Fakultní nemocnice Bulovka", "Psychiatrická nemocnice Bohnice", "Obchodní centrum Krakov", "P+R Ládví"],
    tip: "Když u Florence zastavujete jen na chvíli pro cestujícího, nevystupujte od běžícího motoru a klíč si vezměte s sebou. Zamčené auto na místě, kde se nesmí stát, znamená riziko pokuty i odtahu.",
    faq: {
      question: "Otevřete dodávku, která zůstala zamčená při vykládce v Karlíně?",
      answer: "Ano. Dodávky všech značek otevíráme stejně šetrně jako osobní auta. Místa pro zásobování v Karlíně bývají časově omezená, proto nám při volání řekněte, jak dlouho tam vůz může stát, a technik s tím bude počítat."
    }
  },
  {
    slug: "praha-9",
    name: "Praha 9",
    locative: "v Praze 9",
    region: "praha",
    geo: [50.1281, 14.532],
    parts: ["Vysočany", "Prosek", "Letňany", "Hloubětín", "Kyje", "Kbely", "Satalice", "Čakovice", "Miškovice", "Třeboradice", "Vinoř", "Hrdlořezy"],
    headline: "koncerty v O2 areně, Prosek a Kbely",
    intro: [
      "Po koncertu nebo zápase v O2 areně se k autům vrací tisíce lidí najednou a ve spěchu se snadno stane, že klíč zůstane ve voze nebo se ztratí v davu. Otevíráme auta u Galerie Harfa, podél Kolbenovy ulice ve Vysočanech i na sídlišti Prosek kolem Parku přátelství. Do Prahy 9 přijedeme i o půlnoci, kdy se parkoviště pomalu vyprazdňují.",
      "Jezdíme také dál na východ a sever – do Hloubětína, Kyjí a Hrdlořez, do Kbel s Leteckým muzeem i do Satalic, Vinoře a Čakovic. Otevíráme tu firemní dodávky v průmyslových areálech, auta před rodinnými domy i vozy výletníků u Kyjského rybníka. Zámek ani lak nepoškodíme a cenu se dozvíte, ještě než začneme."
    ],
    hotspots: ["O2 arena", "Galerie Harfa", "Letecké muzeum Kbely", "Park přátelství", "Kyjský rybník", "Nádraží Praha-Vysočany"],
    tip: "Po velkých akcích v O2 areně bývá okolí stanice metra Českomoravská přeplněné. Pokud čekáte na technika, zůstaňte u auta nebo na dobře osvětleném místě poblíž a mějte telefon po ruce.",
    faq: {
      question: "Co když při koncertu v O2 areně ztratím klíč od auta?",
      answer: "Nejdřív projděte cestu zpět k vozu a zeptejte se obsluhy haly, jestli klíč někdo nenašel. Když se neobjeví, auto vám bez poškození otevřeme, abyste se dostali k věcem uvnitř a mohli si zajistit náhradní klíč."
    }
  },
  {
    slug: "praha-10",
    name: "Praha 10",
    locative: "v Praze 10",
    region: "praha",
    geo: [50.0686, 14.5039],
    parts: ["Vršovice", "Strašnice", "Malešice", "Záběhlice", "Štěrboholy"],
    headline: "zápasy v Edenu a nákupy ve Štěrboholech",
    intro: [
      "Ve Vršovicích se parkuje v hustě zastavěných ulicích se zónami placeného stání a kolem náměstí Svatopluka Čecha nebo Kubánského náměstí je každé volné místo vzácné. Klíč zapomenutý v zapalování, zabouchnutý kufr nebo zaseknuté centrální zamykání tu řešíme přímo na ulici. V Praze 10 vyjíždíme kdykoli a malé městské auto otevřeme stejně šetrně jako firemní dodávku.",
      "Ve dnech zápasů se ulice kolem Fortuna Areny v Edenu a Ďolíčku rychle zaplní a řidiči spěchají, aby stihli výkop. Ve Štěrboholech na východě zase lidé nakupují v Europarku a Fashion Areně, jiní nechávají auto na P+R Skalka nebo Depo Hostivař ve Strašnicích. Zajíždíme i do Záběhlic, Zahradního Města a Malešic a cenu vám vždy řekneme předem."
    ],
    hotspots: ["Fortuna Arena", "Stadion Ďolíček", "Fakultní nemocnice Královské Vinohrady", "Europark Štěrboholy", "P+R Skalka", "P+R Depo Hostivař"],
    tip: "Když vezete někoho na pohotovost do Fakultní nemocnice Královské Vinohrady, vezměte si klíč s sebou i ve stresu. Zabouchnuté auto před nemocnicí je starost, kterou v tu chvíli opravdu nepotřebujete.",
    faq: {
      question: "Otevřete auto zaparkované u Fortuna Areny v den zápasu Slavie?",
      answer: "Ano. Před zápasem a po něm bývají ulice kolem stadionu v Edenu plné aut i fanoušků, takže průjezd může chvíli trvat. Popište nám přesně ulici, barvu a značku vozu a auto otevřeme bez poškození."
    }
  },
  {
    slug: "praha-11",
    name: "Praha 11",
    locative: "v Praze 11",
    region: "praha",
    geo: [50.0218, 14.521],
    parts: ["Háje", "Šeberov"],
    headline: "sídliště Háje a klidný Šeberov u D1",
    intro: [
      "Háje tvoří velkou část Jižního Města – panelové domy, dlouhé řady aut před vchody a konečná stanice metra C, kde lidé přestupují z autobusů. Stačí ráno ve spěchu zabouchnout dveře s klíčem na sedadle a celý den se zkomplikuje. Na Hájích otevíráme osobní auta i dodávky přímo na parkovištích sídliště a se zámky zacházíme šetrně.",
      "Šeberov s Hrnčíři má úplně jiný ráz: rodinné domy, rybníky a na východním okraji dálnice D1. V létě sem lidé míří k Šeberáku, jehož břeh tvoří hranici s Kunraticemi, a klíč od auta se na dece u vody ztratí snadněji, než by čekali. Do Prahy 11 za vámi vyrazíme kdykoli, otevřeme auto jakékoli značky a cenu řekneme dopředu."
    ],
    hotspots: ["Stanice metra Háje", "Autobusový terminál Háje", "Sídliště Háje", "Rybník Šeberák", "Parkoviště na návsi v Šeberově"],
    tip: "Pokud je v zamčeném autě u Šeberáku nebo na rozpáleném parkovišti sídliště dítě či zvíře a hrozí přehřátí, volejte nejprve linku 112. Život má přednost před šetrným otevřením.",
    faq: {
      question: "Na Hájích mi v mrazu přestal fungovat keyless klíč. Otevřete auto?",
      answer: "Ano. V zimě se baterie v ovladači vybíjí rychleji. Často pomůže nouzový mechanický klíč schovaný v ovladači; pokud ho nemáte nebo zámek nejde otočit, auto otevřeme bez poškození dveří i elektroniky."
    }
  },
  {
    slug: "praha-12",
    name: "Praha 12",
    locative: "v Praze 12",
    region: "praha",
    geo: [49.9903, 14.4106],
    parts: ["Komořany"],
    headline: "tichý jih mezi Vltavou a Modřanskou roklí",
    intro: [
      "Komořany na jižním okraji Prahy leží mezi pravým břehem Vltavy a lesy přírodního parku Modřanská rokle – Cholupice. Hlavní osou je Komořanská ulice, kudy se jezdí k firmám, rodinným domům i zahrádkářským osadám. Zůstanou-li vám tu klíče zamčené v autě, nemusíte nic páčit ani rozbíjet okno – do Prahy 12 přijedeme nonstop a vůz otevřeme bez poškození.",
      "Otevíráme auta zaměstnanců i návštěvníků u Českého hydrometeorologického ústavu v ulici Na Šabatce, u jezdeckého areálu na statku Šabatka nebo u železniční zastávky Praha-Komořany. Klíče zabouchnuté v kufru, vybitá baterie v ovladači nebo zamrzlý zámek po noci u řeky – to vše vyřešíme na místě u auta jakékoli značky a cenu vám řekneme předem."
    ],
    hotspots: ["Český hydrometeorologický ústav", "Statek Šabatka", "Zastávka Praha-Komořany", "Komořanská ulice", "Autobusová zastávka Komořany"],
    tip: "Vyrážíte-li od auta v Komořanech na kolo podél Vltavy, dejte klíč do kapsy na zip nebo do brašny. Klíček vypadlý cestou se na dlouhém úseku u řeky hledá velmi těžko.",
    faq: {
      question: "Najdete auto, které stojí u zahrádkářské osady mimo Komořanskou ulici?",
      answer: "Ano, dojedeme i na hůře přístupná místa. Popište nám, ze které ulice je potřeba odbočit a kde přesně vůz stojí, případně na technika počkejte u Komořanské. Auto pak otevřeme bez poškození."
    }
  },
  {
    slug: "praha-13",
    name: "Praha 13",
    locative: "v Praze 13",
    region: "praha",
    geo: [50.0607, 14.3196],
    parts: ["Stodůlky", "Řepy"],
    headline: "sídliště ve Stodůlkách a v Řepách",
    intro: [
      "Stodůlky jsou srdcem Jihozápadního Města – sídliště Lužiny a Nové Butovice, stanice metra Stodůlky, Lužiny i Hůrka a stále rostoucí Západní Město. V Praze 13 otevíráme auta před paneláky, na parkovištích u metra i u Galerie Butovice. Stačí chvilka nepozornosti, když z auta vystupují děti nebo vykládáte nákup, a klíč zůstane za zabouchnutými dveřmi.",
      "Sídliště v Řepách vyrostlo v 80. letech pro zhruba dvacet tisíc obyvatel a auta tu stojí podél ulic i u obchodního centra v Makovského ulici. Zajímavost na okraj: právě v Řepách se za první republiky vyráběly známé visací zámky JASO. My se dnes staráme o zámky aut – otevíráme je šetrně a bez poškození, klidně i v neděli večer."
    ],
    hotspots: ["Galerie Butovice", "P+R Nové Butovice", "Centrální park Stodůlky", "Obchodní centrum Řepy", "Sluneční náměstí"],
    tip: "Máte-li náhradní klíč doma v bytě na sídlišti, zkuste nejdřív zjistit, jestli vám ho někdo z rodiny nebo sousedů nemůže donést. Když to nejde nebo je klíč v autě jediný, rádi přijedeme.",
    faq: {
      question: "Otevřete auto na parkovišti u Galerie Butovice i v neděli večer?",
      answer: "Ano, jezdíme nonstop včetně víkendů a svátků. Při volání nám popište, u kterého vchodu do obchodního centra nebo v jaké části parkoviště auto stojí. Otevření proběhne bez poškození, ať máte jakoukoli značku vozu."
    }
  },
  {
    slug: "praha-14",
    name: "Praha 14",
    locative: "v Praze 14",
    region: "praha",
    geo: [50.0989, 14.5617],
    parts: ["Černý Most", "Hostavice"],
    headline: "nákupní zóna, IKEA a P+R Černý Most",
    intro: [
      "Černý Most je konečnou stanicí metra B a zároveň rozlehlou nákupní zónou – Centrum Černý Most s hypermarketem Globus, IKEA a XXXLutz stojí kousek od sebe. Při nakládání nábytku nebo plného vozíku klíč snadno odložíte do kufru a víko pak zabouchnete. V Praze 14 takové auto otevřeme přímo na parkovišti, bez poškození, a kolik to bude stát, víte předem.",
      "Řada řidičů z východu Prahy nechává auto na P+R Černý Most nebo Rajská zahrada a do centra pokračuje metrem. Otevíráme také na sídlištích Černý Most I a II, podél Chlumecké ulice i v klidnějších Hostavicích u zámeckého parku. I pozdě večer přijedeme k osobnímu autu, dodávce z půjčovny i vozu s bezklíčovým přístupem."
    ],
    hotspots: ["Centrum Černý Most", "IKEA Černý Most", "P+R Černý Most", "P+R Rajská zahrada", "Autobusový terminál Černý Most", "Zámek Hostavice"],
    tip: "Zjistíte-li až večer po návratu z centra, že klíč zůstal zamčený v autě na P+R Černý Most, nečekejte do rána a zavolejte hned. Jezdíme nonstop a na prázdném večerním parkovišti vás technik najde snadno.",
    faq: {
      question: "Zamkl jsem klíče v dodávce z půjčovny při nakládání nábytku na Černém Mostě. Otevřete ji?",
      answer: "Ano. Dodávky všech značek otevíráme bez poškození, takže při vracení vozu nemusíte půjčovně vysvětlovat škrábance ani poškozené těsnění. Řekněte nám, jestli stojíte u IKEA, nebo u Centra Černý Most – obě parkoviště jsou rozlehlá."
    }
  },
  {
    slug: "praha-15",
    name: "Praha 15",
    locative: "v Praze 15",
    region: "praha",
    geo: [50.0503, 14.5585],
    parts: ["Hostivař", "Horní Měcholupy", "Dolní Měcholupy", "Petrovice", "Dubeč"],
    headline: "přehrada, sídliště a průmyslová zóna Hostivaře",
    intro: [
      "Hostivař spojuje staré vesnické jádro, sídliště Košík a Hornoměcholupská i rozsáhlou průmyslovou oblast s autoservisy, sklady a firmami. Ve všední dny tu pomáháme řidičům dodávek a služebních aut, o víkendech zase výletníkům, kteří vyrazili k Hostivařské přehradě a do lesoparku. Do Prahy 15 jezdíme i o víkendech a svátcích a zámek ani lak nepoškodíme.",
      "Na sídlišti Horní Měcholupy-Petrovice se parkuje v ulicích jako Milánská nebo Boloňská, v Dolních Měcholupech zase podél Kutnohorské. Zajíždíme i do Dubče k Dubečskému špýcharu a k rybníkům Lítožnice. Zabouchnuté klíče, zaseknutý zámek i vybitý ovladač řešíme na místě a cenu vám řekneme ještě před začátkem práce."
    ],
    hotspots: ["Hostivařská přehrada", "Obchodní centrum Park Hostivař", "Nádraží Praha-Hostivař", "Sídliště Košík", "Zastávka Praha-Horní Měcholupy"],
    tip: "Před procházkou po lesoparku u Hostivařské přehrady neschovávejte klíč pod kolo, za blatník ani na pneumatiku. Tato místa zloději dobře znají a přijít o auto je horší než o pár minut čekání na otevření.",
    faq: {
      question: "Otevřete auto, které nechávám u Hostivařské přehrady během výletu?",
      answer: "Ano. U přehrady se parkuje na více místech, proto nám řekněte, u které části nádrže nebo lesoparku auto stojí. Technik vůz otevře bez poškození, i když jde o model s bezklíčovým přístupem."
    }
  },
  {
    slug: "praha-16",
    name: "Praha 16",
    locative: "v Praze 16",
    region: "praha",
    geo: [49.9838, 14.3783],
    parts: ["Radotín", "Velká Chuchle", "Zbraslav", "Lahovice", "Lipence"],
    headline: "soutok řek, dostihy a výlety k Berounce",
    intro: [
      "Okolí soutoku Vltavy s Berounkou láká k výletům, a proto tu zabouchnuté klíče kazí hlavně volné dny. V Praze 16 otevíráme auta na parkovišti u závodiště ve Velké Chuchli, v Radotíně u nádraží, u přírodního koupaliště Biotop i v ulicích kolem náměstí Sv. Petra a Pavla. Přijedeme i o víkendu a dveře otevřeme bez páčení.",
      "Majitelům osobních aut i dodávek pomáháme také na Zbraslavi kolem zámku a náměstí, v Lahovicích u mimoúrovňové křižovatky Strakonické s Pražským okruhem i u chatových osad v Lipencích. Je jedno, jestli klíč zůstal v kabině, nebo v kufru – zámek ani elektroniku nepoškodíme a cenu znáte předem."
    ],
    hotspots: ["Závodiště Velká Chuchle", "Biotop Radotín", "P+R Radotín", "Zbraslavské náměstí", "Zookoutek Malá Chuchle"],
    tip: "Závodiště ve Velké Chuchli bylo při povodních v letech 2002 a 2013 zcela zaplavené. Při vysokých stavech Berounky a Vltavy proto neparkujte v nízko položených místech u řeky.",
    faq: {
      question: "Otevřete auto na parkovišti u závodiště ve Velké Chuchli v den dostihů?",
      answer: "Ano. Při dostizích bývá v okolí závodiště rušno, proto nám při volání popište, na kterém parkovišti nebo v jaké ulici stojíte, třeba v Dostihové. Auto pak otevřeme bez poškození."
    }
  },
  {
    slug: "praha-17",
    name: "Praha 17",
    locative: "v Praze 17",
    region: "praha",
    geo: [50.0322, 14.3125],
    parts: ["Řeporyje"],
    headline: "vesnické jádro, Dalejské údolí a sjezd Ořech",
    intro: [
      "Řeporyje na jihozápadním okraji Prahy mají vesnické jádro kolem Řeporyjského náměstí, nové rodinné domy na severu a na západě průmyslovou zónu, nad kterou se tyčí velké obilné silo. Zamknete-li si tu klíč v autě, přijedeme nonstop a vůz otevřeme bez poškození.",
      "V Řeporyjích začíná Dalejské údolí, kam se vyráží na procházky i na kolo, a Poncarovou ulicí se odsud rychle dostanete do Stodůlek. Otevíráme auta u nádraží Praha-Řeporyje s vlaky linky S6, u firem v průmyslové zóně i před domy. Jižním okrajem vede Pražský okruh a zdejší křižovatka nese název Ořech, přestože katastrálně patří k Řeporyjím."
    ],
    hotspots: ["Řeporyjské náměstí", "Nádraží Praha-Řeporyje", "Průmyslová zóna Řeporyje", "Dalejské údolí", "Poncarova ulice"],
    tip: "Pokud stojíte u sjezdu z Pražského okruhu u Řeporyj, řekněte nám, že jde o křižovatku Ořech na straně Řeporyj. Předejdete tak tomu, aby technik podle názvu mířil do obce Ořech za hranicí Prahy.",
    faq: {
      question: "Otevřete auto zaparkované u vstupu do Dalejského údolí, když jsem klíče ztratil na procházce?",
      answer: "Ano. Auto otevřeme bez poškození, abyste se dostali k věcem uvnitř a mohli si zajistit náhradní klíč. Při volání uveďte, jestli stojíte u Řeporyjského náměstí, u nádraží, nebo na jiném místě na začátku údolí."
    }
  },
  {
    slug: "praha-18",
    name: "Praha 18",
    locative: "v Praze 18",
    region: "praha",
    geo: [50.1436, 14.518],
    parts: ["Letňany", "Čakovice"],
    headline: "výstaviště, letiště a metro v Letňanech",
    intro: [
      "V Letňanech najdete panelové sídliště, letiště, výstaviště PVA i hypermarkety na západním okraji čtvrti. U konečné stanice metra C stojí vícepodlažní P+R, kde nechávají auta lidé, kteří dojíždějí do centra. Když tu klíč zůstane zamčený uvnitř, přijedeme do Prahy 18 i v noci a vůz otevřeme, aniž bychom poškodili dveře nebo elektroniku.",
      "V Čakovicích otevíráme auta u zámku, v areálu bývalého cukrovaru i u nádraží, odkud se jezdí vlakem do centra. Při nakládání nákupu či sportovní výbavy nebo při usazování dětí se klíč snadno ocitne uvnitř a dveře se zamknou. Otevřeme auta všech značek včetně dodávek a cenu znáte ještě před zásahem."
    ],
    hotspots: ["P+R Letňany", "Obchodní centrum Letňany", "Výstaviště PVA Letňany", "Letiště Letňany", "Zámek Čakovice", "Nádraží Praha-Čakovice"],
    tip: "Obchody v nákupní zóně v Letňanech stojí nedaleko od sebe a každý má vlastní parkoviště. Při volání proto řekněte, u kterého obchodu vůz stojí, ať technik nekrouží po celé nákupní zóně.",
    faq: {
      question: "Otevřete auto u výstaviště PVA v Letňanech během veletrhu nebo koncertu?",
      answer: "Ano. Při velkých akcích bývají parkoviště kolem výstaviště zaplněná, proto nám řekněte, u kterého vstupu jste parkovali. Technik vás najde a auto otevře bez poškození, nonstop i po skončení večerního programu."
    }
  },
  {
    slug: "praha-19",
    name: "Praha 19",
    locative: "v Praze 19",
    region: "praha",
    geo: [50.1656, 14.4833],
    parts: ["Březiněves"],
    headline: "rodinné domy u Cínovecké a cesty na D8",
    intro: [
      "Březiněves je klidná čtvrť rodinných domů na severním okraji Prahy. Vede kolem ní Cínovecká ulice, část Prosecké radiály, která u hranice Prahy u Zdib přechází v dálnici D8. Zabouchnete-li si klíče v autě před domem, na návsi nebo u fotbalového hřiště, přijedeme kdykoli a vůz otevřeme bez poškození.",
      "Na mimoúrovňovou křižovatku s Ďáblickou ulicí mezi Březiněvsí a Ďáblicemi se má v budoucnu napojit Pražský okruh. V sezoně láká návštěvníky místní rekreační rybník a přes most s cyklotrasou se dostanete do Zdib. Otevíráme osobní auta i dodávky všech značek, poradíme si s keyless systémy a cenu vám řekneme předem."
    ],
    hotspots: ["Rekreační rybník Březiněves", "Náves Březiněves", "Fotbalové hřiště Březiněves", "Ulice Na Hlavní", "Úřad městské části Březiněves"],
    tip: "Jdete-li se v létě koupat k březiněveskému rybníku, nenechávejte klíč ani telefon zamčené v autě. Když se dveře zabouchnou, zůstane vám jen to, co máte u sebe – a bez telefonu se pomoc shání těžko.",
    faq: {
      question: "Kde mám na technika v Březiněvsi počkat, když auto stojí mimo zástavbu?",
      answer: "Nejlépe u snadno dohledatelného bodu, třeba u úřadu městské části v ulici U Parku nebo u fotbalového hřiště. Odtud technika k vozu dovedete. Otevření pak proběhne bez poškození."
    }
  },
  {
    slug: "praha-20",
    name: "Praha 20",
    locative: "v Praze 20",
    region: "praha",
    geo: [50.1003, 14.594],
    parts: ["Horní Počernice", "Dolní Počernice"],
    headline: "logistické areály, Chvaly a Počernický rybník",
    intro: [
      "Horní Počernice jsou ze tří stran obklopené dálnicemi D0, D10 a D11 a vedle klidných ulic s rodinnými domy tu najdete logistické areály i obchodní zóna u Chlumecké. V Praze 20 otevíráme auta před domy ve Chvalech či Svépravicích, dodávky kurýrů v logistickém parku i vozy zákazníků Makra, Hornbachu a Sconta.",
      "Dolní Počernice leží na Českobrodské ulici, silnici I/12 směrem na Kolín, a jejich okolí láká k procházkám kolem Počernického rybníka a zámku. Klíče zabouchnuté ve voze na výletě nebo cestou z práce vyřešíme i v noci: auto otevřeme bez poškození zámku i těsnění a cenu vám řekneme dřív, než začneme."
    ],
    hotspots: ["Chvalský zámek", "Nádraží Praha-Horní Počernice", "Obchodní zóna u Chlumecké", "P3 Prague Horní Počernice", "Počernický rybník", "Zámek Dolní Počernice"],
    tip: "Obchody Makro, Hornbach a Sconto u stanice metra Černý Most leží už v Horních Počernicích a každý má vlastní parkoviště. Při volání vám stačí říct název obchodu – adresu nemusíte složitě dohledávat.",
    faq: {
      question: "Otevřete dodávku kurýra v logistickém areálu v Horních Počernicích?",
      answer: "Ano. Dodávky otevíráme bez poškození a víme, že při rozvozu tlačí čas. Pokud vůz stojí za závorou nebo u rampy, domluvte technikovi vjezd s ostrahou areálu, ať se k autu dostane co nejdřív."
    }
  },
  {
    slug: "praha-21",
    name: "Praha 21",
    locative: "v Praze 21",
    region: "praha",
    geo: [50.0791, 14.6466],
    parts: ["Běchovice", "Klánovice", "Koloděje", "Újezd nad Lesy"],
    headline: "lesy, vlakové zastávky a běh Běchovice–Praha",
    intro: [
      "Východní okraj Prahy tvoří Běchovice, Koloděje, Újezd nad Lesy a Klánovice – čtvrti rodinných domů, zahrad a lesů. Klánovický les patří s Cyrilovem k největším lesním celkům na území Prahy, a tak sem míří houbaři, běžci i rodiny s dětmi. Kdo si při tom zamkne klíče v autě nebo je ztratí cestou, nemusí čekat do rána: v Praze 21 jezdíme nonstop.",
      "V Běchovicích otevíráme auta u nádraží i u zastávky Praha-Běchovice střed, kde jsou parkoviště P+R. Jezdíme také do Újezda nad Lesy ke Starokolínské a k sídlišti a do Koloděj k zámku s oborou. Zámek ani lak nepoškodíme, ať máte auto jakékoli značky, dodávku, nebo vůz s bezklíčovým přístupem."
    ],
    hotspots: ["P+R Běchovice", "P+R Běchovice střed", "Nádraží Praha-Klánovice", "Klánovický les", "Starokolínská ulice", "Zámek Koloděje"],
    tip: "Začátkem podzimu startuje v Běchovicích tradiční běh Běchovice–Praha. V den závodu počítejte s omezením dopravy a při volání nám řekněte, z které strany se k vašemu autu dá dojet.",
    faq: {
      question: "Otevřete auto u nádraží v Klánovicích nebo na P+R v Běchovicích večer po návratu z práce?",
      answer: "Ano, jezdíme nonstop, takže i pozdě večer. Řekněte nám, u kterého nádraží nebo parkoviště stojíte a jak auto vypadá. Cenu vám sdělíme ještě předtím, než technik začne."
    }
  },
  {
    slug: "praha-22",
    name: "Praha 22",
    locative: "v Praze 22",
    region: "praha",
    geo: [50.0224, 14.6087],
    parts: ["Uhříněves", "Pitkovice", "Kolovraty", "Benice", "Křeslice", "Nedvězí", "Královice"],
    headline: "jihovýchodní okraj s Uhříněvsí a Kolovraty",
    intro: [
      "Uhříněves je přirozeným centrem jihovýchodu Prahy: nádraží s vlaky do centra, Nové náměstí s obchody a radnicí a ulice Přátelství, kudy proudí hustý provoz směrem na Říčany. U nádraží nechávají auta lidé, kteří pokračují vlakem, a zabouchnutý klíč dokáže ranní cestu pořádně zkomplikovat. Do Prahy 22 přijedeme ve dne i v noci a auto otevřeme bez poškození.",
      "Jezdíme i do Kolovrat se zastávkou na trati do Benešova, do rostoucích Pitkovic, do Křeslic v přírodním parku Botič-Milíčov a do menších Benic, Nedvězí a Královic. U rodinných domů, na polních cestách i u rybníků otevíráme auta všech značek – osobní vozy, dodávky i modely s keyless systémem. Cenu vám vždy řekneme dopředu."
    ],
    hotspots: ["Nádraží Praha-Uhříněves", "Nové náměstí v Uhříněvsi", "Ulice Přátelství", "Zastávka Praha-Kolovraty", "Nová zástavba v Pitkovicích"],
    tip: "Ulicí Přátelství v Uhříněvsi projíždí hodně aut i kamionů. Pokud se vám zamkne vůz zaparkovaný přímo u ní, čekejte na technika na chodníku nebo v boční ulici, ne u dveří na straně vozovky.",
    faq: {
      question: "Zabouchl jsem klíče v autě v nové zástavbě v Pitkovicích, kterou navigace nezná. Najdete mě?",
      answer: "Ano. Uveďte nejbližší známou ulici, třeba Žampionovou nebo K Dálnici, a popište, kudy k autu dojet. Pomůže i orientační bod jako zastávka autobusu. Vůz pak otevřeme bez poškození."
    }
  }
];
