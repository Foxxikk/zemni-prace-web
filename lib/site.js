// Centrální konfigurace webu – placeholdery upravte na reálné údaje firmy.
export const site = {
  company: "Firma s.r.o.",
  tagline: "Zemní a výkopové práce – Praha-východ",
  phone: "+420 774 248 497",
  phoneHref: "tel:+420774248497",
  email: "info@vase-domena.cz",
  ico: "12345678",
  dic: "CZ12345678",
  address: "Ulice 123, 250 00 Praha-východ",
  region: "Praha-východ a okolí (střední Čechy)",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vase-domena.cz",
  // Obce pro lokální SEO – upravte dle reálné působnosti.
  obce: [
    "Říčany", "Úvaly", "Brandýs nad Labem", "Český Brod", "Čelákovice",
    "Mnichovice", "Kostelec nad Černými lesy", "Šestajovice", "Klánovice",
    "Říčany u Prahy", "Mukařov", "Velké Popovice",
  ],
};

export const sluzby = [
  { slug: "vykopy-zakladu", title: "Výkopy základů", desc: "Vytyčení stavby, skrývka ornice a hloubení základových pasů pro rodinné domy i menší stavby." },
  { slug: "pripojky", title: "Přípojky inženýrských sítí", desc: "Výkopy přípojek kanalizace, vody a plynu dle projektu a platných norem." },
  { slug: "bazeny-jezirka", title: "Bazény a jezírka", desc: "Hloubení jam pro bazény a zahradní jezírka různých rozměrů a tvarů." },
  { slug: "terenni-upravy", title: "Terénní úpravy", desc: "Úpravy terénu, svahování, sejmutí a rozprostření ornice, hutnění a finální úpravy zahrad a hřišť." },
  { slug: "ploty-drenaze", title: "Základy plotů a drenáže", desc: "Hloubení základů pro ploty, výkopy drenáží a svodů." },
  { slug: "jamy-stromy", title: "Jámy pro stromy", desc: "Hloubení jam pro výsadbu stromů a další zahradní výkopové práce." },
];

// Kompletní výčet prací (z PRD).
export const seznamPraci = [
  "výkopy základů",
  "hloubení bazénů",
  "hloubení zahradních jezírek",
  "hloubení základů pro ploty",
  "výkopy přípojek inženýrských sítí",
  "hloubení jam pro stromy",
  "výkopy drenáží",
  "výkopy svodů",
  "úpravy terénů",
  "zajištění pažení",
  "terénní úpravy zahrad a hřišť",
  "sejmutí a rozprostření ornice",
  "výkopy rýh pro kabelová vedení",
  "bourací práce hydraulickým kladivem",
  "hutnění apod.",
];

export const technika = [
  { name: "JCB 3CX", type: "Traktorbagr (rypadlo-nakladač)", use: "Univerzální stroj pro výkopy, nakládku a terénní práce.", img: "/technika/jcb-3cx.webp" },
  { name: "JCB 3CX CityMaster", type: "Kompaktní traktorbagr", use: "Práce ve stísněných a městských podmínkách s plným výkonem.", img: "/technika/jcb-3cx-citymaster.webp" },
  { name: "CAT T320", type: "Pásové rypadlo", use: "Větší výkopy, hloubení základů a jam, práce na nezpevněném terénu.", img: "/technika/cat-t320.webp" },
  { name: "Kubota – pásový bagr 3,5 t", type: "Minirypadlo", use: "Výkopy podél zdí, zahrady a stísněné prostory s nízkým záborem.", img: "/technika/kubota-mini.webp" },
  { name: "Kubota R090", type: "Kolový nakladač", use: "Nakládka, přesun a rozprostření materiálu na stavbě.", img: "/technika/kubota-r090.webp" },
];

// Galerie realizací – reálné fotografie z public/reference.
export const reference = [
  { src: "/reference/01-vykop-ryhy.webp", alt: "Výkop rýhy pro přípojku – Praha-východ" },
  { src: "/reference/02-pazeni.webp", alt: "Zajištění pažení výkopu" },
  { src: "/reference/03-pripojky-site.webp", alt: "Výkop pro inženýrské sítě" },
  { src: "/reference/04-kanalizacni-sachta.webp", alt: "Osazení kanalizační šachty" },
  { src: "/reference/05-doprava-techniky.webp", alt: "Doprava techniky na stavbu" },
  { src: "/reference/06-zemni-prace-stavba.webp", alt: "Zemní práce na stavbě" },
  { src: "/reference/07-vykop-zakladu.webp", alt: "Výkop základů rodinného domu" },
  { src: "/reference/08-terenni-upravy.webp", alt: "Terénní úpravy pozemku" },
  { src: "/reference/09-rozprostreni-zeminy.webp", alt: "Rozprostření a urovnání zeminy" },
  { src: "/reference/10-uprava-terenu.webp", alt: "Úprava terénu a zhutnění" },
  { src: "/reference/11-vykop-rypadlem.webp", alt: "Výkopové práce pásovým rypadlem" },
  { src: "/reference/12-nakladka-materialu.webp", alt: "Nakládka materiálu kolovým nakladačem" },
  { src: "/reference/13-zemni-prace-pozemek.webp", alt: "Zemní práce na pozemku" },
  { src: "/reference/14-odvoz-zeminy.webp", alt: "Odvoz a likvidace přebytečné zeminy" },
];
