// Lokality pro lokální SEO. Každá obec má vlastní podstránku /zemni-prace/<slug>.
// Texty popisují, co v dané lokalitě reálně řešíme – jsou psané pro zákazníka.

export const lokality = [
  {
    slug: "babice-u-rican",
    name: "Babice u Říčan",
    inName: "v Babicích u Říčan",
    km: 0,
    lead:
      "Babice jsou naše domovská obec. Technika stojí v Krátké 203, takže na pozemek se dostaneme obvykle do hodiny od telefonátu.",
    text:
      "Protože tady sídlíme, známe místní pozemky, šířky ulic i to, kudy se dá projet s traktorbagrem a kde už je potřeba minirypadlo. Odpadá také doprava techniky, což se u menších zakázek pozná na výsledné ceně.",
    podlozi:
      "V Babicích se běžně setkáváme s jílovitými hlínami a kamenitou vrstvou nad skalním podložím, které místy vystupuje poměrně vysoko.",
    typicke: [
      "výkopy základů novostaveb rodinných domů",
      "rýhy pro vodovodní, kanalizační a elektrické přípojky",
      "jámy pro bazény a zahradní jezírka",
      "srovnání a finální úpravy zahrad po stavbě",
    ],
    okoli: ["Svojetice", "Mukařov", "Tehovec", "Doubek", "Klokočná"],
    faq: [
      {
        q: "Jak rychle přijedete do Babic?",
        a: "Technika stojí přímo v obci, takže menší práce zvládneme často ještě týž den. U větších výkopů se domlouváme na termínu podle rozsahu a počasí.",
      },
      {
        q: "Platí se v Babicích doprava techniky?",
        a: "V Babicích a nejbližším okolí dopravu techniky neúčtujeme, platí se pouze odpracované hodiny. Pro vzdálenější obce platí příplatek podle ceníku.",
      },
    ],
  },
  {
    slug: "ricany",
    name: "Říčany",
    inName: "v Říčanech",
    km: 7,
    lead:
      "Říčany jsou největší město v našem okolí a jezdíme sem nejčastěji. Z Babic je to sedm kilometrů, technika je tedy na místě rychle.",
    text:
      "Pracujeme v Radošovicích, Strašíně, na Kuří i v nových čtvrtích na okrajích města. U starší zástavby řešíme nejčastěji přípojky a odvodnění, u novostaveb výkopy základů a přípravu zahrady po dokončení stavby.",
    podlozi:
      "Pro Říčany je typický říčanský granit. Žulové podloží v některých ulicích vystupuje těsně pod povrch, proto s sebou vozíme hydraulické kladivo na rozrušení tvrdých vrstev.",
    typicke: [
      "výkopy základových pasů rodinných domů",
      "rýhy pro přípojky v úzkých zastavěných ulicích",
      "jámy pro bazény na menších zahradách",
      "drenáže u domů s vlhkým sklepem",
    ],
    okoli: ["Radošovice", "Strašín", "Kuří", "Světice", "Tehov", "Jažlovice"],
    faq: [
      {
        q: "Zvládnete výkop na malé zahradě v Říčanech?",
        a: "Ano. Do stísněných prostor jezdíme s minirypadlem Kubota o hmotnosti 3,5 t, které projede běžnou zahradní branku. Kde se stroj nedostane vůbec, dokončíme část výkopu ručně.",
      },
      {
        q: "Co se stane, když narazíte na žulu?",
        a: "V Říčanech je to poměrně častá situace. Skálu rozrušíme hydraulickým kladivem. Práce se tím zpomalí, proto na to upozorníme hned při obhlídce, aby cena nepřekvapila.",
      },
    ],
  },
  {
    slug: "mukarov",
    name: "Mukařov",
    inName: "v Mukařově",
    km: 5,
    lead:
      "Mukařov, Srbín a Žernovka jsou od nás pět kilometrů po hlavní silnici. Patří tak k lokalitám, kde jsme prakticky doma.",
    text:
      "Pozemky tady bývají svažité a často navazují na les. Velkou část práce proto tvoří modelace terénu, srovnání zahrad a odvedení vody od domu, aby se voda nedržela u základů.",
    podlozi:
      "V okolí Voděradských bučin se běžně objevují kamenité hlíny s většími kameny, které je nutné z výkopu průběžně odvážet.",
    typicke: [
      "srovnání a svahování svažitých zahrad",
      "výkopy jam pro bazény",
      "drenáže a odvedení dešťové vody od domu",
      "výkopy základů pro ploty a zídky",
    ],
    okoli: ["Srbín", "Žernovka", "Louňovice", "Tehovec", "Doubek"],
    faq: [
      {
        q: "Umíte srovnat svažitou zahradu?",
        a: "Ano, svahování a modelace terénu jsou tady naše nejčastější práce. Přebytečnou zeminu buď rozprostreme na pozemku, nebo ji odvezeme v kontejneru.",
      },
      {
        q: "Odvezete i kameny z výkopu?",
        a: "Ano. Kameny a přebytečnou zeminu odvážíme vlastním nákladním vozem, takže se nemusíte starat o jejich uložení.",
      },
    ],
  },
  {
    slug: "svojetice",
    name: "Svojetice",
    inName: "ve Svojeticích",
    km: 5,
    lead:
      "Svojetice jsou naše nejbližší sousední obec. V posledních letech tady vyrostla řada nových domů a s tím i poptávka po zemních pracích.",
    text:
      "Nejčastěji sem jezdíme na výkopy základů novostaveb a na přípojky, které se musí táhnout od hlavního řadu až k domu. Po dokončení stavby se vracíme na srovnání a úpravu zahrady.",
    podlozi:
      "Podloží je podobné jako v Babicích – jílovité hlíny s kamenitou vrstvou. Po dešti se tady zemina lepí, proto práce plánujeme podle počasí.",
    typicke: [
      "výkopy základů novostaveb",
      "delší rýhy pro přípojky k odlehlejším parcelám",
      "příprava podkladu pod zámkovou dlažbu a příjezdovou cestu",
      "úpravy zahrady po stavbě",
    ],
    okoli: ["Tehovec", "Klokočná", "Struhařov", "Babice u Říčan"],
    faq: [
      {
        q: "Jak dlouho trvá výkop základů rodinného domu?",
        a: "U běžného rodinného domu jsou to zpravidla jeden až tři dny podle rozsahu, hloubky a podloží. Přesnější odhad dáme po obhlídce pozemku.",
      },
      {
        q: "Přijedete se nejdřív podívat?",
        a: "Ano, obhlídka je zdarma a nezavazuje k ničemu. Ze Svojetic je to k nám pár minut, takže se dá stihnout klidně hned druhý den.",
      },
    ],
  },
  {
    slug: "struharov",
    name: "Struhařov",
    inName: "ve Struhařově",
    km: 7,
    lead:
      "Struhařov a okolní menší obce jsou od nás sedm kilometrů. Jezdíme sem hlavně k majitelům starších domů a na nové parcely na okrajích obce.",
    text:
      "Typická zakázka je tady kombinace několika prací dohromady – výkop pro přípojku, drenáž kolem domu a nakonec srovnání zahrady. Vyplatí se to udělat v jednom nájezdu techniky.",
    podlozi:
      "V okolí se objevuje kamenité podloží a místy skála, hlavně na vyvýšených parcelách. Hlubší výkopy je proto dobré probrat dopředu.",
    typicke: [
      "drenáže a odvodnění pozemku",
      "výkopy pro přípojky vody a kanalizace",
      "výkopy základů pro přístavby a garáže",
      "odvoz přebytečné zeminy",
    ],
    okoli: ["Klokočná", "Všestary", "Tehovec", "Mnichovice"],
    faq: [
      {
        q: "Dá se spojit více prací do jedné návštěvy?",
        a: "Doporučujeme to. Doprava techniky se účtuje jednou, takže když se výkop, drenáž i srovnání terénu udělají v jednom nájezdu, vyjde to výrazně levněji.",
      },
      {
        q: "Pracujete i na nezpevněném terénu?",
        a: "Ano. Kromě kolových strojů máme pásové rypadlo a minirypadlo, které se dostanou i na měkký nebo rozbahněný pozemek.",
      },
    ],
  },
  {
    slug: "velke-popovice",
    name: "Velké Popovice",
    inName: "ve Velkých Popovicích",
    km: 9,
    lead:
      "Do Velkých Popovic a okolních vesnic je to z Babic devět kilometrů. Terén je tady zvlněný, což má na zemní práce velký vliv.",
    text:
      "Na svažitých pozemcích řešíme hlavně to, kam odvést vodu a jak zahradu vyrovnat do použitelných rovin. Často k tomu patří i příprava míst pro opěrné stěny a zpevněné příjezdy.",
    podlozi:
      "Podloží je převážně skalnaté s tvrdšími vrstvami blízko povrchu. U hlubších výkopů proto počítáme s prací hydraulického kladiva.",
    typicke: [
      "modelace a terasování svažitých zahrad",
      "výkopy pro bazény ve sklonu",
      "odvodnění pozemků a svodů dešťové vody",
      "příprava podkladu pod příjezdové cesty",
    ],
    okoli: ["Petříkov", "Radimovice", "Sulice", "Kamenice", "Todice"],
    faq: [
      {
        q: "Jak řešíte bazén na svažitém pozemku?",
        a: "Nejdřív se vyrovná plocha pro bazén a určí, kam půjde odkopaná zemina. Část se obvykle použije na dorovnání spodní části zahrady, zbytek odvezeme.",
      },
      {
        q: "Zvládne technika prudký nájezd?",
        a: "Pásové rypadlo a minirypadlo jsou na sklon dobře stavěné. U opravdu prudkých pozemků řešíme přístup individuálně, aby nedošlo k poškození zahrady.",
      },
    ],
  },
  {
    slug: "mnichovice",
    name: "Mnichovice",
    inName: "v Mnichovicích",
    km: 9,
    lead:
      "Mnichovice a okolní obce jsou od nás devět kilometrů. Kombinuje se tady starší zástavba s novými rodinnými domy.",
    text:
      "U starších domů nejčastěji řešíme vlhkost, odvodnění a výměnu starých přípojek. U novostaveb pak celý cyklus od skrývky ornice po srovnání zahrady.",
    podlozi:
      "Podloží je kamenité až skalnaté, na některých parcelách s vysokou hladinou vody v blízkosti potoka. Podle toho se volí hloubka a způsob pažení.",
    typicke: [
      "drenáže a izolační rýhy kolem starších domů",
      "výměna a výkopy nových přípojek",
      "skrývka ornice a výkopy základů",
      "odvoz zeminy a suti v kontejnerech",
    ],
    okoli: ["Myšlín", "Božkov", "Ondřejov", "Kaliště", "Hrusice", "Stránčice"],
    faq: [
      {
        q: "Pomůže drenáž na vlhký sklep?",
        a: "Ve většině případů ano, pokud je příčinou voda stékající k domu. Při obhlídce se podíváme na spád terénu a řekneme, jestli drenáž problém vyřeší, nebo je potřeba i izolace.",
      },
      {
        q: "Umíte kopat blízko starých zdí?",
        a: "Ano, na to používáme minirypadlo a v kritických místech ruční dokopání. Kde je potřeba, zajistíme stěny výkopu pažením.",
      },
    ],
  },
  {
    slug: "kamenice",
    name: "Kamenice",
    inName: "v Kamenici",
    km: 12,
    lead:
      "Kamenice a její části jsou od nás dvanáct kilometrů. Je to rozsáhlá obec, kde se stále staví, takže zemní práce tady mají pořád co dělat.",
    text:
      "Jezdíme sem na výkopy základů, přípojky i na úpravy zahrad u dokončených domů. Díky vlastnímu nákladnímu vozu zvládneme i dovoz štěrku a písku, takže se nemusí řešit další dodavatel.",
    podlozi:
      "Podloží je převážně kamenité, na vyvýšených místech se blíží skále. Na rovinatějších parcelách se pracuje s běžnou hlínou.",
    typicke: [
      "výkopy základů rodinných domů",
      "rýhy pro přípojky a kabelová vedení",
      "dovoz a rozprostření štěrku a písku",
      "terénní úpravy a srovnání zahrad",
    ],
    okoli: ["Ládví", "Štiřín", "Těptín", "Olešovice", "Nová Hospoda", "Struhařov"],
    faq: [
      {
        q: "Dovezete i materiál, nebo jen kopete?",
        a: "Dovezeme. Máme nákladní vůz s nosičem kontejnerů i sklápěč, takže zajistíme štěrk, písek i kamenivo a odvezeme přebytečnou zeminu.",
      },
      {
        q: "Kolik stojí doprava techniky do Kamenice?",
        a: "Doprava techniky je podle ceníku 1 000 Kč v okruhu do 20 km od Babic, takže se do ní Kamenice vejde. Účtuje se jednou za nájezd, ne za každý stroj.",
      },
    ],
  },
  {
    slug: "uvaly",
    name: "Úvaly",
    inName: "v Úvalech",
    km: 10,
    lead:
      "Úvaly jsou od nás deset kilometrů severním směrem. Rozrůstají se o nové rodinné domy a s nimi přichází i poptávka po výkopech a úpravách pozemků.",
    text:
      "Ve starší části města se pohybujeme v úzkých ulicích, kde je potřeba menší technika a domluva se sousedy. V nové výstavbě pak děláme klasický cyklus od skrývky ornice po finální srovnání zahrady.",
    podlozi:
      "Půdy jsou tady spíš hlinité až písčité, dobře se v nich kope. V blízkosti Výmoly ale bývá vyšší hladina podzemní vody, s čím u hlubších výkopů počítáme.",
    typicke: [
      "výkopy základů a základových pasů",
      "rýhy pro přípojky v úzkých ulicích staré zástavby",
      "příprava plochy pod zámkovou dlažbu a garážový vjezd",
      "odvoz zeminy a suti při rekonstrukcích",
    ],
    okoli: ["Škvorec", "Přišimasy", "Tuklaty", "Horoušany", "Jirny"],
    faq: [
      {
        q: "Projede bagr úzkou ulicí ve staré části Úval?",
        a: "Ve většině případů ano. Kde je opravdu málo místa, přijedeme s minirypadlem, které je široké necelý a půl metru a projede i běžným průjezdem.",
      },
      {
        q: "Co když se ve výkopu objeví voda?",
        a: "Blízko potoka je to běžné. Výkop odvodníme kalovým čerpadlem a stěny podle potřeby zapažíme, aby se rýha nesesouvala.",
      },
    ],
  },
  {
    slug: "sestajovice",
    name: "Šestajovice",
    inName: "v Šestajovicích",
    km: 11,
    lead:
      "Do Šestajovic je to z Babic jedenáct kilometrů. Je to obec s hustou novou výstavbou, kde se pozemky často upravují až po dokončení domu.",
    text:
      "Nejčastěji sem jezdíme na dokončovací terénní úpravy – rozprostření ornice, srovnání zahrady, přípravu podkladu pod dlažbu a trávník. K tomu patří i odvoz stavebního odpadu.",
    podlozi:
      "Terén je rovinatý a půdy hlinité, takže se pracuje poměrně snadno. Zádrhelem bývá spíš stísněný přístup mezi novými domy.",
    typicke: [
      "finální terénní úpravy po výstavbě",
      "příprava podkladu pod trávník a dlažbu",
      "výkopy pro plotové základy",
      "odvoz suti a zeminy v kontejnerech",
    ],
    okoli: ["Jirny", "Zeleneč", "Nehvizdy", "Horoušany", "Klánovice"],
    faq: [
      {
        q: "Připravíte pozemek pro pokládku trávníku?",
        a: "Ano. Plochu srovnáme, zbavíme kamenů a stavebních zbytků, rozprostřeme ornici a zhutníme podklad tak, aby se trávník dal rovnou položit nebo zasít.",
      },
      {
        q: "Umíte pracovat mezi hotovými domy?",
        a: "Ano, to je tady většina zakázek. Používáme menší stroje, plochy chráníme a přístupovou cestu po sobě uklidíme.",
      },
    ],
  },
  {
    slug: "klanovice",
    name: "Klánovice",
    inName: "v Klánovicích",
    km: 10,
    lead:
      "Klánovice jsou na okraji Prahy, deset kilometrů od nás. Charakteristické jsou velké zahrady a blízkost Klánovického lesa.",
    text:
      "Na velkých zahradách děláme jezírka, bazény, drenáže i výkopy pro závlahy a osvětlení. U starších vil pak často odvodnění a opravy dávno položených přípojek.",
    podlozi:
      "V okolí lesa jsou půdy převážně písčité, což usnadňuje kopání, ale stěny výkopu se snáz sesouvají. U hlubších rýh proto pažíme.",
    typicke: [
      "hloubení jam pro bazény a zahradní jezírka",
      "výkopy pro závlahy a zahradní osvětlení",
      "drenáže a odvodnění vzrostlých zahrad",
      "výkopy pro nové přípojky u starších domů",
    ],
    okoli: ["Šestajovice", "Úvaly", "Koloděje", "Běchovice", "Horní Počernice"],
    faq: [
      {
        q: "Zvládnete výkop, aniž byste poškodili vzrostlé stromy?",
        a: "Snažíme se o to. Kolem korenoveho systému pracujeme s minirypadlem a poslední část dokopáváme ručně, aby se silné korene nepřerušily.",
      },
      {
        q: "Jak hluboká jáma je potřeba na jezírko?",
        a: "Záleží na typu jezírka. U okrasného stačí okolo metru, u koupacího nebo s rybami se jde hlouběji. Rozměry ladíme podle vašeho projektu.",
      },
    ],
  },
  {
    slug: "skvorec",
    name: "Škvorec",
    inName: "ve Škvorci",
    km: 7,
    lead:
      "Škvorec a okolní obce jsou od nás sedm kilometrů. Jde o klidnou oblast s mixem starších domů a nové výstavby.",
    text:
      "Řešíme tady jak výkopy základů pro nové domy, tak práce u starších stavení, kde chybí zpevněné plochy nebo je potřeba odvést vodu z pozemku.",
    podlozi:
      "Půdy jsou hlinité, místy s vrstvami kamení. U starších pozemků se občas narazí na staré zásypy a stavební zbytky.",
    typicke: [
      "výkopy základů a přístavby",
      "zpevněné plochy a příjezdové cesty",
      "odvodnění a drenáže pozemku",
      "bourací práce hydraulickým kladivem",
    ],
    okoli: ["Sibřina", "Květnice", "Dobročovice", "Doubek", "Úvaly"],
    faq: [
      {
        q: "Zvládnete i menší demoliční práce?",
        a: "Ano, drobné bourání starých betonů, patek a zpevněných ploch děláme hydraulickým kladivem a suť odvezeme v kontejneru.",
      },
      {
        q: "Jak se dostanu k ceně předem?",
        a: "Stačí zavolat nebo poslat poptávku z webu s popisem pozemku. Většinou se přijedeme podívat a pak dostanete orientační cenu na hodiny a dopravu.",
      },
    ],
  },
  {
    slug: "kostelec-nad-cernymi-lesy",
    name: "Kostelec nad Černými lesy",
    inName: "v Kostelci nad Černými lesy",
    km: 13,
    lead:
      "Kostelec nad Černými lesy je od nás třináct kilometrů. Oblast je lesnatá a pozemky často navazují přímo na les.",
    text:
      "Kromě běžných výkopů tady hodně řešíme vodu – svody, drenáže a odvedení dešťové vody z pozemku, protože svahy od lesa přinášejí vodu přímo k domům.",
    podlozi:
      "Podloží je písčito-hlinité s vrstvami kamení, na okrajích lesa hodně prorostlé korenoveho systému. Výkopy je proto potřeba vést s rozmyslem.",
    typicke: [
      "drenáže a odvedení vody ze svahů",
      "výkopy základů a plotových patek",
      "srovnání a odvodnění zahrad",
      "trhání pařezů a čištění pozemků",
    ],
    okoli: ["Vyžlovka", "Jevany", "Louňovice", "Stříbrná Skalice", "Oleška"],
    faq: [
      {
        q: "Voda z lesa mi teče na pozemek. Co s tím?",
        a: "Obvykle pomůže záchytná drenáž nebo příkop nad domem, který vodu odvede mimo pozemek. Řešení navrhneme podle spádu terénu při obhlídce.",
      },
      {
        q: "Odstraníte i pařezy?",
        a: "Ano, pařezy vytrháme rypadlem a odvezeme. U velkých stromů se ale nejdřív podíváme, jestli to jde bez poškození okolí.",
      },
    ],
  },
  {
    slug: "cesky-brod",
    name: "Český Brod",
    inName: "v Českém Brodě",
    km: 18,
    lead:
      "Český Brod leží osmnáct kilometrů od nás na východ. Okolí je rovinaté a zemědělské, což zemním pracím většinou přeje.",
    text:
      "Jezdíme sem na výkopy základů, delší rýhy pro přípojky na velkých parcelách i na úpravy pozemků. Díky rovinatému terénu se tady dá dobře pracovat i s většími stroji.",
    podlozi:
      "Typické jsou hluboké spraše a úrodné hlinité půdy. Kope se v nich dobře, ale ornice má cenu a vyplatí se ji na pozemku uchovat.",
    typicke: [
      "výkopy základů rodinných domů a hal",
      "delší rýhy pro přípojky na velkých parcelách",
      "skrývka a uložení ornice",
      "srovnání a příprava pozemků pod stavbu",
    ],
    okoli: ["Přišimasy", "Tuklaty", "Rostoklaty", "Doubravčice", "Tismice"],
    faq: [
      {
        q: "Co se dělá se skrytou ornicí?",
        a: "Ornici sejmeme a uložíme na pozemku na deponii. Po dokončení stavby ji rozprostřeme zpět na zahradu, což ušetří peníze za nákup nové zeminy.",
      },
      {
        q: "Jezdíte i osmnáct kilometrů daleko?",
        a: "Ano. Doprava techniky je podle ceníku 1 000 Kč v okruhu do 20 km, takže Český Brod stále spadá do běžného pásma.",
      },
    ],
  },
  {
    slug: "celakovice",
    name: "Čelákovice",
    inName: "v Čelákovicích",
    km: 18,
    lead:
      "Čelákovice jsou od nás osmnáct kilometrů. Blízkost Labe tady ovlivňuje skoro každý hlubší výkop.",
    text:
      "V okolí řeky se běžně naráží na vodu už v malé hloubce, takže hodně práce spočívá ve správném odvodnění a zajištění výkopu. Zvládáme i výkopy pro bazény na písčitých pozemcích.",
    podlozi:
      "Podloží tvoří labské terasy s písky a štěrky. Kope se v nich rychle, ale stěny se rády sesouvají a hladina podzemní vody je poměrně vysoko.",
    typicke: [
      "výkopy se zajištěním stěn a odvodněním",
      "jámy pro bazény na písčitých pozemcích",
      "drenáže a odvedení vody od domu",
      "dovoz štěrku a zpevnění ploch",
    ],
    okoli: ["Záluží", "Sedlčánky", "Nehvizdy", "Zeleneč", "Lázně Toušeň"],
    faq: [
      {
        q: "Jak řešíte vysokou hladinu podzemní vody?",
        a: "Výkop průběžně odvodňujeme kalovým čerpadlem a stěny zajišťujeme pažením. U bazénů je také důležité správně navrhnout obsyp, aby jáma držela.",
      },
      {
        q: "Je práce v písku dražší?",
        a: "Samotné kopání je rychlejší, ale přidá se čas na pažení a čerpání. Ve výsledku je to zpravidla srovnatelné s jílovitým podložím.",
      },
    ],
  },
  {
    slug: "brandys-nad-labem",
    name: "Brandýs nad Labem",
    inName: "v Brandýse nad Labem",
    km: 20,
    lead:
      "Brandýs nad Labem a Stará Boleslav jsou na okraji naší běžné působnosti, dvacet kilometrů od Babic. I sem ale pravidelně jezdíme.",
    text:
      "V labské nivě je hlavní téma voda. Kromě výkopů proto často navrhujeme, jak pozemek odvodnit, aby se voda nedržela u domu ani na zahradě.",
    podlozi:
      "Niva Labe znamená naplavené písky a hlíny s vysokou hladinou vody. Hlubší výkopy se tady bez čerpání a pažení většinou neobejdou.",
    typicke: [
      "odvodnění pozemků v nivě",
      "výkopy základů se zajištěním stěn",
      "výkopy přípojek a revizních šachet",
      "terénní úpravy a navážky pro vyrovnání terénu",
    ],
    okoli: ["Zápy", "Dřevčice", "Jenštejn", "Lázně Toušeň", "Nehvizdy"],
    faq: [
      {
        q: "Vezmete zakázku i dvacet kilometrů od Babic?",
        a: "Ano. U větších prací to nehraje roli, u opravdu malých zakázek ale doprava techniky tvoří podstatnou část ceny, takže to řekneme dopředu.",
      },
      {
        q: "Zajistíte i navážku zeminy na vyrovnání terénu?",
        a: "Ano, dovezeme zeminu i štěrk vlastními vozy, rozprostřeme je a zhutníme válcem.",
      },
    ],
  },
];

export function getLokalita(slug) {
  return lokality.find((l) => l.slug === slug) || null;
}

export const lokalitaSlugs = lokality.map((l) => l.slug);
