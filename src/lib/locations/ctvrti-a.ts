import type { Location } from "./types";

export const quartersA: Location[] = [
  {
    slug: "praha-stare-mesto",
    name: "Staré Město",
    locative: "na Starém Městě",
    region: "praha",
    district: "praha-1",
    geo: [50.0847, 14.4203],
    parts: [],
    headline: "mezi Kotvou, nábřežím a Betlémským náměstím",
    intro: [
      "Na Starém Městě se autem jezdí hlavně do garáží pod obchodním domem Kotva, na Smetanovo a Dvořákovo nábřeží nebo k Nemocnici Na Františku. Většina ostatních ulic patří chodcům, zásobování a rezidentům. Právě při rychlém vykládání u nábřeží nebo v garáži se často stane, že zaklapnete kufr a klíč zůstane uvnitř, případně že bezklíčový vůz nereaguje, protože se v ovladači vybila baterie.",
      "Přes Staroměstské náměstí se autem neprojede a mezi Haštalským náměstím a Betlémskou kaplí je spousta jednosměrek. Než vyrazíme, potřebujeme proto znát nejbližší roh ulice, číslo domu nebo podlaží garáží – trasu si pak naplánujeme ještě před odjezdem. Na místě otevřeme osobní vůz, taxi i dodávku, která rozváží zboží do obchodů, a dveře, zámek ani lak přitom nepoškodíme."
    ],
    hotspots: ["Garáže OD Kotva (vjezd z Králodvorské)", "Smetanovo nábřeží", "Dvořákovo nábřeží", "Nemocnice Na Františku", "Betlémské náměstí"],
    tip: "Do garáží pod Kotvou se vjíždí z Králodvorské ulice. Když se vám tam auto zamkne, poznamenejte si podlaží a číslo stání, technik vás pak najde bez bloudění mezi rampami.",
    faq: {
      question: "Dojedete i k autu, které stojí v ulici s omezeným vjezdem na Starém Městě?",
      answer: "Ano. Do úseků s omezeným vjezdem vjíždíme jen tam, kde to dopravní značení dovoluje, a zbytek cesty dojdeme s nářadím pěšky. Při volání nám popište, kudy jste do ulice přijeli, a řekněte nejbližší místo, kde může technik legálně zastavit."
    }
  },
  {
    slug: "praha-josefov",
    name: "Josefov",
    locative: "v Josefově",
    region: "praha",
    district: "praha-1",
    geo: [50.0903, 14.4194],
    parts: [],
    headline: "Pařížská a uličky kolem synagog",
    intro: [
      "Josefov je nejmenší pražské katastrální území – vejde se do několika bloků kolem Pařížské, Široké, Maiselovy a ulice 17. listopadu. Míst k zastavení je tu málo a velká část z nich patří rezidentům, takže řidiči většinou staví jen na chvíli: vysadit spolujezdce u Židovského muzea, vyzvednout nákup z butiku v Pařížské nebo počkat na někoho z kanceláře. Stačí okamžik nepozornosti a klíček zůstane ležet na sedadle zamčeného auta.",
      "Kolem Staronové a Španělské synagogy prochází celý den spousta lidí, proto u zamčeného vozu pracujeme klidně a bez rozruchu. Otevřeme luxusní sedan s bezklíčovým přístupem i menší auto, u kterého po dešti zlobí centrální zamykání. Pomůžeme také v garážích pod náměstím Jana Palacha u Rudolfina, které leží hned za hranicí Josefova na Starém Městě. Kolik zásah stojí, víte ještě předtím, než technik vyjede."
    ],
    hotspots: ["Pařížská ulice", "Maiselova ulice u Staronové synagogy", "Španělská synagoga ve Vězeňské ulici", "Uměleckoprůmyslové museum v ulici 17. listopadu", "Široká ulice"],
    tip: "V Josefově se spíš zastavuje než parkuje. I když vystupujete jen na minutu, vezměte klíč s sebou – některá auta se po zavření dveří zamknou sama.",
    faq: {
      question: "Otevřete auto zamčené v Pařížské ulici, když kolem prochází spousta lidí?",
      answer: "Ano. K otevření potřebujeme jen přístup ke dveřím, obvykle ze strany chodníku, a chodcům nepřekážíme. Při volání nám řekněte číslo domu nebo nejbližší křižovatku, třeba se Širokou ulicí, a popište barvu a značku vozu – v řadě drahých aut se tak technik neztratí."
    }
  },
  {
    slug: "praha-mala-strana",
    name: "Malá Strana",
    locative: "na Malé Straně",
    region: "praha",
    district: "praha-1",
    geo: [50.0881, 14.4039],
    parts: [],
    headline: "dlažba, tramvaje a uličky pod Hradem",
    intro: [
      "Malá Strana leží na svahu pod Pražským hradem a její ulice jsou úzké, dlážděné a často jednosměrné. Auta tu stojí podél Letenské, na Klárově, u Strakovy akademie nebo kolem Malostranského náměstí, kde se střídají rezidenti, úředníci a zásobování. Stačí vystoupit, kvůli projíždějící tramvaji rychle přibouchnout dveře – a klíč zůstane v zapalování nebo v držáku na nápoje.",
      "Dopoledne tu stojí dodávky řemeslníků, kteří opravují historické domy, večer auta hostů restaurací kolem Tržiště a Kampy. Ať jde o zamčenou dodávku s nářadím uvnitř, nebo o osobní auto s vybitým ovladačem, přijedeme a otevřeme ho přímo na dlažbě. Poradíme si s vozy všech značek včetně těch, které mají bezklíčové odemykání a citlivou elektroniku ve dveřích."
    ],
    hotspots: ["Klárov a stanice metra Malostranská", "Letenská ulice", "Malostranské náměstí", "Strakova akademie", "Karmelitská ulice"],
    tip: "Na Malé Straně je spousta úseků vyhrazených rezidentům a zásobování, kde se smí stát jen krátce. Pokud vám auto zůstane zamčené právě tam, řekněte nám to hned při volání, ať s tím technik počítá.",
    faq: {
      question: "Otevřete dodávku řemeslníka, která se zamkla při práci na malostranském domě?",
      answer: "Ano. Dodávku otevřeme bočními, zadními nebo předními dveřmi – podle modelu a podle toho, ke kterým se dá v úzké uličce dostat. Pokud stojí těsně u zdi nebo u lešení, řekněte nám při volání, které dveře jsou volné, a technik si podle toho připraví nářadí."
    }
  },
  {
    slug: "praha-nove-mesto",
    name: "Nové Město",
    locative: "na Novém Městě",
    region: "praha",
    district: "praha-1",
    geo: [50.0825, 14.4275],
    parts: [],
    headline: "od Národního muzea po Petrskou čtvrť",
    intro: [
      "Tato stránka patří severní části Nového Města, která leží v Praze 1. Jižní díl čtvrti spadá pod Prahu 2 a malý kousek u Florence pod Prahu 8. Hranice s Prahou 2 vede zhruba od Jiráskova mostu ulicemi Myslíkovou, Lazarskou a Žitnou, takže Karlovo náměstí už je za ní. Na naší straně zůstává Václavské náměstí s Národním muzeem, Jindřišská, Senovážné náměstí, Petrská čtvrť, Těšnov i Masarykovo nábřeží se Slovanským ostrovem.",
      "Pod řadou zdejších budov jsou garáže – třeba pod Quadriem, které stojí přímo nad stanicí metra Národní třída. Když vám v podzemí vůz s bezklíčovým přístupem nereaguje nebo zamkne klíč v kufru, stačí nám říct podlaží a sektor. Stejně tak vyjíždíme k autům zaparkovaným v ulicích kolem Senovážného a Petrského náměstí. Cenu otevření se dozvíte dřív, než technik sáhne na dveře."
    ],
    hotspots: ["Garáže Quadrio u stanice metra Národní třída", "Národní muzeum a horní část Václavského náměstí", "Senovážné náměstí", "Petrské náměstí", "Masarykovo nábřeží u Slovanského ostrova"],
    tip: "Na Masarykově nábřeží jezdí tramvaje a zastavit se tu dá jen na některých místech. Pokud vám auto zůstalo zamčené u Slovanského ostrova, řekněte nám, na které straně ulice stojí, ať technik ví, odkud přijet.",
    faq: {
      question: "Patří Karlovo náměstí ještě k Novému Městu v Praze 1?",
      answer: "Ne. Karlovo náměstí je sice součástí Nového Města, ale leží už v Praze 2 – hranice obvodů vede zhruba Myslíkovou, Lazarskou a Žitnou ulicí. Pro vás na tom nezáleží: auto otevřeme na obou stranách hranice, stačí nám říct přesnou adresu."
    }
  },
  {
    slug: "praha-hradcany",
    name: "Hradčany",
    locative: "na Hradčanech",
    region: "praha",
    district: "praha-1",
    geo: [50.0894, 14.3972],
    parts: [],
    headline: "Loreta, Strahov a cesta k Pražskému hradu",
    intro: [
      "Velkou část Hradčan zabírá Pražský hrad, zbytek čtvrti se dělí mezi Prahu 1 a Prahu 6. Řidiči sem přijíždějí hlavně Keplerovou ulicí k Pohořelci a Strahovskému klášteru, nebo Mariánskými hradbami a Jelení ulicí ke Královské zahradě. Kolem Loretánského náměstí a Černínského paláce parkují úředníci ministerstva, hosté hotelů i návštěvníci Lorety – a někteří se pak vracejí k autu, které nejde odemknout.",
      "Často nám odtud volají lidé, kteří po procházce Hradem zjistí, že klíč leží v zamčeném kufru, nebo že se v ovladači vybila baterie a auto nereaguje. Na Hradčanech je hodně pěších ploch, proto nám popište, u které brány, kostela nebo zastávky vůz stojí. Andrej nebo Artur pak zastaví co nejblíž, zbytek dojde pěšky a dveře otevře bez poškození zámku i laku."
    ],
    hotspots: ["Pohořelec", "Strahovský klášter", "Loretánské náměstí a Černínský palác", "Hradčanské náměstí", "Mariánské hradby u Královské zahrady"],
    tip: "Kdo parkuje u Strahovského kláštera a jde pěšky na Hrad a zpět, ujde pořádný kus cesty. Než zamknete, zkontrolujte, že klíč nezůstal v batohu nebo kočárku, který necháváte v kufru.",
    faq: {
      question: "Jak vám popsat místo, když stojíme u Pražského hradu a neznáme přesnou adresu?",
      answer: "Nejjednodušší je poslat polohu z mobilu. Jinak stačí orientační bod – Loreta, Strahovský klášter, tramvajová zastávka Pohořelec nebo vstup do Královské zahrady. Podle toho technik zvolí, odkud k vozu přijet, protože kolem Hradu je řada ulic jen pro pěší nebo s omezeným vjezdem."
    }
  },
  {
    slug: "praha-ujezd",
    name: "Újezd",
    locative: "na Újezdě",
    region: "praha",
    district: "praha-1",
    geo: [50.0828, 14.4045],
    parts: [],
    headline: "ulice pod Petřínem mezi Karmelitskou a Smíchovem",
    intro: [
      "Ulice Újezd patří k hlavním malostranským tepnám. Navazuje na Karmelitskou, kopíruje úpatí Petřína a končí na náměstí Kinských, které už leží na Smíchově. Jezdí po ní tramvaje, na křižovatce s Vítěznou se sjíždí provoz od mostu Legií a u dolní stanice lanové dráhy na Petřín se neustále střídají turisté. Místa k zastavení je tu pomálu, a když se u auta zabouchnou klíče, řešíte to přímo v rušném provozu.",
      "Pomáháme řidičům, kteří zaparkovali v okolí Hellichovy a vydali se pěšky na Petřín nebo do Seminářské zahrady, i těm, kdo jen vykládali zboží u obchodů na Újezdě. Otevřeme vůz s vybitým ovladačem, se zaseknutým centrálním zamykáním i auto, které se zamklo samo, když klíč zapadl pod sedadlo. Pracujeme s nářadím, které zámku, těsnění ani laku neublíží."
    ],
    hotspots: ["Ulice Újezd u tramvajové zastávky", "Dolní stanice lanové dráhy na Petřín", "Křižovatka Újezd a Vítězná", "Hellichova ulice", "Tyršův dům"],
    tip: "Na Újezdě jezdí tramvaje oběma směry, takže při volání uveďte, zda auto stojí na straně Petřína, nebo u domů naproti. Technik pak zastaví na správné straně a nebude muset přecházet koleje s nářadím.",
    faq: {
      question: "Zaparkoval jsem na Újezdě a šel na Petřín. Co když zjistím zamčený klíč až pozdě večer?",
      answer: "Zavolejte hned, jak to zjistíte – vyjíždíme i v noci a o víkendu. Nepokoušejte se mezitím páčit okno nebo dveře. Počkejte u vozu nebo v nedalekém podniku a technikovi popište, v které ulici a u kterého čísla domu auto stojí."
    }
  },
  {
    slug: "praha-vyton",
    name: "Výtoň",
    locative: "na Výtoni",
    region: "praha",
    district: "praha-1",
    geo: [50.0675, 14.4153],
    parts: [],
    headline: "nábřeží pod Vyšehradem u ústí Botiče",
    intro: [
      "Jako Výtoň se označuje okolí křižovatky Svobodovy ulice a Rašínova nábřeží, kde Botič ústí do Vltavy. Administrativně toto místo leží v Praze 2 – patří k části Nového Města, které se dřív říkalo Podskalí, a sousedí s Vyšehradem. Připomíná ho budova Podskalské celnice s muzeem vorařství, jméno Výtoň nesou i tramvajové zastávky a přístaviště přívozu. Pod železničním mostem tu vede rušná silnice k Vyšehradskému tunelu.",
      "Na náplavce pod Rašínovým nábřežím se konají trhy a kulturní akce a u břehu kotví lodě s kavárnami, takže parkovací místa v okolí bývají o víkendu plná. Kdo tu zaparkuje a odejde k vodě, snadno nechá klíč v tašce, která zůstane v kufru. Otevřeme i dodávky prodejců, kteří na trh vozí zboží, a poradíme si s vozy všech značek včetně aut s bezklíčovým startováním."
    ],
    hotspots: ["Rašínovo nábřeží", "Podskalská celnice na Výtoni", "Palackého náměstí", "Svobodova ulice u železničního mostu"],
    tip: "Parkujete-li na Rašínově nábřeží kvůli sobotnímu trhu na náplavce, dejte si klíč do kapsy, ne do nákupní tašky. Tašky se pak odkládají do kufru a klíč s nimi snadno zůstane zamčený.",
    faq: {
      question: "Patří Výtoň k Praze 1?",
      answer: "Ne, Výtoň leží v Praze 2, v bývalém Podskalí na Novém Městě hned pod Vyšehradem. Hranice mezi Prahou 1 a Prahou 2 vede severněji, zhruba od Jiráskova mostu. Pro otevření auta to ale nehraje roli – přijedeme na obě strany a cenu vám řekneme ještě do telefonu."
    }
  },
  {
    slug: "praha-vinohrady",
    name: "Vinohrady",
    locative: "na Vinohradech",
    region: "praha",
    district: "praha-2",
    geo: [50.075, 14.439],
    parts: [],
    headline: "Grébovka, Tylovo náměstí a Fantova budova",
    intro: [
      "Žádná jiná pražská čtvrť není rozdělená mezi tolik městských částí jako Vinohrady – je jich pět. Tady píšeme o jejich západní části v Praze 2: o ulicích kolem Italské, Bělehradské a Mánesovy, o Tylově náměstí, Divadle na Vinohradech i o Havlíčkových sadech s Grébovkou. Do vinohradského katastru patří dokonce historická Fantova budova hlavního nádraží, zatímco nová odbavovací hala už leží na Novém Městě v Praze 1.",
      "Kolem Tylova náměstí a Bělehradské je hustý provoz a zastavit se dá často jen na pár minut – u lékárny, v pekárně nebo kvůli vyložení nákupu. Právě při takových krátkých zastávkách se klíče zabouchnou nejsnáz. U Havlíčkových sadů zase lidé zamykají v rychlosti a spěchají s dětmi nebo se psem do parku. Když se k autu nedostanete, otevřeme ho na místě bez poškození dveří a elektroniky."
    ],
    hotspots: ["Havlíčkovy sady (Grébovka)", "Tylovo náměstí", "Divadlo na Vinohradech", "Fantova budova hlavního nádraží ve Wilsonově ulici", "Bělehradská ulice"],
    tip: "Havlíčkovy sady mají několik vchodů z různých ulic a auta stojí kolem celého parku. Při volání nám proto řekněte, u kterého vchodu jste parkovali, nebo pošlete polohu z mobilu.",
    faq: {
      question: "Zabouchl jsem klíč v autě u Fantovy budovy hlavního nádraží. Otevřete ho tam?",
      answer: "Ano. Fantova budova stojí ve Wilsonově ulici na vinohradské straně nádraží, tedy v Praze 2. Pokud jste zastavili jen kvůli vyložení zavazadel, řekněte nám to při volání, ať technik ví, že vůz nemůže stát dlouho. Mezitím od auta neodcházejte daleko."
    }
  },
  {
    slug: "praha-nusle",
    name: "Nusle",
    locative: "v Nuslích",
    region: "praha",
    district: "praha-2",
    geo: [50.065, 14.429],
    parts: [],
    headline: "Nuselské údolí a ulice pod Vyšehradem",
    intro: [
      "Nusle patří z větší části Praze 4. Do Prahy 2 spadá jen jejich menší díl – dno Nuselského údolí a bloky činžovních domů východně od Vyšehradu kolem Ostrčilova náměstí, Jaromírovy, Svatoplukovy, Oldřichovy nebo Lumírovy ulice. Nad hlavou vede Nuselský most s metrem a magistrálou, dole protéká Botič. Kongresové centrum i stanice metra Vyšehrad na druhé straně údolí už leží v Nuslích patřících Praze 4.",
      "Jaromírovou jezdí tramvaje a v ulicích pod Vyšehradem se parkuje těsně u sebe, takže se vystupuje spěšně a dveře se přibouchnou dřív, než si člověk uvědomí, kde nechal klíč. Jindy auto po několika dnech stání nereaguje na dálkové ovládání. Otevřeme osobní vůz i dodávku jakékoli značky, ať stojí u Ostrčilova náměstí, nebo dole v údolí u Botiče."
    ],
    hotspots: ["Ostrčilovo náměstí", "Jaromírova ulice", "Svatoplukova ulice", "Sekaninova ulice", "Nuselské údolí pod Nuselským mostem"],
    tip: "Nuselské údolí protíná magistrála na mostě nahoře i tramvajová trať dole, takže navigace někdy vede oklikou. Při volání uveďte ulici a nejbližší tramvajovou zastávku, třeba Ostrčilovo náměstí.",
    faq: {
      question: "Je Kongresové centrum Praha v Nuslích v Praze 2?",
      answer: "Ne. Kongresové centrum stojí v Nuslích, ale na straně Prahy 4, stejně jako stanice metra Vyšehrad. Do Prahy 2 patří jen část Nuslí v údolí a pod Vyšehradem. Auto vám otevřeme na obou stranách hranice, stačí přesně popsat, kde stojí."
    }
  },
  {
    slug: "praha-vysehrad",
    name: "Vyšehrad",
    locative: "na Vyšehradě",
    region: "praha",
    district: "praha-2",
    geo: [50.0644, 14.4176],
    parts: [],
    headline: "pevnost, hřbitov a vily pod skálou",
    intro: [
      "Do vyšehradské pevnosti chodí většina návštěvníků pěšky – Táborskou branou z ulice V Pevnosti od Pankráce, nebo Cihelnou branou z Vratislavovy ulice. Auta proto zůstávají v okolních ulicích a jejich majitelé se k nim vracejí po procházce po hradbách, po návštěvě Vyšehradského hřbitova se Slavínem nebo po odpoledni s dětmi v Karlachových sadech. Pod skálou vede Vyšehradským tunelem nábřežní silnice a v Libušině ulici stojí kubistická Kovařovicova vila.",
      "Po dlouhé procházce se klíček snadno ztratí v kapse kočárku nebo zůstane v batohu, který jste nechali v kufru. Jindy se ozve vybitá baterie v ovladači a auto zaparkované pod hradbami prostě nereaguje. V takové chvíli nezkoušejte dveře páčit – Andrej nebo Artur přijede a vůz otevře, abyste mohli v klidu odjet domů. Kolik to bude stát, se dozvíte ještě před výjezdem."
    ],
    hotspots: ["Táborská brána a ulice V Pevnosti", "Cihelná brána ve Vratislavově ulici", "Vyšehradský hřbitov", "Libušina ulice u Vyšehradského tunelu"],
    tip: "Do pevnosti se autem běžně nevjíždí, takže si zapamatujte, kterou branou jste vešli. Od Táborské a od Cihelné brány vede k autu úplně jiná cesta a technikovi pomůže, když ví, kde vás hledat.",
    faq: {
      question: "Přijedete i k autu zaparkovanému pod Vyšehradem u tunelu?",
      answer: "Ano. Kolem Libušiny ulice a Vyšehradského tunelu je silný provoz, proto nám při volání řekněte, na které straně tunelu vůz stojí a jestli jste blíž k vilám, nebo k železničnímu mostu. Technik pak zastaví tak, aby neblokoval dopravu."
    }
  },
  {
    slug: "praha-zizkov",
    name: "Žižkov",
    locative: "na Žižkově",
    region: "praha",
    district: "praha-3",
    geo: [50.0872, 14.4628],
    parts: [],
    headline: "Flora, Tachovské náměstí a nové bytové domy",
    intro: [
      "Žižkov není jen historické jádro kolem Prokopova náměstí, Husinecké a Seifertovy. Téměř celý patří Praze 3 a zahrnuje i vrch Vítkov, Ohradu a pás novější zástavby směrem k Hrdlořezům. V posledních letech tu vyrostly velké bytové komplexy jako Central Park Praha nebo Residence Garden Towers a s nimi domovní garáže, kde se auto zamkne stejně snadno jako na ulici – jen se k němu hůř dostává.",
      "Hodně řidičů míří do čtyřpodlažní garáže pod obchodním centrem Atrium Flora, jiní parkují kolem Olšanského náměstí. Kdo jde večer do Paláce Akropolis nebo do některé ze žižkovských hospod, nechá vůz v jedné z příkrých ulic a vrací se k němu v noci. Pokud se pak auto neodemkne, stačí zavolat – přijedeme v kteroukoli hodinu a otevřeme ho, aniž bychom poškodili zámek či lak."
    ],
    hotspots: ["Garáže Atrium Flora (vjezd z Jičínské)", "Olšanské náměstí", "Tachovské náměstí", "Palác Akropolis v Kubelíkově ulici", "Prokopovo náměstí"],
    tip: "Do garáže pod Atriem Flora se vjíždí z Jičínské ulice a vozy na LPG a CNG do ní nesmějí. Pokud se vám auto zamkne uvnitř, zapište si podlaží a číslo stání dřív, než půjdete k východu hledat signál.",
    faq: {
      question: "Otevřete auto v podzemní garáži žižkovského bytového domu?",
      answer: "Ano. Potřebujeme jen, aby se technik dostal k vozu a měl kolem dveří trochu místa. Do garáže ho pustíte vy nebo správce domu. V podzemí často nebývá signál, proto nám ještě před sestupem k autu řekněte podlaží a číslo stání."
    }
  },
  {
    slug: "praha-holesovice",
    name: "Holešovice",
    locative: "v Holešovicích",
    region: "praha",
    district: "praha-7",
    geo: [50.0997, 14.4381],
    parts: [],
    headline: "tržnice, galerie a nové domy u přístavu",
    intro: [
      "Holešovice leží v meandru Vltavy a z bývalého průmyslového předměstí jsou dnes čtvrť galerií, kanceláří a nových bytů. Téměř celé patří Praze 7, jen kousek nábřeží u Čechova mostu spadá pod Prahu 1. Do Veletržního paláce se jezdí na sbírky Národní galerie, do Poupětovy ulice do centra DOX, do Pražské tržnice na trhy i za kulturou. U Holešovického přístavu vyrostly bytové a kancelářské domy.",
      "Po výstavě nebo koncertě se k autu vracíte potmě a s plnýma rukama – a právě tehdy se často ukáže, že klíč zůstal ve voze. V Holešovicích otevíráme osobní auta, firemní dodávky i vozy s bezklíčovým přístupem, ať stojí u stanice metra Vltavská, na Strossmayerově náměstí, nebo ve dvoře bývalé továrny. Cenu vám sdělíme ještě do telefonu a teprve potom vyrážíme."
    ],
    hotspots: ["Pražská tržnice", "Veletržní palác", "DOX v Poupětově ulici", "Holešovický přístav", "Strossmayerovo náměstí a stanice metra Vltavská"],
    tip: "Areál Pražské tržnice je rozlehlý a haly jsou si podobné. Při volání řekněte číslo haly, u které auto stojí, ať vás technik najde napoprvé.",
    faq: {
      question: "Otevřete auto v uzavřeném areálu, kam se vjíždí přes závoru?",
      answer: "Ano, pokud nás dovnitř pustíte vy nebo ostraha. V Holešovicích je takových areálů hodně – od bývalých továren po kancelářské komplexy. Při volání nám řekněte, u které brány nebo závory máme zastavit a kdo nám otevře."
    }
  },
  {
    slug: "praha-troja",
    name: "Troja",
    locative: "v Troji",
    region: "praha",
    district: "praha-7",
    geo: [50.1197, 14.4211],
    parts: [],
    headline: "zoo, botanická zahrada a svahy nad Vltavou",
    intro: [
      "Troju tvoří dvě dost odlišné části. Dolní Troja v údolí Vltavy je samostatná městská část Praha-Troja ve správním obvodu Prahy 7 – najdete tu Trojský zámek, Zoo Praha a Botanickou zahradu Praha. Horní část na Bohnické plošině patří Praze 8: stojí tu jižní díl sídliště Bohnice, sídliště Velká skála a plavecký areál Aquacentrum Šutka.",
      "Dole u řeky se o víkendech plní parkoviště u zoo a botanické zahrady, nahoře se parkuje před paneláky a u bazénu. Klíč se obvykle ztratí při vykládání – v tašce s plavkami, v přebalovací tašce nebo v kapse bundy odložené v kufru. Když se víko zabouchne, otevřeme auto bez poškození zámků a těsnění, v dolní i horní Troji."
    ],
    hotspots: ["Parkoviště u Zoo Praha", "Botanická zahrada Praha v Nádvorní ulici", "Trojský zámek", "Podhoří", "Aquacentrum Šutka"],
    tip: "Jdete-li do Aquacentra Šutka, nenechávejte klíč v tašce s ručníkem v kufru. Mokré věci se do auta házejí ve spěchu a víko se zabouchne dřív, než si klíče všimnete.",
    faq: {
      question: "Jezdíte i do horní Troji, třeba k Aquacentru Šutka nebo na sídliště Velká skála?",
      answer: "Ano. Horní Troja patří k Praze 8 a jezdíme do ní stejně jako dolů k zoo. Stačí nám říct ulici nebo zastávku autobusu, u které stojíte. Auto otevřeme na parkovišti u bazénu i před panelovým domem, a to ve dne i v noci."
    }
  },
  {
    slug: "praha-karlin",
    name: "Karlín",
    locative: "v Karlíně",
    region: "praha",
    district: "praha-8",
    geo: [50.0919, 14.4453],
    parts: [],
    headline: "Karlínské náměstí, Rohanské nábřeží a Invalidovna",
    intro: [
      "Karlín vznikl jako plánované předměstí s pravoúhlou sítí ulic. Hlavní osou je Sokolovská, středem Karlínské náměstí s kostelem sv. Cyrila a Metoděje. Tranzitní doprava jezdí po Rohanském nábřeží, za kterým na bývalém Rohanském ostrově rostou nové kancelářské a bytové budovy, třeba Main Point Karlín. Na východě stojí sídliště Invalidovna se stejnojmennou stanicí metra a barokní budovou Invalidovny.",
      "Mnoho karlínských ulic je jednosměrných a přes den jsou plné aut lidí, kteří tu pracují. U kanceláří a v garážích nových budov parkuje řada elektromobilů a vozů s bezklíčovým přístupem, u kterých stačí slabá baterie v klíči a auto se neodemkne. Otevřeme je stejně jako starší benzínové auto nebo dodávku kurýra – bez poškození dveří, těsnění i citlivé elektroniky."
    ],
    hotspots: ["Karlínské náměstí", "Rohanské nábřeží", "Main Point Karlín", "Hudební divadlo Karlín v Křižíkově ulici", "Stanice metra Invalidovna"],
    tip: "Parkujete-li v garáži kancelářské budovy, zjistěte si, zda do ní po pracovní době pustí i cizí vůz. Když se auto zamkne večer, technik se k němu musí dostat přes ostrahu nebo recepci.",
    faq: {
      question: "Otevřete elektromobil, který se zamkl při nabíjení u kanceláří v Karlíně?",
      answer: "Ano. U elektromobilu bývá při nabíjení zamčený i konektor kabelu, který se uvolní až po odemknutí vozu. Nejdřív otevřeme dveře, potom můžete nabíjení ukončit a kabel odpojit. Při volání nám řekněte značku vozu a kde přesně nabíjíte."
    }
  },
  {
    slug: "praha-liben",
    name: "Libeň",
    locative: "v Libni",
    region: "praha",
    district: "praha-8",
    geo: [50.1075, 14.4778],
    parts: [],
    headline: "Palmovka, Libeňský zámek a Holešovičky",
    intro: [
      "Libeň se táhne od Vltavy a Libeňského ostrova přes Palmovku až k Bulovce a na svahy pod Ládvím. Převážná část patří Praze 8, úzký pruh u mostu Barikádníků spadá do Prahy 7 a okolí Balabenky s O2 arenou a stanicí metra Českomoravská do Prahy 9. Tady se věnujeme libeňské části v Praze 8 – Staré i Horní Libni, Thomayerovým sadům a okolí Libeňského zámku.",
      "Palmovka je jeden z důležitých dopravních uzlů Prahy – kříží se tu tramvaje, autobusy i metro a řidiči sem často jen přivezou někoho k přestupu. Ulicí V Holešovičkách zase vede severojižní magistrála. Když vám v tom ruchu zůstane klíč v zamčeném autě, nebo vůz po mrazivé noci přestane reagovat na ovladač, přijedeme ve dne i v noci a otevřeme ho přímo na místě."
    ],
    hotspots: ["Palmovka – metro a autobusové nádraží", "Libeňský zámek a Zenklova ulice", "Divadlo pod Palmovkou", "Libeňský ostrov", "Fakultní nemocnice Bulovka"],
    tip: "Kolem Palmovky se staví a dopravní značení se tu občas mění. Než zamknete a odejdete, zkontrolujte dočasné značky – zamčené auto v nově vyhrazeném úseku by mohl čekat odtah.",
    faq: {
      question: "Přivezl jsem někoho na Palmovku k metru a zabouchl klíče v autě. Co teď?",
      answer: "Zavolejte nám a řekněte, kde přesně vůz stojí – pokud je v zastávce autobusu nebo tramvaje, zmiňte to hned, technik s tím bude počítat. Auto otevřeme bez poškození. Mezitím zůstaňte poblíž vozu, ať vás technik po příjezdu snadno najde."
    }
  },
  {
    slug: "praha-kobylisy",
    name: "Kobylisy",
    locative: "v Kobylisích",
    region: "praha",
    district: "praha-8",
    geo: [50.1253, 14.4608],
    parts: [],
    headline: "Kobyliské náměstí, Ládví a vozovna tramvají",
    intro: [
      "Západ Kobylis patří rodinným domům, východ panelovému sídlišti. Ke Kobylisům katastrálně patří i velká část sídliště Ďáblice, které nese jméno sousední obce. Srdcem čtvrti je Kobyliské náměstí se stanicí metra Kobylisy, o kus dál stojí stanice Ládví s kulturním domem a obchody ve Střelničné ulici. Na severu u vozovny končí tramvaje a nedaleko se zvedá Ďáblický háj.",
      "Na sídlištích se parkuje v dlouhých řadách podél domů a mnoho aut stojí na stejném místě několik dní. Vybitá baterie v ovladači nebo zatuhlý zámek dveří pak překvapí právě ve chvíli, kdy spěcháte k metru. Pomůžeme u paneláku stejně jako u vily v západní části Kobylis, u stanice metra Ládví nebo u Beach klubu Ládví. Otevřeme auta všech značek, včetně vozů s bezklíčovým přístupem."
    ],
    hotspots: ["Kobyliské náměstí a stanice metra Kobylisy", "Stanice metra Ládví a Střelničná ulice", "Obchodní středisko Sokolníky v Trousilově ulici", "Vozovna Kobylisy", "Beach klub Ládví"],
    tip: "Když necháváte auto na sídlišti stát celý týden, projeďte se s ním aspoň jednou. Slabá autobaterie umí vyřadit centrální zamykání a dálkové odemykání pak nereaguje.",
    faq: {
      question: "Přijedete na sídliště Ďáblice? Nevím, jestli je to Kobylisy, nebo Ďáblice.",
      answer: "Přijedeme. Sídliště Ďáblice leží převážně na území Kobylis v Praze 8, jeho východní okraj u tramvajové smyčky patří ke Střížkovu. Původní Ďáblice jsou o kus severněji a tvoří samostatnou městskou část. Pro nás je důležitá jen přesná adresa nebo číslo vchodu."
    }
  },
  {
    slug: "praha-bohnice",
    name: "Bohnice",
    locative: "v Bohnicích",
    region: "praha",
    district: "praha-8",
    geo: [50.1315, 14.4108],
    parts: [],
    headline: "sídliště, Staré Bohnice a areál nemocnice",
    intro: [
      "Bohnice jsou známé hlavně rozlehlým sídlištěm ze sedmdesátých let, jehož ulice nesou jména polských měst – Lodžská, Zhořelecká nebo Hnězdenská. V Zelenohorské ulici stojí nejdelší panelový dům v Česku. Severně od sídliště se ale zachovaly Staré Bohnice, vesnická památková zóna s kostelem sv. Petra a Pavla románského původu, a hned vedle nich rozlehlý areál Psychiatrické nemocnice Bohnice.",
      "Do nemocnice jezdí návštěvy za pacienty, k obchodnímu středisku Odra a na Krakov lidé na nákupy a před domy se parkuje v dlouhých řadách. Kdo spěchá na návštěvu, snadno nechá klíček v autě i s dárkem pro blízkého. Otevřeme vůz bez poškození, ať stojí před panelákem v Zelenohorské, u kostela ve Starých Bohnicích, nebo na parkovišti u nemocnice."
    ],
    hotspots: ["Psychiatrická nemocnice Bohnice v Ústavní ulici", "Obchodní středisko Odra", "Zelenohorská ulice", "Staré Bohnice u kostela sv. Petra a Pavla", "Bohnický hřbitov v Dolákově ulici"],
    tip: "Areál psychiatrické nemocnice je velký a jednotlivé pavilony jsou od sebe daleko. Když nám voláte, řekněte, u které brány nebo pavilonu vaše auto stojí.",
    faq: {
      question: "Jezdíte i na okraj Bohnic k Zámkům, odkud vede přívoz do Sedlce?",
      answer: "Ano. Na Zámky se dá dojet autobusem i autem a řada lidí odtud pokračuje pěšky nebo přívozem přes Vltavu. Když se po výletě k vozu nedostanete, zavolejte a popište, u které ulice nebo zastávky stojí. Technik k vám dojede i na tento okraj Prahy 8."
    }
  },
  {
    slug: "praha-cimice",
    name: "Čimice",
    locative: "v Čimicích",
    region: "praha",
    district: "praha-8",
    geo: [50.1422, 14.4311],
    parts: [],
    headline: "klidný okraj Prahy u Čimického údolí",
    intro: [
      "Čimice leží mírně stranou od hlavního pásu severních sídlišť a obklopuje je příroda – ze západu přírodní památka Čimické údolí, ze severu Drahanské údolí a z jihu Čimický háj. Uvnitř se střídají panelové domy ze sedmdesátých let, řadové domky z let osmdesátých a starší vilky. Obchody, pošta i lékárna jsou soustředěné v nákupním středisku Draháň u Čimické ulice.",
      "O víkendech sem přijíždějí výletníci, kteří nechají auto na kraji zástavby a vyrazí pěšky do Čimického údolí nebo dál k Drahani. Po návratu se někdy ukáže, že klíč zůstal v batohu v zamčeném kufru, případně že ovladač přestal fungovat. Andrej nebo Artur k vám dorazí i na tenhle okraj Prahy a auto otevře tak, aby dveře ani zámek neutrpěly."
    ],
    hotspots: ["Nákupní středisko Draháň", "Chvatěrubská ulice", "Křivenická ulice", "Vstup do Čimického údolí z Vehlovické ulice"],
    tip: "Na čimickém sídlišti vypadají domy podobně a ulice se stáčejí. Při volání uveďte číslo domu nebo vchodu, ne jen název ulice, ať vás technik nemusí hledat.",
    faq: {
      question: "Otevřete auto na okraji Čimic, když jsem klíč ztratil na procházce?",
      answer: "Auto otevřeme, abyste se dostali k věcem uvnitř nebo k náhradnímu klíči, pokud ho ve voze máte. Bez klíče ale vůz nenastartujete. Poradíme vám proto, jak postupovat dál – třeba nechat si náhradní klíč přivézt z domova."
    }
  },
  {
    slug: "praha-dablice",
    name: "Ďáblice",
    locative: "v Ďáblicích",
    region: "praha",
    district: "praha-8",
    geo: [50.145, 14.4825],
    parts: [],
    headline: "bývalá vesnice pod Ládvím s hvězdárnou",
    intro: [
      "Ďáblice byly samostatnou vesnicí až do roku 1968 a dodnes tvoří vlastní městskou část Praha-Ďáblice. Spadají do správního obvodu Prahy 8, radnice Prahy 8 je ale nespravuje. Hlavní ulicí je Ďáblická, na západě se zvedá Ďáblický háj s vrchem Ládví a hvězdárnou. Pozor na jména: sídliště Ďáblice leží v Kobylisích a velký Ďáblický hřbitov na Střížkově.",
      "V Ďáblicích se bydlí hlavně v rodinných domech a auta parkují ve dvorech, u plotů nebo na kraji úzkých ulic. Když se klíček zamkne v autě na příjezdové cestě, často u něj leží i klíče od domu. Pomáháme také u hvězdárny, kam se jezdí na večerní pozorování oblohy, a výletníkům, kteří nechají vůz na okraji Ďáblického háje. Cenu otevření se dozvíte ještě před začátkem práce."
    ],
    hotspots: ["Hvězdárna Ďáblice", "Ďáblická ulice", "Ďáblický háj a vrch Ládví", "Kostelecká ulice"],
    tip: "Na hvězdárnu se jezdí večer a za tmy se klíč v trávě i v autě hledá špatně. Než zabouchnete dveře, posviťte si mobilem a zkontrolujte, že klíč máte u sebe.",
    faq: {
      question: "Patří Ďáblice pod Prahu 8?",
      answer: "Ne tak docela. Ďáblice jsou samostatná městská část Praha-Ďáblice se svým úřadem, která leží ve správním obvodu Prahy 8. Pro otevření auta na tom nezáleží – přijedeme do Ďáblic stejně jako do Kobylis nebo na Střížkov."
    }
  },
  {
    slug: "praha-dolni-chabry",
    name: "Dolní Chabry",
    locative: "v Dolních Chabrech",
    region: "praha",
    district: "praha-8",
    geo: [50.1464, 14.4478],
    parts: [],
    headline: "Ústecká, Bauhaus a ulice rodinných domů",
    intro: [
      "Městská část Praha-Dolní Chabry leží na severním okraji Prahy v obvodu Praha 8 a zahrnuje obě historické osady – Dolní i Horní Chabry. Středem vede frekventovaná Ústecká ulice, pražské pokračování silnice II/608 směrem na Zdiby. Na jižním okraji u hranice s Kobylisy stojí obchodní centrum Bauhaus, ve střední části nákupní centrum se supermarketem a v lokalitě Beranov sklady a průmyslové objekty.",
      "Na parkovišti před hobbymarketem se klíč snadno ztratí mezi prkny, pytli se zeminou a nákupními vozíky – a když se víko kufru zaklapne, zůstane uvnitř. Kolem Bíleneckého a Hrušovanského náměstí zase stojí auta starousedlíků i řemeslnické dodávky. Otevřeme osobní vůz, dodávku i pick-up bez poškození, ať voláte z parkoviště, nebo od vlastní branky."
    ],
    hotspots: ["Bauhaus v Ústecké ulici", "Bílenecké náměstí u kostela Stětí sv. Jana Křtitele", "Hrušovanské náměstí", "Beranov"],
    tip: "Jedete-li s nákupem z Bauhausu, naložte nejdřív zboží a klíč si nechte v ruce, dokud nezavřete kufr. U velkých kusů se víko často zavírá oběma rukama a klíč pak snadno zůstane odložený uvnitř.",
    faq: {
      question: "Otevřete auto na parkovišti Bauhausu v Dolních Chabrech?",
      answer: "Ano. Parkoviště leží na jižním okraji Chaber u Ústecké ulice a je rozlehlé, proto nám řekněte, v které řadě nebo u kterého vchodu stojíte. Pokud je klíč zamčený v kufru s nákupem, otevřeme nejdřív dveře a ke kufru se pak dostanete zevnitř."
    }
  },
  {
    slug: "praha-strizkov",
    name: "Střížkov",
    locative: "na Střížkově",
    region: "praha",
    district: "praha-8",
    geo: [50.1245, 14.483],
    parts: [],
    headline: "starý Střížkov, Ďáblický hřbitov a Liberecká",
    intro: [
      "Střížkov je rozdělený zhruba napůl mezi Prahu 8 a Prahu 9. Osmičce patří původní ves se Svatojánským dvorem ve Střížkovské ulici, Ďáblický hřbitov, tramvajová smyčka Sídliště Ďáblice a nejvýchodnější část sídliště Ďáblice. Severozápadní polovina sídliště Prosek se stanicí metra Střížkov už leží v Praze 9. Přirozenou hranici tvoří rušná Liberecká, i když areál autosalonu na její druhé straně ještě patří Praze 8.",
      "Na Střížkově v Praze 8 se tak potkávají návštěvníci hřbitova, zákazníci autoservisu u Bešťákovy ulice a lidé z okolních paneláků. U hřbitova se vystupuje s květinami a svíčkami v rukou a klíč pak snadno zůstane ležet na sedadle zamčeného auta. Ať jde o zabouchnuté dveře, nebo o nefunkční dálkové ovládání, vůz otevřeme přímo na místě a cenu znáte předem."
    ],
    hotspots: ["Ďáblický hřbitov", "Tramvajová smyčka Sídliště Ďáblice", "Střížkovská ulice a Svatojánský dvůr", "Bešťákova ulice"],
    tip: "Ďáblický hřbitov je velký, a když nám voláte, řekněte, u kterého vchodu nebo v které ulici jste zaparkovali. Technik pak nebude objíždět celý areál.",
    faq: {
      question: "Patří Střížkov k Praze 8, nebo k Praze 9?",
      answer: "K oběma. Původní ves, Ďáblický hřbitov a okolí tramvajové smyčky Sídliště Ďáblice jsou v Praze 8, sídliště u stanice metra Střížkov v Praze 9. Auto otevřeme na kterékoli straně, stačí nám říct ulici a nejbližší orientační bod."
    }
  }
];
