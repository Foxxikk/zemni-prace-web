import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { site, technika } from "@/lib/site";
import { lokality } from "@/lib/lokality";
import { sluzbyDetail, getSluzba } from "@/lib/sluzbyDetail";

export function generateStaticParams() {
  return sluzbyDetail.map((s) => ({ sluzba: s.slug }));
}

export async function generateMetadata({ params }) {
  const { sluzba } = await params;
  const s = getSluzba(sluzba);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: "/sluzby/" + s.slug },
    openGraph: { type: "website", title: s.h1, description: s.metaDescription },
  };
}

export default async function SluzbaPage({ params }) {
  const { sluzba } = await params;
  const s = getSluzba(sluzba);
  if (!s) notFound();

  const stroje = technika.filter((t) => s.technika.includes(t.name));
  const dalsi = s.souvisi.map((x) => getSluzba(x)).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: s.title,
    description: s.metaDescription,
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
    areaServed: lokality.map((l) => ({ "@type": "City", name: l.name, addressCountry: "CZ" })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.title,
      itemListElement: s.obsah.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o },
      })),
    },
  };

  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs
            items={[{ name: "Služby", href: "/sluzby" }, { name: s.title }]}
          />
          <h1>{s.h1}</h1>
          <p className="lead">{s.intro}</p>
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
            <div>
              <h2>Co pro vás zajistíme</h2>
              <ul className="checklist" style={{ marginTop: 20 }}>
                {s.obsah.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Cena a technika</h3>
              <ul className="case-meta">
                <li>
                  <b>Sazba:</b> od {site.priceRange} za stroj i s obsluhou
                </li>
                <li>
                  <b>Doprava techniky:</b> jednorázově podle vzdálenosti
                </li>
                <li>
                  <b>Nástup:</b> obvykle do 1–3 dnů
                </li>
                <li>
                  <b>Působíme:</b> {site.region}
                </li>
              </ul>
              {stroje.length ? (
                <>
                  <p style={{ marginTop: 18, marginBottom: 8, fontWeight: 700 }}>
                    Na tuto práci používáme:
                  </p>
                  <ul className="link-list">
                    {stroje.map((t) => (
                      <li key={t.name}>{t.name} – {t.type}</li>
                    ))}
                  </ul>
                </>
              ) : null}
              <p style={{ marginTop: 18 }}>
                <Link className="btn btn-dark" href="/cenik">
                  Podrobný ceník
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Jak to u nás probíhá</h2>
          <ol className="steps">
            {s.postup.map((p) => (
              <li key={p.k}>
                <strong>{p.k}</strong>
                {p.v}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={s.faq} title={"Časté otázky – " + s.title.toLowerCase()} alt={false} />

      <section className="section section-alt">
        <div className="container">
          <h2>Kde tuto službu děláme</h2>
          <p className="lead">
            Vyberte svoji obec a podívejte se, co v ní nejčastěji řešíme.
          </p>
          <ul className="chip-row">
            {lokality.map((l) => (
              <li key={l.slug}>
                <Link className="chip" href={"/zemni-prace/" + l.slug}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Související služby</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {dalsi.map((d) => (
              <Link key={d.slug} className="card" href={"/sluzby/" + d.slug}>
                <div className="ico">▣</div>
                <h3>{d.title}</h3>
                <p>{d.intro}</p>
              </Link>
            ))}
          </div>
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
