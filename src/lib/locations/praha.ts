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
      "Otevíráme auta u Národního divadla, v okolí Masarykova nádraží, v garážích u Palladia i v uličkách pod Pražským hradem. Postupujeme šetrně, bez poškození dveří, těsnění a elektroniky, takže po zásahu v Praze 1 můžete hned pokračovat v cestě – ať jde o osobní vůz, dodávku, nebo auto s bezklíčovým vstupem."
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
      "Na Vinohradech se parkuje v hustě obsazených ulicích a volné místo poblíž domu se často hledá dlouho. Když pak klíček zůstane ležet na sedadle nebo auto po noci venku přestane reagovat na dálkové ovládání, nechcete ho opouštět. V Praze 2 otevíráme osobní vozy i dodávky bez poškození dveří a zámků, ať stojí u náměstí Míru, pod Riegrovými sady, nebo ve svahu nad Nuselským údolím.",
      "V Nuslích a pod Vyšehradem přijíždíme k autům, jejichž řidiči jen na chvíli odběhli – do kanceláře, na procházku po hradbách nebo na akci v Kongresovém centru Praha. Zabouchnutý kufr, vybitá baterie v klíči nebo zaseknuté centrální zamykání se dají vyřešit přímo na místě. Cenu vám řekneme předem a pracujeme nonstop, takže volat můžete i po půlnoci."
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
      "Žižkov je čtvrť úzkých a strmých ulic, kde auta stojí nárazník na nárazníku podél činžovních domů a přes noc zůstávají venku. V zimě jim zamrzají zámky a vybitá baterie v klíči se ozve zrovna ve chvíli, kdy spěcháte do práce. Autozámečník v Praze 3 k vám přijede nonstop a dveře otevře šetrně, bez páčení a bez poškrábaného laku.",
      "Pomáháme řidičům v okolí Olšanských hřbitovů, pod Žižkovským vysílačem, u stadionu Viktorie i u Vysoké školy ekonomické. Zabouchnuté klíče v kufru, porucha centrálního zamykání nebo ztracený klíček od služební dodávky – na Žižkově i na Vítkově vůz otevřeme přímo na ulici a cenu sdělíme ještě před zásahem."
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
      "Praha 4 se táhne od Podolí a Braníku u Vltavy přes kanceláře na Brumlovce v Michli až k sídlištím v Modřanech, na Libuši a v Písnici. Ať vám klíče zůstaly v autě na parkovišti před panelákem, nebo v podzemní garáži obchodního centra, přijedeme a vůz otevřeme bez poškození – starší hatchback stejně jako SUV s bezklíčovým přístupem.",
      "U nemocnic v Krči, Fakultní Thomayerovy nemocnice a IKEM, se z auta vystupuje ve spěchu a klíč snadno zůstane uvnitř. Stejně nepříjemné je zabouchnout kufr na parkovišti Westfield Chodov, u plaveckého stadionu v Podolí nebo pod Kunratickým lesem. Nonstop jezdíme po celé Praze 4, cenu sdělíme předem a otevřeme všechny značky včetně dodávek."
    ],
    hotspots: ["Westfield Chodov", "Fakultní Thomayerova nemocnice", "IKEM", "Plavecký stadion Podolí", "BB Centrum Brumlovka", "Obchodní centrum Novo Plaza"],
    tip: "Parkoviště P+R Chodov je v podzemních podlažích Westfield Chodov. Než odejdete k metru, vyfoťte si číslo podlaží a označení sektoru – v rozlehlé garáži to technikovi výrazně usnadní hledání vozu.",
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
      "Smíchov kolem Anděla patří k nejrušnějším místům na levém břehu Vltavy. Auta tu stojí v podzemních garážích obchodního centra Nový Smíchov, u kancelářských budov i v zónách placeného stání. Stačí vytáhnout tašky z kufru, zabouchnout víko a klíč zůstane uvnitř. V Praze 5 takový vůz otevřeme šetrně, bez poškození zámku, těsnění i elektroniky.",
      "Na sídlišti Barrandov, v Jinonicích nebo v Košířích se parkuje hlavně před domy, v Motole zase kolem rozlehlého areálu nemocnice. Jezdíme i do klidnějšího Slivence a Holyně, k Lochkovu u Pražského okruhu nebo až do Sobína na západním okraji Prahy. Nonstop otevíráme osobní auta, dodávky i vozy s keyless systémem a cenu řekneme ještě před zahájením práce."
    ],
    hotspots: ["Nákupní centrum Nový Smíchov", "Nemocnice Motol", "Nemocnice Na Homolce", "Nádraží Praha-Smíchov", "Sídliště Barrandov", "P+R Kotlářka"],
    tip: "Nezkoušejte auto zamčené na parkovišti u nemocnice v Motole ani kdekoli jinde otevírat drátem nebo pravítkem. Snadno poškodíte těsnění, táhla zámku nebo kabeláž ve dveřích, a oprava pak zabere víc času než samotné otevření.",
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
      "Letiště Václava Havla leží v Ruzyni, a tak do Prahy 6 jezdíme i k autům, u kterých klíč zůstal v kufru mezi zavazadly nebo baterie v ovladači vypověděla službu přesně po návratu z dovolené. Otevíráme vozy na letištních parkovištích, u obchodního centra Šestka i na P+R Nádraží Veleslavín, odkud lidé pokračují metrem do centra.",
      "V Dejvicích, Bubenči a Střešovicích se parkuje v zónách placeného stání, v Břevnově bývá plno kolem Ústřední vojenské nemocnice a Strahovského stadionu. Vyjíždíme také za výletníky k Divoké Šárce a oboře Hvězda nebo do Suchdolu a Lysolají. Auto v Praze 6 otevřeme bez poškození, nonstop a s cenou řečenou předem."
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
      "Holešovice se v posledních desetiletích proměnily z průmyslového předměstí ve čtvrť kanceláří, bytů a kulturních akcí. Auta stojí u Pražské tržnice, v okolí Výstaviště, na Letné i u nádraží Holešovice, kde řada řidičů přesedá na metro. Když vám klíče zůstanou zamčené ve voze, přijedeme do Prahy 7 nonstop a auto otevřeme bez poškození dveří a elektroniky.",
      "V Troji otevíráme auta výletníků u Zoo Praha, kde se parkuje na parkovištích podél Vltavy, i u botanické zahrady a Trojského zámku. Po celodenní procházce s dětmi se klíč snadno zamkne v kufru spolu s taškou nebo kočárkem. Poradíme si s osobními vozy, dodávkami i auty s bezklíčovým přístupem a cenu vám sdělíme ještě před zásahem."
    ],
    hotspots: ["Zoo Praha", "P+R Troja", "Výstaviště Praha", "Pražská tržnice", "P+R Nádraží Holešovice", "Stadion Sparty na Letné"],
    tip: "Na zápas na Letné nebo koncert na Výstavišti nenechávejte klíč v bundě, kterou odložíte v autě. Po skončení akce bývá okolí plné lidí i aut a čekání u zamčeného vozu je zbytečně nepříjemné.",
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
      "Karlín dnes žije kancelářemi, restauracemi a novými byty a volné místo k zaparkování se tu hledá těžko. Když ho konečně najdete a klíčky pak zůstanou za zabouchnutými dveřmi, nechcete ztrácet čas ani riskovat pokutu. V Praze 8 otevíráme auta u Fora Karlín, kolem Křižíkovy ulice i u autobusového nádraží Florenc, kde řidiči často jen vyzvedávají cestující.",
      "Severněji, na sídlištích Kobylisy, Ďáblice a Bohnice, stojí auta v dlouhých řadách před domy a v zimě tu nejsou výjimkou zamrzlé zámky. Pomáháme také u Fakultní nemocnice Bulovka v Libni, u Psychiatrické nemocnice Bohnice nebo u Bauhausu v Dolních Chabrech. Přijedeme nonstop, pracujeme bez poškození a otevřeme všechny značky."
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
      "Po koncertu nebo zápase v O2 areně se k autům vrací tisíce lidí najednou a ve spěchu se snadno stane, že klíč zůstane ve voze nebo se ztratí v davu. Otevíráme auta u Galerie Harfa, podél Kolbenovy ulice ve Vysočanech i na sídlišti Prosek kolem Parku přátelství. V Praze 9 přijedeme nonstop, i když je půlnoc a parkoviště se vyprazdňují.",
      "Dále na východ a sever jezdíme do Hloubětína, Kyjí a Hrdlořez, do Kbel s Leteckým muzeem i do Satalic, Vinoře a Čakovic. Otevíráme tu firemní dodávky v průmyslových areálech, auta před rodinnými domy i vozy výletníků u Kyjského rybníka. Zámek ani lak nepoškodíme a cenu vám sdělíme ještě předtím, než začneme."
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
      "Ve Vršovicích se parkuje v hustých ulicích se zónami placeného stání a kolem náměstí Svatopluka Čecha nebo Kubánského náměstí je každé volné místo vzácné. Zapomenutý klíč v zapalování, zabouchnutý kufr nebo zaseknuté centrální zamykání tu řešíme přímo na ulici. V Praze 10 otevíráme auta nonstop a bez poškození, ať jde o malé městské auto, nebo o firemní dodávku.",
      "Ve dnech zápasů se ulice kolem Fortuna Areny v Edenu a Ďolíčku rychle zaplní a řidiči spěchají, aby stihli výkop. Ve Štěrboholech na východě zase lidé nakupují v Europarku a Fashion Areně, další nechávají auta na P+R Skalka a Depo Hostivař ve Strašnicích. Přijedeme i do Záběhlic, Zahradního Města a Malešic – cenu vám řekneme ještě před otevřením."
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
      "Háje tvoří velkou část Jižního Města – panelové domy, dlouhé řady aut před vchody a konečná stanice metra C, kde lidé přestupují z autobusů. Stačí ráno ve spěchu zabouchnout dveře s klíčem na sedadle a celý den se zkomplikuje. Na Hájích otevíráme osobní auta i dodávky přímo na parkovištích sídliště, šetrně a bez poškození zámků.",
      "Šeberov s Hrnčíři má úplně jiný ráz: rodinné domy, rybníky a na východním okraji dálnice D1. V létě sem lidé míří k Šeberáku, jehož břeh tvoří hranici s Kunraticemi, a klíč od auta se na dece u vody ztratí snadněji, než by čekali. V Praze 11 přijedeme nonstop, otevřeme všechny značky a cenu sdělíme předem."
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
      "Komořany na jižním okraji Prahy leží mezi pravým břehem Vltavy a lesy přírodního parku Modřanská rokle – Cholupice. Hlavní osou je Komořanská ulice, kudy se jezdí k firmám, rodinným domům i zahrádkářským osadám. Když vám tu klíče zůstanou zamčené v autě, nemusíte nic páčit ani rozbíjet okno: v Praze 12 přijedeme nonstop a vůz otevřeme bez poškození.",
      "Otevíráme auta zaměstnanců i návštěv u Českého hydrometeorologického ústavu v ulici Na Šabatce, u jezdeckého areálu na statku Šabatka nebo u železniční zastávky Praha-Komořany. Klíče zabouchnuté v kufru, vybitá baterie v ovladači nebo zamrzlý zámek po noci u řeky – vše řešíme na místě, cenu sdělíme předem a poradíme si se všemi značkami."
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
      "Stodůlky jsou srdcem Jihozápadního Města – sídliště Lužiny a Nové Butovice, stanice metra Stodůlky, Lužiny i Hůrka a stále rostoucí Západní Město. V Praze 13 otevíráme auta před paneláky, na parkovištích u metra i u Galerie Butovice. Stačí chvilka nepozornosti při vykládání dětí nebo nákupu a klíč zůstane za zabouchnutými dveřmi.",
      "Sídliště v Řepách vyrostlo v 80. letech pro zhruba dvacet tisíc obyvatel a auta tu stojí podél ulic i u obchodního centra v Makovského ulici. Zajímavost na okraj: právě v Řepách se za první republiky vyráběly známé visací zámky JASO. S moderními zámky aut si poradíme stejně šetrně – bez poškození, nonstop a s cenou sdělenou předem."
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
      "Černý Most je konečnou metra B a zároveň rozlehlou nákupní zónou – Centrum Černý Most s hypermarketem Globus, IKEA a XXXLutz stojí kousek od sebe. Při nakládání nábytku nebo plného vozíku se klíč snadno odloží do kufru a víko se zabouchne. V Praze 14 takové auto otevřeme přímo na parkovišti, bez poškození a za cenu sdělenou předem.",
      "Řada řidičů z východu Prahy nechává auto na P+R Černý Most nebo Rajská zahrada a do centra pokračuje metrem. Otevíráme také na sídlištích Černý Most I a II, podél Chlumecké ulice i v klidnějších Hostavicích u zámeckého parku. Nonstop přijedeme k osobnímu autu, k dodávce z půjčovny i k vozu s bezklíčovým přístupem."
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
      "Hostivař spojuje staré vesnické jádro, sídliště Košík a Hornoměcholupská i rozsáhlou průmyslovou oblast s autoservisy, sklady a firmami. Ve všední dny tu pomáháme řidičům dodávek a služebních aut, o víkendech zase výletníkům, kteří vyrazili k Hostivařské přehradě a do lesoparku. V Praze 15 přijedeme nonstop a auto otevřeme bez poškození zámku i laku.",
      "Na sídlišti Horní Měcholupy-Petrovice se parkuje v ulicích jako Milánská nebo Boloňská, v Dolních Měcholupech zase podél Kutnohorské. Zajíždíme i do Dubče k Dubečskému špýcharu a k rybníkům Lítožnice. Ať jde o zabouchnuté klíče, zaseknutý zámek, nebo vybitý ovladač, cenu vám řekneme ještě před zahájením práce."
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
      "Okolí soutoku Vltavy s Berounkou je oblíbeným cílem výletů, a zabouchnuté klíče tu tak často kazí právě volné dny. V Praze 16 otevíráme auta na parkovišti u závodiště ve Velké Chuchli, v Radotíně u nádraží, u přírodního koupaliště Biotop i v ulicích kolem náměstí Sv. Petra a Pavla. Přijedeme nonstop a dveře otevřeme bez páčení.",
      "Na Zbraslavi kolem zámku a náměstí, v Lahovicích u mimoúrovňové křižovatky Strakonické s Pražským okruhem i u chatových osad v Lipencích pomáháme majitelům osobních aut i dodávek. Vůz otevřeme bez poškození zámku a elektroniky, ať je klíč zamčený v kabině, nebo v kufru, a cenu vám sdělíme předem."
    ],
    hotspots: ["Závodiště Velká Chuchle", "Biotop Radotín", "P+R Radotín", "Zbraslavské náměstí", "Zookoutek Malá Chuchle"],
    tip: "Závodiště ve Velké Chuchli bylo při povodních v letech 2002 a 2013 zcela zaplavené. Při vysokých stavech Berounky a Vltavy proto neparkujte v nízko položených místech u řeky.",
    faq: {
      question: "Otevřete auto na parkovišti u závodiště ve Velké Chuchli v den dostihů?",
      answer: "Ano. Při dostizích bývá v okolí závodiště rušno, proto nám při volání popište, na kterém parkovišti nebo v jaké ulici stojíte, třeba v Dostihové. Auto otevřeme bez poškození a cenu sdělíme předem."
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
      "Řeporyje leží na jihozápadním okraji Prahy. Mají vesnické jádro kolem Řeporyjského náměstí, nové rodinné domy na severu a průmyslovou zónu na západě, nad kterou se tyčí velké obilné silo. Když vám tu klíč zůstane zamčený v autě, přijedeme nonstop a vůz otevřeme bez poškození.",
      "Z Řeporyj začíná Dalejské údolí, kam se jezdí na procházky i na kolo, a Poncarovou ulicí se odsud rychle dostanete do Stodůlek. Otevíráme auta u nádraží Praha-Řeporyje s vlaky linky S6, u firem v průmyslové zóně i před domy. Jižním okrajem vede Pražský okruh a zdejší křižovatka nese název Ořech, přestože katastrálně patří k Řeporyjím."
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
      "Letňany kombinují panelové sídliště, letiště, výstaviště PVA a hypermarkety na západním okraji čtvrti. U konečné stanice metra C stojí vícepodlažní P+R, kde auto nechávají lidé dojíždějící do centra. Pokud vám tu klíč zůstane zamčený ve voze, v Praze 18 přijedeme nonstop a otevřeme ho bez poškození dveří i elektroniky.",
      "V Čakovicích otevíráme auta u zámku, v areálu bývalého cukrovaru i u nádraží, odkud se jezdí vlakem do centra. Při nakládání nákupu, dětí nebo sportovní výbavy se klíč snadno ocitne uvnitř a dveře se zamknou. Cenu vám sdělíme ještě před zásahem a otevřeme všechny značky včetně dodávek."
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
      "Březiněves je klidná čtvrť rodinných domů na severním okraji Prahy. Vede kolem ní Cínovecká ulice, část Prosecké radiály, která u hranice Prahy u Zdib přechází v dálnici D8. Když vám klíče zůstanou v autě před domem, na návsi nebo u fotbalového hřiště, přijedeme nonstop a vůz otevřeme bez poškození.",
      "Na mimoúrovňové křižovatce s Ďáblickou ulicí mezi Březiněvsí a Ďáblicemi se má v budoucnu napojit Pražský okruh. V sezoně láká k návštěvě místní rekreační rybník a přes most s cyklotrasou se dostanete do Zdib. Otevíráme osobní auta i dodávky všech značek, poradíme si s keyless systémy a cenu vám řekneme předem."
    ],
    hotspots: ["Rekreační rybník Březiněves", "Náves Březiněves", "Fotbalové hřiště Březiněves", "Ulice Na Hlavní", "Úřad městské části Březiněves"],
    tip: "Jdete-li se v létě koupat k březiněveskému rybníku, nenechávejte klíč ani telefon zamčené v autě. Když se dveře zabouchnou, zůstane vám jen to, co máte u sebe – a bez telefonu se pomoc shání těžko.",
    faq: {
      question: "Kde mám na technika v Březiněvsi počkat, když auto stojí mimo zástavbu?",
      answer: "Nejlépe u snadno dohledatelného bodu, třeba u úřadu městské části v ulici U Parku nebo u fotbalového hřiště. Odtud technika k vozu dovedete. Otevření proběhne bez poškození a cenu znáte předem."
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
      "Horní Počernice jsou ze tří stran obklopené dálnicemi D0, D10 a D11 a vedle klidných ulic s rodinnými domy tu fungují logistické areály i obchodní zóna u Chlumecké. V Praze 20 otevíráme auta před domy ve Chvalech či Svépravicích, dodávky kurýrů v logistickém parku i vozy zákazníků Makra, Hornbachu a Sconta.",
      "Dolní Počernice leží na Českobrodské ulici, silnici I/12 směrem na Kolín, a jejich okolí láká k procházkám kolem Počernického rybníka a zámku. Když si při výletu nebo cestou z práce zabouchnete klíče ve voze, přijedeme nonstop. Auto otevřeme bez poškození zámku i těsnění a cenu vám řekneme ještě předtím, než začneme."
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
      "V Běchovicích otevíráme auta u nádraží i u zastávky Praha-Běchovice střed, kde jsou parkoviště P+R, v Újezdě nad Lesy podél Starokolínské a u sídliště, v Kolodějích u zámku s oborou. Vůz otevřeme šetrně, bez poškození zámku a laku, u všech značek včetně dodávek a aut s bezklíčovým přístupem. Cenu vám sdělíme předem."
    ],
    hotspots: ["P+R Běchovice", "P+R Běchovice střed", "Nádraží Praha-Klánovice", "Klánovický les", "Starokolínská ulice", "Zámek Koloděje"],
    tip: "Začátkem podzimu startuje v Běchovicích tradiční běh Běchovice–Praha. V den závodu počítejte s omezením dopravy a při volání nám řekněte, z které strany se k vašemu autu dá dojet.",
    faq: {
      question: "Otevřete auto u nádraží v Klánovicích nebo na P+R v Běchovicích večer po návratu z práce?",
      answer: "Ano, jezdíme nonstop, takže i pozdě večer. Řekněte nám, u kterého nádraží nebo parkoviště stojíte a jak auto vypadá. Dveře otevřeme bez poškození a cenu sdělíme ještě předtím, než technik začne."
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
      "Uhříněves je přirozeným centrem jihovýchodu Prahy: nádraží s vlaky do centra, Nové náměstí s obchody a radnicí a ulice Přátelství, kterou projíždí silný provoz směrem na Říčany. U nádraží nechávají auta lidé, kteří pokračují vlakem, a zabouchnutý klíč dokáže ranní cestu pořádně zkomplikovat. V Praze 22 přijedeme nonstop a auto otevřeme bez poškození.",
      "Jezdíme i do Kolovrat se zastávkou na trati do Benešova, do rostoucích Pitkovic, do Křeslic v přírodním parku Botič-Milíčov a do menších Benic, Nedvězí a Královic. U rodinných domů, na polních cestách i u rybníků otevíráme osobní auta, dodávky a vozy s keyless systémem všech značek. Cenu vám vždy řekneme dopředu."
    ],
    hotspots: ["Nádraží Praha-Uhříněves", "Nové náměstí v Uhříněvsi", "Ulice Přátelství", "Zastávka Praha-Kolovraty", "Nová zástavba v Pitkovicích"],
    tip: "Ulicí Přátelství v Uhříněvsi projíždí hodně aut i kamionů. Pokud se vám zamkne vůz zaparkovaný přímo u ní, čekejte na technika na chodníku nebo v boční ulici, ne u dveří na straně vozovky.",
    faq: {
      question: "Zabouchl jsem klíče v autě v nové zástavbě v Pitkovicích, kterou navigace nezná. Najdete mě?",
      answer: "Ano. Uveďte nejbližší známou ulici, třeba Žampionovou nebo K Dálnici, a popište, kudy k autu dojet. Pomůže i orientační bod jako zastávka autobusu. Vůz pak otevřeme bez poškození."
    }
  }
];
