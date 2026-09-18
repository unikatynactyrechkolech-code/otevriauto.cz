import type { Location, OkresInfo } from "./types";

export const okresInfosA: OkresInfo[] = [
  {
    id: "kladno",
    name: "okres Kladno",
    otherTowns: ["Stochov", "Unhošť", "Buštěhrad", "Libušín", "Velvary", "Smečno"]
  },
  {
    id: "beroun",
    name: "okres Beroun",
    otherTowns: ["Hořovice", "Zdice", "Žebrák", "Hostomice"]
  },
  {
    id: "rakovnik",
    name: "okres Rakovník",
    otherTowns: ["Nové Strašecí", "Jesenice"]
  },
  {
    id: "melnik",
    name: "okres Mělník",
    otherTowns: ["Kostelec nad Labem", "Veltrusy", "Mšeno", "Liběchov"]
  }
];

export const locationsA: Location[] = [
  // okres Kladno
  {
    slug: "kladno",
    name: "Kladno",
    locative: "na Kladně",
    region: "kladno",
    geo: [50.1431, 14.1053],
    parts: ["Kladno", "Kročehlavy", "Rozdělov", "Dubí", "Švermov", "Vrapice", "Sítná", "Ostrovec", "Motyčín", "Hnidousy", "Dříň"],
    headline: "největší město kraje mezi dálnicemi D6 a D7",
    intro: [
      "Kladno je největším městem Středočeského kraje a spousta aut tu přes noc stojí na sídlištích – na Sítné, v Rozdělově nebo v Kročehlavech. Klíče se nejsnáz zabouchnou při vykládání nákupu před domem nebo zůstanou ležet na sedadle, když se ráno spěchá do práce. Přijedeme kdykoli, i o víkendu, a osobní auto nebo dodávku otevřeme bez poškození zámku, těsnění či laku.",
      "Vyjíždíme také do podzemního parkoviště OC Central, k Oblastní nemocnici Kladno, na parkoviště u Sletiště a aquaparku nebo do průmyslové zóny Kladno-jih, kam se denně sjíždějí zaměstnanci výrobních závodů. Poradíme si s vybitou baterií v klíči, zamrzlým zámkem po mrazivé noci i s porouchaným centrálním zamykáním, a to u všech značek. Cenu vám řekneme ještě do telefonu."
    ],
    hotspots: ["OC Central Kladno", "Oblastní nemocnice Kladno", "Autobusové nádraží Kladno", "Sportovní areál Sletiště", "Průmyslová zóna Kladno-jih", "Náměstí Starosty Pavla"],
    tip: "Podzemní parkoviště OC Central je podle provozního řádu otevřené jen od 6:30 do 23:00. Pokud se vám tam klíče zabouchnou večer, ozvěte se co nejdřív, ať stihneme auto otevřít ještě před zavírací dobou.",
    faq: {
      question: "Otevřete auto i v průmyslové zóně Kladno-jih mezi směnami?",
      answer: "Ano. Do oplocených areálů firem se bez povolení nedostaneme, ale na veřejná parkoviště a do ulic průmyslové zóny směrem k Velkému Přítočnu vyjedeme kdykoli, i v noci. Stačí nám říct název firmy nebo parkoviště, u kterého auto stojí."
    }
  },
  {
    slug: "slany",
    name: "Slaný",
    locative: "ve Slaném",
    region: "kladno",
    geo: [50.2305, 14.087],
    parts: ["Slaný", "Blahotice", "Dolín", "Kvíc", "Kvíček", "Lotouš", "Netovice", "Otruby", "Trpoměchy", "Želevčice"],
    headline: "historické centrum, Slánská hora a exit na D7",
    intro: [
      "Na Masarykově náměstí ve Slaném a v okolních ulicích městské památkové zóny se v pracovní dny platí za parkování. Zabouchnete-li si tu klíče v autě, parkovné mezitím běží dál – proto vyjíždíme bez odkladu a vůz otevřeme přímo na místě, šetrně a bez poškození dveří či zámku. Poradíme si i s klíči zamčenými v kufru.",
      "Auta otevíráme u Nemocnice Slaný v ulici Politických vězňů, u zimního stadionu a aquaparku na západním okraji města i u nádraží. Přijedeme také za řidiči, kteří zastavili u exitu 18 Slaný-jih na dálnici D7, nebo do místních částí, jako jsou Kvíc, Lotouš či Trpoměchy. Poradíme si s vozy všech značek včetně aut s bezklíčovým přístupem a cenu znáte ještě před výjezdem."
    ],
    hotspots: ["Masarykovo náměstí", "Nemocnice Slaný", "Nádraží Slaný", "Zimní stadion Slaný", "Exit 18 Slaný-jih na D7", "Slánská hora"],
    tip: "Na Masarykově náměstí se platí v pracovní dny od 8 do 17 hodin a místa přímo před radnicí jsou vyhrazená pro návštěvy úřadu. Pokud tam auto stojí se zabouchnutými klíči, doplaťte si čas v automatu nebo v aplikaci Smart4City.",
    faq: {
      question: "Dojedete i k autu zaparkovanému pod Slánskou horou?",
      answer: "Ano. Slánská hora s naučnou stezkou je oblíbené místo na procházku přímo ve městě a klíč se snadno zabouchne při převlékání nebo ukládání batohu do kufru. Řekněte nám, v jaké ulici pod horou auto stojí, a technik zamíří přímo tam."
    }
  },
  // okres Beroun
  {
    slug: "beroun",
    name: "Beroun",
    locative: "v Berouně",
    region: "beroun",
    geo: [49.9639, 14.0721],
    parts: ["Beroun", "Závodí", "Zavadilka", "Jarov", "Hostim", "Zdejcina"],
    headline: "železniční uzel, dálnice D5 a Husovo náměstí",
    intro: [
      "V historickém centru Berouna mezi Pražskou a Plzeňskou bránou se parkuje hlavně na Husově a Wagnerově náměstí nebo v parkovacím domě U Černého koně, odkud je to na náměstí pár kroků. Stačí chvilka nepozornosti při placení v automatu a klíč zůstane ležet na sedadle zamčeného vozu. Vyjedeme za vámi kdykoli ve dne i v noci a auto otevřeme šetrně, bez škrábanců na laku a bez poškození zámku.",
      "Kdo dojíždí do Prahy, často nechává auto u nádraží na koridoru Praha – Plzeň nebo na parkovišti P+R Na Podole pod dálničním mostem a dál jede vlakem. Přijedeme tam stejně jako k exitu 18 Beroun-centrum na D5, k aquaparku Tipsport laguna nebo do Závodí, na Zavadilku a do Hostimi. Otevíráme osobní auta, dodávky i vozy s bezklíčovým startováním všech značek a o ceně se domluvíme předem."
    ],
    hotspots: ["Nádraží Beroun", "P+R Na Podole", "Husovo náměstí", "Parkovací dům U Černého koně", "Aquapark Tipsport laguna", "Exit 18 Beroun-centrum"],
    tip: "Beroun má na dálnici D5 dva vlastní sjezdy – exit 14 Beroun-východ a exit 18 Beroun-centrum. Pokud vám klíče zůstaly v autě u dálnice, řekněte nám číslo exitu, ať technik rovnou volí správný sjezd.",
    faq: {
      question: "Otevřete auto na parkovišti u aquaparku Tipsport laguna v Berouně?",
      answer: "Ano. Po plavání se snadno stane, že klíč zůstane v tašce v kufru a auto se mezitím samo zamkne. Vůz otevřeme, abyste se ke svým věcem dostali. Při volání jen uveďte, že stojíte u aquaparku v ulici Na Ostrově."
    }
  },
  {
    slug: "kraluv-dvur",
    name: "Králův Dvůr",
    locative: "v Králově Dvoře",
    region: "beroun",
    geo: [49.9499, 14.0345],
    parts: ["Králův Dvůr", "Počaply", "Popovice", "Levín", "Zahořany", "Karlova Huť", "Křižatky"],
    headline: "město rozdělené dálnicí D5 a OC Litavka",
    intro: [
      "Králův Dvůr za poslední dvě desetiletí výrazně vyrostl a dnes má přes deset tisíc obyvatel. Středem města prochází dálnice D5, která ho rozdělila a připravila o přirozené centrum, a kde přesně stojíte, se proto nejsnáz popíše podle obchodu nebo sjezdu z dálnice. Takový popis nám k orientaci stačí – přijedeme ve dne i v noci a auto se zabouchnutými klíči otevřeme bez poškození zámku i laku.",
      "Otevíráme auta na parkovišti obchodního centra Litavka v Počaplech, u Albertu a OBI v Plzeňské ulici i u exitu 22 Beroun-západ. Přijedeme také k zastávkám Králův Dvůr a Králův Dvůr-Popovice, kde si auta nechávají lidé dojíždějící vlakem, nebo do Levína, Zahořan či Karlovy Huti. Poradíme si s osobními vozy, dodávkami i auty s bezklíčovým přístupem a o ceně víte předem, ne až po zásahu."
    ],
    hotspots: ["OC Litavka", "Albert Hypermarket Králův Dvůr", "OBI Králův Dvůr", "Exit 22 Beroun-západ", "Zastávka Králův Dvůr-Popovice", "Zámek Králův Dvůr"],
    tip: "Exit 22 na dálnici D5 se jmenuje Beroun-západ, leží ale už v Králově Dvoře. Když nám popisujete, kde auto stojí, řekněte rovnou Králův Dvůr a nejbližší obchod, ať technik nemíří do centra Berouna.",
    faq: {
      question: "Otevřete auto na parkovišti OC Litavka v Králově Dvoře?",
      answer: "Ano. Parkoviště obchodního centra Litavka má skoro dvě stě míst, takže nám při volání řekněte, u kterého obchodu auto stojí. Pomůžeme i tehdy, když klíč zůstane zamčený v kufru spolu s nákupem."
    }
  },
  // okres Rakovník
  {
    slug: "rakovnik",
    name: "Rakovník",
    locative: "v Rakovníku",
    region: "rakovnik",
    geo: [50.1038, 13.7335],
    parts: ["Rakovník", "Na Spravedlnosti", "Karlovarské předměstí", "Šamotka", "Vinohrady"],
    headline: "náměstí se závorami a cesty na Křivoklátsko",
    intro: [
      "Rakovník je přirozeným centrem řídce osídleného Rakovnicka, a tak sem lidé z okolních vesnic jezdí autem k lékaři, do Masarykovy nemocnice, na úřady i na nákupy. Zůstanou-li pak klíče zamčené v autě na parkovišti u Kauflandu v Luženské ulici nebo na Husově náměstí, kde vjezd hlídají závory, přijedeme kdykoli a vůz otevřeme bez poškození zámku, laku i elektroniky.",
      "Město je zároveň branou na Křivoklátsko – silnice II/227 odtud vede přímo ke Křivoklátu. Auta otevíráme u nádraží, u zimního stadionu, v okolí Pražské brány i u závodu P&G Rakona v Ottově ulici, kam se jezdí na směny. Poradíme si s osobními vozy, dodávkami i auty s bezklíčovým přístupem všech značek a cenu s vámi domluvíme předem."
    ],
    hotspots: ["Husovo náměstí", "Masarykova nemocnice Rakovník", "Nádraží Rakovník", "Kaufland Luženská", "Zimní stadion Rakovník", "Pražská brána"],
    tip: "Na Husově náměstí se vjíždí přes závoru a systém snímá registrační značku. Parkovné se počítá až do výjezdu, takže když se vám tu zabouchnou klíče, zavolejte hned – každá minuta navíc se promítne do ceny za stání.",
    faq: {
      question: "Otevřete auto u Masarykovy nemocnice v Rakovníku?",
      answer: "Ano. Nemocnice stojí v ulici Dukelských hrdinů a auto se tu nechává v rychlosti před ambulancí nebo při návštěvě pacienta. Řekněte nám, u kterého vchodu nebo na jakém parkovišti stojíte, a vůz otevřeme, i když klíč zůstal zamčený v kufru."
    }
  },
  // okres Mělník
  {
    slug: "melnik",
    name: "Mělník",
    locative: "na Mělníku",
    region: "melnik",
    geo: [50.3506, 14.4742],
    parts: ["Mělník", "Pšovka", "Rousovice", "Mlazice", "Blata", "Podolí", "Chloumek", "Vehlovice"],
    headline: "zámek nad soutokem, vinice a náměstí Míru",
    intro: [
      "Mělník láká výhledem na soutok Labe a Vltavy, zámkem s vinárnou a podzemím pod historickým jádrem. Kdo sem přijede na výlet, obvykle zaparkuje na náměstí Míru, v Erbenově ulici nebo na parkovištích Na Svini a Nad Soutokem – a právě při vystupování s foťákem a batohem se klíče nejsnáz zabouchnou uvnitř. Přijedeme za vámi i v noci a vůz otevřeme šetrně, bez poškození.",
      "Místní zase řeší zabouchnuté klíče u Kauflandu v Bezručově ulici, u nemocnice v Pražské ulici nebo u nádraží a zastávky Mělník-Mlazice. Jezdíme do Pšovky, Rousovic, na Chloumek i do Vehlovic a pomůžeme také řidičům na silnicích I/9 a I/16, které Mělníkem procházejí. Otevíráme auta všech značek včetně dodávek a vozů s bezklíčovým přístupem a cenu vám řekneme předem."
    ],
    hotspots: ["Náměstí Míru", "Parkoviště Na Svini", "Parkoviště Nad Soutokem", "Nemocnice Mělník", "Kaufland Bezručova", "Nádraží Mělník"],
    tip: "Na náměstí Míru se v pracovní dny od 7 do 17 hodin platí za stání a dobu parkování tu hlídají kamery. Pokud se vám tu klíče zabouchnou, zaplaťte si mezitím další čas v aplikaci Smart4City nebo přes SMS.",
    faq: {
      question: "Dojedete i na parkoviště Nad Soutokem u Vrázovy vyhlídky?",
      answer: "Ano. Parkoviště Nad Soutokem leží asi 200 metrů od Vrázovy vyhlídky v ulici K Mostu, odkud je nejhezčí pohled na soutok Labe a Vltavy. Když se vám tu klíče zabouchnou, stačí nám říct název parkoviště."
    }
  },
  {
    slug: "kralupy-nad-vltavou",
    name: "Kralupy nad Vltavou",
    locative: "v Kralupech nad Vltavou",
    region: "melnik",
    geo: [50.2411, 14.3116],
    parts: ["Kralupy nad Vltavou", "Lobeček", "Lobeč", "Mikovice", "Minice", "Zeměchy"],
    headline: "levý břeh s nádražím, Lobeček s průmyslovou zónou",
    intro: [
      "Kralupy nad Vltavou leží na obou březích řeky: na levém je centrum s nádražím, Lobeč, Mikovice a Minice, na pravém Lobeček se sídlištěm, zimním stadionem a rozsáhlým areálem chemičky a rafinerie. Břehy spojuje most T. G. Masaryka, a proto se vždy ptáme, na které straně Vltavy auto stojí. Zabouchnuté klíče vyřešíme ve dne i v noci a bez poškození vozu.",
      "Lidé, kteří jezdí do Prahy vlakem, nechávají auta v parkovacím domě P+R v Havlíčkově ulici nebo přímo u nádraží. Přijedeme za nimi stejně jako k nemocnici v Mostní ulici, k plaveckému bazénu, k Lidlu ve Veltruské ulici nebo k vrátnicím průmyslové zóny v Lobečku. Otevíráme osobní auta, dodávky i vozy s bezklíčovým přístupem všech značek a cenu vám řekneme hned do telefonu."
    ],
    hotspots: ["Parkovací dům P+R Havlíčkova", "Nádraží Kralupy nad Vltavou", "Most T. G. Masaryka", "Nemocnice s poliklinikou Kralupy", "Zimní stadion Lobeček", "Průmyslový areál v Lobečku"],
    tip: "Parkovací dům P+R v Havlíčkově ulici stojí asi 500 metrů od nádraží. Když voláte kvůli autu, které tu necháváte přes den, řekněte nám, jestli stojí v parkovacím domě, nebo na parkovišti přímo u nádraží – jde o dvě různá místa.",
    faq: {
      question: "Přijedete i do Zeměch nebo Minic, které leží stranou od centra Kralup?",
      answer: "Ano. Zeměchy jsou samostatná vesnice asi kilometr za Mikovicemi a Minice leží na jihozápadě města u silnice od Turska. Obě části patří ke Kralupům, takže k autu vyjedeme stejně jako do centra. Pomůže, když nám řeknete ulici nebo nejbližší zastávku."
    }
  },
  {
    slug: "neratovice",
    name: "Neratovice",
    locative: "v Neratovicích",
    region: "melnik",
    geo: [50.2593, 14.5177],
    parts: ["Neratovice", "Lobkovice", "Byškovice", "Mlékojedy", "Korycany", "Horňátky"],
    headline: "Spolana, čtyři zastávky vlaku a zámek Lobkovice",
    intro: [
      "Neratovice jsou už přes sto let spojené s chemickým průmyslem a areál Spolany patří k nejvýraznějším místům ve městě. Na směny se sem jezdí ve dne i v noci, a když si po noční směně zabouchnete klíče v autě, nemusíte čekat do rána. Přijedeme k továrně, k panelovým domům na sídlišti i k rodinným domům v Byškovicích a vůz otevřeme bez poškození zámku a těsnění.",
      "Vlak staví ve městě hned na čtyřech místech – Neratovice, Neratovice sídliště, Neratovice město a Lobkovice – takže když auto necháte u trati, řekněte nám, u které stanice stojí. Zajedeme i k nemocnici a nové poliklinice u zastávky Neratovice sídliště, ke Kulturnímu domu nebo do Lobkovic k zámku a zdymadlu. Otevíráme osobní auta i dodávky všech značek, včetně vozů s bezklíčovým přístupem, a cenu znáte předem."
    ],
    hotspots: ["Nádraží Neratovice", "Zastávka Neratovice sídliště", "Nemocnice Neratovice", "Kulturní dům Neratovice", "Areál Spolany", "Zámek Lobkovice"],
    tip: "Mlékojedy jsou jedinou částí Neratovic na pravém břehu Labe a s městem je spojuje jen železniční most a lávka pro pěší. Pokud auto stojí v Mlékojedech, řekněte to hned na začátku hovoru – technik tam musí jet jinou cestou než do centra.",
    faq: {
      question: "Otevřete auto u zastávky Neratovice sídliště v Mánesově ulici?",
      answer: "Ano. U zastávky vzniklo v Mánesově ulici zhruba 35 míst P+R a parkují tu i návštěvníci polikliniky a nedaleké nemocnice. Řekněte nám, na které straně trati vůz stojí, ať technik jede rovnou k němu."
    }
  }
];
