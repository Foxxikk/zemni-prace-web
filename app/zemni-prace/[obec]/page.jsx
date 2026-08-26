import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";
import { lokality, getLokalita } from "@/lib/lokality";
import { sluzbyDetail } from "@/lib/sluzbyDetail";

export function generateStaticParams() {
  return lokality.map((l) => ({ obec: l.slug }));
}

export async function generateMetadata({ params }) {
  const { obec } = await params;
  const l = getLokalita(obec);
  if (!l) return {};
  const dojezd = l.km === 0 ? "Sídlíme přímo tady." : "Z Babic u Říčan je to " + l.km + " km.";
  return {
    title: "Zemní a výkopové práce " + l.name,
    description:
      "Zemní a výkopové práce " + l.inName + " – výkopy základů, přípojky, bazény, drenáže a terénní úpravy vlastní technikou. " + dojezd,
    alternates: { canonical: "/zemni-prace/" + l.slug },
    openGraph: {
      type: "website",
      title: "Zemní a výkopové práce " + l.name,
      description: l.lead,
    },
  };
}

export default async function LokalitaPage({ params }) {
  const { obec } = await params;
  const l = getLokalita(obec);
  if (!l) notFound();

  const okolniObce = lokality.filter((x) => x.slug !== l.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Zemní a výkopové práce " + l.inName,
    serviceType: "Zemní a výkopové práce",
    description: l.lead,
    areaServed: { "@type": "City", name: l.name, addressCountry: "CZ" },
    provider: {
      "@type": "LocalBusiness",
      "@id": site.url + "/#firma",
      name: site.company,
      telephone: site.phone,
      url: site.url,
      priceRange: site.priceRange,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Krátká 203",
        postalCode: "251 01",
        addressLocality: "Babice u Říčan",
        addressRegion: "Středočeský kraj",
        addressCountry: "CZ",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zemní práce " + l.inName,
      itemListElement: sluzbyDetail.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title + " " + l.inName,
          url: site.url + "/sluzby/" + s.slug,
        },
      })),
    },
  };

  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs
            items={[{ name: "Zemní práce", href: "/zemni-prace" }, { name: l.name }]}
          />
          <h1>Zemní a výkopové práce {l.inName}</h1>
          <p className="lead">{l.lead}</p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a className="btn btn-primary" href={site.phoneHref}>
              Zavolat {site.phone}
            </a>
            <Link className="btn btn-outline" href="/kontakt">
              Nezávazná poptávka
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="prose">
              <h2>Co {l.inName} nejčastěji děláme</h2>
              <p>{l.text}</p>
              <ul className="facts">
                {l.typicke.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Rychlá fakta</h3>
              <ul className="case-meta">
                <li>
                  <b>Dojezd z Babic u Říčan:</b>{" "}
                  {l.km === 0 ? "sídlíme přímo tady" : l.km + " km"}
                </li>
                <li>
                  <b>Obvyklý termín nástupu:</b> 1–3 dny podle vytížení
                </li>
                <li>
                  <b>Sazba:</b> od {site.priceRange} za stroj i s obsluhou
                </li>
                <li>
                  <b>Provozní doba:</b> {site.openingHours}
                </li>
                {l.okoli && l.okoli.length ? (
                  <li>
                    <b>Jezdíme i do:</b> {l.okoli.join(", ")}
                  </li>
                ) : null}
              </ul>
              <p style={{ marginTop: 18 }}>
                <Link className="btn btn-dark" href="/kontakt">
                  Chci cenu pro {l.name}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Podloží a na co si {l.inName} dát pozor</h2>
          <div className="prose">
            <p>{l.podlozi}</p>
            <p>
              Před každou zakázkou se přijedeme podívat na přístup, sklon pozemku a šířku
              průjezdu. Podle toho vybíráme stroj – od minirypadla 3,5 t až po pásové rypadlo
              CAT T320 – a řekneme rovnou, co je reálné a za jakou cenu.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Služby, které {l.inName} zajišťujeme</h2>
          <p className="lead">Vyberte si, co potřebujete – u každé služby najdete postup i ceny.</p>
          <ul className="chip-row">
            {sluzbyDetail.map((s) => (
              <li key={s.slug}>
                <Link className="chip" href={"/sluzby/" + s.slug}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={l.faq} title={"Časté otázky – zemní práce " + l.name} />

      <section className="section">
        <div className="container">
          <h2>Pracujeme i v okolních obcích</h2>
          <p className="lead">
            Působíme v okruhu přibližně 25 km od Babic u Říčan, tedy po celém Praha-východ.
          </p>
          <ul className="chip-row">
            {okolniObce.map((x) => (
              <li key={x.slug}>
                <Link className="chip" href={"/zemni-prace/" + x.slug}>
                  {x.name} <span className="km">{x.km} km</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
