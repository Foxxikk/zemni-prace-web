// Centrální konfigurace webu.
export const site = {
  company: "Kruk & Co s.r.o.",
  tagline: "Zemní a výkopové práce – Praha-východ",
  phone: "+420 774 248 497",
  phoneHref: "tel:+420774248497",
  email: "krukbabice@gmail.com",
  ico: "25674986",
  dic: "CZ25674986",
  address: "Krátká 203, 25101 Babice u Říčan",
  region: "Praha-východ a okolí (střední Čechy)",
  priceRange: "1000 Kč/hod",
  openingHours: "Po–Pá 7:00–17:00",
  geo: { lat: 50.0056, lng: 14.6497 },
  // Fallback musi byt realna domena, jinak by pri chybejici env promenne
  // sitemap a canonicaly ukazovaly na neexistujici web.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zemniprace-prahavychod.cz",
  // Obce pro lokální SEO – dle reálné působnosti (do 25 km od Babic u Říčan).
  obce: [
    "Říčany",
    "Úvaly",
    "Brandýs nad Labem",
    "Český Brod",
    "Čelákovice",
    "Mnichovice",
    "Kostelec nad Černými lesy",
    "Šestajovice",
    "Klánovice",
    "Mukařov",
    "Velké Popovice",
    "Babice u Říčan",
  ],
};


export const sluzby = [
  { slug: "vykopy-zakladu", title: "Výkopy základů", desc: "Vytyčení stavby, skrývka ornice a hloubení základových pasů pro rodinné domy i menší stavby." },
