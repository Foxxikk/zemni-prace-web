// Pripadove studie pro stranku /reference.
// POZOR: rozsahy, doby trvani a obce vychazeji z realnych zakazek, ale pred
// nasazenim je projdi a uprav podle skutecnosti (hlavne cisla a obce).
// Fotografie jsou z galerie v public/reference.

export const pripadoveStudie = [
  {
    slug: "zaklady-rd-babice",
    title: "Výkop základů novostavby rodinného domu",
    obec: "Babice u Říčan",
    obecSlug: "babice-u-rican",
    sluzbaSlug: "vykopy-zakladu",
    zadani:
      "Investor potřeboval připravit pozemek pro nepodsklepený rodinný dům tak, aby mohla parta hned začít s bedněním.",
    rozsah: "skrývka ornice a výkop základových pasů pro dům o zastavěné ploše cca 120 m2",
    doba: "2 pracovní dny",
    stroje: ["JCB 3CX", "Tatra"],
    vysledek:
      "Ornici jsme uložili na deponii pro pozdější terénní úpravy, přebytek zeminy odvezli a plochu předali vyklizenou a začištěnou.",
    img: "/reference/07-vykop-zakladu.webp",
    alt: "Výkop základů rodinného domu v Babicích u Říčan",
  },
  {
    slug: "pripojky-ricany",
    title: "Vodovodní a kanalizační přípojka ke starší zástavbě",
    obec: "Říčany",
    obecSlug: "ricany",
    sluzbaSlug: "pripojky-inzenyrskych-siti",
    zadani:
      "Dům v úzké ulici bylo potřeba připojit na vodovod a kanalizaci, přístup na pozemek byl jen mezi plotem a stavbou.",
    rozsah: "rýha v délce cca 35 m v nezámrzné hloubce, pískové lože, obsyp a hutněný zásyp",
    doba: "2 pracovní dny",
    stroje: ["Kubota – pásový bagr 3,5 t", "Wacker Neuson RTSC3"],
    vysledek:
      "Nejužší úsek jsme dokopali ručně, zásyp zhutnili po vrstvách a povrch vrátili do původního stavu.",
    img: "/reference/01-vykop-ryhy.webp",
    alt: "Výkop rýhy pro vodovodní a kanalizační přípojku v Říčanech",
  },
  {
    slug: "pazeni-mukarov",
    title: "Hlubší výkop se zajištěním pažení",
    obec: "Mukařov",
    obecSlug: "mukarov",
    sluzbaSlug: "pripojky-inzenyrskych-siti",
    zadani:
      "Výkop pro uložení potrubí sahal hlouběji, než dovoluje nepažená stěna, a byl blízko stávající stavby.",
    rozsah: "výkop s postupným zajištěním stěn pažením a bezpečným výstupem",
    doba: "1 pracovní den",
    stroje: ["CAT T320"],
    vysledek:
      "Práce proběhla bez podemletí okolního terénu, po uložení potrubí jsme rýhu zasypali a zhutnili.",
    img: "/reference/02-pazeni.webp",
    alt: "Zajištění pažení výkopu v Mukařově",
  },
  {
    slug: "site-sestajovice",
    title: "Rozvod inženýrských sítí pro nové parcely",
    obec: "Šestajovice",
    obecSlug: "sestajovice",
    sluzbaSlug: "pripojky-inzenyrskych-siti",
    zadani:
      "Na rozparcelovaném pozemku bylo potřeba vykopat rýhy pro vodu, kanalizaci a kabelové vedení k jednotlivým parcelám.",
    rozsah: "souběh několika sítí v jedné trase, výkopy pro revizní šachty",
    doba: "3 pracovní dny",
    stroje: ["JCB 3CX", "Wacker Neuson RTSC3"],
    vysledek:
      "Trasy jsme kopali podle vytyčení správců sítí, výkopy postupně zasypávali a hutnili, aby byla parcela stále přístupná.",
    img: "/reference/03-pripojky-site.webp",
    alt: "Výkopy pro inženýrské sítě v Šestajovicích",
  },
  {
    slug: "sachta-uvaly",
    title: "Výkop a osazení kanalizační šachty",
    obec: "Úvaly",
    obecSlug: "uvaly",
    sluzbaSlug: "pripojky-inzenyrskych-siti",
    zadani:
      "Ke stávající kanalizační přípojce bylo potřeba doplnit revizní šachtu tak, aby zůstal zachovaný spád.",
    rozsah: "výkop jámy pro šachtu, podkladní vrstva, osazení a zásyp",
    doba: "1 pracovní den",
    stroje: ["Kubota – pásový bagr 3,5 t"],
    vysledek:
      "Šachtu jsme osadili do správné výšky, okolí zhutnili a povrch urovnali do úrovně terénu.",
    img: "/reference/04-kanalizacni-sachta.webp",
    alt: "Osazení kanalizační šachty v Úvalech",
  },
  {
    slug: "zahrada-svojetice",
    title: "Terénní úpravy zahrady po dokončení stavby",
    obec: "Svojetice",
    obecSlug: "svojetice",
    sluzbaSlug: "terenni-upravy",
    zadani:
      "Po stavbě domu zůstal pozemek rozjezděný a plný nerovností, majitel chtěl rovnou plochu pod trávník.",
    rozsah: "srovnání terénu, rozprostření uložené ornice a příprava pláně pod výsev",
    doba: "2 pracovní dny",
    stroje: ["JCB 3CX", "Kubota R090"],
    vysledek:
      "Zahradu jsme vyspádovali od domu, ornici rozprostřeli a plochu urovnali tak, aby se dala hned zasít.",
    img: "/reference/08-terenni-upravy.webp",
    alt: "Terénní úpravy zahrady ve Svojeticích",
  },
  {
    slug: "bazen-mnichovice",
    title: "Výkop jámy pro bazén na menší zahradě",
    obec: "Mnichovice",
    obecSlug: "mnichovice",
    sluzbaSlug: "bazeny-a-jezirka",
    zadani:
      "Na zahradě s omezeným přístupem bylo potřeba vykopat jámu pro bazén podle rozměrů dodavatele.",
    rozsah: "hloubení jámy včetně rezervy na obsyp, rovné dno a zhutněný podklad",
    doba: "1–2 pracovní dny",
    stroje: ["CAT T320", "Nákladní vůz – nosič kontejnerů"],
    vysledek:
      "Výkopek jsme částečně využili na pozemku a zbytek odvezli, dno jsme urovnali a zhutnili pro usazení bazénu.",
    img: "/reference/11-vykop-rypadlem.webp",
    alt: "Výkopové práce pásovým rypadlem pro bazén v Mnichovicích",
  },
  {
    slug: "odvoz-klanovice",
    title: "Odvoz přebytečné zeminy z rekonstrukce",
    obec: "Klánovice",
    obecSlug: "klanovice",
    sluzbaSlug: "odvoz-zeminy-a-sute",
    zadani:
      "Po výkopových pracích zůstala na pozemku hromada zeminy, kterou nebylo kde uložit.",
    rozsah: "nakládka a odvoz výkopku, zpáteční cestou dovoz štěrku na podklad",
    doba: "1 pracovní den",
    stroje: ["Kubota R090", "Nákladní vůz – nosič kontejnerů"],
    vysledek:
      "Zeminu jsme odvezli a uložili na skládku, pozemek zůstal uklizený a připravený k dalším pracím.",
    img: "/reference/14-odvoz-zeminy.webp",
    alt: "Odvoz a likvidace přebytečné zeminy v Klánovicích",
  },
];
