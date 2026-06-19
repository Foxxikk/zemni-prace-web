import PoptavkaForm from "@/components/PoptavkaForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Kontakt a poptávka",
  description:
    "Kontaktujte nás pro nezávaznou poptávku zemních a výkopových prací v okrese Praha-východ. Telefon, e-mail a poptávkový formulář.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <p className="breadcrumb">Úvod / Kontakt</p>
          <h1>Kontakt a nezávazná poptávka</h1>
          <p className="lead">
            Napište nám o svém projektu nebo zavolejte. Ozveme se do 24 hodin s dalšími informacemi
            i orientační cenou.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2>Poptávkový formulář</h2>
              <PoptavkaForm />
            </div>

            <div>
              <div className="contact-box">
                <h2 style={{ marginTop: 0 }}>Kontaktní údaje</h2>
                <dl>
                  <dt>Telefon</dt>
                  <dd><a href={site.phoneHref}>{site.phone}</a></dd>
                  <dt>E-mail</dt>
                  <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
                  <dt>Sídlo</dt>
                  <dd>{site.address}</dd>
                  <dt>IČO / DIČ</dt>
                  <dd>{site.ico} / {site.dic}</dd>
                  <dt>Působnost</dt>
                  <dd>{site.region}</dd>
                </dl>
              </div>

              <iframe
                className="map-embed"
                style={{ marginTop: 20 }}
                title="Mapa působnosti – Praha-východ"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=14.55%2C49.95%2C14.90%2C50.20&layer=mapnik"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
