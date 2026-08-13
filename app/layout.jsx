import "./globals.css";
import "./cookiebar.css";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import Analytics from "@/components/Analytics";
import ClientTracking from "@/components/ClientTracking";
import ConsentBanner from "@/components/ConsentBanner";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zemní a výkopové práce " + site.region + " | " + site.company,
    template: "%s | " + site.company,
  },
  description:
    "Zemní a výkopové práce na klíč v okrese Praha-východ. Výkopy základů, přípojky inženýrských sítí, bazény, jezírka a terénní úpravy vlastní technikou.",
  keywords: [
    "zemní práce Praha-východ",
    "výkopové práce Praha-východ",
    "výkopy základů",
    "hloubeni bazénů",
    "přípojky inženýrských sítí",
    "terénní úpravy",
    "bagr s obsluhou Praha-východ",
  ],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: site.company,
    title: "Zemní a výkopové práce " + site.region,
    description:
      "Zemní a výkopové práce na klíč vlastní technikou v okrese Praha-východ.",
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": site.url + "/#firma",
    name: site.company,
    description: "Zemní a výkopové práce na klíč v okrese Praha-východ.",
    telephone: site.phone,
    email: site.email,
    url: site.url,
    priceRange: site.priceRange,
    image: site.url + "/hero.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Krátká 203",
      postalCode: "251 01",
      addressLocality: "Babice u Říčan",
      addressRegion: "Středočeský kraj",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.obce.map((o) => ({ "@type": "City", name: o })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    identifier: site.ico,
  };

  return (
    <html lang="cs">
      <head>
        <Analytics />
      </head>
      <body>
        <Suspense fallback={null}>
          <ClientTracking />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
        <Fab />
        <ConsentBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
