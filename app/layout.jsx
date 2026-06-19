import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Zemní a výkopové práce ${site.region} | ${site.company}`,
    template: `%s | ${site.company}`,
  },
  description:
    "Zemní a výkopové práce na klíč v okrese Praha-východ. Výkopy základů, přípojky inženýrských sítí, bazény, jezírka a terénní úpravy vlastní technikou.",
  keywords: [
    "zemní práce Praha-východ", "výkopy základů", "hloubení bazénů",
    "přípojky inženýrských sítí", "terénní úpravy", "bagr Praha-východ",
  ],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: site.company,
    title: `Zemní a výkopové práce ${site.region}`,
    description: "Zemní a výkopové práce na klíč vlastní technikou v okrese Praha-východ.",
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.company,
    description: "Zemní a výkopové práce na klíč v okrese Praha-východ.",
    telephone: site.phone,
    email: site.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Praha-východ",
      addressRegion: "Středočeský kraj",
      addressCountry: "CZ",
    },
    areaServed: site.region,
  };
  return (
    <html lang="cs">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Fab />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
