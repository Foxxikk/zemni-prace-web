// Centrální konfigurace webu – placeholdery upravte na reálné údaje firmy.
export const site = {
  company: "Firma s.r.o.",
  tagline: "Zemní a výkopové práce – Praha-východ",
  phone: "+420 777 123 456",
  phoneHref: "tel:+420777123456",
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
  "výkopy přípojek inženýrských sítí (kanalizace, voda, plyn)",
  "hloubení jam pro stromy",
  "výkopy drenáží",
  "výkopy svodů",
  "úpravy terénů",
  "zajištění pažení",
  "terénní úpravy zahrad a hřišť",
  "sejmutí a rozprostření ornice",
  "hutnění apod.",
];

export const technika = [
  { name: "JCB 3CX", type: "Traktorbagr (rypadlo-nakladač)", use: "Univerzální stroj pro výkopy, nakládku a terénní práce." },
  { name: "JCB 3CX CityMaster", type: "Kompaktní traktorbagr", use: "Práce ve stísněných a městských podmínkách s plným výkonem." },
  { name: "CAT T320", type: "Pásové rypadlo", use: "Větší výkopy, hloubení základů a jam, práce na nezpevněném terénu." },
  { name: "Kubota – pásový bagr 3,5 t", type: "Minirypadlo", use: "Výkopy podél zdí, zahrady a stísněné prostory s nízkým záborem." },
  { name: "Kubota R090", type: "Kolový nakladač", use: "Nakládka, přesun a rozprostření materiálu na stavbě." },
];
